import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { GalleryForm } from "@/components/admin/gallery-form";

export default function AdminNewGalleryPage() {
  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader title="Add Gallery Photo" />
      <GalleryForm mode="create" />
    </div>
  );
}
