import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupplyProduct, supplyProducts } from "@/lib/products";
import { Breadcrumbs } from "@/components/Schema";

export function generateStaticParams() {
  return supplyProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getSupplyProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} supply only`,
    description: product.summary,
    alternates: { canonical: `/supply-only/${slug}/` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getSupplyProduct(slug);
  if (!product) notFound();
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `https://poolfenceprice.com.au${product.image}`,
    brand: { "@type": "Brand", name: "Fencing Sydney" },
    offers: { "@type": "Offer", availability: "https://schema.org/InStock", url: `https://poolfenceprice.com.au/supply-only/${product.slug}/`, priceSpecification: { "@type": "PriceSpecification", priceCurrency: "AUD", description: "Quoted on enquiry. No public price." } },
  };
  return (
    <article className="section">
      <div className="wrap split">
        <div>
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Supply only", path: "/supply-only/" }, { name: product.name, path: `/supply-only/${product.slug}/` }]} />
          <img src={product.image} alt={product.alt} width={1600} height={900} />
        </div>
        <div>
          <p className="kicker">Supply only · Enquire</p>
          <h1>{product.name}</h1>
          <p>{product.summary}</p>
          <p><strong>Suitable for:</strong> {product.applications.join(", ")}</p>
          <p><strong>Colours:</strong> {product.colours.join(", ")}</p>
          <p><strong>Typical dimensions:</strong> {product.dimensions}</p>
          <p><strong>Compliance note:</strong> {product.compliance}</p>
          <Link className="btn" href="/supply-only/kit-builder/">Request a supply-only quote</Link>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
        </div>
      </div>
    </article>
  );
}
