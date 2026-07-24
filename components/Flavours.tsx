"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Coffee, Leaf, Sparkles } from "lucide-react";

const flavours = [
  {
    name: "Coffee Latte",
    copy: "Real Arabica coffee with a smooth, balanced finish.",
    from: "#f7eadf",
    to: "#bd855e",
    note: "Launch flavour",
    icon: Coffee,
    filter: "none",
    badge: "bg-[#111111]",
  },
  {
    name: "Rich Chocolate",
    copy: "Deep cocoa flavour with a rounded, creamy finish.",
    from: "#d9b6a1",
    to: "#4c291e",
    note: "Future concept",
    icon: Sparkles,
    filter: "sepia(.5) saturate(1.55) brightness(.68) hue-rotate(338deg)",
    badge: "bg-[#3d2018]",
  },
  {
    name: "Vanilla Crème",
    copy: "Soft vanilla flavour with a clean and elegant finish.",
    from: "#fff5dd",
    to: "#ddb36d",
    note: "Future concept",
    icon: Sparkles,
    filter: "saturate(.55) brightness(1.16)",
    badge: "bg-[#b77a17]",
  },
  {
    name: "Strawberry Bliss",
    copy: "Bright strawberry flavour made for everyday enjoyment.",
    from: "#fae2e6",
    to: "#dc7f8d",
    note: "Future concept",
    icon: Sparkles,
    filter: "hue-rotate(310deg) saturate(1.2) brightness(1.04)",
    badge: "bg-[#c64353]",
  },
  {
    name: "Mango Burst",
    copy: "Tropical mango with a bright, refreshing finish.",
    from: "#fff1ca",
    to: "#e2942b",
    note: "Future concept",
    icon: Sparkles,
    filter: "sepia(.42) saturate(1.55) brightness(1.1)",
    badge: "bg-[#d77516]",
  },
  {
    name: "Matcha Power",
    copy: "Earthy matcha with a smooth, modern taste profile.",
    from: "#eef3d3",
    to: "#82964d",
    note: "Future concept",
    icon: Leaf,
    filter: "hue-rotate(60deg) saturate(.82) brightness(.96)",
    badge: "bg-[#58702b]",
  },
];

export default function Flavours() {
  return (
    <section id="flavours" className="scroll-mt-20 bg-[#fff8f2] px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Choose Your Flavour</p>
            <h2 className="section-title mt-4">One standard.<br />Many flavours.</h2>
          </div>
          <div className="max-w-md">
            <p className="text-base leading-7 text-black/55">
              Every HEVON flavour follows the same promise: useful nutrition, zero added sugar and taste made for everyday life.
            </p>
            <p className="mt-3 text-xs leading-5 text-black/38">Coffee Latte is the planned launch flavour. The rest are future concepts.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flavours.map((flavour, index) => {
            const Icon = flavour.icon;
            return (
              <motion.article
                key={flavour.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative min-h-[560px] overflow-hidden rounded-[34px] border border-black/8 shadow-[0_12px_34px_rgba(0,0,0,.06)] transition-shadow duration-500 hover:shadow-[0_34px_90px_rgba(0,0,0,.18)]"
                style={{ background: `linear-gradient(145deg, ${flavour.from}, ${flavour.to})` }}
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 [background:radial-gradient(circle_at_78%_24%,rgba(255,255,255,.72),transparent_34%),radial-gradient(circle_at_22%_82%,rgba(255,255,255,.25),transparent_38%)]" />
                  <div className="absolute -right-14 top-20 h-52 w-52 rounded-full border border-white/35" />
                  <div className="absolute -left-16 bottom-10 h-44 w-44 rounded-full bg-white/16 blur-2xl" />
                </div>

                <div className="relative z-20 flex items-start justify-between gap-4 p-7">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/76 px-3 py-1.5 shadow-sm backdrop-blur-md">
                      <Icon size={13} strokeWidth={1.8} />
                      <span className="text-[10px] font-black uppercase tracking-[.16em]">{flavour.note}</span>
                    </div>
                    <h3 className="mt-4 max-w-[270px] text-3xl font-black tracking-[-.045em]">{flavour.name}</h3>
                    <p className="mt-3 max-w-[245px] text-sm leading-6 text-black/65">{flavour.copy}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/10 bg-white/78 transition duration-300 group-hover:rotate-45 group-hover:bg-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <motion.div
                  className="pointer-events-none absolute inset-x-0 bottom-8 top-[158px] z-10 flex items-end justify-center"
                  whileHover={{ scale: 1.055, rotate: index % 2 === 0 ? -1.2 : 1.2 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative h-full w-[82%] max-w-[355px] drop-shadow-[0_28px_30px_rgba(40,18,7,.28)]">
                    <Image
                      src="/hevon-bottle-cutout.png"
                      alt={`${flavour.name} HEVON protein drink concept`}
                      fill
                      sizes="(max-width: 768px) 82vw, (max-width: 1200px) 42vw, 28vw"
                      className="select-none object-contain object-bottom"
                      style={{ filter: flavour.filter }}
                    />
                  </div>
                </motion.div>

                <div className="pointer-events-none absolute inset-x-8 bottom-5 z-20 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-[.16em] text-white drop-shadow-md">18–20g Protein</span>
                  <span className={`rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[.12em] text-white shadow-lg ${flavour.badge}`}>
                    {flavour.name}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
