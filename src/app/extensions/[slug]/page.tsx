import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Schema";

const pages: Record<string, { title: string; body: string }> = {
  "sheet-infill": {
    title: "Sheet infill fence extensions",
    body: "Sheet infill adds solid Colorbond above or within an existing frame. It is used when a boundary needs height beside a pool. Fixings, rails on the pool side, and the finished height from the ground a child stands on all have to be checked.",
  },
  louvre: {
    title: "Louvre fence extensions",
    body: "Louvre extensions add height and airflow. The blades and the rails that hold them can become footholds if they face the wrong way or sit in the non-climbable zone. We treat louvre as a designed barrier detail, not a decorative topper.",
  },
  slat: {
    title: "Slat fence extensions",
    body: "Slat extensions are common on boundary fences. Horizontal slats need extra care because horizontal members are exactly what pool barrier rules limit. Vertical slats are often simpler. Either way, the whole fence is assessed.",
  },
  lattice: {
    title: "Lattice fence extensions",
    body: "Lattice above Colorbond sheet is a familiar Sydney detail. The lattice openings, the rail it sits on, and how firmly it is fixed decide whether it helps or creates a climb. Photos of both sides of the fence are useful.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return { title: page.title, description: page.body.slice(0, 155), alternates: { canonical: `/extensions/${slug}/` } };
}

export default async function ExtensionType({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <article className="section">
      <div className="wrap prose">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Extensions", path: "/extensions/" }, { name: page.title, path: `/extensions/${slug}/` }]} />
        <h1>{page.title}</h1>
        <p>{page.body}</p>
        <p>Boundary fencing, pool-side upgrades and existing Colorbond fences are all in scope. Send photos before assuming an extension is the right fix.</p>
        <Link className="btn" href="/send-photos/?topic=extension">Check my existing fence</Link>
      </div>
    </article>
  );
}
