"use client";

import { useEffect, useState } from "react";
import type { TocHeading } from "@/lib/toc";

/** Sticky "on this page" nav — jumps to each h2 in the article and
 *  highlights whichever section is currently in view. */
export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-label="Table of contents" className="card-strong sticky top-8 p-6">
      <p className="text-[12px] font-semibold uppercase tracking-wide text-white/50">
        On this page
      </p>
      <ul className="mt-4 space-y-0.5">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block border-l-2 py-1.5 pl-4 text-[13.5px] leading-snug transition ${
                activeId === h.id
                  ? "border-[#efa4f2] font-medium text-white"
                  : "border-white/10 text-white/55 hover:border-white/25 hover:text-white"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
