"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function BrandWorld() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="brand-world" className="scroll-mt-20 overflow-hidden bg-[#f0e6db] px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">The HEVON World</p>
          <h2 className="section-title mt-5">Real nutrition.<br /><span className="font-serif italic text-[#b84b13]">Made for real days.</span></h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-black/58">
            HEVON is being shaped around a coffee-first daily ritual. Here is the current Protein Coffee bottle design, with the product story kept clear and easy to recognize.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-black/50">
            Future flavour ideas and community questions belong on the website, not on the bottle label.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="relative grid min-h-[580px] place-items-center overflow-hidden rounded-[34px] border border-[#d5b69e] bg-[radial-gradient(circle_at_50%_38%,#fffaf5,#ead0ba_72%,#d7aa88)] shadow-[0_28px_90px_rgba(47,24,10,.14)]"
        >
          <div className="absolute inset-12 rounded-full border border-white/65" aria-hidden="true" />
          <div className="relative h-[520px] w-[350px] max-w-[78%] drop-shadow-[0_28px_24px_rgba(55,27,12,.24)]">
            <Image src="/hevon-bottle-brand-front-clean.png" alt="HEVON Protein Coffee front bottle design" fill sizes="(max-width: 1024px) 78vw, 350px" className="object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
