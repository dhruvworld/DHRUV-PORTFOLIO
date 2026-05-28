export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  type: "guide" | "template" | "notes" | "case-doc" | "prompt";
  audience: "student" | "builder" | "founder";
  /** Optional paragraphs shown on the resource detail page */
  body?: string[];
  /** Copy-paste prompt for AI image tools */
  prompt?: string;
};

export const resources: ResourceItem[] = [
  {
    slug: "clean-mirror-photo-prompt",
    title: "Clean Mirror Photo Prompt",
    description:
      "AI image prompt to remove dirt and smudges from a mirror while keeping the reflection and scene unchanged.",
    type: "prompt",
    audience: "builder",
    body: [
      "Use this prompt in ChatGPT, Gemini, Photoshop Generative Fill, or any image editor that accepts natural-language instructions.",
      "Best for mirror selfies and interior shots where the mirror has fingerprints, haze, dust, or water stains — without changing the person or composition.",
    ],
    prompt:
      "Remove all dirt, smudges, fingerprints, dust, water stains, and haze from the mirror surface while keeping the reflection, person, pose, lighting, background, angle, facial features, outfit, and composition exactly the same. Make the mirror look perfectly clean and crystal clear with realistic reflections and natural lighting. Do not alter skin tone, body shape, hairstyle, accessories, or any objects in the scene. Only clean and restore the mirror quality while preserving the original photo's realism and details.",
  },
];
