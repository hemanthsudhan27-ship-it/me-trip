"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Disable scrolling while splash screen is active
    document.body.style.overflow = "hidden";
    
    // Hide splash screen after a certain time (allows intro animation to play first)
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = ""; // Re-enable scrolling
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* 5 Blocks Background */}
          <motion.div 
            className="absolute inset-0 flex"
            variants={{
              exit: {
                transition: {
                  staggerChildren: 0.1,
                  staggerDirection: -1 // Right to left stagger
                }
              }
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full flex-1 bg-foreground origin-top"
                variants={{
                  initial: { scaleY: 1 },
                  exit: { 
                    scaleY: 0, // Slide up effect by scaling Y to 0 from the top (wait, origin-top means it scales to top)
                    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                  }
                }}
              />
            ))}
          </motion.div>

          {/* Polaroids */}
          <motion.div
            className="relative z-10 flex items-center justify-center w-full max-w-5xl"
            variants={{
              exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } }
            }}
          >
            {/* Image 1 (Left) */}
            <motion.div
              className="absolute w-[180px] h-[220px] sm:w-[220px] sm:h-[280px] md:w-[280px] md:h-[350px] bg-white p-3 md:p-4 pb-10 md:pb-14 shadow-2xl rounded-sm"
              initial={{ opacity: 0, x: -100, y: -50, rotate: -30, scale: 0.8 }}
              animate={{ opacity: 1, x: -60, y: 10, rotate: -15, scale: 1, transition: { duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 } }}
            >
              <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                <Image src="/images/destinations/maldives.jpg" alt="Maldives" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </motion.div>

            {/* Image 2 (Right) */}
            <motion.div
              className="absolute w-[180px] h-[220px] sm:w-[220px] sm:h-[280px] md:w-[280px] md:h-[350px] bg-white p-3 md:p-4 pb-10 md:pb-14 shadow-2xl rounded-sm"
              initial={{ opacity: 0, x: 100, y: -50, rotate: 30, scale: 0.8 }}
              animate={{ opacity: 1, x: 60, y: 10, rotate: 15, scale: 1, transition: { duration: 0.8, delay: 0.5, type: "spring", bounce: 0.4 } }}
            >
              <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                <Image src="/images/destinations/bali.jpg" alt="Bali" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </motion.div>

            {/* Image 3 (Center with Logo) */}
            <motion.div
              className="absolute w-[200px] h-[250px] sm:w-[240px] sm:h-[300px] md:w-[320px] md:h-[400px] bg-white p-3 md:p-4 pb-10 md:pb-14 shadow-2xl rounded-sm flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: -100, rotate: 0, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, rotate: -2, scale: 1, transition: { duration: 0.8, delay: 1.0, type: "spring", bounce: 0.5 } }}
            >
              <div className="relative w-full h-full flex items-center justify-center bg-gray-50 border border-gray-100 p-4">
                <Image src="/logo.svg" alt="Me Trip Holidays" fill className="object-contain p-4 md:p-8" priority />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
