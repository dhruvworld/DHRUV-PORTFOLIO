import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dhruv Solanki | Dhruv World",
    short_name: "Dhruv World",
    description:
      "Digital identity platform for Dhruv Solanki (Dhruv Solankii): AI, technology, business, and media ecosystem.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3ef",
    theme_color: "#132232",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
