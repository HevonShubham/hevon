"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

const milestone = new Date("2026-10-01T00:00:00+05:30").getTime();

function remaining() {
  const distance = Math.max(0, milestone - Date.now());
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

export default function LaunchCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setTime(remaining()), 0);
    const timer = window.setInterval(() => setTime(remaining()), 1000);
    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#ff6a00] px-5 py-16 text-white sm:px-6 lg:px-10">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[58px] border-white/10" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em]">
            <CalendarDays size={15} /> India helps shape HEVON
          </div>
          <h2 className="mt-6 text-4xl font-black leading-none tracking-[-.055em] sm:text-6xl">Help decide<br />where we launch first.</h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/75">Join the founding community before October 01. Share your city, coffee preference and purchase intent to help shape HEVON’s launch shortlist.</p>
          <a href="#waitlist" className="mt-7 inline-flex items-center gap-2 font-black">Join the founding community <ArrowRight size={18} /></a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {Object.entries(time).map(([label, value]) => (
            <div key={label} className="rounded-[24px] border border-white/20 bg-[#111] px-2 py-6 text-center shadow-[0_22px_55px_rgba(80,20,0,.2)] sm:py-8">
              <div className="text-3xl font-black tabular-nums sm:text-5xl">{String(value).padStart(2, "0")}</div>
              <div className="mt-2 text-[9px] font-black uppercase tracking-[.15em] text-white/45 sm:text-[11px]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
