import { images } from "@/lib/images";

export const galleryImages = [
  {
    id: 1,
    src: images.gallery.beach,
    alt: "Tropical beach paradise",
    category: "beaches",
  },
  {
    id: 2,
    src: images.gallery.mountains,
    alt: "Mountain peak at sunrise",
    category: "mountains",
  },
  {
    id: 3,
    src: images.gallery.city,
    alt: "City skyline at night",
    category: "cities",
  },
  {
    id: 4,
    src: images.gallery.travel,
    alt: "International travel adventure",
    category: "international",
  },
  {
    id: 5,
    src: images.gallery.group,
    alt: "Group travel friends",
    category: "group",
  },
  {
    id: 6,
    src: images.gallery.adventure,
    alt: "Adventure hiking trail",
    category: "adventure",
  },
  {
    id: 7,
    src: images.gallery.maldives,
    alt: "Maldives overwater bungalow",
    category: "beaches",
  },
  {
    id: 8,
    src: images.gallery.alps,
    alt: "Alpine mountain landscape",
    category: "mountains",
  },
];

export const blogPosts = [
  {
    slug: "ultimate-bali-travel-guide-2026",
    title: "The Ultimate Bali Travel Guide for 2026",
    excerpt:
      "Discover the best time to visit, must-see temples, hidden beaches, and local experiences that make Bali unforgettable.",
    image: images.blog.bali,
    category: "Destinations",
    author: "Meera Patel",
    date: "May 28, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "visa-tips-schengen-application",
    title: "Essential Tips for a Smooth Schengen Visa Application",
    excerpt:
      "Navigate the Schengen visa process with confidence. Our experts share documentation checklists and common pitfalls to avoid.",
    image: images.blog.visa,
    category: "Travel Tips",
    author: "Rajesh Kumar",
    date: "May 15, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "luxury-honeymoon-destinations",
    title: "Top 10 Luxury Honeymoon Destinations for Couples",
    excerpt:
      "From overwater villas in the Maldives to romantic châteaux in France — curated picks for an unforgettable honeymoon.",
    image: images.blog.honeymoon,
    category: "Honeymoon",
    author: "Anita Desai",
    date: "May 2, 2026",
    readTime: "10 min read",
    featured: false,
  },
];
