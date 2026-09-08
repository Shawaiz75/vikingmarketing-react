"use client";

/** Scrolls the page back to the top (a plain in-flow button, not fixed/floating). */
export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="rounded-full border border-white/15 px-5 py-2.5 text-[13.5px] font-medium text-white/70 transition hover:border-white/30 hover:text-white"
    >
      Back to Top
    </button>
  );
}
