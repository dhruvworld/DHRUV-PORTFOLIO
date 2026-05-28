export type MediaAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
  width?: number;
  height?: number;
};

export const mediaAssets = {
  portrait: {
    src: "/media/portrait.png",
    alt: "Dhruv Solanki, founder of Quantis Global, computer science graduate student in Manchester New Hampshire",
    objectPosition: "center top",
    width: 1254,
    height: 1254,
  },
} as const;
