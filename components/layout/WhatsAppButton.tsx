"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "917736322522";
  const defaultMessage = encodeURIComponent(
    "Hello Me Trip Holidays, I would like to enquire about holiday packages."
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* Pulse Rings */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping duration-1000 pointer-events-none scale-110" />
      
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-shadow duration-300 relative group cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-white" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 bg-foreground text-background text-[11px] font-bold py-1.5 px-3 rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-border/10">
          Chat with Us
        </span>
      </motion.a>
    </div>
  );
}
