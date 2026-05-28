import Image from "next/image";
import Link from "next/link";
import { experienceRows } from "@/content/experience";
import { mediaAssets } from "@/lib/media";

export function CurrentFocus() {
  return (
    <section className="mt-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">• Experience</p>
          <h2 className="section-title mt-4 text-4xl font-semibold md:text-5xl">Where the work lives</h2>
          <p className="body-soft mt-5 text-base">
            Founder-led systems across identity, global trade, and AI product execution — from Gujarat roots
            to Manchester studies and ongoing builder work.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-medium text-[#132232] underline decoration-black/25 underline-offset-4"
          >
            Read the full story ↗
          </Link>
        </div>

        <div className="relative hidden overflow-hidden rounded-2xl border hairline bg-white/60 lg:block">
          <div className="relative aspect-[16/11]">
            <Image
              src={mediaAssets.experience.src}
              alt={mediaAssets.experience.alt}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-0 rounded-2xl border hairline bg-white/60 px-4 md:px-6">
        {experienceRows.map((row) => (
          <article
            key={row.label}
            className="grid gap-4 border-b hairline py-6 last:border-none md:grid-cols-[1.15fr_1fr_auto] md:items-center"
          >
            <div>
              <p className="text-lg font-medium text-[#132232]">{row.label}</p>
              <p className="mt-1 text-xs text-[#8a8a8a]">• {row.period}</p>
            </div>
            <p className="text-sm text-[#636363]">{row.description}</p>
            <div className="flex flex-wrap gap-2">
              {row.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border hairline bg-[#f3f3f3] px-3 py-1 text-xs text-[#444]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
