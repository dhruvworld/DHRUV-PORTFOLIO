import Link from "next/link";
import { caseStudies } from "@/content/case-studies";

export function RelatedCaseStudies({ currentSlug }: { currentSlug: string }) {
  const related = caseStudies.filter((study) => study.slug !== currentSlug).slice(0, 1);
  if (related.length === 0) return null;

  return (
    <section className="mt-12 rounded-[1.35rem] border hairline bg-white/60 p-6 md:p-8">
      <h2 className="section-title text-2xl font-semibold">More case studies</h2>
      {related.map((study) => (
        <Link key={study.slug} href={`/case-studies/${study.slug}`} className="mt-5 block">
          <p className="text-xs uppercase tracking-[0.14em] text-[#2e5e4e]">{study.domain}</p>
          <h3 className="mt-2 text-xl font-medium text-[#132232]">{study.title}</h3>
          <p className="mt-2 text-sm text-[#666]">{study.summary}</p>
        </Link>
      ))}
    </section>
  );
}
