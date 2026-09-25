import type { Metadata } from "next";
import { business } from "@/lib/business";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "About Jye Fulton",
  description: "Jye Fulton is a NSW licensed fencer, licence 269038C, with more than 15 years across residential, government, commercial and industrial fencing.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: business.contact,
    jobTitle: "NSW licensed fencing contractor",
    worksFor: { "@type": "Organization", name: business.name, url: business.domain },
    telephone: business.phoneTel,
    email: business.email,
  };
  return (
    <article className="section">
      <div className="wrap prose">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />
        <h1>About Jye Fulton</h1>
        <p>Jye Fulton is the licensed fencer behind Fencing Sydney. NSW contractor licence {business.licence}. ABN {business.abn}. More than 15 years of fencing work.</p>
        <p>The work covers residential fencing, government fencing, commercial fencing, industrial fencing, large projects, custom fence manufacturing and precision installation. Pool fencing, pool gates, aluminium, steel, glass and Colorbond — including fence extensions — sit inside that broader practice, not beside it.</p>
        <p>Jye also mentors apprentices and trains office staff so quotes, measures and installation notes stay consistent from the first call to the last post.</p>
        <h2>Licence and insurance</h2>
        <p>The contractor licence number is {business.licence}. The business is insured for the fencing work it undertakes. Policy documents are available on request for a project; they are not published here as marketing numbers.</p>
        <h2>Service area</h2>
        <p>Installation is Sydney-wide. Supply-only pool fencing products can be arranged for pickup or delivery, including outside the installation area when freight makes sense.</p>
        <h2>Contact</h2>
        <p>{business.phoneDisplay}<br />{business.email}<br /><a href={business.parentSite}>fencing.sydney</a></p>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </div>
    </article>
  );
}
