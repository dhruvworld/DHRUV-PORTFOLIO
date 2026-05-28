import Image from "next/image";
import { homepageGallery } from "@/lib/media";

export function VisualGallery() {
  return (
    <section className="mt-16">
      <h2 className="section-title text-4xl font-semibold text-white">Visual Identity</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {homepageGallery.map((item) => (
          <figure key={item.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image src={item.src} alt={item.alt} fill className="object-cover contrast-110" />
          </figure>
        ))}
      </div>
    </section>
  );
}
