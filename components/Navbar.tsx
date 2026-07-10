"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Flavours", "#flavours"],
  ["Why HEVON", "#why-hevon"],
  ["Vote", "#vote"],
  ["Ingredients", "#ingredients"],
  ["Compare", "#comparison"],
  ["Story", "#story"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-black/8 bg-[#fff8f2]/94 shadow-[0_12px_32px_rgba(0,0,0,.06)] backdrop-blur-xl" : "border-black/5 bg-[#fff8f2]/88 backdrop-blur-lg"}`}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-10 ${scrolled ? "h-[68px]" : "h-[76px]"}`}>
        <a href="#home" aria-label="HEVON home" className="shrink-0">
          <Image src="/logo/hevon-wordmark.svg" alt="HEVON" width={146} height={36} priority className="h-auto w-[118px] sm:w-[132px]" />
        </a>

        <nav className="hidden items-center gap-8 text-[13px] font-semibold md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="relative py-2 transition hover:text-[#ff6a00] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#ff6a00] after:transition-transform hover:after:scale-x-100">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#waitlist" className="rounded-full bg-[#ff6a00] px-4 py-2.5 text-xs font-bold text-white shadow-[0_12px_30px_rgba(255,106,0,.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(255,106,0,.28)] sm:px-5 sm:text-sm">
            Get Early Access
          </a>
          <button type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden">
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-[#fff8f2]/98 px-5 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold hover:bg-black/5">
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
