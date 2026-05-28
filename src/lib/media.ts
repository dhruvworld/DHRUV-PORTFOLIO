export type MediaAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

/** Section-mapped visuals (reference screenshots) */
export const mediaAssets = {
  hero: {
    src: "/media/Screenshot_2026-05-28_at_7.50.32_PM-66dea64e-eb52-475e-b58b-47771e9ebb6a.png",
    alt: "Dhruv Solanki portfolio hero",
    objectPosition: "72% 42%",
  },
  about: {
    centerPortrait: {
      src: "/media/Screenshot_2026-05-28_at_7.50.48_PM-87a12e59-c1ae-4e39-be04-f8faa37e20b8.png",
      alt: "Dhruv Solanki portrait",
      objectPosition: "38% 72%",
    },
    sidePortrait: {
      src: "/media/Screenshot_2026-05-28_at_7.50.48_PM-87a12e59-c1ae-4e39-be04-f8faa37e20b8.png",
      alt: "Dhruv Solanki profile",
      objectPosition: "78% 28%",
    },
  },
  work: [
    {
      src: "/media/Screenshot_2026-05-28_at_7.50.51_PM-aedb3351-c764-4aff-88dc-af06da3485f1.png",
      alt: "Portfolio project one",
      objectPosition: "18% 50%",
    },
    {
      src: "/media/Screenshot_2026-05-28_at_7.50.51_PM-aedb3351-c764-4aff-88dc-af06da3485f1.png",
      alt: "Portfolio project two",
      objectPosition: "50% 50%",
    },
    {
      src: "/media/Screenshot_2026-05-28_at_7.50.51_PM-aedb3351-c764-4aff-88dc-af06da3485f1.png",
      alt: "Portfolio project three",
      objectPosition: "82% 50%",
    },
  ],
  gallery: [
    {
      src: "/media/Screenshot_2026-05-28_at_7.50.08_PM-e8ce6118-4910-4bc0-9524-521cee624fc7.png",
      alt: "Mobile portfolio showcase one",
      objectPosition: "22% 50%",
    },
    {
      src: "/media/Screenshot_2026-05-28_at_7.50.08_PM-e8ce6118-4910-4bc0-9524-521cee624fc7.png",
      alt: "Mobile portfolio showcase two",
      objectPosition: "50% 50%",
    },
    {
      src: "/media/Screenshot_2026-05-28_at_7.50.08_PM-e8ce6118-4910-4bc0-9524-521cee624fc7.png",
      alt: "Mobile portfolio showcase three",
      objectPosition: "78% 50%",
    },
  ],
  experience: {
    src: "/media/Screenshot_2026-05-28_at_7.50.14_PM-2222d2eb-9d54-4162-97bf-ed05fd2edef5.png",
    alt: "Experience timeline reference",
    objectPosition: "center top",
  },
} as const;

/** @deprecated Use mediaAssets.hero */
export const founderPortrait = mediaAssets.hero;

/** @deprecated Use mediaAssets.gallery */
export const homepageGallery = mediaAssets.gallery;
