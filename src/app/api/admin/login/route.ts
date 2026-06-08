import { setAdminSession, verifyAdminPassword } from "@/lib/admin/auth";
import { jsonError, jsonOk } from "@/lib/admin/api";

export async function POST(request: Request) {
  const body = (await request.json()) as { password?: string };

  if (!body.password || !verifyAdminPassword(body.password)) {
    return jsonError("Invalid password", 401);
  }

  await setAdminSession();
  return jsonOk({ success: true });
}
