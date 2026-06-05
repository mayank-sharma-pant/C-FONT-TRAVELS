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
    title: "Local Destination Expertise",
    description:
      "Deep knowledge of North Bengal, Sikkim, Darjeeling, Bhutan, and nearby hill destinations for better planning and smoother travel.",
  },
  {
    title: "Reliable Transportation",
    description:
      "Professional drivers, well-maintained vehicles, and dependable service for tours, transfers, and rental requirements.",
  },
  {
    title: "Custom Travel Planning",
    description:
      "Flexible packages and itineraries tailored to your budget, schedule, group size, and preferred travel style.",
  },
  {
    title: "Customer-First Service",
    description:
      "Friendly support, clear communication, and a strong focus on comfort, safety, and customer satisfaction.",
  },
  {
    title: "Trusted Siliguri Partner",
    description:
      "A locally based travel and transport company serving tourists, families, corporates, and groups from Siliguri and across the region.",
  },
];

export const heroStats = [
  { value: 5000, suffix: "+", label: "Happy Travelers" },
  { value: 15, suffix: "+", label: "Destinations" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
];

export const travelStats = [
  { value: 5000, suffix: "+", label: "Happy Travelers" },
  { value: 15, suffix: "+", label: "Destinations Covered" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 2500, suffix: "+", label: "Successful Trips" },
];
