import Link from "next/link";
import { exploreNav, primaryNav } from "@/lib/site-nav";
import { socialLinks } from "@/lib/social";

export function PremiumFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-sm text-[#4f4f4f]">Dhruv Solanki = Dhruv Solankii = Dhruv World</p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-[#7a7a7a]">
            AI systems, business execution, and digital identity — built as one connected narrative.
          </p>
          <p className="mt-4 text-xs text-[#7a7a7a]">© {new Date().getFullYear()} Dhruv World. All rights reserved.</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a]">Navigate</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#5f5f5f]">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#2e5e4e]">
                {item.label}
              </Link>
            ))}
            <Link href="/search" className="hover:text-[#2e5e4e]">
              Search
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a]">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#5f5f5f]">
            {exploreNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#2e5e4e]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#6b6b6b]">
            <Link href={socialLinks.linkedin} className="hover:text-[#2e5e4e]">
              LinkedIn
            </Link>
            <Link href={socialLinks.github} className="hover:text-[#2e5e4e]">
              GitHub
            </Link>
            <Link href={socialLinks.instagram} className="hover:text-[#2e5e4e]">
              Instagram
            </Link>
            <Link href={socialLinks.facebook} className="hover:text-[#2e5e4e]">
              Facebook
            </Link>
            <Link href={socialLinks.emailWork} className="hover:text-[#2e5e4e]">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
