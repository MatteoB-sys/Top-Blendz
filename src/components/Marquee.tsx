const items = [
  'PRECISION CUTS',
  'EST. 2020',
  'BROOKLYN, NY',
  'BOOK IN 60 SECONDS',
  'WALK-INS WELCOME',
  '4.9 STAR RATED',
  'OPEN 6 DAYS',
  'FADE · TAPER · CROP',
];

const SEP = <span className="mx-6 text-white/30">·</span>;

export default function Marquee() {
  const track = items.flatMap((item, i) => [
    <span key={`a-${i}`} className="whitespace-nowrap">{item}</span>,
    SEP,
  ]);

  return (
    <div className="bg-black border-y border-white/10 overflow-hidden py-3">
      <div className="flex animate-marquee w-max">
        {/* duplicated so the loop is seamless */}
        <div className="flex items-center text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium">
          {track}
        </div>
        <div className="flex items-center text-[10px] tracking-[0.3em] uppercase text-white/60 font-medium" aria-hidden>
          {track}
        </div>
      </div>
    </div>
  );
}
