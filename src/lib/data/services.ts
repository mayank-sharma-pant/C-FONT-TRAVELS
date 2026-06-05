import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Compass,
  Heart,
  Hotel,
  MapPinned,
  Plane,
  Stamp,
  Users,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  cta: {
    label: string;
    href: string;
  };
}

export const servicesHero = {
  title: "Our Services",
  description:
    "End-to-end travel solutions designed with flexibility in mind — from curated tour packages to visa support, corporate travel, and fully bespoke itineraries.",
  image:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85",
};

export const servicesIntro = {
  title: "One Partner for Every Journey",
  description:
    "Whether your business model evolves toward packages, bookings, or custom planning — our service architecture adapts to your needs without compromising quality.",
};

export const services: Service[] = [
  {
    slug: "tour-packages",
    title: "Tour Packages",
    tagline: "Curated journeys, expertly planned",
    description:
      "Explore handpicked domestic and international tour packages crafted by our travel experts. From weekend getaways to multi-country expeditions, every itinerary balances adventure, comfort, and cultural immersion.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80",
    icon: MapPinned,
    features: [
      "Domestic & international destinations",
      "Fixed and flexible departure dates",
      "Expert local guides included",
      "All-inclusive and customizable options",
      "Group and private tour formats",
    ],
    benefits: [
      "Save hours of research with pre-vetted itineraries",
      "Access exclusive partner rates on activities and stays",
      "Travel with confidence knowing every detail is handled",
    ],
    cta: { label: "Browse Packages", href: "/packages" },
  },
  {
    slug: "flight-booking",
    title: "Flight Booking",
    tagline: "Competitive fares, seamless booking",
    description:
      "Book domestic and international flights at competitive rates through our airline partnerships. We compare options across carriers to find the best routes, timings, and fares for your schedule and budget.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
    icon: Plane,
    features: [
      "Domestic & international routes",
      "Economy, business & first class",
      "Multi-city and open-jaw bookings",
      "Flexible date search",
      "Group and corporate fare options",
    ],
    benefits: [
      "Expert fare comparison saves you money",
      "Assistance with schedule changes and rebooking",
      "Integrated with your full travel itinerary",
    ],
    cta: { label: "Request a Quote", href: "/inquiry" },
  },
  {
    slug: "hotel-reservations",
    title: "Hotel Reservations",
    tagline: "Stays that match your style",
    description:
      "From boutique heritage properties to five-star luxury resorts, we source accommodations that align with your preferences and budget — with exclusive partner rates unavailable to the public.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80",
    icon: Hotel,
    features: [
      "Boutique, business & luxury properties",
      "Verified reviews and quality checks",
      "Early check-in & late checkout requests",
      "Special occasion arrangements",
      "Long-stay and apartment options",
    ],
    benefits: [
      "Handpicked properties — never random bookings",
      "Exclusive rates through global hotel partnerships",
      "24/7 support if issues arise during your stay",
    ],
    cta: { label: "Find Your Stay", href: "/inquiry" },
  },
  {
    slug: "visa-services",
    title: "Visa Services",
    tagline: "Documentation made simple",
    description:
      "Navigate complex visa requirements with expert guidance. Our documentation team handles application preparation, submission tracking, and follow-ups — so you can focus on planning the fun parts of your trip.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    icon: Stamp,
    features: [
      "Tourist, business & transit visas",
      "Document checklist & review",
      "Application submission support",
      "Status tracking & follow-ups",
      "Schengen, UK, US, UAE & more",
    ],
    benefits: [
      "97% first-time approval rate across major destinations",
      "Avoid costly mistakes and application rejections",
      "Save time with end-to-end documentation support",
    ],
    cta: { label: "Get Visa Help", href: "/inquiry" },
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    tagline: "Business travel, simplified",
    description:
      "Streamline your company's travel operations with dedicated account management, policy compliance, expense reporting, and cost optimization — whether you're sending one executive or an entire team.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    icon: Building2,
    features: [
      "Dedicated account manager",
      "Travel policy setup & compliance",
      "MICE & conference travel",
      "Expense reporting integration",
      "Priority support & rebooking",
    ],
    benefits: [
      "Reduce travel costs with negotiated corporate rates",
      "Single point of contact for all business travel",
      "Detailed reporting for finance and HR teams",
    ],
    cta: { label: "Corporate Inquiry", href: "/inquiry" },
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    tagline: "Memorable trips for every group",
    description:
      "Planning travel for families, friends, schools, or organizations? Our group tour specialists design cohesive itineraries with group discounts, coordinated logistics, and activities that keep everyone engaged.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
    icon: Users,
    features: [
      "Groups of 10 to 200+ travelers",
      "Custom group pricing & discounts",
      "Coordinated flights & accommodations",
      "Dedicated tour coordinator on-ground",
      "School, corporate & family groups",
    ],
    benefits: [
      "Volume discounts reduce per-person costs",
      "One itinerary, zero coordination headaches",
      "Flexible payment plans for large groups",
    ],
    cta: { label: "Plan a Group Trip", href: "/inquiry" },
  },
  {
    slug: "honeymoon-packages",
    title: "Honeymoon Packages",
    tagline: "Romance, perfectly planned",
    description:
      "Celebrate your love with a honeymoon designed for two. From overwater villas in the Maldives to vineyard escapes in Tuscany — we create intimate, luxurious experiences with thoughtful surprises along the way.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=80",
    icon: Heart,
    features: [
      "Romantic destinations worldwide",
      "Private transfers & premium stays",
      "Couple spa & dining experiences",
      "Surprise upgrades & special touches",
      "Flexible post-wedding scheduling",
    ],
    benefits: [
      "Stress-free planning during your busy wedding season",
      "Exclusive honeymoon rates at partner resorts",
      "Personal concierge for special requests",
    ],
    cta: { label: "Plan Your Honeymoon", href: "/inquiry" },
  },
  {
    slug: "customized-travel-planning",
    title: "Customized Travel Planning",
    tagline: "Your vision, our expertise",
    description:
      "For travelers who want something truly unique — our bespoke planning service builds entirely custom itineraries from scratch. Tell us your dreams, budget, and preferences; we'll design a one-of-a-kind journey.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80",
    icon: Compass,
    features: [
      "Fully bespoke itinerary design",
      "Multi-destination trip planning",
      "Special interest travel (food, art, wildlife)",
      "Budget-conscious to ultra-luxury options",
      "Dedicated travel designer assigned",
    ],
    benefits: [
      "A journey that exists nowhere else — built just for you",
      "Expert knowledge of off-the-beaten-path experiences",
      "Complete flexibility on dates, pace, and preferences",
    ],
    cta: { label: "Start Custom Planning", href: "/inquiry" },
  },
];

export const servicesProcess = [
  {
    step: "01",
    title: "Tell Us Your Vision",
    description: "Share your destination, dates, budget, and travel style through our inquiry form or a consultation call.",
  },
  {
    step: "02",
    title: "Receive Your Proposal",
    description: "Our experts craft a tailored plan with transparent pricing — no hidden fees, no surprises.",
  },
  {
    step: "03",
    title: "Refine & Confirm",
    description: "Collaborate with your travel designer to perfect every detail before we finalize bookings.",
  },
  {
    step: "04",
    title: "Travel with Confidence",
    description: "Enjoy 24/7 support before and during your trip. We're with you every step of the way.",
  },
];
