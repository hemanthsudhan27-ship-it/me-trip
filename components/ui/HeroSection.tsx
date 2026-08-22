"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Star, ArrowRight, ChevronDown, Compass, Plane } from "lucide-react";
import { useUIModals } from "@/providers/UIModalProvider";
import { packages } from "@/data/packages";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Word-split helper ──────────────────────────────────────────────────────────
// Wraps each word in an overflow-hidden container so the slide-up reveal is clean.
const SplitWords = ({
  text,
  wordClass = "",
}: {
  text: string;
  wordClass?: string;
}) => (
  <>
    {text.split(" ").map((word, i) => (
      <span
        key={i}
        className="inline-block overflow-hidden mr-[0.28em] last:mr-0 align-bottom"
      >
        <span className={`hero-word inline-block ${wordClass}`}>{word}</span>
      </span>
    ))}
  </>
);

// ─── Magnetic CTA wrapper ───────────────────────────────────────────────────────
// Uses gsap.quickTo for a smooth magnetic pull effect on desktop only.
function MagneticBtn({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    const el = wrap?.firstElementChild as HTMLElement | null;
    if (!el || !wrap) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const strength = 14;
      xTo(((e.clientX - r.left - r.width / 2) / (r.width / 2)) * strength);
      yTo(((e.clientY - r.top - r.height / 2) / (r.height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="inline-block">
      {children}
    </div>
  );
}

export { MagneticBtn as MagneticButton };

// ─── Hero Scenic Slides & Color Matching ─────────────────────────────────────────
const heroSlides = [
  {
    id: "maldives",
    title: "Maldives",
    image: "/images/destinations/maldives.jpg",
    accentColor: "#00d2ff", // Turquoise Cyan
    accentGlow: "rgba(0, 210, 255, 0.4)",
  },
  {
    id: "manali",
    title: "Manali",
    image: "/images/destinations/manali.jpg",
    accentColor: "#34d399", // Emerald Alpine Green
    accentGlow: "rgba(52, 211, 153, 0.4)",
  },
  {
    id: "rajasthan",
    title: "Rajasthan",
    image: "/images/destinations/rajasthan.jpg",
    accentColor: "#fbbf24", // Royal Sunset Gold
    accentGlow: "rgba(251, 191, 36, 0.4)",
  },
  {
    id: "kasol",
    title: "Kasol",
    image: "/images/destinations/kasol.jpg",
    accentColor: "#c084fc", // Mystic Violet
    accentGlow: "rgba(192, 132, 252, 0.4)",
  },
  {
    id: "goa",
    title: "Goa",
    image: "/images/destinations/goa.jpg",
    accentColor: "#fb923c", // Warm Coral Sunset
    accentGlow: "rgba(251, 146, 60, 0.4)",
  },
];

// ─── Main component ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const { enquiry } = useUIModals();
  const [plannerType, setPlannerType] = useState("all");
  const [plannerDest, setPlannerDest] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  // Ref to hold the paused entrance timeline so the event handler can play it.
  const entranceTlRef = useRef<gsap.core.Timeline | null>(null);

  // Auto-rotate hero slide every 6 seconds with 2-second crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const filteredPkgs = packages.filter(
    (pkg) => plannerType === "all" || pkg.type === plannerType
  );

  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enquiry.open(plannerDest || undefined);
  };

  // ── Mouse parallax (desktop only) ─────────────────────────────────────────
  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to(".hero-bg-wrap", {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(".hero-badge-inner", {
      x: -x * 0.7,
      y: -y * 0.7,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    gsap.to(".hero-bg-wrap", { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
    gsap.to(".hero-badge-inner", {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  // ── GSAP setup + entrance coordination ────────────────────────────────────
  useEffect(() => {
    if (!heroRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // gsap.context without a scope so "header.site-header" (outside heroRef) is reachable.
    // Cleanup via ctx.revert() on unmount still works correctly.
    const ctx = gsap.context(() => {
      // ── 1. Set initial hidden states via GSAP (NOT CSS classes).
      // This ensures content is always visible as a no-JS fallback, and
      // the GSAP entrance is the ONLY thing that makes elements invisible first.
      gsap.set(
        [
          ".hero-word",
          ".hero-sub",
          ".hero-cta-primary",
          ".hero-cta-ghost",
          ".hero-badge",
          ".hero-planner",
          ".hero-scroll-cue",
          "header.site-header",
        ],
        { opacity: 0 }
      );
      gsap.set(".hero-word", { y: "110%" });
      gsap.set([".hero-sub", ".hero-cta-primary", ".hero-cta-ghost", ".hero-planner"], {
        y: 20,
      });
      gsap.set(".hero-badge", { scale: 0.88, y: -10 });
      gsap.set("header.site-header", { y: -60 });

      // ── 2. Ken Burns (starts immediately, loops forever) ──────────────────
      if (!prefersReduced) {
        gsap.fromTo(
          ".hero-ken-img",
          { scale: 1 },
          {
            scale: isMobile ? 1.04 : 1.08,
            duration: 18,
            ease: "none",
            repeat: -1,
            yoyo: true,
          }
        );
      }

      // ── 3. Build the entrance timeline (paused — played by the event handler)
      const d = prefersReduced ? 0.01 : 1; // duration multiplier
      const stagger = prefersReduced ? 0 : 0.055;

      const tl = gsap.timeline({ paused: true });

      tl
        // Navbar slides down
        .to("header.site-header", {
          opacity: 1,
          y: 0,
          duration: 0.6 * d,
          ease: "power3.out",
        })
        // Trust badge pops in
        .to(
          ".hero-badge",
          { opacity: 1, scale: 1, y: 0, duration: 0.55 * d, ease: "back.out(1.6)" },
          "-=0.3"
        )
        // Headline words stagger up
        .to(
          ".hero-word",
          {
            opacity: 1,
            y: "0%",
            duration: 0.75 * d,
            stagger,
            ease: "power4.out",
          },
          "-=0.35"
        )
        // Subheadline fades up
        .to(
          ".hero-sub",
          { opacity: 1, y: 0, duration: 0.6 * d, ease: "power2.out" },
          "-=0.5"
        )
        // Primary CTA
        .to(
          ".hero-cta-primary",
          { opacity: 1, y: 0, duration: 0.55 * d, ease: "power2.out" },
          "-=0.45"
        )
        // Ghost CTA (staggered behind primary)
        .to(
          ".hero-cta-ghost",
          { opacity: 1, y: 0, duration: 0.55 * d, ease: "power2.out" },
          "-=0.4"
        )
        // Planner card
        .to(
          ".hero-planner",
          { opacity: 1, y: 0, duration: 0.6 * d, ease: "power2.out" },
          "-=0.35"
        )
        // Scroll cue
        .to(
          ".hero-scroll-cue",
          { opacity: 1, duration: 0.4 * d },
          "-=0.2"
        )
        // ── Post-entrance idle loops (appended to timeline so they start after entrance)
        .to(
          ".hero-badge-float",
          { y: -8, duration: 2.4, ease: "power1.inOut", yoyo: true, repeat: -1 },
          "-=0.1"
        )
        .to(
          ".hero-scroll-bounce",
          {
            y: 7,
            duration: 1.1,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          },
          "<"
        );

      entranceTlRef.current = tl;

      // ── 4. ScrollTrigger: BG parallax ─────────────────────────────────────
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(".hero-bg-wrap", {
            yPercent: self.progress * (isMobile ? 8 : 22),
          });
        },
      });

      // ── 5. ScrollTrigger: Fade scroll cue on scroll-out ───────────────────
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "30% top",
        scrub: true,
        onUpdate: (self) => {
          if (entranceTlRef.current?.progress() ?? 0 > 0.9) {
            gsap.set(".hero-scroll-cue", {
              opacity: Math.max(0, 1 - self.progress * 2),
            });
          }
        },
      });
    }, heroRef);

    // ── 6. Play entrance ─────
    const playEntrance = () => {
      entranceTlRef.current?.delay(0.08).play();
    };

    const timer = setTimeout(playEntrance, 120);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const currentTheme = heroSlides[currentSlide];

  // ─── JSX ──────────────────────────────────────────────────────────────────
  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative h-[95vh] min-h-[640px] w-full flex items-center justify-center overflow-hidden bg-[#0b0d12]"
      aria-label="Hero section"
    >
      {/* ── Background Images with 2s Crossfade ─────────────────────────── */}
      <div className="hero-bg-wrap absolute inset-0 z-0 w-full h-[115%] -top-[7%]">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
              currentSlide === idx ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="hero-ken-img absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75 z-2" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0b0d12] to-transparent z-10 pointer-events-none" />
        {/* Edge vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-3"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Hero Content ────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full flex flex-col items-center gap-7 mt-6 sm:mt-10">

        {/* Trust badge */}
        <div className="hero-badge">
          <div className="hero-badge-inner">
            <div className="hero-badge-float inline-flex items-center gap-2.5 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl">
              <div
                className="flex gap-0.5 transition-colors duration-[2000ms]"
                style={{ color: currentTheme.accentColor }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-widest text-white font-extrabold">
                4.9 Rated · 10,000+ Happy Travelers
              </span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold text-4xl sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] tracking-tight leading-[1.04]">
            <SplitWords text="Your Journey," wordClass="text-white" />
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span
              className="transition-colors duration-[2000ms] inline-block"
              style={{ color: currentTheme.accentColor }}
            >
              <SplitWords text="Perfectly Planned." />
            </span>
          </h1>

          <p className="hero-sub text-sm sm:text-lg md:text-[1.15rem] text-white/75 max-w-xl mx-auto leading-relaxed">
            Explore bespoke international &amp; domestic holiday packages
            curated by destination experts.
          </p>
        </div>

        {/* ── CTA Buttons ────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Primary CTA with dynamic background color & glow matching current scene */}
          <MagneticBtn>
            <button
              onClick={() => enquiry.open()}
              className="hero-cta-primary group relative overflow-hidden flex items-center gap-3 px-9 py-[1.05rem] rounded-full font-extrabold text-white text-sm uppercase tracking-widest transition-all duration-[2000ms]"
              style={{
                backgroundColor: currentTheme.accentColor,
                boxShadow: `0 10px 30px -5px ${currentTheme.accentGlow}`,
              }}
            >
              {/* Hover tint overlay */}
              <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/[0.12] transition-colors duration-300 pointer-events-none" />
              <span>Explore Packages</span>
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300">
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[2px]" />
              </span>
            </button>
          </MagneticBtn>

          {/* Ghost — glassmorphism with dynamic accent border glow */}
          <MagneticBtn>
            <button
              onClick={() => enquiry.open("Custom Trip Planning")}
              className="hero-cta-ghost group flex items-center gap-3 bg-white/6 hover:bg-white/12 border backdrop-blur-sm px-9 py-[1.05rem] rounded-full font-extrabold text-white text-sm uppercase tracking-widest transition-all duration-[2000ms]"
              style={{
                borderColor: currentTheme.accentColor,
                boxShadow: `0 0 16px -2px ${currentTheme.accentGlow}`,
              }}
            >
              <Compass
                className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45"
                style={{ color: currentTheme.accentColor }}
              />
              <span>Plan My Trip</span>
            </button>
          </MagneticBtn>
        </div>

        {/* ── Quick Planner Card ─────────────────────────────────────────── */}
        <div className="hero-planner w-full max-w-4xl">
          <form
            onSubmit={handlePlannerSubmit}
            className="glass p-5 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4 text-foreground text-left border border-white/15"
          >
            {/* Trip type */}
            <div className="flex-1 w-full space-y-1.5">
              <label className="text-[10px] font-extrabold text-foreground/50 uppercase tracking-widest block pl-1">
                Trip Type
              </label>
              <select
                value={plannerType}
                onChange={(e) => {
                  setPlannerType(e.target.value);
                  setPlannerDest("");
                }}
                className="w-full bg-white dark:bg-card border border-border rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-primary transition-colors cursor-pointer"
              >
                <option value="all">All Packages</option>
                <option value="international">International</option>
                <option value="domestic">Domestic Trips</option>
                <option value="college">College Tours</option>
              </select>
            </div>

            {/* Destination */}
            <div className="flex-[2] w-full space-y-1.5">
              <label className="text-[10px] font-extrabold text-foreground/50 uppercase tracking-widest block pl-1">
                Select Destination
              </label>
              <select
                value={plannerDest}
                onChange={(e) => setPlannerDest(e.target.value)}
                className="w-full bg-white dark:bg-card border border-border rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-primary transition-colors cursor-pointer"
              >
                <option value="">Choose Destination...</option>
                {filteredPkgs.map((pkg) => (
                  <option key={pkg.id} value={pkg.name}>
                    {pkg.name} ({pkg.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div className="w-full md:w-auto md:self-end pt-2 md:pt-0">
              <button
                type="submit"
                className="group w-full md:w-auto text-white font-extrabold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all duration-[2000ms] text-xs uppercase tracking-widest cursor-pointer"
                style={{
                  backgroundColor: currentTheme.accentColor,
                  boxShadow: `0 8px 24px -4px ${currentTheme.accentGlow}`,
                }}
              >
                Search Tours
                <Plane className="h-4 w-4 rotate-45 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Scroll Cue ──────────────────────────────────────────────────── */}
      <div className="hero-scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/38 hover:text-primary transition-colors duration-300 cursor-pointer select-none">
        <span className="text-[8px] uppercase tracking-[0.28em] font-extrabold">
          Scroll
        </span>
        <div className="hero-scroll-bounce flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-gradient-to-b from-current to-transparent" />
          <ChevronDown className="h-4 w-4 -mt-1" />
        </div>
      </div>
    </section>
  );
}
