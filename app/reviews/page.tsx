"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ThumbsUp, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { useUIModals } from "@/providers/UIModalProvider";

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-[#FBBC05] text-[#FBBC05]" : "fill-muted text-muted"}`}
        />
      ))}
    </div>
  );
}

const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-rose-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-pink-500",
];

function Avatar({ name, colorIdx }: { name: string; colorIdx: number }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${AVATAR_COLORS[colorIdx % AVATAR_COLORS.length]}`}>
      {initials}
    </div>
  );
}

function Lightbox({
  photos,
  startIndex,
  onClose,
}: {
  photos: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          className="relative max-w-4xl w-full mx-4"
          style={{ aspectRatio: "4/3" }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={photos[current]}
            alt={`Review photo ${current + 1}`}
            fill
            className="object-contain rounded-xl"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          {photos.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
          <button onClick={onClose} className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-colors">
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
            {current + 1} / {photos.length}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PhotoGrid({ photos }: { photos: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  if (!photos || photos.length === 0) return null;
  const shown = photos.slice(0, 4);
  const extraCount = photos.length - 4;

  const gridCols = shown.length === 1 ? "1fr" : shown.length === 2 ? "1fr 1fr" : "2fr 1fr";
  const gridRows = shown.length <= 2 ? "180px" : "90px 90px";

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox photos={shown} startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
      <div
        className="mt-3 rounded-xl overflow-hidden"
        style={{ display: "grid", gridTemplateColumns: gridCols, gridTemplateRows: gridRows, gap: "2px", maxHeight: 182 }}
      >
        <div
          className={`relative cursor-pointer overflow-hidden group ${shown.length >= 3 ? "row-span-2" : ""}`}
          onClick={() => setLightboxIndex(0)}
        >
          <Image src={shown[0]} alt="Review photo 1" fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="200px" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>
        {shown.slice(1).map((photo, idx) => {
          const isLast = idx === shown.slice(1).length - 1 && extraCount > 0;
          return (
            <div key={idx} className="relative cursor-pointer overflow-hidden group" onClick={() => setLightboxIndex(idx + 1)}>
              <Image src={photo} alt={`Review photo ${idx + 2}`} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="100px" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              {isLast && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">+{extraCount}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

interface ReviewData {
  name: string;
  role: string;
  stars: number;
  date: string;
  quote: string;
  photos?: string[];
  colorIdx: number;
  helpful?: number;
}

function ReviewCard({ review, index }: { review: ReviewData; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > 220;
  const displayText = !isLong || expanded ? review.quote : review.quote.slice(0, 220) + "...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="bg-white dark:bg-[#1e1e1e] border border-border/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar name={review.name} colorIdx={review.colorIdx} />
          <div>
            <p className="font-semibold text-sm text-foreground leading-tight">{review.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{review.role}</p>
          </div>
        </div>
        <GoogleIcon size={20} />
      </div>

      <div className="flex items-center gap-2">
        <StarRow count={review.stars} />
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      <div>
        <p className="text-sm text-foreground/80 leading-relaxed">{displayText}</p>
        {isLong && (
          <button onClick={() => setExpanded((v) => !v)} className="text-xs font-semibold text-primary hover:underline mt-1">
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {review.photos && review.photos.length > 0 && <PhotoGrid photos={review.photos} />}

      <div className="flex items-center justify-between pt-1 mt-auto">
        <div className="inline-flex items-center gap-1.5 bg-muted/60 border border-border/60 px-2.5 py-1 rounded-full text-[10px] font-semibold text-muted-foreground">
          <GoogleIcon size={11} />
          Verified Google Review
        </div>
        {review.helpful != null && (
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <ThumbsUp className="h-3.5 w-3.5" />
            <span>{review.helpful} helpful</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const reviews: ReviewData[] = [
  {
    name: "Safwan Safwan",
    role: "Manali Group Tour",
    stars: 5,
    date: "June 2025",
    colorIdx: 0,
    helpful: 12,
    photos: [
      "/images/gallery/trip-moment-01.jpg",
      "/images/gallery/trip-moment-02.jpg",
      "/images/gallery/trip-moment-03.jpg",
    ],
    quote: "Me and my friends dream place Manali visited this month with Me Trip Holidays. This trip was truly unforgettable! From start to finish, everything was well organized from bus and hotels to sightseeing and local transfers. The team was very professional, friendly, and helpful throughout the trip. We felt very comfortable and well taken care of. Thank you, Me Trip Travels, for making our vacation so smooth and memorable! Me and friends recommended for any planning with friends.",
  },
  {
    name: "Archana vijayan",
    role: "Manali Holiday Tour",
    stars: 5,
    date: "May 2025",
    colorIdx: 1,
    helpful: 18,
    photos: [
      "/images/gallery/trip-moment-05.jpg",
      "/images/gallery/trip-moment-06.jpg",
      "/images/gallery/trip-moment-07.jpg",
      "/images/gallery/trip-moment-08.jpg",
    ],
    quote: "Most beautiful days I have been through with Anas bro, everything went superb as we planned. I had some health issue when I reached Manali, but Anas bro helped and supported very much. He came with us to the hospital and actually acted as a GUARDIAN for all of us. Our Manali days were actually nice, such a good experience. Hotels, vehicle everything was good. Special mention to the time management. It is a wonderful journey. Thank you Me Trip and all the credits goes to ANAS BRO, THANK YOU SO MUCH.",
  },
  {
    name: "Salik zaeem",
    role: "Malaysia Family Vacation",
    stars: 5,
    date: "April 2025",
    colorIdx: 2,
    helpful: 9,
    photos: [
      "/images/gallery/trip-moment-09.jpg",
      "/images/gallery/trip-moment-10.jpg",
      "/images/gallery/trip-moment-11.jpg",
    ],
    quote: "I recently completed my family trip to Malaysia with Metrip Travels, and it was an amazing experience! Everything was perfectly organized from flights and hotels to sightseeing and local transfers. The team was very professional, friendly, and helpful throughout the trip. We felt very comfortable and well taken care of. Thank you, Metrip Travels, for making our vacation so smooth and memorable! Highly recommended for anyone planning a family trip abroad.",
  },
  {
    name: "Manoj A",
    role: "Customized Holiday Tour",
    stars: 5,
    date: "March 2025",
    colorIdx: 3,
    helpful: 21,
    photos: [
      "/images/gallery/trip-moment-14.jpg",
      "/images/gallery/trip-moment-15.jpg",
      "/images/gallery/trip-moment-16.jpg",
      "/images/gallery/trip-moment-17.jpg",
    ],
    quote: "Had a well organised trip right from planning till the execution and completion. We approached Sherin and Anas who customised the trip according to our interest and quoted a budget friendly estimation. We were able to enjoy thoroughly without any stress as all the arrangements were properly planned whether it is driver and car allotment or hotel bookings. They made sure everyday whether everything is fine. They really exceeded our expectations. Thanks Me Trip Holidays for making this trip a memorable one.",
  },
  {
    name: "Rahul kumar",
    role: "Spiti Valley Expedition",
    stars: 5,
    date: "February 2025",
    colorIdx: 4,
    helpful: 7,
    quote: "An unforgettable experience! Traveling through Spiti Valley offers some of the most thrilling and scenic mountain routes you will ever witness. The high-altitude terrain, crystal-clear skies, and the peaceful vibe at the local monasteries are simply unmatched. If you love a good road trip and raw mountain energy, this is the perfect escape.",
  },
  {
    name: "Rahul vlogs10",
    role: "Spiti Valley Traveler",
    stars: 5,
    date: "January 2025",
    colorIdx: 5,
    helpful: 5,
    quote: "Our Spiti Valley trip was truly unforgettable from start to finish. Everything was well organized, and the entire journey was smooth despite the challenging mountain roads. The itinerary was perfectly planned, allowing us to enjoy every destination without feeling rushed.",
  },
];

export default function ReviewsPage() {
  const { enquiry } = useUIModals();
  const avgRating = (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/6 pt-28 pb-16 border-b border-border/50">
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: "radial-gradient(circle, hsl(var(--border)) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal direction="up">
            <span className="inline-flex items-center gap-2 bg-white dark:bg-card border border-border/70 px-4 py-1.5 rounded-full text-xs font-bold text-muted-foreground shadow-sm">
              <GoogleIcon size={14} />
              Google Reviews
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              What Our Travelers <span className="text-primary">Say</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Real experiences from real travelers, every review is verified and sourced directly from Google.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-white dark:bg-card border border-border/60 rounded-2xl px-8 py-5 shadow-lg mt-2">
              <div className="text-center">
                <p className="font-heading font-extrabold text-5xl text-foreground leading-none">{avgRating}</p>
                <div className="flex justify-center mt-1.5">
                  <StarRow count={5} />
                </div>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{reviews.length} reviews</p>
              </div>
              <div className="w-px h-16 bg-border hidden sm:block" />
              <div className="flex flex-col gap-1.5">
                {[5, 4, 3].map((star) => {
                  const cnt = reviews.filter((r) => r.stars === star).length;
                  const pct = (cnt / reviews.length) * 100;
                  return (
                    <div key={star} className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground w-4">{star}</span>
                      <Star className="h-3 w-3 fill-[#FBBC05] text-[#FBBC05]" />
                      <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-[#FBBC05] rounded-full" style={{ width: pct + "%" }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{cnt}</span>
                    </div>
                  );
                })}
              </div>
              <div className="w-px h-16 bg-border hidden sm:block" />
              <div className="hidden sm:flex flex-col items-center gap-2">
                <GoogleIcon size={28} />
                <p className="text-[10px] font-semibold text-muted-foreground text-center leading-tight">Verified on<br />Google</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal direction="up">
          <SectionHeading title="All Reviews" subtitle="Traveler Stories" align="left" className="mb-10" />
        </ScrollReveal>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {reviews.map((review, i) => (
            <div key={i} className="break-inside-avoid mb-5">
              <ReviewCard review={review} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent py-14 px-8 sm:px-14 text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            <div className="relative z-10 max-w-xl mx-auto space-y-5">
              <div className="flex justify-center">
                <div className="flex -space-x-1.5">
                  {["S", "A", "M", "R"].map((initial, i) => (
                    <div key={i} className={`h-9 w-9 rounded-full border-2 border-white/30 flex items-center justify-center text-white font-bold text-xs ${AVATAR_COLORS[i]}`}>
                      {initial}
                    </div>
                  ))}
                </div>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                Had a Great Trip with Us?
              </h2>
              <p className="text-white/80 text-sm leading-relaxed">
                Share your experience on Google and help other travelers discover their next adventure through Me Trip Holidays.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href="https://share.google/BvGliij5qPjkqejvV"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="write-google-review-btn"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-gray-800 font-extrabold rounded-full px-7 py-3 text-sm shadow-xl transition-all active:scale-95"
                >
                  <GoogleIcon size={16} />
                  Write a Review
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <Button
                  onClick={() => enquiry.open()}
                  id="reviews-cta-enquiry-btn"
                  className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-extrabold rounded-full px-7 py-3 text-sm transition-all"
                >
                  Plan My Trip
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
