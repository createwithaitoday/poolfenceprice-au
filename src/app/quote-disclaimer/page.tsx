import type { Metadata } from "next";
import { disclaimer } from "@/lib/business";

export const metadata: Metadata = { title: "Quote and Enquiry Disclaimer", description: "What a pool fence quote from Fencing Sydney does and does not include.", alternates: { canonical: "/quote-disclaimer/" } };

export default function QuoteDisclaimer() {
  return (
    <article className="section"><div className="wrap prose">
      <h1>Quote and enquiry disclaimer</h1>
      <p>Submitting a form does not create a contract. We will reply using the contact details you provide. A response time is not guaranteed.</p>
      <p>Online tools, including the compliance checker and the fence finder, list issues to discuss. They do not certify a pool barrier.</p>
      <p>{disclaimer}</p>
    </div></article>
  );
}
