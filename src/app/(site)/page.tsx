import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  pageMetadata,
  jsonLdGraph,
  organizationLd,
  localBusinessLd,
  webPageLd,
  howToLd,
  faqLd,
} from "@/lib/seo";
import { CtaButton, SectionHeading, JsonLd, CheckLine } from "@/components/ui";
import Reveal from "@/components/Reveal";
import VideoModal from "@/components/VideoModal";
import FaqSection, { type Faq } from "@/components/FaqSection";
import {
  ReviewsSection,
  FinalCta,
  CallNote,
  LocalSection,
  StepsSection,
} from "@/components/sections";

export const metadata: Metadata = pageMetadata({
  title: "AI Appointment Setter & CRM for Local Service Businesses | Viking",
  description:
    "Viking's AI appointment setter answers every lead, qualifies them, & books the job straight to your calendar. One platform for local service businesses.",
  path: "/",
  ogTitle: "The AI Appointment Setter & CRM for Local Service Businesses",
  ogDescription:
    "Viking's AI answers every lead, qualifies them, and books the job. AI platform for dentists, gyms, med spas, and home services. Built in Chandler.",
  keywords: ["AI appointment setter", "AI sales assistant", "CRM for small business"],
});

/* ----------------------------- page data ----------------------------- */

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

const STATS = [
  { value: "27%", label: "of inbound calls go unanswered" },
  { value: "5 min", label: "is when 78% of leads go cold" },
  { value: "$75B", label: "lost yearly to slow business response" },
];

const CHIP_FEATURES = [
  { label: "AI Appointment Setter", icon: "/images/4872adba-32f7-4111-9-f0ab00b7a3df.svg" },
  { label: "Missed Call Text Back", icon: "/images/cd180d98-2c05-49b7-b-d8a0a13dc0f4.svg" },
  { label: "Unified Messaging", icon: "/images/69b18b43-f33c-4b76-a-b47160936368.svg" },
  { label: "AI Web Chat", icon: "/images/e3decb71-304b-4c0e-9-99ae2944e849.svg" },
  { label: "Reviews on Autopilot", icon: "/images/cde76a00-605f-4ab7-a-edbb9861f02b.svg" },
  { label: "Lead & Customer Tracking", icon: "/images/cc86b38f-eb62-42b7-a-019be73a9eae.svg" },
  { label: "Payments", icon: "/images/22072b51-13e5-4695-8-0eb47366cd07.svg" },
  { label: "Database Reactivation", icon: "/images/cd180d98-2c05-49b7-b-d8a0a13dc0f4.svg" },
];

const GROWTH_ROWS: {
  problem: string;
  solution: string;
  headline: string;
  href: string;
  image: string;
  imageAlt: string;
  images?: string[];
}[] = [
  {
    problem: "Missed calls = missed customers",
    solution: "Missed Call Text Back & Voice AI",
    headline: "Turn every missed call into a booked appointment.",
    href: "/missed-call-text-back",
    image: "/images/growth-textback.webp",
    imageAlt:
      "Viking Marketing automated text back schedule showing a follow-up sent and a booked opportunity call",
  },
  {
    problem: "Reviews are hard to get, harder to manage",
    solution: "Automated Reviews + AI Replies",
    headline: "Get 5x more Google reviews, replied to by AI.",
    href: "/review-generation-software",
    image: "/images/growth-reviews.webp",
    imageAlt: "Get 5x more Google reviews, replied to by AI. | Viking Marketing",
  },
  {
    problem: "Too many messages, too many platforms",
    solution: "Unified Inbox + Team Chat",
    headline: "Every conversation in one place. No leads lost.",
    href: "/all-in-one-inbox",
    image: "",
    imageAlt: "",
  },
  {
    problem: "Leads go cold without fast follow-up",
    solution: "AI Chat & Database Reactivation",
    headline: "Re-engage old leads. Fill your pipeline on autopilot.",
    href: "/database-reactivation",
    image: "",
    imageAlt:
      "Viking Marketing database reactivation showing re-engaged leads moving back into the sales pipeline",
    images: [
      "/images/6a2dc4aec53e51acc0ec-e9f147865e98.webp",
      "/images/6a2dc4aee650055aa21f-8b0e86bc1d79.webp",
      "/images/6a2dc4ace650055aa21f-bc29b71d5a6e.webp",
    ],
  },
];

