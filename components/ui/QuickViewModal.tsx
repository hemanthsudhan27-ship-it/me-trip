"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Calendar, ArrowRight, Compass, CheckCircle } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUIModals } from "@/providers/UIModalProvider";

export default function QuickViewModal() {
  const { quickView, enquiry } = useUIModals();
  const router = useRouter();

  if (!quickView.isOpen || !quickView.packageData) return null;

  const pkg = quickView.packageData;

  const handleEnquire = () => {
    // Switch to Enquiry modal carrying package name
    quickView.close();
    setTimeout(() => {
      enquiry.open(pkg.name);
    }, 250); // Small timeout to allow dialog exit animation to run smoothly
  };

  const handleViewDetails = () => {
    quickView.close();
    router.push(`/packages/${pkg.slug}`);
  };

  return (
    <Dialog open={quickView.isOpen} onOpenChange={quickView.close}>
      <DialogContent className="max-w-[92vw] sm:max-w-[650px] max-h-[90vh] overflow-y-auto p-0 rounded-xl glass border-border shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Package Image Area */}
          <div className="relative h-[250px] md:h-full min-h-[250px] w-full bg-muted">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 325px"
              priority
            />
            {/* Type Overlay Tag */}
            <div className="absolute top-4 left-4 bg-white/95 dark:bg-card/95 text-foreground px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md">
              {pkg.type}
            </div>
          </div>

          {/* Details Area */}
          <div className="p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accent">
                  <Compass className="h-3.5 w-3.5" />
                  {pkg.type === "international" ? "International Escape" : pkg.type === "college" ? "College Group Tour" : "Domestic Gateway"}
                </span>
                <h3 className="font-heading font-extrabold text-lg text-foreground mt-1 leading-snug">
                  {pkg.name}
                </h3>
              </div>

              {/* Specs */}
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span className="font-semibold text-foreground">{pkg.duration}</span>
                </div>
              </div>


              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pkg.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-foreground">Package Highlights:</h4>
                <ul className="grid grid-cols-1 gap-1.5">
                  {pkg.highlights.slice(0, 4).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-[11px] text-muted-foreground leading-snug">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-border">
              <Button
                onClick={handleEnquire}
                className="flex-1 bg-primary hover:bg-primary/95 text-white font-bold rounded-full py-2.5 text-xs shadow-md transition-all active:scale-95"
              >
                Enquire Now
              </Button>
              <Button
                variant="outline"
                onClick={handleViewDetails}
                className="flex-1 border-border text-foreground hover:bg-muted font-bold rounded-full py-2.5 text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95"
              >
                Full Details
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
