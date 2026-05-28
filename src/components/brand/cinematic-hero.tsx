import Image from "next/image";
import Link from "next/link";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16">
      <div className="grid items-end gap-14 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#2e5e4e]">Dhruv World</p>
          <h1 className="display-title mt-4 text-[clamp(5rem,10vw,9rem)] font-semibold">
            Dhruv
            <br />
            Solanki
          </h1>
          <p className="mt-7 text-sm uppercase tracking-[0.22em] text-[#2e5e4e]">
            AI • Technology • Business • Digital Identity
          </p>
          <p className="body-soft mt-6 max-w-2xl text-lg">
            Building AI-first digital systems across technology, business, and modern creation.
          </p>
          <div className="mt-11 flex flex-wrap gap-3">
            <Link href="/projects" className="cta-pill rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-[#f8f7f4]">
              Explore Work
            </Link>
            <Link href="/blog" className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#111111]">
              Read Writing
            </Link>
            <Link href="/contact" className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#111111]">
              Start a Conversation
            </Link>
          </div>
        </div>
        <div className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-[2.2rem] border hairline bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(255,255,255,0.3))]" />
          <div className="absolute -left-10 top-8 rounded-full border hairline bg-[#f5f3ef] px-4 py-2 text-xs text-[#5f5f5f]">
            Founder
          </div>
          <div className="absolute -right-8 bottom-10 rounded-full border hairline bg-[#f5f3ef] px-4 py-2 text-xs text-[#5f5f5f]">
            Dhruv Solankii
          </div>
          <div className="absolute inset-8 overflow-hidden rounded-[1.5rem] border hairline">
            <Image
              src="/media/founder-portrait.svg"
              alt="Dhruv Solanki portrait visual"
              fill
              priority
              className="object-cover grayscale-[16%] contrast-[1.03] brightness-[0.98]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
