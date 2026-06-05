import { images } from "@/lib/images";

export const destinationsHero = {
  title: "Destinations",
  description:
    "Discover handpicked destinations across the globe — from tropical beaches and alpine peaks to vibrant cities and cultural wonders.",
  image: images.hero.road,
};

export type DestinationCategory =
  | "international"
  | "domestic"
  | "beach"
  | "mountains"
  | "city"
  | "adventure"
  | "luxury";

export interface Destination {
  slug: string;
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  region: string;
  categories: DestinationCategory[];
  popular?: boolean;
  trending?: boolean;
}

export const destinationCategories: {
  id: DestinationCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "international", label: "International" },
  { id: "domestic", label: "Domestic" },
  { id: "beach", label: "Beach" },
  { id: "mountains", label: "Mountains" },
  { id: "city", label: "City" },
  { id: "adventure", label: "Adventure" },
  { id: "luxury", label: "Luxury" },
];

export const allDestinations: Destination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    description:
      "Luxury desert safaris, iconic skylines, and world-class shopping experiences.",
    image: images.destinations.dubai,
    price: "₹45,999",
    duration: "5 Days / 4 Nights",
    region: "Middle East",
    categories: ["international", "city", "luxury", "adventure"],
    popular: true,
    trending: true,
  },
  {
    slug: "bali",
    name: "Bali",
    description:
      "Tropical paradise with ancient temples, rice terraces, and pristine beaches.",
    image: images.destinations.bali,
    price: "₹52,999",
    duration: "6 Days / 5 Nights",
    region: "Southeast Asia",
    categories: ["international", "beach", "adventure"],
    popular: true,
    trending: true,
  },
  {
    slug: "maldives",
    name: "Maldives",
    description:
      "Overwater villas, crystal-clear lagoons, and unparalleled romantic escapes.",
    image: images.destinations.maldives,
    price: "₹89,999",
    duration: "4 Days / 3 Nights",
    region: "Indian Ocean",
    categories: ["international", "beach", "luxury"],
    popular: true,
  },
  {
    slug: "europe",
    name: "Europe",
    description:
      "Historic cities, alpine adventures, and cultural treasures across the continent.",
    image: images.destinations.europe,
    price: "₹1,25,999",
    duration: "10 Days / 9 Nights",
    region: "Europe",
    categories: ["international", "city", "mountains", "luxury"],
    popular: true,
    trending: true,
  },
  {
    slug: "thailand",
    name: "Thailand",
    description:
      "Vibrant street life, golden temples, and idyllic island getaways.",
    image: images.destinations.thailand,
    price: "₹38,999",
    duration: "5 Days / 4 Nights",
    region: "Southeast Asia",
    categories: ["international", "beach", "city", "adventure"],
    trending: true,
  },
  {
    slug: "singapore",
    name: "Singapore",
    description:
      "Futuristic gardens, diverse cuisine, and family-friendly attractions.",
    image: images.destinations.singapore,
    price: "₹42,999",
    duration: "4 Days / 3 Nights",
    region: "Southeast Asia",
    categories: ["international", "city"],
    trending: true,
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    description:
      "Heaven on earth with snow-capped peaks, serene lakes, and houseboats.",
    image: images.destinations.kashmir,
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    region: "India",
    categories: ["domestic", "mountains", "adventure"],
    trending: true,
  },
  {
    slug: "goa",
    name: "Goa",
    description:
      "Sun-kissed beaches, Portuguese heritage, and vibrant nightlife.",
    image: images.destinations.goa,
    price: "₹12,999",
    duration: "4 Days / 3 Nights",
    region: "India",
    categories: ["domestic", "beach"],
    trending: true,
  },
];

export const featuredDestinations = allDestinations.filter((d) => d.popular);

export const trendingDestinations = allDestinations.filter((d) => d.trending);
