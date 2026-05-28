import Image from "next/image";
import Link from "next/link";
import { mediaAssets } from "@/lib/media";

const focus: [string, string, string[]][] = [
  ["Creative Minds, New York", "Lead product direction with UX + branding tracks", ["UI/UX", "Branding"]],
  ["Innovative Designs, San Francisco", "Craft product systems for digital-first teams", ["UI/UX", "Product"]],
  ["Visionary Creations, Berlin", "Design-to-execution consulting for cross-functional teams", ["Branding", "UI/UX"]],
  ["FutureTech, Germany", "Long-term experience architecture and identity strategy", ["Branding", "AI UX"]],
];

export function CurrentFocus() {
  return (
    <section className="mt-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">• Experiences</p>
          <h2 className="section-title mt-4 text-4xl font-semibold md:text-5xl">Explore My Design Journey</h2>
          <p className="body-soft mt-5 text-base">
            Over the past years, I have worked on product and brand systems across startups and founder-led teams.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex text-sm font-medium text-[#132232] underline decoration-black/25 underline-offset-4"
          >
            Book A Call ↗
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
        {focus.map(([label, value, tags]) => (
          <article
            key={label}
            className="grid gap-4 border-b hairline py-6 last:border-none md:grid-cols-[1.15fr_1fr_auto] md:items-center"
          >
            <div>
              <p className="text-lg font-medium text-[#132232]">{label}</p>
              <p className="mt-1 text-xs text-[#8a8a8a]">• February 2022 - Present</p>
            </div>
            <p className="text-sm text-[#636363]">{value}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
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
