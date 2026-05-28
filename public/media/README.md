# Media replacement guide

Replace these files in `public/media/` to upgrade visuals without touching code.

| File | Used for | Recommended |
|------|----------|-------------|
| `hero.png` | Homepage hero | Portrait or laptop hero, 1600×1200+ |
| `about-center.png` | About card portrait | 4:5 ratio, min 1200×1500 |
| `about-side.png` | About side portrait | Square 800×800+ |
| `project-strip.png` | Work cards (3 crops) | Wide showcase image 2400×1200+ |
| `gallery-mobile.png` | Latest works carousel | Mobile mockups 1600×2400+ |
| `experience.png` | Experience preview | Optional UI/timeline shot |
| `consultation.png` | CTA banner background | Dark cinematic texture |

## Optional per-project files

To use separate images per project card, add:

- `project-01.png`
- `project-02.png`
- `project-03.png`

Then update `mediaAssets.work` in `src/lib/media.ts`.

## Style

- Slightly desaturated, editorial lighting
- Avoid neon gradients and heavy filters
- Keep consistent tone across all assets
