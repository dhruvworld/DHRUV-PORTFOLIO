"use client";

import Link from "next/link";
import { useRef } from "react";
import { mediaAssets } from "@/lib/media";
import { EditorialImage } from "@/components/brand/editorial-image";

export function VisualGallery() {
  const stripRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: "left" | "right") {
    if (!stripRef.current) return;
    const amount = Math.round(stripRef.current.clientWidth * 0.85);
    stripRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="mt-28 rounded-[2rem] bg-[#d9aa3f] px-6 py-9 md:px-10 md:py-11">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="section-title text-4xl font-semibold text-[#132232]">Latest Works</h2>
          <p className="mt-2 text-sm text-[#3f3f3f]">Product, brand, and systems in motion</p>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/projects" className="text-sm font-medium text-[#132232] underline decoration-black/25 underline-offset-4">
            All projects ↗
          </Link>
          <div className="flex gap-2">
            <button
            type="button"
            onClick={() => scrollByCard("left")}
            className="grid h-10 w-10 place-items-center rounded-full border border-black/20 bg-white/80 text-[#132232]"
            aria-label="Previous works"
          >
            ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/20 bg-[#132232] text-white"
              aria-label="Next works"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div ref={stripRef} className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3">
        {mediaAssets.gallery.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className={`relative min-w-[74%] snap-start overflow-hidden rounded-[1.6rem] border border-black/12 bg-[#f4f1ea] md:min-w-[30%] ${
              i === 1 ? "md:mt-6" : ""
            }`}
          >
            <div className="relative aspect-[3/5]">
              <EditorialImage asset={item} className="grayscale-[4%]" />
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex flex-col items-center gap-4 md:hidden">
        <div className="flex justify-center gap-2">
          <span className="h-2 w-9 rounded-full bg-[#132232]" />
          <span className="h-2 w-2 rounded-full bg-[#6f6f6f]" />
          <span className="h-2 w-2 rounded-full bg-[#6f6f6f]" />
        </div>
        <Link href="/projects" className="text-sm font-medium text-[#132232] underline decoration-black/25 underline-offset-4">
          All projects ↗
        </Link>
      </div>
    </section>
  );
}
