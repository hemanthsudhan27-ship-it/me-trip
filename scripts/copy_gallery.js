const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\jangaDAJIKKU\\webui\\packages\\gallery';
const destDir = path.resolve(__dirname, '..', 'public', 'images', 'gallery');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.png') || f.toLowerCase().endsWith('.webp'));

console.log(`Found ${files.length} images in source directory.`);

const galleryItems = [];

files.forEach((file, index) => {
  const ext = path.extname(file);
  const newName = `trip-moment-${String(index + 1).padStart(2, '0')}${ext}`;
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, newName);

  fs.copyFileSync(srcFile, destFile);

  // Assign realistic categories in rotation/distribution
  // College groups, International holidays, Domestic tours
  let category = 'domestic';
  if (index % 3 === 0) category = 'college';
  else if (index % 3 === 1) category = 'international';
  else category = 'domestic';

  const titles = [
    "Himalayan Snow Adventure", "Tropical Island Getaway", "College Group Expedition",
    "Scenic Mountain Pass", "Riverside Campfire Night", "Luxury Lagoon Escape",
    "Ancient Heritage Exploration", "High Altitude Trekking", "Golden Desert Sunset",
    "Emerald Valley Waterfalls", "Coastal Beach Paradise", "Student Summit Celebration",
    "Alpine Forest Trail", "Sunset Cruise Experience", "Group Campus Holiday",
    "Snow Peak Panorama", "Charming Old Town Streets", "White Water Rafting Crew",
    "Tea Garden Serenity", "Iconic Karst Island Cruise", "Spiti Valley Road Journey",
    "Taj Mahal Heritage Walk", "Backwaters Serenity", "Ubud Rice Fields",
    "Paragliding Solang Valley", "Bonfire Stories & Music", "Langkawi Cable Car",
    "Batu Caves Temple Steps", "Pattaya Coral Speedboat", "Meghalaya Living Roots",
    "Kashmir Shikara Ride", "Rajasthan Royal Forts", "Gulmarg Snow Gondola",
    "Kasol Parvati Riverbanks", "Goa Coastal Sunset", "Halong Bay Junk Cruise",
    "Danang Golden Hands Bridge", "Manali Cedar Woods", "Agra Fort Ramparts",
    "Student Fun & Team Building", "Desert Camel Safari Caravan", "Jodhpur Blue City",
    "Shikara Lotus Waters", "Misty Hills & Tea Plantations", "Student Camping Vibe",
    "Tropical Palm Beach Walk", "Highland Cableway View", "Temple Heritage Tour",
    "Beas River Rapids", "Pine Ridge Sunset", "Island Hopping Adventure",
    "Spiti Ancient Monastery", "Golden Hour Dunes", "Students Mountain Peak",
    "Sunset Horizon & Waves", "Snow Fight in Solang", "Historic Palace Courtyards",
    "Riverside Wooden Cottages", "Coral Reef Snorkeling", "Scenic Highway Drive",
    "Valley of Flowers Trek", "Student Trekking Memories", "City Skyline Twilight",
    "Lake Reflection Dawn", "Travelers Celebration Moment"
  ];

  const title = titles[index % titles.length] || `Travel Moment ${index + 1}`;
  const descriptions = [
    "Unforgettable moments captured on tour with Me Trip Holidays.",
    "Breathtaking views and joyful memories created with our travel group.",
    "Experiencing culture, nature, and adventure across magnificent destinations.",
    "Cherished memories of laughter, bonding, and scenic discoveries.",
    "A journey of a lifetime crafted with precision and care by Me Trip Holidays."
  ];
  const description = descriptions[index % descriptions.length];

  galleryItems.push({
    id: index,
    src: `/images/gallery/${newName}`,
    title,
    category,
    description
  });
});

console.log(`Successfully copied ${files.length} images to ${destDir}`);

const dataContent = `export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "international" | "domestic" | "college";
  description: string;
}

export const galleryItems: GalleryItem[] = ${JSON.stringify(galleryItems, null, 2)};
`;

const dataPath = path.resolve(__dirname, '..', 'data', 'gallery.ts');
fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log(`Generated gallery data with ${galleryItems.length} items at ${dataPath}`);
