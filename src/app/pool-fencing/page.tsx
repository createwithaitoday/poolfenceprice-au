import type { Metadata } from "next";
import Link from "next/link";
import { styles } from "@/lib/products";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Pool Fencing Sydney",
  description: "Pool fence styles for Sydney: black flat top, aluminium, steel, glass, decorative panels, gates and Colorbond boundary solutions. Supply or installation.",
  alternates: { canonical: "/pool-fencing/" },
};

export default function PoolFencingPage() {
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pool fencing", path: "/pool-fencing/" }]} />
        <h1>Pool fencing for Sydney pools</h1>
        <p className="prose">Choose a style, then ask for installation across Sydney or a supply-only quote. Black flat top aluminium is the fence most people start with.</p>
        <div className="grid-3">
          {styles.map((s) => (
            <Link key={s.slug} className="card" href={`/pool-fencing/${s.slug}/`}>
              <img src={s.image} alt={s.alt} width={1200} height={480} />
              <h2 style={{ fontSize: 28 }}>{s.name}</h2>
              <p>{s.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
