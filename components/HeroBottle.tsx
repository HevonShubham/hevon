"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBottle({ compact = false }: { compact?: boolean }) {
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
        <div className="relative mx-auto drop-shadow-[0_34px_40px_rgba(67,34,18,.24)]">
          <Image
            src="/hevon-bottle-brand-front.png"
            alt="HEVON high-protein iced coffee bottle with 22g protein"
            width={1024}
            height={1536}
            priority={!compact}
            sizes={compact ? "(max-width: 768px) 68vw, 300px" : "(max-width: 1024px) 74vw, 470px"}
            className="mx-auto h-auto max-h-[660px] w-auto select-none object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
