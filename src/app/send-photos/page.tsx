import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Breadcrumbs } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Send Pool Fence Photos",
  description: "Not sure what you need? Send photos of your pool and fence and Fencing Sydney will help work out a suitable option.",
  alternates: { canonical: "/send-photos/" },
};

export default function PhotosPage() {
  return (
    <article className="section">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Send photos", path: "/send-photos/" }]} />
        <h1>Send us photos</h1>
        <p>Not sure what you need? Send a few photos and we will help work out a suitable pool fencing solution. Use your camera or gallery. Several angles help: the pool, the gate, the boundary and anything close to the fence.</p>
        <ContactForm enquiryType="photos" />
      </div>
    </article>
  );
}
