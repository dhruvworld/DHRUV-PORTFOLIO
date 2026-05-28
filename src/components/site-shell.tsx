import Link from "next/link";
import { AmbientEffects } from "@/components/ambient-effects";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "AI Journal" },
  { href: "/newsletters", label: "Newsletter" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientEffects />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-base font-semibold tracking-tight md:text-lg">
            Dhruv Solanki <span className="text-brand-cyan">/ AI Creator</span>
          </Link>
          <div className="hidden items-center gap-4 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 transition hover:text-brand-cyan"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/search" className="text-slate-300 transition hover:text-brand-cyan">
              Search
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <main className="creator-grid-bg mx-auto w-full max-w-6xl rounded-3xl px-6 py-16 md:py-20">
        {children}
      </main>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-400">
          <p>Dhruv Solanki = Dhruv Solankii = Dhruv World</p>
          <p>
            AI, Technology, Business, Creator Identity Platform based in Gujarat.
          </p>
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
            <span>@_DHRUVWORLD</span>
            <span>DHRUV4701@GMAIL.COM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
