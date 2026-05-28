import { SiteShell } from "@/components/site-shell";

const timeline = [
  { label: "Gujarat", detail: "Engineering roots and early systems thinking." },
  { label: "Manchester", detail: "Graduate studies and product execution." },
  { label: "Quantis Global", detail: "Global trade, sourcing, and operations." },
  { label: "Dhruv World", detail: "Digital identity and authority infrastructure." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="glass-panel creator-glow rounded-3xl p-8 shadow-sm md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-cyan">About</p>
        <h1 className="display-title mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          A long-term builder with a systems mindset.
        </h1>
        <p className="body-soft mt-7 max-w-4xl text-lg md:text-xl">
          I build across AI, business, and digital publishing for durable authority over time.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="glass-panel creator-card rounded-2xl p-6">
          <h2 className="section-title text-2xl font-semibold text-white">Philosophy</h2>
          <p className="body-soft mt-4">
            Execution over noise. Clarity over complexity. Compounding over spikes.
          </p>
        </article>
        <article className="glass-panel creator-card rounded-2xl p-6">
          <h2 className="section-title text-2xl font-semibold text-white">Mission</h2>
          <p className="body-soft mt-4">
            Build a premium digital identity platform that aligns content, products, and business.
          </p>
        </article>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-4xl font-semibold tracking-tight text-white">Timeline</h2>
        <div className="mt-8 space-y-5">
          {timeline.map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-brand-cyan">{item.label}</p>
              <p className="body-soft mt-3">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass-panel mt-8 rounded-3xl p-10 shadow-sm">
        <h2 className="section-title text-4xl font-semibold tracking-tight text-white">Future Vision</h2>
        <p className="body-soft mt-5 max-w-4xl">
          Search, content, and product execution working as one living system.
        </p>
      </section>
    </SiteShell>
  );
}
