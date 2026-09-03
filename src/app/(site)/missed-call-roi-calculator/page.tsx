import type { Metadata } from "next";
import Image from "next/image";
import {
  pageMetadata,
  jsonLdGraph,
  organizationLd,
  breadcrumbLd,
  faqLd,
} from "@/lib/seo";
import { CtaButton, SectionHeading, JsonLd } from "@/components/ui";
import Reveal from "@/components/Reveal";
import RoiCalculator from "@/components/RoiCalculator";
import FaqSection, { type Faq } from "@/components/FaqSection";
import { FinalCta, CallNote, CityChips } from "@/components/sections";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Missed Call ROI Calculator (Free) | Viking Marketing",
  description:
    "Free missed call ROI calculator. See what unanswered calls cost you each month, what you can recover, and your ROI. Honest numbers, no inflated math.",
  path: "/missed-call-roi-calculator",
  ogImage: "/images/6a10c3533c3aed7c638a-7538a9f28dfe.webp",
  keywords: [
    "Missed Call ROI Calculator",
    "missed call calculator",
    "cost of a missed call",
    "cost of missed calls",
    "missed call cost",
    "lost revenue calculator",
    "missed call revenue/cost calculator",
  ],
});

const HOW_STEPS = [
  {
    icon: "/images/call-step-1.svg",
    alt: "Calculating lost revenue per month from missed calls",
    title: "Lost revenue per month.",
    body: "Missed calls per month, multiplied by your close rate, multiplied by your average customer value. Example: 40 missed calls × 30% close rate × $400 = $4,800 lost per month.",
  },
  {
    icon: "/images/call-step-2.svg",
    alt: "Estimating recoverable revenue from missed calls",
    title: "Recoverable revenue.",
    body: "Lost revenue multiplied by a realistic recovery rate. We use 60%, not 100%, because no system recaptures every lead. Example: $4,800 × 60% = $2,880 recoverable per month.",
  },
  {
    icon: "/images/call-step-3.svg",
    alt: "Calculating missed call ROI percentage for service businesses",
    title: "Your ROI.",
    body: "Recovered revenue minus the monthly cost, divided by the monthly cost. Example: ($2,880 − $297) ÷ $297 ≈ 869% ROI.",
  },
];

const INDUSTRY_COSTS = [
  {
    icon: "/images/ind-dental.svg",
    alt: "Missed call ROI calculator for dental practices",
    title: "Dental practices.",
    body: "A new patient is worth hundreds on the first visit and thousands over their lifetime of cleanings, treatments, and referrals. A single missed new-patient call is a high-value loss that compounds for years, which is why fast phone response matters so much in dentistry.",
  },
  {
    icon: "/images/ind-medspa.svg",
    alt: "Missed call ROI calculator for med spas and aesthetics",
    title: "Med spas and aesthetics.",
    body: "Treatments and packages run from hundreds to thousands of dollars, and many inquiries come from social media or after-hours browsing. Miss that call or DM and the client books their injectables or facial somewhere else.",
  },
  {
    icon: "/images/ind-gym.svg",
    alt: "Missed call ROI calculator for gyms and fitness studios",
    title: "Gyms and fitness studios",
    body: "One membership looks small, but it recurs every month for a year or more, so the true value of a missed sign-up call is the whole membership lifetime, not a single payment. High call and inquiry volume means missed calls add up fast.",
  },
  {
    icon: "/images/ind-home.svg",
    alt: "Missed call ROI calculator for home services and contractors",
    title: "Home services and contractors.",
    body: "This is where missed calls hurt most. Studies show home service businesses miss 60% to 80% of inbound calls, and jobs range from a few hundred dollars to $15,000 or more for roofing & remodeling Many calls are urgent, so the first company to answer usually wins the job.",
  },
  {
    icon: "/images/ind-realestate.svg",
    alt: "Missed call ROI calculator for real estate agents",
    title: "Real estate agents.",
    body: "A single closed transaction is worth thousands in commission, and buyers and sellers move fast. The first agent to respond often wins the client, so a missed call can mean losing an entire deal to another agent.",
  },
  {
    icon: "/images/ind-salon.svg",
    alt: "Missed call ROI calculator for salons and barbershops",
    title: "Salons and barbershops.",
    body: "Individual appointments are smaller, but clients rebook every few weeks, so a missed booking call is really a lost recurring customer. With high daily call volume, even a small miss rate adds up to real monthly revenue.",
  },
];

