import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { styles, supplyProducts } from "@/lib/products";
import { articles } from "@/lib/compliance";
import { locations } from "@/lib/locations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/pool-fencing/",
    "/pool-gates/",
    "/supply-only/",
    "/supply-only/kit-builder/",
    "/extensions/",
    "/extensions/sheet-infill/",
    "/extensions/louvre/",
    "/extensions/slat/",
    "/extensions/lattice/",
    "/nsw-pool-rules/",
    "/compliance-checker/",
    "/find-your-fence/",
    "/gallery/",
    "/sydney/",
    "/about/",
    "/contact/",
    "/quote/",
    "/send-photos/",
    "/privacy/",
    "/terms/",
    "/website-terms/",
    "/quote-disclaimer/",
    ...styles.map((s) => `/pool-fencing/${s.slug}/`),
    ...supplyProducts.map((p) => `/supply-only/${p.slug}/`),
    ...articles.map((a) => `/nsw-pool-rules/${a.slug}/`),
    ...locations.map((l) => `/sydney/${l.slug}/`),
  ];
  return paths.map((path) => ({
    url: `${business.domain}${path || "/"}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
