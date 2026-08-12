export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  slug: string;
  name: string;
  type: "international" | "domestic";
  duration: string;
  image: string;
  description: string;
  highlights: string[];
  price: string;
  itinerary: ItineraryDay[];
}

export const packages: Package[] = [
  // INTERNATIONAL PACKAGES
  {
    id: "int-pattaya-bangkok",
    slug: "pattaya-bangkok",
    name: "Pattaya & Bangkok Explorer",
    type: "international",
    duration: "5D/4N",
    image: "/images/destinations/bangkok.jpg",
    description: "Experience the perfect blend of pristine tropical beaches in Pattaya and the vibrant, bustling street life, temples, and shopping malls of Bangkok.",
    highlights: [
      "Coral Island tour with speed boat and lunch",
      "Bangkok City tour including Golden Buddha temple",
      "Stunning Alcazar Cabaret Show in Pattaya",
      "Luxury stay in selected 4-star hotels",
      "Daily buffet breakfast & private airport transfers"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Bangkok & Transfer to Pattaya", description: "Arrive at Bangkok International Airport. Meet our representative and transfer directly to Pattaya in a private vehicle. Check in to your hotel and spend the evening exploring the famous Walking Street at leisure." },
      { day: 2, title: "Coral Island Speedboat Tour", description: "Board a speedboat to Coral Island (Koh Larn). Enjoy water sports like parasailing, sea walking, or snorkeling (optional). Savor a delicious Thai lunch on the beach before returning to Pattaya. In the evening, witness the dazzling Alcazar Cabaret Show." },
      { day: 3, title: "Transfer to Bangkok & City Temple Tour", description: "Check out after breakfast and drive back to Bangkok. En route, embark on a city tour visiting the famous Wat Traimit (Temple of the Golden Buddha) and Wat Benchamabophit (The Marble Temple). Check into your Bangkok hotel for a relaxing evening." },
      { day: 4, title: "Leisure and Shopping in Bangkok", description: "Spend a full day shopping at Bangkok's premier retail hubs like Siam Paragon, MBK Center, or the bustling Chatuchak Weekend Market. Enjoy delicious local street food." },
      { day: 5, title: "Departure", description: "Enjoy breakfast at the hotel, check out, and take your private transfer back to Bangkok airport for your flight home." }
    ]
  },
  {
    id: "int-maldives",
    slug: "maldives-paradise",
    name: "Maldives Luxury Escape",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/maldives.jpg",
    description: "Indulge in a premium getaway in a private overwater villa surrounded by turquoise waters, coral reefs, and pristine white sandy beaches.",
    highlights: [
      "Stay in a luxury Overwater Villa with direct lagoon access",
      "All-inclusive meal plan (breakfast, lunch, dinner, drinks)",
      "Speedboat transfers from Malé Airport",
      "Complimentary snorkeling equipment and non-motorized water sports",
      "Sunset dolphin cruise experience"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Welcome to Paradise", description: "Arrive at Malé International Airport and transfer to your luxury resort via a scenic speedboat ride. Check in to your overwater villa, sip a welcome cocktail, and enjoy the breathtaking ocean views." },
      { day: 2, title: "Snorkeling & Coral Reef Exploration", description: "Start the day with a guided snorkeling excursion to explore the resort's house reef. Discover colorful coral gardens, sea turtles, and exotic fish. In the afternoon, pamper yourself with a relaxing couples' spa session." },
      { day: 3, title: "Sunset Cruise & Dolphin Watching", description: "Spend the day relaxing on the beach or kayaking. Late in the afternoon, embark on a scenic dhoni cruise to spot playful dolphins leaping against a golden sunset." },
      { day: 4, title: "Departure", description: "Savor a final beachside breakfast. Check out and take the speedboat transfer back to Malé airport for your journey home." }
    ]
  },
  {
    id: "int-bali",
    slug: "bali-cultural-beaches",
    name: "Bali Wonders & Culture",
    type: "international",
    duration: "6D/5N",
    image: "/images/destinations/bali.jpg",
    description: "Discover the Island of the Gods. Explore the green rice terraces of Ubud, ancient sea temples, volcanic landscapes, and beautiful beach clubs.",
    highlights: [
      "Guided tour of Ubud Monkey Forest & Tegallalang Rice Terraces",
      "Sunset at the iconic Tanah Lot Sea Temple",
      "Day trip to Nusa Penida (Kelingking Beach & Broken Beach)",
      "Traditional Balinese Kecak Fire Dance performance",
      "Private air-conditioned vehicle for all excursions"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Bali", description: "Arrive at Denpasar Airport. Meet our guide and take your private transfer to your resort in Ubud. Relax and enjoy the lush jungle surroundings." },
      { day: 2, title: "Ubud Cultural Tour & Rice Terraces", description: "Visit the sacred Ubud Monkey Forest, stroll through the breathtaking Tegallalang Rice Terraces, and swing over the valleys. In the evening, witness a traditional Balinese dance show." },
      { day: 3, title: "Kintamani Volcano & Holy Springs", description: "Drive up to Kintamani for panoramic views of active Mount Batur and its crater lake. Visit the holy spring waters at Tirta Empul Temple for a spiritual purification ritual." },
      { day: 4, title: "Nusa Penida Island Day Trip", description: "Take a fast boat to Nusa Penida. Visit the famous T-Rex-shaped Kelingking Beach, Angel's Billabong, and Broken Beach. Swim in Crystal Bay before heading back to mainland Bali." },
      { day: 5, title: "Uluwatu Sunset & Tanah Lot", description: "Visit the stunning cliffside Uluwatu Temple, watch the sunset Kecak Dance performance. Earlier, visit the iconic Tanah Lot Temple resting on a rocky ocean outcrop." },
      { day: 6, title: "Departure", description: "Enjoy a leisurely morning, buy souvenirs at Ubud Art Market, and transfer to the airport for your departure." }
    ]
  },
  {
    id: "int-malaysia-kl",
    slug: "malaysia-kuala-lumpur",
    name: "Kuala Lumpur City Escape",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/kuala-lumpur.jpg",
    description: "Explore the futuristic skyline and rich heritage of Malaysia's capital, highlighted by the Petronas Twin Towers and ancient Batu Caves.",
    highlights: [
      "Petronas Twin Towers Skybridge entry tickets",
      "Half-day Kuala Lumpur city tour & Batu Caves",
      "Day tour to Genting Highlands with two-way Cable Car",
      "Stay in a centrally located premium hotel",
      "Daily breakfast & airport transfers"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Kuala Lumpur", description: "Arrive at KLIA. Private transfer to your hotel. Spend the evening exploring the Bukit Bintang shopping strip and street food on Jalan Alor." },
      { day: 2, title: "City Tour & Batu Caves", description: "Explore the historic Merdeka Square, National Mosque, and King's Palace. Ascend the colorful 272 steps at the magnificent Batu Caves temple." },
      { day: 3, title: "Genting Highlands Day Trip", description: "Drive to Genting Highlands. Experience the Awana SkyWay cable car over the ancient rainforest. Explore the indoor/outdoor theme parks and shopping malls at the peak." },
      { day: 4, title: "Twin Towers & Departure", description: "Visit the skybridge of Petronas Twin Towers. Take a final photo walk, check out, and transfer to KLIA for your departure flight." }
    ]
  },
  {
    id: "int-malaysia-langkawi",
    slug: "malaysia-langkawi-island",
    name: "Langkawi Island Paradise",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/langkawi.jpg",
    description: "Escape to the jewel of Kedah. Langkawi offers duty-free shopping, breathtaking cable car views, and pristine archipelago adventures.",
    highlights: [
      "Langkawi Cable Car (SkyCab) & SkyBridge entry",
      "Mangrove Forest boat tour & Island Hopping",
      "Eagle Square (Dataran Lang) photoshoot",
      "Beachfront resort accommodation",
      "All transfers included"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Langkawi", description: "Arrive at Langkawi Airport. Private transfer to your beachfront resort. Spend the day walking along Cenang Beach." },
      { day: 2, title: "Langkawi SkyCab & SkyBridge", description: "Ride the steepest cable car in the world up Mt. Machinchang. Walk on the curved SkyBridge suspended high above the jungle. Explore the 3D Art Museum." },
      { day: 3, title: "Island Hopping & Mangrove Tour", description: "Embark on a boat tour to Dayang Bunting (Lake of the Pregnant Maiden), Beras Basah Island for swimming, and watch wild eagles feeding in the Kilim Karst Geoforest Park." },
      { day: 4, title: "Departure", description: "Visit the famous Eagle Square in Kuah Town. Free time for duty-free shopping before transferring to the airport for your flight." }
    ]
  },
  {
    id: "int-vietnam-danang-hanoi-saigon",
    slug: "vietnam-grand-tour",
    name: "Vietnam Grand: Danang, Hanoi & Saigon",
    type: "international",
    duration: "8D/7N",
    image: "/images/destinations/vietnam.jpg",
    description: "An extensive tour of Vietnam's top three hubs. From the modern energy of Ho Chi Minh City to the ancient bridges of Danang and the natural wonder of Halong Bay.",
    highlights: [
      "Overnight luxury cruise in the UNESCO World Heritage Halong Bay",
      "Cable car ride to Ba Na Hills & Golden Hand Bridge in Danang",
      "Explore Hoi An Ancient Town with lantern lit streets",
      "Cu Chi Tunnels and Mekong Delta tour in Saigon (Ho Chi Minh City)",
      "Domestic flights within Vietnam included"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Hanoi", description: "Arrive at Hanoi's Noi Bai Airport. Private transfer to your hotel. Enjoy a walk around the Old Quarter and Hoan Kiem Lake." },
      { day: 2, title: "Hanoi to Halong Bay Cruise", description: "Transfer to Halong Bay. Board a traditional luxury wooden junk cruise. Sail past limestone karsts, visit caves, and enjoy sunset dining on board." },
      { day: 3, title: "Halong Bay to Hanoi & Fly to Danang", description: "Morning tai chi on deck. Cruise back to port. Transfer to Hanoi airport for your flight to Danang. Check into your Danang resort." },
      { day: 4, title: "Ba Na Hills & Golden Bridge", description: "Ascend the hills via cable car. Walk on the majestic Golden Hands Bridge, explore the French Village, and enjoy Fantasy Park rides." },
      { day: 5, title: "Hoi An Ancient Town", description: "Discover the UNESCO town of Hoi An. Stroll through the historic merchant houses, Japanese Covered Bridge, and enjoy a scenic boat ride on Thu Bon River." },
      { day: 6, title: "Danang to Saigon & Cu Chi Tunnels", description: "Fly to Ho Chi Minh City. Visit the historical Cu Chi Tunnels, an immense network of underground tunnels used during the war." },
      { day: 7, title: "Mekong Delta Excursion", description: "Cruise along the Mekong River on a motorboat, experience rowing boats in canals, visit a honey farm, and taste local tropical fruits." },
      { day: 8, title: "Saigon Departure", description: "Visit the Notre Dame Cathedral and Central Post Office. Free time for shopping at Ben Thanh Market before your airport transfer." }
    ]
  },
  {
    id: "int-pattaya-budget",
    slug: "pattaya-beach-break",
    name: "Pattaya Beach Getaway",
    type: "international",
    duration: "4D/3N",
    image: "/images/destinations/pattaya.jpg",
    description: "Relax in Thailand's premier beach resort city. Perfect for water sports, beach dining, cabaret shows, and vibrant nightlife.",
    highlights: [
      "Speedboat Coral Island excursion with parasailing options",
      "Stunning Sanctuary of Truth temple visit",
      "Private transfers from Bangkok Airport",
      "Daily breakfast at a premium 3-star/4-star hotel",
      "Local tour coordinator support"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival & Hotel Check-in", description: "Arrive in Bangkok and take your private transfer to Pattaya. Check in and spend a relaxed evening at Pattaya Beach." },
      { day: 2, title: "Coral Island Speedboat Tour", description: "Travel by speedboat to Koh Larn. Swim, snorkel, or sunbathe. Enjoy a fresh seafood lunch before returning to Pattaya for a free evening." },
      { day: 3, title: "Sanctuary of Truth Tour", description: "Visit the Sanctuary of Truth, a colossal all-wood seaside temple showcasing ancient carving techniques. Spend the evening exploring the night markets." },
      { day: 4, title: "Departure", description: "Check out after breakfast and transfer back to Bangkok Airport for your flight." }
    ]
  },
  {
    id: "int-phuket-krabi",
    slug: "phuket-krabi-islands",
    name: "Phuket & Krabi Island Explorer",
    type: "international",
    duration: "6D/5N",
    image: "/images/destinations/phuket.jpg",
    description: "Discover the spectacular karst formations and beaches of Southern Thailand. Visit Phuket's lively beach clubs and Krabi's tranquil limestone cliffs.",
    highlights: [
      "Phi Phi Island tour by speedboat with buffet lunch",
      "Krabi 4-Island tour including Phra Nang Cave",
      "Phuket City Tour including Big Buddha and Wat Chalong",
      "Comfortable road transfer between Phuket and Krabi",
      "Selected 4-star boutique hotel accommodations"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Phuket", description: "Arrive at Phuket Airport. Transfer to your resort. Enjoy the beach sunset at Patong or Karon." },
      { day: 2, title: "Phi Phi Islands Tour by Speedboat", description: "Visit Maya Bay (where 'The Beach' was filmed), snorkel in Pileh Lagoon, visit Viking Cave, and interact with monkeys at Monkey Beach. Lunch included." },
      { day: 3, title: "Phuket City Tour & Transfer to Krabi", description: "Visit the landmark Big Buddha, the historic Wat Chalong temple, and Old Phuket Town. Drive to Krabi (approx. 2.5 hours) and check in." },
      { day: 4, title: "Krabi 4-Islands Tour", description: "Hop on a longtail boat to explore Phra Nang Cave, Tup Island, Chicken Island, and Poda Island. Ideal for swimming and reef photography." },
      { day: 5, title: "Leisure Day in Ao Nang", description: "Free day to relax at Ao Nang Beach, go rock climbing, or hike up Tiger Cave Temple." },
      { day: 6, title: "Departure from Krabi", description: "Check out and take your transfer to Krabi Airport for your return flight." }
    ]
  },
  {
    id: "int-vietnam-danang-hanoi",
    slug: "vietnam-heritage-danang-hanoi",
    name: "Vietnam Heritage: Danang & Hanoi",
    type: "international",
    duration: "6D/5N",
    image: "/images/destinations/danang.jpg",
    description: "Immerse yourself in Central and Northern Vietnam. Explore the historical gems of Hanoi and the incredible mountain bridges of Danang.",
    highlights: [
      "Full-day tour of Ba Na Hills and the Golden Bridge",
      "Full-day Halong Bay cruise with seafood lunch",
      "Hanoi City Tour including Temple of Literature",
      "Walking tour of Hoi An Lantern Town",
      "Internal domestic flight included"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Hanoi", description: "Arrive at Hanoi airport. Transfer to hotel. In the evening, watch a traditional Water Puppet Show." },
      { day: 2, title: "Halong Bay Day Cruise", description: "Drive to Halong Bay port. Board a deluxe cruise. Explore Sung Sot Cave (Surprising Cave), kayak in Luon Cave, and hike Ti Top Island." },
      { day: 3, title: "Hanoi City Tour & Fly to Danang", description: "Visit Ho Chi Minh Mausoleum, One Pillar Pagoda, and Temple of Literature. Fly to Danang in the evening." },
      { day: 4, title: "Ba Na Hills & Golden Bridge", description: "Spend a magical day at Ba Na Hills, taking the cable car to see the massive stone hands holding the Golden Bridge." },
      { day: 5, title: "Hoi An Ancient Village Tour", description: "Explore the unique architectural blend of Japanese, Chinese, and French styles in Hoi An. Return to Danang for a beachside dinner." },
      { day: 6, title: "Departure", description: "Free time at My Khe Beach, transfer to Danang airport for departure." }
    ]
  },
  {
    id: "int-hanoi",
    slug: "hanoi-vietnam-capital",
    name: "Classic Hanoi & Halong Bay",
    type: "international",
    duration: "5D/4N",
    image: "/images/destinations/hanoi.jpg",
    description: "Discover the elegance of Hanoi, with its French-colonial architecture, tree-lined boulevards, and a scenic cruise through Halong Bay.",
    highlights: [
      "Overnight luxury cruise on Halong Bay",
      "Guided tour of Hanoi's Train Street & Ho Chi Minh complex",
      "Authentic Vietnamese cooking class experience",
      "Street food walking tour of Hanoi Old Quarter",
      "Private airport transfers"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Hanoi", description: "Arrive in Hanoi. Check in to your boutique hotel. Stroll around Hoan Kiem Lake." },
      { day: 2, title: "Hanoi Street Food Tour & Train Street", description: "Walk through the Old Quarter tasting Banh Mi, Pho, and Egg Coffee. Watch a train pass inches away on Hanoi's famous Train Street." },
      { day: 3, title: "Halong Bay Overnight Cruise", description: "Travel to Halong Bay. Board your cruise. Enjoy swimming, sunset party on the sundeck, and night squid fishing." },
      { day: 4, title: "Halong Bay to Hanoi", description: "Visit a pearl farm, cruise back to harbor. Transfer back to Hanoi. Free evening for shopping." },
      { day: 5, title: "Departure", description: "Check out and transfer to airport for your flight home." }
    ]
  },

  // DOMESTIC PACKAGES
  {
    id: "dom-hyderabad",
    slug: "hyderabad-city-of-pearls",
    name: "Hyderabad Heritage Tour",
    type: "domestic",
    duration: "3D/2N",
    image: "/images/destinations/hyderabad.jpg",
    description: "Explore the City of Pearls. Visit the iconic Charminar, the historic Golconda Fort, and the grand Ramoji Film City.",
    highlights: [
      "Full-day tour of Ramoji Film City",
      "Laser show at Lumbini Park and boat ride on Hussain Sagar Lake",
      "Guided tour of Charminar, Mecca Masjid, and Salar Jung Museum",
      "Taste world-famous Hyderabadi Biryani",
      "Private vehicle for local sightseeing"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival & Hussain Sagar Lake", description: "Arrive in Hyderabad. Check in to hotel. Visit Birla Temple and enjoy a scenic boat ride on Hussain Sagar Lake to see the giant Buddha Statue. Watch the laser show at Lumbini Park." },
      { day: 2, title: "Ramoji Film City Excursion", description: "Spend a full day exploring the world's largest integrated film studio complex, Ramoji Film City, featuring spectacular sets, shows, and amusement parks." },
      { day: 3, title: "Heritage Sightseeing & Departure", description: "Visit the Charminar, Mecca Masjid, the majestic Golconda Fort, and shop for pearls at Laad Bazaar. Transfer to airport/railway station for departure." }
    ]
  },
  {
    id: "dom-meghalaya",
    slug: "meghalaya-abode-of-clouds",
    name: "Meghalaya: Abode of Clouds",
    type: "domestic",
    duration: "6D/5N",
    image: "/images/destinations/meghalaya.jpg",
    description: "Journey to the wettest place on Earth. Discover the living root bridges, crystal-clear rivers, massive waterfalls, and limestone caves of Meghalaya.",
    highlights: [
      "Trek to the Double Decker Living Root Bridge in Cherrapunji",
      "Boat ride in the crystal-clear Umngot River in Dawki",
      "Visit Mawlynnong – Cleanest Village in Asia",
      "Spectacular Wei Sawdong and Nohkalikai falls",
      "Explore Mawphlang Sacred Forest and Mawsmai Cave"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Guwahati to Shillong", description: "Arrive in Guwahati. Meet our driver and drive to Shillong. Stop by the beautiful Umiam Lake (Barapani) for watersports or photography. Check in to Shillong hotel." },
      { day: 2, title: "Shillong to Cherrapunji & Waterfalls", description: "Drive to Cherrapunji. Visit Elephant Falls, Laitlum Canyons, Mawsmai Cave, and view the roaring Nohkalikai Falls." },
      { day: 3, title: "Double Decker Living Root Bridge Trek", description: "Embark on an adventurous trek down 3,000 steps to the stunning Double Decker Living Root Bridge in Nongriat. Swim in blue natural pools." },
      { day: 4, title: "Cherrapunji to Dawki & Mawlynnong", description: "Drive to Mawlynnong, Asia's cleanest village. Visit the single root bridge. Later, head to Dawki for a boating session on the transparent waters of Umngot River. Stay in Shillong." },
      { day: 5, title: "Laitlum Canyons & Shillong Sightseeing", description: "Visit the breathtaking Laitlum Canyons (famous from movies). Explore the local Police Bazar in Shillong for shopping." },
      { day: 6, title: "Shillong to Guwahati & Departure", description: "Drive back to Guwahati. Visit Kamakhya Temple if time permits. Transfer to airport/railway station for departure." }
    ]
  },
  {
    id: "dom-kullu-manali",
    slug: "kullu-manali-snow-adventure",
    name: "Kullu Manali Snow Adventure",
    type: "domestic",
    duration: "5D/4N",
    image: "/images/destinations/manali.jpg",
    description: "Escape to the snow-capped peaks of Himachal Pradesh. Go paragliding in Solang Valley and cross the high-altitude Atal Tunnel.",
    highlights: [
      "Excursion to Solang Valley & Atal Tunnel",
      "Visit Rohtang Pass (subject to permission/snow)",
      "Sightseeing including Hadimba Temple & Vashisht Hot Springs",
      "White water rafting in the Beas River at Kullu",
      "Comfortable Volvo bus or private car package"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Arrival in Manali", description: "Arrive in Manali. Check in to your cozy mountain resort. Spend the evening walking around the Mall Road and visiting old cafes." },
      { day: 2, title: "Manali Local Sightseeing", description: "Visit the wooden Hadimba Devi Temple, Club House, Tibetan Monastery, and take a dip in the therapeutic Vashisht Hot Water Springs." },
      { day: 3, title: "Solang Valley & Atal Tunnel", description: "Head to Solang Valley for adventure sports (paragliding, zorbing, skiing). Drive through the engineering marvel, Atal Tunnel, to explore Sissu in Lahaul Valley." },
      { day: 4, title: "Kullu Valley & River Rafting", description: "Drive to Kullu. Visit a local Shawl Factory. Experience thrilling river rafting on the icy Beas River. Return to Manali." },
      { day: 5, title: "Departure", description: "Check out and enjoy free shopping time before transferring to Chandigarh/Delhi airport or boarding your Volvo bus." }
    ]
  },
  {
    id: "dom-golden-triangle",
    slug: "golden-triangle-india",
    name: "Golden Triangle Tour",
    type: "domestic",
    duration: "6D/5N",
    image: "/images/destinations/golden-triangle.jpg",
    description: "Immerse yourself in the royal history of India. Journey through Delhi, Agra, and Jaipur, witnessing the Taj Mahal and royal palaces.",
    highlights: [
      "Sunrise visit to the world-famous Taj Mahal in Agra",
      "Explore Amer Fort in Jaipur with Jeep ride",
      "Sightseeing in Delhi: Red Fort, Qutub Minar, India Gate",
      "Visit Fatehpur Sikri en route to Jaipur",
      "Stay in heritage properties with private guide"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Delhi Sightseeing", description: "Arrive in Delhi. Visit Qutub Minar, Lotus Temple, and drive past India Gate and Parliament House. Stay in Delhi." },
      { day: 2, title: "Delhi to Agra", description: "Explore Red Fort and Jama Masjid in Old Delhi. Drive to Agra in the afternoon. Check in and visit Agra Fort at sunset." },
      { day: 3, title: "Taj Mahal Sunrise & Travel to Jaipur", description: "Witness the magnificent Taj Mahal at sunrise. Return to hotel for breakfast. Drive to Jaipur, stopping at the ghost city of Fatehpur Sikri on the way." },
      { day: 4, title: "Jaipur Palace Tour", description: "Visit Amer Fort on a hilltop. Photograph Hawa Mahal (Palace of Winds), visit the City Palace Museum and the Jantar Mantar observatory." },
      { day: 5, title: "Jaipur Cultural Experience", description: "Visit local bazaars for jewelry, textiles, and handicrafts. Enjoy a traditional dinner at Chokhi Dhani ethnic resort." },
      { day: 6, title: "Jaipur to Delhi & Departure", description: "Drive back to Delhi (approx. 5 hours) and transfer to the airport/station for your departure flight." }
    ]
  },
  {
    id: "dom-agra-delhi",
    slug: "agra-delhi-getaway",
    name: "Agra & Delhi Heritage",
    type: "domestic",
    duration: "3D/2N",
    image: "/images/destinations/agra.jpg",
    description: "A short historical getaway connecting India's modern capital with the ancient Mughal capital of Agra, home of the Taj Mahal.",
    highlights: [
      "Taj Mahal guided tour",
      "Visit Agra Fort and Baby Taj (Itmad-ud-Daulah)",
      "Delhi shopping at Connaught Place and local markets",
      "Comfortable highway road transfers",
      "Boutique hotel accommodation"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Delhi Arrival & Sightseeing", description: "Arrive in Delhi. Visit India Gate, Humayun's Tomb, and shop in Connaught Place." },
      { day: 2, title: "Delhi to Agra & Agra Fort", description: "Drive via Yamuna Expressway to Agra. Visit Agra Fort, a massive red sandstone fortress on the banks of Yamuna River." },
      { day: 3, title: "Taj Mahal Visit & Return", description: "Visit Taj Mahal in the morning. Return to Delhi for airport/railway station transfer." }
    ]
  },
  {
    id: "dom-delhi-agra-manali",
    slug: "delhi-agra-manali-grand",
    name: "Grand Delhi, Agra & Manali Tour",
    type: "domestic",
    duration: "7D/6N",
    image: "/images/destinations/delhi-manali.jpg",
    description: "The ultimate North India tour combining the majestic history of Delhi & Agra with the scenic mountain breezes of Manali.",
    highlights: [
      "Visit Taj Mahal & Agra Fort",
      "Scenic mountain drive from Delhi to Manali",
      "Explore Solang Valley and Atal Tunnel in Manali",
      "Red Fort & Qutub Minar tours in Delhi",
      "All transfers in a private SUV"
    ],
    price: "Price on request",
    itinerary: [
      { day: 1, title: "Delhi Arrival & Sightseeing", description: "Arrive in Delhi. Tour Qutub Minar, India Gate, and drive past Rashtrapati Bhavan." },
      { day: 2, title: "Delhi to Agra & Taj Mahal", description: "Drive to Agra. Visit the breathtaking Taj Mahal and Agra Fort. Drive back to Delhi for night stay." },
      { day: 3, title: "Delhi to Manali Drive", description: "Embark on a long, scenic drive from Delhi to Manali (approx. 12 hours) alongside the hills. Check in to Manali resort." },
      { day: 4, title: "Manali Town Exploration", description: "Visit old Hadimba Temple, Tibetan Monastery, and walk around Mall Road." },
      { day: 5, title: "Solang Valley Snow Point", description: "Spend the day playing in snow, paragliding, and sightseeing around Solang Valley." },
      { day: 6, title: "Manali to Delhi Drive", description: "Travel back to Delhi by road. Check in and relax at your hotel." },
      { day: 7, title: "Delhi Departure", description: "Spend the morning shopping, then transfer to Delhi airport for your flight home." }
    ]
  }
];
