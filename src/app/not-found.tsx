import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[50vh] flex-col items-start justify-center py-16 md:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[#5f5f5f]">404</p>
        <h1 className="display-title mt-5 text-5xl font-semibold tracking-tight md:text-6xl">Page not found</h1>
        <p className="body-soft mt-6 max-w-lg text-lg">
          The route may have moved or is not published yet. Use search or return to the homepage.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="cta-pill rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
          >
            Back home
          </Link>
          <Link
            href="/search"
            className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]"
          >
            Search site ↗
          </Link>
          <Link
            href="/projects"
            className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]"
          >
            View projects
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
