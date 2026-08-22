"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "College Tours", href: "/#college-tours" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const intPkgs = packages.filter((pkg) => pkg.type === "international").slice(0, 4);
  const domPkgs = packages.filter((pkg) => pkg.type === "domestic").slice(0, 4);

  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo.svg"
                alt="ME TRIP HOLIDAYS Logo"
                width={180}
                height={52}
                className="h-11 w-auto object-contain invert transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              Crafting premium travel experiences worldwide. From sun-kissed beaches to snowy peaks, we plan your perfect getaway so you can create timeless memories.
            </p>
            {/* WhatsApp Chat Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/917736322522?text=Hello%20Me%20Trip%20Holidays%2C%20I%20would%20like%20to%20enquire%20about%20a%20holiday%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/10"
              >
                <MessageCircle className="h-4.5 w-4.5 fill-white" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links & destinations */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-heading font-extrabold text-white text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors text-background/60 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-white text-sm uppercase tracking-wider mb-4">
                Destinations
              </h4>
              <ul className="space-y-2.5 text-sm">
                {[...intPkgs, ...domPkgs].slice(0, 5).map((pkg) => (
                  <li key={pkg.id}>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="hover:text-primary transition-colors text-background/60 hover:text-white block truncate"
                    >
                      {pkg.name.replace(" Explorer", "").replace(" Escape", "").replace(" Wonders & Culture", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-white text-sm uppercase tracking-wider mb-4">
              Our Desks & Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs text-background/70 space-y-1">
                  <span className="font-bold text-white block">Calicut HQ (Kerala):</span>
                  <span>KMJ Complex, Nellikkode, Kozhikode 673016</span>
                  <a
                    href="https://maps.app.goo.gl/rT2H1nbAdNVUhpMf7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline text-[11px] font-semibold"
                  >
                    Open Google Maps
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="text-xs text-background/70 space-y-1">
                  <span className="font-bold text-white block">Manali Branch (Himachal):</span>
                  <span>Me Trip Holidays, Manali, HP 175131</span>
                  <a
                    href="https://maps.app.goo.gl/2zJZWVBuR1dNrPj87"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent hover:underline text-[11px] font-semibold"
                  >
                    Open Google Maps
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-xs">
                  <a href="tel:+917736322522" className="text-background/70 hover:text-white transition-colors">
                    +91 77363 22522 (General & Intl)
                  </a>
                  <a href="tel:+918593040034" className="text-background/70 hover:text-white transition-colors">
                    +91 8593 040 034 (Manali & North Hub)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                <a href="mailto:metripholidays@gmail.com" className="text-background/70 hover:text-white transition-colors text-xs">
                  metripholidays@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-white text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-background/60 leading-relaxed">
              Subscribe to get exclusive holiday deals, early bird offers, and travel inspiration.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/95 text-white rounded-full p-2.5 shadow-md flex items-center justify-center shrink-0 w-10 h-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            {subscribed && (
              <p className="text-xs font-semibold text-emerald-400 animate-pulse">
                Subscribed successfully! Thank you.
              </p>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/40">
          <p>© {new Date().getFullYear()} ME TRIP HOLIDAYS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-primary transition-colors">

            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">

            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
