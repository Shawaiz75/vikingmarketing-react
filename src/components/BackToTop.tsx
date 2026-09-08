"use client";

/** Scrolls the page back to the top — matches the live site's post-page
 *  "Back to Top" button (a plain in-flow button, not a fixed/floating one). */
export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="rounded-[14px] bg-white px-5 py-2.5 text-[16px] font-medium text-[#f196f5] transition hover:opacity-90"
    >
      Back to Top
    </button>
  );
}
