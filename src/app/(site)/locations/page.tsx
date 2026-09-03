import type { Metadata } from "next";
import { pageMetadata, jsonLdGraph, webPageLd } from "@/lib/seo";
import { SectionHeading, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { FinalCta, CallNote, CityChips } from "@/components/sections";

export const metadata: Metadata = pageMetadata({
  title: "Locations | Viking Marketing",
  description:
    "Viking serves local service businesses across Phoenix, Scottsdale, Tempe, Mesa, Chandler, and beyond. Find your city and see how it works.",
  path: "/locations",
  ogImage: "/images/6a35d555f2131051b8fa-b1576ca9cb7b.webp",
  keywords: ["Viking Marketing locations", "AI appointment setter Arizona", "service areas"],
});

export default function LocationsPage() {
  const ld = jsonLdGraph([
    webPageLd({
      path: "/locations",
      name: "Locations | Viking Marketing",
      description:
        "Viking serves local service businesses across Phoenix, Scottsdale, Tempe, Mesa, Chandler, and beyond. Find your city and see how it works.",
    }),
  ]);

  return (
    <>
      <JsonLd json={ld} />

      <section className="relative overflow-hidden pt-36 pb-10 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative text-center">
          <h1 className="mx-auto max-w-3xl font-heading text-[clamp(32px,4.6vw,54px)] font-bold leading-[1.16] text-white">
            Find Viking in Your City
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75">
            Pick your city below to see how Viking&apos;s tools work for businesses like yours, near
            you.
          </p>
        </div>
      </section>

      <section className="section !pt-6">
        <div className="wrap">
          <p className="eyebrow text-center">AI Appointment Setter</p>
          <Reveal className="mt-8">
            <CityChips />
          </Reveal>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[14.5px] leading-relaxed text-white/65">
            If you run a service business in the Valley, you are working with a neighbor. If you are
            anywhere else in the U.S., you are still working with a team that picks up.
          </p>
        </div>
      </section>

      <FinalCta
        title="Don't See Your City?"
        body="Viking works for service businesses anywhere in the U.S. Book a free demo and we'll show you exactly how it fits your business, wherever you are."
        ctaLabel="Book My Free Demo"
        note={<CallNote text="and talk to a real person in Chandler." />}
      />
    </>
  );
}
