import { BriefcaseBusiness, Dumbbell, MessageCircleMore, Plane } from "lucide-react";
import Reveal from "@/components/Reveal";

const themes = [
  {
    icon: BriefcaseBusiness,
    title: "The workday gap",
    copy: "People want something more useful than another sugary café drink during busy days.",
  },
  {
    icon: Dumbbell,
    title: "Protein without the ritual",
    copy: "Convenience matters when mixing, cleaning and carrying a shaker is not practical.",
  },
  {
    icon: Plane,
    title: "Nutrition on the move",
    copy: "Travel, commuting and unpredictable schedules create demand for a ready-to-drink option.",
  },
];

export default function Community() {
  return (
    <section className="bg-[#fff8f2] px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Built Around Real Routines</p>
              <h2 className="section-title mt-5">What early conversations keep highlighting.</h2>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-bold text-black/55">
              <MessageCircleMore size={15} className="text-[#ff6a00]" />
              Discovery themes—not customer testimonials
            </div>
          </div>
        </Reveal>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {themes.map(({ icon: Icon, title, copy }, index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="h-full rounded-[28px] border border-black/8 bg-white p-7 shadow-[0_14px_42px_rgba(0,0,0,.04)]">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#111] text-[#ff8b3d]">
                  <Icon size={22} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-[-.04em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
