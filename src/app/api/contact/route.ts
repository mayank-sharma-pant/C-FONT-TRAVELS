import { jsonError, jsonOk } from "@/lib/admin/api";
import { isEmailConfigured } from "@/lib/email/config";
import { sendEmail } from "@/lib/email/mailer";
import { buildContactEmail } from "@/lib/email/templates";

interface ContactBody {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!isEmailConfigured()) {
    return jsonError("Email service is not configured on the server", 503);
  }

  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return jsonError("Invalid request body", 400);
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name || !email || !subject || !message) {
    return jsonError("Name, email, subject, and message are required", 400);
  }

  if (!isValidEmail(email)) {
    return jsonError("Please provide a valid email address", 400);
  }

  const emailContent = buildContactEmail({
    name,
    email,
    phone,
    subject,
    message,
  });

  try {
    await sendEmail({
      ...emailContent,
      replyTo: email,
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return jsonError("Failed to send message. Please try again later.", 500);
  }

  return jsonOk({ success: true });
}
