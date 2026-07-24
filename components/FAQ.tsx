"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const items = [
  ["What is HEVON?", "HEVON is a planned ready-to-drink high-protein beverage brand. Coffee Latte is the first product currently being explored for launch in India."],
  ["How much protein will it contain?", "The current formulation target is 18–20g protein per 250ml bottle. Final values will be confirmed only after product development, stability testing and regulatory review."],
  ["Will every flavour contain caffeine?", "No. Caffeine is intended only for coffee-based flavours. Future non-coffee concepts would remain protein drinks without added caffeine."],
  ["Is HEVON available to buy now?", "Not yet. HEVON is in the pre-launch product-development stage. Joining the waitlist is the best way to receive verified launch updates."],
  ["Are the future flavours confirmed?", "No. Coffee Latte is the planned launch flavour. Other flavours shown are concept directions and may change based on formulation feasibility and community feedback."],
  ["Where will HEVON launch?", "The initial focus is India, with channel and city decisions to be finalised after manufacturing, regulatory and distribution planning."],
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-5">A few useful answers.</h2>
        </div>

        <div className="mt-10 space-y-3">
          {items.map(([question, answer], index) => {
            const isOpen = active === index;
            return (
              <article key={question} className="overflow-hidden rounded-2xl border border-black/8 bg-[#fff8f2]">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-bold sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span>{question}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#ff6a00]">
                    <Plus size={17} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="max-w-3xl px-5 pb-5 text-sm leading-6 text-black/55 sm:px-6 sm:pb-6">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
