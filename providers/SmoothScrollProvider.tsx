"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollContextType {
  lenis: any;
  scrollTo: (target: string | number | HTMLElement, options?: any) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

function SmoothScrollHandler({ children }: { children: React.ReactNode }) {
  const lenis = useLenis();

  const scrollTo = (target: string | number | HTMLElement, options?: any) => {
    if (lenis) {
      lenis.scrollTo(target, options);
    } else if (typeof target === "string" && target.startsWith("#")) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href;
        if (targetId === "#") {
          lenis.scrollTo(0);
        } else {
          const targetEl = document.querySelector(targetId) as HTMLElement;
          if (targetEl) {
            lenis.scrollTo(targetEl, {
              duration: 1.2,
              easing: (t: number) => 1 - Math.pow(1 - t, 4),
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Media query check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleReducedMotionChange);
    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotionChange);
    };
  }, []);

  // Drive Lenis with GSAP's ticker and sync ScrollTrigger
  useEffect(() => {
    if (isReducedMotion) return;

    const update = (time: number) => {
      // gsap ticker time is in seconds, convert to ms for Lenis
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Sync ScrollTrigger on scroll
    let lenisInst: any = null;
    const handleScroll = () => {
      ScrollTrigger.update();
    };

    // Wait for lenis instance to be available to bind scroll event
    const checkLenisInterval = setInterval(() => {
      if (lenisRef.current?.lenis) {
        lenisInst = lenisRef.current.lenis;
        lenisInst.on("scroll", handleScroll);
        clearInterval(checkLenisInterval);
      }
    }, 50);

    return () => {
      gsap.ticker.remove(update);
      if (lenisInst) {
        lenisInst.off("scroll", handleScroll);
      } else {
        clearInterval(checkLenisInterval);
      }
    };
  }, [isReducedMotion]);

  if (isReducedMotion) {
    // If user prefers reduced motion, bypass Lenis entirely and let native scroll take over
    return (
      <SmoothScrollContext.Provider value={{ lenis: null, scrollTo: (target) => {
        if (typeof target === "string" && target.startsWith("#")) {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: "auto" });
        }
      }}}>
        {children}
      </SmoothScrollContext.Provider>
    );
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4), // Easing quartic ease-out
        smoothWheel: true,
        autoRaf: false, // Let our custom RAF loop handle it
      }}
    >
      <SmoothScrollHandler>{children}</SmoothScrollHandler>
    </ReactLenis>
  );
}

export const useSmoothScroll = () => useContext(SmoothScrollContext);
