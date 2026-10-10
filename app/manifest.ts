import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HEVON PROFFEE",
    short_name: "HEVON",
    description: "HEVON Protein Coffee. Fuel Your Day.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff8f2",
    theme_color: "#ff6a00",
    icons: [{ src: "/logo/hevon-icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
