import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Pool Fence Gallery",
  description: "Photographs of black flat top fencing and Colorbond boundary work by Fencing Sydney.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery/" }]} />
        <h1>Pool fence gallery</h1>
        <p>Project photographs from Fencing Sydney. Glass and additional pool installations are added as new sets are photographed.</p>
        <Gallery />
      </div>
    </article>
  );
}
