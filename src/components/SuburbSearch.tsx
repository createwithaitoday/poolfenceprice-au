"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { locations } from "@/lib/locations";

export function SuburbSearch() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (query.length < 2) return [];
    return locations.filter((l) => l.name.toLowerCase().includes(query)).slice(0, 8);
  }, [q]);

  return (
    <div className="search">
      <label>Search a Sydney suburb
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Start typing, e.g. Cronulla" />
      </label>
      {results.length > 0 && (
        <ul>
          {results.map((l) => (
            <li key={l.slug}><Link href={`/sydney/${l.slug}/`}>{l.name}</Link></li>
          ))}
        </ul>
      )}
    </div>
  );
}
