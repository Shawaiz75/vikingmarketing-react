import type { Metadata } from "next";
import Image from "next/image";
import {
  pageMetadata,
  jsonLdGraph,
  organizationLd,
  personLd,
} from "@/lib/seo";
import { CtaButton, SectionHeading, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import VideoModal from "@/components/VideoModal";
import { ReviewsSection, FinalCta, CallNote, CityChips } from "@/components/sections";
import { SITE_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Viking Marketing | AI CRM for Local Service Businesses",
  description:
    "Viking Marketing was built in Chandler, Arizona by entrepreneur Charles DeFelice to help local service businesses stop losing leads. Learn our story.",
  path: "/about-us",
  ogImage: "/images/6a2c4535c53e51acc0c3-53d4ceeffe18.webp",
  keywords: ["Charles DeFelice — Business Owner @ Viking Marketing", "Viking Marketing"],
});

const BELIEFS = [
  {
    alt: "Local service businesses deserve enterprise AI tools at local prices",
    text: "Local businesses deserve enterprise tools at local prices. The AI that replies to leads, follows up, and collects reviews for large companies should be just as available to the HVAC contractor who does excellent work but loses customers because no one replied fast enough.",
  },
  {
    alt: "Speed wins the customer with instant AI response to every new lead",
    text: "Speed wins the customer. Businesses that respond to a new lead within minutes are dramatically more likely to win them than those who respond an hour later. Viking makes the first response instant, every time, even at 11 PM on a Sunday.",
  },
  {
    alt: "Your best lead is one you already own in your existing contact database",
    text: "Your best lead is one you already own. Every service business is sitting on a database of past leads and old customers who never got consistent follow-up. Reactivating that list costs a fraction of buying new leads and converts far better because those contacts already know your business.",
  },
  {
    alt: "One connected platform beats ten disconnected tools for local service businesses",
    text: "One system beats ten tools. Every app you add is another monthly bill, another login, and another place for things to fall through the cracks. Viking replaces the stack with one connected platform.",
  },
];

