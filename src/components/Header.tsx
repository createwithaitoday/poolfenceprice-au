"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";
import { track } from "@/lib/analytics";

const links = [
  { href: "/pool-fencing/", label: "Pool Fencing" },
  { href: "/pool-fencing/black-flat-top/", label: "Styles" },
  { href: "/supply-only/", label: "Supply Only" },
  { href: "/extensions/", label: "Extensions" },
  { href: "/nsw-pool-rules/", label: "NSW Pool Rules" },
  { href: "/sydney/", label: "Sydney Areas" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-row">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <strong>FENCING SYDNEY</strong>
          <span>Pool fencing</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <Link href="/pool-fencing/">Pool Fencing</Link>
          <button className="nav-link" aria-expanded={mega} onClick={() => setMega((v) => !v)}>
            Styles
          </button>
          <Link href="/supply-only/">Supply Only</Link>
          <Link href="/pool-gates/">Pool Gates</Link>
          <Link href="/extensions/">Extensions</Link>
          <Link href="/nsw-pool-rules/">NSW Pool Rules</Link>
          <Link href="/sydney/">Sydney Areas</Link>
          <Link href="/about/">About</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
        <div className="header-cta">
          <a href={`tel:${business.phoneTel}`} onClick={() => track("phone_clicked")}>
            {business.phoneDisplay}
          </a>
          <Link className="btn" href="/quote/">Get free quote</Link>
        </div>
        <a className="mobile-call" href={`tel:${business.phoneTel}`} onClick={() => track("phone_clicked")}>
          Call
        </a>
        <Link className="mobile-quote" href="/quote/">Quote</Link>
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className={`mega${mega ? " open" : ""}`}>
        <div className="wrap mega-grid">
          <div>
            <p className="kicker">Flagship</p>
            <Link href="/pool-fencing/black-flat-top/" onClick={() => setMega(false)}>
              <strong>Black flat top pool fencing</strong>
              <span>Supply only or installed across Sydney.</span>
            </Link>
          </div>
          <div>
            <Link href="/pool-fencing/white-flat-top/" onClick={() => setMega(false)}>White flat top</Link>
            <Link href="/pool-fencing/aluminium/" onClick={() => setMega(false)}>Aluminium</Link>
            <Link href="/pool-fencing/steel/" onClick={() => setMega(false)}>Steel</Link>
            <Link href="/pool-fencing/glass/" onClick={() => setMega(false)}>Glass</Link>
          </div>
          <div>
            <Link href="/pool-fencing/decorative/" onClick={() => setMega(false)}>Decorative</Link>
            <Link href="/pool-gates/" onClick={() => setMega(false)}>Pool gates</Link>
            <Link href="/extensions/" onClick={() => setMega(false)}>Colorbond extensions</Link>
            <Link href="/find-your-fence/" onClick={() => setMega(false)}>Find your fence</Link>
          </div>
        </div>
      </div>
      <div id="mobile-nav" className={`mobile-panel${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
        <Link href="/pool-gates/" onClick={() => setOpen(false)}>Pool Gates</Link>
        <Link href="/quote/" onClick={() => setOpen(false)}>Get a free quote</Link>
        <Link href="/send-photos/" onClick={() => setOpen(false)}>Send photos</Link>
        <a href={`tel:${business.phoneTel}`} onClick={() => track("phone_clicked")}>Call {business.phoneDisplay}</a>
      </div>
    </header>
  );
}
