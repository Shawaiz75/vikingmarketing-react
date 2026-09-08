import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { jsonLdGraph, personLd, breadcrumbLd, organizationLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui";
import { FinalCta, CallNote } from "@/components/sections";
import AuthorBio from "@/components/AuthorBio";
import BackToTop from "@/components/BackToTop";
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

      {/* Post header — no breadcrumb, category as its own line, and no
          grid/glow backdrop, matching the live site exactly (confirmed via
          computed styles: no background-image anywhere above the h1). */}
      <section className="pt-36 pb-8 md:pt-44">
        <div className="wrap">
          <h1 className="text-[28px] font-bold leading-[38.5px] text-white">{post.h1 || post.title}</h1>
          {post.category ? (
            <Link
              href={`/blog/category/${post.category.slug}`}
              className="mt-2 inline-block text-[14px] text-[#335dff] hover:underline"
            >
              {post.category.name}
            </Link>
          ) : null}
          <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[14px] text-white/70">
            {post.date ? <span>{post.date}</span> : null}
            {post.date && post.readTime ? <span aria-hidden>•</span> : null}
            {post.readTime ? <span>{post.readTime}</span> : null}
          </div>
          {post.hero ? (
            <Image
              src={post.hero}
              alt={post.title}
              width={1200}
              height={630}
              priority
              className="mt-8 w-full"
            />
          ) : null}
        </div>
      </section>

      {/* Article body (migrated verbatim from the source post) */}
      <section className="pb-16">
        <div className="wrap">
          <div className="mx-auto max-w-3xl">
            <div className="blog-html" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            {/* Tags — sourced from the source site's own per-post keywords;
                three of nineteen posts have none, matching the source. */}
            {post.tags.length ? (
              <div className="mt-10 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[10px] bg-[#e5e7eb] px-2.5 py-1 text-[13px] text-[#6b7280]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Author box */}
            <div className="mt-6 rounded-[4px] bg-[#1f113a] px-10 py-5">
              <div className="flex items-center gap-4">
                <Link href={`/blog/author/${AUTHOR_ID}`} className="flex-none">
                  <Image
                    src={AUTHOR.avatar}
                    alt={post.authorName}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-[25px] object-cover"
                  />
                </Link>
                <div className="flex flex-wrap items-center gap-2 text-[16px] text-white">
                  <Link href={`/blog/author/${AUTHOR_ID}`} className="font-semibold hover:underline">
                    {post.authorName}
                  </Link>
                  <span className="text-white/40" aria-hidden>|</span>
                  <span>{post.authorRole}</span>
                  <span className="text-white/40" aria-hidden>|</span>
                  <a href={AUTHOR.facebook} target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                    <Image src="/images/social-facebook-white.svg" alt="" width={22} height={22} />
                  </a>
                  <a href={AUTHOR.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    <Image src="/images/social-linkedin-white.svg" alt="" width={22} height={22} />
                  </a>
                </div>
              </div>
              <div className="mt-3">
                <AuthorBio text={`Author description: ${post.authorBio}`} />
              </div>
            </div>

            <div className="mt-8">
              <BackToTop />
            </div>
            <p className="mt-4">
              <Link href="/blog" className="text-[13px] text-[#6b7280] hover:text-white">
                Back to Blog
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Related posts. Not present on the live post template (which ends
          at "Back to Blog"), kept as a deliberate, pre-existing deviation
          for internal linking/engagement - see docs/DIFFERENCES.md. */}
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
