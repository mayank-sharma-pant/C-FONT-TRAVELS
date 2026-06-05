export type PackageCategory =
  | "adventure"
  | "family"
  | "luxury"
  | "honeymoon"
  | "group";

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
}

export const tourPackages: TourPackage[] = [
  {
    slug: "dubai-luxury-escape",
    name: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: 45999,
    priceDisplay: "₹45,999",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80",
    category: "luxury",
    highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise", "Gold Souk"],
    description:
      "Experience Dubai's opulence with premium accommodations, private transfers, and exclusive experiences.",
  },
  {
    slug: "bali-honeymoon-retreat",
    name: "Bali Honeymoon Retreat",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 68999,
    priceDisplay: "₹68,999",
    image: "https://images.unsplash.com/photo-1537996195421-7ca854e8439e?w=900&q=80",
    category: "honeymoon",
    highlights: ["Private Villa", "Couple Spa", "Sunset Dinner", "Ubud Rice Terraces"],
    description:
      "A romantic escape through Bali's most enchanting landscapes with intimate experiences for two.",
  },
  {
    slug: "swiss-alps-adventure",
    name: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "8 Days / 7 Nights",
    price: 145999,
    priceDisplay: "₹1,45,999",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f4d99b9e?w=900&q=80",
    category: "adventure",
    highlights: ["Jungfraujoch", "Paragliding", "Glacier Walk", "Scenic Train"],
    description:
      "Thrilling alpine adventures through Switzerland's most breathtaking mountain landscapes.",
  },
  {
    slug: "kerala-family-getaway",
    name: "Kerala Family Getaway",
    location: "Kerala, India",
    duration: "6 Days / 5 Nights",
    price: 24999,
    priceDisplay: "₹24,999",
    image: "https://images.unsplash.com/photo-1602216050306-6972851a9022?w=900&q=80",
    category: "family",
    highlights: ["Houseboat Cruise", "Wildlife Safari", "Ayurveda Spa", "Beach Resort"],
    description:
      "A perfect family vacation through Kerala's backwaters, hills, and coastal beauty.",
  },
  {
    slug: "maldives-group-paradise",
    name: "Maldives Group Paradise",
    location: "Maldives",
    duration: "5 Days / 4 Nights",
    price: 79999,
    priceDisplay: "₹79,999",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1467269209834-ffa99325fdb0?w=900&q=80",
    category: "luxury",
    highlights: ["Paris", "Swiss Alps", "Venice", "Barcelona"],
    description:
      "A curated journey through Europe's most iconic cities with luxury stays and guided tours.",
  },
];

export const categoryLabels: Record<PackageCategory, string> = {
  adventure: "Adventure Tours",
  family: "Family Tours",
  luxury: "Luxury Tours",
  honeymoon: "Honeymoon Tours",
  group: "Group Tours",
};
