"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  viewportMargin?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  className = "",
  viewportMargin = "-40px",
}: ScrollRevealProps) {
  let initialX = 0;
  let initialY = 0;
  let initialScale = 1;

  switch (direction) {
    case "up":
      initialY = distance;
      break;
    case "down":
      initialY = -distance;
      break;
    case "left":
      initialX = distance;
      break;
    case "right":
      initialX = -distance;
      break;
    case "scale":
      initialScale = 0.92;
      break;
    case "none":
      break;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: initialScale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Natural spring-like cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerContainer({
  children,
  staggerDelay = 0.1,
  delay = 0,
  once = true,
  className = "",
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  delay?: number;
  once?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerItem({
  children,
  direction = "up",
  distance = 25,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  distance?: number;
  className?: string;
}) {
  let initialX = 0;
  let initialY = 0;
  let initialScale = 1;

  if (direction === "up") initialY = distance;
  if (direction === "down") initialY = -distance;
  if (direction === "left") initialX = distance;
  if (direction === "right") initialX = -distance;
  if (direction === "scale") initialScale = 0.93;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY, scale: initialScale },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
