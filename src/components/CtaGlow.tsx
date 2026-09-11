import Image from "next/image";

/** Bottom-anchored background glow shared by every closing-CTA section
 *  (same asset FinalCta uses). sm+ keeps the image's own aspect ratio;
 *  below that a fixed band + object-cover keeps a real glow behind the
 *  button even when wrapped copy makes the section much taller than the
 *  image is wide. Parent section needs `relative overflow-hidden`. */
export default function CtaGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] w-full select-none sm:aspect-[1200/427] sm:h-auto"
      aria-hidden
    >
      <Image src="/images/final-cta-glow.webp" alt="" fill sizes="100vw" className="object-cover object-bottom" />
    </div>
  );
}
