import Image from "next/image";
import { homepageGallery } from "@/lib/media";

export function VisualGallery() {
  return (
    <section className="mt-22">
      <h2 className="section-title text-4xl font-semibold">Visual Identity</h2>
      <div className="mt-7 grid gap-6 md:grid-cols-3">
        {homepageGallery.map((item) => (
          <figure key={item.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border hairline">
            <Image src={item.src} alt={item.alt} fill className="object-cover grayscale-[18%] contrast-[1.03] brightness-[0.98]" />
          </figure>
        ))}
      </div>
    </section>
  );
}
