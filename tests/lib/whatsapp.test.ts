import { describe, it, expect } from "vitest";
import {
  getSpecialistContact,
  buildWhatsAppUrl,
  DEFAULT_CONTACT,
} from "@/lib/whatsapp";

describe("WhatsApp Specialist Routing & URL Generator", () => {
  it("should return the default contact when no destination or empty query is provided", () => {
    expect(getSpecialistContact()).toEqual(DEFAULT_CONTACT);
    expect(getSpecialistContact("")).toEqual(DEFAULT_CONTACT);
    expect(getSpecialistContact("   ")).toEqual(DEFAULT_CONTACT);
  });

  it("should correctly route north India destinations (Manali, Agra, Delhi, Spiti)", () => {
    const contactManali = getSpecialistContact("Manali Adventure Tour");
    expect(contactManali.rawPhone).toBe("918593040034");
    expect(contactManali.formattedPhone).toBe("+91 8593 040 034");

    const contactSpiti = getSpecialistContact("Spiti Valley Expedition");
    expect(contactSpiti.rawPhone).toBe("918593040034");

    const contactAgra = getSpecialistContact("Golden Triangle Delhi Agra");
    expect(contactAgra.rawPhone).toBe("918593040034");
  });

  it("should correctly route beach/island destinations (Goa, Lakshadweep)", () => {
    const contactGoa = getSpecialistContact("Goa Beach Party Package");
    expect(contactGoa.rawPhone).toBe("919207322522");
    expect(contactGoa.formattedPhone).toBe("+91 9207 322 522");

    const contactLakshadweep = getSpecialistContact("Lakshadweep Samudram Cruise");
    expect(contactLakshadweep.rawPhone).toBe("919207322522");
  });

  it("should correctly route royal & heritage destinations (Kashmir, Rajasthan)", () => {
    const contactKashmir = getSpecialistContact("Kashmir Paradise Gulmarg");
    expect(contactKashmir.rawPhone).toBe("918089950532");
    expect(contactKashmir.formattedPhone).toBe("+91 8089 950 532");

    const contactRajasthan = getSpecialistContact("Royal Rajasthan Heritage Tour");
    expect(contactRajasthan.rawPhone).toBe("918089950532");
  });

  it("should correctly route Hyderabad specialist", () => {
    const contactHyderabad = getSpecialistContact("Hyderabad City & Ramoji");
    expect(contactHyderabad.rawPhone).toBe("916238922522");
    expect(contactHyderabad.formattedPhone).toBe("+91 6238 922 522");
  });

  it("should correctly route international and northeast destinations", () => {
    const contactThailand = getSpecialistContact("Thailand Bangkok & Phuket");
    expect(contactThailand.rawPhone).toBe("917736322522");

    const contactBali = getSpecialistContact("Bali Honeymoon Villa Tour");
    expect(contactBali.rawPhone).toBe("917736322522");

    const contactMaldives = getSpecialistContact("Maldives Resort Package");
    expect(contactMaldives.rawPhone).toBe("917736322522");

    const contactMeghalaya = getSpecialistContact("Meghalaya Living Roots Tour");
    expect(contactMeghalaya.rawPhone).toBe("917736322522");
  });

  it("should format rawPhone strictly as E.164 without '+' or non-digit characters", () => {
    const destinations = [
      "Manali",
      "Goa",
      "Kashmir",
      "Hyderabad",
      "Thailand",
      "Unknown Destination",
    ];

    destinations.forEach((dest) => {
      const contact = getSpecialistContact(dest);
      // Valid WhatsApp number format: starts with country code (e.g. 91) and digits only
      expect(contact.rawPhone).toMatch(/^[1-9][0-9]{10,14}$/);
      expect(contact.rawPhone).not.toContain("+");
      expect(contact.rawPhone).not.toContain(" ");
      expect(contact.rawPhone).not.toContain("-");
    });
  });

  it("buildWhatsAppUrl should generate a valid, properly URL-encoded wa.me link", () => {
    const message = "Hello! I'm interested in the Manali 5D/4N package for 2 adults.";
    const url = buildWhatsAppUrl("Manali Adventure", message);

    expect(url.startsWith("https://wa.me/918593040034?text=")).toBe(true);
    expect(url).toContain(encodeURIComponent(message));
    // Verify spaces are encoded as %20 or similar valid URL encoding
    expect(url).not.toContain(" ");
  });
});
