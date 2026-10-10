"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBottle({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative flex min-w-0 items-center justify-center ${compact ? "min-h-[420px]" : "min-h-[440px] sm:min-h-[650px]"}`}>
      <div className="pointer-events-none absolute h-[72%] w-[78%] rounded-full bg-[#ff6a00]/12 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.97 }}
        animate={{ opacity: 1, y: [0, -7, 0], scale: 1 }}
        transition={{ opacity: { duration: 0.7 }, scale: { duration: 0.8 }, y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" } }}
        className={`relative z-10 w-full ${compact ? "max-w-[390px]" : "max-w-[680px]"}`}
      >
        <div className="relative overflow-hidden rounded-[34px] border border-black/8 bg-[#fff8f2] shadow-[0_30px_90px_rgba(67,34,18,.16)]">
          <Image
            src="/hero-bottle-realistic-v2.png"
            alt="HEVON PROFFEE Protein Coffee — 20 gm protein, Fuel Your Day"
            width={1448}
            height={1086}
            priority={!compact}
            sizes={compact ? "390px" : "(max-width: 1024px) 92vw, 680px"}
            className="h-auto w-full select-none object-contain"
          />
          <span className="absolute right-4 top-4 rounded-full border border-black/8 bg-white/88 px-3 py-2 text-[9px] font-black uppercase tracking-[.16em] text-black/55 backdrop-blur">Packaging concept</span>
        </div>
      </motion.div>
    </div>
  );
}
