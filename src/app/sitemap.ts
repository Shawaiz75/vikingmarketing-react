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
  ];

  const posts = getPostsIndex();

  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: new Date(),
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}/post/${p.slug}`,
      lastModified: p.lastmod ? new Date(p.lastmod) : new Date(),
    })),
    {
      url: `${SITE_URL}/blog/author/${AUTHOR_ID}`,
      lastModified: new Date(),
    },
    ...Object.keys(CATEGORIES).map((slug) => ({
      url: `${SITE_URL}/blog/category/${slug}`,
      lastModified: new Date(),
    })),
    { url: `${SITE_URL}/blog`, lastModified: new Date() },
  ];
}
