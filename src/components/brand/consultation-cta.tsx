import Link from "next/link";

export function ConsultationCTA() {
  return (
    <section
      className="relative mt-20 overflow-hidden rounded-[1.75rem] border hairline bg-[#1a1f28] p-10 text-center md:p-14"
      aria-labelledby="consultation-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,166,107,0.2),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(46,94,78,0.15),transparent_45%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d4bb8e]">Collaboration</p>
        <h2 id="consultation-heading" className="mt-4 text-3xl font-semibold tracking-tight text-[#f5f3ef] md:text-5xl">
          Discuss a product, trade, or AI workflow.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#c8c4ba] md:text-base">
          Open to engineering projects, Quantis Global partnerships, and digital identity consulting.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex text-sm font-medium text-[#f5f3ef] underline decoration-[#d9aa3f] underline-offset-4"
        >
          Contact Dhruv ↗
        </Link>
      </div>
    </section>
  );
}
