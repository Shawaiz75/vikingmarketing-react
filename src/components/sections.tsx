import Image from "next/image";
import Link from "next/link";
import { CtaButton, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import { CITY_LIST } from "@/lib/nav";
import { PHONE_DISPLAY, PHONE_TEL, RATING, GOOGLE_MAPS_URL } from "@/lib/site";

/** Real, attributed reviews from Viking Marketing's Google Business Profile
 *  (see GOOGLE_MAPS_URL). Text is quoted verbatim, including Google's own
 *  truncation — each card links out to the full review rather than having
 *  the cut-off text guessed or rewritten. All 21 reviews on the listing are
 *  5-star; update this list by hand if new ones are worth featuring. */
const TESTIMONIALS: { name: string; reviewCount: number; date: string; text: string }[] = [
  {
    name: "Aaron Waxman",
    reviewCount: 7,
    date: "7 months ago",
    text: "Charlie went above and beyond for my business. There are a lot of marketing companies out there, but very few operate like Viking Marketing. Charlie and his team delivered exactly what I wanted, within the timeline they promised, handled…",
  },
  {
    name: "Christie Issey",
    reviewCount: 2,
    date: "7 months ago",
    text: "We had a great experience working with Viking Marketing. They helped us set up an automated text messaging system and improve lead funnel. They're really knowledge and just really great to work with.",
  },
  {
    name: "Leigh Hendrickson",
    reviewCount: 5,
    date: "a year ago",
    text: "This company is the best! Their custom support is so quick and knowledgeable. I've never had an issue and not had it addressed and also been taught how to fix it in the future myself at the same time…",
  },
];

/** Five-pointed solid star, used at a fixed gold fill for review ratings. */
function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="#FBBC05" className={className} aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118l-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
    </svg>
  );
}

/** The standard multicolor Google "G" mark, used nominatively to indicate
 *  these are real Google reviews and to badge the outbound links. */
function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/** "What Real Businesses Say About Viking" — real Google reviews, hardcoded
 *  from the business's own Google Business Profile (see GOOGLE_MAPS_URL). */
export function ReviewsSection() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHeading title="What Real Businesses Say About Viking" />

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <GoogleG className="h-7 w-7" />
          <span className="font-heading text-2xl font-bold text-white">{RATING.value}</span>
          <span className="flex gap-0.5" role="img" aria-label={`${RATING.value} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5" />
            ))}
          </span>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener"
            className="text-[15px] text-white/70 underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/60"
          >
            {RATING.count} reviews on Google
          </a>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90} className="h-full">
              <div className="card-strong flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} />
                    ))}
                  </span>
                  <span className="text-[13px] text-white/45">{r.date}</span>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/80">{r.text}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#efa4f2] to-[#3d05dd] text-[13px] font-semibold text-white">
                      {r.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-white">{r.name}</p>
                      <p className="text-[12.5px] text-white/50">
                        {r.reviewCount} review{r.reviewCount === 1 ? "" : "s"} on Google
                      </p>
                    </div>
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Read ${r.name}'s full review on Google`}
                    className="flex-none transition hover:opacity-80"
                  >
                    <GoogleG />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener"
            className="btn-outline-gradient"
          >
            Read all {RATING.count} reviews on Google
          </a>
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
              {/* When the combined illustration is shown it already contains
                  the icons. Icon files are already complete self-styled
                  82x82 tiles, so no wrapper background here either. */}
              {!showIllustration ? (
                <Image src={s.icon} alt={s.alt ?? ""} width={82} height={82} className="mx-auto h-[82px] w-[82px]" />
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
