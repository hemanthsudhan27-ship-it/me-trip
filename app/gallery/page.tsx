"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { galleryItems } from "@/data/gallery";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
      lightboxIndex === 0 ? galleryItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIdx);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    const nextIdx =
      lightboxIndex === galleryItems.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIdx);
  };

  // Find currently active item in lightbox
  const activeItem =
    lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

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
            Visual snapshots of the beautiful destinations, stays, and memories enjoyed by our travelers.
          </motion.p>
        </div>
      </section>

      {/* 2. GALLERY GRID SECTION */}
      <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="columns-3 sm:columns-3 md:columns-4 lg:columns-5 gap-1.5 sm:gap-3.5 space-y-1.5 sm:space-y-3.5 w-full">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightboxIndex(index)}
              className="break-inside-avoid relative rounded-md sm:rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-muted"
            >
              <Image
                src={item.src}
                alt={`Me Trip Holidays Travel Moment ${item.id + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Pure Black Vignette Hover Overlay (No Text Data) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. LIGHTBOX DIALOG */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxIndex(null);
        }}
      >
        {activeItem && (
          <DialogContent className="max-w-[92vw] md:max-w-[900px] p-0 border-none bg-black/95 shadow-2xl rounded-2xl overflow-hidden flex flex-col relative text-white">
            {/* Close Button Overlay */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 z-50 bg-black/60 hover:bg-black/90 p-2 rounded-full text-white/80 hover:text-white border border-white/15 focus:outline-none cursor-pointer transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main Visual Display */}
            <div className="relative w-full h-[60vh] md:h-[75vh] bg-black flex items-center justify-center">
              <Image
                src={activeItem.src}
                alt="Me Trip Holidays Gallery Photo"
                fill
                className="object-contain p-2"
                sizes="92vw"
                priority
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/85 text-white/80 hover:text-white p-2.5 rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/85 text-white/80 hover:text-white p-2.5 rounded-full border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                aria-label="Next Photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Counter Bar */}
            <div className="px-5 py-3 bg-zinc-950 border-t border-white/5 flex items-center justify-between text-xs text-white/50 select-none">
              <span>ME TRIP HOLIDAYS</span>
              <span>
                {lightboxIndex! + 1} / {galleryItems.length}
              </span>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
