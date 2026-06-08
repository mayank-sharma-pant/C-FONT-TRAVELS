import type { GalleryImage } from "@/lib/data/gallery";
import { revalidatePublicContent } from "@/lib/admin/revalidate";
import { jsonError, jsonOk } from "@/lib/admin/api";
import {
  getStoredGalleryImages,
  saveStoredGalleryImages,
} from "@/lib/store/content";

interface RouteProps {
  params: Promise<{ id: string }>;
}

export async function PUT(request: Request, { params }: RouteProps) {
  const { id } = await params;
  const imageId = Number(id);
  const body = (await request.json()) as GalleryImage;
  const images = await getStoredGalleryImages();
  const index = images.findIndex((item) => item.id === imageId);

  if (index === -1) {
    return jsonError("Gallery item not found", 404);
  }

  images[index] = {
    ...images[index],
    ...body,
    id: imageId,
    src: body.src?.trim() || images[index].src,
    alt: body.alt?.trim() || images[index].alt,
  };

  await saveStoredGalleryImages(images);
  revalidatePublicContent();
  return jsonOk(images[index]);
}

export async function DELETE(_request: Request, { params }: RouteProps) {
  const { id } = await params;
  const imageId = Number(id);
  const images = await getStoredGalleryImages();
  const filtered = images.filter((item) => item.id !== imageId);

  if (filtered.length === images.length) {
    return jsonError("Gallery item not found", 404);
  }

  await saveStoredGalleryImages(filtered);
  revalidatePublicContent();
  return jsonOk({ success: true });
}
