"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const DISMISS_KEY = "viking-sticky-cta-dismissed";

/** Slim floating CTA bar that appears once the visitor scrolls past the
 *  hero, keeping the (already-used-everywhere) "Book My Free Demo" CTA one
 *  click away without repeating it inline on every section. Hides again
 *  near the bottom of the page so it doesn't stack on top of the section's
 *  own closing CTA or the footer, and can be dismissed for the session. */
export default function StickyCta() {
  const [dismissed, setDismissed] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let alreadyDismissed = false;
    try {
      alreadyDismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // Storage can throw in private-browsing modes; fail open (show the bar).
    }
    setDismissed(alreadyDismissed);
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const nearBottom =
        window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 700;
      setVisible(pastHero && !nearBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore storage failures — worst case it can be dismissed again.
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40"
          role="region"
          aria-label="Quick contact"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 32 }}
        >
          <div className="border-t border-white/10 bg-[#0b0920]/95 backdrop-blur-sm">
            <div className="wrap flex items-center justify-between gap-4 py-3">
              <p className="hidden text-[14.5px] font-medium text-white sm:block">
                Ready to stop losing leads? Book a free 15-minute demo.
              </p>
              <p className="text-[14px] font-medium text-white sm:hidden">Book your free demo</p>
              <div className="flex flex-none items-center gap-2">
                <Link
                  href="/book-a-call"
                  className="rounded-full px-5 py-2.5 text-[14px] font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundImage: "var(--grad-cta)" }}
                >
                  Book Free Demo
                </Link>
                <motion.button
                  type="button"
                  onClick={handleDismiss}
                  whileTap={{ scale: 0.85 }}
                  aria-label="Dismiss"
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
