"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { headerNav } from "@/lib/site-nav";

export function GlassHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-[#f8f7f4]/95 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-[#132232] md:text-base"
        >
          Dhruv Solanki
        </Link>

        {/* Desktop: one clean row */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Site"
        >
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-2.5 py-1.5 text-[13px] text-[#5f5f5f] transition hover:bg-black/[0.04] hover:text-[#132232]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/search"
            className="hidden rounded-full border border-black/10 px-3 py-1.5 text-xs text-[#5f5f5f] transition hover:border-black/20 hover:text-[#132232] sm:inline-flex"
          >
            Search
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#132232] px-4 py-1.5 text-xs font-medium text-[#f8f7f4] transition hover:bg-[#1e3a52] sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border hairline text-[#132232] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Tablet: compact scrollable strip (no labels) */}
      <nav
        className="hidden border-t border-black/5 md:block lg:hidden"
        aria-label="Site"
      >
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-6 py-2 scrollbar-none">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-1 text-xs text-[#5f5f5f] transition hover:text-[#132232]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile sheet */}
      {menuOpen ? (
        <div className="border-t hairline bg-[#f8f7f4] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5" aria-label="Site">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b hairline py-3.5 text-base font-medium text-[#132232] last:border-none"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/search"
              onClick={() => setMenuOpen(false)}
              className="border-b hairline py-3.5 text-base font-medium text-[#132232]"
            >
              Search
            </Link>
            <Link
              href="/ai"
              onClick={() => setMenuOpen(false)}
              className="border-b hairline py-3.5 text-base font-medium text-[#132232]"
            >
              AI Lab
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
