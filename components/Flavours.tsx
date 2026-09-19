"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useState } from "react";
import Vote from "./Vote";

const futureFlavours = [
  { name: "Rich Chocolate", description: "Deep cocoa with a creamy finish.", colour: "#6f4738" },
  { name: "Vanilla Crème", description: "Soft vanilla and a clean finish.", colour: "#d9aa59" },
  { name: "Strawberry Bliss", description: "Bright, everyday strawberry.", colour: "#d6788a" },
  { name: "Mango Burst", description: "Tropical and refreshing mango.", colour: "#ed9b33" },
  { name: "Matcha Power", description: "Smooth matcha with an earthy note.", colour: "#789456" },
];

export default function Flavours() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="flavours" className="scroll-mt-20 bg-[#fff8f2] px-5 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Flavours</p>
        <h2 className="section-title mt-4">Coffee first. You choose what’s next.</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-black/60">
          Protein Coffee is our planned first drink. These five flavours are ideas for the future. Pick the one you would most like us to explore.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex min-h-[350px] items-center gap-4 overflow-hidden rounded-[28px] border border-[#e7cdbb] bg-[#f4e5d8] p-5 sm:gap-8 sm:p-8">
            <div className="relative h-[290px] w-[130px] shrink-0 sm:h-[330px] sm:w-[170px]">
              <Image src="/hevon-bottle-brand-front-clean.png" alt="HEVON Protein Coffee bottle front" fill sizes="(max-width: 640px) 130px, 170px" className="object-contain drop-shadow-xl" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-[.15em] text-[#9b4e22]">Planned first</span>
              <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Protein Coffee</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-black/60">Real coffee character in a convenient protein drink.</p>
              <p className="mt-4 text-xs leading-5 text-black/45">Bottle artwork shows the current design direction. Final label details are subject to product validation.</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="Choose a future flavour">
            {futureFlavours.map((flavour) => {
              const active = selected === flavour.name;
              return (
                <button key={flavour.name} type="button" onClick={() => setSelected(flavour.name)} aria-pressed={active}
                  className={`flex min-h-[110px] items-center gap-4 rounded-[22px] border bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#ff6a00] ${active ? "border-[#ff6a00] ring-2 ring-[#ff6a00]/20" : "border-black/10"}`}>
                  <span className="h-12 w-3 shrink-0 rounded-full" style={{ background: flavour.colour }} aria-hidden="true" />
                  <span className="min-w-0 flex-1"><strong className="block text-base">{flavour.name}</strong><span className="mt-1 block text-xs leading-5 text-black/50">{flavour.description}</span></span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border ${active ? "border-[#ff6a00] bg-[#ff6a00] text-white" : "border-black/15 text-transparent"}`} aria-hidden="true"><Check size={17} /></span>
                </button>
              );
            })}
          </div>
        </div>
        <Vote selected={selected} />
      </div>
    </section>
  );
}
