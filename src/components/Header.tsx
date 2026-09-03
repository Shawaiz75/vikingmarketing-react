"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/lib/nav";
import { APP_LOGIN_URL } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="wrap flex items-center justify-between gap-6 py-3">
        <Link href="/" aria-label="Viking Marketing home" className="flex-none">
          <Image
            src="/images/logo.svg"
            alt="Viking Marketing logo"
            width={170}
            height={48}
            priority
            className="h-[64px] w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {MAIN_NAV.map((item) =>
              item.menu ? (
                <li key={item.label} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-[16px] font-medium text-white/90 hover:text-white"
                    aria-haspopup="true"
                    aria-expanded={featuresOpen}
                    onClick={() => setFeaturesOpen((v) => !v)}
                  >
                    {item.label}
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
                      <path d="M1 1.5 6 6.5 11 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="card-strong overflow-hidden py-2 backdrop-blur-xl">
                      {item.menu.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-5 py-2.5 text-[15px] text-white/85 transition hover:bg-white/5 hover:text-white"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`text-[16px] font-medium hover:text-white ${
                      pathname === item.href ? "text-white" : "text-white/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a href={APP_LOGIN_URL} className="btn-outline" target="_blank" rel="noopener">
            Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M2 2l14 14M16 2 2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
              <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <nav aria-label="Mobile" className="lg:hidden">
          <div className="wrap pb-6">
            <div className="card-strong overflow-hidden backdrop-blur-xl">
              <ul className="divide-y divide-white/5">
                {MAIN_NAV.map((item) => (
                  <li key={item.label}>
                    {item.menu ? (
                      <details>
                        <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-white/90">
                          {item.label}
                          <span aria-hidden>▾</span>
                        </summary>
                        <ul className="pb-2">
                          {item.menu.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block px-8 py-2.5 text-[15px] text-white/75"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-5 py-4 text-white/90"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="p-5">
                  <a href={APP_LOGIN_URL} className="btn-outline w-full justify-center" target="_blank" rel="noopener">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
