import Link from "next/link";
import { mediaAssets } from "@/lib/media";
import { EditorialImage } from "@/components/brand/editorial-image";

const projects = [
  {
    title: "Quantis Global",
    what: "International sourcing and trade execution platform.",
    category: "Business Systems",
  },
  {
    title: "SaveMePDF",
    what: "Fast document workflow for PDF, Word, and Excel tasks.",
    category: "Productivity",
  },
  {
    title: "Post2Plan",
    what: "Turns raw ideas into structured publishing plans.",
    category: "AI Workflow",
  },
];

export function SelectedWork() {
  return (
    <section className="mt-28 space-y-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="section-title text-4xl font-semibold md:text-5xl">Portfolio Highlights</h2>
        <Link href="/projects" className="text-sm text-[#5f5f5f] hover:text-[#132232]">
          View all projects ↗
        </Link>
      </div>

      <div className="grid gap-7 md:grid-cols-3">
        {projects.map((project, index) => {
          const visual = mediaAssets.work[index];
          return (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.35rem] border hairline bg-white/70"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eceae5]">
                <EditorialImage asset={visual} className="grayscale-[10%] transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-[#2b2f38] text-white shadow-[0_8px_18px_rgba(0,0,0,0.22)]">
                  ↗
                </div>
              </div>
              <div className="border-t hairline p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#6f6f6f]">{project.category}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#132232]">{project.title}</h3>
                <p className="mt-2 text-sm text-[#606060]">{project.what}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-2">
        <span className="h-2 w-10 rounded-full bg-[#132232]" />
        <span className="h-2 w-2 rounded-full bg-[#9a9a9a]" />
        <span className="h-2 w-2 rounded-full bg-[#9a9a9a]" />
      </div>
    </section>
  );
}
