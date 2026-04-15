export default function Gallery() {
  const styles = [
    { name: 'Textured Crop', desc: 'Precision length with movement' },
    { name: 'Tight Fade', desc: 'Crisp lines from skin to length' },
    { name: 'Classic Taper', desc: 'Structured, professional, sharp' },
    { name: 'Beard Shape', desc: 'Clean definition and symmetry' },
    { name: 'Skin Fade', desc: 'High contrast, modern look' },
    { name: 'Line Work', desc: 'Detailed geometric precision' },
  ];

  return (
    <section className="bg-[#f7f7f7] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-black/35 text-xs tracking-[0.3em] uppercase mb-3">Our Work</p>
          <h2 className="text-black text-3xl md:text-4xl font-black tracking-tight">
            Styles We Master.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/10">
          {styles.map(({ name, desc }) => (
            <div
              key={name}
              className="bg-white p-7 md:p-9 flex flex-col gap-3 group cursor-pointer hover:bg-black hover:text-white transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-black/[0.06] group-hover:bg-white/15 flex items-center justify-center transition-colors duration-300">
                <div className="w-3.5 h-3.5 border-[1.5px] border-black/30 group-hover:border-white/40 rounded-full transition-colors duration-300" />
              </div>
              <div>
                <p className="text-black group-hover:text-white font-black text-sm transition-colors duration-300">
                  {name}
                </p>
                <p className="text-black/35 group-hover:text-white/45 text-xs mt-1 transition-colors duration-300">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-black/35 text-sm max-w-md mx-auto leading-relaxed">
            Every cut is tailored. Every style matched to your face shape, hair type, and preference.
          </p>
        </div>
      </div>
    </section>
  );
}
