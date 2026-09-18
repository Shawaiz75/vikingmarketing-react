import type { TemplatePageData } from "@/lib/templates";

const data: TemplatePageData = {
  slug: "hvac-crm-software",
  breadcrumbName: "HVAC CRM Software",
  seo: {
    title: "HVAC CRM Software | Viking Marketing",
    description:
      "Viking's HVAC CRM tracks every lead, job, and follow-up in one place, with an AI that answers service calls in seconds and books the appointment.",
    ogImage: "/images/6a3c14746a414441906e-ce6027a2e6c3.webp",
    keywords: ["HVAC CRM software", "HVAC scheduling software", "HVAC dispatch software", "CRM for HVAC contractors"],
  },
  schema: {
    kinds: ["organization", "person", "service", "webPage", "howTo", "faq"],
    serviceName: "HVAC CRM Software",
    serviceDescription:
      "Viking's HVAC CRM tracks every lead, job, and follow-up in one place, with an AI that answers service calls in seconds and books the appointment.",
    howTo: {
      name: "How the HVAC CRM Works",
      description:
        "Viking's AI runs on the same channels and core capabilities covered on the AI appointment setter page, text, web chat, social, and email, trained specifically on HVAC service intake.",
    },
  },
  hero: {
    badge: "⚡ Built in Chandler, Arizona · Serving HVAC contractors nationwide",
    h1: "CRM Software Built for HVAC Contractors",
    reviewedBy: "Reviewed by Charlie DeFelice, founder of Viking Marketing",
    lede: "An AC dies at 95 degrees and the homeowner is texting three contractors at once. Whoever replies first, books the job. Viking's HVAC CRM answers every service request in seconds, tracks the job from first contact to invoice, and keeps your dispatch board and customer history in one place instead of scattered across a notepad and a group text.",
    ctaLabel: "Book a Free Demo",
    image: "/images/6a3c2121b3c8655da2a5-bfc327417b32.webp",
    imageAlt: "HVAC CRM software dashboard showing job pipeline and customer history | Viking Marketing",
    checkLines: [
      "✓ Replies to service requests in seconds, 24/7. ✓ Tracks every job from call to invoice.",
      "✓ Automatic maintenance and seasonal follow-up. ✓ Flat price, no per-job fees",
    ],
  },
  sections: [
    {
      type: "definition",
      title: "What an HVAC CRM Actually Does",
      paragraphs: [
        "An HVAC CRM is software that keeps every customer, job, and follow-up in one system instead of split across a phone, a whiteboard, and a spreadsheet. A good one for a contractor does two jobs at once: it answers new leads fast enough to win the job, and it tracks the customer relationship long enough to bring them back for the next tune-up, filter change, or system replacement. Viking combines both in one platform, with an AI that handles the first reply and a CRM underneath that keeps the record straight.",
      ],
    },
    {
      type: "split",
      title: "Why HVAC Leads Get Lost Between the Truck and the Office",
      paragraphs: [
        "A homeowner with a dead AC unit doesn't wait for a callback. They text or call two or three companies at once and book with whoever answers first and sounds like they know what's going on. If your team is mid-install or on a service call, that lead goes to voicemail or an unanswered text, and it's gone.",
        "The second failure point is after the job. A completed tune-up with no follow-up system means no reminder before next summer, no filter-replacement nudge, and no review request. Most HVAC contractors are sitting on years of past customers who would book again if someone simply reached out at the right time.",
        "Viking's AI fixes the first-response problem the moment a lead comes in, and the CRM underneath fixes the second by keeping every past customer on file and reachable.",
      ],
      image: "/images/6a3c212107cf451b94a7-66e2b5fffe43.webp",
      imageAlt: "HVAC dispatcher reviewing job pipeline in Viking Marketing CRM",
      side: "left",
    },
    {
      type: "iconSteps",
      title: "How the HVAC CRM Works",
      intro:
        "Viking's AI runs on the same channels and core capabilities covered in detail on the AI appointment setter page, text, web chat, social, and email, trained specifically on HVAC service and install intake.",
      steps: [
        {
          icon: "/images/call-step-1.svg",
          alt: "Step one, a customer reaches out",
          title: "A customer reaches out.",
          body: "No cool air, a strange noise, or a quote request for a new system, by text, web chat, Facebook, or Google Business message. It lands in your Viking inbox the moment it arrives.",
        },
        {
          icon: "/images/call-step-2.svg",
          alt: "Step two, the AI replies in seconds",
          title: "The AI replies in seconds.",
          body: "It greets the customer, asks whether it's a repair, maintenance, or install, and starts gathering the details a tech needs before rolling a truck.",
        },
        {
          icon: "/images/call-step-3.svg",
          alt: "Step three, it qualifies the job type",
          title: "It qualifies the job type.",
          body: "System age, symptom, and urgency get captured up front, so your dispatcher isn't starting from zero when the ticket lands in the CRM.",
        },
        {
          icon: "/images/call-step-4.svg",
          alt: "Step four, it books the appointment",
          title: "It books the appointment.",
          body: "The AI offers real openings straight from your calendar and confirms the service window, no back-and-forth phone tag.",
        },
        {
          icon: "/images/6a29839e944ae1c947bb-60abb83aa4d7.svg",
          alt: "Step five, the job stays tracked",
          title: "The job stays tracked end to end.",
          body: "The customer's history, the completed job, and any follow-up (maintenance reminder, review request, seasonal check-in) live in the same CRM record automatically.",
        },
      ],
    },
    {
      type: "compare",
      title: "AI Dispatcher vs. a Human Answering Service",
      headers: ["Offer", "Human Answering Service / Front Desk", "Viking's AI"],
      rows: [
        ["Cost", "$2,800 to $3,600/month*", "From $297/month"],
        ["Hours", "Business hours, or after-hours upcharge", "24/7, no upcharge"],
        ["Response time", "Minutes to hours", "Under 60 seconds"],
        ["Leads handled at once", "One", "Unlimited"],
        ["Logs job details to a CRM", "Manual, if at all", "Automatically"],
        ["Follow-up reminders", "Requires a separate system", "Built in"],
      ],
      footnote:
        "*Based on the BLS median wage for dispatchers ($21.20/hour, May 2024) plus typical after-hours answering-service surcharges. Source: bls.gov/ooh/office-and-administrative-support/dispatchers.htm",
      outro:
        "A dispatcher's time is worth more spent coordinating trucks and techs than manually re-typing intake notes. The AI handles the first response and the qualifying questions, so your team only picks up when a real decision needs a human.",
    },
    {
      type: "split",
      title: "More Than a Scheduling Tool",
      paragraphs: [
        "Most HVAC scheduling tools stop at the calendar. They don't track the customer relationship past the invoice, and they don't have any connection to your reviews or your existing tools.",
        "Viking's HVAC CRM is one part of a full platform. The same system that books the appointment also:",
      ],
      bullets: [
        "Auto-replies by text the instant a call goes unanswered, so a tech on a job never turns into a lost lead",
        "Logs the full job history and equipment notes in one customer record",
        "Re-engages old customers who haven't booked a tune-up in a year or more",
        "Sends a review request automatically once a job is marked complete",
        "Lets your office team see and join any conversation from one shared inbox",
      ],
      bold: "You are not adding another disconnected scheduling app. You are running one platform that handles the customer from first call to next season's tune-up.",
      image: "/images/6a3c2242659bec99fce3-31af37945806.webp",
      imageAlt: "HVAC CRM more than a booking tool | Viking Marketing",
      side: "left",
      linkLabel: "See the full platform",
      linkHref: "/",
    },
    { type: "reviews" },
    { type: "industryLinks" },
  ],
  faqTitle: "Frequently Asked Questions",
  faqContextLabel: "HVAC CRM",
  faqs: [
    {
      q: "Does this replace my dispatch software?",
      a: "No. Viking handles the first customer reply, qualifies the job, and books it to your calendar. Your dispatcher still assigns the truck and manages the day's route. Viking's CRM keeps the customer and job record clean so your dispatcher isn't re-entering details by hand.",
    },
    {
      q: "Can it tell the difference between a repair, maintenance, and install request?",
      a: "Yes. The AI asks qualifying questions specific to the type of request, symptom and urgency for repairs, system age and unit count for installs, so your team gets a useful ticket instead of a bare name and number.",
    },
    {
      q: "What's the difference between this and a human answering service?",
      a: "A human answering service typically costs $2,800 to $3,600 a month based on national wage data for dispatch and customer-service roles, works limited hours, and handles one call at a time. Viking's AI starts at $297 a month, runs 24/7, and replies to every lead at once, then logs the details straight into your CRM.",
    },
    {
      q: "Will it work for both residential and commercial HVAC?",
      a: "Yes. The AI is trained on your specific business, so an HVAC company that does both residential service calls and commercial contracts can have the AI ask the right qualifying questions for each.",
    },
    {
      q: "How fast can I get this running?",
      a: "Most HVAC contractors are fully live within 48 hours. Our Chandler-based team handles the setup, connecting your phone number, calendar, and existing customer list.",
    },
  ],
  finalCta: {
    title: "Every No-Cool-Air Call Deserves a Faster Answer Than Voicemail",
    body: "Every service request that sits unanswered for an hour is a job your competitor is about to book. Book a 15-minute walkthrough and see exactly how Viking's HVAC CRM would handle your leads and your schedule.",
    ctaLabel: "Book My Free Demo",
    phoneNote: "and talk to a real person in Chandler, Arizona.",
  },
};

export default data;
