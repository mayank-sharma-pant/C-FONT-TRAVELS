"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { GalleryImage, GalleryCategory } from "@/lib/data/gallery";
import {
  galleryCategories,
} from "@/lib/data/gallery";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images: galleryImages }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Photo Collection"
            title="Moments from Our Journeys"
            description="Browse travel photos from hill tours, group trips, transport services, and destination experiences across our service areas."
            light
            className="mb-10"
          />

          <div className="mb-10 flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-gold text-navy"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
              {filtered.map((image, i) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl text-left"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      i % 4 === 0 ? "aspect-[3/4]" : "aspect-square"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/40" />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/20 p-12 text-center">
              <p className="font-display text-xl text-white">No photos in this category</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-24 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
            aria-label="Close gallery preview"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative max-h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <div className="bg-navy/90 px-6 py-4">
              <p className="text-sm text-white/90">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
