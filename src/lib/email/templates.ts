function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;">${escapeHtml(value)}</td></tr>`;
}

function wrapHtml(title: string, rows: string) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1a1a1a;">
      <h2 style="margin:0 0 16px;">${escapeHtml(title)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">
        ${rows}
      </table>
    </div>
  `;
}

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export function buildContactEmail(payload: ContactEmailPayload) {
  const text = [
    "New contact form submission",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Subject: ${payload.subject}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = wrapHtml(
    "New Contact Form Submission",
    [
      row("Name", payload.name),
      row("Email", payload.email),
      row("Phone", payload.phone || "Not provided"),
      row("Subject", payload.subject),
      row("Message", payload.message),
    ].join("")
  );

  return {
    subject: `[Contact] ${payload.subject} — ${payload.name}`,
    text,
    html,
  };
}

export interface InquiryEmailPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  destination?: string;
  dates?: string;
  travelers?: string;
  travelType: string;
  budget: string;
  message?: string;
}

export function buildInquiryEmail(payload: InquiryEmailPayload) {
  const text = [
    "New travel inquiry",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Service: ${payload.service}`,
    `Destination: ${payload.destination || "Not specified"}`,
    `Travel dates: ${payload.dates || "Not specified"}`,
    `Travelers: ${payload.travelers || "Not specified"}`,
    `Travel type: ${payload.travelType}`,
    `Budget: ${payload.budget}`,
    "",
    "Additional details:",
    payload.message || "None",
  ].join("\n");

  const html = wrapHtml(
    "New Travel Inquiry",
    [
      row("Name", payload.name),
      row("Email", payload.email),
      row("Phone", payload.phone),
      row("Service", payload.service),
      row("Destination", payload.destination || "Not specified"),
      row("Travel dates", payload.dates || "Not specified"),
      row("Travelers", payload.travelers || "Not specified"),
      row("Travel type", payload.travelType),
      row("Budget", payload.budget),
      row("Additional details", payload.message || "None"),
    ].join("")
  );

  return {
    subject: `[Inquiry] ${payload.service} — ${payload.name}`,
    text,
    html,
  };
}
