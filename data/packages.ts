export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  type: "international" | "domestic" | "college";
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  price: string;
  priceNote?: string;
  itinerary: ItineraryDay[];
}

export const packages: Package[] = [
  // ─── INTERNATIONAL PACKAGES ───────────────────────────────────────────────

  {
    id: "int-maldives",
    slug: "maldives-paradise",
    name: "Maldives",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/maldives.jpg",
    description:
      "Indulge in a premium getaway surrounded by turquoise lagoons and pristine white sandy beaches. Stay in luxury overwater villas with direct ocean access and experience the Maldives in all its breathtaking glory.",
    highlights: [
      "Luxury overwater villa or beach villa stay",
      "Speedboat transfers from Malé International Airport",
      "Snorkeling, kayaking & non-motorized water sports",
      "Sunset dolphin cruise experience",
      "All meals & selected beverages included",
    ],
    price: "Starting ₹66,000/- per couple",
    priceNote: "Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Paradise – Arrival in Malé",
        description:
          "Arrive at Malé International Airport and transfer to your resort by a scenic speedboat. Check in to your overwater villa, sip a welcome cocktail, and enjoy the breathtaking ocean views at sunset.",
      },
      {
        day: 2,
        title: "Snorkeling & Coral Reef Exploration",
        description:
          "Start the day with a guided snorkeling excursion over the house reef, discovering colourful coral gardens, sea turtles, and exotic fish. Relax with a couples' spa session in the afternoon.",
      },
      {
        day: 3,
        title: "Sunset Cruise & Dolphin Watching",
        description:
          "Spend the morning kayaking or on the beach. Late afternoon, embark on a dhoni cruise to spot playful dolphins leaping against a golden sunset and enjoy a barbecue dinner on board.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Savor a final beachside breakfast. Check out and take the speedboat transfer back to Malé airport for your journey home.",
      },
    ],
  },
  {
    id: "int-phuket-krabi",
    slug: "phuket-krabi-islands",
    name: "Phuket & Krabi",
    type: "international",
    duration: "5D/4N",
    image: "/images/destinations/phuket.jpg",
    description:
      "Discover the spectacular karst formations and pristine beaches of Southern Thailand. Visit Phuket's lively beach clubs and the tranquil limestone cliffs of Krabi for an unforgettable island adventure.",
    highlights: [
      "Phi Phi Island tour by speedboat with buffet lunch",
      "Krabi 4-Island tour including Phra Nang Cave",
      "Phuket City Tour: Big Buddha & Wat Chalong",
      "Road transfer between Phuket & Krabi",
      "Selected boutique hotel accommodations",
    ],
    price: "Starting ₹23,000/- per head (2 Pax)",
    priceNote: "₹20,000/- (4 Pax) | ₹18,000/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Phuket",
        description:
          "Arrive at Phuket Airport. Transfer to your resort. Enjoy the beach sunset at Patong or Karon Beach and explore the local nightlife.",
      },
      {
        day: 2,
        title: "Phi Phi Islands Speedboat Tour",
        description:
          "Visit Maya Bay (where 'The Beach' was filmed), snorkel in Pileh Lagoon, visit Viking Cave, and watch the monkeys at Monkey Beach. Buffet lunch included.",
      },
      {
        day: 3,
        title: "Phuket City Tour & Transfer to Krabi",
        description:
          "Visit the landmark Big Buddha, the historic Wat Chalong temple, and Old Phuket Town. Drive to Krabi (approx. 2.5 hours) and check in.",
      },
      {
        day: 4,
        title: "Krabi 4-Islands Longtail Boat Tour",
        description:
          "Hop on a longtail boat to explore Phra Nang Cave Beach, Tup Island, Chicken Island, and Poda Island — ideal for swimming and snorkeling.",
      },
      {
        day: 5,
        title: "Departure from Krabi",
        description:
          "Free morning at Ao Nang Beach. Check out and transfer to Krabi Airport for your return flight.",
      },
    ],
  },
  {
    id: "int-bali",
    slug: "bali-cultural-beaches",
    name: "Bali",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/bali.jpg",
    description:
      "Discover the Island of the Gods. Explore green rice terraces, ancient sea temples, volcanic landscapes, and beautiful beach clubs in this 4-day cultural immersion into Bali's heart.",
    highlights: [
      "Tegallalang Rice Terraces & Ubud Monkey Forest",
      "Iconic Tanah Lot Sea Temple at sunset",
      "Day trip to Nusa Penida: Kelingking & Broken Beach",
      "Traditional Balinese Kecak Fire Dance show",
      "Private air-conditioned vehicle for all excursions",
    ],
    price: "Starting ₹42,000/- per couple",
    priceNote: "Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali – Ubud Welcome",
        description:
          "Arrive at Denpasar Airport. Meet our guide and take your private transfer to your resort in Ubud. Relax and enjoy the lush jungle surroundings in the evening.",
      },
      {
        day: 2,
        title: "Ubud Cultural Tour & Rice Terraces",
        description:
          "Visit the sacred Ubud Monkey Forest, stroll through the breathtaking Tegallalang Rice Terraces, and swing over the valleys. In the evening, witness a traditional Balinese Kecak dance show.",
      },
      {
        day: 3,
        title: "Nusa Penida Island Day Trip",
        description:
          "Take a fast boat to Nusa Penida. Visit the famous T-Rex-shaped Kelingking Beach, Angel's Billabong, and Broken Beach. Swim in Crystal Bay before heading back.",
      },
      {
        day: 4,
        title: "Tanah Lot Sunset & Departure",
        description:
          "Visit the iconic Tanah Lot Temple resting on a rocky ocean outcrop at sunset. Buy souvenirs at Ubud Art Market and transfer to the airport for departure.",
      },
    ],
  },
  {
    id: "int-pattaya-bangkok",
    slug: "pattaya-bangkok",
    name: "Pattaya & Bangkok",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/bangkok.jpg",
    description:
      "Experience the perfect blend of pristine tropical beaches in Pattaya and the vibrant street life, temples, and shopping malls of Bangkok in this action-packed Thailand package.",
    highlights: [
      "Coral Island speedboat tour with parasailing options",
      "Bangkok City Tour: Golden Buddha & Marble Temple",
      "Stunning Alcazar Cabaret Show in Pattaya",
      "Siam Paragon & MBK Center shopping in Bangkok",
      "Private airport transfers & daily breakfast",
    ],
    price: "Starting ₹22,000/- per head (2 Pax)",
    priceNote: "₹17,000/- (4 Pax) | ₹15,500/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok & Transfer to Pattaya",
        description:
          "Arrive at Bangkok International Airport. Meet our representative and transfer to Pattaya by private vehicle. Check in and explore Walking Street in the evening.",
      },
      {
        day: 2,
        title: "Coral Island Speedboat Tour",
        description:
          "Board a speedboat to Coral Island (Koh Larn). Enjoy water sports like parasailing or snorkeling. Savor Thai beach lunch. In the evening, witness the dazzling Alcazar Cabaret Show.",
      },
      {
        day: 3,
        title: "Transfer to Bangkok & City Temple Tour",
        description:
          "Drive back to Bangkok. Visit Wat Traimit (Temple of the Golden Buddha) and Wat Benchamabophit (The Marble Temple). Check in to your Bangkok hotel.",
      },
      {
        day: 4,
        title: "Shopping & Departure",
        description:
          "Shop at Siam Paragon or Chatuchak Weekend Market. Enjoy local street food. Private transfer to Bangkok airport for your departure flight.",
      },
    ],
  },
  {
    id: "int-malaysia-kl",
    slug: "malaysia-kuala-lumpur",
    name: "Kuala Lumpur",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/kuala-lumpur.jpg",
    description:
      "Explore the futuristic skyline and rich heritage of Malaysia's capital. From the iconic Petronas Twin Towers to the ancient Batu Caves, Kuala Lumpur offers a perfect blend of modernity and culture.",
    highlights: [
      "Petronas Twin Towers Skybridge entry tickets",
      "Half-day KL city tour & colorful Batu Caves",
      "Day tour to Genting Highlands with SkyWay Cable Car",
      "Centrally located premium hotel stay",
      "Daily breakfast & airport transfers",
    ],
    price: "Starting ₹17,500/- per head (2 Pax)",
    priceNote: "₹13,000/- (4 Pax) | ₹12,000/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kuala Lumpur",
        description:
          "Arrive at KLIA. Private transfer to your hotel. Spend the evening exploring the Bukit Bintang shopping strip and street food on Jalan Alor.",
      },
      {
        day: 2,
        title: "City Tour & Batu Caves",
        description:
          "Explore historic Merdeka Square, National Mosque, and the King's Palace. Ascend the 272 colorful steps at the magnificent Batu Caves temple.",
      },
      {
        day: 3,
        title: "Genting Highlands Day Trip",
        description:
          "Drive to Genting Highlands. Experience the Awana SkyWay cable car over the ancient rainforest. Explore theme parks and shopping malls at the peak.",
      },
      {
        day: 4,
        title: "Twin Towers & Departure",
        description:
          "Visit the Skybridge of Petronas Twin Towers. Take a final photo walk. Check out and transfer to KLIA for your departure flight.",
      },
    ],
  },
  {
    id: "int-malaysia-langkawi",
    slug: "malaysia-langkawi-island",
    name: "Langkawi",
    type: "international",
    duration: "3D/2N",
    image: "/images/destinations/langkawi.jpg",
    description:
      "Escape to the Jewel of Kedah. Langkawi offers duty-free shopping, breathtaking cable car views, lush mangrove forests, and pristine archipelago island-hopping adventures.",
    highlights: [
      "Langkawi SkyCab Cable Car & SkyBridge experience",
      "Mangrove Forest boat tour & Island Hopping",
      "Eagle Square (Dataran Lang) photoshoot",
      "Beachfront resort accommodation",
      "All private transfers included",
    ],
    price: "Starting ₹18,000/- per head (2 Pax)",
    priceNote: "₹13,500/- (4 Pax) | ₹12,500/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Langkawi",
        description:
          "Arrive at Langkawi Airport. Private transfer to your beachfront resort. Spend the evening strolling along Cenang Beach.",
      },
      {
        day: 2,
        title: "Langkawi SkyCab & Island Hopping",
        description:
          "Ride the world's steepest cable car up Mt. Machinchang and walk on the curved SkyBridge. Afternoon island-hopping to Dayang Bunting lake, Beras Basah island, and the Kilim Karst eagle feeding spot.",
      },
      {
        day: 3,
        title: "Eagle Square & Departure",
        description:
          "Visit the famous Eagle Square in Kuah Town. Free time for duty-free shopping before transferring to Langkawi Airport for your flight.",
      },
    ],
  },
  {
    id: "int-vietnam-danang-hanoi-saigon",
    slug: "vietnam-grand-tour",
    name: "Danang, Hanoi & Ho Chi Minh",
    type: "international",
    duration: "6D/5N",
    image: "/images/destinations/vietnam.jpg",
    description:
      "An extensive tour of Vietnam's three top cities. From the modern energy of Ho Chi Minh City to the ancient bridges of Danang and the elegant charm of Hanoi — a journey through Vietnam's soul.",
    highlights: [
      "Ba Na Hills Cable Car & Golden Hand Bridge, Danang",
      "Hoi An Ancient Town lantern-lit streets walk",
      "Halong Bay cruise experience, Hanoi",
      "Cu Chi Tunnels historical tour, Ho Chi Minh City",
      "Internal domestic flights within Vietnam included",
    ],
    price: "Starting ₹42,500/- per head (2 Pax)",
    priceNote: "₹36,500/- (4 Pax) | ₹32,000/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Danang",
        description:
          "Arrive at Danang International Airport. Private transfer to your beach resort. Spend the evening exploring My Khe Beach and local seafood restaurants.",
      },
      {
        day: 2,
        title: "Ba Na Hills & Golden Bridge",
        description:
          "Ascend Ba Na Hills via the world-record cable car. Walk on the majestic Golden Hands Bridge, explore the French Village, and enjoy Fantasy Park rides.",
      },
      {
        day: 3,
        title: "Hoi An Ancient Town & Fly to Hanoi",
        description:
          "Discover the UNESCO town of Hoi An — merchant houses, Japanese Covered Bridge, and a scenic Thu Bon River boat ride. Fly to Hanoi in the evening.",
      },
      {
        day: 4,
        title: "Hanoi City Tour & Halong Bay",
        description:
          "Visit Ho Chi Minh Mausoleum, One Pillar Pagoda, and Hoan Kiem Lake. Drive to Halong Bay port and board your cruise.",
      },
      {
        day: 5,
        title: "Hanoi to Ho Chi Minh City",
        description:
          "Fly to Ho Chi Minh City (Saigon). Visit the historical Cu Chi Tunnels, an immense network of underground passages used during the Vietnam War.",
      },
      {
        day: 6,
        title: "Saigon Sightseeing & Departure",
        description:
          "Visit Notre Dame Cathedral and the historic Central Post Office. Free time for shopping at Ben Thanh Market before your airport transfer.",
      },
    ],
  },
  {
    id: "int-vietnam-danang-hanoi",
    slug: "vietnam-heritage-danang-hanoi",
    name: "Danang & Hanoi",
    type: "international",
    duration: "5D/4N",
    image: "/images/destinations/danang.jpg",
    description:
      "Immerse yourself in Central and Northern Vietnam. Explore the incredible Golden Bridge of Danang, the historic gems of Hanoi, and the natural wonder of Halong Bay.",
    highlights: [
      "Full-day Ba Na Hills with Golden Hand Bridge",
      "Full-day Halong Bay cruise with seafood lunch",
      "Hanoi City Tour: Ho Chi Minh complex & Temple of Literature",
      "Walking tour of Hoi An Lantern Town",
      "Internal domestic flight included",
    ],
    price: "Starting ₹36,000/- per head (2 Pax)",
    priceNote: "₹32,500/- (4 Pax) | ₹29,500/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi",
        description:
          "Arrive at Hanoi's Noi Bai Airport. Private transfer to your boutique hotel. In the evening, enjoy a traditional Water Puppet Show.",
      },
      {
        day: 2,
        title: "Halong Bay Day Cruise",
        description:
          "Drive to Halong Bay port. Board a deluxe cruise. Explore Sung Sot Cave, kayak in Luon Cave, and hike Ti Top Island for panoramic views.",
      },
      {
        day: 3,
        title: "Hanoi City Tour & Fly to Danang",
        description:
          "Visit Ho Chi Minh Mausoleum, One Pillar Pagoda, and Temple of Literature. Fly to Danang in the evening and check in to your beach hotel.",
      },
      {
        day: 4,
        title: "Ba Na Hills & Golden Bridge",
        description:
          "Spend a magical day at Ba Na Hills. Take the cable car to see the massive stone hands holding the Golden Bridge above the clouds.",
      },
      {
        day: 5,
        title: "Hoi An & Departure",
        description:
          "Explore the unique architectural blend of Japanese, Chinese, and French styles in Hoi An. Return to Danang for departure.",
      },
    ],
  },
  {
    id: "int-hanoi",
    slug: "hanoi-vietnam-capital",
    name: "Hanoi & Halong Bay",
    type: "international",
    duration: "5D/4N",
    image: "/images/destinations/hanoi.jpg",
    description:
      "Discover the elegance of Hanoi with its French-colonial architecture, tree-lined boulevards, and famous Train Street. A scenic Halong Bay cruise completes this unforgettable Northern Vietnam escape.",
    highlights: [
      "Overnight luxury cruise on Halong Bay",
      "Guided tour: Hanoi Train Street & Ho Chi Minh complex",
      "Authentic Vietnamese cooking class experience",
      "Street food walking tour of Hanoi Old Quarter",
      "Private airport transfers included",
    ],
    price: "Starting ₹34,000/- per head (2 Pax)",
    priceNote: "₹29,000/- (4 Pax) | ₹24,500/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi",
        description:
          "Arrive in Hanoi. Check in to your boutique hotel. Stroll around the tranquil Hoan Kiem Lake and explore the Old Quarter.",
      },
      {
        day: 2,
        title: "Hanoi Street Food Tour & Train Street",
        description:
          "Walk through the Old Quarter tasting Banh Mi, Pho, and Egg Coffee. Watch a train pass inches away on Hanoi's famous Train Street.",
      },
      {
        day: 3,
        title: "Halong Bay Cruise",
        description:
          "Travel to Halong Bay. Board your cruise. Enjoy swimming, kayaking, sunset party on the sundeck, and night squid fishing.",
      },
      {
        day: 4,
        title: "Halong Bay to Hanoi",
        description:
          "Visit a pearl farm and cruise back to harbor. Transfer back to Hanoi. Free evening for shopping at the Night Market.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Check out and transfer to Noi Bai Airport for your flight home.",
      },
    ],
  },
  {
    id: "int-pattaya-budget",
    slug: "pattaya-beach-break",
    name: "Pattaya",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/pattaya.jpg",
    description:
      "Relax in Thailand's premier beach resort city. Perfect for water sports, beach dining, cabaret shows, and vibrant nightlife. An affordable yet exciting tropical escape for every traveller.",
    highlights: [
      "Speedboat Coral Island excursion with parasailing options",
      "Sanctuary of Truth all-wood temple visit",
      "Private transfers from Bangkok Airport",
      "Daily breakfast at a premium 3-star/4-star hotel",
      "Local tour coordinator support throughout",
    ],
    price: "Starting ₹18,500/- per head (2 Pax)",
    priceNote: "₹15,000/- (4 Pax) | ₹13,500/- (6 Pax) | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Hotel Check-in",
        description:
          "Arrive in Bangkok and take your private transfer to Pattaya. Check in and spend a relaxed evening at Pattaya Beach.",
      },
      {
        day: 2,
        title: "Coral Island Speedboat Tour",
        description:
          "Travel by speedboat to Koh Larn. Swim, snorkel, or sunbathe on pristine beaches. Enjoy fresh seafood lunch before returning to Pattaya.",
      },
      {
        day: 3,
        title: "Sanctuary of Truth Tour",
        description:
          "Visit the colossal all-wood Sanctuary of Truth temple showcasing ancient carving techniques. Spend the evening exploring night markets.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Check out after breakfast and transfer back to Bangkok Airport for your flight.",
      },
    ],
  },

  // ─── DOMESTIC PACKAGES ─────────────────────────────────────────────────────

  {
    id: "dom-kashmir",
    slug: "kashmir-paradise-valley",
    name: "Kashmir",
    type: "domestic",
    duration: "5D/4N",
    image: "/images/destinations/kashmir.jpg",
    description:
      "Experience the breathtaking beauty of the Kashmir Valley. From the Gulmarg gondola ride over snow-capped peaks to a serene shikara sail on Dal Lake, Kashmir is India's heaven on Earth.",
    highlights: [
      "Gulmarg Gondola (Phase 1 & 2) cable car ride",
      "Shikara boat ride on the magical Dal Lake",
      "Day excursion to Pahalgam & Betaab Valley",
      "Mughal Gardens: Shalimar Bagh & Nishat Bagh",
      "Comfortable houseboat or hotel stay in Srinagar",
    ],
    price: "Starting ₹13,000/- per head (2 Pax)",
    priceNote: "₹9,000/- (4 Pax) | ₹8,500/- (6 Pax) | Ex Srinagar | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Arrive at Srinagar Airport. Transfer to your hotel or houseboat on Dal Lake. Evening shikara ride on Dal Lake watching the sunset over the Himalayas.",
      },
      {
        day: 2,
        title: "Gulmarg Day Excursion",
        description:
          "Drive to Gulmarg (2,650 m). Ride the Gandola (Phase 1 & 2) to Kongdori and Apharwat Peak. Enjoy snow activities and breathtaking panoramic views.",
      },
      {
        day: 3,
        title: "Pahalgam & Betaab Valley",
        description:
          "Drive to Pahalgam — the Valley of Shepherds. Visit Betaab Valley, Aru Valley, and Chandanwari. Return to Srinagar by evening.",
      },
      {
        day: 4,
        title: "Mughal Gardens & Local Sightseeing",
        description:
          "Visit Nishat Bagh, Shalimar Bagh (Mughal Gardens), and the ancient Shankaracharya Temple. Stroll through the local handicraft market for souvenirs.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Enjoy a morning shikara ride on Dal Lake. Transfer to Srinagar Airport for your departure.",
      },
    ],
  },
  {
    id: "dom-delhi-agra-manali",
    slug: "delhi-agra-kullu-manali",
    name: "Delhi, Agra & Manali",
    type: "domestic",
    duration: "6D/5N",
    image: "/images/destinations/delhi-manali.jpg",
    description:
      "The ultimate North India tour combining the Mughal splendour of Delhi & Agra with the scenic mountain breezes and adventure activities of Kullu Manali. A journey from history to the Himalayas.",
    highlights: [
      "Sunrise visit to the iconic Taj Mahal in Agra",
      "Agra Fort guided tour with Mughal history",
      "Solang Valley adventure sports & Atal Tunnel",
      "Hadimba Temple & Vashisht Hot Springs, Manali",
      "Scenic Delhi to Manali mountain highway drive",
    ],
    price: "Starting ₹17,000/- per head (2 Pax)",
    priceNote: "₹10,500/- (4 Pax) | Ex Delhi | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Sightseeing",
        description:
          "Arrive in Delhi. Visit Qutub Minar, India Gate, and drive past Rashtrapati Bhavan.",
      },
      {
        day: 2,
        title: "Delhi to Agra – Taj Mahal & Agra Fort",
        description:
          "Drive to Agra. Experience the magical Taj Mahal at sunrise. Explore the massive Agra Fort — a UNESCO World Heritage Site.",
      },
      {
        day: 3,
        title: "Agra to Manali Drive",
        description:
          "Drive back to Delhi, then continue to Manali via NH3 (approx. 12-14 hours). Check in to your Manali resort.",
      },
      {
        day: 4,
        title: "Manali Local Sightseeing",
        description:
          "Visit the wooden Hadimba Devi Temple, Tibetan Monastery, and take a therapeutic dip in the Vashisht Hot Water Springs.",
      },
      {
        day: 5,
        title: "Solang Valley & Atal Tunnel",
        description:
          "Head to Solang Valley for paragliding, zorbing, and snow activities. Drive through the Atal Tunnel to explore Sissu in Lahaul Valley.",
      },
      {
        day: 6,
        title: "Manali to Delhi & Departure",
        description:
          "Drive back to Delhi by overnight bus or car. Transfer to Delhi airport or railway station for your onward journey.",
      },
    ],
  },
  {
    id: "dom-kullu-manali-kasol",
    slug: "kullu-manali-kasol",
    name: "Manali & Kasol",
    type: "domestic",
    duration: "6D/5N",
    image: "/images/destinations/kasol.jpg",
    description:
      "Combine the snow-capped peaks of Kullu Manali with the riverside hippie village of Kasol in the Parvati Valley. Perfect for nature lovers, trekkers, and those seeking mountain serenity.",
    highlights: [
      "Solang Valley snow sports & paragliding",
      "Kasol riverside camps by the Parvati River",
      "Kheerganga Trek through pine forests",
      "Kullu Valley white water river rafting on Beas",
      "Manikaran Gurudwara – natural hot springs",
    ],
    price: "Starting ₹9,500/- per head (2 Pax)",
    priceNote: "₹7,000/- (4 Pax) | Ex Delhi | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Delhi to Kasol Overnight Drive",
        description:
          "Board a night bus or drive from Delhi towards Kasol via Chandigarh and Bhuntar.",
      },
      {
        day: 2,
        title: "Kasol Arrival & Parvati Valley",
        description:
          "Arrive at Kasol. Check in to your riverside camp or guesthouse. Stroll along the Parvati River. Visit Manikaran Sahib Gurudwara and enjoy the natural hot springs.",
      },
      {
        day: 3,
        title: "Kasol to Manali",
        description:
          "Drive to Manali via Kullu. Enjoy scenic views of apple orchards. Check in to your resort.",
      },
      {
        day: 4,
        title: "Manali Local Sightseeing",
        description:
          "Visit Hadimba Devi Temple, Club House, Old Manali, and Vashisht Hot Springs.",
      },
      {
        day: 5,
        title: "Solang Valley & Atal Tunnel",
        description:
          "Spend the day at Solang Valley for paragliding, zorbing, and snow activities. Cross through the Atal Tunnel to Sissu, Lahaul.",
      },
      {
        day: 6,
        title: "Manali to Delhi & Departure",
        description:
          "Depart via Volvo bus or private vehicle to Delhi for onward travel.",
      },
    ],
  },
  {
    id: "dom-rajasthan",
    slug: "rajasthan-royal-heritage",
    name: "Rajasthan",
    type: "domestic",
    duration: "5D/4N",
    image: "/images/destinations/rajasthan.jpg",
    description:
      "Step into the land of maharajas. Rajasthan's majestic forts, ornate palaces, vibrant bazaars, and colourful folk culture make it one of India's most spectacular destinations.",
    highlights: [
      "Amer Fort Jaipur: Jeep ride & guided tour",
      "Hawa Mahal, City Palace & Jantar Mantar, Jaipur",
      "Mehrangarh Fort & Jaswant Thada, Jodhpur",
      "Jaisalmer Golden Fort (Sonar Quila)",
      "Camel safari at sunset in the Thar Desert",
    ],
    price: "Starting ₹25,000/- per head (2 Pax)",
    priceNote: "₹19,000/- (4 Pax) | ₹18,000/- (6 Pax) | Ex Jaipur | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur – The Pink City",
        description:
          "Arrive in Jaipur. Visit the breathtaking Amer Fort on a Jeep ride, the Hawa Mahal, and Jantar Mantar observatory.",
      },
      {
        day: 2,
        title: "Jaipur to Jodhpur – The Blue City",
        description:
          "Drive to Jodhpur. Visit the imposing Mehrangarh Fort, Jaswant Thada cenotaph, and explore the blue-washed lanes of the old city.",
      },
      {
        day: 3,
        title: "Jodhpur to Jaisalmer – The Golden City",
        description:
          "Drive to Jaisalmer. Visit the iconic Sonar Quila (Golden Fort), Patwon Ki Haveli, and the lively Sadar Bazaar.",
      },
      {
        day: 4,
        title: "Sam Sand Dunes & Camel Safari",
        description:
          "Head to Sam Sand Dunes for a majestic sunset camel safari and folk music performance under a starlit Thar Desert sky.",
      },
      {
        day: 5,
        title: "Jaisalmer Departure",
        description:
          "Free morning for local shopping. Transfer to Jaisalmer railway station or airport for departure.",
      },
    ],
  },
  {
    id: "dom-lakshadweep",
    slug: "lakshadweep-coral-islands",
    name: "Lakshadweep",
    type: "domestic",
    duration: "4D/3N",
    image: "/images/destinations/lakshadweep.jpg",
    description:
      "Explore India's pristine coral paradise. Lakshadweep's turquoise lagoons, untouched coral reefs, white sandy beaches, and rich marine life offer an unmatched island retreat experience.",
    highlights: [
      "Snorkeling & scuba diving in crystal-clear lagoons",
      "Glass-bottom boat ride over coral reefs",
      "Kayaking through serene backwaters",
      "Agatti Island beachfront stay",
      "Deep-sea fishing & dolphin watching",
    ],
    price: "Starting ₹12,500/- per head (2 Pax)",
    priceNote: "₹11,500/- (4 Pax) | Ex Agatti | Without Flight Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival at Agatti Airport",
        description:
          "Arrive at Agatti Island Airport. Transfer to your island resort. Relax on the pristine white beach and enjoy the turquoise lagoon views.",
      },
      {
        day: 2,
        title: "Coral Reef Exploration",
        description:
          "Snorkel or scuba dive over spectacular coral gardens. Take a glass-bottom boat ride to see the reef. Evening campfire by the beach.",
      },
      {
        day: 3,
        title: "Island Hopping & Kayaking",
        description:
          "Explore nearby islands by speedboat. Kayak through tranquil lagoon waters. Try deep-sea fishing and spot playful dolphins in the afternoon.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Enjoy a final morning walk on the beach. Transfer to Agatti Airport for your departure flight.",
      },
    ],
  },
  {
    id: "dom-agra-delhi",
    slug: "agra-delhi-heritage",
    name: "Agra & Delhi",
    type: "domestic",
    duration: "3D/2N",
    image: "/images/destinations/agra.jpg",
    description:
      "A short but unforgettable historical getaway connecting India's modern capital Delhi with the ancient Mughal capital of Agra, home of the world-famous Taj Mahal.",
    highlights: [
      "Taj Mahal guided tour at sunrise",
      "Agra Fort & Baby Taj (Itmad-ud-Daulah)",
      "Delhi: Red Fort, Qutub Minar & India Gate",
      "Shopping at Connaught Place & Kinari Bazaar",
      "Comfortable highway road transfers",
    ],
    price: "Starting ₹11,000/- per head (2 Pax)",
    priceNote: "₹8,000/- (4 Pax) | ₹7,000/- (6 Pax) | Ex Delhi | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Sightseeing",
        description:
          "Arrive in Delhi. Visit India Gate, Red Fort, Qutub Minar, and Humayun's Tomb. Evening shopping at Connaught Place.",
      },
      {
        day: 2,
        title: "Delhi to Agra – Taj Mahal & Agra Fort",
        description:
          "Drive via Yamuna Expressway to Agra. Visit the iconic Taj Mahal, the magnificent Agra Fort, and the delicate Baby Taj.",
      },
      {
        day: 3,
        title: "Return to Delhi & Departure",
        description:
          "Morning free for Taj Mahal sunrise view. Drive back to Delhi and transfer to airport or railway station.",
      },
    ],
  },
  {
    id: "dom-meghalaya",
    slug: "meghalaya-abode-of-clouds",
    name: "Meghalaya",
    type: "domestic",
    duration: "5D/4N",
    image: "/images/destinations/meghalaya.jpg",
    description:
      "Journey to the wettest place on Earth. Discover Meghalaya's living root bridges, crystal-clear rivers, massive waterfalls, limestone caves, and Asia's cleanest village.",
    highlights: [
      "Trek to Double Decker Living Root Bridge, Cherrapunji",
      "Boat ride on crystal-clear Umngot River, Dawki",
      "Mawlynnong – Asia's Cleanest Village",
      "Wei Sawdong & Nohkalikai Waterfalls",
      "Mawphlang Sacred Forest & Mawsmai Cave",
    ],
    price: "Starting ₹22,000/- per head (2 Pax)",
    priceNote: "₹16,000/- (4 Pax) | ₹15,000/- (6 Pax) | Ex Guwahati | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Guwahati to Shillong",
        description:
          "Arrive in Guwahati. Drive to Shillong, stopping at the beautiful Umiam Lake (Barapani) for photos. Check in to your Shillong hotel.",
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji & Waterfalls",
        description:
          "Drive to Cherrapunji. Visit Elephant Falls, Laitlum Canyons, Mawsmai Cave, and view the roaring Nohkalikai Falls.",
      },
      {
        day: 3,
        title: "Double Decker Living Root Bridge Trek",
        description:
          "Embark on the famous 3,000-step trek to the stunning Double Decker Living Root Bridge in Nongriat. Swim in blue natural pools.",
      },
      {
        day: 4,
        title: "Dawki River & Mawlynnong Village",
        description:
          "Boat on the transparent Umngot River at Dawki. Visit Mawlynnong, Asia's cleanest village, and see the single root bridge.",
      },
      {
        day: 5,
        title: "Shillong to Guwahati & Departure",
        description:
          "Explore Police Bazar for local shopping. Drive back to Guwahati. Optional visit to Kamakhya Temple. Transfer to airport/railway station.",
      },
    ],
  },
  {
    id: "dom-goa",
    slug: "goa-beach-paradise",
    name: "Goa",
    type: "domestic",
    duration: "3D/2N",
    image: "/images/destinations/goa.jpg",
    description:
      "India's most beloved beach destination offers sun-soaked shores, vibrant nightlife, Portuguese heritage, water sports, and delicious seafood — a perfect tropical escape from Kerala.",
    highlights: [
      "North Goa beaches: Calangute, Baga & Anjuna",
      "South Goa: Palolem & Colva tranquil beaches",
      "Water sports: parasailing, banana boat & jet ski",
      "Old Goa: Basilica of Bom Jesus UNESCO church",
      "Spice plantation tour with authentic Goan lunch",
    ],
    price: "Starting ₹7,000/- per head (2 Pax)",
    priceNote: "₹5,500/- (4 Pax) | ₹5,000/- (6 Pax) | Ex Kerala | With Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa – North Beaches",
        description:
          "Arrive at Goa by train from Kerala. Transfer to your hotel. Spend the day at Calangute, Baga, or Anjuna Beach. Enjoy water sports and evening at beach shacks.",
      },
      {
        day: 2,
        title: "Old Goa Heritage & South Beaches",
        description:
          "Visit the Basilica of Bom Jesus, Se Cathedral, and Fort Aguada. Afternoon at the tranquil Palolem or Colva Beach in South Goa.",
      },
      {
        day: 3,
        title: "Spice Plantation & Departure",
        description:
          "Morning spice plantation tour with a traditional Goan lunch. Afternoon free for shopping at Mapusa or Anjuna flea market. Transfer to Goa railway station.",
      },
    ],
  },
  {
    id: "dom-hyderabad",
    slug: "hyderabad-city-of-pearls",
    name: "Hyderabad",
    type: "domestic",
    duration: "4D/3N",
    image: "/images/destinations/hyderabad.jpg",
    description:
      "Explore the City of Pearls. Hyderabad's iconic Charminar, magnificent Golconda Fort, the grandeur of Ramoji Film City, and the world-famous Biryani await you in this vibrant city.",
    highlights: [
      "Full-day tour of Ramoji Film City",
      "Charminar, Mecca Masjid & Salar Jung Museum",
      "Golconda Fort with sound & light show",
      "Hussain Sagar Lake boat ride to Buddha statue",
      "Taste world-famous authentic Hyderabadi Biryani",
    ],
    price: "Starting ₹14,000/- per head (2 Pax)",
    priceNote: "₹12,000/- (4 Pax) | ₹11,500/- (6 Pax) | Ex Kerala | With Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hyderabad & Hussain Sagar",
        description:
          "Arrive in Hyderabad by train from Kerala. Visit Birla Temple and take a scenic boat ride on Hussain Sagar Lake to see the giant Buddha Statue. Watch the laser show at Lumbini Park.",
      },
      {
        day: 2,
        title: "Ramoji Film City",
        description:
          "Spend a full day exploring the world's largest integrated film studio complex, Ramoji Film City, with spectacular sets, live shows, and amusement parks.",
      },
      {
        day: 3,
        title: "Heritage Sightseeing",
        description:
          "Visit the iconic Charminar, Mecca Masjid, the majestic Golconda Fort, and shop for pearls at Laad Bazaar. Evening Golconda Fort sound & light show.",
      },
      {
        day: 4,
        title: "Salar Jung Museum & Departure",
        description:
          "Morning visit to Salar Jung Museum, one of the world's finest collections. Transfer to Hyderabad railway station for departure.",
      },
    ],
  },
  {
    id: "dom-golden-triangle",
    slug: "golden-triangle-india",
    name: "Delhi, Agra & Jaipur",
    type: "domestic",
    duration: "5D/4N",
    image: "/images/destinations/golden-triangle.jpg",
    description:
      "Immerse yourself in the royal history of India on the legendary Golden Triangle circuit. Journey through Delhi, Agra, and Jaipur — witnessing the Taj Mahal and majestic Rajput palaces.",
    highlights: [
      "Sunrise visit to the world-famous Taj Mahal in Agra",
      "Amer Fort in Jaipur with Jeep safari",
      "Delhi sightseeing: Red Fort, Qutub Minar, India Gate",
      "Hawa Mahal & Jantar Mantar Observatory, Jaipur",
      "Heritage hotel accommodation with private guide",
    ],
    price: "Starting ₹19,000/- per head (2 Pax)",
    priceNote: "₹15,000/- (4 Pax) | ₹13,500/- (6 Pax) | Ex Delhi | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Delhi Sightseeing",
        description:
          "Arrive in Delhi. Visit Qutub Minar, Lotus Temple, and drive past India Gate and Parliament House.",
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description:
          "Explore Red Fort and Jama Masjid in Old Delhi. Drive to Agra in the afternoon. Visit Agra Fort at sunset.",
      },
      {
        day: 3,
        title: "Taj Mahal Sunrise & Travel to Jaipur",
        description:
          "Witness the magnificent Taj Mahal at sunrise. Drive to Jaipur, stopping at Fatehpur Sikri — the ghost city on the way.",
      },
      {
        day: 4,
        title: "Jaipur Palace Tour",
        description:
          "Visit Amer Fort, Hawa Mahal, City Palace Museum, and the Jantar Mantar observatory.",
      },
      {
        day: 5,
        title: "Jaipur to Delhi & Departure",
        description:
          "Drive back to Delhi (approx. 5 hours). Transfer to airport or station for departure.",
      },
    ],
  },
  {
    id: "dom-kullu-manali",
    slug: "kullu-manali-snow-adventure",
    name: "Manali",
    type: "domestic",
    duration: "5D/4N",
    image: "/images/destinations/manali.jpg",
    description:
      "Escape to the snow-capped peaks of Himachal Pradesh. Experience paragliding in Solang Valley, cross the legendary Atal Tunnel, and relax in the charming valley of Kullu Manali.",
    highlights: [
      "Solang Valley snow sports & paragliding",
      "Atal Tunnel drive to Lahaul-Spiti's Sissu",
      "Hadimba Temple & Vashisht Hot Springs",
      "White water rafting in the Beas River, Kullu",
      "Comfortable Volvo bus or private car package",
    ],
    price: "Starting ₹6,750/- per head (2 Pax)",
    priceNote: "₹5,500/- (4 Pax) | Ex Delhi | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Arrive in Manali. Check in to your cozy mountain resort. Spend the evening walking around Mall Road.",
      },
      {
        day: 2,
        title: "Manali Local Sightseeing",
        description:
          "Visit the wooden Hadimba Devi Temple, Club House, Tibetan Monastery, and therapeutic Vashisht Hot Water Springs.",
      },
      {
        day: 3,
        title: "Solang Valley & Atal Tunnel",
        description:
          "Head to Solang Valley for adventure sports. Drive through Atal Tunnel to explore Sissu in Lahaul Valley.",
      },
      {
        day: 4,
        title: "Kullu Valley & River Rafting",
        description:
          "Drive to Kullu. Visit a local Shawl Factory. Experience thrilling river rafting on the icy Beas River.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Check out and enjoy free shopping time before transferring to Chandigarh/Delhi airport or boarding your Volvo bus.",
      },
    ],
  },
  {
    id: "dom-spiti-valley",
    slug: "spiti-valley-adventure",
    name: "Spiti Valley",
    type: "domestic",
    duration: "7D/6N",
    image: "/images/destinations/spiti.jpg",
    description:
      "Journey to the cold desert mountain valley of Spiti. At over 4,200 metres, Spiti offers ancient monasteries, lunar landscapes, starlit skies, and an adventure that pushes boundaries.",
    highlights: [
      "Key Monastery – one of India's highest monasteries",
      "Chandratal Lake (Moon Lake) at 4,300m altitude",
      "Kaza, Kibber & Tabo ancient monastery visits",
      "Chicham Bridge – Asia's highest bridge",
      "Kinnaur Valley & Sangla Valley scenic drives",
    ],
    price: "Starting ₹24,000/- per head (2 Pax)",
    priceNote: "₹16,000/- (4 Pax) | ₹14,500/- (6 Pax) | Ex Delhi | Without Train Tickets",
    itinerary: [
      {
        day: 1,
        title: "Delhi to Shimla / Overnight Drive",
        description:
          "Depart Delhi by night bus or private vehicle towards Shimla. Scenic overnight journey through the Shivalik Hills.",
      },
      {
        day: 2,
        title: "Shimla to Sangla (Kinnaur Valley)",
        description:
          "Drive through Kinnaur Valley via the Hindustan-Tibet Road. Visit Rampur, Jeori, and arrive at the scenic Sangla Valley.",
      },
      {
        day: 3,
        title: "Sangla to Tabo & Dhankar",
        description:
          "Drive into Spiti Valley. Visit the ancient Tabo Monastery (996 AD) and the cliff-side Dhankar Monastery with panoramic valley views.",
      },
      {
        day: 4,
        title: "Kaza – Key Monastery & Kibber",
        description:
          "Explore Key (Ki) Monastery, the largest in Spiti. Drive to Kibber village and Chicham Bridge — Asia's highest bridge.",
      },
      {
        day: 5,
        title: "Chandratal Lake (Moon Lake)",
        description:
          "Drive to the spectacular Chandratal Lake at 4,300m — a crescent-shaped high-altitude lake surrounded by towering peaks.",
      },
      {
        day: 6,
        title: "Return via Rohtang Pass to Manali",
        description:
          "Cross Kunzum Pass and descend to Manali via Rohtang Pass (subject to weather). Check in to Manali hotel.",
      },
      {
        day: 7,
        title: "Manali to Delhi & Departure",
        description:
          "Board the Volvo bus or private vehicle back to Delhi. Transfer to airport or railway station for departure.",
      },
    ],
  },

  // ─── COLLEGE TOUR PACKAGES ────────────────────────────────────────────────

  {
    id: "col-agra-delhi",
    slug: "college-agra-delhi",
    name: "Agra & Delhi",
    type: "college",
    duration: "2D/1N",
    image: "/images/college/agra-delhi.jpg",
    description:
      "The most budget-friendly college tour covering India's two most iconic heritage destinations. Visit the world-famous Taj Mahal in Agra and the historic Red Fort and Qutub Minar in Delhi. Perfect for a short study-trip or cultural excursion.",
    highlights: [
      "Taj Mahal guided heritage tour in Agra",
      "Agra Fort & Mehtab Bagh visit",
      "Delhi monuments: Red Fort, Qutub Minar & India Gate",
      "Comfortable AC bus transportation throughout",
      "Minimum 50 students – best group pricing",
    ],
    price: "Starting ₹5,000/- per head",
    priceNote: "Minimum 50 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Agra Heritage Tour",
        description:
          "Depart by AC bus. Arrive in Agra. Visit the magnificent Taj Mahal — a UNESCO World Heritage marvel. Explore Agra Fort with a certified guide. Overnight in Agra.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing & Departure",
        description:
          "Drive to Delhi. Visit the iconic Red Fort, Qutub Minar, and India Gate. Group photo session at major landmarks. Return journey by bus.",
      },
    ],
  },
  {
    id: "col-agra-delhi-manali",
    slug: "college-agra-delhi-manali",
    name: "Agra, Delhi & Manali",
    type: "college",
    duration: "5D/4N",
    image: "/images/college/manali-rafting.jpg",
    description:
      "The most popular college tour combining historical wonders of Agra & Delhi with the thrilling adventure and mountain beauty of Manali. Ideal for students looking for history, culture, and adventure in one epic journey.",
    highlights: [
      "Taj Mahal & Agra Fort guided heritage tour",
      "Delhi: Red Fort, Qutub Minar & India Gate",
      "Solang Valley – snow activities & paragliding",
      "River rafting on Beas River, Kullu",
      "Hadimba Temple & Vashisht Hot Springs, Manali",
    ],
    price: "Starting ₹7,900/- per head",
    priceNote: "Minimum 50 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Departure & Agra Heritage",
        description:
          "Depart overnight by AC bus. Arrive Agra in the morning. Visit Taj Mahal and Agra Fort with a certified guide.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing & Overnight to Manali",
        description:
          "Drive to Delhi. Visit Red Fort, Qutub Minar, and India Gate. Take overnight bus to Manali.",
      },
      {
        day: 3,
        title: "Manali Arrival & Local Sightseeing",
        description:
          "Arrive in Manali. Check in to hotel. Visit Hadimba Devi Temple, Tibetan Monastery, and Vashisht Hot Springs.",
      },
      {
        day: 4,
        title: "Solang Valley Snow Adventure",
        description:
          "Full day at Solang Valley. Experience snow activities, paragliding, zorbing, and team games. Group bonfire dinner in the evening.",
      },
      {
        day: 5,
        title: "Kullu River Rafting & Departure",
        description:
          "Thrilling white water river rafting on the Beas River at Kullu. Group lunch, shawl factory visit. Depart by overnight Volvo bus.",
      },
    ],
  },
  {
    id: "col-delhi-manali",
    slug: "college-delhi-manali",
    name: "Delhi & Manali",
    type: "college",
    duration: "4D/3N",
    image: "/images/college/manali-paragliding.jpg",
    description:
      "From the capital's iconic monuments to the Himalayas' breathtaking peaks — this tour packs maximum adventure into a 4-day itinerary. Perfect for colleges looking for a compact, action-packed mountain trip.",
    highlights: [
      "Delhi sightseeing: India Gate, Qutub Minar & Red Fort",
      "Paragliding & snow sports at Solang Valley",
      "Atal Tunnel drive to Sissu, Lahaul",
      "Hadimba Temple & Old Manali walk",
      "Comfortable Volvo AC bus with professional tour guide",
    ],
    price: "Starting ₹9,200/- per head",
    priceNote: "Minimum 50 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Delhi Sightseeing & Overnight to Manali",
        description:
          "Gather at Delhi. Visit Red Fort, Qutub Minar, and India Gate. Evening depart by overnight Volvo bus to Manali.",
      },
      {
        day: 2,
        title: "Manali Arrival & Local Sightseeing",
        description:
          "Arrive in Manali. Check in. Visit Hadimba Devi Temple, Club House, Tibetan Monastery, and Vashisht Hot Springs.",
      },
      {
        day: 3,
        title: "Solang Valley & Atal Tunnel",
        description:
          "Full day at Solang Valley. Enjoy paragliding, snow games, and zorbing. Drive through Atal Tunnel to the scenic Sissu valley.",
      },
      {
        day: 4,
        title: "Departure from Manali",
        description:
          "Morning free time at Mall Road. Group shopping for souvenirs. Board Volvo bus for Delhi/home. End of memorable journey.",
      },
    ],
  },
  {
    id: "col-agra-delhi-manali-kasol",
    slug: "college-agra-delhi-manali-kasol",
    name: "Agra, Delhi, Manali & Kasol",
    type: "college",
    duration: "7D/6N",
    image: "/images/college/kasol-camping.jpg",
    description:
      "The ultimate student adventure spanning heritage wonders, Himalayan peaks, and the iconic backpacker haven of Kasol. This 7-day tour is a life-changing experience for any college group — history, mountains, rivers, and camping under the stars.",
    highlights: [
      "Taj Mahal & Agra Fort guided heritage tour",
      "Solang Valley snow sports & paragliding, Manali",
      "Kasol riverside camping on the Parvati River",
      "Manikaran Sahib Gurudwara & natural hot springs",
      "Kheerganga Trek through pine forests (optional)",
    ],
    price: "Starting ₹9,600/- per head",
    priceNote: "Minimum 50 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Departure & Agra Heritage",
        description:
          "Depart by AC bus. Visit Taj Mahal and Agra Fort in the morning. Overnight travel to Delhi.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing & Overnight to Kasol",
        description:
          "Delhi tour: India Gate, Red Fort, Qutub Minar. Evening depart by overnight bus to Kasol.",
      },
      {
        day: 3,
        title: "Kasol Arrival & Parvati Valley",
        description:
          "Arrive Kasol. Check in to riverside camp. Visit Manikaran Gurudwara and soak in natural hot springs. Evening bonfire.",
      },
      {
        day: 4,
        title: "Kheerganga Trek (Optional) & Kasol Leisure",
        description:
          "Optional trek to Kheerganga through dense forests. Remaining students relax by the Parvati River and explore Kasol village.",
      },
      {
        day: 5,
        title: "Kasol to Manali Drive",
        description:
          "Scenic drive to Manali via Kullu. Check in to hotel. Evening stroll at Mall Road.",
      },
      {
        day: 6,
        title: "Solang Valley Adventure Day",
        description:
          "Full day at Solang Valley — paragliding, zorbing, snow activities, and team games. Group barbecue dinner.",
      },
      {
        day: 7,
        title: "Departure from Manali",
        description:
          "Souvenir shopping at Mall Road. Board overnight Volvo bus to Delhi/home. Trip ends with memories for a lifetime.",
      },
    ],
  },
  {
    id: "col-agra-delhi-manali-kasol-grahan",
    slug: "college-agra-delhi-manali-kasol-grahan",
    name: "Agra, Delhi, Manali, Kasol & Grahan",
    type: "college",
    duration: "8D/7N",
    image: "/images/college/grahan-village.jpg",
    description:
      "Our most comprehensive college tour including the remote Himalayan village of Grahan — a hidden gem accessible only by trek. This 8-day journey covers Mughal heritage, Himalayan adventure, riverside camping, and an authentic village trekking experience.",
    highlights: [
      "Taj Mahal & Red Fort guided heritage visits",
      "Manali: Solang Valley snow sports & paragliding",
      "Kasol riverside camping & Parvati Valley trek",
      "Grahan Village trek — a hidden Himalayan gem",
      "Manikaran Gurudwara natural hot springs dip",
    ],
    price: "Starting ₹11,400/- per head",
    priceNote: "Minimum 50 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Departure & Agra Heritage",
        description:
          "Overnight bus departure. Morning Taj Mahal and Agra Fort heritage tour with guide.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing & Overnight to Kasol",
        description:
          "Delhi: Red Fort, India Gate, and Qutub Minar. Overnight bus to Bhuntar/Kasol.",
      },
      {
        day: 3,
        title: "Kasol Arrival & River Walk",
        description:
          "Arrive Kasol. Check in to camp. Explore Kasol village, walk by the Parvati River. Manikaran Gurudwara and hot springs visit.",
      },
      {
        day: 4,
        title: "Grahan Village Trek",
        description:
          "Trek to Grahan — a remote, unspoiled Himalayan village surrounded by deodar forests at 7,100 ft. Overnight stay in traditional homestay.",
      },
      {
        day: 5,
        title: "Grahan to Kasol Descent & Drive to Manali",
        description:
          "Descend back to Kasol. Drive to Manali via the scenic Kullu Valley. Check in to hotel.",
      },
      {
        day: 6,
        title: "Manali Local Sightseeing",
        description:
          "Visit Hadimba Temple, Tibetan Monastery, Club House, and Vashisht Hot Springs.",
      },
      {
        day: 7,
        title: "Solang Valley Adventure",
        description:
          "Full adventure day at Solang Valley — paragliding, zorbing, snow games, and team activities. Bonfire night.",
      },
      {
        day: 8,
        title: "Departure from Manali",
        description:
          "Shopping at Mall Road. Depart for home with memories of the ultimate student adventure.",
      },
    ],
  },
  {
    id: "col-agra-delhi-kashmir",
    slug: "college-agra-delhi-kashmir",
    name: "Agra, Delhi & Kashmir",
    type: "college",
    duration: "6D/5N",
    image: "/images/college/kashmir-shikara.jpg",
    description:
      "Discover the stunning contrast of Mughal India and the paradise valleys of Kashmir on this 6-day college tour. From the Taj Mahal to a tranquil shikara ride on Dal Lake and the snowy slopes of Gulmarg — an unforgettable student journey.",
    highlights: [
      "Sunrise visit to the Taj Mahal & Agra Fort",
      "Shikara ride on the serene Dal Lake, Srinagar",
      "Gulmarg Gondola cable car to snow-covered peaks",
      "Pahalgam – Betaab Valley scenic excursion",
      "Mughal Gardens: Shalimar Bagh & Nishat Bagh",
    ],
    price: "Starting ₹11,400/- per head",
    priceNote: "Minimum 40 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Agra Heritage Tour",
        description:
          "Arrive Agra. Visit Taj Mahal at sunrise and Agra Fort. Overnight hotel.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing & Fly to Srinagar",
        description:
          "Visit Red Fort and Qutub Minar in Delhi. Fly to Srinagar. Check in to houseboat or hotel on Dal Lake.",
      },
      {
        day: 3,
        title: "Srinagar & Dal Lake",
        description:
          "Morning shikara ride on Dal Lake. Visit Mughal Gardens: Shalimar Bagh and Nishat Bagh. Shankaracharya Temple visit.",
      },
      {
        day: 4,
        title: "Gulmarg Gondola Day Trip",
        description:
          "Drive to Gulmarg. Ride the Gondola Phase 1 & 2 to Apharwat Peak. Snow activities, skiing, and panoramic views of the Himalayas.",
      },
      {
        day: 5,
        title: "Pahalgam & Betaab Valley",
        description:
          "Excursion to Pahalgam Valley. Visit Betaab Valley, Aru Valley, and Chandanwari. Scenic river walks and lunch by the Lidder River.",
      },
      {
        day: 6,
        title: "Departure from Srinagar",
        description:
          "Morning local market visit. Transfer to Srinagar Airport for return flight. End of tour.",
      },
    ],
  },
  {
    id: "col-agra-delhi-jaipur",
    slug: "college-agra-delhi-jaipur",
    name: "Agra, Delhi & Jaipur",
    type: "college",
    duration: "4D/3N",
    image: "/images/college/jaipur-golden-triangle.jpg",
    description:
      "Explore India's legendary Golden Triangle — the Taj Mahal in Agra, the monuments of Delhi, and the royal pink palaces of Jaipur. This 4-day tour is ideal for history, culture, and architecture enthusiasts in any college.",
    highlights: [
      "Taj Mahal and Agra Fort heritage visit",
      "Delhi: Red Fort, Qutub Minar, India Gate",
      "Amer Fort Jaipur with elephant or Jeep ride",
      "Hawa Mahal & City Palace Museum, Jaipur",
      "AC bus transport throughout & certified guide",
    ],
    price: "Starting ₹9,300/- per head",
    priceNote: "Minimum 50 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Departure & Agra Heritage",
        description:
          "Overnight bus departure. Arrive Agra morning. Visit Taj Mahal at sunrise and Agra Fort with certified guide.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing & Drive to Jaipur",
        description:
          "Tour Delhi — Red Fort, Jama Masjid, Qutub Minar, India Gate. Drive to Jaipur via Yamuna Expressway. Check in.",
      },
      {
        day: 3,
        title: "Jaipur Royal Heritage Tour",
        description:
          "Visit Amer Fort, Hawa Mahal (Palace of Winds), City Palace Museum, and the Jantar Mantar astronomical observatory.",
      },
      {
        day: 4,
        title: "Jaipur Markets & Departure",
        description:
          "Morning visit to Johri Bazaar for block printing and gemstone shopping. Depart for home. Tour concludes.",
      },
    ],
  },
  {
    id: "col-jaipur-jodhpur-jaisalmer",
    slug: "college-jaipur-jodhpur-jaisalmer",
    name: "Jaipur, Jodhpur & Jaisalmer",
    type: "college",
    duration: "5D/4N",
    image: "/images/college/rajasthan-forts.jpg",
    description:
      "Experience the royal grandeur of Rajasthan's three legendary cities. From the Pink City of Jaipur to the Blue City of Jodhpur and the Golden City of Jaisalmer — a 5-day journey through India's most spectacular desert kingdom.",
    highlights: [
      "Amer Fort & Hawa Mahal, Jaipur",
      "Mehrangarh Fort & Jaswant Thada, Jodhpur",
      "Jaisalmer Golden Fort (Sonar Quila)",
      "Camel safari at Sam Sand Dunes with folk music",
      "Certified guide & AC bus throughout Rajasthan",
    ],
    price: "Starting ₹9,900/- per head",
    priceNote: "Minimum 50 Pax Required | College Tour Plan",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur — The Pink City",
        description:
          "Arrive in Jaipur. Visit Amer Fort, Hawa Mahal (Palace of Winds), and Jantar Mantar. Evening at local markets.",
      },
      {
        day: 2,
        title: "Jaipur to Jodhpur — The Blue City",
        description:
          "Drive to Jodhpur. Visit the towering Mehrangarh Fort and Jaswant Thada. Explore the blue-washed lanes of the old city.",
      },
      {
        day: 3,
        title: "Jodhpur to Jaisalmer — The Golden City",
        description:
          "Drive to Jaisalmer. Visit the stunning Sonar Quila (Golden Fort), Patwon Ki Haveli, and Sadar Bazaar.",
      },
      {
        day: 4,
        title: "Sam Sand Dunes & Desert Camp",
        description:
          "Afternoon camel safari into the Thar Desert. Watch the sunset over the dunes. Enjoy folk music, dance, and campfire dinner in a desert camp.",
      },
      {
        day: 5,
        title: "Departure from Jaisalmer",
        description:
          "Morning free for local shopping. Transfer to Jaisalmer railway station or airport. End of epic Rajasthan college tour.",
      },
    ],
  },
];