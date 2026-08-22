"use client";

import React from "react";
import HeroSection from "@/components/ui/HeroSection";
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Compass, Users, Map, Award, ShieldCheck, HeartHandshake, BadgePercent, Headset, Plane, ArrowRight, Star, Quote, GraduationCap, Users2, CheckCircle2, PhoneCall } from "lucide-react";
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


  // Featured Packages (Maldives, Bali, Meghalaya, Golden Triangle)
  const featuredPkgs = packages.filter((pkg) =>
    ["int-maldives", "int-bali", "dom-meghalaya", "dom-golden-triangle"].includes(pkg.id)
  );

  // Group packages for tabs
  const internationalPkgs = packages.filter((pkg) => pkg.type === "international");
  const domesticPkgs = packages.filter((pkg) => pkg.type === "domestic");
  const collegePkgs = packages.filter((pkg) => pkg.type === "college");

  const testimonials = [
    {
      name: "Rahul vlogs10",
      role: "Spiti Valley Traveler",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120&h=120",
      stars: 5,
      source: "Google Review",
      quote:
        "Our Spiti Valley trip was truly unforgettable from start to finish. Everything was well organized, and the entire journey was smooth despite the challenging mountain roads. The itinerary was perfectly planned, allowing us to enjoy every destination without feeling rushed.",
    },
    {
      name: "Manoj A",
      role: "Customized Holiday Tour",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
      stars: 5,
      source: "Google Review",
      quote:
        "Had a well organised trip right from planning till the execution and completion. We approached Sherin and Anas who customised the trip according to our interest and quoted a budget friendly estimation. We were able to enjoy thoroughly without any stress as all the arrangements were properly planned whether it is driver and car allotment or hotel bookings. They made sure everyday whether everything is fine. They really exceeded our expectations. Thanks Me Trip Holidays for making this trip a memorable one.",
    },
    {
      name: "Hacker VSpro",
      role: "Group Holiday Tour",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120&h=120",
      stars: 5,
      source: "Google Review",
      quote:
        "An unforgettable journey with beautiful views, friendly people, and amazing memories. Every moment was worth it, and I can't wait to travel again.",
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
    <div className="space-y-24 pb-12 w-full overflow-x-hidden">


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

        <ScrollStaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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
            <TabsList className="bg-muted p-1 rounded-full inline-flex border border-border mb-4 max-w-full overflow-x-auto">
              <TabsTrigger value="international" className="rounded-full px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                International
              </TabsTrigger>
              <TabsTrigger value="domestic" className="rounded-full px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Domestic Trips
              </TabsTrigger>
              <TabsTrigger value="college" className="rounded-full px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                College Tours
              </TabsTrigger>
            </TabsList>
          </ScrollReveal>

          {/* International Tab */}
          <TabsContent value="international" className="text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {internationalPkgs.slice(0, 6).map((pkg) => (
                <ScrollStaggerItem key={pkg.id} direction="up">
                  <div
                    onClick={() => quickView.open(pkg)}
                    className="group relative h-36 sm:h-[250px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Header Tag */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] sm:text-[9px] font-bold py-0.5 sm:py-1 px-2 sm:px-3 rounded-full uppercase tracking-wider">
                      {pkg.duration}
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 text-white space-y-0.5 sm:space-y-1">
                      <h3 className="font-heading font-extrabold text-xs sm:text-lg leading-tight text-white group-hover:text-primary transition-colors line-clamp-1">
                        {pkg.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/70 line-clamp-1">{pkg.description}</p>
                      <span className="text-[8px] sm:text-[10px] font-bold text-primary tracking-wider uppercase inline-flex items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1.5">
                        Explore <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </span>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </TabsContent>

          {/* Domestic Tab */}
          <TabsContent value="domestic" className="text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {domesticPkgs.map((pkg) => (
                <ScrollStaggerItem key={pkg.id} direction="up">
                  <div
                    onClick={() => quickView.open(pkg)}
                    className="group relative h-36 sm:h-[250px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Header Tag */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[8px] sm:text-[9px] font-bold py-0.5 sm:py-1 px-2 sm:px-3 rounded-full uppercase tracking-wider">
                      {pkg.duration}
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 text-white space-y-0.5 sm:space-y-1">
                      <h3 className="font-heading font-extrabold text-xs sm:text-lg leading-tight text-white group-hover:text-primary transition-colors line-clamp-1">
                        {pkg.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/70 line-clamp-1">{pkg.description}</p>
                      <span className="text-[8px] sm:text-[10px] font-bold text-accent tracking-wider uppercase inline-flex items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1.5">
                        Explore <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </span>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </TabsContent>

          {/* College Tab */}
          <TabsContent value="college" className="text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {collegePkgs.map((pkg) => (
                <ScrollStaggerItem key={pkg.id} direction="up">
                  <div
                    onClick={() => quickView.open(pkg)}
                    className="group relative h-36 sm:h-[250px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <Image
                      src={pkg.image}
                      alt={`Me Trip Holidays college tour to ${pkg.name} - student group trip package`}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Top Header Tag */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-yellow-400 text-yellow-950 text-[8px] sm:text-[9px] font-extrabold py-0.5 sm:py-1 px-2 sm:px-3 rounded-full uppercase tracking-wider">
                      {pkg.duration} • 40-50 Pax
                    </div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 text-white space-y-0.5 sm:space-y-1">
                      <h3 className="font-heading font-extrabold text-xs sm:text-lg leading-tight text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
                        {pkg.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-white/70 line-clamp-1">{pkg.description}</p>
                      <span className="text-[8px] sm:text-[10px] font-bold text-yellow-400 tracking-wider uppercase inline-flex items-center gap-1 sm:gap-1.5 pt-0.5 sm:pt-1.5">
                        Explore <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </span>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>
          </TabsContent>
        </Tabs>
      </section>

      {/* 5. COLLEGE TOURS SECTION */}
      <section id="college-tours" className="relative overflow-hidden">
        {/* College Section Header Banner */}
        <div className="relative h-[380px] w-full flex items-center overflow-hidden">
          <Image
            src="/images/college/kasol-camping.jpg"
            alt="College students camping and celebrating by a riverside bonfire during a Me Trip Holidays college group tour"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ScrollReveal direction="left">
              <div className="max-w-2xl space-y-5">
                <span className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
                  <GraduationCap className="h-3.5 w-3.5" />
                  College Tour Plans
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                  Adventure Awaits for{" "}
                  <span className="text-yellow-400">Every Student!</span>
                </h2>
                <p className="text-sm text-white/70 leading-relaxed max-w-lg">
                  Specially curated group tour packages for colleges and universities. Minimum 40–50 students required for exclusive group pricing. Certified tour guides, AC buses & unforgettable memories included.
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {[
                    { icon: <Users2 className="h-3.5 w-3.5" />, label: "Min 40–50 Pax" },
                    { icon: <CheckCircle2 className="h-3.5 w-3.5" />, label: "Certified Guides" },
                    { icon: <CheckCircle2 className="h-3.5 w-3.5" />, label: "AC Bus Transfers" },
                  ].map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full">
                      {item.icon}{item.label}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* College Package Cards Grid */}
        <div className="bg-gradient-to-b from-yellow-50/50 to-background dark:from-yellow-950/10 dark:to-background py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <ScrollReveal direction="up">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <p className="text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-1">College Tour Plans</p>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground">
                    Choose Your Dream College Trip
                  </h3>
                </div>
                <a
                  href="tel:+918593040034"
                  className="group flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-extrabold text-xs px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  Book for Your College
                </a>
              </div>
            </ScrollReveal>

            <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {collegePkgs.map((pkg, index) => (
                <ScrollStaggerItem key={pkg.id} direction="up">
                  <div
                    onClick={() => quickView.open(pkg)}
                    className="group relative bg-card border border-border/60 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-400/40 hover:shadow-xl transition-all duration-400 flex flex-col h-full"
                  >
                    {/* Image */}
                    <div className="relative h-32 sm:h-[200px] w-full overflow-hidden bg-muted">
                      <Image
                        src={pkg.image}
                        alt={`Me Trip Holidays college tour to ${pkg.name.replace('College Tour: ', '')} - group student travel package`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* College badge */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 bg-yellow-400 text-yellow-900 text-[8px] sm:text-[9px] font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full uppercase tracking-widest">
                        <GraduationCap className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        College
                      </div>
                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/60 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                        {pkg.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 flex flex-col flex-grow space-y-2 sm:space-y-3">
                      <h3 className="font-heading font-extrabold text-xs sm:text-sm text-foreground group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors leading-snug line-clamp-2">
                        {pkg.name.replace("College Tour: ", "")}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground line-clamp-2 leading-relaxed flex-grow">
                        {pkg.description}
                      </p>
                      <button
                        onClick={(e) => { e.stopPropagation(); enquiry.open(pkg.name); }}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-extrabold text-[10px] sm:text-xs py-1.5 sm:py-2 rounded-full transition-all flex items-center justify-center gap-1 sm:gap-1.5 mt-auto"
                      >
                        Enquire Now <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </button>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>

            {/* Bottom CTA strip */}
            <ScrollReveal direction="up">
              <div className="mt-4 bg-yellow-400/10 dark:bg-yellow-400/5 border border-yellow-400/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400/20 p-3 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-heading font-extrabold text-base text-foreground">Planning a College Trip?</p>
                    <p className="text-xs text-muted-foreground">Get exclusive pricing for groups of 40+ students. Free itinerary customization!</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+918593040034"
                    className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-extrabold text-xs px-5 py-2.5 rounded-full transition-all shadow-md"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    +91 8593 040 034
                  </a>
                  <a
                    href="tel:+917736322522"
                    className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-extrabold text-xs px-5 py-2.5 rounded-full transition-all shadow-md"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    +91 7736 322 522
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
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

        <ScrollReveal direction="scale" duration={0.7} className="max-w-4xl mx-auto relative px-4 sm:px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((test, index) => (
                <CarouselItem key={index}>
                  <div className="dot-bg bg-white dark:bg-card border border-border/60 p-6 sm:p-12 rounded-2xl flex flex-col items-center text-center space-y-6 shadow-xl relative">
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/10" />

                    {/* Google Review Badge & Stars */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 bg-muted/80 border border-border/80 px-3 py-1 rounded-full text-[11px] font-bold text-foreground">
                        <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        <span>Verified Google Review</span>
                      </div>
                      <div className="flex gap-1 pt-1">
                        {Array.from({ length: test.stars }).map((_, i) => (
                          <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-base sm:text-lg text-foreground/85 font-medium italic leading-relaxed max-w-2xl">
                      "{test.quote}"
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm">
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
            <CarouselPrevious className="hidden sm:flex absolute left-0 -translate-x-1/2 border border-border bg-white dark:bg-card" />
            <CarouselNext className="hidden sm:flex absolute right-0 translate-x-1/2 border border-border bg-white dark:bg-card" />
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
