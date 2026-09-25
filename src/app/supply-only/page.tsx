import type { Metadata } from "next";
import Link from "next/link";
import { supplyProducts } from "@/lib/products";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Supply Only Pool Fencing",
  description: "Supply-only pool fence panels, gates, posts, hardware, glass components and DIY kits. Enquire for a quote. No public prices.",
  alternates: { canonical: "/supply-only/" },
};

export default function SupplyPage() {
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Supply only", path: "/supply-only/" }]} />
        <h1>Supply-only pool fencing</h1>
        <p className="prose">Panels, gates, posts and hardware for people fitting their own barrier, and for installers who want the materials only. This is an enquiry catalogue. Customer prices are not shown.</p>
        <Link className="btn" href="/supply-only/kit-builder/">Build your kit</Link>
        <div className="grid-3" style={{ marginTop: 22 }}>
          {supplyProducts.map((p) => (
            <Link className="card" key={p.slug} href={`/supply-only/${p.slug}/`}>
              <img src={p.image} alt={p.alt} width={1200} height={480} loading="lazy" />
              <span className="meta">Supply only</span>
              <h2 style={{ fontSize: 26 }}>{p.name}</h2>
              <p>{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
