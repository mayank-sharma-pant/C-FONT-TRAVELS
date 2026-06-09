import { images } from "@/lib/images";
import { OWNER_TBU } from "@/lib/data/constants";

export const destinationsHero = {
  title: "Destinations",
  description:
    "Routes we commonly arrange from Siliguri — durations, seasons, and transport options are confirmed when you inquire.",
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
  /** Practical trip summary — avoid generic tourism marketing copy */
  description: string;
  image: string;
  /** Starting price guide — final quote confirmed on inquiry */
  price: string;
  duration: string;
  region: string;
  categories: DestinationCategory[];
  popular?: boolean;
  trending?: boolean;
  bestSeason?: string;
  travelStyle?: string;
  transportation?: string;
  highlights?: readonly string[];
  /** True when image is stock — replace with real destination photo */
  imageIsPlaceholder?: boolean;
}

export const destinationCategories: {
  id: DestinationCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "domestic", label: "Domestic" },
  { id: "mountains", label: "Hills" },
  { id: "adventure", label: "Nature / Wildlife" },
  { id: "international", label: "International" },
  { id: "city", label: "City" },
  { id: "beach", label: "Leisure" },
];

const regional = {
  darjeeling: {
    description:
      "Hill station circuit from Siliguri. Typical 2–3 night trips — sightseeing, tea garden stops, and Tiger Hill if timing allows.",
    bestSeason: "March–May and October–December (monsoon and winter road conditions vary)",
    travelStyle: "Family · weekend · small groups",
    transportation: "SUV or car from Siliguri (~3–4 hrs one way; hill road conditions apply)",
    highlights: ["Tiger Hill sunrise (weather permitting)", "Tea garden / market stops", "Local sightseeing — itinerary confirmed on inquiry"],
    image: images.region.hills,
    imageIsPlaceholder: true,
  },
  gangtok: {
    description:
      "Sikkim capital and nearby viewpoints. Permit formalities may apply — we advise when you inquire.",
    bestSeason: "March–May and October–December",
    travelStyle: "Family · sightseeing · moderate walking",
    transportation: "SUV from Siliguri via NH10 (~4–5 hrs; permits checked before travel)",
    highlights: ["MG Marg and local markets", "Monastery / viewpoint stops", "Route and permits discussed before booking"],
    image: images.region.hills,
    imageIsPlaceholder: true,
  },
  sikkim: {
    description:
      "Multi-day Sikkim routes (Gangtok base plus optional North Sikkim / Tsomgo on inquiry). Duration and permits vary.",
    bestSeason: "March–May and October–December (some routes closed in heavy monsoon / snow)",
    travelStyle: "Family · nature · 4–6 day circuits",
    transportation: "SUV with driver; route planned around permit windows and road reports",
    highlights: ["Custom circuit from Gangtok", "Lake / valley stops where permitted", OWNER_TBU + " — owner to add signature Sikkim stops"],
    image: images.region.lake,
    imageIsPlaceholder: true,
  },
  bhutan: {
    description:
      "Bhutan entry from Siliguri / Phuentsholing side. Visa, route, and vehicle rules apply — planned case by case.",
    bestSeason: "March–May and September–November (confirm entry rules before booking)",
    travelStyle: "Cultural · scenic drives · guided requirements apply",
    transportation: "Route and vehicle arranged per Bhutan entry regulations — discuss in office",
    highlights: ["Entry formalities guidance", "Scenic drive routes", OWNER_TBU + " — owner to list standard Bhutan packages"],
    image: images.region.forest,
    imageIsPlaceholder: true,
  },
  kalimpong: {
    description:
      "Shorter hill trip from Siliguri — suitable for 1–2 nights when you want a quieter town than Darjeeling.",
    bestSeason: "Year-round; clearest views October–December",
    travelStyle: "Weekend · relaxed · couples / families",
    transportation: "Car / SUV from Siliguri (~2.5–3 hrs)",
    highlights: ["Viewpoints and local markets", "Monastery visits", "Flexible day-wise plan"],
    image: images.region.hills,
    imageIsPlaceholder: true,
  },
  dooars: {
    description:
      "Plains and forest belt — wildlife sanctuaries, tea gardens, and river valleys. Good for nature-focused groups.",
    bestSeason: "October–March (park timings and closures vary)",
    travelStyle: "Wildlife · nature · group friendly",
    transportation: "SUV or traveller from Siliguri; park safari tickets separate",
    highlights: ["Forest / tea garden drives", "Wildlife sanctuary visits (timing dependent)", OWNER_TBU + " — owner to add preferred park routes"],
    image: images.region.forest,
    imageIsPlaceholder: true,
  },
  mirik: {
    description:
      "Short lake-town trip — often combined with Darjeeling or as a 1–2 night break from Siliguri.",
    bestSeason: "March–May and October–December",
    travelStyle: "Short break · family · low-intensity",
    transportation: "Car from Siliguri (~3 hrs via hill roads)",
    highlights: ["Sumendu Lake area", "Tea estate drives nearby", "Half-day local sightseeing"],
    image: images.region.lake,
    imageIsPlaceholder: true,
  },
  "north-bengal": {
    description:
      "Custom multi-stop route across Darjeeling hills, Dooars, or mixed circuits — built around your dates and vehicle size.",
    bestSeason: "Depends on stops — discussed when planning",
    travelStyle: "Custom · multi-destination · groups",
    transportation: "Vehicle and driver for full circuit; daily km limits agreed in quote",
    highlights: ["Tailored stop list", "Mixed hill + plains possible", "Quote based on route length"],
    image: images.region.highway,
    imageIsPlaceholder: true,
  },
} as const;

