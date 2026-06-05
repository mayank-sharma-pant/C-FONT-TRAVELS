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
    "Handcrafted itineraries for every travel style — adventure, family, luxury, honeymoon, and group journeys with transparent pricing and premium inclusions.",
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
    slug: "dubai-luxury-escape",
    name: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: 45999,
    priceDisplay: "₹45,999",
    image: images.packages.dubai,
    category: "luxury",
    highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise", "Gold Souk"],
    description:
      "Experience Dubai's opulence with premium accommodations, private transfers, and exclusive experiences.",
    featured: true,
  },
  {
    slug: "bali-honeymoon-retreat",
    name: "Bali Honeymoon Retreat",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 68999,
    priceDisplay: "₹68,999",
    image: images.packages.bali,
    category: "honeymoon",
    highlights: [
      "Private Villa",
      "Couple Spa",
      "Sunset Dinner",
      "Ubud Rice Terraces",
    ],
    description:
      "A romantic escape through Bali's most enchanting landscapes with intimate experiences for two.",
    featured: true,
  },
  {
    slug: "swiss-alps-adventure",
    name: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "8 Days / 7 Nights",
    price: 145999,
    priceDisplay: "₹1,45,999",
    image: images.packages.swiss,
    category: "adventure",
    highlights: ["Jungfraujoch", "Paragliding", "Glacier Walk", "Scenic Train"],
    description:
      "Thrilling alpine adventures through Switzerland's most breathtaking mountain landscapes.",
    featured: true,
  },
  {
    slug: "kerala-family-getaway",
    name: "Kerala Family Getaway",
    location: "Kerala, India",
    duration: "6 Days / 5 Nights",
    price: 24999,
    priceDisplay: "₹24,999",
    image: images.packages.kerala,
    category: "family",
    highlights: [
      "Houseboat Cruise",
      "Wildlife Safari",
      "Ayurveda Spa",
      "Beach Resort",
    ],
    description:
      "A perfect family vacation through Kerala's backwaters, hills, and coastal beauty.",
    featured: true,
  },
  {
    slug: "maldives-group-paradise",
    name: "Maldives Group Paradise",
    location: "Maldives",
    duration: "5 Days / 4 Nights",
    price: 79999,
    priceDisplay: "₹79,999",
    image: images.packages.maldives,
    category: "group",
    highlights: ["Snorkeling", "Island Hopping", "Beach BBQ", "Water Sports"],
    description:
      "An unforgettable group experience in the Maldives with shared adventures and private moments.",
  },
  {
    slug: "europe-grand-tour",
    name: "Europe Grand Tour",
    location: "Multi-City, Europe",
    duration: "12 Days / 11 Nights",
    price: 189999,
    priceDisplay: "₹1,89,999",
    image: images.packages.europe,
    category: "luxury",
    highlights: ["Paris", "Swiss Alps", "Venice", "Barcelona"],
    description:
      "A curated journey through Europe's most iconic cities with luxury stays and guided tours.",
  },
  {
    slug: "rajasthan-adventure-expedition",
    name: "Rajasthan Adventure Expedition",
    location: "Rajasthan, India",
    duration: "7 Days / 6 Nights",
    price: 32999,
    priceDisplay: "₹32,999",
    image: images.packages.rajasthan,
    category: "adventure",
    highlights: ["Desert Camping", "Fort Tours", "Camel Safari", "Folk Culture"],
    description:
      "Explore the royal heritage and desert landscapes of Rajasthan with thrilling off-road adventures.",
  },
  {
    slug: "thailand-family-fun",
    name: "Thailand Family Fun",
    location: "Bangkok & Phuket, Thailand",
    duration: "6 Days / 5 Nights",
    price: 54999,
    priceDisplay: "₹54,999",
    image: images.packages.thailand,
    category: "family",
    highlights: ["Theme Parks", "Island Hopping", "Temple Tours", "Beach Resort"],
    description:
      "A fun-filled family adventure combining Bangkok's culture with Phuket's pristine beaches.",
  },
  {
    slug: "maldives-honeymoon-bliss",
    name: "Maldives Honeymoon Bliss",
    location: "Maldives",
    duration: "5 Days / 4 Nights",
    price: 94999,
    priceDisplay: "₹94,999",
    image: images.packages.maldives,
    category: "honeymoon",
    highlights: [
      "Overwater Villa",
      "Private Dinner",
      "Couple Spa",
      "Sunset Cruise",
    ],
    description:
      "The ultimate romantic escape with overwater luxury, private dining, and turquoise lagoons.",
  },
  {
    slug: "goa-group-getaway",
    name: "Goa Group Getaway",
    location: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: 14999,
    priceDisplay: "₹14,999",
    image: images.packages.goa,
    category: "group",
    highlights: ["Beach Parties", "Water Sports", "Heritage Walk", "Seafood Tour"],
    description:
      "An affordable group escape to Goa's beaches, nightlife, and Portuguese charm.",
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
