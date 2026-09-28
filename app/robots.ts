import type { MetadataRoute } from "next";
import { siteUrl, siteUrlIsPlaceholder } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Sin dominio configurado no se invita a indexar: evita que una URL
  // de preview acabe en el índice de Google.
  if (siteUrlIsPlaceholder) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
