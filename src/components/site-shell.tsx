"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CommandPalette } from "@/components/command-palette";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/founder", label: "Founder" },
  { href: "/ai", label: "AI Lab" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "AI Journal" },
  { href: "/newsletters", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CommandPalette />
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:py-5">
          <Link href="/" className="text-base font-semibold tracking-tight md:text-lg">
            Dhruv Solanki
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            Menu
          </button>
          <div className="hidden items-center gap-4 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 transition hover:text-brand-cyan"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/search" className="text-slate-600 transition hover:text-brand-cyan">
              Search
            </Link>
            <span className="rounded-md border border-slate-200 px-2 py-1 text-[10px] text-slate-500">
              ⌘K
            </span>
            <ThemeToggle />
          </div>
        </nav>
        <AnimatePresence initial={false}>
          {mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24 }}
              className="overflow-hidden border-t border-slate-200 md:hidden"
            >
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/search"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
                >
                  Search
                </Link>
                <div className="mt-1">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
      <main className="creator-grid-bg mx-auto w-full max-w-6xl px-6 py-12 md:py-20">
        {children}
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm leading-relaxed text-slate-500">
          <p>Dhruv Solanki = Dhruv Solankii = Dhruv World</p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs">
            <Link href="https://www.linkedin.com/in/dhruvworld/" className="hover:text-brand-cyan">
              LinkedIn
            </Link>
            <Link href="https://github.com/dhruvworld" className="hover:text-brand-cyan">
              GitHub
            </Link>
            <Link href="https://www.facebook.com/dhruv.solanki.4701" className="hover:text-brand-cyan">
              Facebook ID
            </Link>
            <Link href="https://www.facebook.com/TechXdhruvworld" className="hover:text-brand-cyan">
              Facebook Page
            </Link>
            <Link href="https://www.instagram.com/_dhruvworld/" className="hover:text-brand-cyan">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
