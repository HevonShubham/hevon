export default function WhyHevon() {
  const reasons = [
    { title: "Coffee comes first", copy: "We are developing it around a coffee taste people can enjoy every day." },
    { title: "Nutrition with purpose", copy: "Protein and other nutrition targets are being tested alongside taste and texture." },
    { title: "Made for real routines", copy: "A convenient ready-to-drink format for busy mornings and active days." },
  ];

  return (
    <section id="why-hevon" className="scroll-mt-20 bg-[#17120f] px-5 py-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">Why HEVON</p>
        <h2 className="section-title mt-4 max-w-3xl text-white">Good coffee. Useful nutrition. One easy routine.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">HEVON Protein Coffee is in development. We are working to bring coffee taste and practical nutrition together in one bottle.</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-[24px] border border-white/12 bg-white/[.055] p-6">
              <h3 className="text-lg font-black">{reason.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{reason.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
