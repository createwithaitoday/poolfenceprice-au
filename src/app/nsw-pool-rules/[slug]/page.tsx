import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/compliance";
import { officialSources, disclaimer } from "@/lib/business";
import { Breadcrumbs, FaqSchema } from "@/components/Schema";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.answer.slice(0, 158), alternates: { canonical: `/nsw-pool-rules/${slug}/` } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <article className="section">
      <div className="wrap prose">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "NSW pool rules", path: "/nsw-pool-rules/" }, { name: article.title, path: `/nsw-pool-rules/${slug}/` }]} />
        <h1>{article.question}</h1>
        <p><strong>{article.answer}</strong></p>
        {article.explanation.map((p) => <p key={p}>{p}</p>)}
        <h2>Common mistakes</h2>
        <ul className="list">{article.mistakes.map((m) => <li key={m}>{m}</li>)}</ul>
        <h2>Official sources</h2>
        <ul className="list">{officialSources.map((s) => <li key={s.href}><a href={s.href}>{s.label}</a></li>)}</ul>
        <p className="note">{disclaimer}</p>
        <Link className="btn" href="/compliance-checker/">Check my pool fence</Link>
        <FaqSchema faqs={[{ q: article.question, a: article.answer }]} />
      </div>
    </article>
  );
}
