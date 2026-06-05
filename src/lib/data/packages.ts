import { images } from "@/lib/images";

export type PackageCategory =
  | "adventure"
  | "family"
  | "luxury"
  | "honeymoon"
  | "group";

export type PackageSortOption =
  | "popular"
  | "price-asc"
  | "price-desc"
  | "name-asc";

export interface TourPackage {
  slug: string;
  name: string;
  location: string;
  duration: string;
  price: number;
  priceDisplay: string;
  image: string;
  category: PackageCategory;
  highlights: string[];
  description: string;
  featured?: boolean;
}

export const packagesHero = {
  title: "Tour Packages",
  description:
    "Explore our tour packages for Darjeeling, Sikkim, Gangtok, Bhutan, Dooars, and more — with reliable transport, local expertise, and customizable travel options.",
  image: images.hero.packages,
};

export const packageCategories: {
  id: PackageCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All Packages" },
  { id: "adventure", label: "Adventure Tours" },
  { id: "family", label: "Family Tours" },
  { id: "luxury", label: "Luxury Tours" },
  { id: "honeymoon", label: "Honeymoon Tours" },
  { id: "group", label: "Group Tours" },
];

export const sortOptions: { id: PackageSortOption; label: string }[] = [
  { id: "popular", label: "Most Popular" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "name-asc", label: "Name: A to Z" },
];

export const tourPackages: TourPackage[] = [
  {
    slug: "darjeeling-tea-hills-tour",
    name: "Darjeeling Tea Hills Tour",
    location: "Darjeeling, West Bengal",
    duration: "3 Days / 2 Nights",
    price: 6999,
    priceDisplay: "₹6,999",
    image: images.packages.swiss,
    category: "family",
    highlights: ["Tiger Hill", "Batasia Loop", "Tea Gardens", "Mall Road"],
    description:
      "A classic Darjeeling getaway covering sunrise views, local sightseeing, tea estates, and comfortable travel from Siliguri.",
    featured: true,
  },
  {
    slug: "gangtok-sikkim-explorer",
    name: "Gangtok & Sikkim Explorer",
    location: "Gangtok, Sikkim",
    duration: "4 Days / 3 Nights",
    price: 8499,
    priceDisplay: "₹8,499",
    image: images.packages.kerala,
    category: "family",
    highlights: ["MG Marg", "Monasteries", "Tsomgo Lake", "Local Sightseeing"],
    description:
      "Explore Gangtok and nearby Sikkim attractions with planned sightseeing, transport, and flexible customization options.",
    featured: true,
  },
  {
    slug: "bhutan-gateway-package",
    name: "Bhutan Gateway Package",
    location: "Bhutan",
    duration: "5 Days / 4 Nights",
    price: 18999,
    priceDisplay: "₹18,999",
    image: images.packages.europe,
    category: "adventure",
    highlights: ["Thimphu", "Paro", "Dzongs", "Scenic Valleys"],
    description:
      "A curated Bhutan tour package with cultural sightseeing, mountain landscapes, and coordinated travel arrangements.",
    featured: true,
  },
  {
    slug: "dooars-wildlife-safari",
    name: "Dooars Wildlife Safari",
    location: "Dooars, West Bengal",
    duration: "3 Days / 2 Nights",
    price: 7499,
    priceDisplay: "₹7,499",
    image: images.packages.rajasthan,
    category: "adventure",
    highlights: ["Wildlife Zones", "Forest Drives", "River Views", "Nature Trails"],
    description:
      "Experience the natural beauty and wildlife of Dooars with a compact, adventure-focused tour package.",
    featured: true,
  },
  {
    slug: "kalimpong-heritage-tour",
    name: "Kalimpong Heritage Tour",
    location: "Kalimpong, West Bengal",
    duration: "2 Days / 1 Night",
    price: 5499,
    priceDisplay: "₹5,499",
    image: images.packages.swiss,
    category: "family",
    highlights: ["Deolo Hill", "Monasteries", "Flower Nurseries", "Viewpoints"],
    description:
      "A short and refreshing Kalimpong tour ideal for weekend travelers and peaceful hill getaways.",
  },
  {
    slug: "mirik-lake-retreat",
    name: "Mirik Lake Retreat",
    location: "Mirik, West Bengal",
    duration: "2 Days / 1 Night",
    price: 4999,
    priceDisplay: "₹4,999",
    image: images.packages.kerala,
    category: "honeymoon",
    highlights: ["Sumendu Lake", "Boating", "Tea Gardens", "Scenic Walks"],
    description:
      "A relaxing Mirik package perfect for couples, families, and short leisure trips in the hills.",
  },
  {
    slug: "north-bengal-circuit",
    name: "North Bengal Circuit",
    location: "North Bengal",
    duration: "5 Days / 4 Nights",
    price: 8999,
    priceDisplay: "₹8,999",
    image: images.packages.rajasthan,
    category: "group",
    highlights: ["Multi-Stop Route", "Hill Views", "Local Culture", "Flexible Stops"],
    description:
      "A flexible North Bengal tour covering multiple destinations with transport and sightseeing support.",
  },
  {
    slug: "goa-beach-getaway",
    name: "Goa Beach Getaway",
    location: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: 12999,
    priceDisplay: "₹12,999",
    image: images.packages.goa,
    category: "family",
    highlights: ["Beach Visits", "Leisure Time", "Local Sightseeing", "Group Friendly"],
    description:
      "A refreshing Goa holiday package for families and groups seeking a beachside break.",
  },
  {
    slug: "kashmir-valley-tour",
    name: "Kashmir Valley Tour",
    location: "Kashmir, India",
    duration: "5 Days / 4 Nights",
    price: 18999,
    priceDisplay: "₹18,999",
    image: images.packages.swiss,
    category: "luxury",
    highlights: ["Srinagar", "Gardens", "Scenic Valleys", "Leisure Stays"],
    description:
      "Discover the beauty of Kashmir with a well-planned valley tour for families and holiday travelers.",
  },
  {
    slug: "dubai-city-escape",
    name: "Dubai City Escape",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: 45999,
    priceDisplay: "₹45,999",
    image: images.packages.dubai,
    category: "luxury",
    highlights: ["City Tour", "Desert Safari", "Shopping", "Modern Landmarks"],
    description:
      "An international Dubai holiday package with city experiences, leisure time, and premium travel planning support.",
  },
];

export const categoryLabels: Record<PackageCategory, string> = {
  adventure: "Adventure Tours",
  family: "Family Tours",
  luxury: "Luxury Tours",
  honeymoon: "Honeymoon Tours",
  group: "Group Tours",
};

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return tourPackages.find((pkg) => pkg.slug === slug);
}

export function getRelatedPackages(
  slug: string,
  category: PackageCategory,
  limit = 3
): TourPackage[] {
  return tourPackages
    .filter((pkg) => pkg.slug !== slug && pkg.category === category)
    .slice(0, limit);
}
