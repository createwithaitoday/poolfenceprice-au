import type { Metadata } from "next";
import { Outfit, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer, MobileBar } from "@/components/Footer";
import { OrganizationSchema } from "@/components/Schema";
import { business } from "@/lib/business";

const sans = Outfit({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: { default: "Pool Fencing Sydney | Supply & Installation | Fencing Sydney", template: "%s | Fencing Sydney" },
  description: "Pool fencing Sydney. Black flat top, aluminium, glass, steel, gates and Colorbond extensions. Supply only or installation by licensed fencer Jye Fulton, licence 269038C.",
  openGraph: { type: "website", locale: "en_AU", siteName: "Pool Fence Price" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${serif.variable}`}>
      <body style={{ fontFamily: "var(--font-sans), Outfit, sans-serif" }}>
        <a className="skip" href="#content">Skip to content</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <MobileBar />
        <OrganizationSchema />
      </body>
    </html>
  );
}
