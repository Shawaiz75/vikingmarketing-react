"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AUTHOR, type PostCard } from "@/lib/blog-constants";

const PER_PAGE = 4;

/** "August 18, 2026" -> "18/08/2026", matching the listing page's own date
 *  format on the live site (its post-detail pages use the stored format
 *  as-is; the listing reformats it - a real, preserved source quirk). */
function toListingDate(date: string | null): string | null {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
}

function Card({ post }: { post: PostCard }) {
  return (
    <article className="overflow-hidden">
      <Link href={`/post/${post.slug}`} className="block">
        {post.hero ? (
          <Image
            src={post.hero}
            alt={post.title}
            width={640}
            height={360}
            className="aspect-[16/9] w-full object-cover"
          />
        ) : null}
      </Link>
      <div className="pt-4">
        <h2 className="text-[20px] font-medium uppercase leading-snug text-white">
          <Link href={`/post/${post.slug}`} className="hover:text-[#efa4f2]">
            {post.title}
          </Link>
        </h2>
        <div className="mt-2 flex items-center gap-2 text-[12px] text-white">
          <Image src={AUTHOR.avatar} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
          <span>{AUTHOR.name}</span>
        </div>
        {post.date ? <p className="mt-1 text-[12px] text-white">Published on: {toListingDate(post.date)}</p> : null}
        <p className="mt-3 text-[14px] leading-relaxed text-white/80">{post.description}</p>
        {post.category ? (
          <p className="mt-2 text-[12px] text-white">{post.category.name}</p>
        ) : null}
        <Link
          href={`/post/${post.slug}`}
          className="mt-3 inline-block rounded-full bg-[#b771eb] px-2.5 py-1.5 text-[14px] text-white transition hover:opacity-90"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

/** Paginated post grid — 4 per page with numbered controls, like the source site. */
export default function BlogGrid({ posts }: { posts: PostCard[] }) {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  const visible = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const go = (p: number) => {
    setPage(Math.min(pages, Math.max(1, p)));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {visible.map((p) => (
          <Card key={p.slug} post={p} />
        ))}
      </div>

      {pages > 1 ? (
        <nav aria-label="Blog pagination" className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className="rounded-full border border-white/15 px-4 py-2 text-[13.5px] text-white/75 transition enabled:hover:border-white/35 enabled:hover:text-white disabled:opacity-40"
          >
            Previous
          </button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => go(p)}
              aria-current={p === page ? "page" : undefined}
              className={`h-10 w-10 rounded-full text-[14px] transition ${
                p === page
                  ? "bg-[#8b5cf6] font-semibold text-white"
                  : "border border-white/15 text-white/70 hover:border-white/35 hover:text-white"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page === pages}
            className="rounded-full border border-white/15 px-4 py-2 text-[13.5px] text-white/75 transition enabled:hover:border-white/35 enabled:hover:text-white disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      ) : null}
    </div>
  );
}
