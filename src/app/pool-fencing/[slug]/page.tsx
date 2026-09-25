import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStyle, styles } from "@/lib/products";
import { Breadcrumbs } from "@/components/Schema";
import { QuoteWizard } from "@/components/QuoteWizard";

export function generateStaticParams() {
  return styles.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const style = getStyle(slug);
    if (!style) return {};
    return {
      title: `${style.name} pool fencing Sydney`,
      description: style.summary,
      alternates: { canonical: `/pool-fencing/${slug}/` },
      openGraph: { images: [style.image] },
    };
  });
}

export default async function StylePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) notFound();
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Pool fencing", path: "/pool-fencing/" }, { name: style.name, path: `/pool-fencing/${style.slug}/` }]} />
        <div className="split">
          <img src={style.image} alt={style.alt} width={1620} height={640} />
          <div>
            <p className="kicker">{style.kicker}</p>
            <h1>{style.name} pool fencing</h1>
            <p>{style.body}</p>
            <ul className="list">{style.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <div className="hero-actions">
              <a className="btn" href="#quote">Get a quote for this style</a>
              <Link className="btn secondary" href="/supply-only/">Enquire about supply only</Link>
            </div>
          </div>
        </div>
        <section id="quote" style={{ marginTop: 36 }}>
          <h2>Quote this style</h2>
          <QuoteWizard presetStyle={style.name} source={`/pool-fencing/${style.slug}/`} />
        </section>
      </div>
    </article>
  );
}
