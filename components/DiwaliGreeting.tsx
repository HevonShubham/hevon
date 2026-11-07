import Image from "next/image";

export default function DiwaliGreeting() {
  return (
    <section aria-labelledby="diwali-heading" className="px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#2a1007] text-white shadow-[0_30px_80px_rgba(63,24,6,.18)] lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:px-16">
          <p className="eyebrow text-[#ff9a3d]">A festive note from HEVON</p>
          <h2 id="diwali-heading" className="mt-5 text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-5xl">
            May every day ahead shine brighter.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
            This Diwali, we celebrate new beginnings, thoughtful choices and the energy to keep moving forward. From the food innovators at HEVON, wishing you and your loved ones health, happiness and brighter days.
          </p>
          <p className="mt-8 font-black tracking-[.16em] text-[#ff8a24]">HAPPY DIWALI</p>
        </div>

        <div className="relative min-h-[430px] lg:min-h-[620px]">
          <Image
            src="/campaign/hevon-happy-diwali-2026.png"
            alt="HEVON wishes you a Happy Diwali with brighter days and a stronger you"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
