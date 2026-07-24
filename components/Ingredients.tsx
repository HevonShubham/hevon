import { Coffee, Droplets, FlaskConical, WheatOff } from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  {
    icon: Coffee,
    title: "Real coffee experience",
    copy: "Coffee Latte is being developed around real Arabica coffee character—not a generic coffee-flavoured shake.",
  },
  {
    icon: FlaskConical,
    title: "Protein that fits the drink",
    copy: "The formulation target is 18–20g protein while protecting texture, stability and everyday drinkability.",
  },
  {
    icon: WheatOff,
    title: "Zero added sugar",
    copy: "Sweetness and flavour will be balanced without adding sugar to the formulation target.",
  },
  {
    icon: Droplets,
    title: "Built for shelf-life",
    copy: "Packaging, processing and ingredient decisions will be validated with manufacturing and regulatory partners.",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="scroll-mt-20 bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Formulation Philosophy</p>
              <h2 className="section-title mt-5">Built carefully.<br />Explained honestly.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-black/58 lg:justify-self-end">
              HEVON is still in product development. These are the principles guiding the work—not final label claims. Final ingredients and nutrition will only be published after formulation, testing and regulatory review.
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
