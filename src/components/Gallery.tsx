"use client";

import { useState } from "react";

const shots = [
  { src: "/images/black-flat-top-aluminium-fence.jpg", alt: "Black flat top aluminium fence with vertical bars and a level top rail", cat: "Black Flat Top", w: 1620, h: 640 },
  { src: "/images/colorbond-boundary-fence-sydney-backyard.jpg", alt: "Cream Colorbond boundary fence around a Sydney backyard", cat: "Extensions", w: 1600, h: 1200 },
  { src: "/images/colorbond-fence-beside-brick-home.jpg", alt: "Pale green Colorbond fence beside a brick Sydney home", cat: "Extensions", w: 1600, h: 1200 },
  { src: "/images/monument-colorbond-fence-retaining-wall.jpg", alt: "Monument Colorbond fence installed above a block retaining wall", cat: "Completed Projects", w: 1024, h: 576 },
  { src: "/images/colorbond-fence-lattice-extension.jpg", alt: "Colorbond fence with a lattice extension in front of a brick house", cat: "Extensions", w: 594, h: 446 },
];

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
            <img src={shot.src} alt={shot.alt} width={shot.w} height={shot.h} loading="lazy" />
          </button>
        ))}
      </div>
      {visible.length === 0 && <p>Photography for this category is being added. Send your own photos with a quote request in the meantime.</p>}
      {open !== null && visible[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo">
          <button className="btn light" type="button" onClick={() => setOpen(null)}>Close</button>
          <figure>
            <img src={visible[open].src} alt={visible[open].alt} width={visible[open].w} height={visible[open].h} />
            <figcaption style={{ color: "#fff", marginTop: 8 }}>{visible[open].alt}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
