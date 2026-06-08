import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "admin_session";
const SESSION_DAYS = 7;

function getSecret() {
  return process.env.ADMIN_SECRET || "c-font-travels-dev-secret-change-me";
}

function getPassword() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

function sign(data: string) {
  return crypto.createHmac("sha256", getSecret()).update(data).digest("base64url");
}

export function createSessionToken() {
  const payload = {
    exp: Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000,
  };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `${data}.${sign(data)}`;
}

export function verifySessionToken(token: string | undefined | null) {
  if (!token) return false;

  const [data, signature] = token.split(".");
  if (!data || !signature) return false;
  if (signature !== sign(data)) return false;

  try {
    const payload = JSON.parse(Buffer.from(data, "base64url").toString()) as {
      exp: number;
    };
    return payload.exp > Date.now();
  } catch {
    return false;
  }
}

export function verifyAdminPassword(password: string) {
  return password === getPassword();
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(COOKIE_NAME)?.value);
}

export async function requireAdmin() {
  const ok = await isAdminAuthenticated();
  if (!ok) {
    throw new Error("Unauthorized");
  }
}

export { COOKIE_NAME };
