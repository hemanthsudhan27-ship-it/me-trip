"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ExpandableGalleryProps {
  images: string[];
  className?: string;
}

export const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({
  images,
  className = "",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) {
      return 1;
    }
    return hoveredIndex === index ? 2.5 : 0.6;
  };

  return (
    <div className={className}>
      {/* Horizontal Expandable Gallery */}
      <div className="flex gap-2 sm:gap-4 h-72 sm:h-96 w-full">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-border/40 group"
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(index) }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openImage(index)}
          >
            <img
              src={image}
              alt={`Gallery snapshot ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 0 : 0.25 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-[11px] sm:text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                Click to Expand
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded View Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={closeImage}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-10 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-2.5 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
              onClick={closeImage}
              aria-label="Close image preview"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                className="absolute left-4 sm:left-8 z-10 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                onClick={goToPrev}
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt={`Gallery image ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                className="absolute right-4 sm:right-8 z-10 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 p-3 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                onClick={goToNext}
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Example Usage
export function Component() {
  const images = [
    "/images/destinations/maldives.jpg",
    "/images/destinations/manali.jpg",
    "/images/destinations/bali.jpg",
    "/images/destinations/vietnam.jpg",
  ];

  return (
    <div className="min-h-screen dark:bg-black bg-white flex items-center justify-center p-8">
      <ExpandableGallery images={images} className="w-full max-w-7xl" />
    </div>
  );
}

export default ExpandableGallery;
