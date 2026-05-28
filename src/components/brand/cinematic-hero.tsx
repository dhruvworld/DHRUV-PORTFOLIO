import Link from "next/link";
import { mediaAssets } from "@/lib/media";
import { EditorialImage } from "@/components/brand/editorial-image";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-14">
      <div className="rounded-[2.2rem] border-[6px] border-[#232323] bg-[#f7f6f3] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] md:p-9">
        <div className="grid gap-10 md:grid-cols-[1fr_1.08fr] md:items-center">
          <div className="md:py-4">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[#4f4f4f]">
              <p>
                <span className="text-2xl font-semibold text-[#132232]">4+</span>
                <span className="ml-2">Years building</span>
              </p>
              <p>
                <span className="text-2xl font-semibold text-[#132232]">2</span>
                <span className="ml-2">Layers — identity & execution</span>
              </p>
            </div>
            <h1 className="display-title mt-10 text-[clamp(4.5rem,10vw,8.8rem)] font-medium text-[#132232]">
              Hello
            </h1>
            <p className="mt-3 text-lg text-[#535353]">— It&apos;s Dhruv, an AI systems founder</p>
            <p className="body-soft mt-7 max-w-md text-base">
              Building practical AI-first products across automation, publishing, and business systems.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="cta-pill rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]"
              >
                Book a Call
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[1.35rem] border hairline bg-[#eceae5] md:min-h-[460px]">
            <EditorialImage
              asset={mediaAssets.hero}
              priority
              sizes="(max-width: 768px) 100vw, 52vw"
              className="grayscale-[8%] contrast-[1.02]"
            />
            <div className="absolute right-4 top-4 grid h-14 w-14 place-items-center rounded-full bg-[#1f2430] text-xl text-white shadow-[0_8px_18px_rgba(0,0,0,0.2)]">
              ↗
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t hairline pt-5 text-sm text-[#5f5f5f]">
          <span className="uppercase tracking-[0.18em]">Dhruv Solanki</span>
          <span>Scroll down ↓</span>
        </div>
      </div>
    </section>
  );
}
