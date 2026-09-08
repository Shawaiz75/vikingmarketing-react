"use client";

import { useState } from "react";

/** Truncated author bio with a "Read more"/"Read less" toggle, matching the
 *  live site's author box (which measures and clamps via JS; this uses a
 *  CSS line-clamp for the same collapsed/expanded behavior). */
export default function AuthorBio({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="text-[16px] leading-[22px] text-white">
      <span className={expanded ? "" : "line-clamp-2"}>{text}</span>{" "}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="font-medium text-[#f196f5] hover:text-white"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
}
