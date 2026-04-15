interface HeroProps {
  onBook: () => void;
}

export default function Hero({ onBook }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex flex-col justify-center pt-14"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase mb-5">
            Est. 2020 — Brooklyn, NY
          </p>

          <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
            Sharp Cuts.<br />
            <span className="italic font-extralight">Simple</span> Booking.
          </h1>

          <p className="text-black/45 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Walk in or book in seconds. No hassle, no waiting — just clean work done right.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onBook}
              className="bg-black text-white font-semibold text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-black/85 transition-colors"
            >
              Book Now
            </button>
            <button
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-black/35 hover:text-black/60 text-xs tracking-widest uppercase font-medium transition-colors"
            >
              See Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
