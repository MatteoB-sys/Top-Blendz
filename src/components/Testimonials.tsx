import { Star } from 'lucide-react';

const testimonials = [
  {
    initials: 'MJ',
    name: 'Marcus Johnson',
    role: 'Regular',
    text: 'Been coming for 3 years. Consistent cuts, fair prices, no games. That\'s all you need.',
    rating: 5,
  },
  {
    initials: 'AC',
    name: 'Anthony Chen',
    role: 'Weekly Client',
    text: 'The booking system is actually intuitive. Booked, showed up, got a sharp fade. Done in 30 min.',
    rating: 5,
  },
  {
    initials: 'DE',
    name: 'David Ellis',
    role: 'New Client',
    text: 'First time walk-in and I was impressed. Professional barbers who actually listen.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-3">What Clients Say</p>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">Proven Results.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ initials, name, role, text, rating }) => (
            <div key={name} className="border border-white/10 p-7 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-white text-white" />
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed flex-1">"{text}"</p>

              <div className="flex items-center gap-3 pt-3 border-t border-white/8">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] font-bold">
                  {initials}
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">{name}</p>
                  <p className="text-white/35 text-[11px]">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
