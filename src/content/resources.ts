import published from "./resources-published.json";

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
  /** Full file or external download link */
  downloadUrl?: string;
  downloadLabel?: string;
};

const coreResources: ResourceItem[] = [
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
  {
    slug: "premanand-maharaj-satsang-collage-prompt",
    title: "Premanand Maharaj Satsang Collage Prompt",
    description:
      "Ultra-realistic 3-frame vertical cinematic collage prompt — face-to-face satsang with Premanand Maharaj Ji, using your reference photo for identity.",
    type: "prompt",
    audience: "builder",
    body: [
      "Upload your reference photo first, then paste this prompt in ChatGPT, Gemini, or any image model that supports identity from a reference image.",
      "Creates a 9:16 vertical collage (3 stacked frames) of a devotional satsang moment in Vrindavan-style atmosphere — subject and Maharaj Ji face-to-face, natural eye contact, no camera stare.",
      "Keep outfit and appearance close to your reference: dark printed kurta, saffron shawl, tilak, barefoot on carpet.",
    ],
    prompt: `Ultra-realistic cinematic spiritual meeting portrait collage using ONLY the uploaded reference image for exact facial identity, hairstyle, beard, skin tone, body structure, and natural appearance. Preserve the real face perfectly with authentic DSLR realism and natural human details.   SCENE CONCEPT: Create a beautiful emotional 3-frame vertical cinematic collage showing the subject sitting DIRECTLY IN FRONT OF Premanand Maharaj Ji during a peaceful satsang interaction inspired by authentic Vrindavan ashram atmosphere. The collage should feel spiritually emotional, divine, warm, candid, and naturally photographed like rare real-life devotional moments.   VERY IMPORTANT INTERACTION DETAILS: • Subject and Premanand Maharaj Ji must sit FACE-TO-FACE directly opposite each other • Subject must NOT sit on left side or corner composition • Subject should sit exactly in front of Maharaj Ji at respectful distance • Premanand Maharaj Ji sitting slightly on elevated gaddi/asana platform • Maharaj Ji lovingly speaking and giving spiritual guidance/instructions directly to subject • Subject listening emotionally and respectfully • Strong natural eye contact between both people • Authentic guru-shishya emotional connection visible • Natural candid satsang interaction only • No awkward posing • No looking at camera • Both focused on each other naturally   COLLAGE STRUCTURE (VERY IMPORTANT): • vertical 9:16 cinematic collage • 3 horizontal cinematic frames stacked vertically • smooth thin white borders separating frames • natural storytelling continuity across all frames • emotional documentary photography feel • cinematic devotional storytelling composition   FRAME 1: Subject sitting DIRECTLY IN FRONT OF Premanand Maharaj Ji with HANDS JOINED IN NAMASTE while respectfully listening. Premanand Maharaj Ji sitting slightly higher on yellow gaddi/asana behind yellow cloth-covered table with microphone. Maharaj Ji actively speaking and giving spiritual instructions while looking directly into subject's eyes. Subject also looking respectfully at Maharaj Ji. Authentic satsang atmosphere.   FRAME 2: Closer emotional interaction frame where Premanand Maharaj Ji is explaining something lovingly with natural hand gesture while subject listens emotionally and attentively. Strong eye contact between both. Subject slightly emotional/devotional expression. Softly blurred saffron/yellow devotees visible around background.   FRAME 3: Warm blessing/conversation moment where subject smiles peacefully after guidance/blessings while still facing Maharaj Ji directly. Maharaj Ji smiling gently while speaking. Emotional divine candid vibe with peaceful spiritual energy and authentic satsang atmosphere.   SUBJECT DETAILS: • exact same face identity from uploaded image • same realistic beard and hairstyle • natural human skin texture • realistic devotional expression • proper Indian facial proportions • small vertical sandalwood/chandan tilak on forehead • natural candid sitting posture • emotionally respectful body language • realistic hands and fingers • authentic eye direction toward Maharaj Ji   OUTFIT (VERY IMPORTANT — KEEP SIMILAR TO REFERENCE IMAGE): • black/dark traditional Indian kurta with elegant circular ethnic print patterns inspired exactly by uploaded reference image • rich saffron-orange/red devotional shawl/safa draped naturally around shoulders exactly like reference image • premium ethnic spiritual styling • classy satsang appearance • realistic cotton/silk fabric texture • natural folds and draping • barefoot sitting naturally on carpet • elegant devotional traditional look • slightly more cinematic and premium version of uploaded outfit • keep outfit colors and styling very close to original reference image   PREMANAND MAHARAJ JI DETAILS: • authentic appearance inspired by real Premanand Maharaj Ji • yellow/saffron robes • seated slightly higher than subject respectfully • peaceful spiritual facial expression • actively speaking and guiding subject • natural blessing hand gestures • warm compassionate guru presence   ENVIRONMENT: • authentic Vrindavan satsang room atmosphere • warm yellow spiritual lighting • yellow/orange cloth decorations and backdrop • patterned traditional carpet flooring • realistic microphone and yellow-covered table setup • saffron/yellow dressed devotees sitting naturally around • peaceful devotional ambiance • realistic indoor depth and perspective • emotional spiritual atmosphere • soft incense/satsang mood lighting   CAMERA & QUALITY: • ultra-realistic DSLR photography • cinematic documentary style • extremely photorealistic human realism • natural skin pores and facial details • realistic indoor lighting • shallow depth of field • authentic candid photography feel • warm soft cinematic color grading • highly detailed fabrics and expressions • realistic shadows and perspective • emotional storytelling photography • no AI-art look • natural human anatomy • realistic eye contact and facial expressions`,
  },
];

export const resources: ResourceItem[] = [
  ...coreResources,
  ...(published as ResourceItem[]),
];
