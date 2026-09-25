"use client";

import { useState } from "react";
import { shots } from "@/lib/gallery";

const cats = ["All", "Black Flat Top", "Aluminium", "Glass", "Steel", "Pool Gates", "Extensions", "Completed Projects", "Details"];

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const visible = shots.filter((s) => cat === "All" || s.cat === cat || (cat === "Aluminium" && s.cat === "Black Flat Top") || (cat === "Details" && s.cat === "Black Flat Top"));

  return (
    <div>
      <div className="filters" role="toolbar" aria-label="Gallery categories">
        {cats.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="gallery-grid">
        {visible.map((shot, i) => (
          <button key={shot.src} type="button" onClick={() => setOpen(i)}>
            <img src={shot.src} alt={shot.alt} width={1200} height={800} loading="lazy" />
          </button>
        ))}
      </div>
      {visible.length === 0 && <p>Photography for this category is being added. Send your own photos with a quote request in the meantime.</p>}
      {open !== null && visible[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo">
          <button className="btn light" type="button" onClick={() => setOpen(null)}>Close</button>
          <figure>
            <img src={visible[open].src} alt={visible[open].alt} width={1600} height={1000} />
            <figcaption style={{ color: "#fff", marginTop: 8 }}>{visible[open].alt}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
