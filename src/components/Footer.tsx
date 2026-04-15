export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="text-white font-black tracking-[0.25em] text-[13px] uppercase mb-3">TOPBLENDZ</p>
            <p className="text-white/35 text-xs leading-relaxed max-w-xs">
              A modern barbershop committed to clean cuts and simple booking.
            </p>
          </div>

          <div>
            <p className="text-white/35 text-xs tracking-[0.25em] uppercase mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Book Now', id: 'booking' },
                { label: 'About', id: 'about' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-white/45 hover:text-white text-sm text-left transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/35 text-xs tracking-[0.25em] uppercase mb-4">Contact</p>
            <div className="flex flex-col gap-2">
              <p className="text-white/45 text-sm">123 Main Street, Brooklyn NY 11201</p>
              <p className="text-white/45 text-sm">+1 (718) 555-0147</p>
              <p className="text-white/45 text-sm">info@topblendz.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} TOPBLENDZ. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Engineered by Select Build.
          </p>
        </div>
      </div>
    </footer>
  );
}
