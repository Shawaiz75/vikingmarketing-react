import type { ReactNode } from "react";

/** Simple prose layout for Privacy Policy / Terms pages. */
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="grid-backdrop" aria-hidden>
        <div className="grid-glow top-0" />
      </div>
      <div className="wrap relative max-w-3xl">
        <h1 className="font-heading text-[clamp(32px,4.6vw,50px)] font-bold leading-[1.15] text-white">
          {title}
        </h1>
        {updated ? <p className="mt-3 text-[14px] text-white/55">{updated}</p> : null}
        <div className="legal-prose mt-10 space-y-5 text-[15.5px] leading-relaxed text-white/75 [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-[#efa4f2] [&_a]:underline">
          {children}
        </div>
      </div>
    </section>
  );
}
