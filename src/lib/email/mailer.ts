import nodemailer from "nodemailer";
import { getEmailConfig } from "@/lib/email/config";

interface SendEmailOptions {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  to?: string;
}

export async function sendEmail(options: SendEmailOptions) {
  const config = getEmailConfig();

  if (!config) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local"
    );
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });

  await transporter.sendMail({
    from: `"C Font Travels" <${config.from}>`,
    to: options.to || config.to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });
}
