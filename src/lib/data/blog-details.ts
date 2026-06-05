export interface BlogDetail {
  introduction: string;
  sections: { heading: string; paragraphs: string[] }[];
  tips: string[];
}

const defaultDetail: BlogDetail = {
  introduction:
    "C Font Travels helps travelers across North Bengal plan comfortable, reliable journeys with local expertise and professional transport support from our Siliguri office.",
  sections: [
    {
      heading: "Plan with Local Expertise",
      paragraphs: [
        "Whether you are visiting for the first time or returning to explore more of the region, having a trusted travel partner makes every journey smoother. Our team understands routes, seasonal conditions, and the practical details that matter most to travelers.",
        "From vehicle arrangements to customized itineraries, we focus on safe travel, clear communication, and customer-first service throughout your trip.",
      ],
    },
  ],
  tips: [
    "Book transport and accommodation in advance during peak seasons.",
    "Carry valid ID and permit documents where required.",
    "Confirm pick-up times and locations before travel day.",
  ],
};

const blogDetails: Record<string, BlogDetail> = {
  "darjeeling-travel-guide-from-siliguri": {
    introduction:
      "Darjeeling remains one of the most popular hill destinations for travelers starting from Siliguri. With scenic routes, tea gardens, and iconic viewpoints, it is a perfect choice for families, couples, and group tours.",
    sections: [
      {
        heading: "Getting There from Siliguri",
        paragraphs: [
          "Darjeeling is typically reached by road from Siliguri via NH110 or alternative hill routes depending on traffic and weather. The journey usually takes around 3 to 4 hours, though monsoon or peak-season traffic can extend travel time.",
          "C Font Travels provides private car, shared transport, and customized tour options so you can travel comfortably with experienced local drivers who know the hill roads well.",
        ],
      },
      {
        heading: "Best Time to Visit",
        paragraphs: [
          "March to May and October to December are ideal for clear mountain views and pleasant weather. Monsoon months bring lush greenery but also occasional road delays due to rain and landslides.",
          "Winter travelers should pack warm clothing, especially for early morning visits to Tiger Hill and other high viewpoints.",
        ],
      },
      {
        heading: "Must-Visit Places",
        paragraphs: [
          "Popular attractions include Tiger Hill, Batasia Loop, Ghoom Monastery, the Darjeeling Himalayan Railway, tea estates, and Mall Road. Many travelers also enjoy a day trip to nearby Mirik or combine Darjeeling with Sikkim.",
          "We can help you plan a balanced itinerary based on your travel duration, budget, and preferred pace.",
        ],
      },
    ],
    tips: [
      "Start early for Tiger Hill sunrise views.",
      "Book hotels in advance during peak tourist seasons.",
      "Allow buffer time for hill road travel.",
      "Carry motion sickness medicine if needed for winding roads.",
    ],
  },
  "bagdogra-airport-transfer-guide": {
    introduction:
      "Bagdogra Airport is the main gateway for travelers heading to Darjeeling, Sikkim, Dooars, and other North Bengal destinations. A reliable airport transfer saves time and reduces travel stress after your flight.",
    sections: [
      {
        heading: "Why Pre-Book Airport Transfers",
        paragraphs: [
          "Pre-booking your airport pick-up ensures a vehicle is ready when you land, especially during late evening arrivals or peak holiday seasons when local availability can be limited.",
          "C Font Travels offers airport transfers to Darjeeling, Gangtok, Kalimpong, Mirik, Dooars, Siliguri city, and nearby locations with clear pricing and professional drivers.",
        ],
      },
      {
        heading: "Travel Times from Bagdogra",
        paragraphs: [
          "Siliguri city transfers typically take 30 to 45 minutes. Darjeeling, Gangtok, and Kalimpong journeys take longer due to hill routes and may require 3 to 5 hours depending on destination and road conditions.",
          "Share your flight details when booking so we can monitor arrival times and adjust pick-up schedules when needed.",
        ],
      },
      {
        heading: "What to Confirm Before Travel",
        paragraphs: [
          "Confirm vehicle type, luggage capacity, number of passengers, drop location, and any night charges or waiting time policies. For international travelers, mention if you need assistance with large baggage or child seats.",
          "Our team provides clear communication before travel day so you know exactly where to meet your driver at the airport.",
        ],
      },
    ],
    tips: [
      "Share flight number and arrival time when booking.",
      "Confirm vehicle size for group or extra luggage.",
      "Keep our contact number handy on arrival day.",
      "Plan hill destination transfers with daylight buffer when possible.",
    ],
  },
  "best-time-to-visit-sikkim": {
    introduction:
      "Sikkim and Gangtok offer stunning mountain views, monasteries, lakes, and adventure experiences. Choosing the right season helps you get the most from your trip starting from Siliguri.",
    sections: [
      {
        heading: "Spring and Summer (March to June)",
        paragraphs: [
          "This is one of the best periods for sightseeing in Gangtok, Tsomgo Lake, and surrounding areas. Rhododendron blooms and clear skies make it ideal for photography and outdoor travel.",
          "Advance booking is recommended for hotels and permits, especially around holidays and long weekends.",
        ],
      },
      {
        heading: "Autumn (October to December)",
        paragraphs: [
          "Autumn brings crisp weather and excellent visibility for mountain views. It is a favorite season for families and honeymoon travelers visiting Sikkim from Siliguri.",
          "Pack warm layers for evenings and early morning excursions, particularly if visiting higher-altitude points.",
        ],
      },
      {
        heading: "Monsoon and Winter Considerations",
        paragraphs: [
          "Monsoon travel can be beautiful but may involve road restrictions to certain areas. Winter offers a quieter experience, though some high-altitude routes and lakes may be closed depending on weather.",
          "C Font Travels can suggest the best itinerary based on your travel month and current local conditions.",
        ],
      },
    ],
    tips: [
      "Check permit requirements for restricted areas in advance.",
      "Carry ID proof for travel formalities.",
      "Book transport early during festival seasons.",
      "Keep flexible buffer days for hill weather changes.",
    ],
  },
  "bhutan-travel-essentials-from-siliguri": {
    introduction:
      "Bhutan is a popular international destination for travelers based in Siliguri and North Bengal. Proper planning for permits, routes, and travel duration ensures a smooth cross-border journey.",
    sections: [
      {
        heading: "Entry and Documentation",
        paragraphs: [
          "Indian travelers generally need valid photo ID and permit arrangements depending on the entry route. Other nationalities should confirm visa and entry requirements in advance.",
          "We assist with travel planning and coordination so your route, vehicle, and itinerary align with current entry procedures.",
        ],
      },
      {
        heading: "Popular Routes from Siliguri",
        paragraphs: [
          "Phuentsholing is the most common entry point for road travel from Siliguri and nearby areas. From there, travelers continue to Thimphu, Paro, and other destinations based on their package duration.",
          "Road travel times vary by route and border formalities, so plan realistic schedules rather than tight same-day connections.",
        ],
      },
      {
        heading: "Planning Your Bhutan Package",
        paragraphs: [
          "Most travelers prefer 4 to 7 day packages covering key cultural and scenic highlights. C Font Travels offers customized Bhutan itineraries with transport support from Siliguri and professional coordination throughout the trip.",
          "Share your preferred travel dates, group size, and budget so we can recommend the most suitable plan.",
        ],
      },
    ],
    tips: [
      "Confirm ID and permit requirements before booking.",
      "Allow time for border processing on travel days.",
      "Book accommodations in advance during peak seasons.",
      "Carry cash/cards as per destination payment options.",
    ],
  },
  "dooars-wildlife-safari-guide": {
    introduction:
      "The Dooars region is known for tea gardens, rivers, and wildlife sanctuaries such as Gorumara, Jaldapara, and Buxa. It is an excellent nature-focused destination easily reached from Siliguri.",
    sections: [
      {
        heading: "Best Safari Experiences",
        paragraphs: [
          "Jeep safaris and elephant safaris (where available) are the main attractions for wildlife enthusiasts. Gorumara and Jaldapara are among the most visited parks for rhino, elephant, bison, and bird sightings.",
          "Safari slots are limited and often fill quickly during holidays, so early booking is strongly recommended.",
        ],
      },
      {
        heading: "When to Visit the Dooars",
        paragraphs: [
          "October to May is generally the best period for wildlife viewing and comfortable travel. Monsoon months can restrict safari access and make forest roads challenging.",
          "Winter mornings can be cool, while summer afternoons are warmer in the plains — pack accordingly.",
        ],
      },
      {
        heading: "Travel from Siliguri",
        paragraphs: [
          "Most Dooars destinations are reachable within 2 to 4 hours by road from Siliguri. C Font Travels provides outstation vehicles and complete tour packages including stays, safaris, and local sightseeing.",
          "Combine Dooars with Kalimpong or Bhutan gateway routes for a longer North Bengal itinerary.",
        ],
      },
    ],
    tips: [
      "Book safari permits and slots in advance.",
      "Follow park rules and maintain silence during safaris.",
      "Use neutral-colored clothing for forest visits.",
      "Carry insect repellent and binoculars for better viewing.",
    ],
  },
  "njp-railway-station-transfer-guide": {
    introduction:
      "New Jalpaiguri (NJP) Railway Station is a major arrival point for tourists heading to Darjeeling, Sikkim, Kalimpong, and Dooars. Pre-arranged station transfers help you start your trip smoothly.",
    sections: [
      {
        heading: "Why Arrange Station Pick-Up",
        paragraphs: [
          "After a long train journey, finding reliable transport can be stressful — especially for families, senior citizens, and first-time visitors. Pre-booked pick-up ensures your driver is waiting with a confirmed vehicle and route plan.",
          "C Font Travels provides NJP station transfers to all major North Bengal and Sikkim destinations with transparent pricing.",
        ],
      },
      {
        heading: "Common Transfer Routes",
        paragraphs: [
          "Popular routes include NJP to Darjeeling, Gangtok, Kalimpong, Mirik, Siliguri, and Dooars. Travel duration depends on destination, vehicle type, and road conditions.",
          "Share your train number and expected arrival time so we can coordinate pick-up even if the train is delayed.",
        ],
      },
      {
        heading: "Booking Tips",
        paragraphs: [
          "Mention passenger count, luggage volume, and preferred vehicle category when booking. For hill destinations, choose vehicles suited to mountain roads and group comfort.",
          "We recommend confirming your drop location and any planned stops before travel day.",
        ],
      },
    ],
    tips: [
      "Share train details when booking station transfers.",
      "Confirm vehicle type for hill routes and luggage.",
      "Keep phone charged for driver coordination on arrival.",
      "Book return drop in advance for a seamless trip.",
    ],
  },
};

export function getBlogDetail(slug: string): BlogDetail {
  return blogDetails[slug] ?? defaultDetail;
}
