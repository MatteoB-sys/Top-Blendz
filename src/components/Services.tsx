import { Scissors, Zap, Package } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Haircut',
    price: '$30',
    duration: '30 min',
    description: 'Precision cut tailored to your style. Fade, taper, crop — done right.',
  },
  {
    icon: Zap,
    name: 'Beard Trim',
    price: '$20',
    duration: '20 min',
    description: 'Shape, define, and clean up your beard with surgical precision.',
  },
  {
    icon: Package,
    name: 'Full Package',
    price: '$45',
    duration: '50 min',
    description: 'Haircut + beard trim. The complete look, start to finish.',
    highlight: true,
  },
];

interface ServicesProps {
  onBook: () => void;
}

export default function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase mb-3">What We Do</p>
          <h2 className="text-black text-4xl md:text-5xl font-black tracking-tight">Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-black/10">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className={`p-8 md:p-10 flex flex-col gap-5 transition-colors ${
                  s.highlight ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className={s.highlight ? 'text-white/50' : 'text-black/35'}
                  />
                  {s.highlight && (
                    <span className="text-[10px] tracking-widest uppercase font-semibold border border-white/25 px-2 py-0.5 text-white/60">
                      Popular
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`text-xl font-black tracking-tight mb-1.5 ${s.highlight ? 'text-white' : 'text-black'}`}>
                    {s.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${s.highlight ? 'text-white/50' : 'text-black/45'}`}>
                    {s.description}
                  </p>
                </div>

                <div className="flex items-end justify-between mt-auto pt-5 border-t border-current/10">
                  <div>
                    <p className={`text-xl font-black ${s.highlight ? 'text-white' : 'text-black'}`}>
                      {s.price}
                    </p>
                    <p className={`text-xs tracking-widest uppercase mt-1 ${s.highlight ? 'text-white/35' : 'text-black/30'}`}>
                      {s.duration}
                    </p>
                  </div>
                  <button
                    onClick={onBook}
                    className={`text-xs tracking-widest uppercase font-semibold px-5 py-2 transition-colors ${
                      s.highlight
                        ? 'bg-white text-black hover:bg-white/90'
                        : 'border border-black/15 text-black/70 hover:border-black hover:text-black'
                    }`}
                  >
                    Book
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
