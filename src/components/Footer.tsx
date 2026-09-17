import Link from "next/link";
import Image from "next/image";
import { FOOTER_COLUMNS } from "@/lib/nav";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SOCIAL } from "@/lib/site";

const socialLinks = [
  { href: SOCIAL.facebook, icon: "/images/icon-facebook.svg", label: "Visit Viking Marketing on Facebook" },
  { href: SOCIAL.instagram, icon: "/images/icon-instagram.svg", label: "Visit Viking Marketing on Instagram" },
  { href: SOCIAL.youtube, icon: "/images/icon-youtube.svg", label: "Visit Viking Marketing on YouTube" },
  { href: SOCIAL.linkedin, icon: "/images/icon-linkedin.svg", label: "Visit Viking Marketing on LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Same divider-glow treatment used between page sections, placed
          here (in the footer itself, not per-page) so every page gets a
          clear, consistent break above the footer - not just the ones
          that happen to end on FinalCta's own distinct backdrop. Paired
          with a footer background darker than the page body (--bg) so
          the two are visually distinct even where the divider's glow
          has faded out. */}
      <div className="divider-glow" aria-hidden />
      <div className="wrap pt-16 pb-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/" aria-label="Viking Marketing home">
            <Image
              src="/images/logo-footer.svg"
              alt="Viking Marketing logo"
              width={190}
              height={54}
              className="h-[76px] w-auto"
            />
          </Link>
          <ul className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                  <Image src={s.icon} alt="" width={40} height={40} className="h-10 w-10" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a href={`tel:${PHONE_TEL}`} className="card block min-w-0 px-8 py-6 text-center transition hover:border-white/20">
            <p className="text-[16px] text-white/70">Phone Number</p>
            <p className="mt-1 font-heading text-[clamp(20px,5vw,26px)] font-bold text-white">{PHONE_DISPLAY}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="card block min-w-0 px-8 py-6 text-center transition hover:border-white/20">
            <p className="text-[16px] text-white/70">Email Address</p>
            <p className="mt-1 font-heading text-[clamp(20px,5vw,26px)] font-bold break-words text-white">{EMAIL}</p>
          </a>
        </div>

        {/* Columns hold widely different link counts and label lengths
            (e.g. "Lead & Customer Tracking" vs "Blog"), so forcing 5 equal
            grid tracks either wrapped the longer labels onto two lines or
            needed dividers to look intentional. Flex + justify-between
            instead sizes each column to its own content (never wraps a
            label) and spreads the leftover row width evenly as gaps - so
            spacing balances itself regardless of column width. Single
            column below lg, where 5 natural-width columns wouldn't fit
            on one line without wrapping the row itself. */}
        <nav
          aria-label="Footer"
          className="mt-14 flex flex-col gap-y-10 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-x-8 lg:gap-y-12"
        >
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="whitespace-nowrap font-heading text-[22px] font-bold text-white">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link href={l.href} className="whitespace-nowrap text-[16px] text-white/85 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13.5px] text-white/60 sm:flex-row">
          <p>
            © 2026, <strong className="text-white/85">Viking Marketing.</strong> All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span aria-hidden>•</span>
            <Link href="/terms-and-conditions" className="hover:text-white">Term of Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
