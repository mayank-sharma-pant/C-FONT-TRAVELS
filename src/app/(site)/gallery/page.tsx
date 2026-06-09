import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { GalleryCta } from "@/components/gallery/gallery-cta";
import { galleryHero } from "@/lib/data/gallery";
import { getStoredGalleryImages } from "@/lib/store/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Trip and vehicle photos will be added here when available. For now, send an inquiry or call our Siliguri office.",
};

export default async function GalleryPage() {
  const images = await getStoredGalleryImages();

  return (
    <>
      <PageHero
        title={galleryHero.title}
        description={galleryHero.description}
        image={galleryHero.image}
        imageAlt="Scenic mountain landscape from a North Bengal tour"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <GalleryGrid images={images} />
      <GalleryCta />
    </>
  );
}