const AI_POWER_BULLETS = [
  "Works across SMS, web chat, Instagram, Facebook, & Google Business",
  "Qualifies leads automatically using your business rules",
  "Hands off to a human the moment a real conversation matters",
  "Books appointments to your calendar without your team lifting a finger",
  "Sounds like your business, not a robot",
];

const PLATFORM_FEATURES = [
  {
    icon: "/images/feat-ai-setter.svg",
    iconAlt: "Viking Marketing AI appointment setter icon",
    title: "AI Appointment Setter",
    body: "Texts back every lead in seconds, qualifies them, and books the appointment 24/7.",
    href: "/ai-appointment-setter",
  },
  {
    icon: "/images/feat-mctb.svg",
    iconAlt: "Viking Marketing Missed Call Text Back icon",
    title: "Missed Call Text Back",
    body: "Auto-text every missed call within 60 seconds. Capture leads you'd otherwise lose.",
    href: "/missed-call-text-back",
  },
  {
    icon: "/images/feat-inbox.svg",
    iconAlt: "Viking Marketing Unified Inbox icon",
    title: "Unified Inbox",
    body: "SMS, email, web chat, Facebook, Instagram, Google. all in one place.",
    href: "/all-in-one-inbox",
  },
  {
    icon: "/images/feat-webchat.svg",
    iconAlt: "Viking Marketing AI Web Chat icon",
    title: "AI Web Chat",
    body: "Convert website visitors into booked appointments before they leave.",
    href: "/website-chat-widget",
  },
  {
    icon: "/images/feat-reviews.svg",
    iconAlt: "Viking Marketing Review Automation icon",
    title: "Review Automation",
    body: "Get 5x more Google reviews automatically, by text, after every appointment.",
    href: "/review-generation-software",
  },
  {
    icon: "/images/feat-dbr.svg",
    iconAlt: "Viking Marketing Database Reactivation icon",
    title: "Database Reactivation",
    body: "Bring lost customers back with AI-driven SMS campaigns.",
    href: "/database-reactivation",
  },
  {
    icon: "/images/feat-payments.svg",
    iconAlt: "Viking Marketing Payments and Invoicing icon",
    title: "Payments & Invoicing",
    body: "Send invoices by text, get paid faster, no chasing.",
    href: "/crm-with-invoicing",
  },
  {
    icon: "/images/feat-tracking.svg",
    iconAlt: "Viking Marketing Lead and Customer Tracking CRM icon",
    title: "Lead & Customer Tracking",
    body: "Tracking a full CRM that actually tracks the customer journey, without spreadsheets.",
    href: "/lead-management-software-for-small-business",
  },
];

const INDUSTRY_CARDS = [
  {
    icon: "/images/ind-dental.svg",
    iconAlt: "Viking Marketing CRM for dental practices icon",
    title: "Dental Practices",
    body: "Automated recall, instant review responses, new-patient bookings on autopilot.",
    href: "/appointment-setter-ai-dentist",
  },
  {
    icon: "/images/ind-medspa.svg",
    iconAlt: "Viking Marketing CRM for med spas and aesthetics icon",
    title: "Med Spas & Aesthetics",
    body: "Lead-to-consultation in under 5 minutes, and 3x more repeat treatments.",
    href: "/ai-appointment-setter-for-healthcare",
  },
  {
    icon: "/images/ind-gym.svg",
    iconAlt: "Viking Marketing CRM for gyms and fitness studios icon",
    title: "Gyms & Fitness Studios",
    body: "Membership signups, class bookings, and member retention, automated.",
    href: "/industries",
  },
  {
    icon: "/images/ind-home.svg",
    iconAlt: "Viking Marketing CRM for home services and contractors icon",
    title: "Home Services & Contractors",
    body: "Never miss a lead. Quote faster. Win more jobs against bigger competitors.",
    href: "/industries",
  },
  {
    icon: "/images/ind-realestate.svg",
    iconAlt: "Viking Marketing CRM for real estate agents icon",
    title: "Real Estate Agents",
    body: "Respond to every lead in under 60 seconds, when speed-to-lead decides the commission.",
    href: "/ai-appointment-setter-for-real-estate",
  },
  {
    icon: "/images/ind-salon.svg",
    iconAlt: "Viking Marketing CRM for salons and barbershops icon",
    title: "Salons & Barbershops",
    body: "Bookings, reminders, reviews, and rebooking, without lifting a finger.",
    href: "/industries",
  },
];

