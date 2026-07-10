import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://hevon.in", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://hevon.in/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: "https://hevon.in/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
