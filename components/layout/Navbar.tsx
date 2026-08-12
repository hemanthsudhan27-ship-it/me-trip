"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    setShowDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Destinations", href: "#", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Group packages by type
  const internationalPkgs = packages.filter((pkg) => pkg.type === "international");
  const domesticPkgs = packages.filter((pkg) => pkg.type === "domestic");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg text-white transition-transform group-hover:rotate-12">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <span className="font-heading text-xl font-extrabold tracking-tight">
                <span className="text-primary">ME TRIP</span>{" "}
                <span className="text-foreground">HOLIDAYS</span>
              </span>
              <p className="text-[9px] font-bold text-accent tracking-widest -mt-1 block">
                TOURS & TRAVELS
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setShowDropdown(true)}
                onMouseLeave={() => link.hasDropdown && setShowDropdown(false)}
              >
                {link.hasDropdown ? (
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-1 font-medium text-sm text-foreground/80 hover:text-primary py-2 transition-colors focus:outline-none"
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        showDropdown ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`font-medium text-sm py-2 transition-all relative ${
                      pathname === link.href
                        ? "text-primary font-bold"
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
                )}

                {/* Destinations Mega Menu Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-1 w-[550px] bg-white dark:bg-card rounded-xl shadow-xl border border-border overflow-hidden p-6 grid grid-cols-2 gap-8 z-50 glass"
                      >
                        {/* International Column */}
                        <div>
                          <h4 className="font-heading font-extrabold text-sm text-primary uppercase tracking-wider mb-4 border-b border-border pb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            International
                          </h4>
                          <div className="grid grid-cols-1 gap-2 max-h-[220px] overflow-y-auto pr-2">
                            {internationalPkgs.slice(0, 7).map((pkg) => (
                              <Link
                                key={pkg.id}
                                href={`/packages/${pkg.slug}`}
                                className="text-xs text-foreground/70 hover:text-accent font-medium hover:translate-x-1 transition-transform flex items-center gap-1.5"
                              >
                                <span>•</span>
                                {pkg.name.replace(" Explorer", "").replace(" Escape", "").replace(" Wonders & Culture", "")}
                              </Link>
                            ))}
                            {internationalPkgs.length > 7 && (
                              <Link
                                href="/#international"
                                className="text-xs text-accent font-semibold hover:underline mt-1 block"
                              >
                                View all {internationalPkgs.length} destinations →
                              </Link>
                            )}
                          </div>
                        </div>

                        {/* Domestic Column */}
                        <div>
                          <h4 className="font-heading font-extrabold text-sm text-accent uppercase tracking-wider mb-4 border-b border-border pb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            Domestic
                          </h4>
                          <div className="grid grid-cols-1 gap-2 max-h-[220px] overflow-y-auto pr-2">
                            {domesticPkgs.map((pkg) => (
                              <Link
                                key={pkg.id}
                                href={`/packages/${pkg.slug}`}
                                className="text-xs text-foreground/70 hover:text-primary font-medium hover:translate-x-1 transition-transform flex items-center gap-1.5"
                              >
                                <span>•</span>
                                {pkg.name.replace(" Tour", "").replace(" Adventure", "").replace(" Heritage", "")}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => enquiry.open()}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Enquire Now
            </Button>
            
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
                      {link.hasDropdown ? (
                        <div>
                          <span className="font-heading font-extrabold text-sm text-foreground/50 uppercase tracking-widest block mb-3">
                            {link.name}
                          </span>
                          
                          {/* Mobile Dropdown Options */}
                          <div className="space-y-3 pl-3">
                            <div>
                              <p className="text-xs font-bold text-primary uppercase mb-2">International</p>
                              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-border">
                                {internationalPkgs.slice(0, 5).map((pkg) => (
                                  <Link
                                    key={pkg.id}
                                    href={`/packages/${pkg.slug}`}
                                    className="text-xs font-medium text-foreground/80 hover:text-primary py-1"
                                  >
                                    {pkg.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mt-3">
                              <p className="text-xs font-bold text-accent uppercase mb-2">Domestic</p>
                              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-border">
                                {domesticPkgs.slice(0, 5).map((pkg) => (
                                  <Link
                                    key={pkg.id}
                                    href={`/packages/${pkg.slug}`}
                                    className="text-xs font-medium text-foreground/80 hover:text-accent py-1"
                                  >
                                    {pkg.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`text-base font-semibold block py-1 ${
                            pathname === link.href ? "text-primary" : "text-foreground/80"
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-4">
                <a
                  href="tel:+919876543210"
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
