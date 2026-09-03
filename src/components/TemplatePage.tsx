import Image from "next/image";
import Link from "next/link";
import type { TemplatePageData, TplSection } from "@/lib/templates";
import {
  jsonLdGraph,
  organizationLd,
  localBusinessLd,
  personLd,
  serviceLd,
  softwareApplicationLd,
  breadcrumbLd,
  webPageLd,
  howToLd,
  faqLd,
} from "@/lib/seo";
import { CtaButton, SectionHeading, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FaqSection from "@/components/FaqSection";
import { ReviewsSection, FinalCta, CallNote, CityChips } from "@/components/sections";
import { INDUSTRY_LINKS } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";

function SectionBlock({ section }: { section: TplSection }) {
  switch (section.type) {
    case "definition":
      return (
        <section className="section">
          <div className="wrap max-w-4xl">
            <SectionHeading title={section.title} />
            <div className="mt-6 space-y-4 text-center text-[15.5px] leading-relaxed text-white/70">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      );

    case "split": {
      const img = (
        <Reveal delay={100}>
          <Image
            src={section.image}
            alt={section.imageAlt}
            width={620}
            height={460}
            className="w-full rounded-2xl border border-white/10"
          />
        </Reveal>
      );
      return (
        <section className="section">
          <div className="wrap grid items-center gap-10 lg:grid-cols-2">
            {section.side === "left" ? img : null}
            <Reveal>
              <h2 className="font-heading text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.18] text-white">
                {section.title}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-[15.5px] leading-relaxed text-white/70">
                  {p}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((b) => (
                    <li key={b.slice(0, 40)} className="flex items-start gap-3 text-[15px] text-white/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#188bf6]/20 text-[11px] text-[#4db2ff]">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.bold ? (
                <p className="mt-4 text-[15.5px] font-semibold text-white">{section.bold}</p>
              ) : null}
              {section.linkLabel && section.linkHref ? (
                <div className="mt-7">
                  <CtaButton href={section.linkHref}>{section.linkLabel}</CtaButton>
                </div>
              ) : null}
            </Reveal>
            {section.side === "right" ? img : null}
          </div>
        </section>
      );
    }

    case "iconSteps":
      return (
        <section className="section">
          <div className="wrap">
            <SectionHeading title={section.title} lede={section.intro} />
            <div
              className={`mt-12 grid gap-6 sm:grid-cols-2 ${
                section.steps.length >= 5 ? "lg:grid-cols-5" : section.steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
              }`}
            >
              {section.steps.map((s, i) => (
                <Reveal key={(s.title ?? s.body).slice(0, 40)} delay={i * 90} className="card h-full p-6 text-center">
                  <span className="icon-tile !h-12 !w-12 !rounded-xl">
                    <Image src={s.icon} alt={s.alt ?? ""} width={26} height={26} className="h-6 w-6" />
                  </span>
                  {s.title ? (
                    <h3 className="mt-4 font-heading text-[17px] font-bold text-white">{s.title}</h3>
                  ) : null}
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/70">{s.body}</p>
                </Reveal>
              ))}
            </div>
            {section.outro ? (
              <p className="mx-auto mt-8 max-w-2xl text-center text-[14.5px] text-white/65">{section.outro}</p>
            ) : null}
            {section.ctaLabel ? (
              <div className="mt-8 flex justify-center">
                <CtaButton href="/book-a-call">{section.ctaLabel}</CtaButton>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "iconBullets":
      return (
        <section className="section">
          <div className="wrap">
            <SectionHeading title={section.title} lede={section.intro} />
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {section.items.map((item, i) => (
                <Reveal key={item.text.slice(0, 40)} delay={(i % 2) * 80}>
                  <div className="card flex h-full items-start gap-4 p-5">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#188bf6]/15">
                      <Image src={item.icon} alt={item.alt ?? ""} width={24} height={24} className="h-6 w-6" />
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-white/80">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      );

    case "compare":
      return (
        <section className="section">
          <div className="wrap max-w-4xl">
            <SectionHeading title={section.title} lede={section.intro} />
            <Reveal className="mt-10">
              <div className="card-strong overflow-x-auto p-2 sm:p-4">
                <table className="compare-table min-w-[560px]">
                  <thead>
                    <tr>
                      {section.headers.map((h, i) => (
                        <th key={h} scope="col" className={i === 2 ? "text-[#efa4f2]" : undefined}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row) => (
                      <tr key={row[0]}>
                        <th scope="row" className="!font-medium !text-white/85">{row[0]}</th>
                        <td>{row[1]}</td>
                        <td className="!text-white">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            {section.footnote ? (
              <p className="mt-4 text-[12.5px] leading-relaxed text-white/45">{section.footnote}</p>
            ) : null}
            {section.outro ? (
              <p className="mt-5 text-[14.5px] leading-relaxed text-white/70">{section.outro}</p>
            ) : null}
          </div>
        </section>
      );

    case "industryCards":
      return (
        <section className="section">
          <div className="wrap">
            <SectionHeading title={section.title} lede={section.intro} />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.cards.map((c, i) => (
                <Reveal key={c.title} delay={(i % 3) * 80} className="card h-full p-6">
                  <span className="icon-tile !h-12 !w-12 !rounded-xl">
                    <Image src={c.icon} alt={c.alt ?? ""} width={26} height={26} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-[17px] font-bold text-white">{c.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{c.body}</p>
                </Reveal>
              ))}
            </div>
            {section.note ? (
              <p className="mt-10 text-center text-[14.5px] text-white/70">{section.note}</p>
            ) : null}
            {section.ctaLabel ? (
              <div className="mt-6 flex justify-center">
                <CtaButton href="/book-a-call">{section.ctaLabel}</CtaButton>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "industryLinks":
      return (
        <section className="section">
          <div className="wrap">
            <SectionHeading title="Built for Every Local Service Industry" />
            <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
              {INDUSTRY_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-[14.5px] font-medium text-white/85 transition hover:border-white/25 hover:text-white"
                >
                  {l.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path d="M2 10 10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-[14.5px] text-white/70">
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
      );

    case "local":
      return (
        <section className="section">
          <div className="wrap">
            <SectionHeading title={section.title} />
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-[15.5px] leading-relaxed text-white/70">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-10">
              <CityChips />
            </div>
            {section.note ? (
              <p className="mx-auto mt-6 max-w-2xl text-center text-[14px] text-white/60">{section.note}</p>
            ) : null}
          </div>
        </section>
      );

    case "setupSteps":
      return (
        <section className="section">
          <div className="wrap">
            <SectionHeading title={section.title} lede={section.intro} />
            {section.image ? (
              <Reveal className="mt-10">
                <Image
                  src={section.image}
                  alt={section.imageAlt ?? ""}
                  width={1100}
                  height={340}
                  className="mx-auto w-full max-w-4xl rounded-2xl"
                />
              </Reveal>
            ) : null}
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {section.steps.map((s, i) => (
                <Reveal key={(s.title ?? s.body).slice(0, 40)} delay={i * 120} className="text-center">
                  <span className="icon-tile">
                    <Image src={s.icon} alt={s.alt ?? ""} width={30} height={30} className="h-7 w-7" />
                  </span>
                  {s.title ? (
                    <h3 className="mt-5 font-heading text-xl font-bold text-white">{s.title}</h3>
                  ) : null}
                  <p className="mt-3 text-[14.5px] leading-relaxed text-white/70">{s.body}</p>
                </Reveal>
              ))}
            </div>
            {section.outro ? (
              <p className="mx-auto mt-10 max-w-2xl text-center text-[14.5px] text-white/65">{section.outro}</p>
            ) : null}
            {section.ctaLabel ? (
              <div className="mt-8 flex justify-center">
                <CtaButton href="/book-a-call">{section.ctaLabel}</CtaButton>
              </div>
            ) : null}
          </div>
        </section>
      );

    case "reviews":
      return <ReviewsSection />;

    case "stats":
      return (
        <section className="section">
          <div className="wrap">
            <SectionHeading title={section.title} lede={section.intro} />
            <div className="mt-12 grid gap-10 text-center md:grid-cols-3">
              {section.stats.map((s) => (
                <div key={s.value} className="flex items-center justify-center gap-4">
                  <p className="grad-text font-heading text-[clamp(36px,4.4vw,52px)] font-bold leading-none">
                    {s.value}
                  </p>
                  <p className="max-w-[190px] text-left text-[15px] leading-snug text-white/70">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  }
}

/** Shared renderer for feature / industry / location pages. */
export default function TemplatePage({ data }: { data: TemplatePageData }) {
  const path = `/${data.slug}`;
  const nodes: object[] = [];
  const k = data.schema.kinds;
  if (k.includes("organization")) nodes.push(organizationLd());
  if (k.includes("localBusiness")) nodes.push(localBusinessLd());
  if (k.includes("person")) nodes.push(personLd());
  if (k.includes("service"))
    nodes.push(
      serviceLd({
        name: data.schema.serviceName ?? data.breadcrumbName,
        description: data.schema.serviceDescription ?? data.seo.description,
        path,
      })
    );
  if (k.includes("softwareApplication"))
    nodes.push(
      softwareApplicationLd({
        name: data.schema.serviceName ?? data.breadcrumbName,
        description: data.schema.serviceDescription ?? data.seo.description,
        path,
      })
    );
  if (k.includes("webPage"))
    nodes.push(
      webPageLd({
        path,
        name: data.seo.title,
        description: data.seo.description,
        image: data.seo.ogImage,
      })
    );
  if (k.includes("breadcrumb"))
    nodes.push(
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: data.breadcrumbName, path },
      ])
    );
  if (k.includes("howTo") && data.schema.howTo) {
    const stepsSection = data.sections.find((s) => s.type === "iconSteps");
    if (stepsSection && stepsSection.type === "iconSteps") {
      nodes.push(
        howToLd({
          name: data.schema.howTo.name,
          description: data.schema.howTo.description,
          steps: stepsSection.steps.map((s, i) => ({
            name: s.title ?? `Step ${i + 1}`,
            text: s.body,
          })),
        })
      );
    }
  }
  if (k.includes("faq")) nodes.push(faqLd(data.faqs));

  return (
    <>
      <JsonLd json={jsonLdGraph(nodes)} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative text-center">
          {data.hero.badge ? <p className="text-[15px] text-white/80">{data.hero.badge}</p> : null}
          <h1 className="mx-auto mt-5 max-w-4xl font-heading text-[clamp(32px,4.6vw,54px)] font-bold leading-[1.16] tracking-[-0.02em] text-white">
            {data.hero.h1}
          </h1>
          {data.hero.reviewedBy ? (
            <p className="mt-4 text-[13.5px] text-white/55">{data.hero.reviewedBy}</p>
          ) : null}
          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-white/75">
            {data.hero.lede}
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton href="/book-a-call">{data.hero.ctaLabel}</CtaButton>
          </div>
          {data.hero.image ? (
            <Reveal className="mt-12">
              <Image
                src={data.hero.image}
                alt={data.hero.imageAlt ?? ""}
                width={1160}
                height={640}
                priority
                className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 shadow-[0_30px_120px_rgba(139,92,246,0.22)]"
              />
            </Reveal>
          ) : null}
          {data.hero.checkLines?.length ? (
            <div className="mt-8 space-y-1.5">
              {data.hero.checkLines.map((line) => (
                <p key={line.slice(0, 40)} className="text-[14.5px] text-white/70">
                  {line}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {data.sections.map((s, i) => (
        <SectionBlock key={`${s.type}-${i}`} section={s} />
      ))}

      <FaqSection title={data.faqTitle} faqs={data.faqs} contextLabel={data.faqContextLabel} />

      <FinalCta
        title={data.finalCta.title}
        body={data.finalCta.body}
        ctaLabel={data.finalCta.ctaLabel}
        note={data.finalCta.phoneNote ? <CallNote text={data.finalCta.phoneNote} /> : <CallNote />}
      />
    </>
  );
}

/** Helper to build page metadata for a template page. */
export function templateMetadata(data: TemplatePageData) {
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: { canonical: `${SITE_URL}/${data.slug}` },
    openGraph: {
      title: data.seo.ogTitle ?? data.seo.title,
      description: data.seo.ogDescription ?? data.seo.description,
      url: `${SITE_URL}/${data.slug}`,
      siteName: "Viking Marketing",
      type: "website" as const,
      images: [{ url: `${SITE_URL}${data.seo.ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      images: [`${SITE_URL}${data.seo.ogImage}`],
    },
  };
}
