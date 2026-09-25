import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { SuburbSearch } from "@/components/SuburbSearch";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Pool Fencing Sydney Service Areas",
  description: "Sydney-wide pool fence installation and supply. Region and suburb guides with local site notes, not duplicated doorway pages.",
  alternates: { canonical: "/sydney/" },
};

export default function SydneyPage() {
  const regions = locations.filter((l) => l.kind === "region");
  const suburbs = locations.filter((l) => l.kind === "suburb");
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Sydney", path: "/sydney/" }]} />
        <h1>Pool fencing Sydney</h1>
        <p>Installation is Sydney-wide. Each area page covers the local housing, access and the fence styles we actually use there. Supply-only is available if you are outside the install run or fitting it yourself.</p>
        <SuburbSearch />
        <h2>Regions</h2>
        <div className="grid-3">
          {regions.map((l) => <Link key={l.slug} className="card" href={`/sydney/${l.slug}/`}><h3>{l.name}</h3><p>{l.intro.slice(0, 140)}…</p></Link>)}
        </div>
        <h2>Suburbs</h2>
        <div className="grid-3">
          {suburbs.map((l) => <Link key={l.slug} className="card" href={`/sydney/${l.slug}/`}><h3>{l.name}</h3><p>{l.region}</p></Link>)}
        </div>
      </div>
    </article>
  );
}
