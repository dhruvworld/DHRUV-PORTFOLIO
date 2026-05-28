import Link from "next/link";
import { mediaAssets } from "@/lib/media";
import { EditorialImage } from "@/components/brand/editorial-image";

export function ConsultationCTA() {
  return (
    <section className="relative mt-20 min-h-[320px] overflow-hidden rounded-[1.75rem] border hairline bg-[#1a1f28] p-10 text-center md:min-h-[360px] md:p-14">
      <div className="absolute inset-0 opacity-35">
        <EditorialImage asset={mediaAssets.consultation} className="grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f28]/30 via-[#1a1f28]/75 to-[#1a1f28]" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d4bb8e]">Book your free consultation</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#f5f3ef] md:text-5xl">
          Let&apos;s design your next system together.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#c8c4ba] md:text-base">
          Discuss AI workflows, product direction, and digital identity strategy with a practical execution lens.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex text-sm font-medium text-[#f5f3ef] underline decoration-[#d9aa3f] underline-offset-4"
        >
          Let&apos;s talk ↗
        </Link>
      </div>
    </section>
  );
}
