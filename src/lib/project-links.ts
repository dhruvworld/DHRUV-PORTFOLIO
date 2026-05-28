import type { HighlightProject } from "@/content/projects";
import { projectGithubUrl } from "@/content/projects";

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

/** Live demo → case study → GitHub (portfolio best-practice order). */
export function getProjectLinks(project: HighlightProject): ProjectLink[] {
  const links: ProjectLink[] = [];

  if (project.liveUrl) {
    links.push({ label: "Live demo", href: project.liveUrl, external: true, primary: true });
  } else if (project.href.startsWith("http")) {
    links.push({ label: "View on GitHub", href: project.href, external: true, primary: true });
  } else if (!project.href.startsWith("#")) {
    links.push({ label: "View project", href: project.href, primary: true });
  }

  if (project.caseStudySlug) {
    links.push({
      label: "Case study",
      href: `/case-studies/${project.caseStudySlug}`,
    });
  }

  if (project.githubRepo) {
    const githubHref = projectGithubUrl(project.githubRepo);
    const alreadyPrimary = links.some((l) => l.href === githubHref);
    if (!alreadyPrimary) {
      links.push({ label: "GitHub", href: githubHref, external: true });
    }
  }

  return links;
}
