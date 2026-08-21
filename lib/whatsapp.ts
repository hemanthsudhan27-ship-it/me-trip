export interface SpecialistContact {
  rawPhone: string; // E.164 format without + for WhatsApp links e.g. "917736322522"
  formattedPhone: string; // e.g. "+91 77363 22522"
  region: string; // e.g. "International & Northeast Specialist"
}

export const DEFAULT_CONTACT: SpecialistContact = {
  rawPhone: "917736322522",
  formattedPhone: "+91 77363 22522",
  region: "General / International Enquiries",
};

// Destination keyword to phone mapping
const DESTINATION_CONTACTS: { keywords: string[]; contact: SpecialistContact }[] = [
  {
    keywords: ["manali", "agra", "delhi", "spiti", "spiti valley", "himachal"],
    contact: {
      rawPhone: "918593040034",
      formattedPhone: "+91 8593 040 034",
      region: "Manali, Agra, Delhi & Spiti Specialist",
    },
  },
  {
    keywords: ["goa", "lakshadweep"],
    contact: {
      rawPhone: "919207322522",
      formattedPhone: "+91 9207 322 522",
      region: "Goa & Lakshadweep Specialist",
    },
  },
  {
    keywords: ["kashmir", "rajasthan", "jaipur", "udaipur"],
    contact: {
      rawPhone: "918089950532",
      formattedPhone: "+91 8089 950 532",
      region: "Kashmir & Rajasthan Specialist",
    },
  },
  {
    keywords: ["hyderabad"],
    contact: {
      rawPhone: "916238922522",
      formattedPhone: "+91 6238 922 522",
      region: "Hyderabad Specialist",
    },
  },
  {
    keywords: [
      "meghalaya",
      "sikkim",
      "darjeeling",
      "thailand",
      "malaysia",
      "vietnam",
      "bali",
      "maldives",
      "phuket",
      "krabi",
      "bangkok",
      "pattaya",
      "kuala lumpur",
      "langkawi",
      "gangtok",
      "shillong",
    ],
    contact: {
      rawPhone: "917736322522",
      formattedPhone: "+91 77363 22522",
      region: "International & Northeast Specialist",
    },
  },
];

/**
 * Resolves the assigned specialist contact details for a given package name, destination, or slug.
 */
export function getSpecialistContact(destinationOrQuery?: string): SpecialistContact {
  if (!destinationOrQuery) return DEFAULT_CONTACT;

  const normalized = destinationOrQuery.toLowerCase().trim();

  for (const item of DESTINATION_CONTACTS) {
    if (item.keywords.some((kw) => normalized.includes(kw))) {
      return item.contact;
    }
  }

  return DEFAULT_CONTACT;
}

/**
 * Builds a direct WhatsApp URL with custom prefilled text routed to the appropriate specialist.
 */
export function buildWhatsAppUrl(destination: string, messageText: string): string {
  const contact = getSpecialistContact(destination);
  return `https://wa.me/${contact.rawPhone}?text=${encodeURIComponent(messageText)}`;
}
