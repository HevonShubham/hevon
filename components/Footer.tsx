import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#111] px-5 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-9 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image src="/logo/hevon-wordmark-dark.svg" alt="HEVON" width={146} height={36} className="h-auto w-[132px]" />
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/45">The Future of Everyday Drinks. Currently in pre-launch product development in India.</p>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-2">
            <div className="space-y-3 text-white/60">
              <p className="text-xs font-black uppercase tracking-[.15em] text-white">Contact</p>
              <a href="mailto:hello@hevon.in" className="flex items-center gap-2 transition hover:text-white"><Mail size={16} />hello@hevon.in</a>
              <a href="https://instagram.com/hevonofficial" target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-white"><FaInstagram size={16} />@hevonofficial</a>
            </div>
            <div className="space-y-3 text-white/60">
              <p className="text-xs font-black uppercase tracking-[.15em] text-white">Legal</p>
              <Link href="/privacy" className="block transition hover:text-white">Privacy</Link>
              <Link href="/terms" className="block transition hover:text-white">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HEVON. All rights reserved.</p>
          <p>Nutrition figures shown are pre-launch targets, not final product claims.</p>
        </div>
      </div>
    </footer>
  );
}
