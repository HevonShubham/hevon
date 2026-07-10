import { BriefcaseBusiness, Dumbbell, GraduationCap } from "lucide-react";

const audiences = [
  { icon: BriefcaseBusiness, title: "Busy professionals", copy: "A practical drink for packed schedules and long workdays." },
  { icon: Dumbbell, title: "Active lifestyles", copy: "Protein and convenience for training, travel and recovery." },
  { icon: GraduationCap, title: "Students & creators", copy: "A simple option for people who need nutrition on the move." },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="eyebrow">Made for Real Life</p>
          <h2 className="section-title mt-5">One drink. Many routines.</h2>
          <p className="mt-5 max-w-2xl text-black/55">HEVON is not being built for one type of person. It is being built for modern days that rarely slow down.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audiences.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-[26px] border border-black/8 bg-[#fff8f2] p-7">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#ff6a00]/10 text-[#ff6a00]"><Icon size={22} /></div>
              <h3 className="mt-6 text-2xl font-black tracking-[-.03em]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/55">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
