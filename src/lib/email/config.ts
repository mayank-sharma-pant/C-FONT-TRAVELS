export interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
}

export function getEmailConfig(): EmailConfig | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT || 587),
    user,
    pass,
    from: process.env.SMTP_FROM || user,
    to: process.env.MAIL_TO || user,
  };
}

export function isEmailConfigured() {
  return getEmailConfig() !== null;
}
