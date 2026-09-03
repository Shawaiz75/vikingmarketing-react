import Image from "next/image";
import Link from "next/link";
import { CtaButton, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { CITY_LIST } from "@/lib/nav";
import { PHONE_DISPLAY, PHONE_TEL, REVIEWS_WIDGET_URL } from "@/lib/site";

/** "What Real Businesses Say About Viking" — GHL reviews widget (env-configured). */
export function ReviewsSection() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading title="What Real Businesses Say About Viking" />
        <div className="mt-10">
          {REVIEWS_WIDGET_URL ? (
            <iframe
              src={REVIEWS_WIDGET_URL}
              title="Google reviews for Viking Marketing"
              className="h-[360px] w-full rounded-2xl"
              loading="lazy"
              scrolling="no"
            />
          ) : (
            <div className="card-strong px-8 py-14 text-center">
              <p className="font-heading text-xl font-bold text-white">
                Rated 5.0 from 21 Google reviews
              </p>
              <p className="mx-auto mt-3 max-w-xl text-white/65">
                Live review feed appears here. Set{" "}
                <code className="rounded bg-white/10 px-1.5 py-0.5 text-[13px]">
                  NEXT_PUBLIC_REVIEWS_WIDGET_URL
                </code>{" "}
                to your reviews widget URL to enable it.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Final gradient-floor CTA used at the bottom of most pages. */
export function FinalCta({
  title,
  body,
  ctaLabel,
  note,
  smallPrint,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  note?: React.ReactNode;
  smallPrint?: string;
}) {
  return (
    <section className="section overflow-hidden">
      <div className="grid-backdrop grid-bottom" aria-hidden>
        <div className="grid-glow bottom-0" />
      </div>
      <div className="wrap relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[1120px] font-heading text-[clamp(30px,3.9vw,52px)] font-bold leading-[1.5] text-white">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[1150px] text-[18px] leading-[36px] text-white/80">{body}</p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/book-a-call">{ctaLabel}</CtaButton>
          </div>
          {note ? <p className="mt-6 text-[14.5px] text-white/70">{note}</p> : null}
          {smallPrint ? <p className="mt-2 text-[13.5px] text-white/50">{smallPrint}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}

/** Default phone note under final CTAs. */
export function CallNote({ text = "Speak to a real human in Chandler, AZ" }: { text?: string }) {
  return (
    <>
      Or call us directly:{" "}
      <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white hover:underline">
        {PHONE_DISPLAY}
      </a>{" "}
      {text}
    </>
  );
}

/** Arizona city chip grid (Chandler section / locations). Only Phoenix has a page today. */
export function CityChips({ linkPhoenix = true }: { linkPhoenix?: boolean }) {
  return (
    <div className="card-strong px-6 py-6">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {CITY_LIST.map((city) => {
          const isPhoenix = city === "Phoenix" && linkPhoenix;
          const inner = (
            <span className="font-heading flex w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#0b0920]/90 px-4 py-3.5 text-[17px] font-medium text-white transition hover:border-white/25">
              {city}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2 10 10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          );
          return (
            <li key={city}>
              {isPhoenix ? (
                <Link href="/ai-appointment-setter-phoenix">{inner}</Link>
              ) : (
                <button type="button" className="w-full cursor-default text-left" aria-label={`${city}, Arizona service area`}>
                  {inner}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** "Built in Chandler" local trust section (home + reused variants). */
export function LocalSection({
  title,
  paragraphs,
  bold,
  footNote = "Serving businesses across Arizona and the U.S.",
  showMap = true,
}: {
  title: string;
  paragraphs: string[];
  bold?: string;
  footNote?: string;
  showMap?: boolean;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <h2 className="font-heading text-[clamp(30px,3.5vw,47px)] font-bold leading-[1.38] text-white">
              {title}
            </h2>
            {paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="mt-4 text-[16px] leading-[24px] text-white/80">
                {p}
              </p>
            ))}
            {bold ? <p className="mt-4 text-[16px] font-bold text-white">{bold}</p> : null}
          </Reveal>
          {showMap ? (
            <Reveal delay={120}>
              <a
                href="https://maps.google.com/?q=4240+S+Arizona+Ave+%231063,+Chandler,+AZ+85248"
                target="_blank"
                rel="noopener"
                aria-label="Viking Marketing on Google Maps"
              >
                <Image
                  src="/images/map-chandler.jpg"
                  alt="4240 S Arizona Ave #1063, Chandler, AZ 85248, USA"
                  width={560}
                  height={380}
                  className="w-full rounded-2xl border border-white/10 object-cover"
                />
              </a>
            </Reveal>
          ) : null}
        </div>
        <div className="mt-10">
          <CityChips />
        </div>
        <p className="mt-6 text-center text-[16px] text-white/80">{footNote}</p>
      </div>
    </section>
  );
}

/** Three-step "Live in 48 Hours" section (home + feature pages variant). */
export function StepsSection({
  title,
  steps,
  ctaLabel = "Book My Free Demo",
  intro,
  showIllustration = false,
}: {
  title: string;
  steps: { icon: string; title: string; body: string; alt?: string }[];
  ctaLabel?: string | null;
  intro?: string;
  showIllustration?: boolean;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading title={title} lede={intro} />
        {showIllustration ? (
          <Reveal className="mt-10">
            <Image
              src="/images/steps-illustration.webp"
              alt="Three-step Viking Marketing process: connect your business, automate with AI, and grow your revenue"
              width={1100}
              height={300}
              className="mx-auto w-full max-w-4xl"
            />
          </Reveal>
        ) : null}
        <div className={`grid gap-10 md:grid-cols-3 ${showIllustration ? "mt-4" : "mt-12"}`}>
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="text-center">
              {/* When the combined illustration is shown it already contains the icons. */}
              {!showIllustration ? (
                <span className="icon-tile">
                  <Image src={s.icon} alt={s.alt ?? ""} width={30} height={30} className="h-7 w-7" />
                </span>
              ) : null}
              <h3 className="mt-5 font-heading text-[20px] font-bold leading-[32px] text-white">{s.title}</h3>
              <p className="mt-3 text-[16px] leading-[24px] text-white/80">{s.body}</p>
            </Reveal>
          ))}
        </div>
        {ctaLabel ? (
          <div className="mt-12 flex justify-center">
            <CtaButton href="/book-a-call">{ctaLabel}</CtaButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}