const STEPS = [
  {
    icon: "/images/step-connect.svg",
    title: "Connect Your Business",
    body: "Sync your phone number, calendar, email, and existing leads. No technical setup on your end, our team handles it.",
  },
  {
    icon: "/images/step-automate.svg",
    title: "Automate with AI",
    body: "We train Viking's AI on your business, your services, your pricing, your booking rules, so it responds like a member of your team.",
  },
  {
    icon: "/images/step-grow.svg",
    title: "Grow Without Limits",
    body: "Every missed lead becomes a booked appointment. Every old customer becomes a new one. Every conversation gets answered. You just run your business.",
  },
];

const FAQS: Faq[] = [
  {
    q: "What is Viking Marketing?",
    a: "Viking Marketing is an AI-powered CRM and marketing automation platform built for local service businesses. It combines an AI appointment setter, missed-call text back, automated review requests, unified messaging, lead tracking, and payments into one platform, replacing 10 to 15 separate tools. Viking is headquartered in Chandler, Arizona, and serves dentists, med spas, gyms, home service contractors, real estate agents, and other appointment-based local businesses across the United States.",
  },
  {
    q: "How does the AI appointment setter work?",
    a: "Viking's AI appointment setter responds to every inbound lead, by SMS, web chat, Instagram DM, Facebook message, Google Business message, or phone call, within 60 seconds. It greets the customer, answers common questions about your services, qualifies the lead using your business rules, and books appointments directly to your calendar. When a conversation requires a human, it hands off seamlessly to your team. The AI is trained on your specific business, your services, your pricing, your hours, your booking logic, so it sounds like one of your staff.",
  },
  {
    q: "How much does Viking Marketing cost?",
    a: "Viking Marketing pricing starts at $297 per month for the Starter plan, $497 per month for the Growth plan (most popular), and $997 per month for the Pro plan with white-label options. All plans include the CRM, automated review requests, unified messaging, and AI web chat. There are no setup fees, no contracts, and you can cancel anytime. Most businesses save more in recovered missed-call revenue than the platform costs within the first 30 days.",
  },
  {
    q: "How fast can I get Viking set up for my business?",
    a: "Most businesses are fully live within 48 hours of signing up. Our Chandler-based team handles the technical setup, connecting your phone number, calendar, and existing tools, while you spend about 30 minutes with your dedicated account manager reviewing your auto-text copy, business hours, and call routing rules. No coding, no developers, no IT department required.",
  },
  {
    q: "Does Viking Marketing replace my existing phone system?",
    a: "No. Viking layers on top of your existing business phone number, no porting, no second line, no change to how customers reach you. The missed-call-text-back system activates only on calls you don't answer, sending an automatic SMS reply within 5 to 30 seconds while routing the customer into your unified inbox for follow-up.",
  },
  {
    q: "What industries does Viking Marketing work best for?",
    a: "Viking Marketing is purpose-built for local service businesses where speed of response decides who wins the customer. Our strongest fit is with dental practices, medical spas, gyms and fitness studios, home services and trade contractors (HVAC, plumbing, electrical, roofing), real estate agents and brokers, salons and barbershops, chiropractors, and law firms. Any appointment-based or service-based business with at least 50 existing customers is a strong fit for the platform.",
  },
];

/* ------------------------------- page -------------------------------- */

