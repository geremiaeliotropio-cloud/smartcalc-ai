import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SmartCalc AI",
    short_name: "SmartCalc",
    description:
      "Calcolatori intelligenti con AI per finanza personale.",

    start_url: "/",

    display: "standalone",

    background_color: "#020617",

    theme_color: "#06b6d4",

    lang: "it",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}