import Link from "next/link";

export const metadata = { title: "Terms — HEVON" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fff8f2] px-6 py-20 text-[#111]">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-[#ff6a00]">← Back to HEVON</Link>
        <h1 className="mt-8 text-5xl font-black tracking-[-.05em]">Terms</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-black/60">
          <p>This website presents HEVON as a pre-launch brand. Product designs, flavours, nutrition values, availability dates and other details may change during development.</p>
          <p>Nothing on this website is medical, nutritional or investment advice. Final product claims will be based on completed formulation, testing and applicable regulatory approval.</p>
          <p>All HEVON names, graphics and original website content are owned by or used for the HEVON project and may not be reproduced for commercial use without permission.</p>
          <p>Questions may be sent to <a className="font-bold text-[#111]" href="mailto:hello@hevon.in">hello@hevon.in</a>. Last updated: July 2026.</p>
        </div>
      </article>
    </main>
  );
}
