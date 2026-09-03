// Navigation + footer link data (mirrors the live site's structure exactly,
// including links that are present but not yet wired to pages).
export type NavLink = { label: string; href: string; external?: boolean };

export const FEATURES_MENU: NavLink[] = [
  { label: "AI Appointment Setter", href: "/ai-appointment-setter" },
  { label: "Missed Call Text Back", href: "/missed-call-text-back" },
  { label: "All in One Inbox", href: "/all-in-one-inbox" },
  { label: "Reviews on Autopilot", href: "/review-generation-software" },
  { label: "Web Chat", href: "/website-chat-widget" },
  { label: "Payments", href: "/crm-with-invoicing" },
  { label: "Text to Pay", href: "/sms-payment-link" },
  { label: "Lead & Customer Tracking", href: "/lead-management-software-for-small-business" },
  { label: "Database Reactivation", href: "/database-reactivation" },
];

export const MAIN_NAV: (NavLink & { menu?: NavLink[] })[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Features", href: "/ai-appointment-setter", menu: FEATURES_MENU },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/book-a-call" },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Viking", href: "/about-us" },
      { label: "Our Team", href: "/about-us" },
      { label: "Contact Us", href: "/book-a-call" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/about-us" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-and-conditions" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "🔥 AI Appointment Setter", href: "/ai-appointment-setter" },
      { label: "Missed Call Text Back", href: "/missed-call-text-back" },
      { label: "All In One Inbox", href: "/all-in-one-inbox" },
      { label: "AI Web Chat", href: "/website-chat-widget" },
      { label: "Review Automation", href: "/review-generation-software" },
      { label: "Database Reactivation", href: "/database-reactivation" },
      { label: "Payments & Invoicing", href: "/crm-with-invoicing" },
      { label: "Text to Pay", href: "/sms-payment-link" },
      { label: "Lead & Customer Tracking", href: "/lead-management-software-for-small-business" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/ai-appointment-setter-for-healthcare" },
      { label: "Dentists", href: "/appointment-setter-ai-dentist" },
      { label: "Insurance Agencies", href: "/ai-appointment-setter-for-insurance" },
      { label: "Real Estate Agents", href: "/ai-appointment-setter-for-real-estate" },
      { label: "SaaS Agencies", href: "/ai-appointment-setter-for-saas" },
      { label: "Solar Companies", href: "/ai-appointment-setter-for-solar-leads" },
      { label: "Marketing Agencies", href: "/ai-appointment-setter-for-agencies" },
      { label: "B2B Sales", href: "/ai-appointment-setter-for-b2b-sales" },
      { label: "Mortgage", href: "/ai-appointment-setter-for-mortgage" },
      { label: "See All Industries", href: "/industries" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Phoenix", href: "/ai-appointment-setter-phoenix" },
      // The live site lists these cities without destination pages yet.
      { label: "Tempe", href: "/locations" },
      { label: "Scottsdale", href: "/locations" },
      { label: "Mesa", href: "/locations" },
      { label: "Chandler", href: "/locations" },
      { label: "Gilbert", href: "/locations" },
      { label: "Glendale", href: "/locations" },
      { label: "All Arizona Cities", href: "/locations" },
      { label: "See All Locations", href: "/locations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      // Placeholder links on the live site (no destinations yet):
      { label: "Case Studies", href: "/blog" },
      { label: "Missed Call ROI Calculator", href: "/missed-call-roi-calculator" },
      { label: "Comparisons", href: "/blog" },
      { label: "Help Center", href: "/book-a-call" },
      { label: "Integrations", href: "/book-a-call" },
      { label: "API Docs", href: "/book-a-call" },
    ],
  },
];

export const CITY_LIST = [
  "Phoenix",
  "Scottsdale",
  "Tempe",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Glendale",
  "Peoria",
  "Surprise",
  "Goodyear",
];

export const INDUSTRY_LINKS: NavLink[] = [
  { label: "Healthcare", href: "/ai-appointment-setter-for-healthcare" },
  { label: "Dentists", href: "/appointment-setter-ai-dentist" },
  { label: "Insurance Agencies", href: "/ai-appointment-setter-for-insurance" },
  { label: "Real Estate Agents", href: "/ai-appointment-setter-for-real-estate" },
  { label: "SaaS Agencies", href: "/ai-appointment-setter-for-saas" },
  { label: "Solar Companies", href: "/ai-appointment-setter-for-solar-leads" },
  { label: "Marketing Agencies", href: "/ai-appointment-setter-for-agencies" },
  { label: "B2B Sales", href: "/ai-appointment-setter-for-b2b-sales" },
  { label: "Mortgage", href: "/ai-appointment-setter-for-mortgage" },
];
