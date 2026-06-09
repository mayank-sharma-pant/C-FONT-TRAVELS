import { images } from "@/lib/images";

export type GalleryCategory =
  | "all"
  | "mountains"
  | "adventure"
  | "group"
  | "cities"
  | "beaches"
  | "transport";

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "all">;
}

export const galleryHero = {
  title: "Travel Gallery",
  description:
    "Trip and vehicle photos will be added here as the business grows. For now, send an inquiry or call our Siliguri office to discuss routes and transport.",
  image: images.hero.scenic,
};

export const galleryEmptyMessage =
  "No photos uploaded yet. When you have real trip or vehicle images, add them through the admin panel or data/gallery.json.";

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "mountains", label: "Hill Destinations" },
  { id: "adventure", label: "Adventure" },
  { id: "group", label: "Group Tours" },
  { id: "cities", label: "City & Transfers" },
  { id: "beaches", label: "Leisure Travel" },
  { id: "transport", label: "Transport" },
];

/** Empty — add real trip photos when available */
export const galleryImages: GalleryImage[] = [];
