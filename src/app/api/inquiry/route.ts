import { jsonError, jsonOk } from "@/lib/admin/api";
import { isEmailConfigured } from "@/lib/email/config";
import { sendEmail } from "@/lib/email/mailer";
import { buildInquiryEmail } from "@/lib/email/templates";

interface InquiryBody {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  destination?: string;
  dates?: string;
  travelers?: string;
  travelType?: string;
  budget?: string;
  message?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!isEmailConfigured()) {
    return jsonError("Email service is not configured on the server", 503);
  }

  let body: InquiryBody;

  try {
    body = (await request.json()) as InquiryBody;
  } catch {
    return jsonError("Invalid request body", 400);
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const service = body.service?.trim();
  const destination = body.destination?.trim();
  const dates = body.dates?.trim();
  const travelers = body.travelers?.trim();
  const travelType = body.travelType?.trim();
  const budget = body.budget?.trim();
  const message = body.message?.trim();

  if (!name || !email || !phone || !service || !travelType || !budget) {
    return jsonError("Please fill in all required fields", 400);
  }

  if (!isValidEmail(email)) {
    return jsonError("Please provide a valid email address", 400);
  }

  const emailContent = buildInquiryEmail({
    name,
    email,
    phone,
    service,
    destination,
    dates,
    travelers,
    travelType,
    budget,
    message,
  });

  try {
    await sendEmail({
      ...emailContent,
      replyTo: email,
    });
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return jsonError("Failed to submit inquiry. Please try again later.", 500);
  }

  return jsonOk({ success: true });
}
