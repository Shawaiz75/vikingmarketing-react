import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import "./v2.css";
import { V2Nav, V2Footer } from "@/components/v2/V2Chrome";
import ConvoDemo from "@/components/v2/ConvoDemo";
import IndustryTabs from "@/components/v2/IndustryTabs";
import FaqV2 from "@/components/v2/FaqV2";
import { Rise, Stagger, StaggerItem, CountUp } from "@/components/v2/motion";
import { JsonLd } from "@/components/ui";
import {
  jsonLdGraph,
  organizationLd,
  localBusinessLd,
  faqLd,
  howToLd,
} from "@/lib/seo";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, REVIEWS_WIDGET_URL } from "@/lib/site";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Preview route for the redesign. noindex until it's approved to replace "/".
export const metadata: Metadata = {
  title: "Viking Marketing — AI Appointment Setter & CRM (New Design Preview)",
  description:
    "Viking's AI answers every lead in under 60 seconds, qualifies them, and books the job straight to your calendar. One platform for local service businesses.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/v2` },
  openGraph: {
    title: "Viking Marketing — AI Appointment Setter & CRM",
    description:
      "Viking's AI answers every lead in under 60 seconds, qualifies them, and books the job straight to your calendar.",
    url: `${SITE_URL}/v2`,
    siteName: "Viking Marketing",
    type: "website",
    images: [{ url: `${SITE_URL}/images/og-home.webp`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

/* ------------------------------ verified data ------------------------------ */

const PRESS = [
  { img: "/images/press-ap.webp", alt: "Viking Marketing featured on Associated Press" },
  { img: "/images/press-usatoday.webp", alt: "Viking Marketing featured on USA Today" },
  { img: "/images/press-streetinsider.webp", alt: "Viking Marketing featured on StreetInsider" },
  { img: "/images/press-barchart.webp", alt: "Viking Marketing featured on Barchart" },
  { img: "/images/press-ibt.webp", alt: "Viking Marketing featured on International Business Times" },
  { img: "/images/press-bizinsurance.webp", alt: "Viking Marketing featured on Business Insurance" },
  { img: "/images/press-wedbush.webp", alt: "Viking Marketing featured on Wedbush" },
  { img: "/images/press-minyanville.webp", alt: "Viking Marketing featured on Minyanville" },
  { img: "/images/press-openpr.webp", alt: "Viking Marketing featured on openPR" },
];

const LEAK_STATS = [
  { value: 27, suffix: "%", label: "of inbound calls at local service businesses go unanswered" },
  { value: 78, suffix: "%", label: "of leads go cold within 5 minutes of no response" },
  { value: 85, suffix: "%", label: "of missed callers never call back — they dial the next business" },
  { value: 75, prefix: "$", suffix: "B", label: "lost every year to slow business response" },
];

const CAPABILITIES: {
  title: string;
  body: string;
  href: string;
  state: "ai" | "live" | "missed" | "booked";
  big?: boolean;
  wide?: boolean;
}[] = [
  {
    title: "AI Appointment Setter",
    body: "Replies to every lead in under 60 seconds, answers their questions, qualifies them with your rules, and books straight to your calendar — 24/7.",
    href: "/ai-appointment-setter",
    state: "ai",
    big: true,
  },
  {
    title: "Missed Call Text Back",
    body: "Every unanswered call gets an instant text from your real business number. No porting, no second line.",
    href: "/missed-call-text-back",
    state: "missed",
  },
  {
    title: "All-in-One Inbox",
    body: "SMS, email, web chat, Instagram, Facebook, and Google Business messages — one place, nothing slips.",
    href: "/all-in-one-inbox",
    state: "live",
  },
  {
    title: "Reviews on Autopilot",
    body: "A review request goes out by text after every job, and AI writes the replies.",
    href: "/review-generation-software",
    state: "booked",
  },
  {
    title: "Database Reactivation",
    body: "AI text campaigns that wake up your old leads and past customers — the cheapest pipeline you own.",
    href: "/database-reactivation",
    state: "ai",
  },
  {
    title: "Lead & Customer Tracking",
    body: "A CRM that tracks the whole customer journey without spreadsheets — every contact, every stage.",
    href: "/lead-management-software-for-small-business",
    state: "live",
  },
  {
    title: "Payments & Invoicing",
    body: "Send the invoice by text, get paid faster, and see it all logged on the contact.",
    href: "/crm-with-invoicing",
    state: "booked",
    wide: true,
  },
];

const SETUP_STEPS = [
  {
    name: "Connect your business",
    text: "Sync your phone number, calendar, email, and existing leads. No technical setup on your end, our team handles it.",
  },
  {
    name: "We train the AI on you",
    text: "Your services, your pricing, your booking rules — so it responds like a member of your team, not a robot.",
  },
  {
    name: "Live in 48 hours",
    text: "Every missed lead becomes a booked appointment. Every conversation gets answered. You just run your business.",
  },
];

const CHANNELS = [
  "SMS / Text",
  "Website chat",
  "Instagram DM",
  "Facebook Messenger",
  "Google Business messages",
  "Email",
];

const PLANS = [
  { name: "Starter", price: 297, note: "The essentials: missed call text back, AI web chat, CRM, review requests, unified messaging." },
  { name: "Growth", price: 497, note: "Adds the 24/7 AI Sales Assistant, database reactivation, payments, and advanced pipelines.", featured: true },
  { name: "Pro", price: 997, note: "The full system with white-label options, multi-channel AI, analytics, and priority support." },
];

const FAQS = [
  {
    q: "What is Viking Marketing?",
    a: "Viking Marketing is an AI-powered CRM and marketing automation platform built for local service businesses. It combines an AI appointment setter, missed-call text back, automated review requests, unified messaging, lead tracking, and payments into one platform, replacing 10 to 15 separate tools. Viking is headquartered in Chandler, Arizona.",
  },
  {
    q: "How does the AI appointment setter work?",
    a: "It responds to every inbound lead — by SMS, web chat, Instagram DM, Facebook message, or Google Business message — within 60 seconds. It answers common questions, qualifies the lead using your business rules, and books appointments directly to your calendar. When a conversation needs a human, it hands off to your team with the full context attached.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start at $297 per month (Starter), $497 for Growth — the most popular — and $997 for Pro with white-label options. No setup fees, no contracts, cancel anytime.",
  },
  {
    q: "How fast can I be live?",
    a: "Most businesses are fully live within 48 hours. Our Chandler-based team handles the technical setup while you spend about 30 minutes reviewing your auto-text copy, business hours, and call routing rules.",
  },
  {
    q: "Does it replace my phone system?",
    a: "No. Viking layers on top of your existing business number — no porting, no second line. The missed-call text back only activates on calls you don't answer.",
  },
  {
    q: "Will it sound like a robot?",
    a: "The AI is trained on your specific business — your services, pricing, hours, and booking logic — so it sounds like one of your staff. And the moment a conversation needs a real person, it hands off to your team.",
  },
];

/* --------------------------------- page --------------------------------- */

export default function V2Page() {
  const ld = jsonLdGraph([
    organizationLd(),
    localBusinessLd(),
    howToLd({
      name: "How Viking Marketing gets set up",
      description: "How a local service business goes live on Viking's AI appointment setter and CRM within 48 hours.",
      totalTime: "P2D",
      steps: SETUP_STEPS.map((s) => ({ name: s.name, text: s.text })),
    }),
    faqLd(FAQS),
  ]);

  const stateDot: Record<string, string> = {
    ai: "dot-ai",
    live: "dot-live",
    missed: "dot-missed",
    booked: "dot-booked",
  };

  return (
    <div className={`v2 ${plexMono.variable}`}>
      {/* Opt scroll-reveals into their animated state only when JS is present. */}
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <JsonLd json={ld} />
      <V2Nav />

      <main id="main">
        {/* ============================== HERO ============================== */}
        <section className="v2-hero">
          <div className="v2-night" aria-hidden />
          <div className="v2-grid-fade" aria-hidden />
          <div className="v2-wrap relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Rise>
                <span className="v2-stamp">
                  <span className="dot dot-missed" aria-hidden />
                  Saturday · 9:47 PM · your phone rings
                </span>
              </Rise>
              <Rise delay={0.08}>
                <h1 className="v2-h1 mt-6">
                  Your next customer just called.{" "}
                  <em className="v2-accent">Viking already answered.</em>
                </h1>
              </Rise>
              <Rise delay={0.16}>
                <p className="v2-lede mt-6 max-w-xl">
                  Viking&apos;s AI replies to every lead in under 60 seconds — by text, web chat, or
                  DM — qualifies them with your rules, and books the job straight to your calendar.
                  One platform, built in Chandler for local service businesses.
                </p>
              </Rise>
              <Rise delay={0.24}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/book-a-call" className="v2-btn v2-btn-primary">
                    Book a free demo
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden>
                      <path d="M1 6h12m0 0L8.5 1.5M13 6l-4.5 4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <a href={`tel:${PHONE_TEL}`} className="v2-btn v2-btn-ghost">
                    Call {PHONE_DISPLAY}
                  </a>
                </div>
              </Rise>
              <Rise delay={0.32}>
                <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px]" style={{ color: "var(--v2-text-2)" }}>
                  <li className="flex items-center gap-2">
                    <span aria-hidden style={{ color: "var(--v2-missed)" }}>★</span> 5.0 from 21 Google reviews
                  </li>
                  <li>Live in 48 hours</li>
                  <li>No contracts</li>
                  <li>From $297/mo flat</li>
                </ul>
              </Rise>
            </div>

            <Rise delay={0.2} y={34}>
              <ConvoDemo />
            </Rise>
          </div>
        </section>

        {/* ============================ PRESS =============================== */}
        <section aria-label="As featured in" className="border-y border-white/5 py-9">
          <div className="v2-wrap">
            <p className="v2-mono mb-6 text-center text-[11.5px] tracking-[0.14em]" style={{ color: "var(--v2-text-3)" }}>
              FEATURED ACROSS 40+ NEWS NETWORKS
            </p>
            <div className="v2-marquee" aria-hidden>
              <div className="v2-marquee-track">
                {[0, 1].map((half) => (
                  <div key={half} className="flex items-center gap-16">
                    {PRESS.map((p) => (
                      <Image key={`${half}-${p.img}`} src={p.img} alt={half === 0 ? p.alt : ""} width={170} height={44} className="h-9 w-auto object-contain opacity-80" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================ PROBLEM ============================= */}
        <section className="v2-section">
          <div className="v2-wrap">
            <Rise className="mx-auto max-w-2xl text-center">
              <span className="v2-stamp">
                <span className="dot dot-missed" aria-hidden />
                Meanwhile · you&apos;re at dinner
              </span>
              <h2 className="v2-h2 mt-6">
                The leads you lose are the ones <em className="v2-accent">you never see</em>
              </h2>
              <p className="v2-lede mt-5">
                Nobody chooses to ignore a customer. You&apos;re on a job, with a client, or closed
                for the night — and the caller books with whoever answers first. That leak has a
                number:
              </p>
            </Rise>
            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {LEAK_STATS.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="v2-card v2-card-hover h-full p-7">
                    <p className="v2-h2 !text-[44px]" style={{ color: "var(--v2-missed)" }}>
                      <CountUp to={s.value} prefix={s.prefix ?? ""} suffix={s.suffix} />
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--v2-text-2)" }}>
                      {s.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Rise className="mt-8 text-center">
              <Link href="/missed-call-roi-calculator" className="inline-flex items-center gap-2 text-[15px] font-medium" style={{ color: "var(--v2-orchid)" }}>
                See what missed calls cost your business — free calculator
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                  <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </Rise>
          </div>
        </section>

        {/* ========================== CAPABILITIES ========================== */}
        <section id="capabilities" className="v2-section" style={{ background: "var(--v2-surface-1)" }}>
          <div className="v2-wrap">
            <Rise className="mx-auto max-w-2xl text-center">
              <span className="v2-stamp">
                <span className="dot dot-ai" aria-hidden />
                9:47:08 PM · Viking picks it up
              </span>
              <h2 className="v2-h2 mt-6">One platform doing the work of ten tools</h2>
              <p className="v2-lede mt-5">
                While the AI books that Saturday-night job, the same platform is requesting reviews,
                reviving old leads, and keeping every conversation in one inbox.
              </p>
            </Rise>

            <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((c) => (
                <StaggerItem key={c.title} className={c.big || c.wide ? "md:col-span-2" : ""}>
                  <Link href={c.href} className="v2-card block h-full p-7">
                    <span className={`dot ${stateDot[c.state]} inline-block h-2 w-2 rounded-full`} aria-hidden />
                    <h3 className="v2-h3 mt-4 text-white">{c.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed" style={{ color: "var(--v2-text-2)" }}>
                      {c.body}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium" style={{ color: "var(--v2-orchid)" }}>
                      Learn more
                      <svg width="12" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
                        <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ========================== HOW IT WORKS ========================== */}
        <section id="how-it-works" className="v2-section">
          <div className="v2-wrap">
            <Rise className="mx-auto max-w-2xl text-center">
              <span className="v2-stamp">
                <span className="dot dot-live" aria-hidden />
                Your first 48 hours
              </span>
              <h2 className="v2-h2 mt-6">
                Live by <em className="v2-accent">Wednesday</em>, not next quarter
              </h2>
              <p className="v2-lede mt-5">
                Our Chandler team does the setup with you. Your part takes about 30 minutes.
              </p>
            </Rise>
            <Stagger className="mt-12 grid gap-5 md:grid-cols-3" gap={0.14}>
              {SETUP_STEPS.map((s, i) => (
                <StaggerItem key={s.name}>
                  <div className="v2-card h-full p-7">
                    <p className="v2-mono text-[12px] tracking-[0.1em]" style={{ color: "var(--v2-text-3)" }}>
                      {i === 0 ? "HOUR 0" : i === 1 ? "DAY 1" : "HOUR 48"}
                    </p>
                    <h3 className="v2-h3 mt-3 text-white">{s.name}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed" style={{ color: "var(--v2-text-2)" }}>
                      {s.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* =========================== WORKFLOW ============================= */}
        <section className="v2-section" style={{ background: "var(--v2-surface-1)" }}>
          <div className="v2-wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Rise>
              <span className="v2-stamp">
                <span className="dot dot-booked" aria-hidden />
                Tuesday · 8:00 AM · job&apos;s on the calendar
              </span>
              <h2 className="v2-h2 mt-6">You see everything. You chase nothing.</h2>
              <p className="v2-lede mt-5">
                Every conversation, booking, invoice, and review request lands on the contact&apos;s
                record. The pipeline shows exactly where every lead stands — no spreadsheets, no
                &quot;did anyone call them back?&quot;
              </p>
              <ul className="mt-6 space-y-3 text-[15px]" style={{ color: "var(--v2-text-2)" }}>
                {["Lead → Qualified → Booked → Paid, tracked automatically", "Full conversation history on every contact", "Hands off to a human the moment it matters"].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-4.5 w-4.5 flex-none items-center justify-center rounded-full" style={{ background: "rgba(55,202,55,.15)" }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M4 12.5 9.5 18 20 6.5" stroke="#37ca37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Rise>
            <Rise delay={0.12}>
              <div className="v2-card overflow-hidden !rounded-[20px] p-2">
                <Image
                  src="/images/hero-dashboard.webp"
                  alt="Viking Marketing CRM dashboard showing opportunity status, opportunity value, and conversion rate for a local business"
                  width={1160}
                  height={720}
                  loading="lazy"
                  className="w-full rounded-[14px]"
                />
              </div>
            </Rise>
          </div>
        </section>

        {/* =========================== INDUSTRIES =========================== */}
        <section id="industries" className="v2-section">
          <div className="v2-wrap">
            <Rise className="mx-auto max-w-2xl text-center">
              <span className="v2-stamp">
                <span className="dot dot-missed" aria-hidden />
                Same night · six businesses
              </span>
              <h2 className="v2-h2 mt-6">Built for the businesses that live on the phone</h2>
              <p className="v2-lede mt-5">
                Every industry loses leads a different way. Viking is trained on yours.
              </p>
            </Rise>
            <Rise className="mt-10">
              <IndustryTabs />
            </Rise>
          </div>
        </section>

        {/* ============================ RESULTS ============================= */}
        <section id="results" className="v2-section" style={{ background: "var(--v2-surface-1)" }}>
          <div className="v2-dawn" aria-hidden />
          <div className="v2-wrap relative">
            <Rise className="mx-auto max-w-2xl text-center">
              <span className="v2-stamp">
                <span className="dot dot-booked" aria-hidden />
                The morning after
              </span>
              <h2 className="v2-h2 mt-6">
                What owners find when they <em className="v2-accent">wake up</em>
              </h2>
            </Rise>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <Rise className="lg:col-span-1">
                <div className="v2-card h-full p-8 text-center">
                  <p className="v2-h2 !text-[56px]" style={{ color: "var(--v2-missed)" }}>5.0</p>
                  <p className="mt-1 text-[15px] text-white" aria-hidden>★★★★★</p>
                  <p className="mt-3 text-[14px]" style={{ color: "var(--v2-text-2)" }}>
                    from 21 Google reviews
                  </p>
                  <p className="v2-mono mt-6 text-[11.5px] tracking-[0.08em]" style={{ color: "var(--v2-text-3)" }}>
                    CHANDLER, ARIZONA · SINCE DAY ONE
                  </p>
                </div>
              </Rise>
              <Rise delay={0.08} className="lg:col-span-2">
                <div className="v2-card h-full p-8">
                  <p className="v2-mono text-[11.5px] tracking-[0.1em]" style={{ color: "var(--v2-orchid)" }}>
                    CASE STUDY · CLOSEBOT AGENT NODE LAUNCH
                  </p>
                  <p className="mt-4 text-[17px] leading-relaxed text-white/90">
                    Founder Charlie DeFelice was selected as an early-access beta partner by
                    CloseBot and featured in their launch case study — running live database
                    reactivation campaigns that handled conversations with{" "}
                    <strong className="text-white">over 2,000 people a day</strong>.
                  </p>
                  <Link href="/about-us" className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-medium" style={{ color: "var(--v2-orchid)" }}>
                    The story behind Viking
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </Rise>
            </div>

            <Rise className="mt-8">
              {REVIEWS_WIDGET_URL ? (
                <iframe
                  src={REVIEWS_WIDGET_URL}
                  title="Google reviews for Viking Marketing"
                  className="min-h-[380px] w-full rounded-2xl"
                  loading="lazy"
                  scrolling="no"
                />
              ) : (
                <p className="text-center text-[13.5px]" style={{ color: "var(--v2-text-3)" }}>
                  Live Google-review feed appears here once{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-[12px]">NEXT_PUBLIC_REVIEWS_WIDGET_URL</code>{" "}
                  is set.
                </p>
              )}
            </Rise>
          </div>
        </section>

        {/* ============================ CHANNELS ============================ */}
        <section className="v2-section">
          <div className="v2-wrap text-center">
            <Rise className="mx-auto max-w-2xl">
              <span className="v2-stamp">
                <span className="dot dot-live" aria-hidden />
                Where Viking listens
              </span>
              <h2 className="v2-h2 mt-6">Every channel your customers already use</h2>
              <p className="v2-lede mt-5">
                It all runs on your existing business number and calendar — no porting, no new
                hardware, nothing for customers to learn.
              </p>
            </Rise>
            <Stagger className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3" gap={0.05}>
              {CHANNELS.map((c) => (
                <StaggerItem key={c}>
                  <span className="v2-chip">
                    <span className="dot dot-live inline-block h-1.5 w-1.5 rounded-full" aria-hidden />
                    {c}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ============================ PRICING ============================= */}
        <section id="pricing" className="v2-section" style={{ background: "var(--v2-surface-1)" }}>
          <div className="v2-wrap">
            <Rise className="mx-auto max-w-2xl text-center">
              <span className="v2-stamp">One flat price</span>
              <h2 className="v2-h2 mt-6">No per-seat fees. No contracts. No surprises.</h2>
            </Rise>
            <Stagger className="mt-12 grid gap-5 md:grid-cols-3" gap={0.1}>
              {PLANS.map((p) => (
                <StaggerItem key={p.name}>
                  <div
                    className="v2-card relative h-full p-8"
                    style={p.featured ? { borderColor: "rgba(239,164,242,.45)", boxShadow: "var(--v2-shadow-card), 0 0 80px rgba(61,5,221,.25)" } : undefined}
                  >
                    {p.featured ? (
                      <span className="v2-mono absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1 text-[10.5px] tracking-[0.08em] text-white" style={{ backgroundImage: "var(--v2-grad-ai)" }}>
                        MOST POPULAR
                      </span>
                    ) : null}
                    <h3 className="v2-h3 text-white">{p.name}</h3>
                    <p className="mt-4">
                      <span className="v2-h2 !text-[46px] text-white">
                        $<CountUp to={p.price} duration={1} />
                      </span>
                      <span className="text-[14px]" style={{ color: "var(--v2-text-3)" }}> /month</span>
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed" style={{ color: "var(--v2-text-2)" }}>
                      {p.note}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Rise className="mt-9 flex flex-col items-center gap-4">
              <Link href="/pricing" className="v2-btn v2-btn-ghost">
                Compare every plan in detail
              </Link>
              <p className="text-[13.5px]" style={{ color: "var(--v2-text-3)" }}>
                48-hour setup · cancel anytime · standard carrier SMS rates apply
              </p>
            </Rise>
          </div>
        </section>

        {/* ============================== FAQ =============================== */}
        <section id="faq" className="v2-section">
          <div className="v2-wrap max-w-3xl">
            <Rise className="text-center">
              <span className="v2-stamp">Straight answers</span>
              <h2 className="v2-h2 mt-6">Frequently asked questions</h2>
            </Rise>
            <Rise className="mt-10">
              <FaqV2 faqs={FAQS} />
            </Rise>
          </div>
        </section>

        {/* =========================== FINAL CTA ============================ */}
        <section className="v2-section overflow-hidden">
          <div className="v2-night" aria-hidden />
          <div className="v2-wrap relative text-center">
            <Rise>
              <span className="v2-stamp">
                <span className="dot dot-missed" aria-hidden />
                Tonight · 9:47 PM · someone will call
              </span>
              <h2 className="v2-h2 mx-auto mt-6 max-w-2xl">
                Stop losing the customers <em className="v2-accent">you already earned</em>
              </h2>
              <p className="v2-lede mx-auto mt-5 max-w-xl">
                Book a 15-minute walkthrough with our Chandler-based team and see exactly how Viking
                would answer your leads — using your real numbers.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link href="/book-a-call" className="v2-btn v2-btn-primary">
                  Book a free demo
                </Link>
                <a href={`tel:${PHONE_TEL}`} className="v2-btn v2-btn-ghost">
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="mt-6 text-[13.5px]" style={{ color: "var(--v2-text-3)" }}>
                No hard sell. No obligation. A real person in Chandler, Arizona.
              </p>
            </Rise>
          </div>
        </section>
      </main>

      <V2Footer />
    </div>
  );
}
