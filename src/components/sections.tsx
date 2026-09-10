import Image from "next/image";
import Link from "next/link";
import { CtaButton, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import ReviewsCarousel from "./ReviewsCarousel";
import { Star, GoogleG } from "./review-icons";
import { CITY_LIST } from "@/lib/nav";
import { PHONE_DISPLAY, PHONE_TEL, RATING, GOOGLE_MAPS_URL, ADDRESS } from "@/lib/site";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Viking+Marketing,4240+S+Arizona+Ave+%231063,Chandler,AZ+85248&z=15&output=embed";

/** Every review on Viking Marketing's Google Business Profile (see
 *  GOOGLE_MAPS_URL), pulled verbatim from the business's own reviews widget
 *  (backend.leadconnectorhq.com/appengine/reviews/get_widget/<location id>),
 *  which mirrors the connected Google listing. Text is the full review, not
 *  Google's UI truncation. All 22 are 5-star as of this writing; `rating`
 *  is still per-review since that won't always be true. One entry (Réal
 *  Binette) is a real star-only rating with no written comment. */
const TESTIMONIALS: { name: string; rating: number; date: string; text: string }[] = [
  {
    name: "Christie Issey",
    rating: 5,
    date: "Jan 13, 2026",
    text: "We had a great experience working with Viking Marketing. They helped us set up an automated text messaging system and improve lead funnel. They're really knowledge and just really great to work with.",
  },
  {
    name: "aaron waxman",
    rating: 5,
    date: "Jan 13, 2026",
    text: "Charlie went above and beyond for my business. There are a lot of marketing companies out there, but very few operate like Viking Marketing. Charlie and his team delivered exactly what I wanted, within the timeline they promised, handled every change I requested without issue, and made the entire process smooth. 10/10 experience. Highly recommend.",
  },
  {
    name: "Andrew Philbrick",
    rating: 5,
    date: "Sep 7, 2025",
    text: "Charlie helped me build a conversational chatbot for one of my clients. Super easy to work with and delivered exactly what we needed. Highly recommend!",
  },
  {
    name: "Leigh Hendrickson",
    rating: 5,
    date: "Sep 1, 2025",
    text: "This company is the best!  Their custom support is so quick and knowledgeable. I’ve never had an issue and not had it addressed and also been taught how to fix it in the future myself at the same time.Charles and his team are the best at what they do. Look not further for help from this company is you’re a small business!",
  },
  {
    name: "Balint Adorjan",
    rating: 5,
    date: "Jul 16, 2025",
    text: "Charlie is super knowledgeable about AI bots and makes amazing booking bots. I don’t know what my business would do without him.",
  },
  {
    name: "Noah Amparano",
    rating: 5,
    date: "Feb 28, 2025",
    text: "Charlie is hands down the most knowledgeable person when it comes to AI Assistants. He’s ability to breakdown such complex systems and prompts makes it easy to understand and absorb!",
  },
  {
    name: "Jump Manual Coaching",
    rating: 5,
    date: "Dec 30, 2024",
    text: "These guys are INCREDIBLE! Super responsive; their customer support is OFF THE CHARTS! We were able to scale to 20+ Inbound booked apts PER DAY in just a few weeks.No more dialing leads - just inbound apts- its a beautiful thing",
  },
  {
    name: "Max Witcher",
    rating: 5,
    date: "Dec 29, 2024",
    text: "Charles has helped grow my company exponentially. He is a marketing genius. I’m extremely blessed to have crossed paths with him and very grateful for everything he has done for me and my company. Best customer service I could ever ask for. I highly recommend Charles if you are trying to grow your business.",
  },
  {
    name: "Steve R",
    rating: 5,
    date: "Aug 26, 2024",
    text: "Charles and his team has helped us grow our business in various ways. With his CRM and automation setup it provides an opportunity so we can focus more on our sales and let the automation help us. Charles is very supportive whenever we need any help with the systems he manages for us.",
  },
  {
    name: "Nadav Buzaglo",
    rating: 5,
    date: "Aug 26, 2024",
    text: "the Viking Marketing is awesome! Charlie and his team are help me alot. they always respond super fast. They're super friendly and helpful too. They're great at advertising and all what you need for your business ! Definitely recommend them!",
  },
  {
    name: "Phil Hamilton",
    rating: 5,
    date: "Aug 23, 2024",
    text: "Charlie and crew are the best marketing group out there. Highly recommend.",
  },
  {
    name: "Jacob Hiller",
    rating: 5,
    date: "Aug 1, 2024",
    text: "Launched an AI bot and Charlie has been super helpful launching and updating the bot.  It was an instant win for us and has booked hundreds of appointments for us and removed the need to have full time engagement specialist replying.If you’re in the fence about AI campaigns … don’t be… this does an amazing job.Charlie is the man for this!",
  },
  {
    name: "Wendell Laidley",
    rating: 5,
    date: "May 21, 2024",
    text: "Working with Charlie @ Viking Marketing has been thoroughly delightful and I can give him the strongest of endorsements.  He helped us stand up our High Level instance, complete with automations and integrations, in less than two weeks.  Once we signed on I felt like Charlie was very dedicated to getting us stood up.  I regard him as being a subject matter expert, valuable resource, and advocate for the success of our business.  Go Viking Marketing!",
  },
  {
    name: "Ben Steveken",
    rating: 5,
    date: "Mar 2, 2024",
    text: "Charlie and the team at Viking Marketing are great and easy to work with! Very helpful to my business.",
  },
  {
    name: "Brian Griffith",
    rating: 5,
    date: "Mar 1, 2024",
    text: "Viking Marketing has been amazing to work with. They have a platform that has blown me away and I would highly recommend them. Excellent communication and customer support.",
  },
  {
    name: "Réal Binette",
    rating: 5,
    date: "Feb 16, 2024",
    text: "",
  },
  {
    name: "Real Binette",
    rating: 5,
    date: "Feb 16, 2024",
    text: "Top-notch service! Charles and his team quickly and efficiently set me up with a solution that will no doubt catapult my business forward. Always goes above and beyond to deliver an exceptional product, give these guys a shot you will not be disappointed!",
  },
  {
    name: "January Harrison",
    rating: 5,
    date: "Nov 7, 2023",
    text: "I am a momprenuer and I own two companies, a solar company  and a holiday lighting installation company. I found myself beneath an overwhelming amount of admin work and I turned to Viking Marketing tor help! They helped me to move all my current customers & custom designed automation that  (in the middle of my busiest time). On top of that they helped me to connect all my socials, my website, my business google,  and my multiple phone numbers to one centralized location. This company CARES! They spent countless hours making sure I am set up perfectly! All my systems are working! Invoicing is automatic now! Scheduling is automatic! Just that alone saves me hours of time DAILY! Allowing me more time to grow my business and focus on the things! SEO is integrated too! I am excited for the future of my business! Thank you Viking Marketing! You are an answer to my prayers!",
  },
  {
    name: "Anthony Grappone",
    rating: 5,
    date: "Oct 11, 2023",
    text: "A pleasure to work with is an understatement. Responsive and willing to do whatever it takes to get the job done and have their customers satisfied is certainly my experience. I will gladly refer Charles and his team at Viking Marketing to anyone. 5 out of 5 stars for service and overall customer experience.",
  },
  {
    name: "Joseph Nunziato",
    rating: 5,
    date: "Oct 11, 2023",
    text: "Charles was great to work with. Always answers thr phone when you need him and works diligently to complete the task.",
  },
  {
    name: "David Kyle",
    rating: 5,
    date: "Sep 1, 2023",
    text: "Charlie just helped me out big time with setting up a ChatAI Bot.I was really struggling to get it up & running & Charlie was kind enough to jump on a quick Zoom to help me get this fixedHe knows his stuff 💪",
  },
  {
    name: "Tarek Maximus",
    rating: 5,
    date: "Aug 25, 2023",
    text: "WOW! Viking Marketing have transformed my solar installation business with their new and cutting edge AI automation solution.Because of their innovation I no longer have to pay out commissions and now have a 24/7 sales team without the cost, this has solved all my speed to lead and out of hours problem.Highly recommend contacting them, Charles will over deliver with unreasonable hospitality.You have nothing to lose and will likely regret not doing so in the next year, this AI tech is mind blowing. You don't want to get left behind.Thank you!",
  },
];

/** "What Real Businesses Say About Viking" — every real Google review,
 *  hardcoded from the business's own Google Business Profile (see
 *  GOOGLE_MAPS_URL), scrollable horizontally on every screen size. */
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

        <Reveal className="mt-10" delay={90}>
          <ReviewsCarousel reviews={TESTIMONIALS} />
        </Reveal>

        <div className="mt-2 flex justify-center">
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

/** Final gradient-floor CTA used at the bottom of every page - same glow
 *  background site-wide, so every page's closing CTA matches the home
 *  page's. */
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
      {/* sm+ (where wrapped copy stays short) keeps the exact width-locked
          aspect ratio this always used. Below that, mobile's much longer
          line-wrap makes the section far taller than this image is wide,
          so a width-locked image shrinks to a barely-there sliver behind
          the CTA - a fixed min band + object-cover keeps a real glow
          behind the button/phone line without stretching the image. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] w-full select-none sm:aspect-[1200/427] sm:h-auto"
        aria-hidden
      >
        <Image src="/images/final-cta-glow.webp" alt="" fill sizes="100vw" className="object-cover object-bottom" />
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
  const fullAddress = `${ADDRESS.streetAddress}, ${ADDRESS.addressLocality}, ${ADDRESS.addressRegion} ${ADDRESS.postalCode}`;

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
              {/* Real, interactive embed instead of a static photo - visitors
                  can pan/zoom/verify the location inline instead of only
                  linking out. No API key needed for the basic embed form. */}
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src={MAP_EMBED_SRC}
                  title={`Map showing Viking Marketing's office at ${fullAddress}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[280px] w-full grayscale-[0.3] contrast-[1.05] lg:h-[320px]"
                />
              </div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-medium text-white/70 hover:text-white"
              >
                Get Directions
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 10 10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </Reveal>
          ) : null}
        </div>
        <div className="mt-10">
          <p className="mb-4 text-center text-[13px] font-semibold uppercase tracking-wide text-white/40">
            Proudly rooted in the Greater Phoenix Area
          </p>
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
