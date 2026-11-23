import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { routes } from "@/lib/routes";

const pages = [routes.home, routes.menu, routes.about, routes.gallery, routes.contact];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-23");

  return pages.map((path) => ({
    url: path === routes.home ? SITE.url : new URL(path, SITE.url).toString(),
    lastModified,
    changeFrequency: path === routes.menu ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : path === routes.menu ? 0.9 : 0.6,
  }));
}
