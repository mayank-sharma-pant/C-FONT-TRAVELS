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
  "dubai-luxury-escape": {
    overview: [
      "Experience the pinnacle of Arabian luxury with our curated Dubai escape. From soaring skyscrapers to golden desert dunes, every moment is designed for discerning travelers.",
      "Enjoy premium 5-star accommodations, private airport transfers, and exclusive access to Dubai's most iconic attractions with skip-the-line privileges.",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Marina Welcome", description: "Private transfer to your luxury hotel. Evening Dhow cruise with gourmet dinner on Dubai Marina." },
      { day: 2, title: "City Icons", description: "Visit Burj Khalifa (Level 124), Dubai Mall, and the Dubai Fountain show. Afternoon at leisure." },
      { day: 3, title: "Desert Safari Adventure", description: "Premium desert safari with dune bashing, camel ride, BBQ dinner, and live entertainment." },
      { day: 4, title: "Culture & Gold", description: "Explore Old Dubai, Gold Souk, and Spice Souk. Optional spa treatment at your hotel." },
      { day: 5, title: "Departure", description: "Leisurely breakfast and private transfer to the airport." },
    ],
    included: ["5-star hotel accommodation", "Daily breakfast", "Private airport transfers", "Burj Khalifa tickets", "Desert safari with dinner", "Dhow cruise with dinner", "All applicable taxes"],
    excluded: ["International flights", "UAE visa fees", "Personal expenses", "Travel insurance", "Optional activities not mentioned"],
    accommodation: {
      title: "Premium 5-Star Hotels",
      description: "Stay at handpicked luxury properties in Downtown Dubai or Dubai Marina with world-class amenities.",
      hotels: ["Address Downtown", "JW Marriott Marquis", "Palace Downtown"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830d5adf2d?w=800&q=80",
      "https://images.unsplash.com/photo-1582672060017-3ff8596d8331?w=800&q=80",
    ],
    faqs: [
      { question: "Is UAE visa included?", answer: "Visa assistance is available as an add-on service. Our team will guide you through the application process." },
      { question: "Can I customize the itinerary?", answer: "Absolutely. We can adjust activities, upgrade hotels, or extend your stay upon request." },
    ],
  },
  "bali-honeymoon-retreat": {
    overview: [
      "Celebrate your love in Bali's most romantic settings — private villas, sunset dinners, and couple spa rituals in paradise.",
      "This intimate itinerary balances relaxation with cultural discovery through Ubud's rice terraces and Seminyak's beachfront elegance.",
    ],
    itinerary: [
      { day: 1, title: "Welcome to Paradise", description: "Airport pickup and check-in to your private pool villa in Seminyak." },
      { day: 2, title: "Ubud Discovery", description: "Visit Tegallalang Rice Terraces, Sacred Monkey Forest, and a traditional Balinese cooking class." },
      { day: 3, title: "Couple Spa Day", description: "Full-day spa retreat with traditional Balinese massage, flower bath, and organic lunch." },
      { day: 4, title: "Sunset Romance", description: "Private beach dinner setup with personal butler service and live acoustic music." },
      { day: 5, title: "Temple & Culture", description: "Visit Tanah Lot temple at sunset. Free evening for exploration." },
      { day: 6, title: "Leisure Day", description: "Relax at your villa or optional water sports and island activities." },
      { day: 7, title: "Departure", description: "Farewell breakfast and transfer to the airport." },
    ],
    included: ["Private pool villa", "Daily breakfast", "Couple spa session", "Private sunset dinner", "All transfers", "Guided Ubud tour"],
    excluded: ["Flights", "Indonesia visa", "Lunch & dinner (except special dinners)", "Personal shopping", "Travel insurance"],
    accommodation: {
      title: "Private Pool Villas",
      description: "Romantic villas with private pools, outdoor bathtubs, and lush tropical gardens.",
      hotels: ["Kayumanis Ubud", "The Seminyak Beach Resort", "Alila Ubud"],
    },
    gallery: [
      "https://images.unsplash.com/photo-1537953773315-cb31c1177656?w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079b2a?w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
    ],
    faqs: [
      { question: "Is this package only for honeymooners?", answer: "While designed for couples, anniversaries and romantic getaways are equally welcome." },
      { question: "Can we extend our stay?", answer: "Yes, villa extensions and additional experiences can be arranged at preferential rates." },
    ],
  },
};

const defaultDetail: PackageDetail = {
  overview: [
    "A carefully curated journey designed by our travel experts to deliver an exceptional experience from start to finish.",
    "Enjoy handpicked accommodations, seamless logistics, and insider access to the best each destination has to offer.",
  ],
  itinerary: [
    { day: 1, title: "Arrival & Welcome", description: "Airport pickup and hotel check-in. Welcome briefing with your tour coordinator." },
    { day: 2, title: "Exploration Begins", description: "Guided sightseeing of key attractions with an expert local guide." },
    { day: 3, title: "Adventure Day", description: "Curated activities and experiences unique to your destination." },
    { day: 4, title: "Cultural Immersion", description: "Local markets, heritage sites, and authentic culinary experiences." },
    { day: 5, title: "Departure", description: "Leisurely morning and transfer to the airport." },
  ],
  included: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Guided sightseeing", "All applicable taxes"],
  excluded: ["Flights", "Visa fees", "Personal expenses", "Meals not mentioned", "Travel insurance"],
  accommodation: {
    title: "Quality Accommodations",
    description: "Comfortable, well-located properties selected for quality, service, and convenience.",
    hotels: ["Partner hotels selected based on availability and season"],
  },
  gallery: [
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  ],
  faqs: [
    { question: "Can I customize this package?", answer: "Yes, all packages can be tailored to your preferences, budget, and travel dates." },
    { question: "What is the cancellation policy?", answer: "Cancellation terms vary by package. Contact us for detailed policy information." },
  ],
};

export function getPackageDetail(slug: string): PackageDetail {
  return packageDetails[slug] ?? {
    ...defaultDetail,
    gallery: defaultDetail.gallery,
  };
}
