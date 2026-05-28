import { proofLabels, proofPoints } from "@/content/profile";

export function ProofStrip() {
  return (
    <section className="mt-16" aria-labelledby="proof-heading">
      <p id="proof-heading" className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">
        Proof · not just claims
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((point) => (
          <div
            key={point.label}
            className="rounded-[1.25rem] border hairline bg-white/70 px-5 py-4"
          >
            <p className="text-2xl font-semibold tracking-tight text-[#132232]">{point.value}</p>
            <p className="mt-1 text-xs leading-relaxed text-[#666]">{point.label}</p>
          </div>
        ))}
      </div>
      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#7a7a7a]">
        {proofLabels.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </section>
  );
}
