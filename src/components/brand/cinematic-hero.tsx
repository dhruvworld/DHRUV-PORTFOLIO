import Link from "next/link";
import { EditorialImage } from "@/components/brand/editorial-image";
import { mediaAssets } from "@/lib/media";
import { resumePdfPath } from "@/content/certifications";
import { whoIHelp } from "@/content/profile";
import { socialLinks } from "@/lib/social";

export function CinematicHero() {
  return (
    <section className="relative overflow-hidden pt-8 md:pt-12" aria-labelledby="hero-heading">
      <div className="rounded-[2.2rem] border hairline bg-[#f7f6f3] p-6 shadow-[0_18px_36px_rgba(0,0,0,0.08)] md:p-8">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#5f5f5f]">
              MS Computer Science · SNHU · Manchester, NH
            </p>
            <h1
              id="hero-heading"
              className="display-title mt-5 text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] text-[#132232]"
            >
              Dhruv Solanki
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-[#132232]">{whoIHelp}</p>
            <p className="body-soft mt-4 max-w-xl text-sm leading-relaxed text-[#5f5f5f]">
              Founder of Quantis Global · full-stack engineer · Cursor-native builder · Manchester, NH
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="cta-pill rounded-full bg-[#132232] px-5 py-3 text-sm font-medium text-[#f8f7f4]"
              >
                Contact · WhatsApp / LinkedIn
              </Link>
              <Link
                href="/projects"
                className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]"
              >
                View projects
              </Link>
              <a
                href={resumePdfPath}
                className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]"
              >
                Download CV
              </a>
              <Link
                href={socialLinks.linkedin}
                className="cta-pill rounded-full border border-black/15 px-5 py-3 text-sm font-medium text-[#132232]"
              >
                LinkedIn ↗
              </Link>
            </div>
          </div>

          <figure className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-[1.5rem] border hairline bg-[#eceae5]">
            <EditorialImage
              asset={mediaAssets.portrait}
              priority
              sizes="(max-width: 768px) 70vw, 320px"
              className="grayscale-[6%]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
