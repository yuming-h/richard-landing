import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.richardapp.xyz";
  return [
    {
      url: base,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/support`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/privacy`,
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: `${base}/terms`,
      changeFrequency: "monthly",
      priority: 0.2,
    },
  ];
}
