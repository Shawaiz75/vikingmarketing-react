import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, jsonLdGraph, webPageLd, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui";
import BlogGrid from "@/components/BlogGrid";
import { getPostsIndex, CATEGORIES } from "@/lib/blog";

// Note: the source site ships its blog listing with no title/meta (a GHL
// limitation). We add proper metadata here, matching the site's SEO patterns.
export const metadata: Metadata = pageMetadata({
  title: "Blog | Viking Marketing",
  description:
    "Guides on AI appointment setting, missed-call recovery, database reactivation, and CRM strategy for local service businesses, from the Viking Marketing team.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getPostsIndex();
  const ld = jsonLdGraph([
    webPageLd({
      path: "/blog",
      name: "Blog | Viking Marketing",
      description:
        "Guides on AI appointment setting, missed-call recovery, database reactivation, and CRM strategy for local service businesses.",
    }),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  ]);

  return (
    <>
      <JsonLd json={ld} />
      <section className="relative overflow-hidden pt-36 pb-10 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative text-center">
          <h1 className="font-heading text-[clamp(32px,4.6vw,54px)] font-bold text-white">
            The Viking Marketing Blog
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] text-white/75">
            Honest guides on AI appointment setting, missed-call recovery, and growing a local
            service business.
          </p>
          <nav aria-label="Blog categories" className="mt-8 flex flex-wrap justify-center gap-2.5">
            {Object.entries(CATEGORIES).map(([slug, name]) => (
              <Link
                key={slug}
                href={`/blog/category/${slug}`}
                className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[13.5px] font-medium text-white/80 transition hover:border-white/35 hover:text-white"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <section className="section !pt-8">
        <div className="wrap max-w-5xl">
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
