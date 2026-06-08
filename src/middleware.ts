import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/admin/auth";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get(COOKIE_NAME)?.value;
  const isAuthed = verifySessionToken(session);

  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!isAuthed) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (pathname === "/admin/login" && isAuthed) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (pathname.startsWith("/api/admin") && !pathname.startsWith("/api/admin/login")) {
    if (!isAuthed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
