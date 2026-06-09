import { images } from "@/lib/images";

export const aboutHero = {
  title: "About C Font Travels",
  description:
    "A new tour and travel business based in Salugari, Siliguri — arranging transport, rentals, and trip planning for North Bengal and nearby hill routes.",
  image: images.hero.scenic,
};

export const companyStory = {
  title: "Who we are",
  paragraphs: [
    "C Font Travels operates from Salugara, Siliguri. We arrange tours, local transport, vehicle rentals with driver, and airport or railway transfers for travelers starting their journey from North Bengal.",
    "We are a newly launched business. We do not claim years of history or thousands of past customers — we focus on clear communication, honest quoting, and coordinating trips route by route.",
    "Registered under the Siliguri Municipal Corporation. Office address, phone, and email are listed on our contact page — you can call or visit us directly.",
  ],
  image: images.about.story,
  stats: [
    { label: "Based in", value: "Siliguri" },
    { label: "Registration", value: "SMC" },
    { label: "Status", value: "New business" },
  ],
};

export const mission = {
  title: "Our mission",
  description:
    "To arrange safe, clearly communicated travel and transport from Siliguri — with realistic routes, upfront pricing discussions, and direct office support.",
  icon: "target" as const,
};

export const vision = {
  title: "Our vision",
  description:
    "To grow into a dependable local travel and transport office that North Bengal travelers can reach directly — built on repeat bookings and word of mouth, not marketing claims.",
  icon: "eye" as const,
};

export const coreValues = [
  {
    title: "Clear communication",
    description:
      "Route options, vehicle type, timing, and costs are discussed before you confirm — no hidden assumptions.",
  },
  {
    title: "Direct office access",
    description:
      "You speak with our Siliguri team by phone, email, or in person — not an anonymous booking platform.",
  },
  {
    title: "Route-aware planning",
    description:
      "Hill roads, seasons, and permit requirements are part of the conversation for Sikkim, Bhutan, and regional trips.",
  },
  {
    title: "Honest scope",
    description:
      "If a route, vehicle, or date is not available, we say so — and suggest alternatives when we can.",
  },
];
