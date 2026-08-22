"use client";

import React from "react";

/**
 * TravelDoodleBackground
 * Subtle, elegant travel-themed vector outline doodles scattered sparsely
 * across the background ("here and there") to create a premium wanderlust atmosphere
 * without cluttering or obstructing readability.
 */
export default function TravelDoodleBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden select-none"
    >
      {/* ── 1. Top-Right: Airplane Flight Path with Dotted Arc ──────────────── */}
      <svg
        className="absolute -top-6 right-6 w-96 h-96 text-primary/15 dark:text-primary/10"
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 280 Q 140 100 320 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        {/* Airplane icon at the end of path */}
        <g transform="translate(315, 35) rotate(25)">
          <path
            d="M0 0 L18 -10 L14 -3 L22 0 L14 3 L18 10 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {/* ── 2. Top-Left: Minimalist Wireframe Globe ─────────────────────────── */}
      <svg
        className="absolute top-28 -left-12 w-64 h-64 text-accent/12 dark:text-accent/10"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="75" strokeDasharray="3 4" />
        <ellipse cx="100" cy="100" rx="75" ry="32" />
        <ellipse cx="100" cy="100" rx="32" ry="75" />
        <line x1="25" y1="100" x2="175" y2="100" strokeDasharray="4 4" />
      </svg>

      {/* ── 3. Mid-Left: Floating Compass Rose ──────────────────────────────── */}
      <svg
        className="absolute top-[48vh] left-8 w-28 h-28 text-primary/12 dark:text-primary/10 hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="38" strokeDasharray="2 4" />
        <circle cx="50" cy="50" r="44" strokeWidth="0.8" />
        {/* Compass points */}
        <polygon points="50,14 54,46 50,50 46,46" fill="currentColor" opacity="0.4" />
        <polygon points="50,86 54,54 50,50 46,54" fill="none" stroke="currentColor" />
        <polygon points="14,50 46,54 50,50 46,46" fill="none" stroke="currentColor" />
        <polygon points="86,50 54,54 50,50 54,46" fill="none" stroke="currentColor" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </svg>

      {/* ── 4. Mid-Right: Destination Map Pin & Location Waves ───────────────── */}
      <svg
        className="absolute top-[38vh] -right-4 w-40 h-40 text-primary/14 dark:text-primary/10 hidden sm:block"
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 20 C46 20 35 31 35 45 C35 64 60 92 60 92 C60 92 85 64 85 45 C85 31 74 20 60 20 Z"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="45" r="8" fill="none" />
        {/* Ripple rings under pin */}
        <ellipse cx="60" cy="100" rx="24" ry="7" strokeDasharray="3 4" strokeWidth="1" />
        <ellipse cx="60" cy="100" rx="36" ry="11" strokeDasharray="4 6" strokeWidth="0.8" opacity="0.6" />
      </svg>

      {/* ── 5. Lower-Left: Mountain Ridge Outlines ──────────────────────────── */}
      <svg
        className="absolute bottom-28 -left-8 w-80 h-44 text-accent/14 dark:text-accent/10"
        viewBox="0 0 300 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Foreground Mountain */}
        <path d="M10 150 L90 40 L165 150" />
        <path d="M90 40 L102 70 L80 82 L90 40" fill="currentColor" opacity="0.15" />
        {/* Background Mountain */}
        <path d="M110 150 L180 20 L270 150" strokeDasharray="5 4" opacity="0.8" />
        <path d="M180 20 L195 55 L170 65 L180 20" fill="currentColor" opacity="0.15" />
        {/* Small birds in sky */}
        <path d="M220 30 Q 225 24 230 30 Q 235 24 240 30" strokeWidth="1.2" />
        <path d="M245 42 Q 248 38 252 42 Q 256 38 260 42" strokeWidth="1" />
      </svg>

      {/* ── 6. Lower-Right: Tropical Sun & Ocean Wave Lines ─────────────────── */}
      <svg
        className="absolute -bottom-10 right-4 w-72 h-72 text-primary/12 dark:text-primary/10"
        viewBox="0 0 240 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun half circle */}
        <circle cx="120" cy="120" r="32" strokeDasharray="4 3" />
        {/* Sun rays */}
        <line x1="120" y1="72" x2="120" y2="60" strokeWidth="1.5" />
        <line x1="154" y1="86" x2="163" y2="77" strokeWidth="1.5" />
        <line x1="168" y1="120" x2="180" y2="120" strokeWidth="1.5" />
        <line x1="86" y1="86" x2="77" y2="77" strokeWidth="1.5" />
        <line x1="72" y1="120" x2="60" y2="120" strokeWidth="1.5" />
        {/* Calm waves */}
        <path d="M40 170 Q 70 160 100 170 T 160 170 T 220 170" strokeWidth="1.2" />
        <path d="M60 190 Q 90 180 120 190 T 180 190 T 240 190" strokeWidth="1" strokeDasharray="3 4" />
      </svg>

      {/* ── 7. Center-Subtle: Hot Air Balloon ───────────────────────────────── */}
      <svg
        className="absolute top-[75vh] left-[46vw] w-20 h-28 text-accent/14 dark:text-accent/10 hidden lg:block"
        viewBox="0 0 80 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Balloon body */}
        <path d="M40 10 C20 10 10 28 10 48 C10 68 32 82 32 88 L48 88 C48 82 70 68 70 48 C70 28 60 10 40 10 Z" />
        <path d="M40 10 C30 25 30 65 40 88" strokeDasharray="2 3" />
        <path d="M40 10 C50 25 50 65 40 88" strokeDasharray="2 3" />
        {/* Basket */}
        <line x1="33" y1="88" x2="35" y2="96" />
        <line x1="47" y1="88" x2="45" y2="96" />
        <rect x="34" y="96" width="12" height="9" rx="1.5" />
      </svg>
    </div>
  );
}
