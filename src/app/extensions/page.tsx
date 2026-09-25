import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Pool-Compliant Colorbond Fence Extensions",
  description: "Sheet, louvre, slat and lattice extensions for existing Colorbond fences used beside Sydney pools. An extension is designed for the barrier. It is not automatically compliant.",
  alternates: { canonical: "/extensions/" },
};

const types = [
  ["sheet-infill", "Sheet infill", "Continues the solid Colorbond face to add height."],
  ["louvre", "Louvre", "Angled blades for airflow. Blade direction and rails must not create a ladder."],
  ["slat", "Slat", "Horizontal or vertical slats. Horizontal members are a climb question and need a proper design."],
  ["lattice", "Lattice", "Often used above sheet. Openings and the frame are checked, not assumed safe."],
];

export default function ExtensionsPage() {
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Extensions", path: "/extensions/" }]} />
        <div className="split">
          <img src="/images/gallery/colorbond-louvre-pool-fencing-jpg.jpg" alt="Grey Colorbond fence with a louvre extension beside a pool" width={1200} height={900} />
          <div>
            <h1>Pool-compliant Colorbond fence extensions</h1>
            <p>Sheet infill, louvre, slat and lattice can raise an existing boundary fence. The extension has to be designed and installed for the pool barrier requirements that apply. Raising a fence does not, by itself, make it compliant.</p>
            <Link className="btn" href="/send-photos/?topic=extension">Check my existing fence</Link>
          </div>
        </div>
        <div className="grid-2" style={{ marginTop: 24 }}>
          {types.map(([slug, name, text]) => (
            <Link key={slug} className="card" href={`/extensions/${slug}/`}>
              <h2 style={{ fontSize: 28 }}>{name}</h2>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
