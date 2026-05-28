import Link from "next/link";
import { EditorialImage } from "@/components/brand/editorial-image";
import { certifications, resumePdfPath } from "@/content/certifications";
import { buildWorkflowNote } from "@/content/projects";
import { focusAreas, technicalSkills } from "@/content/skills";
import { mediaAssets } from "@/lib/media";

const highlights = [
  "Founder of Quantis Global — international sourcing, import-export, and logistics coordination.",
  "MS Computer Science at Southern New Hampshire University; MS IT from UNH Manchester.",
  "Full-stack builder: Python, Django, Next.js, Firebase, and AI workflow automation.",
  buildWorkflowNote,
];

export function AboutEditorial() {
  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
      <figure className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-[1.25rem] border hairline bg-[#eceae5] lg:mx-0">
        <EditorialImage asset={mediaAssets.portrait} sizes="240px" className="grayscale-[8%]" />
      </figure>

      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-[#5f5f5f]">About</p>
        <h1 className="section-title mt-4 text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-tight">
          Systems, trade, and code.
        </h1>
        <p className="body-soft mt-5 text-base leading-relaxed">
          Results-driven computer science graduate student with experience in software development, AI
          systems, digital branding, and international business strategy.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={resumePdfPath}
            className="cta-pill rounded-full bg-[#132232] px-5 py-2.5 text-sm font-medium text-[#f8f7f4]"
          >
            Download resume (PDF)
          </a>
          <Link
            href="/contact"
            className="cta-pill rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-[#132232]"
          >
            Contact ↗
          </Link>
        </div>
        <div className="mt-8 space-y-4">
          {highlights.map((text) => (
            <p key={text} className="text-sm leading-relaxed text-[#555] md:text-base">
              {text}
            </p>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Core stack</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border hairline bg-white px-3 py-1.5 text-xs text-[#444]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Focus</p>
            <ul className="mt-4 space-y-2 text-sm text-[#555]">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Certifications</p>
          <ul className="mt-4 space-y-2 text-sm text-[#555]">
            {certifications.map((cert) => (
              <li key={cert.title}>
                <span className="font-medium text-[#132232]">{cert.title}</span>
                {cert.issuer ? ` — ${cert.issuer}` : null}
                {cert.issued ? ` (${cert.issued})` : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
