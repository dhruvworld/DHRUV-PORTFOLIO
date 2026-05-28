export type NavItem = {
  href: string;
  label: string;
};

/** Single header order — logical flow, no category labels. */
export const headerNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Journal" },
  { href: "/quantis-global", label: "Quantis" },
  { href: "/resources", label: "Resources" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

/** Footer column: core pages */
export const primaryNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Journal" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

/** Footer column: depth & proof */
export const exploreNav: NavItem[] = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/quantis-global", label: "Quantis Global" },
  { href: "/resources", label: "Resources" },
  { href: "/ai", label: "AI Lab" },
];
