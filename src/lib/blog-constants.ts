// Pure blog constants — no filesystem access, so this is safe to import
// from client components (unlike blog.ts, which reads from disk via
// node:fs and can't be pulled into a client bundle).

export type PostCard = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: { name: string; slug: string } | null;
  date: string | null;
  readTime: string | null;
  hero: string | null;
  lastmod: string | null;
};

export type Post = PostCard & {
  canonical: string;
  authorName: string;
  authorRole: string;
  authorBio: string;
  ogImage: string | null;
  contentHtml: string;
  /** Tags shown near the end of the post, sourced from the source site's own
   *  <meta name="keywords"> value for that post (3 of 19 posts have none). */
  tags: string[];
};

export const AUTHOR_ID = "68ffa6d0ef29d7c1218cde89";
export const AUTHOR = {
  name: "Charles DeFelice",
  role: "Founder, Viking Marketing",
  avatar: "/images/6a305329e5b9322bddf3-4b8ea4f7b917.webp",
  facebook: "https://www.facebook.com/charles.defelice.98",
  linkedin: "https://www.linkedin.com/in/charles-defelice-708bb1b/",
};

export const CATEGORIES: Record<string, string> = {
  "ai": "AI Tools",
  "sales-and-follow-up": "Sales & Follow-Up",
  "lead-reactivation-and-crm": "Lead Reactivation & CRM",
  "ai-appointment-setter": "AI Appointment Setter",
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "lead-reactivation-and-crm":
    "Everything local service businesses need to know about winning back old customers, reactivating dormant leads, and getting more revenue from the CRM contacts they already own, without spending more on ads.",
  "sales-and-follow-up":
    "Proven follow-up strategies, lead reactivation tactics, and sales frameworks for local service businesses that want more booked jobs from the leads they already have.",
  "ai": "Articles on the AI tools local service businesses use to answer leads, book appointments, and grow, from the Viking Marketing team.",
  "ai-appointment-setter":
    "Guides on AI appointment setters for local service businesses: how they work, what they cost, and how to put one to work, from the Viking Marketing team.",
};

// The author page's meta description on the source site (verbatim).
export const AUTHOR_DESCRIPTION =
  "Charles DeFelice is a Phoenix-based entrepreneur and AI automation specialist with over a decade of hands-on experience running and scaling local service businesses across Arizona. He founded Viking Marketing after seeing firsthand how many good businesses lose customers simply because no one picked up the phone. Charles is an early-access partner of CloseBot and a recognized expert in AI-powered lead management, having run campaigns that engaged over 2,000 contacts a day.";
