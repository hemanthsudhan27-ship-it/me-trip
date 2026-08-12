"use client";

import React, { useState } from "react";
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
  const [plannerType, setPlannerType] = useState("all");
  const [plannerDest, setPlannerDest] = useState("");

  const handlePlannerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPkgName = plannerDest || undefined;
    enquiry.open(selectedPkgName);
  };

  // Filter options for planner dropdown based on type
  const filteredPlannerPkgs = packages.filter(
    (pkg) => plannerType === "all" || pkg.type === plannerType
  );

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
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[580px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Scenic Beach Sunset"
            fill
            priority
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-black/45 dark:bg-black/55" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-8 mt-10">
          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full"
            >
              <Plane className="h-4 w-4 rotate-45 text-primary fill-primary" />
              Tours & Holiday Experts
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight"
            >
              Your Journey, <br className="sm:hidden" />
              <span className="text-primary">Perfectly Planned</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Explore custom international and domestic holiday packages curated by destination experts. Book your escape today.
            </motion.p>
          </div>

          {/* Quick Search/Enquiry Planner Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full max-w-4xl mx-auto"
          >
            <form
              onSubmit={handlePlannerSubmit}
              className="glass p-5 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4 text-foreground text-left"
            >
              {/* Type Select */}
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
                </select>
              </div>

              {/* Destination Select */}
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
                  {filteredPlannerPkgs.map((pkg) => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name} ({pkg.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit CTA */}
              <div className="w-full md:w-auto md:self-end pt-2 md:pt-0">
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-primary hover:bg-primary/95 text-white font-bold rounded-xl px-8 py-6.5 text-sm shadow-lg flex items-center justify-center gap-2 transform active:scale-95 transition-transform"
                >
                  Find Holiday
                  <ArrowRight className="h-4.5 w-4.5" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-card border border-border/60 rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/60">
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
      </section>

      {/* 3. FEATURED/POPULAR PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPkgs.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </section>

      {/* 4. DESTINATIONS TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Explore Our Destinations"
          subtitle="Where to next?"
          align="center"
        />

        <Tabs defaultValue="international" className="w-full text-center space-y-10">
          <TabsList className="bg-muted p-1 rounded-full inline-flex border border-border mb-4">
            <TabsTrigger value="international" className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
              International
            </TabsTrigger>
            <TabsTrigger value="domestic" className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
              Domestic Trips
            </TabsTrigger>
          </TabsList>

          {/* International Tab */}
          <TabsContent value="international" className="text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalPkgs.slice(0, 6).map((pkg, index) => (
                <div
                  key={pkg.id}
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
              ))}
            </div>
          </TabsContent>

          {/* Domestic Tab */}
          <TabsContent value="domestic" className="text-left animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {domesticPkgs.map((pkg, index) => (
                <div
                  key={pkg.id}
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
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="bg-foreground text-background py-20 border-y border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Travel With ME TRIP HOLIDAYS?"
            subtitle="The ME TRIP Difference"
            align="center"
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="bg-white/5 p-3 rounded-xl inline-block mb-4 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-background/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Happy Travelers"
          align="center"
        />

        <div className="max-w-4xl mx-auto relative px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((test, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white dark:bg-card border border-border/60 p-8 sm:p-12 rounded-2xl flex flex-col items-center text-center space-y-6 shadow-xl relative">
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
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-[350px] md:h-[280px]">
          <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-md md:col-span-2">
            <Image
              src="/images/destinations/maldives.jpg"
              alt="Maldives Resort"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-md">
            <Image
              src="/images/destinations/bali.jpg"
              alt="Bali Temple"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative h-full w-full rounded-xl overflow-hidden group shadow-md">
            <Image
              src="/images/destinations/vietnam.jpg"
              alt="Halong Bay"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      {/* 8. CLOSING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden py-16 px-8 sm:px-16 text-center text-white bg-gradient-to-br from-primary to-accent shadow-2xl">
          {/* Overlay elements */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          
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
      </section>
    </div>
  );
}
