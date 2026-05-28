import Link from "next/link";
import { getProjectLinks, type ProjectLink } from "@/lib/project-links";
import type { HighlightProject } from "@/content/projects";

function LinkItem({ link }: { link: ProjectLink }) {
  const className = link.primary
    ? "cta-pill rounded-full bg-[#132232] px-4 py-2 text-xs font-medium text-[#f8f7f4] md:text-sm"
    : "cta-pill rounded-full border border-black/15 px-4 py-2 text-xs font-medium text-[#132232] md:text-sm";

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label} ↗
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label} ↗
    </Link>
  );
}

export function ProjectLinkRow({ project }: { project: HighlightProject }) {
  const links = getProjectLinks(project);
  if (links.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {links.map((link) => (
        <LinkItem key={`${link.label}-${link.href}`} link={link} />
      ))}
    </div>
  );
}
