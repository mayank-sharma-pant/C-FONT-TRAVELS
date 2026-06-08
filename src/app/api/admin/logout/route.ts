import { clearAdminSession } from "@/lib/admin/auth";
import { jsonOk } from "@/lib/admin/api";

export async function POST() {
  await clearAdminSession();
  return jsonOk({ success: true });
}
