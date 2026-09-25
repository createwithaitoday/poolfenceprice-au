import type { Metadata } from "next";

export const metadata: Metadata = { title: "Website Terms", description: "Terms of use for poolfenceprice.com.au.", alternates: { canonical: "/website-terms/" } };

export default function WebsiteTerms() {
  return (
    <article className="section"><div className="wrap prose">
      <h1>Website terms</h1>
      <p>Content on this website is general information about pool fencing services offered by Fencing Sydney in Sydney. It is not legal, building-certification or engineering advice. Measurements in articles are summaries of published NSW Government guidance and can be affected by the standard that applies to a particular pool.</p>
      <p>You may not copy the site design or text for another business. Project photographs remain the property of Fencing Sydney.</p>
    </div></article>
  );
}
