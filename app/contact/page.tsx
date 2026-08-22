"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send, Loader2, MessageSquare, Compass, CheckCircle2, User, Globe, Sparkles, ShieldCheck, ArrowRight, MessageCircle, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal, { ScrollStaggerContainer, ScrollStaggerItem } from "@/components/ui/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { packages } from "@/data/packages";

// Validation schema identical to Enquiry modal
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\+?[0-9\s-]{10,15}$/, { message: "Please enter a valid phone number (10-15 digits)." }),
  destination: z.string().min(1, { message: "Please select an interest." }),
  travelDate: z.string().optional(),
  travelers: z.string().optional(),
  tripType: z.string().optional(),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTripType, setSelectedTripType] = useState<string>("Holiday Tour");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelDate: "",
      travelers: "2 Adults",
      tripType: "Holiday Tour",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact Page Submitted: ", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  const contactCards: {
    icon: React.ReactNode;
    title: string;
    lines: { text: string; href?: string }[];
  }[] = [
      {
        icon: <Phone className="h-5 w-5 text-primary" />,
        title: "Phone Coordinates",
        lines: [
          { text: "+91 77363 22522", href: "tel:+917736322522" },
          { text: "+91 92073 22522", href: "tel:+919207322522" },
          { text: "+91 77363 22522 (WhatsApp)", href: "https://wa.me/917736322522" },
        ],
      },
      {
        icon: <Mail className="h-5 w-5 text-accent" />,
        title: "Email Channels",
        lines: [
          { text: "metripholidays@gmail.com", href: "mailto:metripholidays@gmail.com" },
        ],
      },
      {
        icon: <MapPin className="h-5 w-5 text-primary" />,
        title: "Office Headquarters",
        lines: [
          { text: "KMJ Complex, Room No 29/1157, Kattukulangara, Nellikkode, Kozhikode, Kerala 673016" },
        ],
      },
      {
        icon: <Clock className="h-5 w-5 text-accent" />,
        title: "Business Hours",
        lines: [
          { text: "Monday – Saturday: 09:30 AM – 07:00 PM" },
          { text: "Sunday: Closed (WhatsApp support active)" },
        ],
      },
    ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO HEADER */}
      <section className="relative h-[25vh] min-h-[180px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/golden-triangle.jpg"
            alt="Agra view"
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
            className="font-heading font-extrabold text-3xl sm:text-4xl text-primary"
          >
            Contact ME TRIP HOLIDAYS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm text-white/70 mt-2 max-w-md mx-auto"
          >
            We are here to help you coordinate your next tour. Reach out to our travel specialists today.
          </motion.p>
        </div>
      </section>

      {/* 2. TWO COLUMN DETAILS & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Coordinates Details Column (5 Cols) */}
          <ScrollReveal direction="left" duration={0.6} className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full inline-block">
                Reach Out
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-foreground">
                Get in Touch With Us
              </h2>
              <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-3.5 backdrop-blur-sm">
                <p className="text-xs text-foreground/85 dark:text-foreground/90 leading-relaxed">
                  Have questions about a <span className="font-semibold text-primary">holiday package</span>, <span className="font-semibold text-primary">visa updates</span>, <span className="font-semibold text-primary">custom itineraries</span>, or corporate booking details? Pick your channel below.
                </p>
              </div>
            </div>

            {/* Grid of details cards */}
            <ScrollStaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => (
                <ScrollStaggerItem key={idx} direction="up">
                  <div className="dot-bg bg-white dark:bg-card border border-border/60 p-4.5 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="bg-muted p-2 rounded-lg inline-block mb-3">
                      {card.icon}
                    </div>
                    <h4 className="font-heading font-bold text-xs text-foreground uppercase tracking-wide mb-1.5">
                      {card.title}
                    </h4>
                    <div className="space-y-1">
                      {card.lines.map((line, lIdx) => (
                        <div key={lIdx} className="text-[11px] text-muted-foreground leading-relaxed">
                          {line.href ? (
                            <a href={line.href} className="hover:text-primary transition-colors hover:underline">
                              {line.text}
                            </a>
                          ) : (
                            <span>{line.text}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerContainer>

            {/* Destination Specialists Helplines */}
            <div className="dot-bg bg-white dark:bg-card border border-border/60 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow space-y-4">
              <h4 className="font-heading font-extrabold text-xs text-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-primary" />
                Destination Specialist Direct Lines
              </h4>
              <div className="space-y-2.5 text-xs">
                <div className="border-b border-border/40 pb-2">
                  <span className="font-bold text-foreground block text-[11px] text-primary">
                    ✈️ International (Thailand, Malaysia, Vietnam, Bali, Maldives)
                  </span>
                  <a href="tel:+917736322522" className="text-muted-foreground hover:text-primary transition-colors text-[11px] font-semibold">
                    +91 7736 322 522
                  </a>
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="font-bold text-foreground block text-[11px] text-accent">
                    🗺️ Domestic Specialists
                  </span>
                  <ul className="space-y-1 text-[11px] text-muted-foreground">
                    <li className="flex justify-between items-center gap-2">
                      <span>Manali, Agra, Delhi, Spiti Valley:</span>
                      <a href="tel:+918593040034" className="font-bold text-foreground hover:text-primary shrink-0">+91 8593 040 034</a>
                    </li>
                    <li className="flex justify-between items-center gap-2">
                      <span>Goa, Lakshadweep:</span>
                      <a href="tel:+919207322522" className="font-bold text-foreground hover:text-primary shrink-0">+91 9207 322 522</a>
                    </li>
                    <li className="flex justify-between items-center gap-2">
                      <span>Kashmir, Rajasthan:</span>
                      <a href="tel:+918089950532" className="font-bold text-foreground hover:text-primary shrink-0">+91 8089 950 532</a>
                    </li>
                    <li className="flex justify-between items-center gap-2">
                      <span>Hyderabad:</span>
                      <a href="tel:+916238922522" className="font-bold text-foreground hover:text-primary shrink-0">+91 6238 922 522</a>
                    </li>
                    <li className="flex justify-between items-center gap-2">
                      <span>Meghalaya, Sikkim, Darjeeling:</span>
                      <a href="tel:+917736322522" className="font-bold text-foreground hover:text-primary shrink-0">+91 7736 322 522</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Column (7 Cols) - Height matched to Left column */}
          <ScrollReveal direction="right" duration={0.6} className="lg:col-span-7 h-full flex flex-col">
            <div className="dot-bg bg-white dark:bg-card border border-border/70 p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between h-full space-y-5">
              {/* Top decorative gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 dark:bg-primary/20 border border-primary/25 flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-foreground">
                      Send Booking Enquiry
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Personalized itineraries, dates & immediate pricing support
                    </p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-1 rounded-full text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 w-fit shrink-0">
                  <Sparkles className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  Fast Response
                </div>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 my-auto animate-in fade-in zoom-in duration-300">
                  <div className="bg-emerald-100 dark:bg-emerald-950/60 p-4 rounded-2xl text-emerald-600 dark:text-emerald-400 shadow-inner border border-emerald-200 dark:border-emerald-800/40">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-heading font-extrabold text-lg text-foreground">
                      Enquiry Received Successfully!
                    </h4>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you! Our destination specialist has received your requirements and will connect with you via WhatsApp or phone shortly.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full max-w-xs">
                    <a
                      href="https://wa.me/917736322522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="w-full rounded-xl text-xs font-semibold py-2.5 border-border"
                    >
                      New Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between flex-1 gap-4">
                  {/* Trip Type Selector Pills */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                      Tour Category
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "🏖️ Holiday Tour", value: "Holiday Tour" },
                        { label: "💍 Honeymoon", value: "Honeymoon" },
                        { label: "👨‍👩‍👧 Family Trip", value: "Family Trip" },
                        { label: "👥 Group Tour", value: "Group Tour" },
                        { label: "💼 Corporate / Visa", value: "Corporate / Visa" },
                      ].map((t) => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => {
                            setSelectedTripType(t.value);
                            setValue("tripType", t.value);
                          }}
                          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer border ${selectedTripType === t.value
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-muted/40 hover:bg-muted text-muted-foreground border-border/70"
                            }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-name" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-primary" />
                        Full Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="e.g. Rahul Sharma"
                        {...register("name")}
                        className={`rounded-xl py-2.5 text-xs bg-muted/30 focus-visible:ring-primary focus-visible:bg-transparent transition-all ${errors.name ? "border-destructive focus-visible:ring-destructive" : "border-border/80"}`}
                      />
                      {errors.name && (
                        <p className="text-[11px] font-semibold text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-email" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-accent" />
                        Email Address <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        {...register("email")}
                        className={`rounded-xl py-2.5 text-xs bg-muted/30 focus-visible:ring-primary focus-visible:bg-transparent transition-all ${errors.email ? "border-destructive focus-visible:ring-destructive" : "border-border/80"}`}
                      />
                      {errors.email && (
                        <p className="text-[11px] font-semibold text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-phone" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-primary" />
                        Phone Number <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="contact-phone"
                        placeholder="+91 77363 22522"
                        {...register("phone")}
                        className={`rounded-xl py-2.5 text-xs bg-muted/30 focus-visible:ring-primary focus-visible:bg-transparent transition-all ${errors.phone ? "border-destructive focus-visible:ring-destructive" : "border-border/80"}`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] font-semibold text-destructive">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Destination */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-dest" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-accent" />
                        Package / Interest <span className="text-primary">*</span>
                      </Label>
                      <Controller
                        name="destination"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              id="contact-dest"
                              className={`rounded-xl py-2.5 text-xs bg-muted/30 focus:ring-primary focus:bg-transparent transition-all ${errors.destination ? "border-destructive focus:ring-destructive" : "border-border/80"}`}
                            >
                              <SelectValue placeholder="Select Destination / Service" />
                            </SelectTrigger>
                            <SelectContent className="glass max-h-64">
                              <SelectItem value="general" className="font-semibold text-primary">
                                General Consulting / Visa Enquiry
                              </SelectItem>
                              {packages.map((pkg) => (
                                <SelectItem key={pkg.id} value={pkg.name}>
                                  {pkg.name} ({pkg.duration})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.destination && (
                        <p className="text-[11px] font-semibold text-destructive">{errors.destination.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Travel Dates */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-date" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        Tentative Dates / Month
                      </Label>
                      <Input
                        id="contact-date"
                        placeholder="e.g. Nov 2026 / Next Month"
                        {...register("travelDate")}
                        className="rounded-xl py-2.5 text-xs bg-muted/30 focus-visible:ring-primary focus-visible:bg-transparent transition-all border-border/80"
                      />
                    </div>

                    {/* Number of Travelers */}
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-travelers" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-accent" />
                        Total Travelers
                      </Label>
                      <Controller
                        name="travelers"
                        control={control}
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger
                              id="contact-travelers"
                              className="rounded-xl py-2.5 text-xs bg-muted/30 focus:ring-primary focus:bg-transparent transition-all border-border/80"
                            >
                              <SelectValue placeholder="Select Travelers" />
                            </SelectTrigger>
                            <SelectContent className="glass">
                              <SelectItem value="1 Person (Solo)">1 Person (Solo)</SelectItem>
                              <SelectItem value="2 Adults (Couple)">2 Adults (Couple)</SelectItem>
                              <SelectItem value="Family (3-5 Guests)">Family (3-5 Guests)</SelectItem>
                              <SelectItem value="Group (6-15 Guests)">Group (6-15 Guests)</SelectItem>
                              <SelectItem value="Corporate (15+ Guests)">Corporate (15+ Guests)</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 flex-1 flex flex-col">
                    <Label htmlFor="contact-msg" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-primary" />
                      Trip Details & Special Notes <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="contact-msg"
                      placeholder="Share your budget range, hotel preferences (3★/4★/5★), customized sightseeing requests, or questions..."
                      rows={3}
                      {...register("message")}
                      className={`rounded-xl p-3 text-xs bg-muted/30 focus-visible:ring-primary focus-visible:bg-transparent transition-all leading-relaxed flex-1 min-h-[85px] ${errors.message ? "border-destructive focus-visible:ring-destructive" : "border-border/80"}`}
                    />
                    {errors.message && (
                      <p className="text-[11px] font-semibold text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary via-primary to-accent hover:opacity-95 text-white font-bold rounded-xl py-3.5 text-xs sm:text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <span>Send Booking Enquiry</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {/* Trust guarantees footer bar */}
                  <div className="pt-2.5 border-t border-border/40 grid grid-cols-3 gap-2 text-center">
                    <div className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                      <span>100% Privacy</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                      <Sparkles className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>Best Price</span>
                    </div>
                    <div className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>Quick Callback</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. GOOGLE MAP IFRAME PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl h-[350px] relative bg-muted">
            {/* Map Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0456102604696!2d75.80789717474442!3d11.26900418890987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6595561a0f8bf%3A0xf6358c2794eb8e3d!2sNellikkode%2C%20Kozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-110 opacity-90"
              title="ME TRIP HOLIDAYS Office Location"
            ></iframe>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
