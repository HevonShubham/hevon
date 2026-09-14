"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Rotate3D } from "lucide-react";
import { useState } from "react";

const views = [
  { src: "/bottle-360-front.png", label: "Front" },
  { src: "/bottle-360-right.png", label: "Right side" },
  { src: "/bottle-360-back.png", label: "Back" },
  { src: "/bottle-360-left.png", label: "Left side" },
];

export default function HeroBottle({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState(0);
  const [direction, setDirection] = useState(1);
  const changeView = (step: number) => {
    setDirection(step);
    setView((current) => (current + step + views.length) % views.length);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${compact ? "min-h-[420px]" : "min-h-[570px] sm:min-h-[650px]"}`}>
      <div className="pointer-events-none absolute h-[70%] w-[78%] rounded-full bg-[#ff6a00]/10 blur-3xl" />
      <div className={`relative z-10 w-full overflow-hidden rounded-[34px] border border-black/8 bg-[#fff8f2] shadow-[0_28px_80px_rgba(67,34,18,.13)] ${compact ? "max-w-[350px]" : "max-w-[500px]"}`}>
        <div className="relative aspect-[2/2.55] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div key={views[view].src} custom={direction} initial={{ opacity: 0, x: direction > 0 ? 80 : -80, rotateY: direction > 0 ? -18 : 18 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} exit={{ opacity: 0, x: direction > 0 ? -80 : 80, rotateY: direction > 0 ? 18 : -18 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.1} onDragEnd={(_, info) => { if (info.offset.x < -35) changeView(1); if (info.offset.x > 35) changeView(-1); }} className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing">
              <Image src={views[view].src} alt={`HEVON Protein Coffee bottle — ${views[view].label} view`} fill priority={!compact && view === 0} draggable={false} sizes={compact ? "340px" : "(max-width: 1024px) 88vw, 500px"} className="select-none object-contain" />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fff8f2] to-transparent" />
          <span className="absolute right-4 top-4 rounded-full border border-black/8 bg-white/85 px-3 py-2 text-[9px] font-black uppercase tracking-[.16em] text-black/55 backdrop-blur">Packaging concept</span>
        </div>
        {!compact && <div className="relative z-20 flex items-center justify-between gap-3 border-t border-black/8 bg-white/90 px-3 py-3 sm:px-5">
          <button type="button" onClick={() => changeView(-1)} aria-label="Show previous bottle view" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 transition hover:border-[#ff6a00] hover:text-[#ff6a00]"><ChevronLeft size={18} /></button>
          <div className="min-w-0 text-center"><p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em]"><Rotate3D size={15} className="text-[#ff6a00]" />Swipe for 360°</p><p className="mt-1 text-xs text-black/45">{views[view].label} · {view + 1} of {views.length}</p></div>
          <button type="button" onClick={() => changeView(1)} aria-label="Show next bottle view" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#111] text-white transition hover:bg-[#ff6a00]"><ChevronRight size={18} /></button>
        </div>}
      </div>
    </div>
  );
}
