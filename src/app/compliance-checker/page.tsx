import type { Metadata } from "next";
import { ComplianceChecker } from "@/components/ComplianceChecker";
import { Breadcrumbs } from "@/components/Schema";
import { disclaimer } from "@/lib/business";

export const metadata: Metadata = {
  title: "Pool Fence Compliance Checker",
  description: "Answer a few questions about your NSW pool barrier and see potential issues to check. This is not a compliance certificate.",
  alternates: { canonical: "/compliance-checker/" },
};

export default function CheckerPage() {
  return (
    <article className="section">
      <div className="wrap" style={{ maxWidth: 800 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Compliance checker", path: "/compliance-checker/" }]} />
        <h1>Pool fence compliance checker</h1>
        <p>Use this to see what is worth checking. The result is a list of potential issues, not a certificate and not legal advice.</p>
        <ComplianceChecker />
        <p className="note">{disclaimer}</p>
      </div>
    </article>
  );
}
