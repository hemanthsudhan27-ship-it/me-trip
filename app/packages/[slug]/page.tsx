"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Compass, CheckCircle2, ChevronLeft, PhoneCall, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import { useUIModals } from "@/providers/UIModalProvider";
import { getSpecialistContact } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PackageCard from "@/components/ui/PackageCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/ui/ScrollReveal";

export default function PackageDetails() {
  const params = useParams();
  const router = useRouter();
  const { enquiry } = useUIModals();
  const slug = params?.slug as string;

  // Find current package
  const pkg = packages.find((p) => p.slug === slug);

  // If package is not found, render a clean error page
  if (!pkg) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
        <div className="bg-red-50 dark:bg-red-950/20 p-5 rounded-full text-destructive">
          <HelpCircle className="h-14 w-14" />
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-foreground">
          Package Not Found
        </h2>
        <p className="text-sm text-muted-foreground max-w-sm">
          We couldn't find the holiday package you're looking for. It may have been renamed or moved.
        </p>
        <Button onClick={() => router.push("/")} className="bg-primary hover:bg-primary/95 text-white font-bold rounded-full">
          Return to Home
        </Button>
      </div>
    );
  }

  // Related Packages (Same type, excluding current)
  const relatedPkgs = packages
    .filter((p) => p.type === pkg.type && p.id !== pkg.id)
    .slice(0, 3);

  return (
    <div className="space-y-16 pb-20 w-full overflow-x-hidden">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative min-h-[45vh] w-full flex items-end overflow-hidden pb-12 pt-28">
        <div className="absolute inset-0 z-0">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-1.5 text-xs text-white/75 hover:text-white mb-2 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 transition-colors"
          >
            <ChevronLeft className="h-4.5 w-4.5" />
            Go Back
          </button>
          
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 border border-primary/20 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider">
              <Compass className="h-3.5 w-3.5" />
              {pkg.type === "international" ? "International Holiday" : pkg.type === "college" ? "College Group Tour" : "Domestic Tour"}
            </span>
            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl leading-tight text-white max-w-4xl break-words">
              {pkg.name}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 pt-1">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
              <Calendar className="h-4.5 w-4.5 text-primary" />
              <span className="font-bold">{pkg.duration}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BODY LAYOUT: 2 COLUMNS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Details Column (65% or 8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <ScrollReveal direction="up">
              <div className="dot-bg bg-white dark:bg-card border border-border/60 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-heading font-extrabold text-lg text-foreground border-b border-border/60 pb-3">
                  Package Overview
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="dot-bg bg-white dark:bg-card border border-border/60 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-heading font-extrabold text-lg text-foreground border-b border-border/60 pb-3">
                  Excursion Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Day-by-Day Itinerary */}
            <ScrollReveal direction="up" delay={0.15}>
              <div className="dot-bg bg-white dark:bg-card border border-border/60 p-5 sm:p-8 rounded-2xl shadow-sm space-y-4">
                <h3 className="font-heading font-extrabold text-lg text-foreground border-b border-border/60 pb-3">
                  Detailed Day-wise Itinerary
                </h3>
                <Accordion defaultValue={["day-1"]} className="w-full divide-y divide-border/60">
                  {pkg.itinerary.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`} className="border-none py-1">
                      <AccordionTrigger className="font-heading font-extrabold text-sm sm:text-base text-foreground hover:text-primary hover:no-underline text-left py-4.5">
                        <span className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-left">
                          <span className="bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold px-2.5 py-1 rounded-md shrink-0 select-none mt-0.5 sm:mt-0">
                            Day {day.day}
                          </span>
                          <span className="leading-snug">{day.title}</span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-4 sm:pl-12 pb-5 pt-1">
                        {day.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>

          {/* Pricing & CTA Sidebar (35% or 4 Cols) */}
          <ScrollReveal direction="left" duration={0.6} className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            {/* Booking Sidebar Card */}
            <div className="dot-bg bg-white dark:bg-card border border-border/60 p-6 rounded-2xl shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block">
                  Customized Quote
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl text-foreground">
                    Price on Request
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-normal">
                  *Get tailored pricing based on travel dates, group size, hotels, and custom requirements.
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 border-y border-border/60 py-4.5">
                <div className="space-y-0.5 text-center">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Duration</span>
                  <span className="font-heading font-extrabold text-sm text-foreground">{pkg.duration}</span>
                </div>
                <div className="space-y-0.5 text-center border-l border-border/60">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block">Travel Type</span>
                  <span className="font-heading font-extrabold text-sm text-foreground uppercase tracking-wider text-primary">{pkg.type}</span>
                </div>
              </div>

              {/* Action Buttons */}
              {(() => {
                const specialist = getSpecialistContact(pkg.name);
                return (
                  <div className="space-y-3">
                    <Button
                      onClick={() => enquiry.open(pkg.name)}
                      className="w-full bg-primary hover:bg-primary/95 text-white font-extrabold py-3.5 rounded-full shadow-lg transform active:scale-95 transition-transform text-sm"
                    >
                      Book / Enquire Now
                    </Button>
                    <a
                      href={`tel:+${specialist.rawPhone}`}
                      className="w-full flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-bold py-3 rounded-full border border-border text-xs transition-colors"
                    >
                      <PhoneCall className="h-4 w-4 text-accent" />
                      Call Specialist ({specialist.formattedPhone})
                    </a>
                  </div>
                );
              })()}
            </div>

            {/* Travel trust box */}
            <div className="bg-muted p-5 rounded-2xl border border-border/60 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-foreground">ME TRIP Secure Booking</h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Every booking includes premium 24/7 on-trip concierge, vetted private transports, and hotel refund support.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. RELATED PACKAGES SECTION */}
      {relatedPkgs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-border/60 pt-16">
          <ScrollReveal direction="up">
            <SectionHeading
              title="Other Similar Excursions"
              subtitle="Recommended For You"
              align="left"
            />
          </ScrollReveal>
          <ScrollStaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {relatedPkgs.map((p, idx) => (
              <ScrollStaggerItem key={p.id} direction="up">
                <PackageCard pkg={p} index={idx} />
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </section>
      )}
    </div>
  );
}
