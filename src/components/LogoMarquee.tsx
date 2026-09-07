"use client";

import { useState } from "react";
import Image from "next/image";

/** Continuously-scrolling logo strip (press mentions, integration icons).
 *  Pauses on hover for mouse users and via this button for keyboard/touch
 *  users, satisfying WCAG 2.2.2 (Pause, Stop, Hide) for auto-moving content.
 *  Renders as a static row under prefers-reduced-motion (see .marquee-track
 *  in globals.css). */
export default function LogoMarquee({
  logos,
}: {
  logos: { img: string; alt: string }[];
}) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative">
      <div className={`marquee press-marquee overflow-hidden py-6 ${paused ? "is-paused" : ""}`}>
        <div className="marquee-track items-center gap-16 px-4">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center gap-16" aria-hidden={half === 1}>
              {logos.map((logo) => (
                <Image
                  key={`${half}-${logo.img}`}
                  src={logo.img}
                  alt={half === 0 ? logo.alt : ""}
                  width={210}
                  height={56}
                  className="h-10 w-auto shrink-0 object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((v) => !v)}
        aria-pressed={paused}
        aria-label={paused ? "Play logo scroll" : "Pause logo scroll"}
        className="absolute -bottom-3 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition hover:border-white/20 hover:text-white"
      >
        {paused ? (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden>
            <path d="M0 0l10 6-10 6z" />
          </svg>
        ) : (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden>
            <rect width="3" height="12" />
            <rect x="7" width="3" height="12" />
          </svg>
        )}
      </button>
    </div>
  );
}
