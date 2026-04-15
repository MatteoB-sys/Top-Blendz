import { useState } from 'react';
import { X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10" aria-label="Main">
      <div className="max-w-6xl mx-auto px-6 h-14 relative flex items-center">
        <div className="flex flex-1 items-center justify-start min-w-0">
          <span className="w-10 shrink-0" aria-hidden />
        </div>

        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black tracking-[0.25em] text-[13px] uppercase whitespace-nowrap"
        >
          TOPBLENDZ
        </button>

        <div className="flex flex-1 items-center justify-end min-w-0">
          <button
            type="button"
            className="text-white p-2 -mr-2 inline-flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.5} />
            ) : (
              <span className="flex flex-col gap-[5px] w-[20px]" aria-hidden>
                <span className="h-[1.5px] w-full bg-white rounded-full" />
                <span className="h-[1.5px] w-[60%] bg-white rounded-full" />
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="site-menu"
          className="border-t border-white/10 bg-black max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4"
        >
          <button
            type="button"
            onClick={() => scrollTo('services')}
            className="text-white/50 hover:text-white text-xs tracking-widest uppercase text-left transition-colors font-medium"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => scrollTo('team')}
            className="text-white/50 hover:text-white text-xs tracking-widest uppercase text-left transition-colors font-medium"
          >
            Team
          </button>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="text-white/50 hover:text-white text-xs tracking-widest uppercase text-left transition-colors font-medium"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollTo('booking')}
            className="text-black bg-white hover:bg-white/90 text-xs tracking-widest uppercase font-semibold px-6 py-2.5 w-full sm:w-auto sm:self-start transition-colors mt-1"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
