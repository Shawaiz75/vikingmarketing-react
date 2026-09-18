import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jsonLdGraph, personLd, breadcrumbLd, organizationLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui";
import { FinalCta, CallNote } from "@/components/sections";
import PostCard from "@/components/PostCard";
import AuthorBio from "@/components/AuthorBio";
import BackToTop from "@/components/BackToTop";
import TableOfContents from "@/components/TableOfContents";
import { withHeadingIds } from "@/lib/toc";
import { getPost, getPostSlugs, getPostsIndex, AUTHOR_ID, AUTHOR } from "@/lib/blog";
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
    keywords: post.tags.length ? post.tags : undefined,
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
  const { html: contentHtml, headings } = withHeadingIds(post.contentHtml);

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
      ...(post.tags.length ? { keywords: post.tags.join(", ") } : {}),
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

      {/* Post header — plain dark background, no decorative grid pattern. */}
      <section className="pt-36 pb-8 md:pt-44">
        <div className="wrap max-w-6xl">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-[13px] text-white/55">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <Link href="/blog" className="hover:text-white">Blog</Link>
            </nav>
            {post.category ? (
              <Link
                href={`/blog/category/${post.category.slug}`}
                className="mt-5 inline-block rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[12.5px] font-medium text-[#efa4f2] transition hover:border-white/30 hover:text-white"
              >
                {post.category.name}
              </Link>
            ) : null}
            <h1 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.2] text-white">
              {post.h1 || post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px] text-white/60">
              {post.date ? <span>{post.date}</span> : null}
              {post.date && post.readTime ? <span aria-hidden>·</span> : null}
              {post.readTime ? <span>{post.readTime}</span> : null}
            </div>
          </div>
          {post.hero ? (
            <Image
              src={post.hero}
              alt={post.title}
              width={1200}
              height={630}
              priority
              className="mt-8 w-full rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            />
          ) : null}
        </div>
      </section>

      {/* Article body: 70% content / 30% sticky table of contents. */}
      <section className="pb-16">
        <div className="wrap max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[7fr_3fr]">
            <div className="min-w-0">
              <div className="blog-html" dangerouslySetInnerHTML={{ __html: contentHtml }} />

              {/* Tags — sourced from the source site's own per-post keywords;
                  three of nineteen posts have none, matching the source. */}
              {post.tags.length ? (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Author box */}
              <aside className="card-strong mt-10 p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-4">
                  <Link href={`/blog/author/${AUTHOR_ID}`} className="flex-none">
                    <Image
                      src={AUTHOR.avatar}
                      alt={post.authorName}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full border-2 border-[#efa4f2]/40 object-cover"
                    />
                  </Link>
                  <div>
                    <Link
                      href={`/blog/author/${AUTHOR_ID}`}
                      className="font-heading text-[16px] font-bold text-white hover:text-[#efa4f2]"
                    >
                      {post.authorName}
                    </Link>
                    <p className="text-[13px] text-white/55">{post.authorRole}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <a
                      href={AUTHOR.facebook}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Facebook"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] transition hover:bg-white/15"
                    >
                      <Image src="/images/social-facebook-white.svg" alt="" width={16} height={16} />
                    </a>
                    <a
                      href={AUTHOR.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] transition hover:bg-white/15"
                    >
                      <Image src="/images/social-linkedin-white.svg" alt="" width={16} height={16} />
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <AuthorBio text={post.authorBio} />
                </div>
              </aside>

              <div className="mt-8 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/60 hover:text-white"
                >
                  <svg width="13" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
                    <path d="M13 5H1m0 0l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Back to Blog
                </Link>
                <BackToTop />
              </div>
            </div>

            <div className="hidden lg:block">
              <TableOfContents headings={headings} />
            </div>
          </div>
        </div>
      </section>

      {/* Related posts. Not present on the live post template, kept as a
          deliberate deviation for internal linking/engagement value. */}
      {related.length ? (
        <section className="section !pt-0">
          <div className="wrap max-w-6xl">
            <h2 className="font-heading text-2xl font-bold text-white">Related posts</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
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
