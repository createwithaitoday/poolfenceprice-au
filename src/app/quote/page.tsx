import type { Metadata } from "next";
import { QuoteWizard } from "@/components/QuoteWizard";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Free Pool Fence Quote",
  description: "Request a free pool fence quote in Sydney. A short form, optional photos, and a call back from Fencing Sydney.",
  alternates: { canonical: "/quote/" },
};

export default function QuotePage() {
  return (
    <article className="section">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Free quote", path: "/quote/" }]} />
        <h1>Get a free pool fence quote</h1>
        <p>Seven short steps. Your answers stay on this phone until you send them. Not sure of the details? Choose “Not sure” or send photos.</p>
        <QuoteWizard />
      </div>
    </article>
  );
}
