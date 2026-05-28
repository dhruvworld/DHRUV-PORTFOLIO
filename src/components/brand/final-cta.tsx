import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="mt-16 pb-8 text-center">
      <h2 className="section-title text-4xl font-semibold text-white md:text-5xl">
        Let&apos;s build something meaningful.
      </h2>
      <div className="mt-7 flex justify-center gap-3">
        <Link href="/contact" className="cta-pill rounded-full bg-brand-cyan px-6 py-3 text-sm font-medium text-slate-950">
          Start a Conversation
        </Link>
        <Link href="/projects" className="cta-pill rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">
          Explore Work
        </Link>
      </div>
    </section>
  );
}
