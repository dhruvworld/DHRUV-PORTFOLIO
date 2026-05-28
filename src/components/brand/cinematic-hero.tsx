import Link from "next/link";
import { focusAreas } from "@/content/skills";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-14" aria-labelledby="hero-heading">
      <div className="rounded-[2.2rem] border-[6px] border-[#232323] bg-[#f7f6f3] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.12)] md:p-9">
        <div className="max-w-4xl md:py-4">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[#4f4f4f]">
            <p>
              <span className="text-2xl font-semibold text-[#132232]">MS</span>
              <span className="ml-2">Computer Science · SNHU</span>
            </p>
            <p>
              <span className="text-2xl font-semibold text-[#132232]">NH</span>
              <span className="ml-2">Manchester, New Hampshire</span>
            </p>
          </div>
          <h1
            id="hero-heading"
            className="display-title mt-10 text-[clamp(4.5rem,10vw,8.8rem)] font-medium text-[#132232]"
          >
            Hello
          </h1>
          <p className="mt-3 text-lg text-[#535353]">— Dhruv Solanki, founder &amp; engineer</p>
          <p className="body-soft mt-7 max-w-2xl text-base leading-relaxed">
            Computer Science graduate student and founder of Quantis Global. I build AI-powered workflows,
            full-stack products, and digital brand systems — from Gujarat roots to Manchester, NH.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#555]"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="cta-pill rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
            >
              View projects
            </Link>
            <Link
              href="/about"
              className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]"
            >
              Timeline &amp; background
            </Link>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t hairline pt-5 text-sm text-[#5f5f5f]">
          <span className="uppercase tracking-[0.18em]">Dhruv Solanki · Dhruv World</span>
          <span>Scroll down ↓</span>
        </div>
      </div>
    </section>
  );
}
