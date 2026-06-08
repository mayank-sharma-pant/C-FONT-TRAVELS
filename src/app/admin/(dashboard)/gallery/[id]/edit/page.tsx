import { notFound } from "next/navigation";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { GalleryForm } from "@/components/admin/gallery-form";
import { getStoredGalleryImages } from "@/lib/store/content";

interface EditGalleryPageProps {
  params: Promise<{ id: string }>;
}

export default async function AdminEditGalleryPage({ params }: EditGalleryPageProps) {
  const { id } = await params;
  const images = await getStoredGalleryImages();
  const image = images.find((item) => item.id === Number(id));

  if (!image) notFound();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader title="Edit Gallery Photo" />
      <GalleryForm mode="edit" initialImage={image} />
    </div>
  );
}
