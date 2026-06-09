import {
  Building2,
  Bus,
  Car,
  MapPin,
  Plane,
  TrainFront,
} from "lucide-react";
import { images } from "@/lib/images";

export const featuredServices = [
  {
    icon: MapPin,
    title: "Tour Packages",
    description:
      "Customized tour packages for Darjeeling, Sikkim, Gangtok, Bhutan, Dooars, and popular destinations across North Bengal and beyond.",
    href: "/services#tour-packages",
    image: images.services.tour,
  },
  {
    icon: Bus,
    title: "Transport Services",
    description:
      "Safe and reliable point-to-point transport for local travel, sightseeing, inter-city journeys, and group movements with experienced drivers.",
    href: "/services#transport-services",
    image: images.services.domestic,
  },
  {
    icon: Car,
    title: "Vehicle Rentals",
    description:
      "Well-maintained cars, SUVs, and tempo travellers for family trips, corporate travel, tours, and daily rental requirements.",
    href: "/services#vehicle-rentals",
    image: images.services.flight,
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Punctual pick-up and drop services from Bagdogra Airport and nearby locations with comfortable vehicles and professional coordination.",
    href: "/services#airport-transfers",
    image: images.services.hotel,
  },
  {
    icon: TrainFront,
    title: "Railway Transfers",
    description:
      "Hassle-free railway station transfers from New Jalpaiguri, Siliguri Junction, and other nearby stations for individuals and groups.",
    href: "/services#railway-station-transfers",
    image: images.services.visa,
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Dependable transport and travel solutions for businesses, institutions, events, and official travel across the region.",
    href: "/services#corporate-travel",
    image: images.services.corporate,
  },
];

export const whyChooseUs = [
  {
    title: "Local route knowledge",
    description:
      "We plan around real hill roads, seasons, and timings for Darjeeling, Sikkim, Dooars, and cross-border routes — not generic itineraries.",
  },
  {
    title: "One team for tours and transport",
    description:
      "Package bookings, airport pick-ups, station transfers, and vehicle rentals are coordinated from our Salugara office — one point of contact.",
  },
  {
    title: "A Siliguri office you can reach",
    description:
      "Call, email, or visit us during office hours. We serve tourists, families, corporates, and groups travelling out of Siliguri and North Bengal.",
  },
];

export const heroTrustSignals = [
  {
    label: "Office",
    value: "Salugara, Siliguri",
  },
  {
    label: "Registered under",
    value: "Siliguri Municipal Corporation",
  },
  {
    label: "Airport & railway transfers",
    value: "Bagdogra Airport · NJP Station",
  },
  {
    label: "Popular routes",
    value: "Darjeeling · Sikkim · Bhutan · Dooars",
  },
];
