import { images } from "@/lib/images";

export type BlogCategory =
  | "Destinations"
  | "Travel Tips"
  | "Transport"
  | "Planning";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: BlogCategory;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const blogCategories: { id: BlogCategory | "all"; label: string }[] = [
  { id: "all", label: "All Articles" },
  { id: "Destinations", label: "Destinations" },
  { id: "Travel Tips", label: "Travel Tips" },
  { id: "Transport", label: "Transport" },
  { id: "Planning", label: "Planning" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "darjeeling-travel-guide-from-siliguri",
    title: "Darjeeling Travel Guide from Siliguri",
    excerpt:
      "Planning a Darjeeling trip from Siliguri? Here is what to know about routes, best time to visit, sightseeing, and transport options.",
    image: images.packages.swiss,
    category: "Destinations",
    author: "C Font Travels Team",
    date: "May 28, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "bagdogra-airport-transfer-guide",
    title: "Bagdogra Airport Transfer Guide for Tourists",
    excerpt:
      "A practical guide to airport pick-up and drop services from Bagdogra to Darjeeling, Gangtok, Dooars, and nearby destinations.",
    image: images.services.flight,
    category: "Transport",
    author: "C Font Travels Team",
    date: "May 15, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "best-time-to-visit-sikkim",
    title: "Best Time to Visit Sikkim and Gangtok",
    excerpt:
      "Learn the best seasons for Sikkim travel, local sightseeing, and hill tours starting from Siliguri and North Bengal.",
    image: images.packages.kerala,
    category: "Destinations",
    author: "C Font Travels Team",
    date: "May 2, 2026",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "bhutan-travel-essentials-from-siliguri",
    title: "Bhutan Travel Essentials from Siliguri",
    excerpt:
      "Everything you need to know before planning a Bhutan trip from Siliguri — permits, routes, travel duration, and booking tips.",
    image: images.destinations.europe,
    category: "Planning",
    author: "C Font Travels Team",
    date: "April 20, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "dooars-wildlife-safari-guide",
    title: "Dooars Wildlife Safari Guide for First-Time Visitors",
    excerpt:
      "Explore the Dooars region with this guide to safari parks, best seasons, travel routes, and comfortable transport from Siliguri.",
    image: images.gallery.adventure,
    category: "Destinations",
    author: "C Font Travels Team",
    date: "April 8, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "njp-railway-station-transfer-guide",
    title: "NJP Railway Station Transfer Guide",
    excerpt:
      "Arriving at New Jalpaiguri Station? Here is how to arrange reliable transfers to Darjeeling, Gangtok, Kalimpong, and nearby hill destinations.",
    image: images.hero.flight,
    category: "Transport",
    author: "C Font Travels Team",
    date: "March 25, 2026",
    readTime: "5 min read",
    featured: false,
  },
];

export const blogHero = {
  title: "Travel Blog & Guides",
  description:
    "Destination guides, transport tips, and travel planning insights from C Font Travels — your local experts in Siliguri and North Bengal.",
  image: images.hero.scenic,
};

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, category: BlogCategory, limit = 3) {
  return blogPosts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, limit);
}
