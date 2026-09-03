import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, jsonLdGraph, webPageLd } from "@/lib/seo";
import { SectionHeading, JsonLd, CtaButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { FinalCta, CallNote } from "@/components/sections";
import { INDUSTRY_LINKS } from "@/lib/nav";

export const metadata: Metadata = pageMetadata({
  title: "Industries | Viking Marketing",
  description:
    "Viking serves dental practices, med spas, gyms, home services, real estate, and salons. Find your industry and see how it works.",
  path: "/industries",
  ogImage: "/images/6a39a3ad21502f4c6101-86d05984bc44.webp",
  keywords: ["Viking Marketing industries"],
});

export default function IndustriesPage() {
  const ld = jsonLdGraph([
    webPageLd({
      path: "/industries",
      name: "Industries | Viking Marketing",
      description:
        "Viking serves dental practices, med spas, gyms, home services, real estate, and salons. Find your industry and see how it works.",
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
            Find Viking for Your Industry
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75">
            Pick your industry below to see how Viking&apos;s tools work for businesses like yours.
          </p>
        </div>
      </section>

      <section className="section !pt-6">
        <div className="wrap">
          <p className="eyebrow text-center">AI Appointment Setter</p>
          <SectionHeading title="Built for Every Local Service Industry" className="mt-3" />
          <Reveal className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="card flex items-center justify-between gap-3 px-6 py-5 text-[15.5px] font-semibold text-white transition hover:border-white/25"
              >
                {l.label}
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 10 10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            ))}
          </Reveal>
          <p className="mt-10 text-center text-[14.5px] text-white/70">
            Not on this list? The AI works for any appointment-based or service business that lives
            by its lead response time.
          </p>
          <p className="mt-2 text-center text-[14px] text-white/60">
            Serving agencies in Phoenix, Scottsdale, Tempe, Chandler, and across the U.S.{" "}
            <Link href="/locations" className="text-[#efa4f2] hover:text-white">
              See all locations →
            </Link>
          </p>
        </div>
      </section>

      <FinalCta
        title="Don't See Your Industry?"
        body="Viking works for any local service business that books appointments. Book a free demo and we will show you exactly how it fits your business."
        ctaLabel="Book My Free Demo"
        note={<CallNote text="and talk to a real person in Chandler." />}
      />
    </>
  );
}
