import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/compliance";
import { officialSources, disclaimer } from "@/lib/business";
import { faqs } from "@/lib/faqs";
import { Breadcrumbs, FaqSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "NSW Pool Fencing Rules & Requirements",
  description: "Plain-language guide to NSW pool fence height, gaps, gates, boundary fences and older pools, with links to official NSW Government sources.",
  alternates: { canonical: "/nsw-pool-rules/" },
};

export default function RulesPage() {
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "NSW pool rules", path: "/nsw-pool-rules/" }]} />
        <h1>NSW pool fencing rules and requirements</h1>
        <p className="prose">These pages summarise current NSW Government guidance in our own words. They are general information. The rule that applies can change with the pool, the property, the construction date and whether the barrier has been modified. Confirm details with the relevant council, a registered certifier or the official sources below.</p>
        <div className="grid-2">
          {articles.map((a) => (
            <Link key={a.slug} className="card" href={`/nsw-pool-rules/${a.slug}/`}>
              <h2 style={{ fontSize: 26 }}>{a.question}</h2>
              <p>{a.answer}</p>
            </Link>
          ))}
        </div>
        <h2>Official NSW Government information</h2>
        <ul className="list">
          {officialSources.map((s) => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}
        </ul>
        <p><Link className="btn" href="/compliance-checker/">Check my pool fence</Link></p>
        <p className="note">{disclaimer}</p>
        <FaqSchema faqs={faqs.slice(1, 8)} />
      </div>
    </article>
  );
}
