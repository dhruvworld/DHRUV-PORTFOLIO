import { footerExplore, primaryNav } from "@/lib/site-nav";

export type CommandRoute = {
  href: string;
  label: string;
  keywords?: string;
};

const extraRoutes: CommandRoute[] = [
  { href: "/", label: "Home", keywords: "index start" },
  { href: "/ai", label: "AI Lab", keywords: "artificial intelligence workflows" },
  { href: "/search", label: "Search", keywords: "find content" },
  { href: "/newsletters", label: "Newsletter", keywords: "subscribe email" },
  { href: "/case-studies", label: "Case Studies", keywords: "proof outcomes" },
  { href: "/quantis-global", label: "Quantis Global", keywords: "trade sourcing business" },
];

/** Deduplicated palette routes for ⌘K navigation. */
export const commandRoutes: CommandRoute[] = [
  ...extraRoutes,
  ...primaryNav.map((item) => ({ href: item.href, label: item.label })),
  ...footerExplore
    .filter((item) => !primaryNav.some((nav) => nav.href === item.href))
    .map((item) => ({ href: item.href, label: item.label })),
].filter((route, index, list) => list.findIndex((entry) => entry.href === route.href) === index);
