import { Check, Minus } from "lucide-react";

const rows = [
  ["Protein", "25g", "2–6g"],
  ["Added sugar", "0g", "15–30g"],
  ["Calories", "Target ≤150", "Often 180–300"],
  ["Ingredients", "Clean & transparent", "Often long or unclear"],
  ["Everyday utility", "Nutrition + convenience", "Mostly refreshment"],
];

export default function Comparison() {
  return (
    <section id="comparison" className="scroll-mt-20 bg-[#fff8f2] px-5 py-20 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="eyebrow">See the Difference</p>
          <h2 className="section-title mt-5">HEVON vs regular drinks.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-black/55">A simple look at the nutritional direction HEVON is designed around.</p>
        </div>
        <div className="mt-12 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_70px_rgba(0,0,0,.07)]">
          <div className="grid grid-cols-[1.1fr_.9fr_.9fr] bg-[#111] px-4 py-5 text-xs font-black uppercase tracking-[.12em] text-white sm:px-8 sm:text-sm">
            <div>Nutrition</div><div className="text-[#ff6a00]">HEVON</div><div>Regular drinks</div>
          </div>
          {rows.map(([label, hevon, regular], index) => (
            <div key={label} className={`grid grid-cols-[1.1fr_.9fr_.9fr] items-center gap-2 px-4 py-5 text-xs sm:px-8 sm:text-sm ${index ? "border-t border-black/8" : ""}`}>
              <div className="font-bold">{label}</div>
              <div className="flex items-center gap-2 font-bold text-[#e85f00]"><Check size={15} />{hevon}</div>
              <div className="flex items-center gap-2 text-black/48"><Minus size={15} />{regular}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-black/38">Comparison values are indicative category examples. Final HEVON values will be confirmed after formulation and regulatory review.</p>
      </div>
    </section>
  );
}
