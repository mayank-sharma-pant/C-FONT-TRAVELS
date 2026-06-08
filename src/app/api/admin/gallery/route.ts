import type { GalleryImage } from "@/lib/data/gallery";
import { revalidatePublicContent } from "@/lib/admin/revalidate";
import { jsonError, jsonOk } from "@/lib/admin/api";
import {
  getStoredGalleryImages,
  saveStoredGalleryImages,
} from "@/lib/store/content";

export async function GET() {
  const images = await getStoredGalleryImages();
  return jsonOk(images);
}

export async function POST(request: Request) {
  const body = (await request.json()) as GalleryImage;
  const images = await getStoredGalleryImages();

  if (!body.src?.trim() || !body.alt?.trim()) {
    return jsonError("Image URL and alt text are required");
  }

  const nextId = images.reduce((max, item) => Math.max(max, item.id), 0) + 1;
  const image: GalleryImage = {
    id: body.id || nextId,
    src: body.src.trim(),
    alt: body.alt.trim(),
    category: body.category || "mountains",
  };

  images.unshift(image);
  await saveStoredGalleryImages(images);
  revalidatePublicContent();
  return jsonOk(image, 201);
}
