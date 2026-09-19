"use client";

import { LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Vote({ selected }: { selected: string | null }) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;
    setSubmitting(true);
    setErrorMessage("");
    const formData = new FormData(event.currentTarget);
    formData.set("flavour", selected);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Vote submission failed.");
      router.push("/success");
    } catch (error) {
      console.error("Vote submission error:", error);
      setSubmitting(false);
      setErrorMessage("We could not submit your vote. Please try again or email hello@hevon.in.");
    }
  }

  return (
    <div id="vote" className="mt-10 scroll-mt-24 rounded-[32px] border border-black/8 bg-white p-6 shadow-[0_22px_65px_rgba(0,0,0,.06)] sm:p-9">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Shape What Comes Next</p>
          <h3 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Vote for your next HEVON flavour.</h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-black/55">Choose one of the future concepts above. Your vote will help us understand what the community wants next.</p>
        </div>
        <form name="flavour-vote" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="flavour-vote" />
          <input type="hidden" name="subject" value="New HEVON flavour vote" />
          <input className="hidden" name="bot-field" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="source" value="HEVON Website Flavour Vote" />
          <input type="hidden" name="flavour" value={selected ?? ""} />
          <p className="mb-3 text-sm font-bold" aria-live="polite">{selected ? `Your choice: ${selected}` : "Select a future flavour above to vote"}</p>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <input type="email" name="email" autoComplete="email" required disabled={submitting} placeholder="Your email address" aria-label="Your email address" className="min-h-14 rounded-full border border-black/10 bg-[#fff8f2] px-5 outline-none transition focus:border-[#ff6a00]" />
            <button type="submit" disabled={submitting || !selected} className="button-primary min-h-14 disabled:cursor-not-allowed disabled:opacity-50">
              {submitting ? <span className="inline-flex items-center gap-2"><LoaderCircle size={17} className="animate-spin" />Submitting</span> : "Submit Vote"}
            </button>
          </div>
          {errorMessage && <p role="alert" className="mt-4 text-sm text-red-600">{errorMessage}</p>}
          <p className="mt-3 text-xs text-black/45">One vote per person. We will only use your email for HEVON updates.</p>
        </form>
      </div>
    </div>
  );
}
