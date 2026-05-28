import Image from "next/image";
import Link from "next/link";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-12">
      <div className="grid items-end gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-brand-cyan">Dhruv World</p>
          <h1 className="display-title mt-4 text-[clamp(5rem,10vw,9rem)] font-semibold text-white">
            Dhruv
            <br />
            Solanki
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-slate-300">
            AI • Technology • Business • Digital Identity
          </p>
          <p className="body-soft mt-5 max-w-2xl text-lg">
            Building AI-first digital systems across technology, business, and modern creation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="cta-pill rounded-full bg-brand-cyan px-5 py-3 text-sm font-medium text-slate-950">
              Explore Work
            </Link>
            <Link href="/blog" className="cta-pill rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white">
              Read Writing
            </Link>
            <Link href="/contact" className="cta-pill rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white">
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className="relative min-h-[430px]">
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] backdrop-blur-2xl" />
          <div className="absolute -left-10 top-8 h-20 rounded-full border border-white/10 bg-brand-cyan/15 px-4 py-2 text-xs text-slate-200">
            Founder • Operator
          </div>
          <div className="absolute -right-8 bottom-10 h-20 rounded-full border border-white/10 bg-brand-violet/15 px-4 py-2 text-xs text-slate-200">
            Dhruv Solankii
          </div>
          <div className="absolute inset-8 overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src="/media/founder-portrait.svg"
              alt="Dhruv Solanki portrait visual"
              fill
              priority
              className="object-cover contrast-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
