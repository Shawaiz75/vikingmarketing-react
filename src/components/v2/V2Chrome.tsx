"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_LOGIN_URL, EMAIL, PHONE_DISPLAY, PHONE_TEL, SOCIAL } from "@/lib/site";

const NAV = [
  { label: "Product", href: "#capabilities" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function V2Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="v2-nav">
      <div className="flex items-center justify-between gap-4 px-5 py-3">
        <Link href="/v2" aria-label="Viking Marketing home" className="flex-none">
          <Image src="/images/logo.svg" alt="Viking Marketing" width={148} height={42} priority className="h-9 w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[14.5px] font-medium text-white/75 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={APP_LOGIN_URL} target="_blank" rel="noopener" className="text-[14.5px] font-medium text-white/75 transition-colors hover:text-white">
            Log in
          </a>
          <Link href="/book-a-call" className="v2-btn v2-btn-primary !px-5 !py-2.5 !text-[14px]">
            Book a free demo
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M2 2l12 12M14 2 2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          ) : (
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden><path d="M1 1h16M1 6h16M1 11h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>
      {open ? (
        <nav aria-label="Mobile" className="border-t border-white/8 px-5 pb-5 pt-2 lg:hidden">
          <ul className="space-y-1">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-2.5 text-[15px] text-white/85 hover:bg-white/5">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/book-a-call" className="v2-btn v2-btn-primary w-full">
                Book a free demo
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-wrap py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image src="/images/logo-footer.svg" alt="Viking Marketing" width={170} height={48} className="h-11 w-auto" />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed" style={{ color: "var(--v2-text-2)" }}>
              The AI appointment setter and CRM for local service businesses. Built in Chandler,
              Arizona.
            </p>
            <p className="v2-mono mt-5 text-[12px]" style={{ color: "var(--v2-text-3)" }}>
              4240 S ARIZONA AVE #1063 · CHANDLER, AZ 85248
            </p>
          </div>
          <nav aria-label="Product">
            <h3 className="text-[14px] font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><Link className="text-white/65 hover:text-white" href="/ai-appointment-setter">AI Appointment Setter</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/missed-call-text-back">Missed Call Text Back</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/all-in-one-inbox">All-in-One Inbox</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/review-generation-software">Review Automation</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/database-reactivation">Database Reactivation</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/pricing">Pricing</Link></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h3 className="text-[14px] font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><Link className="text-white/65 hover:text-white" href="/about-us">About Viking</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/industries">Industries</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/locations">Locations</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/blog">Blog</Link></li>
              <li><Link className="text-white/65 hover:text-white" href="/missed-call-roi-calculator">Missed Call ROI Calculator</Link></li>
            </ul>
          </nav>
          <div>
            <h3 className="text-[14px] font-semibold text-white">Talk to a person</h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li><a className="text-white/65 hover:text-white" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
              <li><a className="text-white/65 hover:text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            </ul>
            <ul className="mt-5 flex items-center gap-3">
              {[
                { href: SOCIAL.facebook, icon: "/images/icon-facebook.svg", label: "Viking Marketing on Facebook" },
                { href: SOCIAL.instagram, icon: "/images/icon-instagram.svg", label: "Viking Marketing on Instagram" },
                { href: SOCIAL.youtube, icon: "/images/icon-youtube.svg", label: "Viking Marketing on YouTube" },
                { href: SOCIAL.linkedin, icon: "/images/icon-linkedin.svg", label: "Viking Marketing on LinkedIn" },
              ].map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                    <Image src={s.icon} alt="" width={30} height={30} className="h-7 w-7 opacity-90 transition-opacity hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-[13px] sm:flex-row" style={{ color: "var(--v2-text-3)" }}>
          <p>© 2026 Viking Marketing. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span aria-hidden>·</span>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
