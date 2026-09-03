"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * The hero's working demo: one Saturday-night lead, answered and booked by the
 * AI while the owner is off the clock. Loops as a timed sequence; with
 * prefers-reduced-motion the finished conversation renders statically.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

type Step =
  | { kind: "missed" }
  | { kind: "typing"; side: "ai" | "in" }
  | { kind: "msg"; side: "ai" | "in"; text: string; time: string }
  | { kind: "slots" }
  | { kind: "booked" }
  | { kind: "logged" };

// (step, delay-after-ms)
const SCRIPT: [Step, number][] = [
  [{ kind: "missed" }, 1400],
  [{ kind: "typing", side: "ai" }, 1100],
  [
    { kind: "msg", side: "ai", text: "Hi, this is Summit Air — sorry we missed your call! How can we help?", time: "9:47 PM" },
    1500,
  ],
  [
    { kind: "msg", side: "in", text: "AC just died and it's still 96° out. How soon can someone come take a look?", time: "9:48 PM" },
    1400,
  ],
  [{ kind: "typing", side: "ai" }, 1000],
  [
    { kind: "msg", side: "ai", text: "That's rough — we can help. Is this for a house or a business, and what's the ZIP?", time: "9:48 PM" },
    1500,
  ],
  [{ kind: "msg", side: "in", text: "House, 85248", time: "9:49 PM" }, 1200],
  [{ kind: "typing", side: "ai" }, 900],
  [
    { kind: "msg", side: "ai", text: "Got it. Earliest openings — tap one and you're on the schedule:", time: "9:49 PM" },
    900,
  ],
  [{ kind: "slots" }, 1700],
  [{ kind: "booked" }, 1400],
  [{ kind: "logged" }, 3600],
];

const FULL_COUNT = SCRIPT.length;

export default function ConvoDemo() {
  const reduce = useReducedMotion();
  // Server-render the finished conversation so the demo reads complete
  // without JS (and under reduced motion). JS resets it and plays the loop.
  const [count, setCount] = useState(FULL_COUNT);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduce) {
      setCount(FULL_COUNT);
      return;
    }
    setCount(0);
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (i >= SCRIPT.length) {
        // hold the finished state, then restart the night
        timer.current = setTimeout(() => {
          if (cancelled) return;
          i = 0;
          setCount(0);
          timer.current = setTimeout(tick, 900);
        }, 2400);
        return;
      }
      i += 1;
      setCount(i);
      timer.current = setTimeout(tick, SCRIPT[i - 1][1]);
    };
    timer.current = setTimeout(tick, 800);
    return () => {
      cancelled = true;
      if (timer.current) clearTimeout(timer.current);
    };
  }, [reduce]);

  // visible steps; a typing indicator only shows while it is the latest step
  const steps = SCRIPT.slice(0, count).map(([s]) => s);
  const visible = steps.filter((s, idx) => s.kind !== "typing" || idx === steps.length - 1);

  return (
    <div className="v2-phone" role="img" aria-label="Demo conversation: a missed 9:47 PM call gets an instant text from Viking's AI, which qualifies the lead and books a Tuesday 8:00 AM appointment, then logs it to the CRM.">
      {/* status bar */}
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundImage: "var(--v2-grad-ai)" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff" aria-hidden><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z"/></svg>
          </span>
          <div>
            <p className="text-[13px] font-semibold leading-tight text-white">Summit Air &amp; Heat</p>
            <p className="v2-mono text-[10.5px] leading-tight" style={{ color: "var(--v2-text-3)" }}>
              VIKING AI · ANSWERING
            </p>
          </div>
        </div>
        <span className="v2-mono text-[11px]" style={{ color: "var(--v2-text-3)" }}>SAT 9:47 PM</span>
      </div>

      {/* thread */}
      <div className="flex min-h-[420px] flex-col gap-2.5 px-4 py-4 sm:px-5">
        <AnimatePresence initial={false}>
          {visible.map((s, i) => {
            const key = `${s.kind}-${i}`;
            if (s.kind === "missed")
              return (
                <motion.div key={key} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }} className="mx-auto flex items-center gap-2 rounded-full border px-4 py-1.5" style={{ borderColor: "rgba(246,173,85,.35)", background: "rgba(246,173,85,.08)" }}>
                  <span className="dot dot-missed inline-block h-1.5 w-1.5 rounded-full" />
                  <span className="v2-mono text-[11px] tracking-wide" style={{ color: "var(--v2-missed)" }}>MISSED CALL · (480) 555-0139</span>
                </motion.div>
              );
            if (s.kind === "typing")
              return (
                <motion.div key={key} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="v2-msg v2-msg-ai v2-typing !py-3.5" aria-hidden>
                  <span /><span /><span />
                </motion.div>
              );
            if (s.kind === "msg")
              return (
                <motion.div key={key} initial={reduce ? false : { opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, ease: EASE }} className={`v2-msg ${s.side === "ai" ? "v2-msg-ai" : "v2-msg-in"}`}>
                  {s.text}
                  <span className="mt-1 block text-right text-[10px] opacity-60">{s.time}</span>
                </motion.div>
              );
            if (s.kind === "slots")
              return (
                <motion.div key={key} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }} className="ml-auto flex max-w-[82%] flex-wrap justify-end gap-2">
                  <span className={`v2-mono rounded-full border px-3.5 py-2 text-[12px] transition-colors ${count >= FULL_COUNT - 1 ? "border-[rgba(55,202,55,.5)] bg-[rgba(55,202,55,.14)] text-[#7fe37f]" : "border-white/20 text-white/80"}`}>
                    TUE 8:00 AM {count >= FULL_COUNT - 1 ? "✓" : ""}
                  </span>
                  <span className="v2-mono rounded-full border border-white/20 px-3.5 py-2 text-[12px] text-white/80">TUE 1:30 PM</span>
                </motion.div>
              );
            if (s.kind === "booked")
              return (
                <motion.div key={key} initial={reduce ? false : { opacity: 0, y: 14, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.45, ease: EASE }} className="mt-1 rounded-2xl border p-4" style={{ borderColor: "rgba(55,202,55,.35)", background: "rgba(55,202,55,.07)" }}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl" style={{ background: "rgba(55,202,55,.18)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 12.5 9.5 18 20 6.5" stroke="#37ca37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-white">Booked — AC diagnostic</p>
                      <p className="v2-mono text-[11px]" style={{ color: "var(--v2-text-3)" }}>TUE 8:00 AM · TECH: M. RIVERA</p>
                    </div>
                  </div>
                </motion.div>
              );
            // logged
            return (
              <motion.div key={key} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="mx-auto mt-1 flex items-center gap-2">
                <span className="dot dot-booked inline-block h-1.5 w-1.5 rounded-full" />
                <span className="v2-mono text-[10.5px] tracking-wide" style={{ color: "var(--v2-text-3)" }}>
                  LOGGED TO CRM · FOLLOW-UP + REVIEW REQUEST QUEUED
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* footer note */}
      <div className="border-t border-white/8 px-5 py-3">
        <p className="v2-mono text-center text-[10.5px] tracking-wide" style={{ color: "var(--v2-text-3)" }}>
          SIMULATED CONVERSATION · EVERY REPLY WRITTEN FOR YOUR BUSINESS
        </p>
      </div>
    </div>
  );
}
