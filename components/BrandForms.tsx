"use client";

import { FormEvent, useState } from "react";

export default function BrandForms({ kind }: { kind: "waitlist" | "vote" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const vote = kind === "vote";
  const name = vote ? "flavour-vote" : "hevon-waitlist";
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
    } catch { setStatus("error"); }
  }
  if (status === "sent") return <div className="hv-form-success" role="status"><span aria-hidden="true">✓</span><h3>{vote ? "Your vote is in." : "You’re on the list."}</h3><p>{vote ? "Thanks for helping shape what comes next for HEVON." : "We’ll email you with HEVON launch news and early-access information."}</p></div>;
  return <form className={`hv-form ${vote ? "hv-vote-form" : ""}`} name={name} action="/__forms.html" method="POST" onSubmit={submit}>
    <input type="hidden" name="form-name" value={name} />
    <input type="hidden" name="source" value={vote ? "HEVON Website Flavour Vote" : "HEVON Website Waitlist"} />
    <p hidden><label>Leave this empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    {vote ? <fieldset disabled={status === "sending"}><legend>Which flavour would you reach for?</legend><div className="hv-flavour-options">{[["Rich Chocolate", "Chocolate", "cocoa"], ["Vanilla Crème", "Vanilla", "vanilla"], ["Strawberry Bliss", "Strawberry", "berry"], ["Mango Burst", "Mango", "mango"], ["Matcha Power", "Matcha", "matcha"]].map(([value, label, tone]) => <label key={value} className={`hv-flavour ${tone}`}><input type="radio" name="flavour" value={value} required /><span>{label}<b aria-hidden="true">↗</b></span></label>)}</div></fieldset> : <label>Your name<input name="name" autoComplete="name" placeholder="First name" required maxLength={100} disabled={status === "sending"} /></label>}
    <label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} disabled={status === "sending"} /></label>
    <p className="hv-form-note">{vote ? "Your email helps us associate your vote. This does not sign you up for launch emails." : "By joining, you agree to receive HEVON product and launch emails. You can unsubscribe at any time."} <a href="/privacy">Privacy policy</a></p>
    <button className="hv-button hv-button-dark" disabled={status === "sending"} type="submit">{status === "sending" ? "Sending…" : vote ? "Send my vote" : "Keep me in the loop"}<span aria-hidden="true">↗</span></button>
    {status === "error" && <p role="alert" className="hv-error">That didn’t go through. Please try again or email hello@hevon.in.</p>}
  </form>;
}
