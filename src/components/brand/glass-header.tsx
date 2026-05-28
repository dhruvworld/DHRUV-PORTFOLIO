"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { exploreNav, primaryNav } from "@/lib/site-nav";

const navLabelClass = "shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a]";

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
      {/* Top row: brand + actions */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[#132232] md:text-base">
          Dhruv Solanki
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="hidden rounded-full border border-black/10 px-3 py-2 text-xs text-[#5b5b5b] transition hover:border-black/20 hover:text-[#132232] sm:inline-flex"
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
      </div>

      {/* Desktop/tablet: both Navigate + Explore — matches footer */}
      <div className="hidden border-t border-black/6 md:block">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-2.5">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm" aria-label="Navigate">
            <span className={navLabelClass}>Navigate</span>
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[#5f5f5f] transition hover:text-[#132232]">
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm" aria-label="Explore">
            <span className={navLabelClass}>Explore</span>
            {exploreNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-[#5f5f5f] transition hover:text-[#132232]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <div className="border-t hairline bg-[#f8f7f4] px-6 py-6 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-6">
            <div>
              <p className={navLabelClass}>Navigate</p>
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
              <p className={navLabelClass}>Explore</p>
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
