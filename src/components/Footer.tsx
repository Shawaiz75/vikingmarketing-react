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
    <footer className="border-t border-white/5 bg-[#020114]">
      <div className="wrap pt-14 pb-8">
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

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <a href={`tel:${PHONE_TEL}`} className="card block min-w-0 px-8 py-6 text-center transition hover:border-white/20">
            <p className="text-[16px] text-white/70">Phone Number</p>
            <p className="mt-1 font-heading text-[clamp(20px,5vw,26px)] font-bold text-white">{PHONE_DISPLAY}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="card block min-w-0 px-8 py-6 text-center transition hover:border-white/20">
            <p className="text-[16px] text-white/70">Email Address</p>
            <p className="mt-1 font-heading text-[clamp(20px,5vw,26px)] font-bold break-words text-white">{EMAIL}</p>
          </a>
        </div>

        <nav aria-label="Footer" className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-[22px] font-bold text-white">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link href={l.href} className="text-[16px] text-white/85 transition hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[13.5px] text-white/60 sm:flex-row">
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

      {/* Floating chat/help bubble (mirrors the live site's chat widget button).
          When a real chat widget is wired up via GTM it replaces this launcher. */}
      <Link
        href="/book-a-call"
        aria-label="Chat with the Viking Marketing team"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#8b5cf6] shadow-[0_10px_40px_rgba(139,92,246,0.5)] transition hover:scale-105"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H9l-4.2 3.36A.5.5 0 0 1 4 18.97V6Z"
            fill="#fff"
          />
          <circle cx="9" cy="9.5" r="1.1" fill="#8b5cf6" />
          <circle cx="12.5" cy="9.5" r="1.1" fill="#8b5cf6" />
          <circle cx="16" cy="9.5" r="1.1" fill="#8b5cf6" />
        </svg>
        <span
          className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-[#020114] bg-[#22c55e]"
          aria-hidden
        />
      </Link>
    </footer>
  );
}
