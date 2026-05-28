import Link from "next/link";

export function QuantisPreview() {
  return (
    <section className="mt-16 rounded-3xl border border-[#c6a86a]/30 bg-[linear-gradient(160deg,rgba(198,168,106,0.16),rgba(198,168,106,0.03))] p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">Quantis Global</p>
      <h2 className="mt-3 text-4xl font-semibold text-white">Premium Global Trade Layer</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        International sourcing, procurement, and logistics designed for long-term business reliability.
      </p>
      <Link href="/quantis-global" className="mt-6 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white">
        View Quantis Global
      </Link>
    </section>
  );
}
