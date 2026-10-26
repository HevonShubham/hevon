import Link from "next/link";

export const metadata = { title: "Privacy — HEVON" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fff8f2] px-6 py-20 text-[#111]">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-[#ff6a00]">← Back to HEVON</Link>
        <h1 className="mt-8 text-5xl font-black tracking-[-.05em]">Privacy</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-black/60">
          <p>HEVON collects the name, email address and city you voluntarily submit through the waitlist form. We use this information to plan availability and send consented tasting and launch updates.</p>
          <p>Your launch cart is stored in this browser using local storage. It saves your selected quantity without placing an order or reserving stock. You can clear it using the remove button in the cart.</p>
          <p>The protein calculator runs within the page. Your weight and estimate are not transmitted to HEVON or saved to your device. It is a general healthy-adult educational reference, not a diagnosis or personalised nutrition plan.</p>
          <p>The awareness quiz works without providing personal information. If you choose to share answers, HEVON receives your selected answers and quiz score for awareness research. No name or email is requested. Our hosting provider may process normal request metadata.</p>
          <p>The optional customer-preference form collects name, email, city and any routine, flavour or purchase priorities you choose to share. It requires adult research consent. Tasting and launch emails require a separate optional checkbox; submitting research preferences does not automatically subscribe you. General ideas may be submitted without contact information. Please do not include medical or sensitive personal information in free-text answers.</p>
          <p>The optional taste feedback form collects your rating and any product feedback, usage preferences, future ideas or city you choose to share. Optional adult nutrition-research consent allows HEVON to save your goals, dietary pattern and daily nutrition challenges to guide future products and services. A separate adult opt-in permits research invitation emails. Neither option is required to submit a taste rating. We record the consent choices, notice version and submission time. These answers are research preferences, not a medical assessment.</p>
          <p>You can withdraw research invitation consent or request removal of your submitted personal details by emailing hello@hevon.in. If you contact us about an anonymous submission, include enough information to identify it.</p>
          <p>The installable HEVON app stores its offline screen and app icons on your device. Waitlist submissions and checkout responses are not cached for offline use. An internet connection is required to submit details or place an order.</p>
          <p>We do not sell your personal information. Form submissions are processed through the hosting provider used for hevon.in and may be stored in its form-submission dashboard.</p>
          <p>You may request removal from the waitlist by emailing <a className="font-bold text-[#111]" href="mailto:hello@hevon.in">hello@hevon.in</a>.</p>
          <p>This policy may be updated as the website and business develop. Last updated: October 2026.</p>
        </div>
      </article>
    </main>
  );
}
