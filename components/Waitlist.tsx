"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const cities = ["Ahmedabad","Bengaluru","Chandigarh","Chennai","Delhi NCR","Hyderabad","Indore","Jaipur","Kochi","Kolkata","Lucknow","Mumbai","Nagpur","Pune","Surat","Other"];
const flavours = ["Protein Coffee — Original", "Mocha", "Dark Cocoa", "Vanilla", "Strawberry", "Mango", "Matcha", "Surprise me"];

export default function Waitlist() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("submitting");
    const data = new FormData(event.currentTarget); const body = new URLSearchParams(); data.forEach((value, key) => body.append(key, String(value)));
    try { const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() }); if (!response.ok) throw new Error(); router.push("/success?form=early-access"); } catch { setStatus("error"); }
  }
  const control = "mt-2 min-h-13 w-full rounded-2xl border border-white/15 bg-[#191919] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#ff6a00]";
  return <section id="waitlist" className="relative scroll-mt-20 overflow-hidden bg-[#111] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-10">
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6a00]/10 blur-3xl" />
    <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
      <div className="lg:sticky lg:top-28"><p className="eyebrow">Founding Community</p><h2 className="section-title mt-5 text-white">Help shape<br /><span className="font-serif italic text-[#ff8b3d]">India’s coffee-first protein drink.</span></h2><p className="mt-6 max-w-xl text-base leading-8 text-white/58">This is more than a mailing list. Your city and expected flavour help HEVON plan tasting opportunities, prototypes and priority launch markets.</p><div className="mt-8 space-y-3 text-sm text-white/60"><p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#ff6a00]" />Be considered for early tasting</p><p className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#ff6a00]" />Influence flavour and launch-city decisions</p><p className="flex items-center gap-3"><LockKeyhole size={18} className="text-[#ff6a00]" />Consent-based updates only</p></div><a href="https://wa.me/917905558324?text=Hi%20HEVON%2C%20I%20want%20to%20know%20more%20about%20early%20access." target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold transition hover:border-[#25D366] hover:text-[#25D366]"><FaWhatsapp size={18} />Chat with HEVON</a></div>
      <form name="hevon-waitlist" onSubmit={handleSubmit} className="rounded-[32px] border border-white/10 bg-white/[.055] p-5 shadow-[0_30px_80px_rgba(0,0,0,.24)] sm:p-8">
        <input type="hidden" name="form-name" value="hevon-waitlist" /><input type="hidden" name="subject" value="New HEVON early-access submission" /><input type="hidden" name="source" value="HEVON Website Early Access" /><input className="hidden" name="bot-field" tabIndex={-1} autoComplete="off" />
        <div className="mb-7 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#ff6a00] font-black">1</span><div><h3 className="font-black">Your early-access profile</h3><p className="text-xs text-white/40">Required fields are marked *</p></div></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-xs font-bold text-white/60">Name *<input required name="name" autoComplete="name" className={control} placeholder="Your name" /></label>
          <label className="text-xs font-bold text-white/60">Email *<input required type="email" name="email" autoComplete="email" className={control} placeholder="you@example.com" /></label>
          <label className="text-xs font-bold text-white/60">Age *<select required name="age-band" className={control} defaultValue=""><option value="" disabled>Select age</option><option>Under 18</option><option>18–24</option><option>25–34</option><option>35–44</option><option>45–54</option><option>55+</option><option>Prefer not to say</option></select></label>
          <label className="text-xs font-bold text-white/60">City *<select required name="city" className={control} defaultValue=""><option value="" disabled>Select city</option>{cities.map((city) => <option key={city}>{city}</option>)}</select></label>
          <label className="text-xs font-bold text-white/60 sm:col-span-2">Which flavour would you most like HEVON to launch? *<select required name="expected-flavour" className={control} defaultValue=""><option value="" disabled>Select expected flavour</option>{flavours.map((flavour) => <option key={flavour}>{flavour}</option>)}</select></label>
        </div>
        <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4 text-xs leading-5 text-white/55"><input required type="checkbox" name="marketing-consent" value="yes" className="mt-1 h-4 w-4 accent-[#ff6a00]" /><span>I agree to receive HEVON product-development, tasting and launch updates through my selected contact details. I can unsubscribe at any time. See the <a href="/privacy" className="font-bold text-white underline">Privacy Policy</a>.</span></label>
        <button disabled={status === "submitting"} className="mt-5 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-7 font-black shadow-[0_16px_35px_rgba(255,106,0,.22)] transition hover:-translate-y-0.5">{status === "submitting" ? <><LoaderCircle size={18} className="animate-spin" />Joining</> : <>Join Early Access <Mail size={18} /></>}</button>{status === "error" && <p role="alert" className="mt-4 text-sm text-red-300">We could not submit your details. Please retry or WhatsApp HEVON.</p>}
      </form>
    </div>
  </section>;
}
