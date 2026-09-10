"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export type GrowthRow = {
  problem: string;
  solution: string;
  headline: string;
  href: string;
  image: string;
  imageAlt: string;
  images?: string[];
};

/** Marquee of platform-logo strips used in the unified-inbox growth row
 *  (the source asset is one 755x60 strip of app logos, tiled and scrolled). */
function SocialMarquee() {
  return (
    <div className="space-y-3 py-5" aria-hidden>
      {[0, 1].map((rowIdx) => (
        <div key={rowIdx} className="marquee overflow-hidden">
          <div
            className="marquee-track items-center gap-10 px-4"
            style={rowIdx === 1 ? { animationDirection: "reverse", animationDuration: "46s" } : undefined}
          >
            {[0, 1].map((half) => (
              <div key={half} className="flex items-center gap-10">
                {[0, 1, 2].map((i) => (
                  <Image
                    key={`${half}-${i}`}
                    src="/images/growth-social-logo.svg"
                    alt=""
                    width={755}
                    height={60}
                    className="h-11 w-auto max-w-none"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Accessible tab set (WAI-ARIA tabs pattern) for the "How Viking Drives
 *  Your Growth" section. Instead of forcing every visitor to scroll past
 *  four full-height cards to find the one problem they came for, the tab
 *  list surfaces all four problem/solution pairs at once so they can jump
 *  straight to the one that matters to them; the panel below shows that
 *  row's full detail (problem, solution, headline, CTA, media). */
export default function GrowthTabs({ rows }: { rows: GrowthRow[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  // On the mobile horizontally-scrolling tab strip, the active tab can end
  // up off-screen — from a click near the scroll edge, or because tapping
  // a <button> doesn't move focus on iOS Safari (so focus()'s own
  // scroll-into-view never fires there). Keep it in view on every change,
  // scrolling only the tablist's own scrollLeft — never scrollIntoView,
  // which would walk up to the window and jump-scroll the whole page to
  // this section on mount.
  useEffect(() => {
    const el = tabRefs.current[active];
    const list = listRef.current;
    if (!el || !list) return;
    const elLeft = el.offsetLeft;
    const elRight = elLeft + el.offsetWidth;
    const viewLeft = list.scrollLeft;
    const viewRight = viewLeft + list.clientWidth;
    if (elLeft < viewLeft) {
      list.scrollTo({ left: elLeft, behavior: "smooth" });
    } else if (elRight > viewRight) {
      list.scrollTo({ left: elRight - list.clientWidth, behavior: "smooth" });
    }
  }, [active]);

  const focusTab = (index: number) => {
    const next = (index + rows.length) % rows.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(rows.length - 1);
        break;
    }
  };

  const row = rows[active];

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-[300px_1fr] lg:items-start lg:gap-8">
      <div
        ref={listRef}
        role="tablist"
        aria-label="Viking growth features"
        aria-orientation="vertical"
        className="flex gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {rows.map((r, i) => {
          const isActive = i === active;
          return (
            <button
              key={r.solution}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`growth-tab-${i}`}
              aria-selected={isActive}
              aria-controls={`growth-panel-${i}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`flex flex-none items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition ${
                isActive
                  ? "border-[#efa4f2]/40 bg-white/[0.06]"
                  : "border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
              }`}
            >
              <span className="relative flex-none">
                <Image src="/images/icon-viking-mark.svg" alt="" width={40} height={40} className="h-10 w-10" />
                {isActive ? (
                  <span
                    aria-hidden
                    className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full bg-[#efa4f2] ring-2 ring-[#0b0920]"
                  />
                ) : null}
              </span>
              <span className="min-w-0">
                <span className={`block text-[14px] font-semibold ${isActive ? "text-white" : "text-white/75"}`}>
                  {r.solution}
                </span>
                <span className="mt-0.5 hidden text-[12.5px] text-white/45 lg:block">{r.problem}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`growth-panel-${active}`}
        aria-labelledby={`growth-tab-${active}`}
        tabIndex={0}
        className="card-strong overflow-hidden p-6 md:p-8"
      >
        {/* Keyed on the active row so switching tabs crossfades the panel's
            content instead of snapping instantly. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={row.solution}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                {/* Icon files are already complete 59x59 tiles (dark
                    rounded-square + gradient border + glyph baked in), so no
                    wrapper background is needed — the drop shadow adds a red
                    "problem" glow without touching the tile art itself. */}
                <Image
                  src="/images/icon-missed.svg"
                  alt="Missed call icon representing a lost customer"
                  width={59}
                  height={59}
                  className="h-[59px] w-[59px] flex-none drop-shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                />
                <p className="text-[15.5px] font-medium text-white/60">{row.problem}</p>
              </div>
              <div className="hidden items-center justify-center md:flex">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden>
                  <path d="M1 6h20m0 0l-6-5m6 5l-6 5" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <Image
                  src="/images/icon-viking-mark.svg"
                  alt={`Viking Marketing ${row.solution} icon`}
                  width={59}
                  height={59}
                  className="h-[59px] w-[59px] flex-none drop-shadow-[0_0_20px_rgba(139,92,246,0.35)]"
                />
                <p className="text-[16px] font-semibold text-white">{row.solution}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="font-heading text-[19px] font-bold leading-snug text-white">{row.headline}</p>
              <Link
                href={row.href}
                className="inline-flex flex-none items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-[13.5px] font-medium text-white transition hover:border-[#efa4f2]/50 hover:bg-white/[0.04] hover:text-[#efa4f2]"
              >
                Learn More
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>

            {row.images ? (
              <div className="mt-5 flex items-stretch justify-between gap-4">
                {row.images.map((src, idx) => (
                  <div key={src} className="w-[31.5%] overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={idx === 0 ? row.imageAlt : ""}
                      width={182}
                      height={121}
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
                {row.image ? (
                  <Image src={row.image} alt={row.imageAlt} width={1144} height={296} className="w-full object-cover" />
                ) : (
                  <SocialMarquee />
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
