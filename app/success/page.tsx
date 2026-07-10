import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#fff8f2] px-6 text-center text-[#111]">
      <div className="max-w-xl">
        <p className="eyebrow">You are on the list</p>
        <h1 className="mt-5 text-5xl font-black tracking-[-.05em]">Welcome to HEVON.</h1>
        <p className="mt-5 text-black/55">Thanks for joining. We will share meaningful product and launch updates—not noise.</p>
        <Link href="/" className="button-primary mt-8">Back to homepage</Link>
      </div>
    </main>
  );
}
