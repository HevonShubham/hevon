import { Coffee, Droplets, FlaskConical, WheatOff } from "lucide-react";
import Reveal from "@/components/Reveal";

const principles = [
  {
    icon: Coffee,
    title: "Real coffee experience",
    copy: "That first-sip feeling is our inspiration. We’re crafting coffee character you’ll want to come back to.",
  },
  {
    icon: FlaskConical,
    title: "Protein that fits the drink",
    copy: "Aiming for approximately 21 g per bottle, with coffee enjoyment at the heart of every decision.",
  },
  {
    icon: WheatOff,
    title: "Finding the sweet spot",
    copy: "We’re fine-tuning sweetness and balance so the coffee gets its moment.",
  },
  {
    icon: Droplets,
    title: "Made for your day",
    copy: "Morning plans. Afternoon pauses. A convenient bottle designed to fit the rhythm of your day.",
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
              <h2 className="section-title mt-5">Coffee worth<br />looking forward to.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-black/58 lg:justify-self-end">
              We’re taking our time with your next coffee ritual—bringing taste, texture and useful nutrition together. Final product details will be shared before launch.
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
