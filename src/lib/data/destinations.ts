import { images } from "@/lib/images";

export const destinationsHero = {
  title: "Destinations",
  description:
    "Explore our most popular travel destinations across North Bengal, Sikkim, Darjeeling, Bhutan, and selected domestic and international getaways.",
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
    slug: "darjeeling",
    name: "Darjeeling",
    description:
      "The Queen of Hills — famous for tea gardens, Tiger Hill sunrise, toy train rides, and panoramic Kanchenjunga views.",
    image: images.destinations.kashmir,
    price: "₹6,999",
    duration: "3 Days / 2 Nights",
    region: "West Bengal",
    categories: ["domestic", "mountains", "adventure"],
    popular: true,
    trending: true,
  },
  {
    slug: "gangtok",
    name: "Gangtok",
    description:
      "Sikkim's vibrant capital with monasteries, mountain views, local culture, and access to scenic nearby attractions.",
    image: images.destinations.europe,
    price: "₹8,499",
    duration: "4 Days / 3 Nights",
    region: "Sikkim",
    categories: ["domestic", "mountains", "city"],
    popular: true,
    trending: true,
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    description:
      "A breathtaking Himalayan destination with lakes, monasteries, valleys, adventure spots, and peaceful mountain landscapes.",
    image: images.destinations.kashmir,
    price: "₹9,999",
    duration: "5 Days / 4 Nights",
    region: "Sikkim",
    categories: ["domestic", "mountains", "adventure"],
    popular: true,
    trending: true,
  },
  {
    slug: "bhutan",
    name: "Bhutan",
    description:
      "Discover the Land of Happiness with dzongs, mountain scenery, cultural heritage, and serene Himalayan charm.",
    image: images.destinations.europe,
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    region: "Bhutan",
    categories: ["international", "mountains", "adventure"],
    popular: true,
    trending: true,
  },
  {
    slug: "kalimpong",
    name: "Kalimpong",
    description:
      "A peaceful hill town known for monasteries, flower nurseries, viewpoints, and relaxed mountain getaways.",
    image: images.destinations.kashmir,
    price: "₹5,499",
    duration: "2 Days / 1 Night",
    region: "West Bengal",
    categories: ["domestic", "mountains"],
    trending: true,
  },
  {
    slug: "dooars",
    name: "Dooars",
    description:
      "Wildlife, tea gardens, river valleys, and forest adventures in one of North Bengal's most nature-rich regions.",
    image: images.destinations.thailand,
    price: "₹7,499",
    duration: "3 Days / 2 Nights",
    region: "West Bengal",
    categories: ["domestic", "adventure"],
    trending: true,
  },
  {
    slug: "mirik",
    name: "Mirik",
    description:
      "A charming hill destination centered around Sumendu Lake, tea estates, boating, and quiet scenic beauty.",
    image: images.destinations.goa,
    price: "₹4,999",
    duration: "2 Days / 1 Night",
    region: "West Bengal",
    categories: ["domestic", "mountains"],
    trending: true,
  },
  {
    slug: "north-bengal",
    name: "North Bengal",
    description:
      "Explore the diverse beauty of North Bengal with hill towns, forests, tea gardens, and cultural experiences.",
    image: images.destinations.thailand,
    price: "₹8,999",
    duration: "5 Days / 4 Nights",
    region: "West Bengal",
    categories: ["domestic", "adventure", "mountains"],
    trending: true,
  },
  {
    slug: "goa",
    name: "Goa",
    description:
      "Sun, sand, beaches, and leisure travel for families and groups looking for a refreshing holiday escape.",
    image: images.destinations.goa,
    price: "₹12,999",
    duration: "4 Days / 3 Nights",
    region: "India",
    categories: ["domestic", "beach"],
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    description:
      "Snowy peaks, serene lakes, houseboats, and unforgettable landscapes in India's paradise destination.",
    image: images.destinations.kashmir,
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    region: "India",
    categories: ["domestic", "mountains", "luxury"],
  },
  {
    slug: "dubai",
    name: "Dubai",
    description:
      "Modern city experiences, desert safaris, luxury shopping, and iconic landmarks in the UAE.",
    image: images.destinations.dubai,
    price: "₹45,999",
    duration: "5 Days / 4 Nights",
    region: "UAE",
    categories: ["international", "city", "luxury"],
  },
  {
    slug: "thailand",
    name: "Thailand",
    description:
      "A popular international getaway with beaches, temples, vibrant cities, and memorable holiday experiences.",
    image: images.destinations.thailand,
    price: "₹38,999",
    duration: "5 Days / 4 Nights",
    region: "Thailand",
    categories: ["international", "beach", "city"],
  },
];

export const featuredDestinations = allDestinations.filter((d) => d.popular);

export const trendingDestinations = allDestinations.filter((d) => d.trending);
