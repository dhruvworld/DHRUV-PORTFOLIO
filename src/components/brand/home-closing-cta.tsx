import Link from "next/link";

/** Single closing CTA — Quantis + contact in one block (no duplicate sections). */
export function HomeClosingCTA() {
  return (
    <section
      className="relative mt-28 overflow-hidden rounded-[1.75rem] border hairline bg-[#1a1f28] p-10 md:p-12"
      aria-labelledby="home-cta-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(201,166,107,0.18),transparent_55%)]" aria-hidden />
      <div className="relative max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d4bb8e]">Quantis Global · Collaboration</p>
        <h2 id="home-cta-heading" className="mt-4 text-3xl font-semibold tracking-tight text-[#f5f3ef] md:text-4xl">
          Trade partnerships, engineering projects, or AI workflows.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#c8c4ba] md:text-base">
          Open to Quantis Global sourcing inquiries, software collaborations, and digital identity consulting.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-[#f5f3ef] px-5 py-2.5 text-sm font-medium text-[#132232]"
          >
            Contact Dhruv
          </Link>
          <Link
            href="/quantis-global"
            className="rounded-full border border-[#f5f3ef]/30 px-5 py-2.5 text-sm font-medium text-[#f5f3ef]"
          >
            Quantis Global ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
