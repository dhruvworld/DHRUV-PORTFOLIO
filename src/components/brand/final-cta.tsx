import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="mt-24 pb-8 md:pl-12">
      <h2 className="section-title max-w-3xl text-4xl font-semibold md:text-5xl">
        Let&apos;s build something meaningful.
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/contact" className="cta-pill rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-[#f8f7f4]">
          Start a Conversation
        </Link>
        <Link href="/projects" className="cta-pill rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-[#111111]">
          Explore Work
        </Link>
      </div>
    </section>
  );
}
