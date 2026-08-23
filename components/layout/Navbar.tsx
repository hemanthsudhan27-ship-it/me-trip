"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Compass, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useUIModals } from "@/providers/UIModalProvider";
import { packages } from "@/data/packages";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const { enquiry } = useUIModals();


  // Listen to scroll events to toggle navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 site-header ${
        scrolled
          ? "glass shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.svg"
              alt="ME TRIP HOLIDAYS Logo"
              width={180}
              height={52}
              className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm py-2 transition-all relative ${
                  pathname === link.href
                    ? "text-primary font-extrabold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => enquiry.open()}
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white font-extrabold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all"
            >
              Plan My Trip
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[60px] bg-black/45 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="absolute right-0 top-0 h-[calc(100vh-60px)] w-4/5 max-w-sm bg-white dark:bg-card p-6 shadow-2xl border-l border-border flex flex-col justify-between overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-border pb-3">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-extrabold block py-1 transition-colors ${
                          pathname === link.href ? "text-primary font-heading" : "text-foreground/80 hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-4">
                <a
                  href="tel:+917736322522"
                  className="flex items-center justify-center gap-2 border border-border p-3 rounded-full text-foreground/80 hover:text-primary transition-colors text-sm font-semibold"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  Call Us
                </a>
                
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    enquiry.open();
                  }}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-3 rounded-full shadow-lg"
                >
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
