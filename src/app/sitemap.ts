import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPostsIndex, CATEGORIES, AUTHOR_ID } from "@/lib/blog";

export const dynamic = "force-static";

// Mirrors the source site's sitemap URL set (pages + posts + blog taxonomy).
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about-us",
    "/book-a-call",
    "/privacy-policy",
    "/missed-call-roi-calculator",
    "/missed-call-text-back",
    "/all-in-one-inbox",
    "/review-generation-software",
    "/website-chat-widget",
    "/sms-payment-link",
    "/crm-with-invoicing",
    "/lead-management-software-for-small-business",
    "/database-reactivation",
    "/pricing",
    "/terms-and-conditions",
    "/ai-appointment-setter",
    "/locations",
    "/ai-appointment-setter-phoenix",
    "/industries",
    "/ai-appointment-setter-for-insurance",
    "/ai-appointment-setter-for-real-estate",
    "/ai-appointment-setter-for-solar-leads",
    "/ai-appointment-setter-for-mortgage",
    "/ai-appointment-setter-for-saas",
    "/ai-appointment-setter-for-healthcare",
    "/ai-appointment-setter-for-agencies",
    "/ai-appointment-setter-for-b2b-sales",
    "/appointment-setter-ai-dentist",
    "/ai-appointment-setter-scottsdale",
    "/ai-appointment-setter-tempe",
    "/ai-appointment-setter-mesa",
    "/ai-appointment-setter-chandler",
    "/ai-appointment-setter-gilbert",
    "/ai-appointment-setter-glendale",
    "/ai-appointment-setter-peoria",
    "/ai-appointment-setter-surprise",
    "/ai-appointment-setter-goodyear",
    "/hvac-crm-software",
    "/gym-crm-software",
    "/chiropractic-scheduling-software",
    "/electrician-scheduling-software",
    "/roofing-crm-software",
    "/insurance-agent-crm",
    "/compare",
    "/viking-marketing-vs-settr",
    "/viking-marketing-vs-bookr",
    "/viking-marketing-vs-vendi",
    "/viking-marketing-vs-quo",
  ];

  const posts = getPostsIndex();

  return [
    // No lastModified here: these are static marketing/hub pages with no
    // real per-page edit-history tracking. A synthetic `new Date()` at
    // every build gives every entry the identical build timestamp, which
    // strips lastmod of any genuine freshness signal (flagged in the
    // 2026-09-18 audit). Omitting it lets Google infer freshness itself
    // rather than reporting a fabricated one. Blog posts below keep their
    // real per-article lastmod, which is accurate.
    ...pages.map((p) => ({
      url: `${SITE_URL}${p}`,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/post/${p.slug}`,
      lastModified: p.lastmod ? new Date(p.lastmod) : new Date(),
    })),
    { url: `${SITE_URL}/blog/author/${AUTHOR_ID}` },
    ...Object.keys(CATEGORIES).map((slug) => ({
      url: `${SITE_URL}/blog/category/${slug}`,
    })),
    { url: `${SITE_URL}/blog` },
  ];
}