export default function AboutPage() {
  const ld = jsonLdGraph([
    organizationLd(),
    personLd(),
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about-us#webpage`,
      url: `${SITE_URL}/about-us`,
      name: "About Viking Marketing | AI CRM for Local Service Businesses",
      description:
        "Viking Marketing was built in Chandler, Arizona by entrepreneur Charles DeFelice to help local service businesses stop losing leads. Learn our story.",
      isPartOf: { "@id": `${SITE_URL}/#organization` },
    },
  ]);

  return (
    <>
      <JsonLd json={ld} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative text-center">
          <h1 className="mx-auto max-w-4xl font-heading text-[clamp(32px,4.6vw,54px)] font-bold leading-[1.16] text-white">
            Too Many Good Businesses Lose Leads They Should Have Won. We Built Viking to Fix That.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-white/75">
            Viking Marketing is an AI appointment setter and CRM platform built by an Arizona
            entrepreneur who spent over a decade running local businesses, watching good companies
            lose customers at the edges of their operations. We are not a venture-backed software
            company. We are a lean team based in Chandler, Arizona, building tools that solve real
            problems for real service businesses.
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton href="/book-a-call">Book a Free Demo</CtaButton>
          </div>
          <p className="mt-6 text-[14.5px] text-white/70">
            Built in Chandler, Arizona. Rated 5.0 from 21 Google reviews.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/images/about-story.webp"
              alt="The story behind Viking Marketing showing the problem of missed calls and lost leads solved by AI automation"
              width={600}
              height={480}
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-[clamp(26px,3.6vw,38px)] font-bold text-white">
              The story behind Viking
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                Charles DeFelice, known to most as Charlie, spent more than ten years building
                businesses in Arizona. He started in the solar industry, growing sales organizations
                in the Chandler area from the ground up through direct effort and high-volume
                outreach. Over that decade he worked with and alongside dozens of local service
                companies across the Valley.
              </p>
              <p>
                The same problems kept showing up. A lead texts or messages in while the owner is on
                a job and the reply doesn&apos;t go out for hours. The customer books with whoever
                answered first. A follow-up runs for a week then stops when life gets busy. An
                estimate goes out and nobody ever checks back on it. A great customer finishes a job
                happy but never gets asked for a review, so they never leave one.
              </p>
              <p>
                None of these businesses were failing because of bad work. They were losing customers
                at the edges, in the gap between a lead arriving and someone responding, between a
                job finishing and a review being requested, between a good customer going quiet and
                someone remembering to reach back out.
              </p>
              <p>
                Most of the tools that existed to close these gaps were built for large corporate
                sales teams. Expensive, complicated, and impossible to operate without a dedicated
                marketing department. Local service businesses needed something different. Something
                that ran on its own, communicated like a real person, and did not require anyone to
                babysit it.
              </p>
              <p className="font-semibold text-white">That is the gap Viking was built to close.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Viking does */}
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-[clamp(26px,3.6vw,38px)] font-bold text-white">
              What Viking does
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                Viking is an AI appointment setter and CRM platform built specifically for local
                service businesses. It replies to every lead by text, web chat, and social the moment
                they reach out, follows up on leads automatically, tracks every contact through a
                visual pipeline, sends branded invoices by text and email, collects reviews after
                every job, and reactivates dormant contacts from your existing database, all from one
                platform, at one flat price.
              </p>
              <p>
                The businesses we serve are HVAC companies in Scottsdale, dental practices in Mesa,
                med spas in Chandler, gyms in Chandler, home service contractors across the Valley,
                real estate agents, and salons and barbershops. We know their problems because we
                built this in the same market they work in.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Image
              src="/images/about-platform.webp"
              alt="Viking Marketing AI CRM platform overview showing AI receptionist missed call text back reviews pipeline invoicing and database reactivation"
              width={600}
              height={460}
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </section>

      {/* Who runs Viking */}
      <section className="section">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <Image
              src="/images/about-charlie.webp"
              alt="Charles DeFelice founder of Viking Marketing Chandler Arizona"
              width={480}
              height={560}
              className="w-full rounded-2xl border border-white/10 object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-[clamp(26px,3.6vw,38px)] font-bold text-white">
              Who runs Viking
            </h2>
            <h3 className="mt-6 font-heading text-xl font-bold text-white">
              Charles (Charlie) DeFelice — Founder
            </h3>
            <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                Charlie is an Arizona entrepreneur with over ten years of experience building and
                running businesses across the Chandler area. He started in solar sales and spent
                years growing high-volume outreach organizations before turning his focus to AI
                automation and digital marketing.
              </p>
              <p>
                He founded Viking Marketing to bring the same AI-powered systems that enterprise
                companies use down to the local service business level, without the enterprise price
                tag or complexity. His areas of expertise are AI automation, CRM strategy, and online
                reputation management.
              </p>
              <p>
                Charlie is not just a platform operator. He is recognized within the AI automation
                community as a hands-on expert. CloseBot, one of the leading AI conversation tools
                for service businesses, selected Charlie as an early-access beta partner for their
                Agent Node launch and featured him in a case study on their YouTube channel. When
                CloseBot&apos;s co-founder and CEO Bryce DeCora was asked who businesses should call
                for done-for-you help, the answer was Charlie.
              </p>
              <p>Charlie is based in Chandler, Arizona, where Viking Marketing is headquartered.</p>
            </div>
            <h3 className="mt-8 font-heading text-xl font-bold text-white">The team</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">
              Viking is run by a focused team of operators, marketers, and builders who believe local
              businesses are the backbone of their communities and deserve tools that actually work.
              We are Arizona-based and serve businesses across the United States and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CloseBot video */}
      <section className="section">
        <div className="wrap text-center">
          <SectionHeading title="Recognized by leaders in the AI automation space" />
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <VideoModal
              videoId="hKPYiZcqu0A"
              label="Watch the CloseBot case study featuring Charlie DeFelice"
              trigger={
                <span className="relative block overflow-hidden rounded-2xl border border-white/10">
                  {/* YouTube poster frame for the case-study video */}
                  <img
                    src="https://img.youtube.com/vi/hKPYiZcqu0A/maxresdefault.jpg"
                    alt="CloseBot case study video featuring Viking Marketing founder Charlie DeFelice"
                    width={960}
                    height={540}
                    className="w-full"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/10">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#188bf6] shadow-lg">
                      <svg width="18" height="20" viewBox="0 0 14 16" fill="#fff" aria-hidden>
                        <path d="M0 0l14 8-14 8z" />
                      </svg>
                    </span>
                  </span>
                </span>
              }
            />
            <p className="mt-6 text-[15px] leading-relaxed text-white/70">
              Charlie was featured by CloseBot as an early-access case study for their Agent Node
              launch, one of the first operators in the field to test it with real campaigns. In the
              interview, Charlie describes building live database reactivation campaigns that were
              handling conversations with over 2,000 people a day.
            </p>
          </Reveal>
        </div>
      </section>

      <ReviewsSection />

      {/* Beliefs */}
      <section className="section">
        <div className="wrap">
          <SectionHeading title="What we believe" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {BELIEFS.map((b, i) => (
              <Reveal key={b.alt} delay={(i % 2) * 90}>
                <div className="card h-full p-6">
                  <Image src="/images/about-belief.svg" alt={b.alt} width={40} height={40} className="h-10 w-10" />
                  <p className="mt-4 text-[14.5px] leading-relaxed text-white/75">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Arizona */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            title="Built in Arizona, working for businesses across the US"
            lede="Viking Marketing is headquartered in Chandler, Arizona, in the heart of the Chandler metropolitan area. We serve local service businesses from Arizona to across the United States."
          />
          <p className="mx-auto mt-4 max-w-3xl text-center text-[15.5px] leading-relaxed text-white/70">
            Our clients span industries from dental and med spa to home services, gyms, real estate,
            and salons. What they have in common is that they do good work, care about their
            customers, and want a system that helps them grow without adding more to their plate.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] text-white/80">
            {ADDRESS.streetAddress}, {ADDRESS.addressLocality}, {ADDRESS.addressRegion}{" "}
            {ADDRESS.postalCode}{" "}
            <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white hover:underline">
              {PHONE_DISPLAY}
            </a>{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#efa4f2] hover:text-white">
              {EMAIL}
            </a>
          </p>
          <div className="mt-10">
            <CityChips />
          </div>
        </div>
      </section>

      <FinalCta
        title="Ready To See Viking in Action?"
        body="Book a free demo and we will show you exactly how Viking works for your business. No obligation, no hard sell, just a clear look at what it does."
        ctaLabel="Book My Free Demo"
        note={<CallNote text="and talk to a real person in Arizona." />}
      />
    </>
  );
}
