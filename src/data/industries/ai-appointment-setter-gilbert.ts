import type { TemplatePageData } from "@/lib/templates";
import { RATING } from "@/lib/site";

const data: TemplatePageData = {
  slug: "ai-appointment-setter-gilbert",
  breadcrumbName: "AI Appointment Setter in Gilbert",
  seo: {
    title: "AI Appointment Setter in Gilbert, AZ | Viking Marketing",
    description:
      "Viking's AI appointment setter answers every lead in Gilbert, qualifies them, and books the job. Built and run from Chandler, Arizona. Free demo.",
    ogImage: "/images/6a39996d28e2dab9ea4a-b5fad78c0323.webp",
    keywords: ["AI appointment setter Gilbert", "ai sales assistant Gilbert"],
  },
  schema: {
    kinds: ["localBusiness", "service", "webPage", "howTo", "faq"],
    serviceName: "AI Appointment Setter in Gilbert",
    serviceDescription:
      "Viking's AI appointment setter answers every lead that reaches a Gilbert business in seconds, qualifies them, and books the appointment, day or night.",
    areaServed: ["Gilbert", "Phoenix", "Chandler"],
    howTo: {
      name: "How the AI Appointment Setter Works",
      description:
        "Connect your business, we train the AI on your services and booking rules, and every lead gets answered and booked straight to your calendar. Most Gilbert-area businesses are live within 48 hours.",
    },
  },
  hero: {
    badge: "⚡ Built in Chandler · Serving local businesses across Gilbert",
    h1: "AI Appointment Setter in Gilbert",
    lede: "Your next customer just messaged. Whoever answers first books the job. Viking's AI appointment setter in Gilbert answers every lead in seconds, qualifies them, and books the appointment, day or night, so your competitor never gets the chance.",
    ctaLabel: "Book a Free Demo",
    image: "/images/6a3c2121b3c8655da2a5-bfc327417b32.webp",
    imageAlt: "Viking Marketing dashboard for local service businesses",
    checkLines: [`✓ Built and run from Chandler, Arizona ✓ 5.0 from ${RATING.count} Google reviews ✓ Live in 48 hours`],
  },
  sections: [
    {
      type: "definition",
      title: "What the AI Appointment Setter Actually Does",
      paragraphs: [
        "Viking's AI appointment setter replies to every lead that reaches you by text, web chat, Instagram, Facebook, or your website, the moment they reach out. It holds a real conversation, asks the questions that matter to your business, and books the appointment straight to your calendar. No scripts that sound robotic. No forms that go unanswered for hours.",
        "By the time you check your phone, the lead is already qualified and the appointment is already on your calendar.",
      ],
    },
    {
      type: "split",
      title: "Why Gilbert Businesses Need This Now",
      paragraphs: [
        "Gilbert is about 8 miles, a 15-minute drive from Viking's Chandler headquarters. Gilbert has been one of the fastest-growing towns in the country for over a decade, built almost entirely around young families, which means strong, steady demand for dental practices, med spas, gyms, and home-services businesses serving new homeowners.",
        "Whether you run a dental practice, a med spa, or a home-services contractor, the pattern is the same: whoever replies first, and sounds like they know what they're doing, gets the appointment. A slow reply doesn't lose the customer to a better competitor, it loses them to whoever simply answered faster.",
        "Viking is built here, run from Chandler, and built specifically for this kind of business. We are not a national platform with a Gilbert landing page bolted on. Charlie, our founder, spent over a decade running local businesses in this market before he built Viking, so the problem this solves is one he lived through himself.",
      ],
      image: "/images/6a399b0e9aae5140d0b7-143ffbabda68.webp",
      imageAlt: "Map of the Phoenix metro showing AI appointment setter responding to leads near Gilbert",
      side: "left",
    },
    {
      type: "iconSteps",
      title: "How the AI Appointment Setter Works",
      steps: [
        {
          icon: "/images/call-step-1.svg",
          alt: "Step one, Connect your business.",
          title: "Connect your business.",
          body: "Sync your phone number, calendar, and existing leads. No technical setup on your end, our Chandler-based team handles it.",
        },
        {
          icon: "/images/call-step-2.svg",
          alt: "Step two, We train the AI on your business.",
          title: "We train the AI on your business.",
          body: "Your services, your pricing, your booking rules, so it responds like a real member of your team, not a generic chatbot.",
        },
        {
          icon: "/images/call-step-3.svg",
          alt: "Step three, Every lead gets answered.",
          title: "Every lead gets answered.",
          body: "Text, chat, or social, the AI replies in seconds, qualifies the lead, and books the appointment straight to your calendar.",
        },
      ],
      outro: "Most Gilbert-area businesses are live within 48 hours.",
    },
    {
      type: "compare",
      title: "AI Appointment Setter Cost vs. Hiring in Gilbert",
      headers: ["Details", "Front-Desk Hire", "Viking's AI Appointment Setter"],
      rows: [
        ["Monthly cost", "$2,000+ before benefits", "Starts at $297"],
        ["Hours covered", "Business hours only", "24/7, including nights and weekends"],
        ["Leads handled at once", "One at a time", "Every lead, at once"],
        ["Hiring and training", "Required, ongoing", "None"],
        ["Turnover risk", "Real, recurring cost", "None"],
        ["Contract", "Often required", "No contracts"],
      ],
    },
    {
      type: "local",
      title: "Built in Chandler, working for businesses coast to coast",
      paragraphs: [],
    },
    { type: "reviews" },
  ],
  faqTitle: "Frequently Asked Questions",
  faqContextLabel: "AI Appointment Setter in Gilbert",
  faqs: [
    {
      q: "What is an AI appointment setter?",
      a: "An AI appointment setter is software that responds to incoming leads by text, chat, or social media, holds a real conversation to understand what they need, and books a qualified appointment directly to your calendar, without anyone on your team having to manually reply.",
    },
    {
      q: "How does Viking's AI appointment setter work in Gilbert specifically?",
      a: "Every Gilbert client works directly with Viking's Chandler-based team for setup, not an outsourced call center. Your team reviews the AI's responses, business hours, and booking rules with a real person before it goes live, and most businesses are fully set up within 48 hours.",
    },
    {
      q: "Does it work for a practice serving mostly families with young kids?",
      a: "Yes. The AI can be trained on family-specific qualifying questions (a first pediatric visit, a family membership inquiry) so the conversation actually fits who's messaging you.",
    },
    {
      q: "Does the AI appointment setter replace my staff?",
      a: "No. It handles the first response and qualification so your team only spends time on leads that are actually ready to book. Your staff still runs the appointment and the relationship, the AI just makes sure no lead goes cold while they are busy with something else.",
    },
    {
      q: "How much does it cost?",
      a: "Viking's plans start at $297 a month, flat, with no contracts and no per-seat fees. Compare that to a single front-desk hire in the Gilbert market, which runs well over $2,000 a month before benefits, and the AI pays for itself well before the end of the first month for most businesses.",
    },
    {
      q: "What happens if a customer asks something the AI cannot answer?",
      a: "The AI hands the conversation to your team in real time, with the full conversation history attached, so nothing gets lost and the customer never has to repeat themselves.",
    },
  ],
  finalCta: {
    title: "Ready to Stop Losing Leads to Whoever Replies First?",
    body: "Book a free demo and we will show you exactly how Viking would work for your business, using your real numbers, with a team that is a short drive from your office, not a continent away.",
    ctaLabel: "Book My Free Demo",
    phoneNote: "Speak to a real person in Chandler, Arizona.",
  },
};

export default data;
