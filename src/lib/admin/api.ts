import { NextResponse } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/admin/token";

export function unauthorizedResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function requireAdminRequest(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  const token = match?.[1];

  if (!(await verifySessionToken(token))) {
    return unauthorizedResponse();
  }

  return null;
}

export function jsonOk<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}
