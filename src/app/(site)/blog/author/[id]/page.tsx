import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata, jsonLdGraph, personLd, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui";
import BlogGrid from "@/components/BlogGrid";
import { getPostsIndex, AUTHOR, AUTHOR_ID, AUTHOR_DESCRIPTION } from "@/lib/blog";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return [{ id: AUTHOR_ID }];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  await params;
  // Title + description match the source site exactly.
  return pageMetadata({
    title: AUTHOR.name,
    description: AUTHOR_DESCRIPTION,
    path: `/blog/author/${AUTHOR_ID}`,
  });
}

export default async function AuthorPage({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  if (id !== AUTHOR_ID) notFound();
  const posts = getPostsIndex();

  const ld = jsonLdGraph([
    personLd(),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: AUTHOR.name, path: `/blog/author/${AUTHOR_ID}` },
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
          <p className="eyebrow">Author</p>
          <h1 className="mt-3 font-heading text-[clamp(32px,4.6vw,54px)] font-bold text-white">
            {AUTHOR.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15.5px] text-white/70">
            {AUTHOR.role} ·{" "}
            <Link href="/about-us" className="text-[#efa4f2] hover:text-white">
              About Charlie
            </Link>{" "}
            · {posts.length} article{posts.length === 1 ? "" : "s"}
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
