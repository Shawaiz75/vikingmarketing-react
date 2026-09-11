import Image from "next/image";

/** Top-anchored background glow shared by every inner-page hero (the
 *  feature/industry template and every other content page use the same
 *  asset, so the whole site's hero treatment matches). Parent section
 *  needs `relative overflow-hidden`. */
export default function HeroGlow() {
  return (
    <Image
      src="/images/inner-hero-glow.webp"
      alt=""
      width={1200}
      height={552}
      priority
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-auto w-full select-none"
    />
  );
}
