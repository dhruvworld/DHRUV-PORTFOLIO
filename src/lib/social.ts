export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/dhruvworld/",
  github: "https://github.com/dhruvworld",
  instagram: "https://www.instagram.com/_dhruvworld/",
  facebook: "https://www.facebook.com/dhruv.solanki.4701",
  facebookPage: "https://www.facebook.com/TechXdhruvworld",
  youtube: "https://youtube.com/@dhruvworld",
  medium: "https://medium.com/@dhruvworld",
  emailPersonal: "mailto:dhruv4701@gmail.com",
  emailWork: "mailto:talktodhruv.ai@gmail.com",
  whatsappIn: "https://wa.me/919998734388",
  whatsappUs: "https://wa.me/14244682423",
} as const;

/** Entity graph URLs for JSON-LD `sameAs` — single source for SEO consistency. */
export function getSchemaSameAs(): string[] {
  return [
    socialLinks.linkedin,
    socialLinks.github,
    socialLinks.instagram,
    socialLinks.facebook,
    socialLinks.facebookPage,
    socialLinks.youtube,
    socialLinks.medium,
  ];
}
