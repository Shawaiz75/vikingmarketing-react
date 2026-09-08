"use client";

import { useState } from "react";

/** Truncated author bio with a "Read more"/"Read less" toggle (CSS line-clamp). */
export default function AuthorBio({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="text-[14.5px] leading-relaxed text-white/70">
      <span className={expanded ? "" : "line-clamp-2"}>{text}</span>{" "}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="font-medium text-[#efa4f2] hover:text-white"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}
