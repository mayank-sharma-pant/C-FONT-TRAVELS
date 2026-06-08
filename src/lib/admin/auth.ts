import { cookies } from "next/headers";
import {
  COOKIE_NAME,
  SESSION_DAYS,
  createSessionToken,
  verifySessionToken,
} from "@/lib/admin/token";

function getPassword() {
  return process.env.ADMIN_PASSWORD || "admin123";
}

export function verifyAdminPassword(password: string) {
  return password === getPassword();
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, await createSessionToken(), {
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

export { COOKIE_NAME, createSessionToken, verifySessionToken };
