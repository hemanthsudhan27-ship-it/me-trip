"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send, Loader2, MessageSquare, Compass, CheckCircle2 } from "lucide-react";
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
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coordinates Details Column (5 Cols) */}
          <ScrollReveal direction="left" duration={0.6} className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full inline-block">
                Reach Out
              </span>
              <h2 className="font-heading font-extrabold text-2xl text-foreground">
                Get in Touch With Us
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Have questions about a holiday package, visa updates, custom itineraries, or corporate booking details? Pick your channel.
              </p>
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

            {/* WhatsApp Quick Chat Callout */}
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 p-5 rounded-2xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-heading font-extrabold text-xs text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                  Instant Support
                </h4>
                <p className="text-[11px] text-emerald-700/80 dark:text-emerald-400/85">
                  Have a quick question? Message our team on WhatsApp for immediate help.
                </p>
              </div>
              <a
                href="https://wa.me/917736322522"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-105 shrink-0"
              >
                <MessageSquare className="h-5 w-5 fill-white text-white" />
              </a>
            </div>
          </ScrollReveal>

          {/* Form Column (7 Cols) */}
          <ScrollReveal direction="right" duration={0.6} className="lg:col-span-7 bg-white dark:bg-card border border-border/60 p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <h3 className="font-heading font-extrabold text-lg text-foreground mb-1.5 flex items-center gap-1.5">
              <Compass className="h-4.5 w-4.5 text-primary" />
              Send Booking Enquiry
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Complete this form and one of our destination specialists will call or email you with pricing details.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="bg-emerald-100 dark:bg-emerald-950 p-4 rounded-full text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="font-heading font-extrabold text-base text-foreground">
                  Enquiry Sent Successfully!
                </h4>
                <p className="text-xs text-muted-foreground max-w-sm">
                  We have received your detailed requirements. A package planner will contact you at the provided email/phone within 24 business hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-primary hover:bg-primary/95 text-white font-bold rounded-full px-6 py-2 text-xs mt-3"
                >
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name" className="text-xs font-bold text-foreground">Full Name</Label>
                    <Input
                      id="contact-name"
                      placeholder="Jane Doe"
                      {...register("name")}
                      className={`rounded-lg py-2 text-xs focus-visible:ring-primary ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-semibold text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email" className="text-xs font-bold text-foreground">Email Address</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="jane@example.com"
                      {...register("email")}
                      className={`rounded-lg py-2 text-xs focus-visible:ring-primary ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-semibold text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-phone" className="text-xs font-bold text-foreground">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      placeholder="+91 77363 22522"
                      {...register("phone")}
                      className={`rounded-lg py-2 text-xs focus-visible:ring-primary ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] font-semibold text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Destination */}
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-dest" className="text-xs font-bold text-foreground">Package of Interest</Label>
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
                            className={`rounded-lg py-2 text-xs focus:ring-primary ${errors.destination ? "border-destructive focus:ring-destructive" : ""}`}
                          >
                            <SelectValue placeholder="Select Destination" />
                          </SelectTrigger>
                          <SelectContent className="glass">
                            <SelectItem value="general" className="font-semibold text-primary">General Consulting / Visa Enquiry</SelectItem>
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

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="contact-msg" className="text-xs font-bold text-foreground">Enquiry Message</Label>
                  <Textarea
                    id="contact-msg"
                    placeholder="Provide traveling dates, number of adults/kids, and custom requests..."
                    rows={4}
                    {...register("message")}
                    className={`rounded-lg py-2 text-xs focus-visible:ring-primary ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-semibold text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-bold rounded-full py-2.5 text-xs shadow-lg mt-2 flex items-center justify-center gap-1.5 transform active:scale-95 transition-transform"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
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
