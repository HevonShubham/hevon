"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rotate3D } from "lucide-react";
import { useState } from "react";

export default function HeroBottle({ compact = false }: { compact?: boolean }) {
  const [rotation, setRotation] = useState(0);

  const rotate = (amount: number) => {
    setRotation((value) => Math.max(-34, Math.min(34, value + amount)));
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-visible ${
        compact ? "min-h-[420px]" : "min-h-[540px] sm:min-h-[650px]"
      }`}
    >
      <div className="pointer-events-none absolute h-[76%] w-[82%] rounded-full bg-[#ff6a00]/12 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
        transition={{
          opacity: { duration: 0.75 },
          scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className={`relative z-10 w-full ${compact ? "max-w-[360px]" : "max-w-[560px]"}`}
      >
        <div className="relative mx-auto [perspective:1100px]">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDrag={(_, info) => setRotation(Math.max(-34, Math.min(34, info.offset.x * 0.13)))}
            onDragEnd={(_, info) => setRotation(Math.max(-34, Math.min(34, info.offset.x * 0.13)))}
            animate={{ rotateY: rotation, rotateZ: rotation * -0.025, scale: 1 - Math.abs(rotation) / 900 }}
            transition={{ type: "spring", stiffness: 170, damping: 20 }}
            whileTap={{ cursor: "grabbing" }}
            className="cursor-grab touch-pan-y drop-shadow-[0_34px_40px_rgba(67,34,18,.24)] [transform-style:preserve-3d]"
            role="img"
            aria-label="Interactive HEVON high-protein iced coffee bottle. Drag horizontally to rotate."
          >
            <Image
              src="/hevon-bottle-brand-front.png"
              alt="HEVON high-protein iced coffee bottle with 22g protein"
              width={1024}
              height={1536}
              priority={!compact}
              draggable={false}
              sizes={compact ? "(max-width: 768px) 68vw, 300px" : "(max-width: 1024px) 74vw, 470px"}
              className="mx-auto h-auto max-h-[660px] w-auto select-none object-contain"
            />
            <div className="pointer-events-none absolute inset-y-[8%] left-[27%] w-[13%] rounded-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 blur-md" />
          </motion.div>
        </div>

        {!compact && (
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-black/10 bg-white/85 p-1.5 pl-3 shadow-[0_12px_32px_rgba(0,0,0,.1)] backdrop-blur-xl">
            <span className="mr-1 inline-flex items-center gap-1.5 whitespace-nowrap text-[10px] font-black uppercase tracking-[.12em] text-black/45"><Rotate3D size={15} className="text-[#ff6a00]" />Drag to rotate</span>
            <button type="button" onClick={() => rotate(-12)} aria-label="Rotate bottle left" className="grid h-8 w-8 place-items-center rounded-full bg-black text-sm font-black text-white transition hover:bg-[#ff6a00]">−</button>
            <button type="button" onClick={() => setRotation(0)} aria-label="Reset bottle rotation" className="grid h-8 min-w-8 place-items-center rounded-full border border-black/10 px-2 text-[9px] font-black uppercase text-black/55 transition hover:border-[#ff6a00] hover:text-[#ff6a00]">Reset</button>
            <button type="button" onClick={() => rotate(12)} aria-label="Rotate bottle right" className="grid h-8 w-8 place-items-center rounded-full bg-black text-sm font-black text-white transition hover:bg-[#ff6a00]">+</button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
