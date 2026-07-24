import clsx from "clsx";

const droplets = [
  [12, 18, 4], [22, 12, 3], [35, 20, 5], [48, 10, 3], [64, 18, 4], [78, 12, 3],
  [16, 30, 3], [29, 35, 4], [43, 28, 3], [57, 34, 5], [73, 29, 4], [86, 34, 3],
  [11, 46, 5], [25, 51, 3], [39, 44, 4], [54, 50, 3], [69, 46, 5], [83, 52, 4],
  [17, 65, 3], [31, 60, 4], [46, 68, 5], [61, 62, 3], [76, 68, 4], [88, 61, 3],
  [13, 79, 4], [27, 84, 3], [42, 77, 3], [58, 84, 4], [72, 78, 3], [84, 86, 5],
] as const;

type ProductBottleProps = {
  compact?: boolean;
  flavour?: string;
  liquidFrom?: string;
  liquidMid?: string;
  liquidTo?: string;
  labelAccent?: string;
  className?: string;
  dark?: boolean;
};

export default function ProductBottle({
  compact = false,
  flavour = "Coffee Latte",
  liquidFrom = "#e8c3a1",
  liquidMid = "#bd8056",
  liquidTo = "#6f3f25",
  labelAccent = "#111111",
  className,
  dark = false,
}: ProductBottleProps) {
  return (
    <div
      className={clsx(
        "relative isolate",
        compact ? "h-[330px] w-[146px]" : "h-[590px] w-[250px] sm:h-[650px] sm:w-[278px]",
        className,
      )}
    >
      <div className="absolute bottom-[1%] left-1/2 h-[5%] w-[72%] -translate-x-1/2 rounded-full bg-black/28 blur-xl" />

      {/* Neck glass */}
      <div className="absolute left-1/2 top-[3%] z-10 h-[16%] w-[46%] -translate-x-1/2 rounded-[20px_20px_10px_10px] border border-black/10 bg-gradient-to-r from-white/40 via-white/10 to-black/8 shadow-[inset_0_0_20px_rgba(255,255,255,.35)]" />

      {/* Cap */}
      <div className="absolute left-1/2 top-0 z-30 h-[11.5%] w-[58%] -translate-x-1/2 overflow-hidden rounded-[16px_16px_10px_10px] bg-[#151515] shadow-[0_12px_24px_rgba(0,0,0,.3)]">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#0d0d0d_0,#0d0d0d_5px,#2b2b2b_6px,#2b2b2b_9px)]" />
        <div className="absolute inset-x-0 top-0 h-[18%] bg-white/8" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
      </div>

      {/* Main PET bottle */}
      <div
        className="absolute inset-x-0 bottom-[5%] top-[9%] overflow-hidden rounded-b-[58px] border border-black/10 shadow-[0_48px_90px_rgba(67,34,18,.34),inset_0_0_32px_rgba(255,255,255,.22)]"
        style={{
          clipPath: "polygon(31% 0,69% 0,78% 3%,86% 10%,92% 22%,96% 100%,4% 100%,8% 22%,14% 10%,22% 3%)",
          background: `linear-gradient(180deg, rgba(255,255,255,.48) 0%, rgba(255,255,255,.16) 15%, ${liquidFrom}dd 19%, ${liquidMid}f2 62%, ${liquidTo} 100%)`,
        }}
      >
        {/* Liquid body texture */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 20%, rgba(255,255,255,.45) 0 1px, transparent 1.8px), radial-gradient(circle at 73% 36%, rgba(255,255,255,.32) 0 1px, transparent 1.8px), linear-gradient(90deg, rgba(255,255,255,.24), transparent 20%, transparent 75%, rgba(0,0,0,.08))",
            backgroundSize: "17px 19px, 23px 21px, 100% 100%",
          }}
        />

        {/* Strong glass reflections */}
        <div className="absolute left-[8%] top-[10%] h-[63%] w-[7%] rounded-full bg-gradient-to-b from-white/70 via-white/24 to-transparent blur-[1.5px]" />
        <div className="absolute left-[16%] top-[12%] h-[26%] w-[2.2%] rounded-full bg-white/55 blur-[1px]" />
        <div className="absolute right-[8%] top-[14%] h-[52%] w-[3%] rounded-full bg-white/18 blur-[1px]" />
        <div className="absolute inset-x-[5%] top-[3%] h-[16%] rounded-[50%] bg-gradient-to-b from-white/26 to-transparent blur-xl" />

        {/* Condensation */}
        {droplets.map(([left, top, size], index) => (
          <span
            key={index}
            className="absolute rounded-full border border-white/35 bg-white/28 shadow-[inset_-1px_-1px_2px_rgba(0,0,0,.12),0_1px_2px_rgba(255,255,255,.45)]"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size * 1.18 }}
          />
        ))}

        {/* Label */}
        <div className="absolute inset-x-[13%] top-[22%] bottom-[10%] rounded-[22px] border border-black/10 bg-[#f7f2ec]/95 shadow-[0_14px_30px_rgba(0,0,0,.17)] backdrop-blur-[2px]">
          <div className="absolute inset-x-0 top-[7%] text-center text-[#111]">
            <p className={clsx("font-black leading-none", compact ? "text-xl" : "text-3xl sm:text-4xl")}>18–20g</p>
            <p className={clsx("mt-1 font-black uppercase tracking-[.24em]", compact ? "text-[6px]" : "text-[8px]")}>Protein</p>
          </div>

          <div className="absolute left-1/2 top-[50%] flex -translate-x-1/2 -translate-y-1/2 rotate-90 items-center gap-1 whitespace-nowrap text-[#111]">
            <span className={clsx("font-black tracking-[.08em]", compact ? "text-[27px]" : "text-4xl sm:text-[44px]")}>HEV</span>
            <span className={clsx("relative shrink-0 rounded-full bg-[#ff6a00]", compact ? "h-7 w-7" : "h-10 w-10 sm:h-11 sm:w-11")}>
              <span className="absolute right-0 top-0 h-[58%] w-[58%] rounded-full bg-[#f7f2ec]" />
            </span>
            <span className={clsx("font-black", compact ? "text-[27px]" : "text-4xl sm:text-[44px]")}>N</span>
          </div>

          {!compact && (
            <p className={clsx("absolute inset-x-5 bottom-[15%] text-center text-[9px] leading-4", dark ? "text-black/70" : "text-black/65")}>
              The <strong>FUTURE</strong> of Everyday Drinks.
            </p>
          )}

          <div
            className={clsx(
              "absolute inset-x-[8%] bottom-[5%] rounded-full px-2 py-2 text-center font-black uppercase tracking-[.14em] text-white",
              compact ? "text-[7px]" : "text-[9px] sm:text-[10px]",
            )}
            style={{ background: labelAccent }}
          >
            {flavour}
          </div>
        </div>

        {/* Bottom volume */}
        {!compact && <p className="absolute inset-x-0 bottom-[3%] text-center text-[9px] font-bold text-[#111]">250 ml</p>}
      </div>
    </div>
  );
}
