"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav } from "@/lib/site-nav";

export function GlassHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-[#f8f7f4]/88 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5" aria-label="Main">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[#132232] md:text-base">
          Dhruv Solanki
        </Link>

        <div className="hidden items-center gap-5 text-sm md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[#5b5b5b] transition hover:text-[#132232]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="hidden rounded-full border border-black/10 px-3 py-2 text-xs text-[#5b5b5b] transition hover:border-black/20 hover:text-[#132232] lg:inline-flex"
            title="Open search"
          >
            Search
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-full border border-black/15 px-4 py-2 text-xs font-medium tracking-wide text-[#132232] transition hover:bg-[#132232] hover:text-[#f8f7f4] sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-[#132232] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-t hairline bg-[#f8f7f4] px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium text-[#132232]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/search"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-[#132232]"
            >
              Search
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
