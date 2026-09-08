import Link from "next/link";
import type { ReactNode } from "react";

/** Gradient pill CTA with the circular arrow, matching the live button. */
export function CtaButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn-cta font-heading font-normal ${className}`}>
      <span>{children}</span>
      {/* Solid white disc + dark arrow glyph, matching the live button's
          exact SVG (decoded from its ::before pseudo-element) - not a
          translucent circle with a white stroke arrow. */}
      <span className="btn-cta-arrow" aria-hidden>
        <svg width="37" height="38" viewBox="0 0 37 38" fill="none">
          <rect y="0.5" width="37" height="37" rx="18.5" fill="white" />
          <path
            d="M19.7904 23.375L18.7112 22.2573L21.4477 19.5208H12.082V17.9792H21.4477L18.7112 15.2427L19.7904 14.125L24.4154 18.75L19.7904 23.375Z"
            fill="#171717"
          />
        </svg>
      </span>
    </Link>
  );
}

/** Section heading block: optional eyebrow + H2 + lede. */
export function SectionHeading({
  title,
  lede,
  center = true,
  as: Tag = "h2",
  className = "",
  /** Container width; a few sections use a narrower measure than the 1150px default. */
  maxW = "max-w-[1150px]",
}: {
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
  maxW?: string;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${maxW} ${className}`}>
      <Tag className="font-heading text-[clamp(30px,3.5vw,47px)] font-bold leading-[1.38] text-white">
        {title}
      </Tag>
      {lede ? <p className="mt-4 text-[16px] leading-[1.9] text-white/80">{lede}</p> : null}
    </div>
  );
}

/** Renders a JSON-LD script tag. */
export function JsonLd({ json }: { json: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

/** Small ✓-separated reassurance line under CTAs. */
export function CheckLine({ items }: { items: string[] }) {
  return (
    <p className="text-[16px] text-white/80">
      {items.map((t, i) => (
        <span key={t}>
          <span className="text-[#37ca37]">✓</span> {t}
          {i < items.length - 1 ? <span className="mx-2 text-white/35">·</span> : null}
        </span>
      ))}
    </p>
  );
}
