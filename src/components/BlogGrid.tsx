"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";
import type { PostCard as PostCardData } from "@/lib/blog-constants";

const PER_PAGE = 6;

/** Paginated post grid — 6 per page with numbered controls. */
export default function BlogGrid({ posts }: { posts: PostCardData[] }) {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  const visible = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const go = (p: number) => {
    setPage(Math.min(pages, Math.max(1, p)));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <PostCard key={p.slug} post={p} />
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
