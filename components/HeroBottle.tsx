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
        className={`relative z-10 w-full ${compact ? "max-w-[430px]" : "max-w-[720px]"}`}
      >
        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 96% 94% at 54% 48%, #000 74%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 96% 94% at 54% 48%, #000 74%, transparent 100%)",
          }}
        >
          <Image
            src="/hero-bottle-realistic.png"
            alt="HEVON Coffee Latte protein drink with coffee beans and creamy splash"
            width={916}
            height={690}
            priority={!compact}
            sizes={compact ? "(max-width: 768px) 88vw, 430px" : "(max-width: 1024px) 92vw, 720px"}
            className="h-auto w-full select-none object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
}
