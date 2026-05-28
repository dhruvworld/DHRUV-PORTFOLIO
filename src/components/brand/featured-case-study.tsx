import Link from "next/link";
import { featuredCaseStudy } from "@/content/profile";

const steps = [
  { key: "problem", label: "Problem", tone: "border-[#c45c5c]/40 bg-[#fdf6f6]" },
  { key: "solution", label: "Solution", tone: "border-[#2e5e4e]/35 bg-[#f4f8f6]" },
  { key: "results", label: "Result", tone: "border-[#8f6a34]/35 bg-[#faf7f2]" },
] as const;

export function FeaturedCaseStudy() {
  return (
    <section className="mt-20" aria-labelledby="case-study-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">Case study</p>
          <h2 id="case-study-heading" className="section-title mt-2 text-4xl font-semibold md:text-5xl">
            Problem → solution → result
          </h2>
          <p className="body-soft mt-3 max-w-2xl text-sm md:text-base">
            Don&apos;t only list repos. Show who you helped, what you built, and what changed.
          </p>
        </div>
        <Link
          href={`/case-studies/${featuredCaseStudy.slug}`}
          className="text-sm text-[#2e5e4e] hover:underline"
        >
          Full write-up ↗
        </Link>
      </div>

      <p className="mt-6 text-lg font-medium text-[#132232]">{featuredCaseStudy.title}</p>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <article className={`rounded-[1.25rem] border p-5 ${steps[0].tone}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8b3a3a]">
            {steps[0].label}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#555]">{featuredCaseStudy.problem}</p>
        </article>
        <article className={`rounded-[1.25rem] border p-5 ${steps[1].tone}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2e5e4e]">
            {steps[1].label}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#555]">{featuredCaseStudy.solution}</p>
        </article>
        <article className={`rounded-[1.25rem] border p-5 ${steps[2].tone}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6a34]">
            {steps[2].label}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#555]">
            {featuredCaseStudy.results.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={featuredCaseStudy.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#132232] px-5 py-2.5 text-sm font-medium text-[#f8f7f4]"
        >
          Live demo · quantisglobal.co ↗
        </a>
        <Link
          href={`/case-studies/${featuredCaseStudy.slug}`}
          className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-[#132232]"
        >
          Read case study
        </Link>
      </div>
    </section>
  );
}
