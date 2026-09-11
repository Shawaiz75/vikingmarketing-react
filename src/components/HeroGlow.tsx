import Image from "next/image";

/** Background glow shared by every inner-page hero (the feature/industry
 *  template and every other content page use the same asset, so the whole
 *  site's hero treatment matches). Fills the section completely - not just
 *  a fixed-aspect image pinned to one edge - so it always covers the full
 *  hero regardless of how tall that page's content is; the hero's own
 *  padding keeps the text from ever touching its edges. object-bottom
 *  because the asset's glow sits in its own bottom third (the top is
 *  mostly transparent) - anchoring bottom keeps that glow visible even
 *  on short heroes where cover has to crop rather than just stretch.
 *  Parent section needs `relative overflow-hidden`. */
export default function HeroGlow() {
  return (
    <Image
      src="/images/inner-hero-glow.webp"
      alt=""
      fill
      priority
      aria-hidden
      sizes="100vw"
      className="pointer-events-none -z-10 select-none object-cover object-bottom"
    />
  );
}
