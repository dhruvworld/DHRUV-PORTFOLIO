import type { DynamicRouteContent } from "@/lib/route-content";

type RelatedLink = { href: string; label: string };

const baseLinks: RelatedLink[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function getRelatedLinksForTopic(topic: DynamicRouteContent["topic"]): RelatedLink[] {
  switch (topic) {
    case "cluster":
      return [
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "AI Journal" },
        { href: "/ai", label: "AI Lab" },
        { href: "/case-studies", label: "Case Studies" },
        ...baseLinks,
      ];
    case "local":
      return [
        { href: "/about", label: "About" },
        { href: "/founder", label: "Founder" },
        { href: "/quantis-global", label: "Quantis Global" },
        { href: "/contact", label: "Contact" },
      ];
    case "identity":
    case "media":
      return [
        { href: "/founder", label: "Founder" },
        { href: "/blog", label: "AI Journal" },
        { href: "/projects", label: "Projects" },
        ...baseLinks,
      ];
    case "growth":
    default:
      return [
        { href: "/blog", label: "AI Journal" },
        { href: "/resources", label: "Resources" },
        { href: "/newsletters", label: "Newsletter" },
        { href: "/projects", label: "Projects" },
        ...baseLinks,
      ];
  }
}
