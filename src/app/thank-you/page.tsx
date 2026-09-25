import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Quote Request Received",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you/" },
};

export default function ThanksPage() {
  return (
    <article className="section">
      <div className="wrap prose">
        <h1>Thank you — we have got your request</h1>
        <p>Jye or the Fencing Sydney office will use the details you sent. If the job needs a look at the ground, we will arrange a free site measure across Sydney. If photos are enough to price supply-only, we will quote from those.</p>
        <p><a href={`tel:${business.phoneTel}`}>Call {business.phoneDisplay}</a><br /><a href={`mailto:${business.email}`}>{business.email}</a></p>
        <p><Link href="/pool-fencing/">Back to pool fencing</Link></p>
        <p><Link href="/nsw-pool-rules/">NSW pool safety resources</Link></p>
      </div>
    </article>
  );
}
