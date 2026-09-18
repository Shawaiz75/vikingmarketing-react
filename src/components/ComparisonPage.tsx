import type { ComparisonPageData } from "@/lib/comparisons";
import { jsonLdGraph, organizationLd, breadcrumbLd, webPageLd, faqLd } from "@/lib/seo";
import { CtaButton, SectionHeading, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import HeroGlow from "@/components/HeroGlow";
import HoverLift from "@/components/HoverLift";
import FaqSection from "@/components/FaqSection";
import { FinalCta, CallNote, ReviewsSection } from "@/components/sections";
import { COMPARISON_PAGES } from "@/lib/comparisons";
import { SITE_URL } from "@/lib/site";
import Link from "next/link";

const CELL: Record<string, { icon: string; cls: string }> = {
  yes: { icon: "✓", cls: "text-[#37ca37]" },
  no: { icon: "✕", cls: "text-white/35" },
  partial: { icon: "△", cls: "text-[#efa4f2]" },
};

function MatrixCell({ status, note }: { status: "yes" | "no" | "partial"; note?: string }) {
  const c = CELL[status];
  return (
    <td className="text-center">
      <span className={`text-[16px] font-bold ${c.cls}`}>{c.icon}</span>
      {note ? <span className="mt-1 block text-[11.5px] leading-tight text-white/50">{note}</span> : null}
    </td>
  );
}

export default function ComparisonPage({ data }: { data: ComparisonPageData }) {
  const path = `/${data.slug}`;

  const vikingSoftware: object = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}${path}#viking`,
    name: "Viking Marketing",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/`,
    offers: [
      { "@type": "Offer", price: "297", priceCurrency: "USD", url: `${SITE_URL}/pricing` },
      { "@type": "Offer", price: "497", priceCurrency: "USD", url: `${SITE_URL}/pricing` },
      { "@type": "Offer", price: "997", priceCurrency: "USD", url: `${SITE_URL}/pricing` },
    ],
  };

  const competitorSoftware: object = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}${path}#competitor`,
    name: data.competitorName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: data.competitorUrl,
    offers: data.competitorPrice
      ? {
          "@type": "Offer",
          price: data.competitorPrice.amount,
          priceCurrency: "USD",
          description: data.competitorPrice.note,
          url: data.competitorUrl,
        }
      : { "@type": "Offer", description: "Pricing not published; disclosed by vendor on request.", url: data.competitorUrl },
  };

  const ld = jsonLdGraph([
    organizationLd(),
    vikingSoftware,
    competitorSoftware,
    webPageLd({ path, name: data.seo.title, description: data.seo.description }),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Comparisons", path: "/compare" },
      { name: data.h1, path },
    ]),
    faqLd(data.faqs),
  ]);

  const related = COMPARISON_PAGES.filter((c) => c.slug !== data.slug);

  return (
    <>
      <JsonLd json={ld} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-40">
        <HeroGlow />
        <div className="wrap relative max-w-4xl text-center">
          <p className="text-[13px] text-white/50">
            Published by Viking Marketing · {data.disclosure}
          </p>
          <h1 className="mx-auto mt-4 font-heading text-[clamp(30px,4vw,46px)] font-bold leading-[1.2] text-white">
            {data.h1}
          </h1>
          {data.intro.map((p) => (
            <p key={p.slice(0, 40)} className="mx-auto mt-5 max-w-3xl text-[15.5px] leading-relaxed text-white/75">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CtaButton href="/pricing">See Viking Marketing Pricing</CtaButton>
            <Link
              href="/book-a-call"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14.5px] font-medium text-white transition hover:bg-white/10"
            >
              Book a 15-min Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Feature matrix */}
      <section className="section">
        <div className="wrap max-w-4xl">
          <SectionHeading title="Feature Matrix" />
          <Reveal className="mt-10">
            <div className="card-strong overflow-x-auto p-2 sm:p-4">
              <table className="compare-table min-w-[560px]">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Viking Marketing</th>
                    <th scope="col">{data.competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.featureMatrix.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row" className="!font-medium !text-white/85">{row.feature}</th>
                      <MatrixCell status={row.vikingStatus} note={row.vikingNote} />
                      <MatrixCell status={row.competitorStatus} note={row.competitorNote} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-4 text-[12.5px] leading-relaxed text-white/45">{data.matrixSourceNote}</p>
        </div>
      </section>

      {/* Overlap */}
      <section className="section !pt-0">
        <div className="wrap max-w-4xl">
          <SectionHeading title={data.overlapTitle} />
          <Reveal className="mx-auto mt-6 max-w-3xl text-center text-[15.5px] leading-relaxed text-white/70">
            <p>{data.overlapBody}</p>
          </Reveal>
        </div>
      </section>

      {/* Differences */}
      <section className="section">
        <div className="wrap max-w-4xl">
          <SectionHeading title={data.differencesTitle} />
          <div className="mt-10 space-y-6">
            {data.differences.map((d, i) => (
              <Reveal key={d.title} delay={i * 80} className="card p-6">
                <h3 className="font-heading text-[17px] font-bold text-white">{d.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-white/70">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing side-by-side */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <SectionHeading title="Pricing Side by Side" />
          <Reveal className="mt-10">
            <div className="card-strong overflow-x-auto p-2 sm:p-4">
              <table className="compare-table min-w-[480px]">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Viking Marketing</th>
                    <th scope="col">{data.competitorName}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.pricingRows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="!font-medium !text-white/85">{row.label}</th>
                      <td>{row.viking}</td>
                      <td>{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-4 text-[12.5px] leading-relaxed text-white/45">{data.pricingNote}</p>
        </div>
      </section>

      {/* Who should pick which */}
      <section className="section">
        <div className="wrap">
          <SectionHeading title="Who Should Pick Which" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal className="card p-7">
              <h3 className="font-heading text-lg font-bold text-white">Pick Viking Marketing if</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">{data.pickViking}</p>
            </Reveal>
            <Reveal delay={90} className="card p-7">
              <h3 className="font-heading text-lg font-bold text-white">Pick {data.competitorName} if</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">{data.pickCompetitor}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <FaqSection title="Frequently Asked Questions" faqs={data.faqs} contextLabel={`Viking Marketing vs ${data.competitorName}`} />

      {/* Related comparisons */}
      <section className="section !pt-0">
        <div className="wrap max-w-4xl">
          <SectionHeading title="Related Comparisons" />
          <Reveal className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {related.map((r) => (
              <HoverLift key={r.slug}>
                <Link
                  href={`/${r.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[14.5px] font-medium text-white/85 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                >
                  Viking Marketing vs {r.competitorName}
                </Link>
              </HoverLift>
            ))}
            <HoverLift>
              <Link
                href="/post/best-ai-appointment-setter-software"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[14.5px] font-medium text-white/85 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                Best AI Appointment Setter Software: 9 Tools Compared
              </Link>
            </HoverLift>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title="See Exactly How Viking Compares for Your Business"
        body="Every business is different. Book a 15-minute walkthrough and we'll show you exactly how Viking would work for yours, with real numbers, not a generic demo."
        ctaLabel="Book My Free Demo"
        note={<CallNote />}
        smallPrint={`Last updated ${data.lastUpdated}. Pricing and features change — verify current numbers on each vendor's site before deciding.`}
      />
    </>
  );
}
