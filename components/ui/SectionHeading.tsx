"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl mb-12 ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {subtitle && (
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full inline-block mb-3.5">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight">
        {title}
      </h2>
      <div
        className={`h-1 w-16 bg-accent rounded-full mt-4 ${
          isCenter ? "mx-auto" : "mr-auto"
        }`}
      />
    </motion.div>
  );
}
