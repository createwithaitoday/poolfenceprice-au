import { business } from "@/lib/business";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    name: business.name,
    url: business.domain,
    telephone: business.phoneTel,
    email: business.email,
    areaServed: "Sydney",
    founder: { "@type": "Person", name: business.contact },
    identifier: [
      { "@type": "PropertyValue", name: "NSW contractor licence", value: business.licence },
      { "@type": "PropertyValue", name: "ABN", value: business.abn },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${business.domain}${item.path}`,
    })),
  };
  return (
    <>
      <p className="crumbs">
        {items.map((item, i) => (
          <span key={item.path}>
            {i > 0 && " / "}
            {i === items.length - 1 ? item.name : <a href={item.path}>{item.name}</a>}
          </span>
        ))}
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    </>
  );
}

export function FaqSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
