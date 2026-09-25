import Link from "next/link";

export default function NotFound() {
  return (
    <article className="section">
      <div className="wrap prose">
        <h1>That page is not here</h1>
        <p>The address may have changed. Start with pool fencing, or send a quote request.</p>
        <Link className="btn" href="/">Pool fencing Sydney</Link>
      </div>
    </article>
  );
}
