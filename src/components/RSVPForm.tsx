// ponytail: mobile-first RSVP section matching reference card layout
import React, { useState } from 'react';
import { Heart, User, CalendarCheck, Users, Quote, Check, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { RSVPFormData, validateRSVP, createWhatsAppRSVPLink, createGoogleCalendarUrl } from '../utils/rsvp';

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    attendance: 'yes',
    guests: 1,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateRSVP(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const local = JSON.parse(localStorage.getItem('rsvps') || '[]');
        local.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('rsvps', JSON.stringify(local));
      }
    } catch {
      const local = JSON.parse(localStorage.getItem('rsvps') || '[]');
      local.push({ ...formData, submittedAt: new Date().toISOString() });
      localStorage.setItem('rsvps', JSON.stringify(local));
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const whatsappRaj = createWhatsAppRSVPLink('9433007412', formData);
  const calendarUrl = createGoogleCalendarUrl();

  const handleGuestChange = (delta: number) => {
    setFormData((prev) => {
      const next = Math.max(1, Math.min(10, (prev.guests || 1) + delta));
      return { ...prev, guests: next };
    });
  };

  return (
    <section
      id="rsvp"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/40 text-center"
    >
      <div className="max-w-sm mx-auto relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.32em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          R. S. V. P.
        </span>

        <h2 className="font-script-romantic text-4xl sm:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          Will You Join Us?
        </h2>

        <p className="font-serif-luxury italic text-xs sm:text-[13.5px] text-[#22130A] font-semibold leading-relaxed max-w-[340px] sm:max-w-sm mt-2 mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          Your gracious presence will make our silver jubilee celebration truly complete. Kindly confirm your attendance.
        </p>

        {/* Luxury Card matching reference layout */}
        <div className="w-full rounded-[28px] border border-[#C5A77B]/70 bg-gradient-to-b from-[#FBF2E3]/95 via-[#F4E4CB]/90 to-[#EAD4B4]/95 backdrop-blur-md p-6 sm:p-7 shadow-[0_10px_25px_rgba(84,47,7,0.12)] text-left">
          {isSuccess ? (
            /* Success confirmation inside card */
            <div className="text-center py-2">
              <div className="w-12 h-12 rounded-full bg-[#E8D4B8]/80 border border-[#B87C29] text-[#784A15] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif-luxury text-xl font-bold text-[#180E08] mb-1">
                Thank You, {formData.name}!
              </h4>
              <p className="font-serif-luxury italic text-xs text-[#4A382A] mb-5 leading-relaxed">
                {formData.attendance === 'yes'
                  ? `We are delighted to celebrate our 25th milestone with you (${formData.guests} member${formData.guests > 1 ? 's' : ''})!`
                  : 'Thank you for letting us know. You will be missed dearly!'}
              </p>

              <div className="space-y-2.5">
                <a
                  href={whatsappRaj}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#20150F] hover:bg-[#110B07] text-[#FAF4EA] flex items-center justify-center gap-2 font-sans-clean font-bold text-xs tracking-[0.18em] uppercase transition-all shadow-sm active:scale-[0.99]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Send WhatsApp Note</span>
                </a>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl border border-[#B8986E] hover:bg-[#E8D4B8]/60 text-[#3C2513] flex items-center justify-center gap-2 font-sans-clean font-bold text-xs tracking-[0.18em] uppercase transition-all active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 text-[#784A15]" />
                  <span>Add to Calendar</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-4 text-xs font-sans-clean text-[#784A15] underline cursor-pointer hover:text-[#180E08]"
              >
                Submit another response
              </button>
            </div>
          ) : (
            /* RSVP Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Input Box (Dashed style matching GROUP CODE) */}
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="block font-cinzel text-[10px] sm:text-[10.5px] tracking-[0.2em] text-[#784A15] font-bold uppercase mb-1.5"
                >
                  YOUR FULL NAME
                </label>
                <div className="relative rounded-xl border border-dashed border-[#BFA075] bg-white/40 px-3.5 py-2.5 sm:py-3 flex items-center justify-between gap-2 shadow-2xs focus-within:border-[#784A15] focus-within:bg-white/60 transition-all">
                  <input
                    id="rsvp-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Anand & Sunita Roy"
                    className="w-full bg-transparent font-serif-luxury text-sm sm:text-base text-[#180E08] font-semibold placeholder-[#9C826D] focus:outline-none"
                  />
                  <User className="w-4 h-4 text-[#8C6B45] shrink-0" />
                </div>
                {errors.name && (
                  <p className="text-[11px] text-red-700 font-sans-clean mt-1">{errors.name}</p>
                )}
              </div>

              {/* Attendance Selection with formal invitation choices */}
              <div className="pt-1">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <CalendarCheck className="w-3.5 h-3.5 text-[#784A15] shrink-0" />
                  <span className="font-cinzel text-[10px] tracking-wider text-[#784A15] font-bold uppercase">
                    WILL YOU ATTEND?
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        attendance: 'yes',
                        guests: 1,
                      }))
                    }
                    className={`py-2.5 px-1.5 sm:px-2.5 rounded-xl text-[10.5px] sm:text-xs font-sans-clean font-bold tracking-tight sm:tracking-normal transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap min-w-0 ${
                      formData.attendance === 'yes'
                        ? 'bg-[#20150F] text-[#FAF4EA] shadow-xs'
                        : 'border border-[#C5A77B] text-[#543D28] hover:bg-[#E8D4B8]/40'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="whitespace-nowrap">Joyfully Attend</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'no', guests: 0 })}
                    className={`py-2.5 px-1.5 sm:px-2.5 rounded-xl text-[10.5px] sm:text-xs font-sans-clean font-bold tracking-tight sm:tracking-normal transition-all cursor-pointer flex items-center justify-center gap-1 sm:gap-1.5 whitespace-nowrap min-w-0 ${
                      formData.attendance === 'no'
                        ? 'bg-[#20150F] text-[#FAF4EA] shadow-xs'
                        : 'border border-[#C5A77B] text-[#543D28] hover:bg-[#E8D4B8]/40'
                    }`}
                  >
                    <X className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="whitespace-nowrap">Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Number of Members Selection */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#542F07] shrink-0" />
                    <span className="font-cinzel text-xs tracking-wider text-[#180E08] font-bold uppercase">
                      NO. OF MEMBERS
                    </span>
                  </div>
                  <span className="text-xs text-[#542F07] font-serif-luxury italic font-medium">
                    {formData.attendance === 'no' ? 'Not attending' : 'Including yourself'}
                  </span>
                </div>
                <div
                  className={`h-11 rounded-xl border border-[#BFA075] bg-white/70 px-3 flex items-center justify-between shadow-2xs transition-opacity ${
                    formData.attendance === 'no' ? 'opacity-40 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleGuestChange(-1)}
                    disabled={formData.guests <= 1 || formData.attendance === 'no'}
                    className="w-8 h-8 rounded-lg bg-[#EAD6BB]/70 hover:bg-[#DFC29F] border border-[#C5A77B]/60 active:scale-95 text-[#180E08] font-bold text-lg flex items-center justify-center cursor-pointer disabled:opacity-30 transition-all"
                    aria-label="Decrease member count"
                  >
                    -
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="font-sans-clean font-bold text-base sm:text-lg text-[#180E08]">
                      {formData.attendance === 'no' ? 0 : formData.guests}
                    </span>
                    <span className="font-serif-luxury font-bold text-xs sm:text-[13px] text-[#2C180C]">
                      {formData.guests === 1 ? 'Member attending' : 'Members attending'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleGuestChange(1)}
                    disabled={formData.guests >= 10 || formData.attendance === 'no'}
                    className="w-8 h-8 rounded-lg bg-[#EAD6BB]/70 hover:bg-[#DFC29F] border border-[#C5A77B]/60 active:scale-95 text-[#180E08] font-bold text-lg flex items-center justify-center cursor-pointer disabled:opacity-30 transition-all"
                    aria-label="Increase member count"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Quote Note Box matching reference */}
              <div className="rounded-xl bg-[#EFE3CF]/65 border border-[#D8C2A0]/50 p-3 sm:p-3.5 flex items-start gap-2.5 text-left">
                <Quote className="w-4 h-4 text-[#8C6B45] shrink-0 mt-0.5" />
                <p className="font-serif-luxury italic text-xs text-[#4A382A] leading-relaxed">
                  Kindly respond by January 10, 2027 so we can make the most gracious arrangements for your family.
                </p>
              </div>

              {/* Bottom Action Button (Full width dark button) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-[#20150F] hover:bg-[#110B07] text-[#FAF4EA] flex items-center justify-center gap-2 font-sans-clean font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-sm active:scale-[0.99] cursor-pointer disabled:opacity-60"
              >
                <span>{isSubmitting ? 'CONFIRMING...' : 'CONFIRM RSVP'}</span>
              </button>

            </form>
          )}

        </div>

        {/* Tap to Call Contact */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-[11.5px] font-sans-clean text-[#4A392F]">
          <Phone className="w-3.5 h-3.5 text-[#784A15] shrink-0" />
          <a href="tel:9433007412" className="hover:text-[#784A15] transition-colors font-semibold">
            9433007412 (Raj)
          </a>
          <span>·</span>
          <a href="tel:9432854364" className="hover:text-[#784A15] transition-colors font-semibold">
            9432854364 (Chandrani)
          </a>
        </div>

      </div>
    </section>
  );
};
