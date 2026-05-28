import Link from "next/link";
import { socialLinks } from "@/lib/social";

export function PremiumFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        <p className="text-sm text-[#4f4f4f]">Dhruv Solanki = Dhruv Solankii = Dhruv World</p>
        <p className="mt-2 text-xs text-[#7a7a7a]">© {new Date().getFullYear()} Dhruv World. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#6b6b6b]">
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
          <Link href="/search" className="hover:text-[#2e5e4e]">
            Search
          </Link>
        </div>
      </div>
    </footer>
  );
}
