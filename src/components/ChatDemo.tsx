"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Step =
  | { kind: "lead"; text: string }
  | { kind: "typing" }
  | { kind: "ai"; text: string }
  | { kind: "booked" };

/** Scripted to visually prove the three claims made in the copy next to
 *  this demo: instant engagement, qualifying questions, and booking the
 *  appointment — not just describing them in a bullet list. */
const SCRIPT: { step: Step; holdMs: number }[] = [
  { step: { kind: "lead", text: "Hey, do you still have appointments open this week?" }, holdMs: 900 },
  { step: { kind: "typing" }, holdMs: 1100 },
  { step: { kind: "ai", text: "Yes! I can get you booked in as early as tomorrow. What day works best?" }, holdMs: 1900 },
  { step: { kind: "lead", text: "Tomorrow afternoon would be great." }, holdMs: 900 },
  { step: { kind: "typing" }, holdMs: 1100 },
  { step: { kind: "ai", text: "Perfect — you're all set for tomorrow at 2:00 PM. See you then!" }, holdMs: 1500 },
  { step: { kind: "booked" }, holdMs: 3400 },
];

function LeadBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/[0.08] px-4 py-2.5 text-[14px] leading-snug text-white/90">
        {text}
      </div>
    </div>
  );
}

function AiBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[80%] rounded-2xl rounded-br-sm px-4 py-2.5 text-[14px] leading-snug text-white"
        style={{ backgroundImage: "var(--grad-accent)" }}
      >
        {text}
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-end">
      <div className="flex items-center gap-1 rounded-2xl rounded-br-sm bg-white/[0.08] px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="chat-typing-dot h-1.5 w-1.5 rounded-full bg-white/60"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function BookedChip() {
  return (
    <div className="flex justify-center pt-1">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-[#efa4f2]/30 bg-[#efa4f2]/10 px-3.5 py-1.5 text-[12.5px] font-medium text-[#efa4f2]">
        <svg width="13" height="13" viewBox="0 0 22 22" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.6" />
          <path d="M6.5 11.4 9.6 14.4 15.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Appointment booked — Tomorrow, 2:00 PM
      </div>
    </div>
  );
}

/** Auto-playing, looping chat demo showing the AI Sales Assistant engaging
 *  a lead, qualifying them, and booking the appointment — a live
 *  demonstration of the claims made in the copy beside it, in place of a
 *  static illustration. Marked aria-hidden since the same information is
 *  already given as real text in that copy (headline/paragraph/bullets);
 *  a looping, re-rendering conversation would otherwise re-announce
 *  itself to screen readers indefinitely. Respects prefers-reduced-motion
 *  by rendering the finished conversation once, with no looping. */
export default function ChatDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setVisibleCount(SCRIPT.length);
      return;
    }

    let i = 0;
    const tick = () => {
      i += 1;
      setVisibleCount(i);
      if (i >= SCRIPT.length) {
        timeoutRef.current = window.setTimeout(() => {
          i = 0;
          setVisibleCount(0);
          timeoutRef.current = window.setTimeout(tick, 600);
        }, SCRIPT[SCRIPT.length - 1].holdMs);
        return;
      }
      timeoutRef.current = window.setTimeout(tick, SCRIPT[i - 1].holdMs);
    };
    timeoutRef.current = window.setTimeout(tick, 700);

    return () => window.clearTimeout(timeoutRef.current);
  }, []);

  const visible = SCRIPT.slice(0, visibleCount);

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[300px] aspect-[388/800]">
      {/* Screen content, positioned to exactly match the transparent screen
          cutout in the mockup PNG below (measured from the source file's
          alpha channel: left 4.5% / right 4.8% / top 7.5% / bottom 2%).
          The frame image sits on top and clips this to its rounded-corner
          shape, so this layer itself doesn't need matching border-radius. */}
      <div className="absolute overflow-hidden bg-[#0b0920]" style={{ left: "4.5%", right: "4.8%", top: "7.5%", bottom: "2%" }}>
        <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
          <Image src="/images/icon-viking-mark.svg" alt="" width={26} height={26} className="h-[26px] w-[26px] flex-none" />
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-white">Ai.Power</p>
            <p className="flex items-center gap-1.5 text-[10px] text-white/50">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#37ca37]" />
              Online now
            </p>
          </div>
        </div>

        <div className="flex h-[calc(100%-52px)] flex-col justify-end gap-2 overflow-hidden px-3 py-3">
          {visible.map((s, idx) => {
            // A "typing" step is transient: once a later step has arrived,
            // it has been superseded (by the real message it stood in
            // for) and should no longer render.
            if (s.step.kind === "typing") {
              return idx === visible.length - 1 ? <TypingBubble key={idx} /> : null;
            }
            if (s.step.kind === "booked") return <BookedChip key={idx} />;
            if (s.step.kind === "lead") return <LeadBubble key={idx} text={s.step.text} />;
            return <AiBubble key={idx} text={s.step.text} />;
          })}
        </div>
      </div>

      {/* Real iPhone mockup frame (free/commercial-use license, webmobilefirst.com),
          overlaid on top — its opaque pixels hide everything except the
          content showing through the transparent screen cutout above. */}
      <Image
        src="/images/iphone-mockup.png"
        alt=""
        fill
        sizes="300px"
        className="pointer-events-none select-none object-contain"
      />
    </div>
  );
}
