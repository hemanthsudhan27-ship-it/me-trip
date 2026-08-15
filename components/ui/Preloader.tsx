"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Compass } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    if (prefersReduced) {
      // Reduced motion: Quick fade out
      tl.to(".preloader-container", { opacity: 0, duration: 0.3, ease: "power1.out" })
        .set(".preloader-container", { display: "none" });
      return;
    }

    // Play loading sequence
    // 1. Initial fade-in of components
    tl.fromTo(".preloader-logo", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" })
      .fromTo(".preloader-brand-name", { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.3")
      .fromTo(".preloader-system-check", { opacity: 0 }, { opacity: 0.4, duration: 0.3 }, "-=0.2")
      .fromTo(".preloader-percentage-text", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "<")
      .fromTo(".preloader-bar-bg", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "<");

    // 2. Count up counter and expand bar
    const progressVal = { value: 0 };
    const counterEl = document.querySelector(".preloader-percentage-text");
    tl.to(progressVal, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        if (counterEl) {
          counterEl.textContent = Math.floor(progressVal.value) + "%";
        }
      }
    }, "-=0.1");

    tl.to(".preloader-bar", { width: "100%", duration: 1.8, ease: "power2.out" }, "<");

    // 3. Exit wipe transition
    tl.to(".preloader-logo, .preloader-brand-name, .preloader-percentage-text, .preloader-system-check, .preloader-bar-bg", {
      opacity: 0,
      y: -25,
      duration: 0.4,
      ease: "power3.in"
    })
    .to(".preloader-container", {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut"
    }, "-=0.1")
    .set(".preloader-container", { display: "none" });

  }, { dependencies: [mounted] });

  if (!mounted) return null;

  return createPortal(
    <div className="preloader-container fixed inset-0 w-screen h-screen z-[9999] bg-[#0b0c10] text-[#f5f5f7] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden">
      {/* Top row: Brand signature or status */}
      <div className="flex justify-between items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white/30 font-semibold font-sans">
        <span>ME TRIP HOLIDAYS</span>
        <span>Loading Experience</span>
      </div>

      {/* Middle row: Logo & Brand name */}
      <div className="flex flex-col items-center justify-center flex-grow -mt-12 space-y-6">
        <div className="preloader-logo bg-primary p-4.5 rounded-2xl text-white shadow-2xl shadow-primary/20">
          <Compass className="h-10 w-10 md:h-12 md:w-12" />
        </div>
        <div className="text-center space-y-2">
          <h2 className="preloader-brand-name font-heading text-2xl md:text-3xl font-extrabold tracking-[0.2em] uppercase text-white">
            ME TRIP <span className="text-primary">HOLIDAYS</span>
          </h2>
          <p className="text-[10px] tracking-[0.3em] font-extrabold text-accent uppercase opacity-80 font-sans">
            Tours & Travels
          </p>
        </div>
      </div>

      {/* Bottom row: Counter and Progress Bar */}
      <div className="w-full max-w-lg mx-auto space-y-4">
        <div className="flex justify-between items-end">
          <span className="preloader-system-check text-[10px] sm:text-xs uppercase tracking-widest text-white/30 font-semibold font-sans">
            System Check
          </span>
          <span className="preloader-percentage-text font-heading text-4xl md:text-5xl font-extrabold text-white tracking-tighter tabular-nums">
            0%
          </span>
        </div>
        <div className="preloader-bar-bg w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
          <div className="preloader-bar absolute top-0 left-0 h-full w-0 bg-primary rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
        </div>
      </div>
    </div>,
    document.body
  );
}
