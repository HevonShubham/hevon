"use client";

import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const foundingCircleDeadline = new Date("2026-12-31T23:59:59+05:30").getTime();

function remaining() {
  const distance = Math.max(0, foundingCircleDeadline - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

const steps = [
  ["Now", "Community input", "City, flavour and routine signals"],
  ["Next", "Prototype refinement", "Taste, texture and packaging validation"],
  ["Then", "Launch readiness", "Manufacturing, compliance and distribution"],
];

export default function LaunchCountdown() {
  const [time, setTime] = useState(remaining);

  useEffect(() => {
    const update = () => setTime(remaining());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="founding-circle" aria-labelledby="founding-circle-title" className="relative scroll-mt-20 overflow-hidden bg-[#17120f] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-10">
      <div className="pointer-events-none absolute -right-36 -top-36 h-[440px] w-[440px] rounded-full border-[70px] border-[#ff6a00]/12" />
      <div className="pointer-events-none absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-[#ff6a00]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-[#ff9a55]"><CalendarDays size={15} /> Founding Circle · 2026</div>
            <h2 id="founding-circle-title" className="mt-6 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl">Help shape what<br /><span className="font-serif italic font-medium text-[#ff8b3d]">comes next.</span></h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/62">Join by 31 December 2026, 11:59 pm IST, to share your city and flavour preference for HEVON’s next product-development checkpoint.</p>
            <a href="#waitlist" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#ff6a00] px-5 text-sm font-black transition hover:-translate-y-0.5">Join the Founding Circle <ArrowRight size={17} /></a>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-black uppercase tracking-[.2em] text-white/42">Founding Circle closes in</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Object.entries(time).map(([label, value]) => (
                <div key={label} className="rounded-[24px] border border-white/10 bg-white/[.055] px-2 py-6 text-center shadow-[0_22px_55px_rgba(0,0,0,.24)] backdrop-blur sm:py-8">
                  <div suppressHydrationWarning className="text-3xl font-black tabular-nums sm:text-5xl">{String(value).padStart(2, "0")}</div>
                  <div className="mt-2 text-[9px] font-black uppercase tracking-[.15em] text-white/40 sm:text-[10px]">{label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-white/38">This is a community-participation deadline, not a confirmed retail launch date.</p>
          </div>
        </div>
        <div className="mt-12 grid gap-3 border-t border-white/10 pt-8 md:grid-cols-3">
          {steps.map(([phase, title, copy]) => (
            <div key={title} className="flex gap-4 rounded-[22px] border border-white/8 bg-white/[.035] p-5">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#ff6a00]" size={19} />
              <div><p className="text-[9px] font-black uppercase tracking-[.18em] text-[#ff9a55]">{phase}</p><h3 className="mt-1 font-black">{title}</h3><p className="mt-2 text-xs leading-5 text-white/46">{copy}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
