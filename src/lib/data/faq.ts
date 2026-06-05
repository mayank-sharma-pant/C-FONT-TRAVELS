import { images } from "@/lib/images";

export type FaqCategory =
  | "all"
  | "general"
  | "packages"
  | "transport"
  | "booking"
  | "planning";

export interface FaqItem {
  question: string;
  answer: string;
  category: Exclude<FaqCategory, "all">;
}

export const faqHero = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about our tour packages, transport services, bookings, and travel planning support from C Font Travels in Siliguri.",
  image: images.hero.team,
};

export const faqCategories: { id: FaqCategory; label: string }[] = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "packages", label: "Tour Packages" },
  { id: "transport", label: "Transport" },
  { id: "booking", label: "Bookings" },
  { id: "planning", label: "Travel Planning" },
];

export const faqItems: FaqItem[] = [
  {
    category: "general",
    question: "Where is C Font Travels located?",
    answer:
      "Our office is located at H/O Salugara Bazar, Near Dolha Hotel, P.O. Salugara, P.S. Bhaktinagar, Siliguri, West Bengal - 734008. You can visit us during office hours or contact us by phone and email.",
  },
  {
    category: "general",
    question: "What services does C Font Travels provide?",
    answer:
      "We provide tour packages, transport services, vehicle rentals, airport transfers, railway station transfers, corporate travel, group tours, and customized travel planning across North Bengal, Sikkim, Darjeeling, Bhutan, and selected other destinations.",
  },
  {
    category: "general",
    question: "What are your office hours?",
    answer:
      "Our office is open Monday to Saturday, 8:00 AM to 7:00 PM. For urgent travel requests, please call us directly so we can assist as quickly as possible.",
  },
  {
    category: "general",
    question: "Is C Font Travels a registered travel company?",
    answer:
      "Yes. C Font Travels operates as a tour and travel service provider registered under the Siliguri Municipal Corporation.",
  },
  {
    category: "packages",
    question: "Which destinations do you offer tour packages for?",
    answer:
      "Our primary destinations include Darjeeling, Gangtok, Sikkim, Kalimpong, Dooars, Mirik, North Bengal, and Bhutan. We also arrange selected packages for Goa, Kashmir, Dubai, and Thailand.",
  },
  {
    category: "packages",
    question: "Can tour packages be customized?",
    answer:
      "Yes. We customize itineraries based on your travel dates, budget, group size, hotel preferences, and sightseeing interests. Share your requirements through our travel inquiry form or contact us directly.",
  },
  {
    category: "packages",
    question: "Do you offer group tour packages?",
    answer:
      "Yes. We organize group tours for families, friends, schools, colleges, corporate outings, and community travel groups with coordinated transport and itinerary planning.",
  },
  {
    category: "packages",
    question: "What is included in a typical tour package?",
    answer:
      "Inclusions vary by package but commonly cover transport, accommodation, sightseeing, and basic itinerary coordination. Specific inclusions and exclusions are shared clearly before booking confirmation.",
  },
  {
    category: "transport",
    question: "Do you provide airport transfers from Bagdogra?",
    answer:
      "Yes. We arrange airport pick-up and drop services from Bagdogra Airport to Siliguri, Darjeeling, Gangtok, Kalimpong, Dooars, and other nearby destinations.",
  },
  {
    category: "transport",
    question: "Do you offer NJP railway station transfers?",
    answer:
      "Yes. We provide reliable pick-up and drop services from New Jalpaiguri Railway Station to major hill and plain destinations across the region.",
  },
  {
    category: "transport",
    question: "What types of vehicles are available for rental?",
    answer:
      "We arrange suitable vehicles based on your group size and route, including sedans, SUVs, and tempo travellers for local, outstation, and tour travel requirements.",
  },
  {
    category: "transport",
    question: "Do you provide corporate travel and event transport?",
    answer:
      "Yes. We support corporate travel, business trips, conferences, and event transportation with scheduled pick-ups, route planning, and professional coordination.",
  },
  {
    category: "booking",
    question: "How do I book a tour or transport service?",
    answer:
      "You can submit a travel inquiry on our website, call our office, email us, or visit in person. Our team will share available options and guide you through the booking process.",
  },
  {
    category: "booking",
    question: "How quickly will I receive a response to my inquiry?",
    answer:
      "We aim to respond within 24 hours on working days. For same-day or urgent travel needs, calling us directly is the fastest way to get assistance.",
  },
  {
    category: "booking",
    question: "What details should I share when booking?",
    answer:
      "Please share your name, contact number, destination, travel dates, number of passengers, preferred vehicle or package type, and any special requirements such as child seats, extra luggage, or hotel preferences.",
  },
  {
    category: "booking",
    question: "Can I modify or cancel a booking?",
    answer:
      "Changes and cancellations depend on the service type, provider policies, and how close the travel date is. Contact us as early as possible and we will explain available options.",
  },
  {
    category: "planning",
    question: "Do you help with Bhutan travel planning?",
    answer:
      "Yes. We assist with Bhutan tour planning from Siliguri, including route coordination, itinerary suggestions, and transport arrangements based on current travel requirements.",
  },
  {
    category: "planning",
    question: "What is the best time to visit Darjeeling and Sikkim?",
    answer:
      "March to May and October to December are popular for clear views and comfortable travel. We can recommend the best timing based on your preferred destinations and activities.",
  },
  {
    category: "planning",
    question: "Can you plan multi-destination trips?",
    answer:
      "Yes. Many travelers combine destinations such as Darjeeling with Sikkim, Kalimpong with Dooars, or Siliguri with Bhutan. We create practical routes based on travel duration and road conditions.",
  },
  {
    category: "planning",
    question: "Do you assist first-time travelers to the hills?",
    answer:
      "Absolutely. We regularly support first-time visitors with route guidance, realistic travel timings, vehicle selection, and itinerary planning suited to families, seniors, and solo travelers.",
  },
];
