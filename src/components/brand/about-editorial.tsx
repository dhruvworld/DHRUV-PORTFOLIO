import { mediaAssets } from "@/lib/media";
import { EditorialImage } from "@/components/brand/editorial-image";

export function AboutEditorial() {
  return (
    <>
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr_1.1fr] md:gap-8">
        <div className="md:pt-2">
          <p className="text-xs uppercase tracking-[0.24em] text-[#5f5f5f]">About Me</p>
          <h2 className="section-title mt-5 text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-[0.95]">
            About Me
          </h2>
          <p className="body-soft mt-6 text-base leading-relaxed">
            I specialize in turning complex problems into elegant solutions. My approach blends creativity
            with strategic thinking to deliver systems that look refined and perform reliably.
          </p>
          <div
            className="mt-10 h-28 w-28 rounded-full border border-black/8 opacity-30"
            style={{
              background:
                "conic-gradient(from 200deg, transparent 0 70%, rgba(19,34,50,0.15) 70% 100%)",
            }}
            aria-hidden
          />
        </div>

        <article className="flex flex-col rounded-[1.75rem] border hairline bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
          <div className="grid h-10 w-10 place-items-center rounded-full border hairline text-sm">◎</div>
          <p className="mt-8 text-[clamp(3rem,6vw,4.5rem)] font-semibold leading-none tracking-tight text-[#132232]">
            120%
          </p>
          <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-[#666]">
            Average increase in client engagement in the first 6 months
          </p>
          <div className="relative mt-8 min-h-[280px] flex-1 overflow-hidden rounded-[1.25rem] bg-[#efeeea]">
            <EditorialImage asset={mediaAssets.about.centerPortrait} className="grayscale-[18%]" />
          </div>
        </article>

        <div className="space-y-6 md:pt-2">
          <figure className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-[1.25rem] border hairline bg-[#efeeea]">
            <EditorialImage asset={mediaAssets.about.sidePortrait} className="grayscale-[12%]" />
            <div className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full bg-white text-lg text-[#132232] shadow-sm">
              ↗
            </div>
          </figure>

          {[
            "With 4+ years of experience, I specialize in creating intuitive, user-focused systems that solve real-world problems.",
            "I thrive on working closely with clients, blending creativity with strategy to bring long-term digital identity visions to life.",
          ].map((text) => (
            <div key={text} className="flex gap-4">
              <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#132232] text-xs text-white">
                ✦
              </span>
              <p className="text-sm leading-relaxed text-[#555] md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Primary", "#132232", "bg-[#132232] text-white"],
          ["Accent", "#D9AA3F", "bg-[#D9AA3F] text-[#132232]"],
          ["Teal", "#2F7D77", "bg-[#2F7D77] text-white"],
          ["Ivory", "#F5F3EF", "bg-[#F5F3EF] text-[#132232] border hairline"],
        ].map(([name, hex, classes]) => (
          <article key={name} className={`rounded-2xl p-5 ${classes}`}>
            <p className="text-sm">{name}</p>
            <p className="mt-2 text-2xl font-medium tracking-tight">{hex}</p>
          </article>
        ))}
      </div>
    </>
  );
}
