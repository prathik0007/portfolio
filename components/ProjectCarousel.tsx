"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultiple = images.length > 1;

  // Live auto-rotation every 2.2 seconds (pauses on hover)
  useEffect(() => {
    if (!hasMultiple || isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [hasMultiple, isPaused, images.length]);

  function goTo(newIndex: number) {
    setIndex((newIndex + images.length) % images.length);
  }

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center border-b border-surface-border/40 group"
    >
      {/* Smooth cross-fade stacked images for seamless live rotation */}
      {images.map((img, i) => (
        <Image
          key={img}
          src={img}
          alt={`${title} screenshot ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-contain transition-opacity duration-500 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          priority={i === 0}
        />
      ))}

      {hasMultiple && (
        <>
          {/* Navigation Controls */}
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-card backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white shadow-card backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
          >
            <ChevronRight size={16} />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/40 px-2 py-1 backdrop-blur-sm">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-primary" : "w-1.5 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
