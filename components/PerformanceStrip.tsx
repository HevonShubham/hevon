import { Dumbbell, Leaf, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  { icon: Dumbbell, title: "High Protein", text: "25g per bottle" },
  { icon: ShieldCheck, title: "Zero Added Sugar", text: "No sugar. No compromise." },
  { icon: Leaf, title: "Real Ingredients", text: "Clean and transparent" },
  { icon: Zap, title: "Everyday Performance", text: "For work, training and life" },
];

export default function PerformanceStrip() {
  return (
    <section className="border-y border-white/10 bg-[#111] px-5 py-5 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }, index) => (
          <div
            key={title}
            className={`group flex items-center gap-3.5 py-4 ${index < benefits.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-5" : ""}`}
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ff6a00]/35 bg-[#ff6a00]/10 transition group-hover:scale-105">
              <Icon size={20} strokeWidth={1.7} className="text-[#ff6a00]" />
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.16em]">{title}</p>
              <p className="mt-1 text-xs text-white/50">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