const FAQS: Faq[] = [
  {
    q: "How do I calculate my missed call revenue loss?",
    a: "Multiply your missed calls per month by your close rate, then by your average customer value. For example, 40 missed calls at a 30% close rate and a $400 average job equals $4,800 in lost revenue a month. The calculator above does this instantly, then estimates what you could recover.",
  },
  {
    q: "What is the average cost of a missed call?",
    a: "It depends on your average job value and close rate, so there is no single number. A business that closes 30% of leads at $400 each loses about $120 in expected revenue per missed call. For higher-ticket trades like roofing or HVAC, one missed call can be worth thousands. Enter your numbers above to see your real figure.",
  },
  {
    q: "How accurate is this missed call ROI calculator?",
    a: "It gives a realistic estimate, not a guarantee. We use a conservative 60% recovery rate on purpose, because no tool recaptures every lead, so the result is honest rather than inflated. Your actual return depends on your follow-up, your offer, and how fast you respond to recovered calls.",
  },
  {
    q: "What if I do not know my exact close rate?",
    a: "You can still get a useful estimate. Use a rough close rate, most service businesses land between 20% and 40%, and move the slider to see the range. Even a conservative close rate usually shows that missed calls cost far more than the price of fixing them.",
  },
  {
    q: "Where does the recovery rate come from?",
    a: "Most missed callers will not leave a voicemail, but a large share will reply to an instant text or answer a quick callback. We assume a conservative 60% recovery rate so the ROI stays believable. Some tools claim to recover nearly everything, which is not realistic and not how we calculate it.",
  },
  {
    q: "Will customers really call back if I miss them?",
    a: "Usually not on their own. Most people who reach a missed call simply dial the next business, which is how missed calls turn into competitor wins. Recovering them means reaching back out fast, by instant text or callback, before the caller hires someone else.",
  },
  {
    q: "Can missed calls be fixed without hiring more staff?",
    a: "Yes. Instead of paying a salary to answer phones, an automated system texts every missed caller back and can answer and book calls around the clock. The calculator lets you compare that monthly cost against the revenue you are losing, so you see the ROI before you commit.",
  },
  {
    q: "How quickly would I see a return?",
    a: "For most service businesses the recovered revenue outweighs the monthly cost quickly, because even one or two saved jobs a month usually covers it. The calculator shows your net gain and ROI so you can judge the payback for your own numbers, using realistic figures, not inflated ones.",
  },
];

