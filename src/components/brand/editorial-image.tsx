import Image from "next/image";
import type { MediaAsset } from "@/lib/media";

type EditorialImageProps = {
  asset: MediaAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function EditorialImage({
  asset,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: EditorialImageProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
      style={asset.objectPosition ? { objectPosition: asset.objectPosition } : undefined}
    />
  );
}
