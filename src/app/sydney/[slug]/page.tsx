import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocation, locations } from "@/lib/locations";
import { Breadcrumbs } from "@/components/Schema";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `Pool fencing ${location.name}`,
    description: `Pool fence supply and installation in ${location.name}. ${location.situations}`.slice(0, 158),
    alternates: { canonical: `/sydney/${slug}/` },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  const nearby = location.nearby.map((s) => getLocation(s)).filter(Boolean);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Pool fencing in ${location.name}`,
    areaServed: location.name,
    provider: { "@type": "HomeAndConstructionBusiness", name: business.name, telephone: business.phoneTel },
    url: `${business.domain}/sydney/${location.slug}/`,
  };
  return (
    <article className="section">
      <div className="wrap prose">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Sydney", path: "/sydney/" }, { name: location.name, path: `/sydney/${location.slug}/` }]} />
        <h1>Pool fencing {location.name}</h1>
        <p>{location.intro}</p>
        <h2>Properties</h2>
        <p>{location.properties}</p>
        <h2>Common pool fencing situations</h2>
        <p>{location.situations}</p>
        <h2>Styles that suit this area</h2>
        <p>{location.styles}</p>
        <h2>Access and site notes</h2>
        <p>{location.access}</p>
        <h2>Supply only</h2>
        <p>DIY kits and components can be quoted for {location.name} even when you do not want installation. <Link href="/supply-only/">View supply only</Link>.</p>
        <h2>Installation</h2>
        <p>Installation is carried out by Fencing Sydney, licence {business.licence}. A free site measure is available across Sydney when the site needs one.</p>
        <Link className="btn" href={`/quote/?suburb=${encodeURIComponent(location.name)}`}>Get a free pool fence quote in {location.name}</Link>
        <h2>Nearby areas</h2>
        <ul className="list">
          {nearby.map((n) => n && <li key={n.slug}><Link href={`/sydney/${n.slug}/`}>{n.name}</Link></li>)}
        </ul>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </div>
    </article>
  );
}
