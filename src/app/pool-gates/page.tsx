import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Pool Gates Sydney",
  description: "Self-closing, self-latching pool gates for Sydney pools. Single gates, custom widths where the opening allows, and replacement hardware.",
  alternates: { canonical: "/pool-gates/" },
};

export default function GatesPage() {
  return (
    <article className="section">
      <div className="wrap prose">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pool gates", path: "/pool-gates/" }]} />
        <h1>Pool gates Sydney</h1>
        <p>A pool gate has to swing away from the pool, close itself and latch itself. That is the NSW Government summary. The hinge, the latch height and the ground under the gate are what make it true on a real site.</p>
        <h2>What we supply and install</h2>
        <ul className="list">
          <li>Single gates matched to flat top, glass or steel fencing</li>
          <li>Custom widths where the opening still lets the gate keep closing</li>
          <li>Self-closing hinges and self-latching hardware</li>
          <li>Replacement of a gate that drops, scrapes or no longer latches</li>
        </ul>
        <p>Double gates are a poor default for a pool barrier because the leaves are harder to keep self-closing. If you think you need one, send photos before anyone builds it.</p>
        <Link className="btn" href="/quote/">Get a quote for a pool gate</Link>
        <p><Link href="/nsw-pool-rules/pool-gate-requirements/">Read the gate requirements</Link></p>
      </div>
    </article>
  );
}
