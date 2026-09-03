import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  pageMetadata,
  jsonLdGraph,
  organizationLd,
  breadcrumbLd,
  faqLd,
} from "@/lib/seo";
import { CtaButton, SectionHeading, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FaqSection, { type Faq } from "@/components/FaqSection";
import { ReviewsSection, FinalCta, CallNote } from "@/components/sections";

export const metadata: Metadata = pageMetadata({
  title: "Viking Marketing Pricing | AI CRM Plans from $297/month",
  description:
    "Viking Marketing plans start at $297/month flat. No contracts, no setup fees, live in 48 hours. AI receptionist, CRM, reviews, invoicing, and more.",
  path: "/pricing",
  ogDescription:
    "Viking Marketing plans start at $297/month flat. No contracts, no setup fees, live in 48 hours. AI receptionist, CRM, reviews, invoicing, and more. Book a free demo.",
  ogImage: "/images/6a2c6f5396783b1af591-4176e77551a2.webp",
  keywords: [
    "Viking Marketing pricing",
    "AI receptionist pricing",
    "CRM for service businesses",
    "flat monthly pricing",
    "no per-seat fees",
  ],
});

const PLANS = [
  {
    icon: "/images/plan-starter.svg",
    iconAlt: "Viking Marketing Starter Plan",
    name: "Starter Plan",
    tagline: "Perfect if you are new to automation and want the essentials to stop losing leads.",
    price: "$297",
    features: [
      "Missed Call Text Back",
      "AI Web Chat Widget",
      "Basic CRM & Lead Tracking",
      "Review Requests (Automated)",
      "Unified Messaging (Text + Email)",
    ],
    cta: "Get Started with Starter",
    featured: false,
  },
  {
    icon: "/images/plan-growth.svg",
    iconAlt: "Viking Marketing Growth Plan",
    name: "Growth Plan",
    tagline: "Designed for teams who want to maximize conversions and simplify operations.",
    price: "$497",
    features: [
      "Everything in Starter",
      "AI Sales Assistant (24/7 Lead Engagement)",
      "Database Reactivation Campaigns",
      "Advanced CRM Pipeline Tracking",
      "Automated Review Replies",
      "Payments & Invoicing Tools",
    ],
    cta: "Get Started with Growth",
    featured: true,
  },
  {
    icon: "/images/plan-pro.svg",
    iconAlt: "Viking Marketing ProPlan",
    name: "Pro Plan",
    tagline: "The full Viking system, advanced automations, AI power, & full customization.",
    price: "$997",
    features: [
      "Everything in Growth Plan",
      "White-Label Options (your brand, our system)",
      "Multi-Channel AI Engagement",
      "Advanced Analytics & Reporting",
      "Priority Support & Strategy Sessions",
    ],
    cta: "Get Started with Pro",
    featured: false,
  },
];

const ALL_PLANS_INCLUDE = [
  "48-hour setup and guided onboarding",
  "No per-seat fees or hidden charges",
  "No long-term contracts — cancel anytime",
  "All messages included (standard carrier SMS rates apply)",
  "Direct access to the Viking team",
  "Regular platform updates at no extra cost",
];

const COMPARE_ROWS: [string, string, string, string][] = [
  ["Missed Call Text Back", "✅", "✅", "✅"],
  ["AI Web Chat Widget", "✅", "✅", "✅"],
  ["CRM and Lead Pipeline", "✅ Basic", "✅ Advanced", "✅ Advanced"],
  ["Automated Review Requests", "✅", "✅", "✅"],
  ["Unified Messaging Inbox", "✅", "✅", "✅"],
  ["AI Sales Assistant (24/7)", "❌", "✅", "✅"],
  ["Database Reactivation", "❌", "✅", "✅"],
  ["Payments and Invoicing", "❌", "✅", "✅"],
  ["White-Label Options", "❌", "❌", "✅"],
  ["Multi-Channel AI", "❌", "❌", "✅"],
  ["Advanced Analytics", "❌", "❌", "✅"],
  ["Priority Support and Strategy", "❌", "❌", "✅"],
  ["Setup time", "48 hours", "48 hours", "48 hours"],
  ["Contracts", "None", "None", "None"],
  ["Per-seat fees", "None", "None", "None"],
];

const CHOOSE = [
  {
    icon: "/images/plan-starter.svg",
    iconAlt: "Choose Viking Marketing Starter Plan",
    title: "Choose Starter if",
    body: "You are a solo operator or small team just getting started with automation. You want to stop missing calls and start collecting reviews without a complex setup.",
  },
  {
    icon: "/images/plan-growth.svg",
    iconAlt: "Choose Viking Marketing Growth Plan",
    title: "Choose Growth if:",
    body: "You have leads coming in and want AI working around the clock to follow up, book, and reactivate your old contacts. Most local service businesses land here.",
  },
  {
    icon: "/images/plan-pro.svg",
    iconAlt: "Choose Viking Marketing Pro Plan",
    title: "Choose Pro if",
    body: "You run a high-volume operation, manage multiple locations, or run an agency and want to offer Viking under your own brand to clients.",
  },
];

const FAQS: Faq[] = [
  {
    q: "Is there a free trial?",
    a: "We do not offer a free trial, but we do offer a free demo where we walk you through the platform and show you exactly what it does for your specific business type. Most clients know within 10 minutes whether Viking is right for them. Book yours at the button above.",
  },
  {
    q: "Are there any setup fees?",
    a: "No setup fees on any plan. You pay the monthly flat rate and that covers everything including onboarding, guided setup, and your first campaign build.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. There are no long-term contracts on any plan. You can cancel at any time with no penalties or early termination fees.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes. You can move between plans at any time. If you start on Starter and want to add the AI Sales Assistant or Database Reactivation, upgrading to Growth takes effect immediately.",
  },
  {
    q: "Are there any limits on contacts or messages?",
    a: "There are no per-contact or per-seat fees. Standard carrier SMS rates apply per message segment, which are separate from the monthly platform fee. We walk you through exactly what that looks like for your volume during the demo.",
  },
  {
    q: "How quickly can I be live?",
    a: "Most clients are fully live within 48 hours of signing up. Onboarding is guided and your first workflows are set up with you, not handed off to you to figure out alone.",
  },
  {
    q: "What is included in the white-label option on the Pro plan?",
    a: "The Pro white-label option lets you run the Viking platform under your own agency or business brand for your clients. You get full platform access, your logo and branding, and the ability to deliver the system as your own product. Book a demo for the Pro plan to walk through exactly how this works.",
  },
  {
    q: "Does each plan include the AI Sales Assistant?",
    a: "The Starter plan includes the AI Web Chat Widget and Missed Call Text Back, which handle automated responses to website visitors and missed calls. The full AI Sales Assistant, which handles 24/7 multi-turn conversations, qualifies leads, and books appointments, is available from the Growth plan upward.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit and debit cards. Payment is processed securely at signup.",
  },
  {
    q: "What happens if I need help after setup?",
    a: "All plans include direct access to the Viking team. Pro plan clients get priority support and regular strategy sessions. You are never left to figure it out alone.",
  },
];

export default function PricingPage() {
  const ld = jsonLdGraph([
    organizationLd(),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Pricing", path: "/pricing" },
    ]),
    faqLd(FAQS),
  ]);

  return (
    <>
      <JsonLd json={ld} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative text-center">
          <h1 className="mx-auto max-w-4xl font-heading text-[clamp(32px,4.6vw,54px)] font-bold leading-[1.16] text-white">
            One Flat Price. Every Tool Your Service Business Needs to Stop Losing Leads.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-white/75">
            No per-seat fees. No add-ons. No contracts. Every Viking plan includes the AI, CRM, and
            automation tools to capture leads, follow up automatically, collect reviews, and get
            paid, starting from $297 a month.
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton href="/book-a-call">Book a Free Demo</CtaButton>
          </div>
          <p className="mt-6 text-[14.5px] text-white/70">
            Rated 5.0 from 21 Google reviews · 48-hour setup · Cancel anytime
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="section !pt-4">
        <div className="wrap">
          <SectionHeading title="Choose the plan that fits where your business is today" />
          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 100} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                    plan.featured
                      ? "border-[#8b5cf6]/60 bg-gradient-to-b from-[#8547f6]/20 to-[#030213]/60 shadow-[0_20px_90px_rgba(139,92,246,0.25)]"
                      : "border-white/10 bg-gradient-to-b from-[#8547f6]/10 to-transparent"
                  }`}
                >
                  {plan.featured ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#8b5cf6] px-4 py-1 text-[12px] font-semibold text-white">
                      Most Popular
                    </span>
                  ) : null}
                  <Image src={plan.icon} alt={plan.iconAlt} width={52} height={52} className="h-12 w-12" />
                  <h3 className="mt-5 font-heading text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 min-h-12 text-[14px] leading-relaxed text-white/65">{plan.tagline}</p>
                  <p className="mt-5">
                    <span className="font-heading text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60"> /month</span>
                  </p>
                  <h4 className="mt-6 text-[14px] font-semibold uppercase tracking-wide text-white/60">
                    What&apos;s included:
                  </h4>
                  <ul className="mt-4 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14.5px] text-white/80">
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#188bf6]/20 text-[11px] text-[#4db2ff]">
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-a-call"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-[15px] font-medium transition ${
                      plan.featured
                        ? "btn-cta !justify-center !p-0 !py-3.5"
                        : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All plans include */}
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/images/pricing-hero.webp"
              alt="Viking Marketing pricing plans for local service businesses starting at 297 per month"
              width={600}
              height={460}
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-[clamp(26px,3.6vw,38px)] font-bold text-white">
              All plans include
            </h2>
            <p className="mt-4 text-[15.5px] text-white/70">
              No matter which plan you choose, every Viking account comes with:
            </p>
            <ul className="mt-5 space-y-3">
              {ALL_PLANS_INCLUDE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] text-white/80">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#188bf6]/20 text-[11px] text-[#4db2ff]">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Compare table */}
      <section className="section">
        <div className="wrap max-w-4xl">
          <SectionHeading title="Compare all plans" />
          <Reveal className="mt-10">
            <div className="card-strong overflow-x-auto p-2 sm:p-4">
              <table className="compare-table min-w-[640px]">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">
                      Starter <span className="block text-[13px] font-normal text-white/60">$297/mo</span>
                    </th>
                    <th scope="col" className="text-[#efa4f2]">
                      Growth <span className="block text-[13px] font-normal text-white/60">$497/mo</span>
                    </th>
                    <th scope="col">
                      Pro <span className="block text-[13px] font-normal text-white/60">$997/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row" className="!font-medium !text-white/85">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Which plan */}
      <section className="section">
        <div className="wrap">
          <SectionHeading title="Not sure which plan is right for you?" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CHOOSE.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className="card h-full p-7">
                <Image src={c.icon} alt={c.iconAlt} width={46} height={46} className="h-11 w-11" />
                <h3 className="mt-4 font-heading text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[15px] text-white/70">
            Not sure? Book a free demo and we will tell you exactly which plan fits your business and
            why.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton href="/book-a-call">Book a Free Demo</CtaButton>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <FaqSection title="Pricing questions, answered" faqs={FAQS} contextLabel="Pricing" />

      <FinalCta
        title="Ready to stop losing leads?"
        body="Pick a plan, book a demo, or call us. We will show you exactly what Viking does for your business in 15 minutes."
        ctaLabel="Book a Free Demo"
        note={<CallNote text="and talk to a real person in Chandler, Arizona." />}
        smallPrint="No contracts. No setup fees. Live in 48 hours."
      />
    </>
  );
}
