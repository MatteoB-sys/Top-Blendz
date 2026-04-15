import { useState } from 'react';
import { Calendar, User, ChevronRight, CheckCircle, Phone } from 'lucide-react';

const services = ['Haircut — $30', 'Beard Trim — $20', 'Full Package — $45'];
const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

type Step = 'service' | 'datetime' | 'info' | 'confirm';

const stepMeta: { id: Step; label: string }[] = [
  { id: 'service',  label: 'Service'  },
  { id: 'datetime', label: 'Date'     },
  { id: 'info',     label: 'Details'  },
  { id: 'confirm',  label: 'Confirm'  },
];

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
}

function InfoSidebar() {
  return (
    <div className="flex flex-col gap-5">
      {/* Google Maps */}
      <div className="border border-white/10 overflow-hidden">
        <iframe
          title="Shop location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.069834887!2d-73.9577!3d40.6501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="180"
          style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(1) contrast(0.85)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="p-5 border-t border-white/10">
          <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-3">Location</p>
          <p className="text-white text-sm font-medium">123 Main Street</p>
          <p className="text-white/35 text-sm">Brooklyn, NY 11201</p>
          <p className="text-white/35 text-sm mt-3">info@topblendz.com</p>
          <p className="text-white/35 text-sm">+1 (718) 555-0147</p>
        </div>
      </div>

      <div className="border border-white/10 p-5">
        <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-4">Hours</p>
        <div className="flex flex-col gap-2.5">
          {[
            { day: 'Monday — Friday', hours: '9:00 AM – 6:00 PM' },
            { day: 'Saturday',        hours: '9:00 AM – 4:00 PM' },
            { day: 'Sunday',          hours: 'Closed'            },
          ].map(({ day, hours }) => (
            <div key={day} className="flex justify-between">
              <span className="text-white/35 text-sm">{day}</span>
              <span className={`text-sm font-medium ${hours === 'Closed' ? 'text-white/20' : 'text-white'}`}>
                {hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-white/10 p-5 bg-white/[0.02]">
        <p className="text-white text-sm font-semibold mb-1.5">Walk-ins welcome.</p>
        <p className="text-white/35 text-sm leading-relaxed">
          No appointment? No problem. Subject to availability during operating hours.
        </p>
      </div>
    </div>
  );
}

export default function Booking() {
  const [step, setStep] = useState<Step>('service');
  const [data, setData] = useState<BookingData>({ service: '', date: '', time: '', name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const stepIndex: Record<Step, number> = { service: 0, datetime: 1, info: 2, confirm: 3 };

  const canAdvance = (): boolean => {
    if (step === 'service')  return !!data.service;
    if (step === 'datetime') return !!data.date && !!data.time;
    if (step === 'info')     return !!data.name.trim() && !!data.phone.trim();
    return true;
  };

  const advance = () => {
    const idx = stepIndex[step];
    if (idx < stepMeta.length - 1) setStep(stepMeta[idx + 1].id);
    else handleSubmit();
  };

  const back = () => {
    const idx = stepIndex[step];
    if (idx > 0) setStep(stepMeta[idx - 1].id);
  };

  const handleSubmit = () => setSubmitted(true);

  const reset = () => {
    setData({ service: '', date: '', time: '', name: '', phone: '' });
    setStep('service');
    setSubmitted(false);
  };

  return (
    <section id="booking" className="bg-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-3">Get Started</p>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight">Book Your Slot</h2>
          <p className="text-white/35 text-sm mt-3 max-w-sm leading-relaxed">
            Select your service, pick a time, and you're done. Book in under 60 seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Booking form */}
          <div className="border border-white/10 p-7 md:p-9">
            {submitted ? (
              <div className="flex flex-col items-start gap-5 py-6">
                <CheckCircle size={36} strokeWidth={1.5} className="text-white" />
                <div>
                  <h3 className="text-white text-xl font-black mb-2">You're booked.</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    We've received your booking for <span className="text-white">{data.service}</span> on{' '}
                    <span className="text-white">{data.date}</span> at <span className="text-white">{data.time}</span>.
                    We'll text you to confirm within the hour.
                  </p>
                </div>
                <button
                  onClick={reset}
                  className="text-xs tracking-widest uppercase font-semibold text-white/40 hover:text-white transition-colors border border-white/15 hover:border-white/40 px-5 py-2"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <>
                {/* Stepper with labels */}
                <div className="flex items-start gap-0 mb-8">
                  {stepMeta.map(({ id: s, label }, i) => (
                    <div key={s} className="flex items-start">
                      <div className="flex flex-col items-center gap-1">
                        <div
                          className={`w-6 h-6 flex items-center justify-center text-[11px] font-bold transition-colors ${
                            i <= stepIndex[step]
                              ? 'bg-white text-black'
                              : 'bg-white/10 text-white/25'
                          }`}
                        >
                          {i + 1}
                        </div>
                        <span className={`text-[9px] tracking-widest uppercase transition-colors ${
                          i <= stepIndex[step] ? 'text-white/50' : 'text-white/20'
                        }`}>
                          {label}
                        </span>
                      </div>
                      {i < stepMeta.length - 1 && (
                        <div className={`h-px w-8 md:w-12 mt-3 mx-1 ${i < stepIndex[step] ? 'bg-white' : 'bg-white/10'}`} />
                      )}
                    </div>
                  ))}
                </div>

                {step === 'service' && (
                  <div>
                    <p className="text-white/35 text-xs tracking-widest uppercase mb-4">Select Service</p>
                    <div className="flex flex-col gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          onClick={() => setData({ ...data, service: s })}
                          className={`text-left px-5 py-3.5 text-sm font-medium transition-colors border ${
                            data.service === s
                              ? 'bg-white text-black border-white'
                              : 'text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 'datetime' && (
                  <div>
                    <p className="text-white/35 text-xs tracking-widest uppercase mb-4">Pick Date & Time</p>
                    <div className="mb-5">
                      <label className="text-white/35 text-xs tracking-widest uppercase block mb-2">Date</label>
                      <div className="flex items-center gap-3 border border-white/10 px-4 py-3">
                        <Calendar size={14} className="text-white/25" />
                        <input
                          type="date"
                          min={today}
                          value={data.date}
                          onChange={(e) => setData({ ...data, date: e.target.value })}
                          className="bg-transparent text-white text-sm flex-1 outline-none [color-scheme:dark]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/35 text-xs tracking-widest uppercase block mb-2">Time</label>
                      <div className="grid grid-cols-4 gap-1.5">
                        {times.map((t) => (
                          <button
                            key={t}
                            onClick={() => setData({ ...data, time: t })}
                            className={`py-2.5 text-xs font-medium transition-colors border ${
                              data.time === t
                                ? 'bg-white text-black border-white'
                                : 'text-white/50 border-white/10 hover:border-white/30 hover:text-white'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 'info' && (
                  <div>
                    <p className="text-white/35 text-xs tracking-widest uppercase mb-4">Your Details</p>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-white/35 text-xs tracking-widest uppercase block mb-2">Full Name</label>
                        <div className="flex items-center gap-3 border border-white/10 focus-within:border-white/30 px-4 py-3 transition-colors">
                          <User size={14} className="text-white/25" />
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="bg-transparent text-white text-sm flex-1 outline-none placeholder-white/15"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/35 text-xs tracking-widest uppercase block mb-2">Phone Number</label>
                        <div className="flex items-center gap-3 border border-white/10 focus-within:border-white/30 px-4 py-3 transition-colors">
                          <Phone size={14} className="text-white/25" />
                          <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={data.phone}
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                            className="bg-transparent text-white text-sm flex-1 outline-none placeholder-white/15"
                          />
                        </div>
                      </div>
                      <p className="text-white/20 text-xs">No card required. We'll confirm by text.</p>
                    </div>
                  </div>
                )}

                {step === 'confirm' && (
                  <div>
                    <p className="text-white/35 text-xs tracking-widest uppercase mb-4">Confirm Booking</p>
                    <div className="flex flex-col gap-3">
                      {[
                        { label: 'Service', value: data.service },
                        { label: 'Date',    value: data.date    },
                        { label: 'Time',    value: data.time    },
                        { label: 'Name',    value: data.name    },
                        { label: 'Phone',   value: data.phone   },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between border-b border-white/8 pb-3">
                          <span className="text-white/35 text-xs tracking-widest uppercase">{label}</span>
                          <span className="text-white text-sm font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 mt-8">
                  {stepIndex[step] > 0 && (
                    <button
                      onClick={back}
                      className="text-white/35 hover:text-white text-xs tracking-widest uppercase transition-colors px-4 py-2.5 border border-white/10 hover:border-white/25"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={advance}
                    disabled={!canAdvance()}
                    className={`flex items-center gap-2 text-xs tracking-widest uppercase font-semibold px-7 py-2.5 ml-auto transition-colors ${
                      canAdvance()
                        ? 'bg-white text-black hover:bg-white/90'
                        : 'bg-white/10 text-white/20 cursor-not-allowed'
                    }`}
                  >
                    {step === 'confirm' ? 'Confirm' : 'Continue'}
                    <ChevronRight size={13} />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Sidebar — visible on all screen sizes, stacks below form on mobile */}
          <div className="flex flex-col gap-0">
            <InfoSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