const onRequest = {
  description: "Available on inquiry — route, pricing, and partner coordination confirmed with our office.",
  bestSeason: OWNER_TBU,
  travelStyle: OWNER_TBU,
  transportation: "Arranged on inquiry from Siliguri or nearest major hub",
  highlights: [OWNER_TBU + " — owner to specify trip highlights"],
  imageIsPlaceholder: true,
};

export const allDestinations: Destination[] = [
  {
    slug: "darjeeling",
    name: "Darjeeling",
    price: "₹6,999",
    duration: "3 Days / 2 Nights",
    region: "West Bengal",
    categories: ["domestic", "mountains", "adventure"],
    popular: true,
    trending: true,
    ...regional.darjeeling,
  },
  {
    slug: "gangtok",
    name: "Gangtok",
    price: "₹8,499",
    duration: "4 Days / 3 Nights",
    region: "Sikkim",
    categories: ["domestic", "mountains", "city"],
    popular: true,
    trending: true,
    ...regional.gangtok,
  },
  {
    slug: "sikkim",
    name: "Sikkim",
    price: "₹9,999",
    duration: "5 Days / 4 Nights",
    region: "Sikkim",
    categories: ["domestic", "mountains", "adventure"],
    popular: true,
    trending: true,
    ...regional.sikkim,
  },
  {
    slug: "bhutan",
    name: "Bhutan",
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    region: "Bhutan",
    categories: ["international", "mountains", "adventure"],
    popular: true,
    trending: true,
    ...regional.bhutan,
  },
  {
    slug: "kalimpong",
    name: "Kalimpong",
    price: "₹5,499",
    duration: "2 Days / 1 Night",
    region: "West Bengal",
    categories: ["domestic", "mountains"],
    trending: true,
    ...regional.kalimpong,
  },
  {
    slug: "dooars",
    name: "Dooars",
    price: "₹7,499",
    duration: "3 Days / 2 Nights",
    region: "West Bengal",
    categories: ["domestic", "adventure"],
    trending: true,
    ...regional.dooars,
  },
  {
    slug: "mirik",
    name: "Mirik",
    price: "₹4,999",
    duration: "2 Days / 1 Night",
    region: "West Bengal",
    categories: ["domestic", "mountains"],
    trending: true,
    ...regional.mirik,
  },
  {
    slug: "north-bengal",
    name: "North Bengal",
    price: "₹8,999",
    duration: "5 Days / 4 Nights",
    region: "West Bengal",
    categories: ["domestic", "adventure", "mountains"],
    trending: true,
    ...regional["north-bengal"],
  },
  {
    slug: "goa",
    name: "Goa",
    price: "₹12,999",
    duration: "4 Days / 3 Nights",
    region: "India",
    categories: ["domestic", "beach"],
    ...onRequest,
    image: images.destinations.goa,
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    region: "India",
    categories: ["domestic", "mountains", "luxury"],
    ...onRequest,
    image: images.destinations.kashmir,
  },
  {
    slug: "dubai",
    name: "Dubai",
    price: "₹45,999",
    duration: "5 Days / 4 Nights",
    region: "UAE",
    categories: ["international", "city", "luxury"],
    ...onRequest,
    image: images.destinations.dubai,
  },
  {
    slug: "thailand",
    name: "Thailand",
    price: "₹18,999",
    duration: "5 Days / 4 Nights",
    region: "Thailand",
    categories: ["international", "beach", "city"],
    ...onRequest,
    image: images.destinations.thailand,
  },
];

const defaultsBySlug = Object.fromEntries(
  allDestinations.map((d) => [d.slug, d])
) as Record<string, Destination>;

/** Merge stored JSON destinations with practical defaults from code. */
export function enrichDestination(destination: Destination): Destination {
  const defaults = defaultsBySlug[destination.slug];
  if (!defaults) return destination;

  return {
    ...defaults,
    ...destination,
    bestSeason: destination.bestSeason || defaults.bestSeason,
    travelStyle: destination.travelStyle || defaults.travelStyle,
    transportation: destination.transportation || defaults.transportation,
    highlights: destination.highlights?.length
      ? destination.highlights
      : defaults.highlights,
    imageIsPlaceholder:
      destination.imageIsPlaceholder ?? defaults.imageIsPlaceholder,
  };
}

export const featuredDestinations = allDestinations.filter((d) => d.popular);

export const trendingDestinations = allDestinations.filter((d) => d.trending);
