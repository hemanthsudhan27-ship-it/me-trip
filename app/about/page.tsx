"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, ShieldCheck, HeartHandshake, Eye, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import StatsCounter from "@/components/ui/StatsCounter";
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";

export default function About() {
  const values = [
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "Excellence in Service",
      desc: "We ensure every step of your holiday, from flight bookings to local sightseeing, is handled with extreme care.",
    },
    {
      icon: <HeartHandshake className="h-5 w-5 text-accent" />,
      title: "Personalized Care",
      desc: "Our travel experts don't believe in generic holiday sheets. We design packages based on your personal preferences.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: "Trusted Partners",
      desc: "We work only with certified transport fleets, local agencies, and premium properties to safeguard your safety.",
    },
  ];

  return (
    <div className="space-y-20 pb-12">
      {/* 1. HERO BANNER */}
      <section className="relative h-[30vh] min-h-[220px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/vietnam.jpg"
            alt="Scenic Mountains"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl"
          >
            About ME TRIP HOLIDAYS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm text-white/70 mt-2 max-w-md mx-auto"
          >
            Discover the passion, values, and destination expertise behind your favorite travel agency.
          </motion.p>
        </div>
      </section>

      {/* 2. COMPANY STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" duration={0.7} className="space-y-6">
            <SectionHeading
              title="Crafting Memories Since 2016"
              subtitle="Our Journey"
              align="left"
              className="mb-0"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              At ME TRIP HOLIDAYS, we believe that traveling is more than just checking off destinations; it is about immersing yourself in new cultures, bonding with family, and collecting stories that last a lifetime. Founded in 2016, we have grown from a boutique travel desk to a leading full-service travel agency.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Over the last decade, we have organized thousands of customized itineraries across Southeast Asia, Europe, and the most scenic corners of India. Our secret lies in our direct network of ground partners, which guarantees unbeatable rates, top-tier accommodations, and local, multi-lingual guides who care.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/95 text-white font-bold rounded-full px-6 py-2.5 shadow-md">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.7}>
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl bg-muted">
              <Image
                src="/images/destinations/bali.jpg"
                alt="Ubud Rice Fields"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. MISSION & VISION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollStaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollStaggerItem direction="up">
            <div className="dot-bg bg-white dark:bg-card border border-border/60 p-8 rounded-2xl shadow-xl space-y-4 hover:border-primary/20 transition-colors h-full">
              <div className="bg-primary/10 p-3.5 rounded-xl inline-block text-primary">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-foreground">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To design bespoke, affordable, and safe travel packages that empower people to explore the world with absolute confidence. We strive to automate complex booking hurdles and replace them with seamless, guided on-trip care.
              </p>
            </div>
          </ScrollStaggerItem>

          <ScrollStaggerItem direction="up">
            <div className="dot-bg bg-white dark:bg-card border border-border/60 p-8 rounded-2xl shadow-xl space-y-4 hover:border-accent/20 transition-colors h-full">
              <div className="bg-accent/10 p-3.5 rounded-xl inline-block text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-foreground">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become India's most trusted customized travel brand, known for transparency, local heritage integrations, and exceptional client hospitality that makes visitors feel like family.
              </p>
            </div>
          </ScrollStaggerItem>
        </ScrollStaggerContainer>
      </section>

      {/* 4. STATS STRIP SECTION WITH COUNT UP */}
      <section className="bg-primary text-primary-foreground py-16 shadow-inner">
        <ScrollReveal direction="up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <span className="block font-heading text-4xl sm:text-5xl font-extrabold">
                <StatsCounter value={10} suffix="+" duration={1.5} />
              </span>
              <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
                Years in Business
              </span>
            </div>
            <div className="space-y-1">
              <span className="block font-heading text-4xl sm:text-5xl font-extrabold">
                <StatsCounter value={15000} suffix="+" duration={2} />
              </span>
              <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
                Happy Clients
              </span>
            </div>
            <div className="space-y-1">
              <span className="block font-heading text-4xl sm:text-5xl font-extrabold">
                <StatsCounter value={50} suffix="+" duration={1.5} />
              </span>
              <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
                Destinations
              </span>
            </div>
            <div className="space-y-1">
              <span className="block font-heading text-4xl sm:text-5xl font-extrabold">
                <StatsCounter value={2200} suffix="+" duration={2} />
              </span>
              <span className="block text-xs font-bold text-white/70 uppercase tracking-widest">
                Trips Completed
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. WHY TRAVEL WITH US FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title="The Core Values We Uphold"
            subtitle="Our Values"
            align="center"
          />
        </ScrollReveal>

        <ScrollStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <ScrollStaggerItem key={idx} direction="up">
              <div className="dot-bg bg-white dark:bg-card border border-border/60 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="bg-muted p-2.5 rounded-lg inline-block mb-3.5">
                  {val.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-1.5">
                  {val.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" duration={0.7}>
          <div className="relative rounded-3xl overflow-hidden py-16 px-8 sm:px-16 text-center text-white bg-gradient-to-br from-accent to-primary shadow-2xl">
            <div className="relative z-10 max-w-xl mx-auto space-y-6">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Want a Tailored Travel Plan?
              </h2>
              <p className="text-white/80 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                We design itineraries specifically around your needs, dates, and budget. Speak to our holiday counselors today.
              </p>
              <div className="pt-2">
                <Link href="/contact">
                  <Button className="bg-white hover:bg-white/95 text-accent font-extrabold rounded-full px-8 py-3 text-xs shadow-md">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
