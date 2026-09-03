"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { PostCard } from "@/lib/blog";

const PER_PAGE = 4;

function Card({ post }: { post: PostCard }) {
  return (
    <article className="card overflow-hidden transition hover:border-white/20">
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
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-white/55">
          {post.category ? (
            <Link
              href={`/blog/category/${post.category.slug}`}
              className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-medium text-white/80 transition hover:border-white/30 hover:text-white"
            >
              {post.category.name}
            </Link>
          ) : null}
          {post.date ? <span>{post.date}</span> : null}
          {post.readTime ? <span>· {post.readTime}</span> : null}
        </div>
        <h2 className="mt-3 font-heading text-[19px] font-bold leading-snug text-white">
          <Link href={`/post/${post.slug}`} className="hover:text-[#efa4f2]">
            {post.title}
          </Link>
        </h2>
        <p className="mt-2.5 line-clamp-3 text-[14px] leading-relaxed text-white/65">
          {post.description}
        </p>
        <Link
          href={`/post/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#efa4f2] transition hover:text-white"
        >
          Read more
          <svg width="13" height="9" viewBox="0 0 14 10" fill="none" aria-hidden>
            <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
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
