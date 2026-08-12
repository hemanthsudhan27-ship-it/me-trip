"use client";

import React, { useState } from "react";
import Link from "next/link";
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
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Compass className="h-6 w-6" />
              </div>
              <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                ME TRIP <span className="text-primary">HOLIDAYS</span>
              </span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              Crafting premium travel experiences worldwide. From sun-kissed beaches to snowy peaks, we plan your perfect getaway so you can create timeless memories.
            </p>
            {/* WhatsApp Chat Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20Me%20Trip%20Holidays%2C%20I%20would%20like%20to%20enquire%20about%20a%20holiday%20package."
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
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/60">
                  Suite 404, Travel Horizon Plaza, Banjara Hills Road No. 12, Hyderabad, Telangana, 500034
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-background/60 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                <a href="mailto:info@metripholidays.com" className="text-background/60 hover:text-white transition-colors">
                  info@metripholidays.com
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
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
