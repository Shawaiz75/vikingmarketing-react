"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./ui";
import Reveal from "./Reveal";

export type Faq = { q: string; a: string };

function FaqItem({ faq, index, open, onToggle }: { faq: Faq; index: number; open: boolean; onToggle: () => void }) {
  const panelId = `faq-answer-${index}`;
  return (
    <div className="faq-item" data-open={open}>
      <h3 className="m-0">
        <button
          type="button"
          className="faq-q"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{faq.q}</span>
          {/* Single "+" glyph rotated 45deg into an "x" on open, spring-eased,
              instead of cross-fading two separate svgs. */}
          <motion.span
            className="faq-toggle"
            aria-hidden
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 0v12M0 6h12" stroke="#fff" strokeWidth="2" /></svg>
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="faq-a"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <p className="pb-6 pr-10">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** FAQ accordion + "Still have questions?" side card (shared across pages). */
export default function FaqSection({
  title = "Frequently Asked Questions",
  faqs,
  contextLabel,
  sideImageAlt,
}: {
  title?: string;
  faqs: Faq[];
  contextLabel?: string;
  sideImageAlt?: string;
}) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading title={title} />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="card-strong px-7 py-3 sm:px-10">
            {faqs.map((f, i) => (
              <FaqItem
                key={f.q}
                faq={f}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </Reveal>
          {/* Sticky on desktop so it stays in view while the (usually much
              taller) FAQ list scrolls past; stacks normally below lg, where
              there's no room for a side rail. */}
          <Reveal delay={120} className="card-strong px-8 py-10 text-center lg:sticky lg:top-8">
            <Image
              src="/images/still-questions.svg"
              alt={sideImageAlt ?? `Still have questions? Contact Viking Marketing${contextLabel ? ` to get answers about ${contextLabel}` : ""}`}
              width={120}
              height={100}
              className="mx-auto h-24 w-auto"
            />
            <h3 className="mt-5 font-heading text-[20px] font-black leading-[32px] text-white">Still have questions?</h3>
            <p className="mt-3 text-[16px] leading-[29px] text-white/80">Our team will answer all your questions.</p>
            <p className="text-[16px] leading-[29px] text-white/80">We ensure a quick responses.</p>
            <Link
              href="/book-a-call"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8b5cf6] px-6 py-3 text-[15px] font-medium text-white transition hover:bg-[#7c3aed]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z" />
              </svg>
              Book a 15-min call with our team
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
