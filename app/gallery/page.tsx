"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Compass, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryItems, GalleryItem } from "@/data/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = galleryItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  // Manage Keyboard Listeners for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    const prevIdx =
      lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const nextIdx =
      lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIdx);
  };

  // Find currently active item in lightbox
  const activeItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="space-y-12 pb-16 w-full overflow-x-hidden">
      {/* 1. HERO HEADER */}
      <section className="relative h-[25vh] min-h-[180px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/maldives.jpg"
            alt="Beach view"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl text-primary"
          >
            Our Travel Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm text-white/70 mt-2 max-w-md mx-auto"
          >
            Visual snapshots of the beautiful destinations and stays enjoyed by our happy travelers.
          </motion.p>
        </div>
      </section>

      {/* 2. GALLERY INTERACTIVE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="all" className="w-full text-center space-y-10">
          {/* Filters List with horizontal scroll wrapper for small phones */}
          <div className="w-full overflow-x-auto flex justify-center pb-2">
            <TabsList className="bg-muted p-1 rounded-full inline-flex border border-border max-w-full">
              <TabsTrigger
                value="all"
                onClick={() => setFilter("all")}
                className="rounded-full px-3.5 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                All Photos
              </TabsTrigger>
              <TabsTrigger
                value="international"
                onClick={() => setFilter("international")}
                className="rounded-full px-3.5 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                International
              </TabsTrigger>
              <TabsTrigger
                value="domestic"
                onClick={() => setFilter("domestic")}
                className="rounded-full px-3.5 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Domestic
              </TabsTrigger>
              <TabsTrigger
                value="college"
                onClick={() => setFilter("college")}
                className="rounded-full px-3.5 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                College Tours
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Masonry Columns Layout */}
          <TabsContent value={filter} className="text-left">
            <motion.div
              layout
              className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 w-full"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(index)}
                  className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 bg-muted"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                      <Compass className="h-3 w-3 fill-primary text-primary" />
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-extrabold text-sm mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-white/70 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white border border-white/20">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* 3. LIGHTBOX DIALOG */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxIndex(null);
        }}
      >
        {activeItem && (
          <DialogContent className="max-w-[90vw] md:max-w-[800px] p-0 border-none bg-black/95 shadow-2xl rounded-2xl overflow-hidden flex flex-col relative text-white">
            {/* Close Button Overlay */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/90 p-2 rounded-full text-white/80 hover:text-white border border-white/15 focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main Visual Display */}
            <div className="relative w-full h-[50vh] md:h-[60vh] bg-black">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/85 text-white/80 hover:text-white p-2.5 rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/85 text-white/80 hover:text-white p-2.5 rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Next Photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Caption Info */}
            <div className="p-5 bg-zinc-950 border-t border-white/5 space-y-1.5 text-left">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading font-extrabold text-base text-white">
                  {activeItem.title}
                </h3>
                <span className="text-[9px] font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider select-none shrink-0">
                  {activeItem.category}
                </span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-xl">
                {activeItem.description}
              </p>
              <div className="text-[10px] text-white/30 text-right select-none">
                Photo {lightboxIndex! + 1} of {filteredItems.length} (Filter: {filter})
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
