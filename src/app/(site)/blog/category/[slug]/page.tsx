import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata, jsonLdGraph, webPageLd, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui";
import BlogGrid from "@/components/BlogGrid";
import { getPostsIndex, CATEGORIES, CATEGORY_DESCRIPTIONS } from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const name = CATEGORIES[slug];
  // Titles match the source site exactly (bare category name, no suffix).
  return pageMetadata({
    title: name,
    description: CATEGORY_DESCRIPTIONS[slug],
    path: `/blog/category/${slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const name = CATEGORIES[slug];
  if (!name) notFound();
  const posts = getPostsIndex().filter((p) => p.category?.slug === slug);

  const ld = jsonLdGraph([
    webPageLd({
      path: `/blog/category/${slug}`,
      name: `${name} | Viking Marketing Blog`,
      description: `Articles about ${name.toLowerCase()} from the Viking Marketing team.`,
    }),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name, path: `/blog/category/${slug}` },
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
          <p className="eyebrow">Category</p>
          <h1 className="mt-3 font-heading text-[clamp(32px,4.6vw,54px)] font-bold text-white">{name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] text-white/70">
            {posts.length} article{posts.length === 1 ? "" : "s"} ·{" "}
            <Link href="/blog" className="text-[#efa4f2] hover:text-white">
              View all posts
            </Link>
          </p>
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
