import Link from "next/link";

export function PremiumFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <p className="text-sm text-slate-300">Dhruv Solanki = Dhruv Solankii = Dhruv World</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
          <Link href="https://www.linkedin.com/in/dhruvworld/" className="hover:text-brand-cyan">
            LinkedIn
          </Link>
          <Link href="https://github.com/dhruvworld" className="hover:text-brand-cyan">
            GitHub
          </Link>
          <Link href="https://www.instagram.com/_dhruvworld/" className="hover:text-brand-cyan">
            Instagram
          </Link>
          <Link href="/search" className="hover:text-brand-cyan">
            Search
          </Link>
          <Link href="/resources" className="hover:text-brand-cyan">
            Resources
          </Link>
        </div>
      </div>
    </footer>
  );
}
