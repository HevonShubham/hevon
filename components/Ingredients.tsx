import { Coffee, Droplets, FlaskConical, WheatOff } from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  {
    icon: Coffee,
    title: "Real coffee experience",
    copy: "Protein Coffee is being developed around a coffee-first drinking experience, with taste and texture evaluated alongside protein content.",
  },
  {
    icon: FlaskConical,
    title: "Protein that fits the drink",
    copy: "Soy and pea protein isolate prototypes target approximately 21 g protein per 250 ml. A whey protein concentrate version is planned for comparison.",
  },
  {
    icon: WheatOff,
    title: "Sweetness under review",
    copy: "No added sugar remains a development goal. Final sweetness, ingredients and nutrition will be confirmed after formulation and testing.",
  },
  {
    icon: Droplets,
    title: "Built for shelf-life",
    copy: "Retort trials are underway. A six-month shelf life is a development target only; any declared shelf life will require stability validation.",
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
