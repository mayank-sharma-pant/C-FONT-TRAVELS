import { revalidatePath } from "next/cache";

export function revalidatePublicContent() {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");
  revalidatePath("/gallery");
  revalidatePath("/destinations");
  revalidatePath("/packages");
  revalidatePath("/packages/[slug]", "page");
}
