"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const choices = ["Coffee taste", "Protein", "Zero added sugar", "Convenience", "Brand purpose"];
const cities = ["Ahmedabad", "Bengaluru", "Chandigarh", "Chennai", "Delhi NCR", "Hyderabad", "Indore", "Jaipur", "Kochi", "Kolkata", "Lucknow", "Mumbai", "Nagpur", "Pune", "Surat", "Other"];

export default function TasteLab() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = new FormData(event.currentTarget);
    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));
    try {
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error("Feedback submission failed");
      router.push("/success?form=feedback");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="taste-lab" className="scroll-mt-20 bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="eyebrow">HEVON Taste Lab</p>
          <h2 className="section-title mt-5 text-white">Your taste.<br /><span className="font-serif italic text-[#ff8b3d]">Built into the bottle.</span></h2>
          <a href="/feedback.html" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-5 py-3 text-center text-sm font-bold text-white sm:w-auto">Already tried HEVON? Share feedback <ArrowRight size={18} /></a>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/58">Tell us what matters before the formulation is locked. Your answers help shape sweetness, coffee intensity, texture and how we explain HEVON.</p>
          <div className="mt-8 space-y-3 text-sm text-white/65">
            {["Influence the final taste profile", "Help us understand protein-coffee awareness", "Get invited to future tasting sessions"].map((item) => <p key={item} className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#ff6a00]" />{item}</p>)}
          </div>
        </div>

        <form name="hevon-feedback" onSubmit={submit} className="rounded-[32px] border border-white/10 bg-white/[.055] p-6 backdrop-blur-sm sm:p-8">
          <input type="hidden" name="form-name" value="hevon-feedback" />
          <input type="hidden" name="source" value="HEVON Website Taste Lab" />
          <input className="hidden" name="bot-field" tabIndex={-1} autoComplete="off" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-bold text-white/60">Name<input required name="name" className="mt-2 min-h-13 w-full rounded-2xl border border-white/12 bg-black/20 px-4 text-white outline-none focus:border-[#ff6a00]" /></label>
            <label className="text-xs font-bold text-white/60">Email<input required type="email" name="email" className="mt-2 min-h-13 w-full rounded-2xl border border-white/12 bg-black/20 px-4 text-white outline-none focus:border-[#ff6a00]" /></label>
            <label className="text-xs font-bold text-white/60">City<select required name="city" defaultValue="" className="mt-2 min-h-13 w-full rounded-2xl border border-white/12 bg-[#191919] px-4 text-white outline-none focus:border-[#ff6a00]"><option value="" disabled>Select city</option>{cities.map((city) => <option key={city}>{city}</option>)}</select></label>
            <label className="text-xs font-bold text-white/60">Coffee strength
              <select name="coffee-strength" className="mt-2 min-h-13 w-full rounded-2xl border border-white/12 bg-[#191919] px-4 text-white outline-none focus:border-[#ff6a00]">
                <option>Mild and creamy</option><option>Balanced</option><option>Bold coffee</option>
              </select>
            </label>
          </div>
          <fieldset className="mt-6"><legend className="text-xs font-bold text-white/60">What first made you curious about HEVON?</legend><div className="mt-3 flex flex-wrap gap-2">{choices.map((choice) => <label key={choice} className="cursor-pointer"><input type="radio" required name="awareness-driver" value={choice} className="peer sr-only" /><span className="block rounded-full border border-white/12 px-4 py-2.5 text-xs text-white/60 transition peer-checked:border-[#ff6a00] peer-checked:bg-[#ff6a00] peer-checked:text-white">{choice}</span></label>)}</div></fieldset>
          <label className="mt-6 block text-xs font-bold text-white/60">What would make HEVON worth buying?<textarea name="purchase-feedback" rows={3} className="mt-2 w-full resize-none rounded-2xl border border-white/12 bg-black/20 p-4 text-white outline-none focus:border-[#ff6a00]" /></label>
          <button disabled={status === "submitting"} className="mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#ff6a00] font-black transition hover:-translate-y-0.5">{status === "submitting" ? <><LoaderCircle size={18} className="animate-spin" />Sending</> : <>Share feedback <ArrowRight size={18} /></>}</button>
          {status === "error" && <p className="mt-3 text-sm text-red-300">We could not submit this. Please retry or email hello@hevon.in.</p>}
          <p className="mt-3 text-center text-[11px] text-white/35">Research only. No spam. Your feedback stays confidential.</p>
        </form>
      </div>
    </section>
  );
}
