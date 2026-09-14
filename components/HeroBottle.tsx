"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Rotate3D } from "lucide-react";
import { useState } from "react";

const views = [
  { src: "/bottle-360-front.webp", label: "Front" },
  { src: "/bottle-360-right.webp", label: "Right side" },
  { src: "/bottle-360-back.webp", label: "Back" },
  { src: "/bottle-360-left.webp", label: "Left side" },
];

export default function HeroBottle({ compact = false }: { compact?: boolean }) {
  const [view, setView] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTurning, setIsTurning] = useState(false);
  const changeView = (step: number) => {
    if (isTurning) return;
    setIsTurning(true);
    setDirection(step);
    setView((current) => (current + step + views.length) % views.length);
  };

  return (
    <div className={`relative flex min-w-0 flex-col items-center justify-center ${compact ? "min-h-[420px]" : "min-h-[430px] sm:min-h-[650px]"}`}>
      <div className="pointer-events-none absolute h-[70%] w-[78%] rounded-full bg-[#ff6a00]/10 blur-3xl" />
      <div className={`relative z-10 w-full overflow-hidden rounded-[34px] border border-black/8 bg-[#fff8f2] shadow-[0_28px_80px_rgba(67,34,18,.13)] ${compact ? "max-w-[350px]" : "max-w-[500px]"}`}>
        <div className="relative aspect-[2/2.55] overflow-hidden [perspective:1400px]">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={views[view].src}
              custom={direction}
              initial={{ opacity: 0.12, rotateY: direction > 0 ? -72 : 72, scale: 0.94, filter: "blur(2px)" }}
              animate={{ opacity: 1, rotateY: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0.12, rotateY: direction > 0 ? 72 : -72, scale: 0.94, filter: "blur(2px)" }}
              transition={{ duration: 0.58, ease: [0.33, 1, 0.68, 1] }}
              onAnimationComplete={() => setIsTurning(false)}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              dragMomentum={false}
              onDragEnd={(_, info) => {
                if (info.offset.x < -42 || info.velocity.x < -450) changeView(1);
                else if (info.offset.x > 42 || info.velocity.x > 450) changeView(-1);
              }}
              className="absolute inset-0 cursor-grab touch-pan-y [backface-visibility:hidden] [transform-style:preserve-3d] active:cursor-grabbing"
            >
              <Image src={views[view].src} alt={`HEVON Protein Coffee bottle — ${views[view].label} view`} fill priority={!compact && view === 0} draggable={false} sizes={compact ? "340px" : "(max-width: 1024px) 88vw, 500px"} className="select-none object-contain" />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fff8f2] to-transparent" />
          <span className="absolute right-4 top-4 rounded-full border border-black/8 bg-white/85 px-3 py-2 text-[9px] font-black uppercase tracking-[.16em] text-black/55 backdrop-blur">Packaging concept</span>
        </div>
        {!compact && <div className="relative z-20 flex items-center justify-between gap-3 border-t border-black/8 bg-white/90 px-3 py-3 sm:px-5">
          <button disabled={isTurning} type="button" onClick={() => changeView(-1)} aria-label="Rotate bottle left" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 transition hover:border-[#ff6a00] hover:text-[#ff6a00] disabled:opacity-40"><ChevronLeft size={18} /></button>
          <div className="min-w-0 text-center"><p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em]"><Rotate3D size={15} className="text-[#ff6a00]" />Drag to rotate</p><div className="mt-1.5 flex items-center justify-center gap-1.5" aria-label={`${views[view].label} view, ${view + 1} of ${views.length}`}>{views.map((item, index) => <button disabled={isTurning} type="button" key={item.label} onClick={() => { const raw = index - view; changeView(Math.abs(raw) === 3 ? -Math.sign(raw) : Math.sign(raw)); }} aria-label={`Show ${item.label.toLowerCase()} view`} className={`h-1.5 rounded-full transition-all ${index === view ? "w-5 bg-[#ff6a00]" : "w-1.5 bg-black/20 hover:bg-black/40"}`} />)}</div></div>
          <button disabled={isTurning} type="button" onClick={() => changeView(1)} aria-label="Rotate bottle right" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#111] text-white transition hover:bg-[#ff6a00] disabled:opacity-40"><ChevronRight size={18} /></button>
        </div>}
      </div>
    </div>
  );
}
