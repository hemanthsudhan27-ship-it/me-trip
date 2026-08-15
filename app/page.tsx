"use client";

import React, { useState, useEffect } from "react";
import Preloader from "@/components/ui/Preloader";
import HeroSection from "@/components/ui/HeroSection";
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Compass, Users, Map, Award, ShieldCheck, HeartHandshake, BadgePercent, Headset, Plane, ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useUIModals } from "@/providers/UIModalProvider";
import { packages } from "@/data/packages";
import PackageCard from "@/components/ui/PackageCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const { enquiry, quickView } = useUIModals();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("me_trip_has_visited");
    if (!hasVisited) {
      setShowPreloader(true);
    }
  }, []);

  // Featured Packages (Maldives, Bali, Meghalaya, Golden Triangle)
  const featuredPkgs = packages.filter((pkg) =>
    ["int-maldives", "int-bali", "dom-meghalaya", "dom-golden-triangle"].includes(pkg.id)
  );

  // Group packages for tabs
  const internationalPkgs = packages.filter((pkg) => pkg.type === "international");
  const domesticPkgs = packages.filter((pkg) => pkg.type === "domestic");

  const testimonials = [
    {
      name: "Rohit & Priya Sharma",
      role: "Maldives Honeymooners",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
      stars: 5,
      quote: "ME TRIP HOLIDAYS made our honeymoon absolutely magical! The overwater villa stay they recommended was perfect, and the private dinners they arranged were beyond words. 24/7 WhatsApp support was very helpful.",
    },
    {
      name: "Sarah Jenkins",
      role: "Bali Solo Backpacker",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
      stars: 5,
      quote: "I was hesitant about traveling solo, but the customized itinerary provided by the team was so detailed. The drivers were polite, the guides were knowledgeable, and everything went smoothly. Highly recommend!",
    },
    {
      name: "Amit Varma & Family",
      role: "Meghalaya Family Tour",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
      stars: 5,
      quote: "Our trip to Meghalaya was fantastic. Trekking the Double Decker Root Bridge with kids was challenging, but our guide was exceptionally patient. The hotels selected were top notch, right in the nature.",
    },
  ];

  const features = [
    {
      icon: <BadgePercent className="h-6 w-6 text-primary" />,
      title: "Unbeatable Prices",
      desc: "Get the best value for your budget with our handpicked packages and direct network rates.",
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Customized Itineraries",
      desc: "Tailored to your pace and preferences. Add activities, extend stays, and choose your hotels.",
    },
    {
      icon: <Headset className="h-6 w-6 text-primary" />,
      title: "24/7 Expert Concierge",
      desc: "Our travel assistance desk is always a WhatsApp message away to resolve queries during your trip.",
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Handpicked Premium Hotels",
      desc: "We vet hotels for cleanliness, safety, locations, and hospitality before booking them for you.",
    },
    {
      icon: <Compass className="h-6 w-6 text-primary" />,
      title: "Local Expert Guides",
      desc: "Explore cultural landmarks and secrets with verified English-speaking local guides.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Safe & Worry-Free Travel",
      desc: "From sanitized private transfers to fully insured excursions, we prioritize your safety.",
    },
  ];

  return (
    <div className="space-y-24 pb-12">
      {/* Preloader overlay (mounted on first load) */}
      {showPreloader && (
        <Preloader
          onComplete={() => {
            sessionStorage.setItem("me_trip_has_visited", "true");
            setShowPreloader(false);
            // Signal HeroSection to play its entrance timeline.
            // HeroSection listens for this event in its own useEffect.
            window.dispatchEvent(new Event("me-trip-hero-entrance"));
          }}
        />
      )}

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={25}>
          <div className="dot-bg bg-white dark:bg-card border border-border/60 rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/60">
            <div className="space-y-1.5 py-4 md:py-0">
              <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-primary">10+</span>
              <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Years of Experience
              </span>
            </div>
            <div className="space-y-1.5 py-4 md:py-0">
              <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-accent">15K+</span>
              <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Happy Travelers
              </span>
            </div>
            <div className="space-y-1.5 py-4 md:py-0">
              <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-primary">50+</span>
              <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Destinations Covered
              </span>
            </div>
            <div className="space-y-1.5 py-4 md:py-0">
              <span className="block font-heading font-extrabold text-3xl sm:text-4xl text-accent">24/7</span>
              <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest">
                On-trip Concierge
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. FEATURED/POPULAR PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <SectionHeading
              title="Most Popular Packages"
              subtitle="Best Sellers"
              align="left"
              className="mb-0"
            />
            <Link href="/gallery" className="group text-sm font-extrabold text-accent hover:underline flex items-center gap-1.5">
              Browse All Excursions
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPkgs.map((pkg, index) => (
            <ScrollStaggerItem key={pkg.id} direction="up">
              <PackageCard pkg={pkg} index={index} />
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerContainer>
      </section>

      {/* 4. DESTINATIONS TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            title="Explore Our Destinations"
            subtitle="Where to next?"
            align="center"
          />
        </ScrollReveal>

        <Tabs defaultValue="international" className="w-full text-center space-y-10">
          <ScrollReveal direction="up" delay={0.1}>
            <TabsList className="bg-muted p-1 rounded-full inline-flex border border-border mb-4">
              <TabsTrigger value="international" className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                International
              </TabsTrigger>
              <TabsTrigger value="domestic" className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
                Domestic Trips
              </TabsTrigger>
            </TabsList>
          </ScrollReveal>

          {/* International Tab */}
          <TabsContent value="international" className="text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalPkgs.slice(0, 6).map((pkg) => (
                <ScrollStaggerItem key={pkg.id} direction="up">
                  <div
                    onClick={() => quickView.open(pkg)}
                    className="group relative h-[250px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Header Tag */}
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                      {pkg.duration}
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                      <h3 className="font-heading font-extrabold text-lg leading-tight group-hover:text-primary transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-white/70 line-clamp-1">{pkg.description}</p>
                      <span className="text-[10px] font-bold text-primary tracking-wider uppercase inline-flex items-center gap-1.5 pt-1.5">
                        Explore Package <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </TabsContent>

          {/* Domestic Tab */}
          <TabsContent value="domestic" className="text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {domesticPkgs.map((pkg) => (
                <ScrollStaggerItem key={pkg.id} direction="up">
                  <div
                    onClick={() => quickView.open(pkg)}
                    className="group relative h-[250px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Header Tag */}
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                      {pkg.duration}
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                      <h3 className="font-heading font-extrabold text-lg leading-tight group-hover:text-primary transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-white/70 line-clamp-1">{pkg.description}</p>
                      <span className="text-[10px] font-bold text-accent tracking-wider uppercase inline-flex items-center gap-1.5 pt-1.5">
                        Explore Package <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </TabsContent>
        </Tabs>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="bg-foreground text-background py-20 border-y border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <SectionHeading
              title="Why Travel With ME TRIP HOLIDAYS?"
              subtitle="The ME TRIP Difference"
              align="center"
              className="text-white"
            />
          </ScrollReveal>

          <ScrollStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <ScrollStaggerItem key={idx} direction="up">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="bg-white/5 p-3 rounded-xl inline-block mb-4 border border-white/10">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-background/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerContainer>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ScrollReveal direction="up">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Happy Travelers"
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal direction="scale" duration={0.7} className="max-w-4xl mx-auto relative px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((test, index) => (
                <CarouselItem key={index}>
                  <div className="dot-bg bg-white dark:bg-card border border-border/60 p-8 sm:p-12 rounded-2xl flex flex-col items-center text-center space-y-6 shadow-xl relative">
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/10" />

                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: test.stars }).map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-base sm:text-lg text-foreground/80 font-medium italic leading-relaxed max-w-2xl">
                      "{test.quote}"
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-3 pt-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border">
                        <Image
                          src={test.avatar}
                          alt={test.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-heading font-extrabold text-sm text-foreground">
                          {test.name}
                        </h4>
                        <span className="text-xs font-semibold text-accent">
                          {test.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-1/2 border border-border bg-white" />
            <CarouselNext className="absolute right-0 translate-x-1/2 border border-border bg-white" />
          </Carousel>
        </ScrollReveal>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <SectionHeading
              title="Snapshots of Paradise"
              subtitle="Travel Gallery"
              align="left"
              className="mb-0"
            />
            <Link
              href="/gallery"
              className="group text-sm font-extrabold text-primary hover:underline flex items-center gap-1.5"
            >
              Explore Full Gallery
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollStaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-[350px] md:h-[280px]">
          <ScrollStaggerItem direction="scale" className="h-full w-full md:col-span-2">
            <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-md">
              <Image
                src="/images/destinations/maldives.jpg"
                alt="Maldives Resort"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </ScrollStaggerItem>
          <ScrollStaggerItem direction="scale" className="h-full w-full">
            <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-md">
              <Image
                src="/images/destinations/bali.jpg"
                alt="Bali Temple"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </ScrollStaggerItem>
          <ScrollStaggerItem direction="scale" className="h-full w-full">
            <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-md">
              <Image
                src="/images/destinations/vietnam.jpg"
                alt="Halong Bay"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </ScrollStaggerItem>
        </ScrollStaggerContainer>
      </section>

      {/* 8. CLOSING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="scale" duration={0.7} distance={20}>
          <div className="relative rounded-3xl overflow-hidden py-16 px-8 sm:px-16 text-center text-white bg-gradient-to-br from-primary to-accent shadow-2xl">
            {/* Overlay elements */}
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            {/* Dot pattern overlay on gradient banner */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                Ready to Write Your <br className="sm:hidden" /> Next Travel Story?
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Get in touch with our holiday specialists today and let us customize an unforgettable itinerary just for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  onClick={() => enquiry.open()}
                  className="w-full sm:w-auto bg-white hover:bg-white/95 text-primary font-extrabold rounded-full px-8 py-6.5 text-sm shadow-xl transform active:scale-95 transition-transform"
                >
                  Plan My Trip
                </Button>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto border border-white/35 hover:bg-white/10 text-white font-extrabold rounded-full px-8 py-3 text-sm transition-colors text-center"
                >
                  Contact Agency
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
