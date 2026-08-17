"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, Compass, ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Package } from "@/data/packages";
import { useUIModals } from "@/providers/UIModalProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const { quickView, enquiry } = useUIModals();

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    quickView.open(pkg);
  };

  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    enquiry.open(pkg.name);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden rounded-2xl bg-card border border-border/60 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative">
        {/* Image Section */}
        <div className="relative h-[220px] w-full overflow-hidden bg-muted">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Category Tag Overlay */}
          <div className="absolute top-4 left-4 bg-white/95 dark:bg-card/95 text-foreground px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest shadow-md">
            {pkg.type}
          </div>

          {/* Quick View Button overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Button
              onClick={handleQuickView}
              size="sm"
              className="bg-white/90 hover:bg-white text-foreground font-extrabold text-xs rounded-full px-4.5 py-2 shadow-lg flex items-center gap-1.5 transition-transform scale-90 group-hover:scale-100"
            >
              <Eye className="h-3.5 w-3.5 text-primary" />
              Quick View
            </Button>
          </div>
        </div>

        {/* Info Section */}
        <CardContent className="p-5 flex-grow flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            {/* Tag/Specs */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="font-semibold text-foreground">{pkg.duration}</span>
              </span>
              <span className="flex flex-col items-end gap-0.5">
                <span className="flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span className="font-semibold text-foreground">{pkg.price}</span>
                </span>
                {pkg.priceNote && (
                  <span className="text-[9px] text-muted-foreground leading-tight">{pkg.priceNote}</span>
                )}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-heading font-extrabold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {pkg.name}
            </h3>

            {/* Description */}
            <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {pkg.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/60">
            <Button
              onClick={handleEnquire}
              variant="link"
              className="p-0 h-auto font-bold text-xs text-primary hover:text-primary/80 transition-colors uppercase tracking-wider flex items-center gap-1 focus-visible:ring-0"
            >
              Enquire Now
              <ArrowRight className="h-3 w-3" />
            </Button>

            <Link
              href={`/packages/${pkg.slug}`}
              className="text-xs font-extrabold text-foreground/80 hover:text-accent hover:underline flex items-center gap-1 transition-colors"
            >
              Itinerary
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
