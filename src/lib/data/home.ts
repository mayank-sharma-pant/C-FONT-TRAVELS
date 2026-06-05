import {
  Building2,
  Globe2,
  Hotel,
  MapPin,
  Plane,
  Stamp,
} from "lucide-react";
import { images } from "@/lib/images";

export const featuredServices = [
  {
    icon: MapPin,
    title: "Domestic Tours",
    description:
      "Discover India's hidden gems with expertly curated domestic itineraries tailored to your preferences.",
    href: "/services#tour-packages",
    image: images.services.domestic,
  },
  {
    icon: Globe2,
    title: "International Tours",
    description:
      "Explore the world's most captivating destinations with seamless planning and premium experiences.",
    href: "/services#tour-packages",
    image: images.services.international,
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Access competitive fares on domestic and international flights with flexible booking options.",
    href: "/services#flight-booking",
    image: images.services.flight,
  },
  {
    icon: Hotel,
    title: "Hotel Booking",
    description:
      "Handpicked accommodations from boutique stays to luxury resorts at exclusive partner rates.",
    href: "/services#hotel-reservations",
    image: images.services.hotel,
  },
  {
    icon: Stamp,
    title: "Visa Assistance",
    description:
      "End-to-end visa support with document guidance, application tracking, and expert consultation.",
    href: "/services#visa-services",
    image: images.services.visa,
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Streamlined business travel solutions with dedicated account management and cost optimization.",
    href: "/services#corporate-travel",
    image: images.services.corporate,
  },
];

export const whyChooseUs = [
  {
    title: "Trusted Travel Experts",
    description:
      "Over a decade of experience crafting memorable journeys for thousands of satisfied travelers.",
  },
  {
    title: "Best Prices",
    description:
      "Exclusive partnerships with airlines, hotels, and tour operators ensure unbeatable value.",
  },
  {
    title: "Personalized Packages",
    description:
      "Every itinerary is tailored to your interests, budget, and travel style — never one-size-fits-all.",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance before, during, and after your trip for complete peace of mind.",
  },
  {
    title: "Secure Booking Process",
    description:
      "Industry-leading security protocols and transparent pricing with no hidden fees.",
  },
];

export const heroStats = [
  { value: 15000, suffix: "+", label: "Happy Travelers" },
  { value: 85, suffix: "+", label: "Destinations" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export const travelStats = [
  { value: 15000, suffix: "+", label: "Happy Travelers" },
  { value: 85, suffix: "+", label: "Destinations Covered" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 9800, suffix: "+", label: "Successful Trips" },
];
