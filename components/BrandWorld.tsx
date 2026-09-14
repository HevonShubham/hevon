"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const scenes = [
  {
    src: "/campaign/hevon-cafe-bilingual.webp",
    detail: "/campaign/hevon-bilingual-packaging.webp",
    eyebrow: "Built for India",
    title: "A familiar ritual, made more useful.",
    copy: "A bilingual packaging direction designed to feel clear, confident and at home in everyday Indian life.",
    alt: "HEVON English and Hindi packaging concepts in a warm Indian café",
    detailAlt: "Detailed English and Hindi HEVON bottle packaging concepts",
    position: "object-[72%_center] sm:object-center",
  },
  {
    src: "/campaign/hevon-cafe-five-view.webp",
    detail: "/campaign/hevon-five-view-packaging.webp",
    eyebrow: "Designed from every angle",
    title: "The whole bottle tells the story.",
    copy: "Front, back and side-panel concepts bring product information, brand purpose and daily utility into one coherent system.",
    alt: "Five HEVON bottle views arranged in a realistic café studio",
    detailAlt: "Detailed front, side and back HEVON bottle packaging concepts",
    position: "object-center",
  },
];

export default function BrandWorld() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="brand-world" className="scroll-mt-20 overflow-hidden bg-[#f0e6db] px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">The HEVON World</p>
            <h2 className="section-title mt-5">Real nutrition.<br /><span className="font-serif italic text-[#b84b13]">Made for real days.</span></h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-black/58 lg:justify-self-end">
            More than a pack on a shelf—HEVON is being shaped as a modern daily ritual, with a distinctive Indian voice and a product experience considered from every angle.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {scenes.map((scene, index) => (
            <motion.article
              key={scene.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              className="group relative min-h-[680px] overflow-hidden rounded-[34px] border border-black/10 bg-[#1a120e] shadow-[0_28px_90px_rgba(47,24,10,.16)] sm:min-h-[620px] lg:min-h-[680px]"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.035 }}
                whileInView={{ scale: reduceMotion ? 1 : 1.085 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 12, ease: "easeOut" }}
              >
                <Image src={scene.src} alt={scene.alt} fill priority={index === 0} sizes="(max-width: 1280px) 100vw, 1280px" className={`object-cover ${scene.position}`} />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/38 to-black/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/12" />
              {!reduceMotion && (
                <motion.div
                  aria-hidden="true"
                  className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl"
                  animate={{ x: ["0%", "470%"] }}
                  transition={{ duration: 7, delay: index * 1.2, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                />
              )}

              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-7 p-6 sm:p-9 lg:flex-row lg:items-end lg:justify-between lg:p-12">
                <div className="max-w-xl text-white">
                  <p className="text-[10px] font-black uppercase tracking-[.24em] text-[#ff9a58]">{scene.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">{scene.title}</h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/72 sm:text-base">{scene.copy}</p>
                </div>

                <motion.div whileHover={{ y: -6, rotate: index === 0 ? 1 : -1 }} className="relative h-36 w-full shrink-0 overflow-hidden rounded-2xl border border-white/25 bg-white shadow-2xl sm:h-40 sm:w-64">
                  <Image src={scene.detail} alt={scene.detailAlt} fill sizes="256px" className="object-cover object-center" />
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/72 text-white backdrop-blur"><ArrowDownRight size={15} /></span>
                </motion.div>
              </div>

              <span className="absolute right-5 top-5 z-10 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-[9px] font-black uppercase tracking-[.16em] text-white/80 backdrop-blur-md">Packaging concept</span>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-black/42">Pre-launch visual direction. Final pack artwork and claims remain subject to product, manufacturing and regulatory validation.</p>
      </div>
    </section>
  );
}
