import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, jsonLdGraph, webPageLd, itemListLd } from "@/lib/seo";
import { SectionHeading, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import HeroGlow from "@/components/HeroGlow";
import { FinalCta, CallNote } from "@/components/sections";
import { COMPARISON_PAGES } from "@/lib/comparisons";

export const metadata: Metadata = pageMetadata({
  title: "Compare Viking Marketing | AI Appointment Setter Comparisons",
  description:
    "See how Viking Marketing compares to Settr, Bookr, Vendi, and Quo on pricing, channels, and platform scope, sourced and dated.",
  path: "/compare",
  keywords: ["Viking Marketing comparisons", "AI appointment setter alternatives"],
});

const DESCRIPTIONS: Record<string, string> = {
  "viking-marketing-vs-settr": "Transparent pricing vs. demo-gated — see the full feature and pricing breakdown.",
  "viking-marketing-vs-bookr": "$297/mo vs. Bookr's $2,000/mo flat plan — compare what's actually included.",
  "viking-marketing-vs-vendi": "Text-first vs. voice-first: two different categories of AI lead response.",
  "viking-marketing-vs-quo": "A focused AI platform vs. an AI add-on to a full business phone system.",
};

export default function ComparePage() {
  const ld = jsonLdGraph([
    webPageLd({
      path: "/compare",
      name: "Compare Viking Marketing | AI Appointment Setter Comparisons",
      description:
        "See how Viking Marketing compares to Settr, Bookr, Vendi, and Quo on pricing, channels, and platform scope, sourced and dated.",
    }),
    itemListLd({
      name: "Viking Marketing Comparisons",
      items: COMPARISON_PAGES.map((c) => ({ name: `Viking Marketing vs ${c.competitorName}`, path: `/${c.slug}` })),
    }),
  ]);

  return (
    <>
      <JsonLd json={ld} />

      <section className="relative overflow-hidden pt-36 pb-10 md:pt-44">
        <HeroGlow />
        <div className="wrap relative text-center">
          <h1 className="mx-auto max-w-3xl font-heading text-[clamp(32px,4.6vw,54px)] font-bold leading-[1.16] text-white">
            Compare Viking Marketing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75">
            Sourced, dated comparisons against other AI appointment-setter and lead-response tools —
            pricing, channels, and who each one is actually built for.
          </p>
        </div>
      </section>

      <section className="section !pt-6">
        <div className="wrap">
          <SectionHeading title="Side-by-Side Comparisons" />
          <Reveal className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
            {COMPARISON_PAGES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="card-feature block h-full transition hover:border-white/20"
              >
                <h3 className="text-[19px] font-bold text-white">Viking Marketing vs {c.competitorName}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#CBD5E0]">{DESCRIPTIONS[c.slug]}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/50">
                  Compare
                  <svg width="12" height="9" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2 10 10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[14.5px] leading-relaxed text-white/65">
            Every comparison discloses when competitor facts were checked and links to the source.
            Pricing and features change — verify current numbers on each vendor&apos;s site before
            deciding.
          </p>
        </div>
      </section>

      <FinalCta
        title="Not Sure Which Tool Fits?"
        body="Book a free 15-minute walkthrough and we'll show you exactly how Viking works for your business, using your own numbers."
        ctaLabel="Book My Free Demo"
        note={<CallNote text="and talk to a real person in Chandler." />}
      />
    </>
  );
}
