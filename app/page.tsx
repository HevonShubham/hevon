import FAQ from "@/components/FAQ";
import Flavours from "@/components/Flavours";
import Footer from "@/components/Footer";
import Ingredients from "@/components/Ingredients";
import HeroBottle from "@/components/HeroBottle";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Waitlist from "@/components/Waitlist";
import WhyHevon from "@/components/WhyHevon";

export default function Home() {
  return (
    <main className="min-h-[100svh] overflow-x-clip bg-[#fff8f2] text-[#111]">
      <Navbar />
      <section id="home" className="relative mx-auto flex min-h-[100svh] max-w-7xl scroll-mt-20 items-center px-5 pb-12 pt-28 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-[#ff6a00]/10 blur-3xl" /><div className="pointer-events-none absolute -right-24 bottom-20 h-[420px] w-[420px] rounded-full bg-[#ff6a00]/10 blur-3xl" />
        <div className="relative z-10 grid min-w-0 w-full items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal direction="left" className="py-8 lg:py-0"><p className="eyebrow">HEVON · A Higher You Every Day</p><h1 className="mt-6 text-[52px] font-black leading-[.91] tracking-[-.06em] sm:text-6xl md:text-7xl lg:text-[78px]">Protein Coffee.<br /><span className="text-[#ff6a00]">Fuel Your Day.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-black/58 sm:text-lg">HEVON Protein Coffee brings together real coffee character, <strong className="text-[#111]">22g protein</strong> and <strong className="text-[#111]">zero added sugar</strong> in one convenient bottle.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#waitlist" className="button-primary">Join Early Access</a><a href="#flavours" className="button-secondary">Explore Flavours</a></div><div className="mt-12 grid max-w-xl grid-cols-2 gap-5 sm:grid-cols-4">{[["22g","Protein"],["0g","Added Sugar"],["≤150","Target Calories"],["250ml","Ready to Drink"]].map(([value,label]) => <div key={label}><p className="text-2xl font-black">{value}</p><p className="mt-1 text-sm text-black/45">{label}</p></div>)}</div><p className="mt-5 max-w-xl text-xs leading-5 text-black/38">Targets shown are pre-launch formulation goals. Final nutrition values may change after product development and regulatory review.</p></Reveal>
          <Reveal direction="right" delay={0.12}><HeroBottle /></Reveal>
        </div>
      </section>
      <Flavours /><WhyHevon /><Ingredients />
      <FAQ /><Waitlist /><Footer />
    </main>
  );
}
