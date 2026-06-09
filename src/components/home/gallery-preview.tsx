import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ImageIcon } from "lucide-react";
import type { GalleryImage } from "@/lib/data/gallery";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";

interface GalleryPreviewProps {
  images: GalleryImage[];
}

export function GalleryPreview({ images }: GalleryPreviewProps) {
  if (images.length === 0) {
    return null;
  }

  const previewImages = images.slice(0, 6);

  return (
    <section className="section-padding bg-navy">
      <div className="container-wide">
        <SectionHeader
          variant="split"
          eyebrow="Gallery"
          title="Trip photos"
          description="Photos from trips and transfers we arrange."
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="accent" size="lg">
            <Link href="/gallery">
              View gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function GalleryEmptyNotice() {
  return (
    <section className="section-padding bg-sand/40">
      <div className="container-wide">
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border bg-white p-10 text-center">
          <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-4 font-display text-lg text-navy">Gallery coming soon</p>
          <p className="mt-2 text-sm text-muted-foreground">
            We have not uploaded trip photos yet. Call or send an inquiry to discuss
            routes and transport in the meantime.
          </p>
          <Button asChild variant="default" size="lg" className="mt-6">
            <Link href="/inquiry">Send inquiry</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
