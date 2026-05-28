import Image from "next/image";
import type { MediaAsset } from "@/lib/media";

type EditorialImageProps = {
  asset: MediaAsset;
  className?: string;
  priority?: boolean;
};

export function EditorialImage({ asset, className = "", priority = false }: EditorialImageProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      priority={priority}
      className={`object-cover ${className}`}
      style={asset.objectPosition ? { objectPosition: asset.objectPosition } : undefined}
    />
  );
}
