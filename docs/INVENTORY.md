# Page-by-page URL / slug inventory

Every URL from the source site's sitemap is reproduced at the identical slug. Route types:
**U** = unique hand-built page · **F** = shared feature template + data file · **I** = shared industry/location template + data file · **B** = blog system (generated) · **R** = redirect preserved.

## Core pages (U)

| URL | Source of content |
|---|---|
| `/` | Home — hand-built (17 sections) |
| `/about-us` | About — hand-built |
| `/pricing` | Pricing — hand-built (plans, comparison, FAQ) |
| `/book-a-call` | Contact/booking — hand-built (env-configured calendar embed) |
| `/missed-call-roi-calculator` | Interactive ROI calculator — hand-built React component |
| `/industries` | Industry hub — hand-built |
| `/locations` | Locations hub — hand-built |
| `/privacy-policy` | Legal — transcribed verbatim |
| `/terms-and-conditions` | Legal — transcribed verbatim |

## Feature pages (F) — `src/data/features/*.ts`

| URL |
|---|
| `/ai-appointment-setter` |
| `/missed-call-text-back` |
| `/all-in-one-inbox` |
| `/review-generation-software` |
| `/website-chat-widget` |
| `/sms-payment-link` |
| `/crm-with-invoicing` |
| `/lead-management-software-for-small-business` |
| `/database-reactivation` |

## Industry & location pages (I) — `src/data/industries/*.ts`

| URL |
|---|
| `/appointment-setter-ai-dentist` |
| `/ai-appointment-setter-for-healthcare` |
| `/ai-appointment-setter-for-insurance` |
| `/ai-appointment-setter-for-real-estate` |
| `/ai-appointment-setter-for-saas` |
| `/ai-appointment-setter-for-solar-leads` |
| `/ai-appointment-setter-for-agencies` |
| `/ai-appointment-setter-for-b2b-sales` |
| `/ai-appointment-setter-for-mortgage` |
| `/ai-appointment-setter-phoenix` |

## Blog (B)

| URL | Notes |
|---|---|
| `/blog` | Index — 4 posts/page with Previous/1…5/Next pagination like the source |
| `/blog/category/ai` | "Ai Tools" |
| `/blog/category/ai-appointment-setter` | "AI Appointment Setter" |
| `/blog/category/sales-and-follow-up` | "Sales & Follow-Up" |
| `/blog/category/lead-reactivation-and-crm` | "Lead Reactivation & CRM" |
| `/blog/author/68ffa6d0ef29d7c1218cde89` | Charles DeFelice (source author id preserved) |
| `/post/<slug>` ×19 | All 19 published posts, article HTML migrated verbatim |

Post slugs: `escape-the-ai-tool-trap`, `abcaa07b-4d4a-4ad0-8d3d-1872da7e6c49-maximize-your-business-reviews-for-effective-local-seo`, `do-old-leads-come-back-reactivating-dead-list`, `is-database-reactivation-better-than-finding-new-customers`, `ai-appointment-setter-benefits`, `ai-appointment-setting-chatbot`, `ai-appointment-setting-best-practices`, `ai-booking-agent`, `ai-appointment-scheduling-software`, `ai-lead-qualifier`, `viking-marketing-featured-national-news-networks-2026`, `automated-appointment-setting`, `what-is-an-ai-appointment-setter`, `ai-booking-systems-for-small-business`, `ai-receptionist-vs-human-receptionist`, `best-ai-appointment-setter-software`, `free-ai-appointment-setter-tools`, `ai-appointment-setter-vs-human`, `speed-to-lead-software`.

## Redirects preserved (R)

| From | To | Mechanism |
|---|---|---|
| `/ai-receptionist` | `/ai-appointment-setter` | 301 in `vercel.json`; meta-refresh stub in static export |
| `/post/best-ai-appointment-setter-insurance-agencies-2026` | `/` | 301 in `vercel.json`; meta-refresh stub |
| `/home` | `/` | 301 in `vercel.json` (source treats /home as the homepage) |

## Other technical URLs

`/sitemap.xml`, `/robots.txt`, `404.html` (custom themed not-found page).

## External links carried over

Login → `https://app.vikingmarketing.ai/` · social profiles (Facebook, Instagram, LinkedIn, YouTube) · Google Maps for the Chandler address. Footer links that are placeholders on the source site (Case Studies, Comparisons, Help Center, Integrations, API Docs, non-Phoenix city links) point to the nearest sensible internal page instead of being dead, see DIFFERENCES.md.
