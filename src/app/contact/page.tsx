import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Contact Fencing Sydney",
  description: "Call, email, request a quote, send photos or ask about supply-only pool fencing. Jye Fulton, 0421 233 434.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <article className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]} />
        <h1>Contact Fencing Sydney</h1>
        <div className="grid-3">
          <a className="card" href={`tel:${business.phoneTel}`}><h2 style={{ fontSize: 28 }}>Call</h2><p>{business.phoneDisplay}</p></a>
          <a className="card" href={`mailto:${business.email}`}><h2 style={{ fontSize: 28 }}>Email</h2><p>{business.email}</p></a>
          <Link className="card" href="/quote/"><h2 style={{ fontSize: 28 }}>Request a quote</h2><p>Installation across Sydney</p></Link>
          <Link className="card" href="/send-photos/"><h2 style={{ fontSize: 28 }}>Upload photos</h2><p>Start without a site visit</p></Link>
          <Link className="card" href="/quote/"><h2 style={{ fontSize: 28 }}>Request a site measure</h2><p>Free across Sydney when a visit is useful</p></Link>
          <Link className="card" href="/supply-only/kit-builder/"><h2 style={{ fontSize: 28 }}>Supply-only enquiry</h2><p>Kits and components</p></Link>
        </div>
        <div style={{ marginTop: 28, maxWidth: 720 }}>
          <h2>Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
