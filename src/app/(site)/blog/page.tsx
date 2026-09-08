import type { Metadata } from "next";
import { pageMetadata, jsonLdGraph, webPageLd, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui";
import BlogGrid from "@/components/BlogGrid";
import { getPostsIndex } from "@/lib/blog";

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
      {/* The live site's blog index has no hero/title/category-nav at all -
          it goes straight from the header into the post grid. Matched here;
          h1 in this route comes from metadata/JSON-LD only. */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="wrap">
          {/* Visually hidden: the live page has no visible page title, but a
              document still needs exactly one real h1 for accessibility/SEO
              (see the "SEO corrections" convention in docs/DIFFERENCES.md). */}
          <h1 className="sr-only">Blog | Viking Marketing</h1>
          <BlogGrid posts={posts} />
        </div>
      </section>
    </>
  );
}
