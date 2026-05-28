import { testimonials } from "@/content/testimonials";

export function EditorialTestimonials() {
  return (
    <section className="mt-28">
      <h2 className="section-title text-4xl font-semibold md:text-5xl">People talk about the work</h2>
      <p className="body-soft mt-3 max-w-2xl">Signals from collaborators, founders, and operators.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={`${item.name}-${item.role}`} className="rounded-[1.35rem] border hairline bg-white/70 p-6">
            <p className="text-sm leading-relaxed text-[#555]">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-6 text-sm font-semibold text-[#132232]">{item.name}</p>
            <p className="text-xs text-[#777]">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
