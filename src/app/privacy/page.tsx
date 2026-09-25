import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Fencing Sydney handles enquiry details sent through poolfenceprice.com.au.", alternates: { canonical: "/privacy/" } };

export default function PrivacyPage() {
  return (
    <article className="section"><div className="wrap prose">
      <h1>Privacy policy</h1>
      <p>Fencing Sydney (ABN {business.abn}) collects the name, phone, email, suburb, project details and photos you choose to send so we can reply to a pool fencing enquiry.</p>
      <p>We use that information to quote, arrange a measure, supply materials or install fencing. We do not sell enquiry lists. Hosting and email providers process the message so it can reach {business.email}.</p>
      <p>Photos you upload are stored with the enquiry so the job can be assessed. Do not send images you are not willing for our quoting staff to see.</p>
      <p>You can ask what we hold about an enquiry by emailing {business.email}. If analytics is enabled later, it will be configured to avoid collecting message contents.</p>
    </div></article>
  );
}
