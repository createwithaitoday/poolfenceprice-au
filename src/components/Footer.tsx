import Link from "next/link";
import { business } from "@/lib/business";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="banner" style={{ marginBottom: 36 }}>
          <div>
            <h2 style={{ fontSize: 32 }}>Get a free pool fence quote</h2>
            <p style={{ margin: 0, color: "#d9d3c8" }}>Sydney installation, or supply only if you are fitting it yourself.</p>
          </div>
          <Link className="btn light" href="/quote/">Get a free pool fence quote</Link>
        </div>
        <div className="foot-grid">
          <div>
            <h3>Contact</h3>
            <p style={{ marginTop: 0 }}>
              Fencing Sydney<br />
              {business.contact}<br />
              NSW Licensed Fencer<br />
              Licence {business.licence}<br />
              ABN {business.abn}<br />
              {business.years} years experience<br />
              Sydney-wide supply & installation
            </p>
            <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </div>
          <div>
            <h3>Pool fencing</h3>
            <Link href="/pool-fencing/black-flat-top/">Black flat top</Link>
            <Link href="/pool-fencing/aluminium/">Aluminium</Link>
            <Link href="/pool-fencing/steel/">Steel</Link>
            <Link href="/pool-fencing/glass/">Glass</Link>
            <Link href="/pool-gates/">Pool gates</Link>
            <Link href="/extensions/">Pool fence extensions</Link>
            <Link href="/extensions/">Colorbond extensions</Link>
            <Link href="/supply-only/">Supply only</Link>
            <Link href="/supply-only/diy-kits/">Pool fence kits</Link>
          </div>
          <div>
            <h3>Pool safety</h3>
            <Link href="/nsw-pool-rules/">NSW pool rules</Link>
            <Link href="/nsw-pool-rules/pool-fence-height/">Pool fence height</Link>
            <Link href="/nsw-pool-rules/pool-fence-gaps/">Pool fence gaps</Link>
            <Link href="/nsw-pool-rules/pool-gate-requirements/">Pool gate requirements</Link>
            <Link href="/nsw-pool-rules/non-climbable-zones/">Non-climbable zones</Link>
            <Link href="/compliance-checker/">Pool fence compliance</Link>
            <Link href="/nsw-pool-rules/">Pool safety FAQ</Link>
          </div>
          <div>
            <h3>Sydney</h3>
            {[
              ["eastern-suburbs", "Eastern Suburbs"],
              ["western-sydney", "Western Sydney"],
              ["northern-beaches", "Northern Beaches"],
              ["north-shore", "North Shore"],
              ["sutherland-shire", "Sutherland Shire"],
              ["parramatta", "Parramatta"],
              ["blacktown", "Blacktown"],
              ["liverpool", "Liverpool"],
              ["penrith", "Penrith"],
              ["campbelltown", "Campbelltown"],
              ["hills-district", "Hills District"],
              ["inner-west", "Inner West"],
              ["south-sydney", "South Sydney"],
            ].map(([slug, name]) => (
              <Link key={slug} href={`/sydney/${slug}/`}>{name}</Link>
            ))}
            <h3 style={{ marginTop: 18 }}>Company</h3>
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/quote/">Free quote</Link>
            <Link href="/sydney/">Service areas</Link>
            <Link href="/terms/">Terms</Link>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/website-terms/">Website terms</Link>
            <Link href="/quote-disclaimer/">Quote disclaimer</Link>
          </div>
        </div>
        <p className="legal">
          © {new Date().getFullYear()} Fencing Sydney. Pool fencing requirements vary. Information here is general guidance, not a compliance certificate or legal advice.
        </p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a className="btn secondary" href={`tel:${business.phoneTel}`}>Call</a>
      <Link className="btn" href="/quote/">Get a free quote</Link>
    </div>
  );
}
