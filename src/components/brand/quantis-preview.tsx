import Link from "next/link";

export function QuantisPreview() {
  return (
    <section className="mt-24 rounded-[2rem] border border-[#c9a66b]/28 bg-[radial-gradient(110%_180%_at_80%_0%,rgba(201,166,107,0.2),transparent_56%),linear-gradient(145deg,#111111_12%,#1a1a1a_100%)] p-10 md:p-12">
      <p className="text-xs uppercase tracking-[0.22em] text-[#d4bb8e]">Quantis Global</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#f5f3ef] md:text-5xl">
        Premium Global Trade Layer
      </h2>
      <p className="mt-4 max-w-3xl text-[#d3cec2]">
        International sourcing, procurement, and logistics designed for long-term business reliability.
      </p>
      <Link
        href="/quantis-global"
        className="mt-8 inline-flex rounded-full border border-[#f5f3ef]/28 px-5 py-2.5 text-sm text-[#f5f3ef] transition hover:border-[#d4bb8e] hover:text-[#d4bb8e]"
      >
        View Quantis Global
      </Link>
    </section>
  );
}