export default function HomePage() {
  const ld = jsonLdGraph([
    organizationLd(),
    localBusinessLd(),
    webPageLd({
      path: "/",
      name: "AI Appointment Setter & CRM for Local Service Businesses | Viking Marketing",
      description:
        "Viking's AI appointment setter answers every lead, qualifies them, and books the job straight to your calendar. One platform for local service businesses. Free demo.",
    }),
    howToLd({
      name: "How Viking Marketing Works",
      description:
        "How a local service business gets set up and running on Viking Marketing's AI appointment setter and CRM platform.",
      totalTime: "P2D",
      steps: STEPS.map((s) => ({ name: s.title, text: s.body })),
    }),
    faqLd(FAQS.map((f) => ({ q: f.q, a: f.a }))),
  ]);

  return (
    <>
      <JsonLd json={ld} />

      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <div className="relative mx-auto w-full max-w-[1328px] px-6 text-center">
          <p className="text-[16px] text-white/80">
            ⚡ Built in Chandler · Serving local businesses across the U.S.
          </p>
          <h1 className="relative mx-auto mt-6 max-w-[1300px] font-heading text-[clamp(38px,4.62vw,62px)] font-bold leading-[1.29] tracking-[-0.035em] text-white">
            The{" "}
            <span className="relative sm:whitespace-nowrap">
              <Image
                src="/images/hero-sparkle.svg"
                alt=""
                width={26}
                height={26}
                className="absolute -left-4 -top-3 h-5 w-5 md:h-6 md:w-6"
                aria-hidden
              />
              <em className="accent-italic">AI Appointment Setter</em>
              <Image
                src="/images/hero-sparkle.svg"
                alt=""
                width={18}
                height={18}
                className="absolute -bottom-2 -right-2 h-4 w-4"
                aria-hidden
              />
            </span>{" "}
            That Answers Every Lead, Books Every Job, Wins Every Customer
          </h1>
          <p className="mx-auto mt-6 max-w-[1280px] text-[16px] leading-[2.1] text-white/80">
            Viking&apos;s AI never sleeps, never gets tired, and never lets a lead go cold. It
            replies, qualifies, and books the job, replacing 12 disconnected tools with one
            AI-powered platform. Built for dentists, gyms, med spas, home services, and local
            businesses that can&apos;t afford to lose another lead.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
            <CtaButton href="/book-a-call">Book Your Free Demo</CtaButton>
            <VideoModal
              videoId="ktpSvngBNiA"
              label="Watch how Viking Marketing works"
              trigger={
                <span className="relative inline-flex items-center">
                  {/* Brand play button: layered blur halos + gradient-stroked
                      blue disc, supplied as one asset. */}
                  <Image
                    src="/images/hero-play-button.svg"
                    alt=""
                    width={124}
                    height={124}
                    aria-hidden
                    className="h-[76px] w-[76px] transition-transform duration-200 group-hover:scale-105"
                  />
                  {/* Hand-drawn curved arrow + handwritten label (one asset). */}
                  <Image
                    src="/images/6a2dc4acc5c62232066e-27e7fb32c54e.webp"
                    alt="Click here to watch how Viking Marketing works"
                    width={169}
                    height={123}
                    className="pointer-events-none ml-2 hidden h-auto w-[169px] md:block"
                  />
                </span>
              }
            />
          </div>

          <div className="mt-8 flex justify-center">
            <CheckLine items={["Plans from $297/mo", "No contracts", "Live in 48 hours"]} />
          </div>

          {/* Full-bleed: breaks out of the padded container so the render
              reads as the hero's background visual rather than a card.
              Uses a negative margin, not translate-x - a transform would
              create a stacking context and trap the glow's -z-10 inside,
              painting the whole block over the headline and CTA. */}
          <Reveal className="relative mt-12 ml-[calc(50%-50vw)] w-screen max-w-none">
            {/* Perspective-grid floor + magenta horizon glow, replacing the
                CSS-drawn grid. Its glow core sits 68% down the asset, so
                translating up by that much lands the glow exactly on the
                dashboard's top edge at any viewport width. */}
            <span
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
              aria-hidden
            >
              <Image
                src="/images/hero-grid-bg.webp"
                alt=""
                width={2000}
                height={1413}
                priority
                sizes="100vw"
                className="w-[100vw] min-w-[620px] max-w-none shrink-0 -translate-y-[68%] md:min-w-[1200px]"
              />
            </span>
            {/* Supplied Hero Image.png, used unmodified at its original
                3942x1554 - no crop, no resize. Ships with its own device
                bezel and transparent surround, so no card border/radius. */}
            <Image
              src="/images/hero-image.webp"
              alt="Viking Marketing CRM dashboard showing opportunity status, opportunity value, and conversion rate for a local business"
              width={3942}
              height={1554}
              priority
              sizes="100vw"
              className="mx-auto w-full max-w-none"
            />
          </Reveal>
        </div>
      </section>

      {/* -------------------------- AS FEATURED IN ------------------------ */}
      <section className="section !pt-4">
        <div className="wrap">
          <h2 className="text-center font-heading text-[24px] font-bold text-white">As Featured In</h2>
          <div className="mt-10 grid items-center justify-items-center gap-x-8 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {PRESS.slice(0, 5).map((p) => (
              <Image
                key={p.img}
                src={p.img}
                alt={p.alt}
                width={210}
                height={56}
                className="max-h-12 w-auto object-contain"
              />
            ))}
            {PRESS.slice(5).map((p) => (
              <Image
                key={p.img}
                src={p.img}
                alt={p.alt}
                width={210}
                height={56}
                className="max-h-12 w-auto object-contain"
              />
            ))}
            <p className="font-heading text-left text-[18px] font-medium leading-snug text-white">
              Featured across 40+
              <br />
              news networks
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------ STATS ----------------------------- */}
      <section className="section !pt-6">
        <div className="wrap">
          <SectionHeading title="Built for businesses that can't afford to miss a lead" />
          <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.value} delay={i * 100} className="flex items-center justify-center gap-4 md:flex-col lg:flex-row">
                <p className="grad-text font-heading text-[clamp(38px,3.9vw,52px)] font-bold leading-[1.2]">{s.value}</p>
                <p className="font-heading max-w-[180px] text-left text-[18px] font-medium leading-[26px] text-white md:text-center lg:text-left">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------ PROBLEM / SOLUTION ---------------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading title="You're Losing Customers You Already Earned" />
          <div className="mx-auto mt-8 max-w-[1150px] space-y-5 text-center text-[16px] leading-[37px] text-white/80">
            <p>
              The average local service business loses 27% of its leads to slow response. A text
              sits unread for an hour, a web form gets a reply the next day, a missed call never
              gets a callback, and that customer books with whoever answered first. Add scattered
              messages across five inboxes and reviews you keep forgetting to ask for, and the cost
              of slow response adds up to thousands in lost revenue every month.
            </p>
            <p>
              Viking Marketing fixes this in one platform, with an AI appointment setter that
              replies in under 60 seconds, qualifies the lead, and books the job, an automated
              follow-up engine that runs while you sleep, and a unified inbox for every conversation
              across SMS, web chat, social, and email.
            </p>
            <p className="text-[14px] leading-[26px] text-white/55">
              &quot;Built in Chandler and trusted by small business owners across Arizona, Viking is
              the all-in-one CRM and AI appointment setter platform for service businesses.&quot;
            </p>
          </div>
          <Reveal className="mx-auto mt-10 flex max-w-[1100px] flex-wrap justify-center gap-4">
            {CHIP_FEATURES.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0b0920]/80 px-5 py-3 text-[16px] font-medium text-white"
              >
                <Image src={f.icon} alt="" width={24} height={24} className="h-6 w-6" />
                {f.label}
              </span>
            ))}
          </Reveal>

          {/* Dashed connector flow ending in the "You will access" label */}
          <div className="relative mx-auto mt-2 hidden max-w-3xl md:block" aria-hidden>
            <svg viewBox="0 0 640 90" fill="none" className="w-full">
              <path
                d="M40 0v18a24 24 0 0 0 24 24h232a24 24 0 0 1 24 24v14M600 0v18a24 24 0 0 1-24 24H344"
                stroke="rgba(139,92,246,0.45)"
                strokeWidth="1.5"
                strokeDasharray="5 7"
              />
              <path d="M317 66l8 20 3.5-8.5L337 74z" fill="#fff" stroke="#0b0920" strokeWidth="1" />
            </svg>
          </div>
          <p className="mx-auto mt-1 w-fit rounded-md border border-white/10 bg-[#0b0920] px-3 py-1.5 text-center text-[13px] text-white/80">
            You will access
          </p>
        </div>
        <div className="wrap mt-16">
          <div className="divider-glow" aria-hidden />
        </div>
      </section>

      {/* ------------------------- GROWTH ROWS ---------------------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading title="How Viking Drives Your Growth" />
          <div className="mt-12 space-y-6">
            {GROWTH_ROWS.map((row, i) => (
              <Reveal key={row.solution} delay={i * 60}>
                <div className="card-strong grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[220px_240px_1fr]">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#2a1420]">
                      <Image src="/images/icon-missed.svg" alt="Missed call icon representing a lost customer" width={26} height={26} />
                    </span>
                    <p className="text-[16px] font-semibold text-white">{row.problem}</p>
                  </div>
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#3a1a5c]">
                      <Image src="/images/icon-viking-mark.svg" alt={`Viking Marketing ${row.solution} icon`} width={26} height={26} />
                    </span>
                    <p className="text-[16px] font-semibold text-white">{row.solution}</p>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-[16px] font-semibold text-white">{row.headline}</p>
                      <Link href={row.href} className="font-heading inline-flex items-center gap-1.5 text-[14px] font-medium text-white hover:text-[#efa4f2]">
                        Learn More
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden>
                          <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </Link>
                    </div>
                    {row.images ? (
                      <div className="mt-4 flex items-stretch justify-between gap-4">
                        {row.images.map((src, idx) => (
                          <Image
                            key={src}
                            src={src}
                            alt={idx === 0 ? row.imageAlt : ""}
                            width={182}
                            height={121}
                            className="h-auto w-[31.5%] rounded-lg"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                        {row.image ? (
                          <Image src={row.image} alt={row.imageAlt} width={1144} height={296} className="w-full object-cover" />
                        ) : (
                          <SocialMarquee />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- AI POWER ----------------------------- */}
      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/images/ai-power.webp"
              alt="Viking Marketing Ai.Power AI sales assistant that engages and books leads 24/7"
              width={775}
              height={775}
              className="mx-auto w-full max-w-[520px]"
            />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-heading text-[clamp(30px,3.5vw,47px)] font-bold leading-[1.38] text-white">
              The Rep Who Works 24/7, Without the Payroll
            </h2>
            <p className="mt-5 text-[18px] leading-[37px] text-white/80">
              Our AI Sales Assistant never sleeps. It engages every lead the moment they reach out —
              SMS, chat, Instagram DM, Facebook Messenger, or your website — qualifies them, answers
              their questions, and books appointments directly to your calendar. By the time you
              check your phone, the deal is already moving.
            </p>
            <ul className="mt-6 space-y-4">
              {AI_POWER_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[17px] text-white/85">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    aria-hidden
                    className="mt-0.5 flex-none"
                  >
                    <circle cx="11" cy="11" r="10" stroke="#42a8e8" strokeWidth="1.6" />
                    <path d="M6.5 11.4 9.6 14.4 15.5 8" stroke="#42a8e8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CtaButton href="/book-a-call">Book My Free Demo</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------ PLATFORM GRID --------------------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            title="Everything Your Business Needs, in One Platform"
            lede="Stop paying for 10+ separate tools. Viking replaces them all with one connected system."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <Link href={f.href} className="card block h-full p-6 transition hover:border-white/20">
                  <span className="icon-tile !h-12 !w-12 !rounded-xl">
                    <Image src={f.icon} alt={f.iconAlt} width={26} height={26} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-9 text-[16px] font-semibold text-white">{f.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[24px] text-white/70">{f.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------ INDUSTRY GRID --------------------------- */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            maxW="max-w-[920px]"
            title="Built for Local Service Businesses Where Every Lead Counts"
            lede="Viking Marketing is purpose-built for businesses where every missed lead is a missed customer and every fast follow-up wins the job."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_CARDS.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <Link href={f.href} className="card block h-full min-h-[210px] p-7 transition hover:border-white/20">
                  <span className="icon-tile !h-12 !w-12 !rounded-xl">
                    <Image src={f.icon} alt={f.iconAlt} width={26} height={26} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-10 text-[16px] font-semibold text-white">{f.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[24px] text-white/70">{f.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-[16px] text-white/80">
            Not on this list? Viking works for any appointment-based or service-based business with
            50+ customers.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton href="/book-a-call">Book My Free Demo</CtaButton>
          </div>
        </div>
      </section>

      {/* ------------------------- LOCAL SECTION -------------------------- */}
      <LocalSection
        title="Built in Chandler. Trusted by Local Businesses Coast to Coast."
        paragraphs={[
          "Viking Marketing was founded in Chandler, Arizona, and our team still answers the phone here. We started by helping local Valley businesses stop losing customers to missed leads and slow follow-up. Today, service businesses from coast to coast use Viking, but our roots are still local and our support hours match yours, not a call center on the other side of the world.",
        ]}
        bold="If you're a service business in the Chandler, you're working with a neighbor."
      />

      {/* --------------------------- REVIEWS ------------------------------ */}
      <ReviewsSection />

      {/* ---------------------------- STEPS ------------------------------- */}
      <StepsSection title="Live in 48 Hours. Three Simple Steps." steps={STEPS} showIllustration />

      {/* ----------------------------- FAQ -------------------------------- */}
      <FaqSection faqs={FAQS} contextLabel="our AI appointment setter and CRM" />

      {/* -------------------------- FINAL CTA ----------------------------- */}
      <FinalCta
        title="Stop Losing the Customers You Already Earned."
        body="Every day you wait, more leads go unanswered, more leads go cold, and more customers choose your competitor. Viking changes that, automatically. Book a 15-minute walkthrough with our Chandler-based team and we'll show you exactly how Viking would work for your business, using your real numbers."
        ctaLabel="Book My Custom Demo"
        note={<CallNote />}
      />
    </>
  );
}

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
