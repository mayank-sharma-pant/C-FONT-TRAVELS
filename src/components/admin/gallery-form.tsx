"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { GalleryImage } from "@/lib/data/gallery";
import { galleryCategories } from "@/lib/data/gallery";
import { AdminField, adminInputClassName } from "@/components/admin/admin-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GalleryFormProps {
  initialImage?: GalleryImage;
  mode: "create" | "edit";
}

export function GalleryForm({ initialImage, mode }: GalleryFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState<GalleryImage>(
    initialImage || {
      id: 0,
      src: "",
      alt: "",
      category: "mountains",
    }
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const url =
      mode === "create"
        ? "/api/admin/gallery"
        : `/api/admin/gallery/${initialImage?.id}`;
    const method = mode === "create" ? "POST" : "PUT";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image),
    });

    setLoading(false);

    if (!response.ok) {
      const data = (await response.json()) as { error?: string };
      setError(data.error || "Failed to save gallery photo.");
      return;
    }

    router.push("/admin/gallery");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
      <AdminField label="Image URL">
        <Input
          value={image.src}
          onChange={(e) => setImage({ ...image, src: e.target.value })}
          required
        />
      </AdminField>
      <AdminField label="Alt Text">
        <Input
          value={image.alt}
          onChange={(e) => setImage({ ...image, alt: e.target.value })}
          required
        />
      </AdminField>
      <AdminField label="Category">
        <select
          value={image.category}
          onChange={(e) =>
            setImage({
              ...image,
              category: e.target.value as GalleryImage["category"],
            })
          }
          className={adminInputClassName}
        >
          {galleryCategories
            .filter((item) => item.id !== "all")
            .map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
        </select>
      </AdminField>

      {error && <p className="text-sm text-destructive">{error}</p>}

      <div className="flex gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : mode === "create" ? "Add Photo" : "Save Changes"}
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/gallery">Cancel</Link>
        </Button>
      </div>
    </form>
  );
}
