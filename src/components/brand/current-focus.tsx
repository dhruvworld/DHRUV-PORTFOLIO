const focus = [
  ["Building", "AI-first founder systems"],
  ["Learning", "Product-grade automation loops"],
  ["Exploring", "Global sourcing operating models"],
  ["Publishing", "AI and business editorial writing"],
];

export function CurrentFocus() {
  return (
    <section className="mt-16">
      <h2 className="section-title text-4xl font-semibold text-white">Currently Building</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {focus.map(([label, value]) => (
          <div key={label} className="glass-panel rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-brand-cyan">{label}</p>
            <p className="mt-2 text-base text-slate-200">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
