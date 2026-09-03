import type { Metadata } from "next";
import Image from "next/image";
import {
  pageMetadata,
  jsonLdGraph,
  localBusinessLd,
  breadcrumbLd,
  faqLd,
} from "@/lib/seo";
import { SectionHeading, JsonLd, CtaButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FaqSection, { type Faq } from "@/components/FaqSection";
import { ReviewsSection } from "@/components/sections";
import { BOOKING_WIDGET_URL, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Book a Free Strategy Call | Viking Marketing",
  description:
    "Book a free 15-minute strategy call with the Viking Marketing team. We show you exactly how the platform works for your business.",
  path: "/book-a-call",
  ogDescription:
    "Book a free 15-minute strategy call with the Viking Marketing team. We show you exactly how the platform works for your business. No hard sell, no obligation.",
  ogImage: "/images/6a2c7b3988a00c971156-1252815be8bf.webp",
  keywords: ["Viking Marketing 15-Minute Strategy Call"],
});

const CALL_STEPS = [
  {
    icon: "/images/call-step-1.svg",
    alt: "Step one we learn about your business challenges and current lead process",
    text: "We learn about your business first. Where are leads coming from? What is falling through the cracks? What does your current follow-up process look like? We start with your situation, not a generic slide deck.",
  },
  {
    icon: "/images/call-step-2.svg",
    alt: "Step two we show you exactly how Viking works for your specific business type",
    text: "We show you exactly what Viking does for your type of business. We do not give everyone the same walkthrough. If you are an HVAC company, we show you the HVAC setup. If you run a dental practice, we show you how Viking handles new patient inquiries. You see what your business actually looks like inside the platform.",
  },
  {
    icon: "/images/call-step-3.svg",
    alt: "Step three we tell you which Viking plan fits your business and why",
    text: "We tell you which plan fits and why. By the end of the 15 minutes, you will know exactly which Viking plan is right for your business, what it would cost, and what it would do. No hidden pricing, no surprises.",
  },
  {
    icon: "/images/call-step-4.svg",
    alt: "Step four you decide with no pressure and no obligation",
    text: "You decide. No pressure, ever. If it is a fit, great. If it is not, we will tell you honestly. We would rather you leave with the right information than sign up for something that does not work for you.",
  },
];

const FAQS: Faq[] = [
  {
    q: "How long is the call?",
    a: "15 minutes. We keep it tight and to the point. You will know by the end whether Viking is right for your business.",
  },
  {
    q: "Who will I speak with?",
    a: "You will speak directly with Charlie or a member of the Viking team, not an outsourced call center. We are based in Chandler, Arizona and we know local service businesses.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Nothing. Just show up. It helps if you can think about your biggest challenge right now (missed calls, follow-up, reviews, leads going cold) but even that is not required. We will ask the right questions.",
  },
  {
    q: "Is there any obligation after the call?",
    a: "None. The strategy call is completely free and there is no pressure to sign up. If Viking is not the right fit, we will tell you.",
  },
  {
    q: "What if I just want to ask a question without booking a call?",
    a: "Call us at (480) 360-4644 or email team@vikingmarketing.ai and we will get back to you the same day.",
  },
  {
    q: "How quickly can I be live after signing up?",
    a: "Most clients are fully live within 48 hours of signing up. Onboarding is guided, your workflows are set up with you, and you are not left to figure it out alone.",
  },
];

export default function BookACallPage() {
  const ld = jsonLdGraph([
    localBusinessLd(),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Book a Call", path: "/book-a-call" },
    ]),
    faqLd(FAQS),
  ]);

  return (
    <>
      <JsonLd json={ld} />

      {/* Hero + booking widget */}
      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative text-center">
          <h1 className="mx-auto max-w-3xl font-heading text-[clamp(32px,4.6vw,54px)] font-bold leading-[1.16] text-white">
            Book Your Free 15-Minute Strategy Call
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75">
            See exactly how Viking works for your business. No hard sell. No obligation. Just a
            clear, honest look at what the platform does and whether it is the right fit.
          </p>
          <p className="mt-5 text-[14.5px] text-white/70">
            Rated 5.0 from 21 Google reviews · Built in Chandler, Arizona
          </p>

          <div id="booking" className="mx-auto mt-12 max-w-3xl">
            {BOOKING_WIDGET_URL ? (
              <iframe
                src={BOOKING_WIDGET_URL}
                title="Book your free 15-minute strategy call"
                className="min-h-[720px] w-full rounded-2xl border border-white/10 bg-white"
                loading="lazy"
              />
            ) : (
              <div className="card-strong px-8 py-14">
                <p className="font-heading text-xl font-bold text-white">Pick a time with our team</p>
                <p className="mx-auto mt-3 max-w-lg text-white/65">
                  The scheduling calendar appears here. Set{" "}
                  <code className="rounded bg-white/10 px-1.5 py-0.5 text-[13px]">
                    NEXT_PUBLIC_BOOKING_WIDGET_URL
                  </code>{" "}
                  to your booking widget URL to enable it — or reach us directly:
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="btn-outline"
                  >
                    Call {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="btn-outline">
                    Email {EMAIL}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What happens on the call */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            title="What happens on the call"
            lede="This is not a sales pitch. It is a 15-minute strategy call where we show you exactly how Viking handles the specific problems your business is dealing with."
          />
          <p className="mt-4 text-center text-[15px] font-medium text-white/80">Here is what we cover:</p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {CALL_STEPS.map((s, i) => (
              <Reveal key={s.alt} delay={(i % 2) * 90}>
                <div className="card flex h-full items-start gap-4 p-6">
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-[#188bf6]/15">
                    <Image src={s.icon} alt={s.alt} width={26} height={26} className="h-6 w-6" />
                  </span>
                  <p className="text-[14.5px] leading-relaxed text-white/80">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section !pt-0">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <a href={`tel:${PHONE_TEL}`} className="card block px-8 py-8 text-center transition hover:border-white/20">
            <p className="text-sm text-white/60">Phone Number</p>
            <p className="mt-1 font-heading text-3xl font-bold text-white">{PHONE_DISPLAY}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="card block px-8 py-8 text-center transition hover:border-white/20">
            <p className="text-sm text-white/60">Email Address</p>
            <p className="mt-1 font-heading text-3xl font-bold text-white">{EMAIL}</p>
          </a>
        </div>
      </section>

      <ReviewsSection />

      <FaqSection title="Questions about booking" faqs={FAQS} contextLabel="booking" />

      {/* Final CTA */}
      <section className="section overflow-hidden">
        <div className="grid-backdrop grid-bottom" aria-hidden>
          <div className="grid-glow bottom-0" />
        </div>
        <div className="wrap relative text-center">
          <h2 className="mx-auto max-w-3xl font-heading text-[clamp(30px,4.6vw,46px)] font-bold leading-[1.12] text-white">
            Stop Missing Leads. Book Your Free Strategy Call Now.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] text-white/70">
            15 minutes is all it takes to see whether Viking is the right fit for your business.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="#booking">Pick a Time</CtaButton>
          </div>
          <p className="mt-6 text-[13.5px] text-white/50">No contracts. No hard sell. No obligation.</p>
        </div>
      </section>
    </>
  );
}
