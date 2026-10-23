"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const items = [
  ["What is HEVON?", "A little more for your everyday. HEVON is developing a ready-to-drink protein coffee in a convenient 250 ml bottle."],
  ["When can I take my first sip?", "The first release is still taking shape, and a launch date hasn’t been confirmed. Join early access for tasting opportunities and the launch reveal."],
  ["What’s inside?", "Our target is approximately 21 g protein per 250 ml. We’re refining taste and texture; final ingredients and nutrition will be revealed before launch."],
  ["Which flavour comes first?", "Protein Coffee is our first planned release. What follows? You can help decide—vote for the flavour you’d like us to explore next."],
  ["Where will HEVON be available?", "We’re preparing for India. Tell us your city when you join early access to help shape our first launch locations."],
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title mt-5">A little more to know.</h2>
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
