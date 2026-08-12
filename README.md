# ME TRIP HOLIDAYS — Marketing Website

This is a premium, modern, and production-ready marketing website for **ME TRIP HOLIDAYS**, a tours and travels agency selling domestic and international holiday packages.

Built from scratch using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis** smooth scroll.

---

## Technical Features

1. **Lenis Smooth Scroll:** Global smooth scrolling configured via `SmoothScrollProvider` in client animation frames. Includes native scroll behavior for touch/mobile devices, full interception of anchor links, and respect for `prefers-reduced-motion` settings.
2. **Unified Modals:** 
   * **Enquiry / Book Now Modal:** Global form managed through React Context (`UIModalProvider`). Collects name, email, phone, and selected destination package, featuring Zod validations and inline success screens.
   * **Package Quick View Modal:** Triggers a dialog card from any package card to preview highlights, details, and price tags before opening the enquiry form.
   * **Gallery Lightbox:** Staggered masonry click-to-expand modal supporting keyboard arrow navigation.
3. **Typography & Theme:** Sora (Headings) and Inter (Body) loaded via Next.js Google Fonts. Curated HSL colors styled in `globals.css` (Sunset Coral & Deep Ocean Navy).
4. **Rich Content:** 16 pre-configured domestic & international tour packages with customizable, structured day-by-day itineraries.

---

## Directory Structure

```text
├── app/                        # App Router Pages
│   ├── about/                  # About Page (Milestones, Values)
│   ├── contact/                # Contact Us Page (Coordinates, Contact Form, Google Map)
│   ├── gallery/                # Staggered Photo Grid (Tabs, Gallery Lightbox)
│   ├── packages/[slug]/        # Dynamic Tour Details (Itineraries Accordion, Sidebar)
│   ├── layout.tsx              # Root Layout wrapping Nav, Footer, and Context Providers
│   ├── globals.css             # Tailwind v4 Theme Variables & Styling Layers
│   └── page.tsx                # Home Page (Hero, Search Planner, Featured Cards)
├── components/                 # Component Directory
│   ├── layout/                 # Global UI wrappers (Navbar, Footer, Floating WhatsApp)
│   └── ui/                     # Reusable elements & Dialog Modals
├── data/                       # Core Data Store
│   └── packages.ts             # Tour Packages & Itineraries Data File
├── providers/                  # React Context Wrappers
│   ├── SmoothScrollProvider.tsx# Lenis setup & Link Anchor click interception
│   └── UIModalProvider.tsx     # Centralized State for global modals
├── public/                     # Static assets (contains 10 generated travel images)
│   └── images/                 # Hero background & destination cards
├── next.config.ts              # Next.js configurations (Image remotePattern authorizations)
├── tsconfig.json               # TypeScript Compiler settings
└── package.json                # Project Dependencies
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js (LTS)](https://nodejs.org) installed on your system.

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### 3. Build for Production

To compile and verify all TypeScript, lint, and optimization steps:

```bash
npm run build
```

The static resources will compile into `.next` for optimized serving.

---

## Customization Instructions

### 1. Replacing Package Data & Copy
To add, modify, or remove packages, edit [data/packages.ts](data/packages.ts). The search engines, dropdown menus, quick views, and detail pages will automatically update.
Each package requires:
* `id`: Unique identifier (e.g. `int-bali`)
* `slug`: URL suffix (e.g. `bali-cultural-beaches`)
* `name`: Display heading
* `type`: `'international'` or `'domestic'`
* `duration`: Text string (e.g. `6D/5N`)
* `price`: Default pricing or `'Price on request'`
* `image`: Path to static image in `/public/images/destinations/`
* `description`: Compelling intro paragraphs
* `highlights`: Array of bullet checks
* `itinerary`: Array of `{ day, title, description }` objects

### 2. Swapping Images
Our high-quality travel photographs are located in `/public/images/destinations/`. To insert real agency photos, overwrite the corresponding files in `/public/images/destinations/` keeping the identical filenames.
* Hero Background: `/public/images/hero.jpg`
* Maldives: `/public/images/destinations/maldives.jpg`
* Bali: `/public/images/destinations/bali.jpg`
* Bangkok: `/public/images/destinations/bangkok.jpg`
* Kuala Lumpur: `/public/images/destinations/kuala-lumpur.jpg`
* Vietnam: `/public/images/destinations/vietnam.jpg`
* Hyderabad: `/public/images/destinations/hyderabad.jpg`
* Meghalaya: `/public/images/destinations/meghalaya.jpg`
* Manali: `/public/images/destinations/manali.jpg`
* Golden Triangle: `/public/images/destinations/golden-triangle.jpg`

### 3. Contact Coordinates
To update phone numbers, physical address, social handles, or working hours, edit:
* **Navbar Contact Phone:** [Navbar.tsx](components/layout/Navbar.tsx)
* **Footer Address & Links:** [Footer.tsx](components/layout/Footer.tsx)
* **Contact Page Coordinates:** [contact/page.tsx](app/contact/page.tsx)
* **WhatsApp Chat Numbers:**
  * Floating widget: [WhatsAppButton.tsx](components/layout/WhatsAppButton.tsx)
  * Footer link: [Footer.tsx](components/layout/Footer.tsx)
  * Contact callout: [contact/page.tsx](app/contact/page.tsx)
