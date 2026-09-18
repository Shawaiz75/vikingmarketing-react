import type { TemplatePageData } from "@/lib/templates";

const data: TemplatePageData = {
  slug: "insurance-agent-crm",
  breadcrumbName: "CRM for Insurance Agents",
  seo: {
    title: "CRM for Insurance Agents | Viking Marketing",
    description:
      "Viking's CRM for insurance agents tracks every policy, renewal, and client conversation in one place, with an AI that answers quote requests the moment they come in.",
    ogImage: "/images/6a3c14746a414441906e-ce6027a2e6c3.webp",
    keywords: ["insurance agent CRM", "insurance CRM software", "policy renewal tracking software", "CRM for insurance agencies"],
  },
  schema: {
    kinds: ["organization", "person", "service", "webPage", "howTo", "faq"],
    serviceName: "CRM for Insurance Agents",
    serviceDescription:
      "Viking's CRM for insurance agents tracks every policy, renewal, and client conversation in one place, with an AI that answers quote requests the moment they come in.",
    howTo: {
      name: "How the Insurance Agent CRM Works",
      description:
        "Viking's AI runs on the same channels and core capabilities covered on the AI appointment setter page, text, web chat, social, and email, trained specifically on insurance intake and renewal tracking.",
    },
  },
  hero: {
    badge: "⚡ Built in Chandler, Arizona · Serving independent agencies nationwide",
    h1: "CRM Software Built for Insurance Agents",
    reviewedBy: "Reviewed by Charlie DeFelice, founder of Viking Marketing",
    lede: "Most agencies lose renewals quietly, not because a client shopped around, but because nobody reached out before the policy lapsed. Viking's CRM keeps every client, policy, and renewal date in one place, tracks the full pipeline from first quote to signed policy, and reminds your team automatically before a renewal window closes. If you're comparing tools specifically for the initial quote-response speed, see our dedicated page on the AI appointment setter for insurance agencies — this page is about what happens after the policy is written.",
    ctaLabel: "Book a Free Demo",
    image: "/images/6a3c2121b3c8655da2a5-bfc327417b32.webp",
    imageAlt: "Insurance agent CRM dashboard showing policy pipeline and renewal tracking | Viking Marketing",
    checkLines: [
      "✓ Tracks every client, policy, and renewal date in one place. ✓ Automatic renewal reminders before a policy lapses.",
      "✓ Full pipeline visibility from quote to signed policy. ✓ Flat price, no per-contact fees",
    ],
  },
  sections: [
    {
      type: "definition",
      title: "What an Insurance Agent CRM Actually Does",
      paragraphs: [
        "An insurance agent CRM is the system of record for every client relationship your agency manages, not just the initial quote, but the full lifecycle: policy details, renewal dates, cross-sell opportunities, and every conversation along the way. A spreadsheet or a generic contact list can hold names and numbers, but it won't tell you which of your 40 renewals this month haven't been contacted yet, or which client asked about adding a commercial policy six months ago and never got a follow-up. Viking's CRM is purpose-built to surface exactly that.",
      ],
    },
    {
      type: "split",
      title: "Why Agencies Lose Renewals They Should Have Kept",
      paragraphs: [
        "A policyholder rarely calls to say they're not renewing. They just let the policy lapse, sometimes because a competitor reached out first with a lower quote, but often simply because nobody from their current agency contacted them before the renewal date. Without a system tracking every upcoming renewal, that outreach depends entirely on someone remembering to check a spreadsheet.",
        "The same gap shows up with cross-sell opportunities. A client who asked about bundling home and auto, or mentioned starting a small business, represents real revenue if someone follows up, and represents nothing if that note gets lost in an inbox.",
        "Viking's CRM closes both gaps by surfacing upcoming renewals and flagged opportunities automatically, so outreach happens on a schedule instead of by memory.",
      ],
      image: "/images/6a3c212107cf451b94a7-66e2b5fffe43.webp",
      imageAlt: "Insurance agent reviewing renewal pipeline in Viking Marketing CRM",
      side: "left",
    },
    {
      type: "iconSteps",
      title: "How the Insurance Agent CRM Works",
      intro:
        "Viking's AI runs on the same channels and core capabilities covered in detail on the AI appointment setter page, text, web chat, social, and email, trained specifically on insurance intake and account management.",
      steps: [
        {
          icon: "/images/call-step-1.svg",
          alt: "Step one, a client or lead enters the system",
          title: "A client or lead enters the system.",
          body: "Whether it's a new quote request or an existing policyholder, every contact and conversation lands in one CRM record instead of scattered across email, text, and a paper file.",
        },
        {
          icon: "/images/call-step-2.svg",
          alt: "Step two, renewals get tracked automatically",
          title: "Renewals get tracked automatically.",
          body: "Every active policy's renewal date is visible on the pipeline, so your team knows exactly who's coming up for renewal this month without checking a separate spreadsheet.",
        },
        {
          icon: "/images/call-step-3.svg",
          alt: "Step three, reminders go out before the deadline",
          title: "Reminders go out before the deadline.",
          body: "Viking sends an automatic outreach message ahead of the renewal window, so the client hears from you before they hear from a competitor.",
        },
        {
          icon: "/images/call-step-4.svg",
          alt: "Step four, cross-sell notes stay visible",
          title: "Cross-sell notes stay visible.",
          body: "When a client mentions a policy type they don't have yet, that note stays attached to their record instead of getting lost, so the follow-up actually happens.",
        },
        {
          icon: "/images/6a29839e944ae1c947bb-60abb83aa4d7.svg",
          alt: "Step five, new quote requests get answered instantly",
          title: "New quote requests get answered instantly.",
          body: "For new business, Viking's AI replies to inbound quote requests in seconds and qualifies them by line of business before handing off to a licensed agent — see the full breakdown on our AI appointment setter for insurance page.",
        },
      ],
    },
    {
      type: "compare",
      title: "Dedicated CRM vs. a Spreadsheet and Sticky Notes",
      headers: ["Task", "Spreadsheet / Manual Tracking", "Viking's CRM"],
      rows: [
        ["Upcoming renewals this month", "Manual filter, easy to miss", "Surfaced automatically"],
        ["Renewal reminder sent on time", "Depends on someone remembering", "Automatic"],
        ["Cross-sell notes retained", "Often lost in email", "Attached to the client record"],
        ["New quote requests answered", "When someone gets to it", "Under 60 seconds, 24/7"],
        ["Full conversation history per client", "Scattered across tools", "One record"],
        ["Cost", "Free, but costs renewals lost to inattention", "From $297/month"],
      ],
      outro:
        "A missed renewal isn't a pricing loss, it's an attention loss. The CRM's job is making sure that never happens because nobody remembered to check.",
    },
    {
      type: "split",
      title: "More Than a Contact List",
      paragraphs: [
        "A lot of \"CRM\" tools for agencies are really just a searchable contact list. They don't flag renewals, they don't remind anyone of anything, and they don't answer new business inquiries.",
        "Viking's CRM is one part of a full platform. The same system that tracks your renewals also:",
      ],
      bullets: [
        "Answers new quote requests instantly by text, chat, and social, qualified by line of business",
        "Auto-replies by text the instant a call goes unanswered, so a missed call never becomes a lost lead",
        "Sends a review request automatically after a policy is bound",
        "Re-engages old leads who requested a quote but never converted",
        "Lets your whole team see and join any client conversation from one shared inbox",
      ],
      bold: "You are not adding another disconnected spreadsheet. You are running one platform that tracks the client relationship from first quote to every renewal after it.",
      image: "/images/6a3c2242659bec99fce3-31af37945806.webp",
      imageAlt: "Insurance agent CRM more than a contact list | Viking Marketing",
      side: "left",
      linkLabel: "See the AI appointment setter for insurance",
      linkHref: "/ai-appointment-setter-for-insurance",
    },
    { type: "reviews" },
    { type: "industryLinks" },
  ],
  faqTitle: "Frequently Asked Questions",
  faqContextLabel: "Insurance Agent CRM",
  faqs: [
    {
      q: "How is this different from the AI appointment setter for insurance page?",
      a: "That page covers how Viking's AI answers and qualifies new inbound quote requests in seconds. This page covers what happens after a policy is written: tracking renewals, retaining cross-sell notes, and keeping the full client relationship visible in one CRM. Both run on the same platform.",
    },
    {
      q: "Can it track renewals across multiple lines of business?",
      a: "Yes. Auto, home, life, and commercial policies can each carry their own renewal date and notes in the same client record, so nothing gets missed regardless of how many policy types a client holds.",
    },
    {
      q: "Does it integrate with my existing agency management system?",
      a: "Viking runs as your CRM and lead-response layer. Ask your account manager during setup about your specific agency management system so we can confirm the best way to keep both in sync for your workflow.",
    },
    {
      q: "How does the renewal reminder actually work?",
      a: "You set the renewal-outreach window for your agency (for example, 45 days before renewal), and Viking automatically flags and sends the reminder to the client, and to your team, when a policy enters that window.",
    },
    {
      q: "How fast can I get this running?",
      a: "Most agencies are fully live within 48 hours. Our Chandler-based team handles the setup, connecting your phone number, calendar, and existing client list.",
    },
  ],
  finalCta: {
    title: "Stop Losing Renewals to Silence, Not to Price",
    body: "Most lost policies were never actually shopped around, they just never heard from you before the deadline. Book a 15-minute walkthrough and see exactly how Viking would track your book of business.",
    ctaLabel: "Book My Free Demo",
    phoneNote: "and talk to a real person in Chandler, Arizona.",
  },
};

export default data;
