import sharedConfig from "@/constants/config";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  if (sharedConfig.platform === "production") {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${sharedConfig.baseUrl}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
