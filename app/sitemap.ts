import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartcalc-ai.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/advisor",
    "/dashboard",
    "/ai",

    "/calculators",

    "/calculators/stipendio",
    "/calculators/confronto-stipendio",
    "/calculators/mutuo",
    "/calculators/prestito",
    "/calculators/iva",
    "/calculators/interessi-composti",
    "/calculators/pensione",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}