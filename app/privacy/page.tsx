import Link from "next/link";

export const metadata = { title: "Privacy — HEVON" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fff8f2] px-6 py-20 text-[#111]">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-[#ff6a00]">← Back to HEVON</Link>
        <h1 className="mt-8 text-5xl font-black tracking-[-.05em]">Privacy</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-black/60">
          <p>HEVON collects the name and email address you voluntarily submit through the waitlist form. We use this information to send product-development and launch updates.</p>
          <p>The optional taste feedback form collects your rating and any product feedback, usage preferences, future ideas or city you choose to share. Optional adult nutrition-research consent allows HEVON to save your goals, dietary pattern and daily nutrition challenges to guide future products and services. A separate adult opt-in permits research invitation emails. Neither option is required to submit a taste rating. We record the consent choices, notice version and submission time. These answers are research preferences, not a medical assessment.</p>
          <p>You can withdraw research invitation consent or request removal of your submitted personal details by emailing hello@hevon.in. If you contact us about an anonymous submission, include enough information to identify it.</p>
          <p>We do not sell your personal information. Form submissions are processed through the hosting provider used for hevon.in and may be stored in its form-submission dashboard.</p>
          <p>You may request removal from the waitlist by emailing <a className="font-bold text-[#111]" href="mailto:hello@hevon.in">hello@hevon.in</a>.</p>
          <p>This policy may be updated as the website and business develop. Last updated: September 2026.</p>
        </div>
      </article>
    </main>
  );
}
