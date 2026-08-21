import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { UIModalProvider } from "@/providers/UIModalProvider";
import EnquiryModal from "@/components/ui/EnquiryModal";
import QuickViewModal from "@/components/ui/QuickViewModal";

// Load typography fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ME TRIP HOLIDAYS | Premium International & Domestic Tour Packages",
  description: "Book customized international and domestic holiday packages with ME TRIP HOLIDAYS. Explore Maldives, Bali, Thailand, Vietnam, Europe, Manali, Meghalaya, and more. 24/7 support and unbeatable prices.",
  keywords: [
    "travel agency",
    "holiday packages",
    "tours and travels",
    "customized itineraries",
    "Maldives packages",
    "Bali packages",
    "domestic tourism India",
    "international holidays",
    "Me Trip Holidays"
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "ME TRIP HOLIDAYS | Premium Tour Packages",
    description: "Book customized international and domestic holiday packages. Explore Maldives, Bali, Thailand, Manali, and more.",
    type: "website",
    locale: "en_US",
    siteName: "ME TRIP HOLIDAYS",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <UIModalProvider>
          <SmoothScrollProvider>
            {/* Global Navbar */}
            <Navbar />

            {/* Main Page Content */}
            <main className="flex-grow pt-[72px] md:pt-[80px]">
              {children}
            </main>

            {/* Global Footer */}
            <Footer />

            {/* Floating Action Buttons */}
            <WhatsAppButton />

            {/* Global Modals */}
            <EnquiryModal />
            <QuickViewModal />
          </SmoothScrollProvider>
        </UIModalProvider>
      </body>
    </html>
  );
}
