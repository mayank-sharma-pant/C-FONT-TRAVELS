import { images } from "@/lib/images";

export const aboutHero = {
  title: "About C Font Travels",
  description:
    "A premium travel agency built on passion, expertise, and an unwavering commitment to crafting journeys that inspire, delight, and transform.",
  image: images.hero.team,
};

export const companyStory = {
  title: "Our Story",
  paragraphs: [
    "C Font Travels was founded in 2014 with a simple belief: travel should be more than reaching a destination — it should be a transformative experience that stays with you long after you return home.",
    "What began as a small consultancy in New Delhi has grown into a trusted name serving thousands of travelers across India and beyond. From honeymooners seeking romantic escapes to corporations planning global retreats, we've built our reputation one exceptional journey at a time.",
    "Today, we offer a flexible suite of travel services — tour packages, flight and hotel booking, visa assistance, corporate travel, and bespoke itinerary planning — all delivered with the same personal touch that defined our earliest days.",
  ],
  image: images.about.story,
  stats: [
    { label: "Founded", value: "2014" },
    { label: "Team Members", value: "45+" },
    { label: "Office Locations", value: "3" },
  ],
};

export const mission = {
  title: "Our Mission",
  description:
    "To make world-class travel accessible and effortless by delivering personalized, end-to-end journey planning that exceeds expectations — every trip, every traveler, every time.",
  icon: "target" as const,
};

export const vision = {
  title: "Our Vision",
  description:
    "To become India's most trusted and admired travel brand — recognized globally for innovation, integrity, and the ability to turn travel dreams into lifelong memories.",
  icon: "eye" as const,
};

export const coreValues = [
  {
    title: "Integrity",
    description:
      "Transparent pricing, honest recommendations, and ethical practices in every interaction.",
  },
  {
    title: "Excellence",
    description:
      "Relentless attention to detail — from itinerary design to on-trip support.",
  },
  {
    title: "Personalization",
    description:
      "Every journey is uniquely crafted around your preferences, not a template.",
  },
  {
    title: "Innovation",
    description:
      "Embracing new destinations, technologies, and travel trends to serve you better.",
  },
  {
    title: "Passion",
    description:
      "We love travel as much as you do — and it shows in everything we create.",
  },
  {
    title: "Reliability",
    description:
      "Dependable support before, during, and after your trip — 24/7, without compromise.",
  },
];

export const whyWeStarted = {
  title: "Why We Started",
  quote:
    "We saw too many travelers settle for generic packages and impersonal service. We knew there was a better way — travel planned by people who genuinely care about your experience.",
  author: "Founder's Note",
  paragraphs: [
    "Our founders, seasoned travelers themselves, experienced firsthand the frustration of cookie-cutter itineraries and hidden fees. They envisioned an agency that would treat every client like family — listening deeply, planning thoughtfully, and standing by you at every step.",
    "That vision became C Font Travels: a place where luxury meets authenticity, where adventure meets comfort, and where your travel story is written with care.",
  ],
  image: images.about.founder,
};

export const achievements = [
  {
    value: "15,000+",
    label: "Happy Travelers",
    description: "Served across domestic and international destinations",
  },
  {
    value: "85+",
    label: "Destinations",
    description: "Curated experiences across six continents",
  },
  {
    value: "12+",
    label: "Years",
    description: "Of trusted travel expertise since 2014",
  },
  {
    value: "98%",
    label: "Satisfaction",
    description: "Client satisfaction rate based on post-trip surveys",
  },
  {
    value: "50+",
    label: "Partners",
    description: "Airlines, hotels, and tour operators worldwide",
  },
  {
    value: "3",
    label: "Offices",
    description: "Delhi, Mumbai, and Bangalore service centers",
  },
];

export const timeline = [
  {
    year: "2014",
    title: "The Beginning",
    description:
      "C Font Travels founded in New Delhi with a focus on personalized domestic tour packages.",
  },
  {
    year: "2016",
    title: "Going International",
    description:
      "Expanded services to include international tours, flight booking, and visa assistance.",
  },
  {
    year: "2018",
    title: "Corporate Travel Launch",
    description:
      "Introduced dedicated corporate travel solutions for businesses across India.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched online inquiry platform and 24/7 virtual support during global travel shifts.",
  },
  {
    year: "2022",
    title: "Multi-City Expansion",
    description:
      "Opened offices in Mumbai and Bangalore; surpassed 10,000 happy travelers milestone.",
  },
  {
    year: "2024",
    title: "Premium Portfolio",
    description:
      "Added luxury tours, pilgrimage packages, adventure expeditions, and custom travel planning.",
  },
];

export const teamMembers = [
  {
    name: "Rajesh Kapoor",
    role: "Founder & CEO",
    bio: "20+ years in travel and hospitality. Passionate about crafting bespoke luxury experiences.",
    image: images.people.man1,
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    bio: "Expert in logistics and on-ground coordination across 85+ global destinations.",
    image: images.people.woman2,
  },
  {
    name: "Arjun Mehta",
    role: "Corporate Travel Director",
    bio: "Specializes in business travel, MICE events, and enterprise travel management.",
    image: images.people.man2,
  },
  {
    name: "Anita Desai",
    role: "Visa & Documentation Lead",
    bio: "Guides clients through complex visa processes with a 97% first-time approval rate.",
    image: images.people.woman2,
  },
];
