import type { ComparisonPageData } from "@/lib/comparisons";

const data: ComparisonPageData = {
  slug: "viking-marketing-vs-bookr",
  competitorName: "Bookr",
  competitorUrl: "https://bookrhq.com/",
  h1: "Viking Marketing vs Bookr — Comparing Price and Fit for Local Service Businesses",
  seo: {
    title: "Viking Marketing vs Bookr: AI Appointment Setter Pricing",
    description:
      "Viking Marketing starts at $297/mo. Bookr's published plan is $2,000/mo. Compare features, channels, and who each AI appointment setter fits best.",
    keywords: ["viking marketing vs bookr", "bookr alternative", "bookr pricing"],
  },
  disclosure: "Bookr facts sourced from bookrhq.com, checked 2026-08-15.",
  intro: [
    "Both tools promise the same core outcome: an AI that answers inbound leads over text and chat, qualifies them, and books the job. The clearest published difference is price — Viking's plans start at $297/mo, while Bookr's published plan is a flat $2,000/mo. Bookr's own pricing page is scoped specifically to med spas with $300k–$1M in revenue, while its homepage references other verticals like dental, solar, and real estate — worth noting if you're outside that specific bracket.",
  ],
  featureMatrix: [
    { feature: "SMS / text replies", vikingStatus: "yes", competitorStatus: "yes" },
    { feature: "Web chat widget", vikingStatus: "yes", competitorStatus: "yes" },
    { feature: "Instagram DM", vikingStatus: "yes", competitorStatus: "yes" },
    { feature: "Facebook Messenger", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Google Business Message", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Email follow-up sequences", vikingStatus: "partial", vikingNote: "Not confirmed standalone", competitorStatus: "yes" },
    { feature: "Live phone-call answering", vikingStatus: "no", vikingNote: "Text/chat only", competitorStatus: "no", competitorNote: "Text/chat only" },
    { feature: "Missed Call Text Back", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Direct calendar booking", vikingStatus: "yes", competitorStatus: "yes", competitorNote: "Via GoHighLevel" },
    { feature: "Automated appointment reminders", vikingStatus: "partial", vikingNote: "Not confirmed standalone", competitorStatus: "yes", competitorNote: "24hr/2hr" },
    { feature: "No-show recovery", vikingStatus: "no", competitorStatus: "yes" },
    { feature: "CRM / lead & customer tracking", vikingStatus: "yes", vikingNote: "Built-in", competitorStatus: "no", competitorNote: "Relies on GHL" },
    { feature: "Review automation", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Database reactivation (win-back)", vikingStatus: "yes", competitorStatus: "no", competitorNote: "Not listed" },
    { feature: "Published pricing", vikingStatus: "yes", vikingNote: "3 tiers, $297–$997/mo", competitorStatus: "yes", competitorNote: "1 tier, $2,000/mo flat" },
    { feature: "Performance guarantee", vikingStatus: "no", vikingNote: "Not published", competitorStatus: "yes", competitorNote: "No bookings in 30 days, no charge" },
  ],
  matrixSourceNote:
    "Sources: Viking Marketing pricing (vikingmarketing.ai/pricing, checked 2026-08-15); Bookr (bookrhq.com and bookrhq.com/pricing, checked 2026-08-15). Items marked \"Not listed\" mean the feature does not appear on the vendor's public site as of the date checked, not that it's confirmed absent.",
  overlapTitle: "Where They Overlap",
  overlapBody:
    "Same category: both are text/chat-first AI front-desk tools, neither answers live phone calls, both integrate with GoHighLevel-style booking flows, and both target local, appointment-driven service businesses rather than enterprise sales teams.",
  differencesTitle: "Where They Differ",
  differences: [
    {
      title: "Price, by a wide margin",
      body: "Bookr's only published plan is $2,000/month flat, with a 30-day performance guarantee to offset the risk. Viking's lowest tier is $297/month — roughly 7x less at entry, with three tiers ($297/$497/$997) to match business size rather than one flat rate. If your business can't absorb a $2,000/mo line item on day one, that's a real qualifying filter before you look at feature lists.",
    },
    {
      title: "Vertical focus and scope",
      body: "Bookr's homepage names several verticals (med spa, dental, solar/roofing, real estate, chiropractic), but its own pricing page frames the offer specifically around med spas doing $300k–$1M in annual revenue — a narrower scope than the homepage implies, and worth clarifying with them directly if you're in a different vertical or revenue band. Viking's pricing applies across its full range of published industry pages without a stated revenue floor.",
    },
    {
      title: "Platform breadth",
      body: "Bookr layers its AI front desk on top of a GoHighLevel account. Viking's CRM, review automation, and database reactivation are part of the same platform and price, not a separate add-on integration.",
    },
    {
      title: "Risk structure",
      body: "Bookr publishes an explicit 30-day performance guarantee (\"if we don't book qualified appointments, you don't pay\") — a concrete, buyer-friendly commitment. Viking does not publish an equivalent guarantee on its pricing page as of this writing; ask directly if that matters to your decision.",
    },
  ],
  pricingRows: [
    { label: "Starting price", viking: "$297/mo", competitor: "$2,000/mo (single plan)" },
    { label: "Setup fee", viking: "Not published as separate", competitor: "Not published as separate (included)" },
    { label: "Guarantee", viking: "Not published", competitor: "30-day performance guarantee" },
  ],
  pricingNote: "Pricing changes — verify current numbers on each vendor's site before deciding. Checked 2026-08-15.",
  pickViking:
    "Budget matters at the $297–$997/mo range, you want CRM, review automation, and win-back campaigns bundled in, or you're outside Bookr's stated med-spa/$300k–$1M revenue framing.",
  pickCompetitor:
    "You specifically run a med spa in that revenue range, you want a single flat price with a stated performance guarantee, and no-show recovery/reminder automation is a priority feature for you.",
  faqs: [
    {
      q: "Is Bookr only for med spas?",
      a: "Bookr's homepage lists other verticals (dental, solar/roofing, real estate, chiropractic), but its published pricing page is scoped specifically to med spas with $300k–$1M in revenue. Confirm directly with Bookr if you're outside that bracket.",
    },
    {
      q: "Does Viking Marketing offer a performance guarantee like Bookr's?",
      a: "Not published on Viking's pricing page as of 2026-08-15. If a money-back/performance guarantee is a deciding factor, ask each vendor directly for current terms.",
    },
    {
      q: "Which is cheaper?",
      a: "Viking Marketing's published entry price ($297/mo) is significantly lower than Bookr's single published plan ($2,000/mo). Compare what's included at each price point, not just the headline number — Bookr's flat price includes reminders and no-show recovery that aren't confirmed as standalone Viking features.",
    },
  ],
  lastUpdated: "2026-08-15",
  competitorPrice: { amount: "2000", note: "Single published plan, flat monthly fee, med-spa focused pricing page." },
};

export default data;
