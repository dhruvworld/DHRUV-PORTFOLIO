"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { exploreNav, primaryNav } from "@/lib/site-nav";

export function GlassHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/8 bg-[#f8f7f4]/92 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4" aria-label="Main">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[#132232] md:text-base">
          Dhruv Solanki
        </Link>

        <div className="hidden items-center gap-4 text-sm lg:gap-5">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[#5b5b5b] transition hover:text-[#132232]">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="hidden rounded-full border border-black/10 px-3 py-2 text-xs text-[#5b5b5b] transition hover:border-black/20 hover:text-[#132232] md:inline-flex"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-[#132232] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Explore — visible on desktop/tablet, mirrors footer */}
      <div className="hidden border-t border-black/6 lg:block" aria-label="Explore">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-6 py-2.5">
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a]">Explore</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
            {exploreNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#5f5f5f] transition hover:text-[#132232]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t hairline bg-[#f8f7f4] px-6 py-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a]">Navigate</p>
              <div className="mt-3 flex flex-col gap-3">
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
              </div>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a]">Explore</p>
              <div className="mt-3 flex flex-col gap-3">
                {exploreNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-[#132232]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
