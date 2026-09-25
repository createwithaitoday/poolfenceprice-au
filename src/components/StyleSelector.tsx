"use client";

import { useState } from "react";
import Link from "next/link";
import { styles } from "@/lib/products";

export function StyleSelector() {
  const [slug, setSlug] = useState("black-flat-top");
  const current = styles.find((s) => s.slug === slug) || styles[0];
  return (
    <div className="split">
      <div>
        <img src={current.image} alt={current.alt} width={1620} height={640} />
      </div>
      <div>
        <div className="filters">
          {styles.map((s) => (
            <button key={s.slug} type="button" aria-pressed={slug === s.slug} onClick={() => setSlug(s.slug)}>{s.name}</button>
          ))}
        </div>
        <h3>{current.name}</h3>
        <p>{current.body}</p>
        <Link className="btn" href={`/pool-fencing/${current.slug}/`}>Get a quote for this style</Link>
      </div>
    </div>
  );
}
