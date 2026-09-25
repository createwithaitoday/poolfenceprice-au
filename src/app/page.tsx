import Link from "next/link";
import { business, disclaimer } from "@/lib/business";
import { faqs } from "@/lib/faqs";
import { styles } from "@/lib/products";
import { StyleSelector } from "@/components/StyleSelector";
import { SuburbSearch } from "@/components/SuburbSearch";
import { Gallery } from "@/components/Gallery";
import { FaqSchema } from "@/components/Schema";

const homeFaqs = faqs.slice(0, 8);

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-copy">
          <p className="eyebrow">Pool Fence Price · Licence {business.licence}</p>
          <h1>Pool fencing Sydney</h1>
          <p className="lede">Supply and installation across Sydney. Modern pool fencing, gates and barrier solutions from NSW licensed fencer {business.contact}.</p>
          <div className="hero-actions">
            <Link className="btn light" href="/quote/">Get a free quote</Link>
            <Link className="btn ghost" href="/pool-fencing/">Explore pool fencing</Link>
            <a className="btn ghost" href={`tel:${business.phoneTel}`}>Call {business.phoneDisplay}</a>
          </div>
          <div className="trust-row">
            <div><strong>Licensed NSW fencer</strong><span>Licence {business.licence}</span></div>
            <div><strong>{business.years} years experience</strong><span>Residential to industrial</span></div>
            <div><strong>Sydney-wide service</strong><span>Supply or installation</span></div>
            <div><strong>Free site measure</strong><span>Where a visit is the right next step</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden>
          <div className="fence-scene">
            <div className="pool" />
            <div className="coping" />
            <div className="rails" />
          </div>
          <img className="hero-photo" src="/images/gallery/pool-fencing-2-jpg.jpg" alt="" width={1200} height={1600} />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <img src="/images/gallery/poolfencingflattopfencing-jpg.jpg" alt="Black flat top pool fence around a pool under construction" width={1200} height={800} />
          <div>
            <p className="kicker">Flagship product</p>
            <h2>Black flat top pool fencing</h2>
            <p>Modern. Minimal. Built as a pool barrier for Australian conditions. Supply only, or professional installation across Sydney.</p>
            <div className="hero-actions">
              <Link className="btn" href="/quote/?style=black-flat-top">Get a quote</Link>
              <Link className="btn secondary" href="/supply-only/flat-top-panels/">Supply only</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Styles</p>
          <h2>Choose a pool fence</h2>
          <div className="grid-3" style={{ marginTop: 18 }}>
            {styles.map((s) => (
              <Link className="card" key={s.slug} href={`/pool-fencing/${s.slug}/`}>
                <span className="meta">{s.kicker}</span>
                <h3>{s.name}</h3>
                <p>{s.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Which pool fence is right for me?</p>
          <h2>Compare the main styles</h2>
          <StyleSelector />
          <p><Link href="/find-your-fence/">Find your pool fence</Link> if you want a short set of questions first.</p>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap split">
          <div>
            <p className="kicker">Why Fencing Sydney</p>
            <h2>A licensed contractor, not a catalogue with a phone number</h2>
            <ul className="list">
              <li>NSW licence {business.licence}, ABN {business.abn}</li>
              <li>{business.years} years across residential, government, commercial and industrial fencing</li>
              <li>Sydney-wide installation and supply-only kits</li>
              <li>Site assessment before installation when the ground, access or an existing fence needs it</li>
              <li>Custom fabrication where a standard panel is the wrong answer</li>
            </ul>
            <Link className="btn" href="/about/">About {business.contact}</Link>
          </div>
          <div className="card">
            <h3>Free pool fence site measure and quote</h3>
            <p>Arrange a free site measure and quote across Sydney. If photos are enough, start there. We do not promise a visit where access or the job type does not call for one.</p>
            <Link className="btn" href="/quote/">Arrange a free site measure</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Projects</p>
          <h2>Pool fence gallery</h2>
          <Gallery />
        </div>
      </section>

      <section className="section dark">
        <div className="wrap grid-2">
          <div>
            <p className="kicker">Supply only</p>
            <h2>DIY kits and components</h2>
            <p>Panels, gates, posts, brackets, hinges, latches and extension pieces. Enquire for a supply-only quote. Prices are not listed on this site.</p>
            <Link className="btn light" href="/supply-only/">Enquire for supply only</Link>
          </div>
          <div>
            <p className="kicker">Extensions</p>
            <h2>Pool-related Colorbond extensions</h2>
            <p>Sheet, louvre, slat and lattice. An extension must be designed for the barrier. It does not automatically make a fence compliant.</p>
            <Link className="btn ghost" href="/extensions/">Check my existing fence</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">NSW pool safety</p>
            <h2>Rules, explained in plain language</h2>
            <p>Height, gaps, gates, boundary fences and older pools. Summarised from NSW Government guidance, with links to the official pages. This is general information, not a certificate.</p>
            <Link className="btn" href="/nsw-pool-rules/">Read NSW pool fencing rules</Link>
          </div>
          <div>
            <h3>How it works</h3>
            <div className="steps">
              {["Tell us about your pool", "Send photos or arrange a site measure", "We recommend a suitable solution", "Quote", "Installation", "Final checks"].map((item, i) => (
                <div className="step" key={item}><span className="num">{i + 1}</span><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="kicker">Sydney service area</p>
          <h2>Find your suburb</h2>
          <SuburbSearch />
          <p><Link href="/sydney/">Browse all Sydney areas</Link></p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="faq">
            {homeFaqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <FaqSchema faqs={homeFaqs} />
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <h2>Ready to sort your pool fencing?</h2>
          <div className="hero-actions">
            <Link className="btn light" href="/quote/">Get your free quote</Link>
            <a className="btn ghost" href={`tel:${business.phoneTel}`}>Call Jye {business.phoneDisplay}</a>
          </div>
          <p className="note" style={{ color: "#c9c3b8" }}>{disclaimer}</p>
        </div>
      </section>
    </>
  );
}
