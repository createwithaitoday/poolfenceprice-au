import type { Metadata } from "next";
import { KitBuilder } from "@/components/KitBuilder";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Pool Fence Kit Builder",
  description: "Configure a supply-only pool fence kit and request a quote. No prices shown.",
  alternates: { canonical: "/supply-only/kit-builder/" },
};

export default function KitPage() {
  return (
    <article className="section">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Supply only", path: "/supply-only/" }, { name: "Kit builder", path: "/supply-only/kit-builder/" }]} />
        <h1>Build your pool fence kit</h1>
        <p>Tell us the style, length and gates. We reply with a supply-only quote. Internal costs are not shown.</p>
        <KitBuilder />
      </div>
    </article>
  );
}
