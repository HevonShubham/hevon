"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Coffee, Droplets, Sparkles, Zap } from "lucide-react";

const points = [
  "18–20g high-quality protein",
  "Zero added sugar",
  "Real ingredients",
  "Designed for everyday routines",
];

export default function WhyHevon() {
  return (
    <section id="why-hevon" className="scroll-mt-20 relative overflow-hidden bg-[#0f0f0f] px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,106,0,.16),transparent_34%),radial-gradient(circle_at_25%_80%,rgba(255,255,255,.04),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Why HEVON</p>
          <h2 className="section-title mt-5 text-white">
            More than a drink.<br />
            <span className="font-serif italic text-[#ff8b3d]">Your daily advantage.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/60">
            HEVON is being built for people who want useful nutrition without giving up taste, convenience or the ritual of a drink they genuinely enjoy.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.045] px-4 py-4 text-sm text-white/78 backdrop-blur-sm">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#ff6a00]/15 text-[#ff6a00]"><Check size={15} /></span>
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[.02]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,106,0,.18),transparent_45%)]" />
          <motion.div
            animate={{ y: [0, -8, 0], scale: [1, 1.015, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/hero-bottle-realistic.png"
              alt="HEVON Coffee Latte realistic product bottle with coffee beans and creamy splash"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/8 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
          </motion.div>

          <motion.div animate={{ y: [0, -14, 0], x: [0, 5, 0], rotate: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[8%] top-[18%] grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black/25 text-[#ff8b3d] backdrop-blur-md">
            <Coffee size={22} />
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0], x: [0, -6, 0], rotate: [0, -8, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[8%] top-[14%] grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black/25 text-[#ff8b3d] backdrop-blur-md">
            <Zap size={22} />
          </motion.div>
          <motion.div animate={{ y: [0, -10, 0], x: [0, -4, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[12%] left-[7%] grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black/25 text-[#ff8b3d] backdrop-blur-md">
            <Droplets size={22} />
          </motion.div>
          <motion.div animate={{ y: [0, 10, 0], x: [0, 5, 0], rotate: [0, 10, 0] }} transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] right-[9%] grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-black/25 text-[#ff8b3d] backdrop-blur-md">
            <Sparkles size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
