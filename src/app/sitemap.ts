import type { MetadataRoute } from "next";
import { mainNav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return mainNav.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
