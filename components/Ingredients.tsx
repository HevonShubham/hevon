import { Coffee, Droplets, FlaskConical, WheatOff } from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  {
    icon: Coffee,
    title: "Taste worth the wait",
    copy: "We’re refining flavour and texture together. The first sip has to earn the next.",
  },
  {
    icon: FlaskConical,
    title: "Protein that fits the drink",
    copy: "Approximately 21 g per 250 ml is the target. Final nutrition will be confirmed before launch.",
  },
  {
    icon: WheatOff,
    title: "Finding the sweet spot",
    copy: "Every detail has a part to play. We’re working on a balanced taste you’ll want to return to.",
  },
  {
    icon: Droplets,
    title: "Made for your day",
    copy: "One ready-to-drink bottle. Designed for busy mornings, breaks and the plans in between.",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="scroll-mt-20 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">The HEVON Way</p>
              <h2 className="section-title mt-5">More than a reveal.<br />Something to look forward to.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-black/58 lg:justify-self-end">
              There’s more to HEVON than the first look. We’re bringing taste, protein and convenience together—and sharing the details as they’re ready.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map(({ icon: Icon, title, copy }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <article className="h-full rounded-[26px] border border-black/8 bg-[#fff8f2] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,0,0,.07)]">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ff6a00]/10 text-[#ff6a00]">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-xl font-black tracking-[-.035em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
