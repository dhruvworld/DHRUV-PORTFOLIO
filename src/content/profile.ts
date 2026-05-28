/** Positioning, proof, and featured story — portfolio best-practice framing. */

export const whoIHelp =
  "I help founders, trade operators, and product teams launch faster — with live software, clear logistics, and AI workflows they can actually run.";

export const whoIHelpFormula =
  "I help [who] achieve [what] without [pain point] — applied across Quantis Global (trade) and engineering client work.";

export const proofPoints = [
  { value: "150+", label: "Countries · Quantis Global logistics" },
  { value: "24hr", label: "Trade quote response commitment" },
  { value: "10+", label: "Projects on GitHub (dhruvworld)" },
  { value: "2× MS", label: "SNHU · UNH Manchester" },
] as const;

export const proofLabels = [
  "Quantis Global · quantisglobal.co",
  "H G Smelters Pvt Ltd · client mobile app",
  "Dhruv World · this platform",
  "OpenSourceDisplayLink · R&D",
] as const;

export const featuredCaseStudy = {
  slug: "quantis-global-brand-foundation",
  title: "Quantis Global",
  liveUrl: "https://quantisglobal.co",
  problem:
    "Businesses expanding internationally face fragmented sourcing, slow quotes, and opaque logistics — hiring managers and partners can't see impact from code alone.",
  solution:
    "Built and positioned a live import/export brand: quantisglobal.co with ocean/air/land freight, customs, warehousing, and certified operations (IEC, GST, MSME).",
  results: [
    "150+ countries in service positioning",
    "24-hour quote response commitment",
    "Live site + portfolio case study (not repo-only)",
  ],
} as const;

export const contactChannels = [
  {
    id: "whatsapp-us",
    label: "WhatsApp (US)",
    detail: "Fastest for quick questions",
    href: "https://wa.me/14244682423",
    badge: "Quick replies",
  },
  {
    id: "whatsapp-in",
    label: "WhatsApp (India)",
    detail: "Trade & India coordination",
    href: "https://wa.me/919998734388",
    badge: "Quick replies",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    detail: "Professional outreach",
    href: "https://www.linkedin.com/in/dhruvworld/",
    badge: "Best for collab",
  },
  {
    id: "email-work",
    label: "Email",
    detail: "talktodhruv.ai@gmail.com",
    href: "mailto:talktodhruv.ai@gmail.com",
    badge: "Formal intro",
  },
] as const;

export const contactResponseNote = "Usually replies within a few hours (US Eastern / India overlap).";
