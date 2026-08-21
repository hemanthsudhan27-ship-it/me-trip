"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Compass, MapPin, Calendar, Tag, ArrowRight, Eye, Sparkles, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { packages, Package } from "@/data/packages";
import { useUIModals } from "@/providers/UIModalProvider";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DestinationsPage() {
  const { quickView, enquiry } = useUIModals();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "international" | "domestic" | "college">("all");

  // Filter packages based on tab & search query
  const filteredPackages = packages.filter((pkg) => {
    const matchesTab = activeTab === "all" || pkg.type === activeTab;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      pkg.name.toLowerCase().includes(query) ||
      pkg.description.toLowerCase().includes(query) ||
      pkg.highlights.some((h) => h.toLowerCase().includes(query));
    return matchesTab && matchesQuery;
  });

  const internationalCount = packages.filter((p) => p.type === "international").length;
  const domesticCount = packages.filter((p) => p.type === "domestic").length;
  const collegeCount = packages.filter((p) => p.type === "college").length;

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative h-[35vh] min-h-[260px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="World destinations"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#0b0d12]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-extrabold"
          >
            <Compass className="h-3.5 w-3.5 text-primary" />
            <span>Discover Your Next Escape</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-primary"
          >
            Explore Destinations
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-white/75 max-w-xl mx-auto leading-relaxed"
          >
            Browse our handpicked international, domestic &amp; college group holiday packages. Filter by type or search for your favorite getaway spot.
          </motion.p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="dot-bg bg-white dark:bg-card border border-border/60 p-5 sm:p-6 rounded-2xl shadow-xl space-y-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Tabs */}
              <div className="flex items-center bg-muted p-1 rounded-full border border-border w-full md:w-auto overflow-x-auto">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeTab === "all"
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All Tours ({packages.length})
                </button>
                <button
                  onClick={() => setActiveTab("international")}
                  className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeTab === "international"
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  International ({internationalCount})
                </button>
                <button
                  onClick={() => setActiveTab("domestic")}
                  className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeTab === "domestic"
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Domestic ({domesticCount})
                </button>
                <button
                  onClick={() => setActiveTab("college")}
                  className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeTab === "college"
                      ? "bg-yellow-400 text-yellow-950 shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  College Tours ({collegeCount})
                </button>
              </div>

              {/* Real-time Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by location, activity..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 rounded-full text-xs bg-muted/50 border-border focus-visible:ring-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Results Status Line */}
            <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-3">
              <span>
                Showing <strong className="text-foreground font-extrabold">{filteredPackages.length}</strong> destination package{filteredPackages.length !== 1 ? "s" : ""}
              </span>
              {(activeTab !== "all" || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveTab("all");
                    setSearchQuery("");
                  }}
                  className="text-primary hover:underline font-bold text-[11px]"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. DESTINATIONS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {filteredPackages.length > 0 ? (
            <motion.div
              key={`${activeTab}-${searchQuery}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
            >
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
                  className="group bg-white dark:bg-card border border-border/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Thumbnail */}
                  <div className="relative h-36 sm:h-60 w-full overflow-hidden bg-muted">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                    {/* Type Badge */}
                    <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 text-white text-[8px] sm:text-[10px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ${
                      pkg.type === "college" ? "bg-yellow-400 text-yellow-950" : "bg-black/40 backdrop-blur-md border border-white/20"
                    }`}>
                      {pkg.type === "international" ? "Intl" : pkg.type === "college" ? "College" : "Domestic"}
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-primary text-white text-[8px] sm:text-[10px] font-extrabold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-md">
                      {pkg.duration}
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={() => quickView.open(pkg)}
                      className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/20 hover:bg-white/40 border border-white/30 text-white backdrop-blur-md p-1.5 sm:p-2 rounded-full shadow-lg transition-transform hover:scale-110"
                      title="Quick Preview"
                    >
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>

                    {/* Destination Name Overlay */}
                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 right-10 sm:right-16">
                      <h3 className="font-heading font-extrabold text-sm sm:text-xl text-white leading-tight drop-shadow-md">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-4">
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1 sm:space-y-1.5 border-t border-border/50 pt-2 sm:pt-3">
                      <span className="text-[9px] sm:text-[10px] font-extrabold text-primary uppercase tracking-widest block">
                        Highlights
                      </span>
                      <ul className="space-y-1">
                        {pkg.highlights.slice(0, 2).map((hl, hIdx) => (
                          <li key={hIdx} className="text-[10px] sm:text-[11px] text-foreground/80 flex items-center gap-1 line-clamp-1">
                            <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-accent shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & Action Row */}
                    <div className="flex items-center justify-between border-t border-border/50 pt-3 sm:pt-4 mt-auto">
                      <div>
                        <span className="text-[8px] sm:text-[9px] font-extrabold text-muted-foreground uppercase tracking-wider block">From</span>
                        <span className="font-heading font-extrabold text-xs sm:text-lg text-primary">{pkg.price}</span>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-2">
                        <Button
                          onClick={() => enquiry.open(pkg.name)}
                          className="bg-primary hover:bg-primary/95 text-white font-extrabold text-[10px] sm:text-xs px-2.5 sm:px-4 py-1 sm:py-2 h-auto rounded-full shadow-md active:scale-95 transition-transform"
                        >
                          Enquire
                        </Button>
                        <Link href={`/packages/${pkg.slug}`}>
                          <Button
                            variant="outline"
                            className="rounded-full px-1.5 sm:px-3 py-1 sm:py-2 h-auto text-[10px] sm:text-xs border-border hover:bg-muted"
                            title="View Itinerary"
                          >
                            <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty Search State */
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 space-y-4 bg-white dark:bg-card border border-border/60 rounded-2xl shadow-md p-8"
            >
              <Compass className="h-12 w-12 text-muted-foreground mx-auto animate-bounce" />
              <h3 className="font-heading font-extrabold text-xl text-foreground">
                No Destinations Match Your Filter
              </h3>
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                We couldn't find any packages matching "{searchQuery}". Try searching for another destination or reset your filter.
              </p>
              <Button
                onClick={() => {
                  setActiveTab("all");
                  setSearchQuery("");
                }}
                className="bg-primary text-white font-bold rounded-full px-6 py-2 text-xs"
              >
                Show All Destinations
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. CUSTOM TRIP PLANNING BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" duration={0.7}>
          <div className="relative rounded-3xl overflow-hidden py-14 px-8 sm:px-16 text-center text-white bg-gradient-to-br from-primary via-accent to-primary shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Can't Find Your Dream Destination?
              </h2>
              <p className="text-white/85 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                We craft custom itineraries anywhere across the globe. Tell us your budget, travel dates, and preferences, and our specialists will plan it for you.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => enquiry.open("Custom Destination Request")}
                  className="bg-white hover:bg-white/95 text-primary font-extrabold rounded-full px-8 py-3 text-xs shadow-xl active:scale-95 transition-transform"
                >
                  Request Custom Itinerary
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
