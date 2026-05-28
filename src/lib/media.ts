/**
 * Optional media slots — only use real photography with descriptive alt text.
 * The live site is text-first; do not add UI screenshot placeholders here.
 */
export type MediaAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

/** Reserved for a future verified portrait. Not rendered until provided. */
export const optionalPortrait: MediaAsset | null = null;
