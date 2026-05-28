import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { mediaAssets } from "@/lib/media";
import { EditorialImage } from "@/components/brand/editorial-image";
import { ConsultationCTA } from "@/components/brand/consultation-cta";

const highlightedProjects = [
  {
    slug: "quantis-global",
    title: "Quantis Global",
    stack: "Business Systems • Trade Ops",
    details: [
      "Challenge: fragmented sourcing workflows and low trust signals.",
      "Execution: structured sourcing, verification, and logistics coordination layer.",
      "Outcome: clearer positioning for premium global execution partnerships.",
    ],
  },
  {
    slug: "savemepdf",
    title: "SaveMePDF",
    stack: "Product Utility • Creator Tools",
    details: [
      "Challenge: repetitive document operations and manual formatting.",
      "Execution: utility-first PDF workflow concept with speed and consistency focus.",
      "Outcome: cleaner creator and student productivity pathway.",
    ],
  },
  {
    slug: "post2plan",
    title: "Post2Plan",
    stack: "AI Workflow • Publishing System",
    details: [
      "Challenge: inconsistent posting and weak strategic repurposing.",
      "Execution: convert ideas into structured publishing plans.",
      "Outcome: more consistent content velocity and authority compounding.",
    ],
  },
  {
    slug: "opensource-displaylink",
    title: "OpenSourceDisplayLink",
    stack: "Engineering R&D • Cross-platform",
    details: [
      "Challenge: extend displays across devices with low latency.",
      "Execution: realtime streaming and pointer-tracking architecture.",
      "Outcome: practical prototype direction for high-performance utility software.",
    ],
  },
  {
    slug: "dhruv-world",
    title: "Dhruv World",
    stack: "Identity Platform • Media Systems",
    details: [
      "Challenge: fragmented online identity and weak search consistency.",
      "Execution: unified personal brand architecture across pages, writing, and entity signals.",
      "Outcome: stronger narrative clarity and long-term authority compounding.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Dhruv Solanki across Quantis Global, AI workflows, productivity tools, and digital identity systems.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <section className="py-2 md:py-6">
        <h1 className="display-title text-5xl font-semibold tracking-tight md:text-6xl">Projects</h1>
        <p className="body-soft mt-6 max-w-4xl text-lg">
          Selected builds across business execution, AI workflows, and product engineering.
        </p>
      </section>

      <section className="mt-12 grid gap-12">
        {highlightedProjects.map((project, index) => {
          const visual = mediaAssets.work[index % mediaAssets.work.length];
          return (
            <article id={project.slug} key={project.title} className="scroll-mt-28 overflow-hidden rounded-[1.35rem] border hairline bg-white/65">
              <div className="relative aspect-[16/8] bg-[#eceae5]">
                <EditorialImage asset={visual} className="grayscale-[12%]" />
                <div className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-[#2b2f38] text-white">
                  ↗
                </div>
              </div>
              <div className="border-t hairline p-6 md:p-8">
                <h2 className="section-title text-4xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#2e5e4e]">{project.stack}</p>
                <ul className="mt-6 max-w-4xl space-y-3 text-sm text-[#4f4f4f] md:text-base">
                  {project.details.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <ConsultationCTA />
    </SiteShell>
  );
}
