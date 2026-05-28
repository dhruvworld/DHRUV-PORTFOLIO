import Link from "next/link";
import { focusAreas, technicalSkills } from "@/content/skills";

const highlights = [
  "Founder of Quantis Global — international sourcing, import-export, and logistics coordination.",
  "MS Computer Science at Southern New Hampshire University; MS IT from UNH Manchester.",
  "Full-stack builder: Python, Django, Next.js, Firebase, and AI workflow automation.",
];

export function AboutEditorial() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[#5f5f5f]">About</p>
        <h2 className="section-title mt-5 text-[clamp(2.6rem,5vw,4.2rem)] font-semibold leading-[0.95]">
          Systems, trade, and code.
        </h2>
        <p className="body-soft mt-6 text-base leading-relaxed">
          Results-driven computer science graduate student with experience in software development, AI
          systems, digital branding, and international business strategy. I connect product engineering with
          execution — whether that is a Django backend, a Next.js platform, or a global sourcing operation.
        </p>
        <div className="mt-8 space-y-4">
          {highlights.map((text) => (
            <div key={text} className="flex gap-4">
              <span
                className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#132232] text-xs text-white"
                aria-hidden
              >
                ✦
              </span>
              <p className="text-sm leading-relaxed text-[#555] md:text-base">{text}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-flex text-sm font-medium text-[#132232] underline decoration-black/25 underline-offset-4"
        >
          Get in touch ↗
        </Link>
      </div>

      <aside className="rounded-[1.75rem] border hairline bg-white p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Core stack</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technical skills">
          {technicalSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border hairline bg-[#f8f7f4] px-3 py-1.5 text-xs text-[#444]"
            >
              {skill}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Focus</p>
        <ul className="mt-3 space-y-2 text-sm text-[#555]">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
