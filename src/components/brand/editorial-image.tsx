import Image from "next/image";
import type { MediaAsset } from "@/lib/media";

type EditorialImageProps = {
  asset: MediaAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

export function EditorialImage({
  asset,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 400px",
  fill = true,
}: EditorialImageProps) {
  if (fill) {
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

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width ?? 800}
      height={asset.height ?? 800}
      priority={priority}
      sizes={sizes}
      className={className}
      style={asset.objectPosition ? { objectPosition: asset.objectPosition } : undefined}
    />
  );
}
