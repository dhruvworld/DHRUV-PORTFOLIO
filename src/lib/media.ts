export type MediaAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

/**
 * Drop-in media map. Replace files in /public/media/ — no code changes needed.
 */
export const mediaAssets = {
  hero: {
    src: "/media/hero.png",
    alt: "Dhruv Solanki portfolio hero",
    objectPosition: "72% 42%",
  },
  about: {
    centerPortrait: {
      src: "/media/about-center.png",
      alt: "Dhruv Solanki portrait",
      objectPosition: "38% 72%",
    },
    sidePortrait: {
      src: "/media/about-side.png",
      alt: "Dhruv Solanki profile",
      objectPosition: "78% 28%",
    },
  },
  work: [
    {
      src: "/media/project-strip.png",
      alt: "Portfolio project one",
      objectPosition: "18% 50%",
    },
    {
      src: "/media/project-strip.png",
      alt: "Portfolio project two",
      objectPosition: "50% 50%",
    },
    {
      src: "/media/project-strip.png",
      alt: "Portfolio project three",
      objectPosition: "82% 50%",
    },
  ],
  gallery: [
    {
      src: "/media/gallery-mobile.png",
      alt: "Mobile portfolio showcase one",
      objectPosition: "22% 50%",
    },
    {
      src: "/media/gallery-mobile.png",
      alt: "Mobile portfolio showcase two",
      objectPosition: "50% 50%",
    },
    {
      src: "/media/gallery-mobile.png",
      alt: "Mobile portfolio showcase three",
      objectPosition: "78% 50%",
    },
  ],
  experience: {
    src: "/media/experience.png",
    alt: "Experience timeline reference",
    objectPosition: "center top",
  },
  consultation: {
    src: "/media/consultation.png",
    alt: "Consultation background",
    objectPosition: "center",
  },
} as const;

/** @deprecated Use mediaAssets.hero */
export const founderPortrait = mediaAssets.hero;

/** @deprecated Use mediaAssets.gallery */
export const homepageGallery = mediaAssets.gallery;
