import { Award } from 'lucide-react';

const team = [
  {
    initials: 'RJ',
    name: 'Raj Johnson',
    title: 'Lead Barber',
    bio: 'Master of fades and precision work. 8+ years in the trade.',
    specialty: 'Textured Styles',
  },
  {
    initials: 'CB',
    name: 'Carlos Beltran',
    title: 'Senior Barber',
    bio: 'Beard specialist with an eye for detail. Expert line work.',
    specialty: 'Beard Sculpting',
  },
  {
    initials: 'KM',
    name: 'Kevin Moore',
    title: 'Barber',
    bio: 'Focused on classic cuts and modern adaptations. Quick and precise.',
    specialty: 'Classic Tapers',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#111111] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-3">Meet The Crew</p>
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight">
            Master Barbers.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map(({ initials, name, title, bio, specialty }) => (
            <div key={name} className="border border-white/10 p-7 md:p-9">
              <div className="w-12 h-12 rounded-full bg-white/[0.06] flex items-center justify-center mb-5">
                <p className="text-white font-black text-sm">{initials}</p>
              </div>

              <h3 className="text-white font-black text-sm mb-1">{name}</h3>
              <p className="text-white/35 text-xs tracking-widest uppercase mb-4">{title}</p>
              <p className="text-white/45 text-sm leading-relaxed mb-5">{bio}</p>

              <div className="flex items-center gap-2 pt-4 border-t border-white/8">
                <Award size={12} className="text-white/25" />
                <span className="text-white/35 text-xs">{specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
