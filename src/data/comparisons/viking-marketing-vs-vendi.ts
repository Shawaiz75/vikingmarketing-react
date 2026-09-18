import type { ComparisonPageData } from "@/lib/comparisons";

const data: ComparisonPageData = {
  slug: "viking-marketing-vs-vendi",
  competitorName: "Vendi",
  competitorUrl: "https://vendi.so/",
  h1: "Viking Marketing vs Vendi — These Solve the Same Problem in Different Ways",
  seo: {
    title: "Viking Marketing vs Vendi: Text AI vs Voice AI Compared",
    description:
      "Vendi answers phone calls. Viking Marketing replies by text, chat, and SMS. Compare the two categories of AI lead response for service businesses.",
    keywords: ["viking marketing vs vendi", "vendi ai receptionist alternative", "vendi alternative"],
  },
  disclosure: "Vendi facts sourced from vendi.so, checked 2026-08-15.",
  intro: [
    "Before comparing features, it's worth being direct about the biggest difference: Vendi is a voice/call-answering AI — its own homepage leads with \"Vendi answers calls\" and \"answers in 1 ring.\" Viking Marketing is text/SMS/chat-first and does not answer phone calls. If you specifically need an AI to pick up your phone, Vendi is built for that and Viking isn't. If you want leads handled by text, chat, and DM instead of voice, that's Viking's category. Read on for where they actually overlap.",
  ],
  featureMatrix: [
    { feature: "Live phone-call answering", vikingStatus: "no", vikingNote: "Not offered", competitorStatus: "yes", competitorNote: "Core feature — \"answers in 1 ring\"" },
    { feature: "Missed Call Text Back", vikingStatus: "yes", competitorStatus: "partial", competitorNote: "Not confirmed as distinct — calls answered directly instead" },
    { feature: "SMS / text replies", vikingStatus: "yes", competitorStatus: "yes", competitorNote: "Part of unified inbox" },
    { feature: "Web chat widget", vikingStatus: "yes", competitorStatus: "yes", competitorNote: "Part of unified inbox" },
    { feature: "WhatsApp", vikingStatus: "partial", vikingNote: "Not confirmed", competitorStatus: "yes" },
    { feature: "Instagram / Facebook DM", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Google Business Message", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Direct calendar booking", vikingStatus: "yes", competitorStatus: "yes" },
    { feature: "Dispatch / job-assignment automation", vikingStatus: "no", vikingNote: "Not offered", competitorStatus: "yes", competitorNote: "\"Dispatch AI\"" },
    { feature: "Review / dead-lead follow-up", vikingStatus: "yes", vikingNote: "Review automation, database reactivation", competitorStatus: "yes", competitorNote: "\"Follow-Up AI\"" },
    { feature: "Daily performance summary", vikingStatus: "no", competitorStatus: "yes", competitorNote: "\"Daily Brief\"" },
    { feature: "CRM / lead & customer tracking", vikingStatus: "yes", vikingNote: "Built-in", competitorStatus: "partial", competitorNote: "Implied via unified inbox, not confirmed standalone" },
    { feature: "Published pricing", vikingStatus: "yes", vikingNote: "3 tiers, $297–$997/mo", competitorStatus: "no", competitorNote: "Conflicting free-trial claims, no dollar figures" },
  ],
  matrixSourceNote:
    "Sources: Viking Marketing pricing (vikingmarketing.ai/pricing, checked 2026-08-15); Vendi (vendi.so and vendi.so/pricing, checked 2026-08-15 — pricing page plan cards did not load at time of check). Items marked \"Not listed\"/\"Not confirmed\" mean the feature does not appear on the vendor's public site as of the date checked, not that it's confirmed absent.",
  overlapTitle: "Where They Overlap",
  overlapBody:
    "Both target local, appointment-driven service businesses (HVAC, plumbing, electrical, roofing, real estate, and similar), both promise 24/7 automated response so leads don't go cold overnight, and both include SMS and web chat as part of their channel mix alongside their primary channel.",
  differencesTitle: "Where They Differ — And This Is the Real Decision",
  differences: [
    {
      title: "Voice vs. text as the core channel",
      body: "This is the category difference, not a minor feature gap. Vendi's positioning is built around answering the phone: \"Vendi answers calls,\" addressing businesses that \"lose 30% of leads to voicemail.\" Viking Marketing does not answer calls at all — its \"Missed Call Text Back\" feature sends an automatic text after a call goes unanswered on your existing line, which is a different mechanism than Vendi picking the call up live. If live call-answering is a hard requirement, Vendi fits that need and Viking does not; if you'd rather every lead interaction happen over text/chat where there's a written record, Viking fits that instead.",
    },
    {
      title: "Operational scope",
      body: "Vendi bundles dispatch (assigning technicians, scheduling teams) and a daily performance brief alongside lead response — features aimed at the operational side of running a field-service business, not just the lead-response side. Viking's platform stays focused on lead response, booking, CRM, reviews, and reactivation campaigns; it doesn't include job dispatch.",
    },
    {
      title: "Pricing transparency",
      body: "Viking publishes three tiers ($297/$497/$997/mo). Vendi's own site has conflicting claims about its trial terms (the homepage says \"first 30 days are free,\" the pricing page says \"start free for 7 days\") and its plan-pricing cards were not loading as of this check — so an exact price isn't publicly confirmable right now. Contact Vendi directly for current numbers.",
    },
  ],
  pricingRows: [
    { label: "Starting price", viking: "$297/mo", competitor: "Not publicly confirmable at time of check" },
    { label: "Free trial", viking: "Not published", competitor: "Stated as free (7 or 30 days — site listed both)" },
  ],
  pricingNote: "Pricing changes — verify current numbers on each vendor's site before deciding. Checked 2026-08-15.",
  pickViking:
    "You want leads and customers handled over text, chat, and DM with a written record, you don't need call-answering or job dispatch, and you want published pricing before a sales call.",
  pickCompetitor:
    "You specifically need an AI to answer inbound phone calls live, you also want dispatch/scheduling automation for field technicians, and you're comfortable confirming pricing directly with their team.",
  faqs: [
    {
      q: "Does Viking Marketing answer phone calls like Vendi does?",
      a: "No. Viking Marketing is text/SMS/chat-based. Its Missed Call Text Back feature sends an automatic text after a call goes unanswered — it does not pick up or hold a live voice conversation the way Vendi's call-answering feature does.",
    },
    {
      q: "Is Vendi text-based too?",
      a: "Vendi bundles SMS, WhatsApp, email, and web chat into a \"Unified Inbox,\" but its own homepage copy frames phone-call answering as the primary feature (\"answers in 1 ring\"). Text is a secondary channel in Vendi's positioning, not the primary one the way it is for Viking.",
    },
    {
      q: "Which one should a plumbing or HVAC company choose?",
      a: "It depends on whether you want calls answered live with dispatch and follow-up automation layered around it (Vendi) versus a text-first lead-response and CRM platform without call-answering (Viking). Both explicitly serve this vertical — the deciding factor is the call-answering requirement and whether dispatch automation matters to you.",
    },
  ],
  lastUpdated: "2026-08-15",
};

export default data;
