import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { DeleteButton } from "@/components/admin/delete-button";
import { getStoredGalleryImages } from "@/lib/store/content";
import { Button } from "@/components/ui/button";

export default async function AdminGalleryPage() {
  const images = await getStoredGalleryImages();

  return (
    <div className="px-4 py-8 sm:px-8">
      <AdminPageHeader
        title="Gallery"
        description="Manage gallery photos shown on the website."
        action={
          <Button asChild>
            <Link href="/admin/gallery/new">Add Photo</Link>
          </Button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border/60 bg-cream/50">
            <tr>
              <th className="px-4 py-3 font-medium">Photo</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image) => (
              <tr key={image.id} className="border-b border-border/40 last:border-0">
                <td className="px-4 py-4">
                  <p className="font-medium text-navy">{image.alt}</p>
                  <p className="truncate text-xs text-muted-foreground">{image.src}</p>
                </td>
                <td className="px-4 py-4">{image.category}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/gallery/${image.id}/edit`}>Edit</Link>
                    </Button>
                    <DeleteButton
                      label={image.alt}
                      endpoint={`/api/admin/gallery/${image.id}`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
