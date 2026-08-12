"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // duration in seconds
}

export default function StatsCounter({
  value,
  suffix = "",
  duration = 2,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (end === 0) return;

    const totalDuration = duration * 1000; // convert to ms
    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);
      
      // Easing: quartic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      
      const currentVal = Math.floor(easedProgress * end);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-heading font-extrabold tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
