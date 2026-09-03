"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export type FaqEntry = { q: string; a: string };

/** v2 FAQ accordion: keyboard-native buttons, animated height, reduced-motion safe. */
export default function FaqV2({ faqs }: { faqs: FaqEntry[] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="v2-card px-7 py-2 sm:px-9">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="v2-faq-item">
            <h3 className="m-0">
              <button
                type="button"
                className="v2-faq-q"
                aria-expanded={isOpen}
                aria-controls={`v2-faq-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <motion.span
                  aria-hidden
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={reduce ? { duration: 0 } : { duration: 0.25 }}
                  className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full"
                  style={{ background: isOpen ? "var(--v2-violet)" : "rgba(255,255,255,.08)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`v2-faq-panel-${i}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pr-12 text-[15px] leading-relaxed" style={{ color: "var(--v2-text-2)" }}>
                    {f.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
