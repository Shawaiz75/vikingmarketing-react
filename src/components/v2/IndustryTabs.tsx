"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/** "Same night, six businesses" — one after-hours scenario per industry.
 *  Scenario copy is original, grounded in each industry page's positioning. */
const TABS = [
  {
    id: "home-services",
    label: "Home Services",
    time: "SAT 9:47 PM",
    scenario:
      "An AC dies on a 96° night. The homeowner calls three companies; two go to voicemail. Viking texts back in seconds, asks the right intake questions, and books the Tuesday diagnostic before anyone else picks up.",
    proof: "Home service businesses miss 27–62% of inbound calls while crews are on the job.",
    href: "/missed-call-text-back",
    linkLabel: "Missed call text back",
  },
  {
    id: "dental",
    label: "Dental",
    time: "THU 9:12 PM",
    scenario:
      "A patient with a chipped tooth messages your website at 9 PM. Viking replies immediately, routes it as an emergency visit, and offers real openings from your schedule — before they message the next practice on the list.",
    proof: "A third to nearly half of patient booking attempts happen after the front desk goes home.",
    href: "/appointment-setter-ai-dentist",
    linkLabel: "AI for dental practices",
  },
  {
    id: "medspa",
    label: "Med Spa",
    time: "SUN 8:30 PM",
    scenario:
      "A client browsing Instagram DMs you about lip filler pricing on a Sunday. Viking answers the common questions, qualifies the inquiry, and turns it into a booked consultation in minutes.",
    proof: "Many med spa inquiries arrive by DM, after hours, when no one is at the desk.",
    href: "/ai-appointment-setter-for-healthcare",
    linkLabel: "AI for healthcare & aesthetics",
  },
  {
    id: "gym",
    label: "Gyms & Fitness",
    time: "MON 10:05 PM",
    scenario:
      "Someone finishes a late shift and finally decides to join a gym. Viking answers their membership questions on web chat and books a tour for tomorrow — signup momentum captured, not lost overnight.",
    proof: "Membership signups, class bookings, and retention — automated around the clock.",
    href: "/industries",
    linkLabel: "All industries",
  },
  {
    id: "realestate",
    label: "Real Estate",
    time: "SAT 7:58 PM",
    scenario:
      "A buyer inquires on a listing during Saturday showings. Viking responds in under 60 seconds and books the walkthrough — in a market where the first agent to reply usually wins the client.",
    proof: "Speed-to-lead decides the commission; the first response usually wins.",
    href: "/ai-appointment-setter-for-real-estate",
    linkLabel: "AI for real estate",
  },
  {
    id: "salon",
    label: "Salons",
    time: "TUE 9:20 PM",
    scenario:
      "A regular wants to rebook after hours. Viking handles the booking, sends the reminder, and asks for the review after the visit — without interrupting anyone mid-chair.",
    proof: "A missed booking call at a salon is really a lost recurring customer.",
    href: "/industries",
    linkLabel: "All industries",
  },
];

export default function IndustryTabs() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const tab = TABS[active];

  return (
    <div>
      <div role="tablist" aria-label="Industries" className="flex flex-wrap justify-center gap-2.5">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${t.id}`}
            onClick={() => setActive(i)}
            className={`v2-chip !cursor-pointer transition-colors ${
              active === i
                ? "!border-[rgba(239,164,242,.5)] !bg-[rgba(61,5,221,.18)] !text-white"
                : "hover:!border-white/25 hover:!text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="relative mx-auto mt-8 max-w-3xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="v2-card p-7 sm:p-9"
          >
            <p className="v2-mono text-[11.5px] tracking-[0.08em]" style={{ color: "var(--v2-missed)" }}>
              {tab.time}
            </p>
            <p className="mt-3 text-[16.5px] leading-relaxed text-white/90">{tab.scenario}</p>
            <p className="mt-4 text-[13.5px] leading-relaxed" style={{ color: "var(--v2-text-3)" }}>
              {tab.proof}
            </p>
            <Link
              href={tab.href}
              className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-medium"
              style={{ color: "var(--v2-orchid)" }}
            >
              {tab.linkLabel}
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
