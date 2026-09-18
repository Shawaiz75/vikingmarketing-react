import type { ComparisonPageData } from "@/lib/comparisons";

const data: ComparisonPageData = {
  slug: "viking-marketing-vs-settr",
  competitorName: "Settr",
  competitorUrl: "https://settr.app/",
  h1: "Viking Marketing vs Settr — Which AI Appointment Setter Fits Your Business?",
  seo: {
    title: "Viking Marketing vs Settr: AI Appointment Setter (2026)",
    description:
      "Compare Viking Marketing and Settr — pricing, channels, and who each AI appointment setter is really built for. Transparent pricing vs. demo-gated.",
    keywords: ["viking marketing vs settr", "settr alternative", "settr pricing"],
  },
  disclosure: "Settr facts sourced from settr.app, checked 2026-08-15.",
  intro: [
    "Both Viking Marketing and Settr auto-reply to inbound leads over text, DM, and chat, qualify them, and book them straight to a calendar. The biggest practical difference for a buyer: Viking publishes its pricing ($297–$997/mo) up front; Settr requires a demo call before it will disclose cost. If you run a dentist, med spa, gym, or home-service business and want to compare real numbers before booking a sales call, this page has them.",
  ],
  featureMatrix: [
    { feature: "SMS / text replies", vikingStatus: "yes", competitorStatus: "yes" },
    { feature: "Web chat widget", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Instagram DM", vikingStatus: "yes", competitorStatus: "yes" },
    { feature: "WhatsApp", vikingStatus: "partial", vikingNote: "Not confirmed", competitorStatus: "yes" },
    { feature: "Facebook Messenger", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Google Business Message", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Live phone-call answering", vikingStatus: "no", vikingNote: "Text/chat only", competitorStatus: "no", competitorNote: "Text/chat only; voice-note replies on Instagram" },
    { feature: "Missed Call Text Back", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Direct calendar booking", vikingStatus: "yes", competitorStatus: "yes" },
    { feature: "CRM / lead & customer tracking", vikingStatus: "yes", vikingNote: "Built-in", competitorStatus: "no", competitorNote: "Not listed as standalone" },
    { feature: "Review automation", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Database reactivation (win-back)", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Published pricing", vikingStatus: "yes", vikingNote: "$297–$997/mo", competitorStatus: "no", competitorNote: "Demo-gated" },
    { feature: "Setup time claimed", vikingStatus: "yes", vikingNote: "Live in 48 hours", competitorStatus: "partial", competitorNote: "\"Done-for-you\", timeline not published" },
  ],
  matrixSourceNote:
    "Sources: Viking Marketing pricing (vikingmarketing.ai/pricing, checked 2026-08-15); Settr (settr.app, checked 2026-08-15 — FAQ, feature list, homepage copy). Items marked \"Not listed\" mean the feature does not appear on the vendor's public site as of the date checked, not that it's confirmed absent.",
  overlapTitle: "Where They Overlap",
  overlapBody:
    "Both are fundamentally text/chat-first, not voice/call-answering tools — a meaningful category distinction if you were expecting either to pick up the phone. Neither auto-answers live calls; Settr's only voice element is an optional AI-cloned voice-note reply, limited to Instagram. Both promise 24/7 automated qualification and direct booking so a lead never sits unanswered overnight.",
  differencesTitle: "Where They Differ",
  differences: [
    {
      title: "Pricing transparency",
      body: "Viking lists three plans ($297, $497, $997/mo) on its public pricing page. Settr's FAQ confirms a \"one-time build, then a simple monthly management fee\" but the number is only revealed on a sales call — there's no published /pricing page (a request to settr.app/pricing returns a 404). If comparing cost matters to you before you'll book a call, that's a real difference in buying experience, not just a feature checkbox.",
    },
    {
      title: "Channel breadth",
      body: "Settr covers Instagram, WhatsApp, SMS, and email. Viking adds a native web chat widget, Facebook Messenger, and Google Business Message on top of SMS and Instagram — relevant if your leads come through your website or Google Business Profile rather than social DMs.",
    },
    {
      title: "Platform scope",
      body: "Settr is positioned as a lead-response and booking layer. Viking bundles the same lead-response/booking function with a built-in CRM, automated review requests, and database reactivation (win-back campaigns to old/dead leads) as part of the same platform, rather than as separate purchases.",
    },
    {
      title: "Verticals served",
      body: "Settr's own copy leans toward coaches, consultants, and agencies, with home-service businesses as one category among several. Viking is built specifically around local, in-person service businesses — dentists, med spas, gyms, HVAC/plumbing/electrical/roofing, real estate, insurance, and similar — which shows up in its industry-specific landing pages and qualifying questions.",
    },
  ],
  pricingRows: [
    { label: "Starting price", viking: "$297/mo", competitor: "Not published" },
    { label: "Contract", viking: "Not published as locked-in", competitor: "No minimum, cancel anytime" },
    { label: "Setup fee", viking: "Not published as separate", competitor: "Included in \"one-time build\"" },
  ],
  pricingNote: "Pricing changes — verify current numbers on each vendor's site before deciding. Checked 2026-08-15.",
  pickViking:
    "You want to see exact pricing before a sales conversation, you run a local service business (dental, med spa, gym, home services, real estate, insurance), or you want lead-response, CRM, review automation, and win-back campaigns in one platform.",
  pickCompetitor:
    "Your leads live primarily on Instagram/WhatsApp, you're a coach/consultant/agency rather than a brick-and-mortar service business, and you're comfortable discussing pricing on a call before seeing a number.",
  faqs: [
    {
      q: "Does either tool answer phone calls?",
      a: "No. Both Viking Marketing and Settr are text/chat-first — they reply via message, not by picking up or making calls. Settr offers an optional AI voice-note reply feature limited to Instagram; this is not live call-answering. Viking's \"Missed Call Text Back\" sends an automatic text after a call goes unanswered on your existing number — it doesn't answer the call itself.",
    },
    {
      q: "Why doesn't Settr publish pricing?",
      a: "Settr's FAQ states pricing is sized to lead volume and disclosed on a demo call, with no minimum contract. That's a legitimate pricing model — just be aware you'll need a call to get a number, unlike Viking's published tiers.",
    },
    {
      q: "Is Settr a good fit for a dental practice or med spa?",
      a: "Settr's own homepage lists med spas and similar local-service verticals among its supported industries, but its primary framing (per its public copy) leans toward coaches, consultants, and agencies. Compare qualifying-question examples on each vendor's industry pages before deciding.",
    },
  ],
  lastUpdated: "2026-08-15",
};

export default data;
