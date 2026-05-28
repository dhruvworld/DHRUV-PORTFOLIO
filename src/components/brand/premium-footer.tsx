import Link from "next/link";

export function PremiumFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <p className="text-sm text-[#4f4f4f]">Dhruv Solanki = Dhruv Solankii = Dhruv World</p>
        <p className="mt-2 text-xs text-[#7a7a7a]">© {new Date().getFullYear()} Dhruv World. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#6b6b6b]">
          <Link href="https://www.linkedin.com/in/dhruvworld/" className="hover:text-[#2e5e4e]">
            LinkedIn
          </Link>
          <Link href="https://github.com/dhruvworld" className="hover:text-[#2e5e4e]">
            GitHub
          </Link>
          <Link href="https://www.instagram.com/_dhruvworld/" className="hover:text-[#2e5e4e]">
            Instagram
          </Link>
          <Link href="/search" className="hover:text-[#2e5e4e]">
            Search
          </Link>
          <Link href="/resources" className="hover:text-[#2e5e4e]">
            Resources
          </Link>
        </div>
      </div>
    </footer>
  );
}
