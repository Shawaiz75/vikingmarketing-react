"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { GOOGLE_MAPS_URL } from "@/lib/site";
import { Star, GoogleG } from "./review-icons";

export type Testimonial = { name: string; rating: number; date: string; text: string };

function ArrowButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      aria-label={direction === "left" ? "Scroll to previous reviews" : "Scroll to more reviews"}
      className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white"
    >
      <svg width="16" height="12" viewBox="0 0 14 10" fill="none" aria-hidden style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}>
        <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.button>
  );
}

/** Horizontally scrollable strip of every review on Viking's Google Business
 *  Profile (native overflow-x scroll + snap, so it works with touch on
 *  mobile/tablet the same way it works with a trackpad or the arrow buttons
 *  on desktop — no separate mobile-only code path needed). */
export default function ReviewsCarousel({ reviews }: { reviews: Testimonial[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const amount = (card?.offsetWidth ?? 340) + 20;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-end gap-2">
        <ArrowButton direction="left" onClick={() => scrollByCard(-1)} />
        <ArrowButton direction="right" onClick={() => scrollByCard(1)} />
      </div>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        style={{ scrollPaddingLeft: "1px" }}
      >
        {reviews.map((r) => (
          <motion.div
            key={`${r.name}-${r.date}`}
            data-review-card
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="card-strong flex w-[300px] flex-none snap-start flex-col p-6 sm:w-[340px]"
          >
            <div className="flex items-center justify-between">
              <span className="flex gap-0.5" role="img" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} filled={j < r.rating} />
                ))}
              </span>
              <span className="text-[13px] text-white/45">{r.date}</span>
            </div>
            {r.text ? (
              <p className="mt-4 line-clamp-6 flex-1 text-[15px] leading-relaxed text-white/80">{r.text}</p>
            ) : (
              <div className="flex-1" />
            )}
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#efa4f2] to-[#3d05dd] text-[13px] font-semibold text-white">
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-white">{r.name}</p>
                  <p className="text-[12.5px] text-white/50">Google review</p>
                </div>
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${r.name}'s review on Google`}
                className="flex-none transition hover:opacity-80"
              >
                <GoogleG />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
