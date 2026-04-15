export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-black/35 text-xs tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="text-black text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Built on skill.<br />
              <span className="text-black/25 italic font-light">Kept</span> by consistency.
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-black/45 text-sm leading-relaxed">
                TOPBLENDZ is a modern barbershop focused on one thing: delivering a clean, precise cut every single visit. No gimmicks. No unnecessary extras. Just skilled barbers who take their craft seriously.
              </p>
              <p className="text-black/45 text-sm leading-relaxed">
                We work with every hair type and every style — from tight fades to textured crops. Whatever the look, we bring the same level of focus and attention to detail.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-black/10">
            {[
              { value: 'Precision', label: 'Every cut is measured and intentional.' },
              { value: 'Consistency', label: 'Same quality, every visit, every barber.' },
              { value: 'Speed', label: 'In and out — no wasted time.' },
              { value: 'Respect', label: 'Your time and preferences are always honored.' },
            ].map(({ value, label }) => (
              <div key={value} className="bg-white p-5">
                <p className="text-black font-black text-sm tracking-tight mb-1.5">{value}</p>
                <p className="text-black/35 text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
