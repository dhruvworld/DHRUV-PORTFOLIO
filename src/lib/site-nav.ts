export type NavItem = {
  href: string;
  label: string;
};

/** Main header links — always visible on desktop. */
export const primaryNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Journal" },
  { href: "/founder", label: "Founder" },
  { href: "/contact", label: "Contact" },
];

/** Proof, business, and depth pages — shown in Explore bar + mobile + footer. */
export const exploreNav: NavItem[] = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/quantis-global", label: "Quantis Global" },
  { href: "/resources", label: "Resources" },
  { href: "/ai", label: "AI Lab" },
];

/** @deprecated Use exploreNav */
export const footerExplore = exploreNav;
