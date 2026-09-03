import fs from "node:fs";
import path from "node:path";

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
};

const CONTENT = path.join(process.cwd(), "src", "content");

export const AUTHOR_ID = "68ffa6d0ef29d7c1218cde89";
export const AUTHOR = {
  name: "Charles DeFelice",
  role: "Founder, Viking Marketing",
};

export const CATEGORIES: Record<string, string> = {
  "ai": "Ai Tools",
  "sales-and-follow-up": "Sales & Follow-Up",
  "lead-reactivation-and-crm": "Lead Reactivation & CRM",
  "ai-appointment-setter": "AI Appointment Setter",
};

// Meta descriptions exactly as published on the source site where present
// (including the stray "description: " prefix on sales-and-follow-up — a
// source quirk, preserved verbatim); the two without get faithful additions.
export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "lead-reactivation-and-crm":
    "Everything local service businesses need to know about winning back old customers, reactivating dormant leads, and getting more revenue from the CRM contacts they already own, without spending more on ads.",
  "sales-and-follow-up":
    "description: Proven follow-up strategies, lead reactivation tactics, and sales frameworks for local service businesses that want more booked jobs from the leads they already have.",
  "ai": "Articles on the AI tools local service businesses use to answer leads, book appointments, and grow, from the Viking Marketing team.",
  "ai-appointment-setter":
    "Guides on AI appointment setters for local service businesses: how they work, what they cost, and how to put one to work, from the Viking Marketing team.",
};

// The author page's meta description on the source site (verbatim).
export const AUTHOR_DESCRIPTION =
  "Author description: Charles DeFelice is a Phoenix-based entrepreneur and AI automation specialist with over a decade of hands-on experience running and scaling local service businesses across Arizona. He founded Viking Marketing after seeing firsthand how many good businesses lose customers simply because no one picked up the phone. Charles is an early-access partner of CloseBot and a recognized expert in AI-powered lead management, having run campaigns that engaged over 2,000 contacts a day.";

export function getPostsIndex(): PostCard[] {
  const raw = fs.readFileSync(path.join(CONTENT, "posts-index.json"), "utf8");
  return JSON.parse(raw) as PostCard[];
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(CONTENT, "posts", `${slug}.json`), "utf8");
  return JSON.parse(raw) as Post;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(path.join(CONTENT, "posts"))
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}
