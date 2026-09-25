import type { Metadata } from "next";
import { FindFence } from "@/components/FindFence";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Find Your Pool Fence",
  description: "Answer a few questions and see which Sydney pool fence categories are worth a closer look.",
  alternates: { canonical: "/find-your-fence/" },
};

export default function FindPage() {
  return (
    <article className="section">
      <div className="wrap" style={{ maxWidth: 800 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Find your fence", path: "/find-your-fence/" }]} />
        <h1>Find your pool fence</h1>
        <p>This shortlist is a starting point. It is not an engineering design or a compliance certificate.</p>
        <FindFence />
      </div>
    </article>
  );
}
