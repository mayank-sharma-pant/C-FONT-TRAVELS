import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Bus,
  Car,
  Compass,
  MapPinned,
  Plane,
  TrainFront,
  Users,
} from "lucide-react";
import { images } from "@/lib/images";

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
    "Complete tour and travel solutions from Siliguri — including transport services, vehicle rentals, airport and railway transfers, tour packages, and customized travel planning.",
  image: images.hero.flight,
};

export const servicesIntro = {
  title: "Your Travel & Transport Partner in North Bengal",
  description:
    "Whether you need a family tour to Darjeeling, a corporate vehicle, an airport pickup from Bagdogra, or a fully customized Sikkim itinerary — C Font Travels is here to help.",
};

export const services: Service[] = [
  {
    slug: "tour-packages",
    title: "Tour Packages",
    tagline: "Explore North Bengal and beyond",
    description:
      "Choose from thoughtfully planned tour packages covering Darjeeling, Gangtok, Sikkim, Kalimpong, Dooars, Mirik, Bhutan, and other popular destinations. Packages can be customized based on duration, budget, and group size.",
    image: images.services.tour,
    icon: MapPinned,
    features: [
      "Darjeeling, Sikkim & Gangtok tours",
      "Bhutan and Dooars packages",
      "Family, couple & group itineraries",
      "Flexible duration and pricing",
      "Local sightseeing included",
    ],
    benefits: [
      "Save time with ready-made regional itineraries",
      "Benefit from local route and destination knowledge",
      "Travel with coordinated transport and planning support",
    ],
    cta: { label: "Browse Packages", href: "/packages" },
  },
  {
    slug: "transport-services",
    title: "Transport Services",
    tagline: "Safe and dependable travel",
    description:
      "Our transport services cover local and inter-city travel across Siliguri and North Bengal. Ideal for sightseeing, business travel, family trips, and point-to-point journeys with professional drivers.",
    image: images.services.domestic,
    icon: Bus,
    features: [
      "Local and outstation travel",
      "Sightseeing and tour circuits",
      "Individual and group transport",
      "Experienced local drivers",
      "Comfortable, maintained vehicles",
    ],
    benefits: [
      "Avoid the hassle of arranging transport yourself",
      "Travel safely with familiar regional routes",
      "Ideal for tourists and local clients alike",
    ],
    cta: { label: "Book Transport", href: "/inquiry" },
  },
  {
    slug: "vehicle-rentals",
    title: "Vehicle Rentals",
    tagline: "Cars, SUVs & tempo travellers",
    description:
      "Rent well-maintained vehicles for tours, family outings, corporate requirements, and special travel needs. Options include sedans, SUVs, and tempo travellers based on availability and group size.",
    image: images.services.flight,
    icon: Car,
    features: [
      "Sedan, SUV & tempo traveller options",
      "Daily and multi-day rentals",
      "Tour and transfer use",
      "Driver-inclusive arrangements",
      "Suitable for families and groups",
    ],
    benefits: [
      "Flexible vehicle options for every trip type",
      "Professional arrangements for comfort and convenience",
      "Reliable support for planned and custom travel",
    ],
    cta: { label: "Rent a Vehicle", href: "/inquiry" },
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    tagline: "Bagdogra airport pick-up & drop",
    description:
      "Book punctual airport transfer services to and from Bagdogra Airport. We provide comfortable vehicles and coordinated pick-up for tourists, families, corporate guests, and group arrivals.",
    image: images.services.hotel,
    icon: Plane,
    features: [
      "Bagdogra Airport transfers",
      "Pick-up and drop arrangements",
      "Hotel and tour connectivity",
      "Individual and group bookings",
      "Advance scheduling available",
    ],
    benefits: [
      "Start and end your trip without transport stress",
      "Ideal for hill station and tour arrivals",
      "Professional coordination on arrival",
    ],
    cta: { label: "Book Airport Transfer", href: "/inquiry" },
  },
  {
    slug: "railway-station-transfers",
    title: "Railway Station Transfers",
    tagline: "NJP, Siliguri & nearby stations",
    description:
      "We offer reliable railway station transfer services from New Jalpaiguri, Siliguri Junction, and nearby railway points to hotels, homes, tour starting locations, and outstation destinations.",
    image: images.services.visa,
    icon: TrainFront,
    features: [
      "NJP and Siliguri Junction transfers",
      "Hotel and home drop-offs",
      "Tour departure connectivity",
      "Solo, family & group travel",
      "Advance booking support",
    ],
    benefits: [
      "Smooth connection from train to destination",
      "Useful for tourists arriving in North Bengal",
      "Convenient support for planned itineraries",
    ],
    cta: { label: "Book Railway Transfer", href: "/inquiry" },
  },
  {
    slug: "corporate-travel",
    title: "Corporate Travel",
    tagline: "Business transport made easy",
    description:
      "Support your business travel needs with dependable transport arrangements for meetings, events, official visits, employee travel, and institutional requirements across the region.",
    image: images.services.corporate,
    icon: Building2,
    features: [
      "Corporate transport arrangements",
      "Event and delegation travel",
      "Official visit coordination",
      "Group and staff movement",
      "Flexible scheduling options",
    ],
    benefits: [
      "Professional transport for business needs",
      "Reliable service for teams and institutions",
      "Single point of contact for travel coordination",
    ],
    cta: { label: "Corporate Inquiry", href: "/inquiry" },
  },
  {
    slug: "group-tours",
    title: "Group Tours",
    tagline: "Perfect for families and teams",
    description:
      "Organize group tours for families, schools, institutions, corporate teams, and travel parties with coordinated transport, route planning, and destination support across North Bengal and nearby regions.",
    image: images.services.group,
    icon: Users,
    features: [
      "Family and institutional groups",
      "Custom group itineraries",
      "Coordinated vehicle arrangements",
      "Multi-destination planning",
      "Flexible group sizes",
    ],
    benefits: [
      "Easier planning for large travel groups",
      "Better coordination for sightseeing and transfers",
      "Cost-effective group travel arrangements",
    ],
    cta: { label: "Plan a Group Tour", href: "/inquiry" },
  },
  {
    slug: "customized-travel-planning",
    title: "Customized Travel Planning",
    tagline: "Built around your needs",
    description:
      "Need something specific? We create fully customized travel plans based on your preferred destinations, travel dates, budget, hotel preferences, and transport requirements.",
    image: images.services.custom,
    icon: Compass,
    features: [
      "Fully custom itineraries",
      "Multi-destination route planning",
      "Transport and tour integration",
      "Budget-based planning",
      "Personal travel consultation",
    ],
    benefits: [
      "Get a trip designed exactly for your preferences",
      "Combine destinations, transport, and timing your way",
      "Ideal for special occasions and unique travel plans",
    ],
    cta: { label: "Start Custom Planning", href: "/inquiry" },
  },
];

export const servicesProcess = [
  {
    step: "01",
    title: "Share Your Requirement",
    description:
      "Tell us your destination, travel dates, number of passengers, and whether you need a tour package, rental, or transfer service.",
  },
  {
    step: "02",
    title: "Receive a Travel Plan",
    description:
      "Our team prepares a suitable itinerary or transport arrangement with clear details and pricing.",
  },
  {
    step: "03",
    title: "Confirm Your Booking",
    description:
      "Review the plan, finalize your schedule, and confirm your tour or transport booking with our team.",
  },
  {
    step: "04",
    title: "Travel with Confidence",
    description:
      "Enjoy a safe, comfortable, and well-coordinated journey with professional support from C Font Travels.",
  },
];
