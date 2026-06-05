import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/lib/data/content";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

export function GalleryPreview() {
  const previewImages = galleryImages.slice(0, 6);

  return (
    <section className="section-padding bg-navy">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Gallery"
          title="Travel Moments Across North Bengal"
          description="A glimpse into the journeys, hill views, group trips, and travel experiences we help create across North Bengal and beyond."
          light
        />

        <div className="columns-2 gap-4 space-y-4 md:columns-3">
          {previewImages.map((image, i) => (
            <div
              key={image.id}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div
                className={`relative overflow-hidden ${
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/40" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="accent" size="lg">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
