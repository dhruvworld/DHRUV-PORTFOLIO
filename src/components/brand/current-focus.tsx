const focus = [
  ["Building", "AI-first founder systems"],
  ["Learning", "Product-grade automation loops"],
  ["Exploring", "Global sourcing operating models"],
  ["Publishing", "AI and business editorial writing"],
];

export function CurrentFocus() {
  return (
    <section className="mt-18">
      <h2 className="section-title text-4xl font-semibold">Currently Building</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {focus.map(([label, value]) => (
          <div key={label} className="rounded-2xl border hairline bg-white/60 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-[#2e5e4e]">{label}</p>
            <p className="mt-2 text-base text-[#333]">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
