import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jsonLdGraph, personLd, breadcrumbLd, organizationLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui";
import { FinalCta, CallNote } from "@/components/sections";
import { getPost, getPostSlugs, getPostsIndex, AUTHOR_ID } from "@/lib/blog";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  const url = `${SITE_URL}/post/${slug}`;
  const image = `${SITE_URL}${post.ogImage ?? post.hero ?? DEFAULT_OG_IMAGE}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] },
  };
}

function toIsoDate(us: string | null, fallback: string | null): string | undefined {
  if (us) {
    const d = new Date(us);
    if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  }
  return fallback ?? undefined;
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const published = toIsoDate(post.date, post.lastmod);
  const related = getPostsIndex()
    .filter((p) => p.slug !== slug && p.category?.slug === post.category?.slug)
    .slice(0, 3);

  const ld = jsonLdGraph([
    organizationLd(),
    personLd(),
    {
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/post/${slug}#article`,
      mainEntityOfPage: `${SITE_URL}/post/${slug}`,
      headline: post.h1 || post.title,
      description: post.description,
      image: `${SITE_URL}${post.ogImage ?? post.hero ?? DEFAULT_OG_IMAGE}`,
      author: { "@id": `${SITE_URL}/#charles-defelice` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      ...(published ? { datePublished: published } : {}),
      ...(post.lastmod ? { dateModified: post.lastmod } : {}),
      ...(post.category ? { articleSection: post.category.name } : {}),
    },
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.h1 || post.title, path: `/post/${slug}` },
    ]),
  ]);

  return (
    <>
      <JsonLd json={ld} />

      {/* Post header */}
      <section className="relative overflow-hidden pt-36 pb-8 md:pt-44">
        <div className="grid-backdrop" aria-hidden>
          <div className="grid-glow top-0" />
        </div>
        <div className="wrap relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-[13px] text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2" aria-hidden>/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            {post.category ? (
              <>
                <span className="mx-2" aria-hidden>/</span>
                <Link href={`/blog/category/${post.category.slug}`} className="hover:text-white">
                  {post.category.name}
                </Link>
              </>
            ) : null}
          </nav>
          <h1 className="mt-5 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.2] text-white">
            {post.h1 || post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.5px] text-white/60">
            <Link href={`/blog/author/${AUTHOR_ID}`} className="font-medium text-white/85 hover:text-white">
              {post.authorName}
            </Link>
            <span className="text-white/40">{post.authorRole}</span>
            {post.date ? <span>· {post.date}</span> : null}
            {post.readTime ? <span>· {post.readTime}</span> : null}
          </div>
          {post.hero ? (
            <Image
              src={post.hero}
              alt={post.title}
              width={1200}
              height={630}
              priority
              className="mt-8 w-full rounded-2xl border border-white/10"
            />
          ) : null}
        </div>
      </section>

      {/* Article body (migrated verbatim from the source post) */}
      <section className="pb-16">
        <div className="wrap max-w-3xl">
          <div className="blog-html" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          {/* Author box */}
          <aside className="card-strong mt-14 p-7">
            <p className="text-[12.5px] font-semibold uppercase tracking-wide text-white/50">
              About the author
            </p>
            <p className="mt-2 font-heading text-lg font-bold text-white">
              {post.authorName}{" "}
              <span className="font-body text-[13.5px] font-normal text-white/60">— {post.authorRole}</span>
            </p>
            {post.authorBio ? (
              <p className="mt-3 text-[14px] leading-relaxed text-white/70">{post.authorBio}</p>
            ) : null}
            <Link
              href={`/blog/author/${AUTHOR_ID}`}
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#efa4f2] hover:text-white"
            >
              More from {post.authorName.split(" ")[0]}
              <svg width="13" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
                <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </aside>
        </div>
      </section>

      {/* Related posts */}
      {related.length ? (
        <section className="section !pt-0">
          <div className="wrap max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-white">Related posts</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <article key={r.slug} className="card overflow-hidden transition hover:border-white/20">
                  <Link href={`/post/${r.slug}`} className="block">
                    {r.hero ? (
                      <Image
                        src={r.hero}
                        alt={r.title}
                        width={480}
                        height={270}
                        className="aspect-[16/9] w-full object-cover"
                      />
                    ) : null}
                    <div className="p-5">
                      <h3 className="font-heading text-[15.5px] font-bold leading-snug text-white">
                        {r.title}
                      </h3>
                      {r.date ? <p className="mt-2 text-[12.5px] text-white/55">{r.date}</p> : null}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <FinalCta
        title="Stop Losing the Customers You Already Earned."
        body="Viking's AI appointment setter answers every lead, qualifies them, and books the job straight to your calendar. Book a 15-minute walkthrough with our Chandler-based team."
        ctaLabel="Book My Free Demo"
        note={<CallNote />}
      />
    </>
  );
}
