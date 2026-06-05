import { images } from "@/lib/images";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface PackageDetail {
  overview: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  accommodation: {
    title: string;
    description: string;
    hotels: string[];
  };
  gallery: string[];
  faqs: { question: string; answer: string }[];
}

export const packageDetails: Record<string, PackageDetail> = {
  "darjeeling-tea-hills-tour": {
    overview: [
      "Experience the charm of Darjeeling with this compact hill tour covering sunrise views, tea gardens, local markets, and iconic sightseeing points.",
      "Ideal for families, couples, and first-time visitors looking for a comfortable trip from Siliguri with reliable transport and local planning support.",
    ],
    itinerary: [
      { day: 1, title: "Siliguri to Darjeeling", description: "Depart from Siliguri and arrive in Darjeeling. Evening leisure at Mall Road." },
      { day: 2, title: "Darjeeling Sightseeing", description: "Early morning Tiger Hill visit, Batasia Loop, Ghoom Monastery, and tea garden stop." },
      { day: 3, title: "Return Journey", description: "Morning leisure and return transfer to Siliguri." },
    ],
    included: ["Transport from Siliguri", "Hotel accommodation", "Basic sightseeing", "Driver assistance", "Trip coordination"],
    excluded: ["Personal expenses", "Entry tickets not mentioned", "Meals unless specified", "Travel insurance"],
    accommodation: {
      title: "Comfortable Hill Stay",
      description: "Standard to deluxe hotel options in Darjeeling based on package selection and availability.",
      hotels: ["Partner hotels in Darjeeling town and nearby areas"],
    },
    gallery: [images.packageGallery.default1, images.packageGallery.default2, images.packages.swiss],
    faqs: [
      { question: "Can this package start from Bagdogra Airport?", answer: "Yes, airport pickup can be arranged on request with adjusted pricing." },
      { question: "Is the package customizable?", answer: "Yes, duration, hotel category, and sightseeing can be customized." },
    ],
  },
  "gangtok-sikkim-explorer": {
    overview: [
      "Discover Gangtok and nearby Sikkim highlights with a well-paced itinerary designed for comfortable travel and scenic experiences.",
      "Perfect for families and groups wanting a guided introduction to Sikkim's capital and surrounding attractions.",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Gangtok", description: "Transfer from Siliguri/NJP and check-in. Evening at MG Marg." },
      { day: 2, title: "Local Sightseeing", description: "Visit monasteries, viewpoints, and key city attractions." },
      { day: 3, title: "Excursion Day", description: "Optional Tsomgo Lake / Baba Mandir excursion subject to permits and weather." },
      { day: 4, title: "Departure", description: "Return transfer to Siliguri or onward destination." },
    ],
    included: ["Transport", "Hotel stay", "Sightseeing coordination", "Permit guidance where applicable"],
    excluded: ["Permit charges if applicable", "Meals unless mentioned", "Personal expenses", "Pony ride / optional activities"],
    accommodation: {
      title: "Gangtok Hotel Stay",
      description: "Comfortable hotels in Gangtok selected based on budget and availability.",
      hotels: ["Standard and deluxe partner properties in Gangtok"],
    },
    gallery: [images.packageGallery.bali1, images.packageGallery.bali2, images.packages.kerala],
    faqs: [
      { question: "Are permits included?", answer: "Permit assistance is included; permit fees may apply separately for certain routes." },
      { question: "Can Tsomgo Lake be added?", answer: "Yes, it can be included based on season, permit availability, and vehicle type." },
    ],
  },
};

const defaultDetail: PackageDetail = {
  overview: [
    "This package is designed by C Font Travels to offer a comfortable and well-coordinated travel experience with reliable transport and local planning support.",
    "Ideal for travelers looking for a professionally managed trip with flexible customization options based on route, duration, and budget.",
  ],
  itinerary: [
    { day: 1, title: "Arrival & Transfer", description: "Pickup from Siliguri, Bagdogra, or NJP and transfer to the destination." },
    { day: 2, title: "Sightseeing", description: "Planned local sightseeing and destination exploration." },
    { day: 3, title: "Excursion / Leisure", description: "Additional sightseeing or leisure time based on itinerary." },
    { day: 4, title: "Return", description: "Return transfer to Siliguri or onward location." },
  ],
  included: ["Transport as per itinerary", "Accommodation where applicable", "Basic sightseeing support", "Trip coordination"],
  excluded: ["Meals unless specified", "Entry fees", "Personal expenses", "Travel insurance", "Permits if required"],
  accommodation: {
    title: "Partner Accommodations",
    description: "Hotel arrangements based on package category, route, and availability.",
    hotels: ["Selected partner hotels based on destination and budget"],
  },
  gallery: [images.packageGallery.default1, images.packageGallery.default2],
  faqs: [
    { question: "Can this package be customized?", answer: "Yes, all packages can be tailored to your travel dates, group size, and preferences." },
    { question: "Do you provide transport from Siliguri?", answer: "Yes, pickup and drop from Siliguri, Bagdogra, and NJP can be arranged." },
  ],
};

export function getPackageDetail(slug: string): PackageDetail {
  return packageDetails[slug] ?? defaultDetail;
}
