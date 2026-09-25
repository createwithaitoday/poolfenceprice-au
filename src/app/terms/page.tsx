import type { Metadata } from "next";
import { disclaimer } from "@/lib/business";

export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms for quotes and pool fencing enquiries with Fencing Sydney.", alternates: { canonical: "/terms/" } };

export default function TermsPage() {
  return (
    <article className="section"><div className="wrap prose">
      <h1>Terms and conditions</h1>
      <p>A quote is an offer for the scope described in it. It is not a compliance certificate and not a guarantee that a council or certifier will pass a barrier. Installation quotes can change if the site differs from the photos or the measure: hidden concrete, services, access limits, or a change in finished levels.</p>
      <p>Supply-only goods are supplied for the purchaser to install unless an installation quote is accepted. Title in supply-only goods passes according to the invoice issued for that order.</p>
      <p>{disclaimer}</p>
    </div></article>
  );
}
