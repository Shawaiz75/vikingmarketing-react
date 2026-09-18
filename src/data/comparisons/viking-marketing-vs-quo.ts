import type { ComparisonPageData } from "@/lib/comparisons";

const data: ComparisonPageData = {
  slug: "viking-marketing-vs-quo",
  competitorName: "Quo (Sona)",
  competitorUrl: "https://www.quo.com/",
  h1: "Viking Marketing vs Quo — A Focused AI Platform vs. an AI Add-On to a Phone System",
  seo: {
    title: "Viking Marketing vs Quo (Sona): AI Appointment Setter",
    description:
      "Quo's Sona answers calls on top of a full business phone system. Viking Marketing is a purpose-built text/chat AI for local service businesses. Compare.",
    keywords: ["viking marketing vs quo", "quo sona alternative", "openphone ai receptionist alternative"],
  },
  disclosure: "Quo facts sourced from quo.com and public press coverage, checked 2026-08-15.",
  intro: [
    "Quo (formerly OpenPhone, rebranded September 2025 with $105M in growth financing) is a full business phone system whose AI appointment-setting comes from \"Sona,\" a voice agent add-on that answers and routes calls. Viking Marketing is a purpose-built text/SMS/chat AI platform built specifically for local service businesses — it isn't a phone system with AI bolted on, and it doesn't answer calls. Both can get a lead booked; they get there from very different starting points.",
  ],
  featureMatrix: [
    { feature: "Live phone-call answering", vikingStatus: "no", vikingNote: "Not offered", competitorStatus: "yes", competitorNote: "Core feature (Sona voice agent)" },
    { feature: "Missed Call Text Back", vikingStatus: "yes", competitorStatus: "partial", competitorNote: "Sends links/confirmations during a call, not a standalone missed-call feature" },
    { feature: "SMS / text replies", vikingStatus: "yes", vikingNote: "Primary channel", competitorStatus: "partial", competitorNote: "Secondary — used after a voice call" },
    { feature: "Web chat widget", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Instagram / Facebook DM", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Google Business Message", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Multi-language support", vikingStatus: "partial", vikingNote: "Not confirmed", competitorStatus: "yes", competitorNote: "English, Spanish, French" },
    { feature: "No-code call-flow builder", vikingStatus: "no", vikingNote: "N/A — not a phone system", competitorStatus: "yes" },
    { feature: "CRM integrations", vikingStatus: "partial", vikingNote: "Not confirmed which CRMs", competitorStatus: "yes", competitorNote: "HubSpot, Salesforce, Zoho" },
    { feature: "Built-in CRM / lead tracking", vikingStatus: "yes", competitorStatus: "partial", competitorNote: "Positioned as phone-system add-on, not a CRM" },
    { feature: "Review automation", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Database reactivation (win-back)", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Multi-location support", vikingStatus: "partial", vikingNote: "Not confirmed", competitorStatus: "yes" },
    { feature: "Published pricing", vikingStatus: "yes", vikingNote: "3 tiers, $297–$997/mo flat", competitorStatus: "yes", competitorNote: "$15–$47/user/mo + call credits" },
  ],
  matrixSourceNote:
    "Sources: Viking Marketing pricing (vikingmarketing.ai/pricing, checked 2026-08-15); Quo (quo.com/product/ai/appointment-setter, quo.com/sona, quo.com/pricing, checked 2026-08-15); G2 rating via search snippet; funding/rebrand via PR Newswire, 2026-08-15. Items marked \"Not listed\"/\"Not confirmed\" mean the feature does not appear on the vendor's public site as of the date checked, not that it's confirmed absent.",
  overlapTitle: "Where They Overlap",
  overlapBody:
    "Both get a lead from first contact to a booked appointment with minimal human intervention, both integrate SMS as part of the booking flow, and both are aimed at small businesses that can't staff a 24/7 front desk.",
  differencesTitle: "Where They Differ — And It's Mostly About What Kind of Product Each One Is",
  differences: [
    {
      title: "What you're actually buying",
      body: "Quo is a business phone system (VoIP, calling, texting) first; Sona is an AI feature inside it. If you don't need a new phone system — you already have a business line — you'd be adopting a whole phone platform to get the AI feature. Viking Marketing is not a phone system at all; it's a text/chat/DM lead-response and CRM platform that layers on top of whatever phone number or channels you already use.",
    },
    {
      title: "Voice-first vs. text-first",
      body: "Sona's job is answering and routing live calls, with SMS used afterward to send a booking link or confirmation. Viking's whole model is the reverse: text, chat, and DM are the primary interaction, and there's no live call-answering component at all.",
    },
    {
      title: "Company maturity and review volume",
      body: "Quo (as OpenPhone/Quo) is an established, well-funded company — $105M in growth financing as of September 2025, a G2 rating of 4.0/5 across 3,200+ reviews, and roughly 90,000 businesses served, per public reporting. That review volume is for Quo's broader phone-system product, not isolated to the Sona appointment-setting feature specifically. This is a materially larger, more established company than the other AI-appointment-setter-specific tools in this comparison series.",
    },
    {
      title: "Pricing structure",
      body: "Quo prices per user ($15–$47/mo depending on tier and billing cycle) plus call-volume credits beyond the included 1,000/mo — a structure that scales with team size and call volume. Viking prices in flat monthly tiers ($297/$497/$997) regardless of team size or message volume, which can be simpler to forecast for a single-location business but may cost more per-seat for a large multi-agent team, or less for a small one — model your own numbers.",
    },
    {
      title: "Industry specificity",
      body: "Viking's pricing, landing pages, and qualifying questions are built around local service verticals specifically (dental, med spa, gyms, home services, real estate, insurance). Quo/Sona is a general small-business tool with call-flow customization rather than vertical-specific templates.",
    },
  ],
  pricingRows: [
    { label: "Starting price", viking: "$297/mo flat", competitor: "$15/user/mo (annual), Starter tier" },
    { label: "Included usage", viking: "Not metered publicly", competitor: "1,000 automation credits/mo (~10 Sona calls)" },
    { label: "Overage cost", viking: "Not applicable (flat tiers)", competitor: "$0.45–$1.00/call depending on package" },
    { label: "Free trial", viking: "Not published", competitor: "7 days" },
  ],
  pricingNote: "Pricing changes — verify current numbers on each vendor's site before deciding. Checked 2026-08-15.",
  pickViking:
    "You want a text/chat-first platform purpose-built for local service businesses, you don't need or want a new phone system, and you want flat, predictable monthly pricing regardless of call/message volume.",
  pickCompetitor:
    "You're evaluating a new business phone system anyway, you specifically need live call-answering with multi-language support and CRM integrations (HubSpot/Salesforce/Zoho), and you want the reassurance of an established company with a large public review base.",
  faqs: [
    {
      q: "Is Quo the same company as OpenPhone?",
      a: "Yes. OpenPhone rebranded to Quo in September 2025 alongside $105M in growth financing, per PR Newswire and other outlets. Sona is Quo's AI voice-agent feature for call answering and appointment setting.",
    },
    {
      q: "Does Sona replace a CRM?",
      a: "No — Sona integrates with existing CRMs (HubSpot, Salesforce, Zoho per Quo's product page) rather than including one. Viking Marketing includes CRM/lead tracking as part of its own platform.",
    },
    {
      q: "Which is better for a business that gets most leads through text messages, not phone calls?",
      a: "Viking Marketing is built around that scenario specifically — text/SMS/chat is the primary channel, not an add-on to voice. Quo's Sona is built the other way around, with SMS as a supporting action to a voice call.",
    },
  ],
  lastUpdated: "2026-08-15",
  competitorPrice: { amount: "15", note: "Starter tier, per user/month, billed annually, plus call-volume credits." },
};

export default data;
