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
    "Explore moments from our tours, transport services, and travel experiences across North Bengal, Sikkim, Darjeeling, Bhutan, and beyond.",
  image: images.gallery.mountains,
};

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All Photos" },
  { id: "mountains", label: "Hill Destinations" },
  { id: "adventure", label: "Adventure" },
  { id: "group", label: "Group Tours" },
  { id: "cities", label: "City & Transfers" },
  { id: "beaches", label: "Leisure Travel" },
  { id: "transport", label: "Transport" },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: images.gallery.mountains,
    alt: "Darjeeling hill views and tea garden landscapes",
    category: "mountains",
  },
  {
    id: 2,
    src: images.gallery.adventure,
    alt: "Sikkim mountain landscape and scenic travel routes",
    category: "mountains",
  },
  {
    id: 3,
    src: images.gallery.alps,
    alt: "Himalayan mountain scenery on a North Bengal tour",
    category: "mountains",
  },
  {
    id: 4,
    src: images.gallery.adventure,
    alt: "Dooars wildlife and forest adventure travel",
    category: "adventure",
  },
  {
    id: 5,
    src: images.destinations.kashmir,
    alt: "Scenic hill destination travel experience",
    category: "adventure",
  },
  {
    id: 6,
    src: images.gallery.group,
    alt: "Group tour travelers enjoying a coordinated trip",
    category: "group",
  },
  {
    id: 7,
    src: images.services.group,
    alt: "Family and group travel arrangements",
    category: "group",
  },
  {
    id: 8,
    src: images.gallery.travel,
    alt: "Road journey through North Bengal",
    category: "transport",
  },
  {
    id: 9,
    src: images.hero.road,
    alt: "Outstation transport and scenic highway travel",
    category: "transport",
  },
  {
    id: 10,
    src: images.services.flight,
    alt: "Airport transfer and flight travel coordination",
    category: "transport",
  },
  {
    id: 11,
    src: images.gallery.city,
    alt: "City travel and local transfer services",
    category: "cities",
  },
  {
    id: 12,
    src: images.destinations.dubai,
    alt: "International city travel destination",
    category: "cities",
  },
  {
    id: 13,
    src: images.gallery.beach,
    alt: "Leisure holiday travel destination",
    category: "beaches",
  },
  {
    id: 14,
    src: images.gallery.maldives,
    alt: "Relaxing beach and leisure travel experience",
    category: "beaches",
  },
  {
    id: 15,
    src: images.packages.kerala,
    alt: "Customized tour package travel experience",
    category: "mountains",
  },
  {
    id: 16,
    src: images.hero.scenic,
    alt: "Panoramic travel view across North Bengal hills",
    category: "mountains",
  },
];