export default function RoiCalculatorPage() {
  const ld = jsonLdGraph([
    organizationLd(),
    {
      "@type": "WebApplication",
      "@id": `${SITE_URL}/missed-call-roi-calculator#app`,
      name: "Missed Call ROI Calculator",
      url: `${SITE_URL}/missed-call-roi-calculator`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Free missed call ROI calculator that estimates lost revenue from unanswered calls, realistic recoverable revenue, and return on investment.",
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Missed Call ROI Calculator", path: "/missed-call-roi-calculator" },
    ]),
    faqLd(FAQS),
  ]);

  return (
    <>
      <JsonLd json={ld} />

      {/* Hero + calculator */}
      <section className="relative overflow-hidden pt-36 pb-14 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative">
          <div className="text-center">
            <h1 className="mx-auto max-w-4xl font-heading text-[clamp(32px,4.6vw,52px)] font-bold leading-[1.16] text-white">
              Missed Call ROI Calculator: See What Unanswered Calls Cost You
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-relaxed text-white/75">
              Every missed call could be a customer who just hired your competitor. This free missed
              call ROI calculator shows you the honest numbers: how much revenue you lose each
              month, how much you could realistically recover, and your return on fixing it. Enter
              four numbers and see your result in seconds.
            </p>
          </div>
          <Reveal className="mt-12">
            <RoiCalculator />
          </Reveal>
          <p className="mx-auto mt-8 max-w-3xl text-center text-[13.5px] leading-relaxed text-white/50">
            How this is calculated, honestly. Lost revenue = missed calls × close rate × average
            value. Recovered revenue assumes a conservative 60% recovery rate, because no tool
            catches 100%. We use realistic numbers on purpose, inflated calculators that promise to
            recover everything are not telling you the truth. Your real results depend on your
            business, your follow-up, and your offer.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="section">
        <div className="wrap max-w-4xl">
          <SectionHeading title="What is a missed call ROI calculator?" />
          <p className="mt-6 text-center text-[15.5px] leading-relaxed text-white/70">
            A missed call ROI calculator is a free tool that estimates how much revenue your business
            loses from unanswered calls, then compares it to the cost of fixing the problem. You
            enter your missed calls, average customer value, and close rate, and it returns your lost
            revenue, the amount you could recover, and your ROI. It turns a vague worry into a real
            dollar figure you can act on.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            title="How the missed call ROI calculator works"
            lede="The calculator uses the same formula the best tools use, with one difference: the numbers stay honest. There are three steps."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOW_STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="card h-full p-6 text-center">
                <span className="icon-tile !h-12 !w-12 !rounded-xl">
                  <Image src={s.icon} alt={s.alt} width={26} height={26} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-[17px] font-bold text-white">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/70">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-[14.5px] leading-relaxed text-white/65">
            We deliberately avoid the inflated math on other calculators that show &quot;13,000%
            ROI&quot; or &quot;payback in under a day.&quot; Those numbers feel good but no one
            believes them. Realistic figures help you make a real decision.
          </p>
        </div>
      </section>

      {/* Why missed calls cost more */}
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-heading text-[clamp(26px,3.6vw,38px)] font-bold text-white">
              Why missed calls cost more than most owners think
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                Most owners assume a missed caller will leave a voicemail or try again later. They
                usually do not. The cost is bigger than it looks for three reasons:
              </p>
              <p>
                Around 85% of people who reach a missed call never call back. They dial the next
                business on the list instead.
              </p>
              <p>
                The first business to respond usually wins the job, so a call you miss is often a
                sale your competitor makes within minutes.
              </p>
              <p>
                Most missed calls are not random. They happen for fixable reasons: your team is on a
                job, driving, or with a customer; it is after hours or the weekend; or calls come in
                faster than one person can answer during a rush. Each of those is a gap an automated
                system can close.
              </p>
              <p>
                A modest number of missed calls per month adds up to serious money over a year. The
                calculator makes that number visible so you can decide whether it is worth fixing.
              </p>
            </div>
            <div className="mt-7">
              <CtaButton href="/book-a-call">Book My Free Strategy Call</CtaButton>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Image
              src="/images/roi-missed-calls.webp"
              alt="Missed calls draining revenue from a service business phone"
              width={600}
              height={480}
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
        </div>
      </section>

      {/* By industry */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            title="How much do missed calls cost by industry?"
            lede="The cost of a missed call comes down to one thing: what a new customer is worth to you. Industry research shows service businesses miss a large share of inbound calls, often 60% or more, and most callers who do not get through simply book with the next business. So the higher your average customer value, the more each missed call costs. Here is how it plays out across the industries Viking serves, enter your own numbers in the calculator above for your exact figure."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_COSTS.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 80} className="card h-full p-6">
                <span className="icon-tile !h-12 !w-12 !rounded-xl">
                  <Image src={c.icon} alt={c.alt} width={26} height={26} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-[17px] font-bold text-white">{c.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-[14.5px] text-white/70">
            Not on this list? Viking works for any appointment-based or service-based business with
            50+ customers.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton href="/book-a-call">Book My Free Demo</CtaButton>
          </div>
        </div>
      </section>

      {/* Recover */}
      <section className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Image
              src="/images/roi-recover.webp"
              alt="How missed call text back recovers a missed call into a booked job through an automated text and CRM. Missed Call ROI Calculator"
              width={600}
              height={460}
              className="w-full rounded-2xl border border-white/10"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-heading text-[clamp(26px,3.6vw,38px)] font-bold text-white">
              How to recover the revenue you are losing
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/70">
              <p>
                Knowing the number is step one. Recovering it is the point, and it does not require
                hiring someone to sit by the phone.
              </p>
              <p>
                Viking&apos;s missed call text back sends an instant text to every missed call, so
                the conversation keeps going instead of dying at voicemail. The AI appointment setter
                takes it from there, qualifying the lead and booking the appointment straight to your
                calendar, and every recovered lead lands in your CRM automatically. That is how the
                recovered-revenue figure above turns into booked jobs, for far less than the cost of
                another hire.
              </p>
              <p className="font-semibold text-white">
                Flat pricing from $297 a month. No per-text fees. Live in 48 hours.
              </p>
            </div>
            <div className="mt-7">
              <CtaButton href="/book-a-call">Book My Free Strategy Call</CtaButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local */}
      <section className="section">
        <div className="wrap">
          <SectionHeading
            title="Built in Chandler, working for businesses coast to coast"
            lede="Viking Marketing was built in Chandler, Arizona, helping local service businesses stop losing customers to missed calls. If you want help turning the number above into recovered revenue, talk to a real person on our team, not a call center on the other side of the world."
          />
          <div className="mt-10">
            <CityChips />
          </div>
          <p className="mt-6 text-center text-[14px] text-white/60">
            Serving businesses across Arizona and the U.S.
          </p>
        </div>
      </section>

      <FaqSection
        title="Missed call ROI, questions answered"
        faqs={FAQS}
        contextLabel="our AI receptionist and CRM"
      />

      <FinalCta
        title="See Your Number, Then Recover it"
        body="You just saw what missed calls could be costing you. Book a free demo and we will show you exactly how Viking would capture those calls for your business."
        ctaLabel="Book My Free Demo"
        note={<CallNote text="and talk to a real person in Arizona." />}
      />
    </>
  );
}
