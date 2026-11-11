// ponytail: mobile-first RSVP form styled for background.png
import React, { useState } from 'react';
import { User, Users, Check, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { RSVPFormData, validateRSVP, createWhatsAppRSVPLink, createGoogleCalendarUrl } from '../utils/rsvp';
import { floralBorderLeftImg, floralBorderRightImg } from '../assets';

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    attendance: 'yes',
    guests: 2,
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

  return (
    <section
      id="rsvp"
      className="relative text-[#2A1E17] py-7 sm:py-9 px-3 overflow-hidden border-b border-[#D5C0A5]/60"
    >
      {/* Botanical floral foliage flanking left and right */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 pointer-events-none opacity-80 overflow-hidden flex flex-col justify-between">
        <img src={floralBorderLeftImg} alt="" className="w-full h-auto object-contain" aria-hidden="true" />
      </div>
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 pointer-events-none opacity-80 overflow-hidden flex flex-col justify-between">
        <img src={floralBorderRightImg} alt="" className="w-full h-auto object-contain" aria-hidden="true" />
      </div>

      <div className="max-w-md mx-auto text-center relative z-10">
        
        {/* Headings */}
        <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#2A1E17] uppercase">
          WILL YOU JOIN US?
        </h2>
        <p className="font-serif-luxury italic text-[11px] sm:text-xs text-[#5E4738] mt-0.5 mb-4 max-w-xs mx-auto leading-relaxed">
          Your presence will make this day even more special for us. Kindly confirm your attendance.
        </p>

        {isSuccess ? (
          /* Confirmation Success Card */
          <div className="bg-white/90 backdrop-blur-[2px] border border-[#D5C0A5] rounded-xl p-5 shadow-xs text-center">
            <div className="w-10 h-10 rounded-full bg-[#E5C287]/40 border border-[#B87C29] text-[#7A541D] flex items-center justify-center mx-auto mb-2">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#2A1E17] mb-1">
              Thank You, {formData.name}!
            </h3>
            <p className="font-serif-luxury text-xs text-[#5C4535] mb-4">
              {formData.attendance === 'yes'
                ? `We are delighted to celebrate our 25th milestone with you (${formData.guests} guest${formData.guests > 1 ? 's' : ''})!`
                : 'Thank you for letting us know. You will be missed dearly!'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full border border-[#B87C29] bg-white text-[#2A1E17] font-sans-clean text-[10px] font-semibold hover:bg-[#FAF2E4] transition-all flex items-center gap-1 shadow-xs"
              >
                <Calendar className="w-3 h-3 text-[#B87C29]" />
                <span>Add to Calendar</span>
              </a>
              <a
                href={whatsappRaj}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-[#090909] font-sans-clean text-[10px] font-bold shadow-xs hover:brightness-105 transition-all flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Send WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="mt-3 text-[10px] font-sans-clean text-[#7A614E] underline cursor-pointer hover:text-[#2A1E17]"
            >
              Submit another response
            </button>
          </div>
        ) : (
          /* Form matching flyer layout */
          <form
            onSubmit={handleSubmit}
            className="bg-white/85 backdrop-blur-[2px] border border-[#D5C0A5] rounded-xl p-3.5 sm:p-4 shadow-xs text-left"
          >
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              
              {/* Top Left: Name */}
              <div>
                <label htmlFor="rsvp-name" className="block text-[10px] sm:text-[11px] font-sans-clean font-semibold text-[#5C4535] mb-1">
                  Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#9C826D]">
                    <User className="w-3.5 h-3.5" />
                  </div>
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
                    placeholder="Your Name"
                    className="w-full pl-7 pr-2 py-1.5 bg-white border border-[#D5C0A5] rounded-md text-xs text-[#2A1E17] placeholder-[#A89380] focus:outline-none focus:border-[#B87C29] transition-colors min-h-[36px]"
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-600 mt-0.5">{errors.name}</p>}
              </div>

              {/* Top Right: Will you attend? */}
              <div>
                <span className="block text-[10px] sm:text-[11px] font-sans-clean font-semibold text-[#5C4535] mb-1">
                  Will you attend?
                </span>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'yes' })}
                    className={`px-1 py-1 rounded-md text-[8px] sm:text-[9.5px] font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-0.5 cursor-pointer min-h-[36px] ${
                      formData.attendance === 'yes'
                        ? 'bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-white shadow-xs'
                        : 'bg-white border border-[#D5C0A5] text-[#7A614E]'
                    }`}
                  >
                    <Check className="w-2.5 h-2.5 shrink-0" />
                    <span>YES</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'no', guests: 0 })}
                    className={`px-1 py-1 rounded-md text-[8px] sm:text-[9.5px] font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-0.5 cursor-pointer min-h-[36px] ${
                      formData.attendance === 'no'
                        ? 'bg-[#3A2429] text-white shadow-xs'
                        : 'bg-white border border-[#D5C0A5] text-[#7A614E]'
                    }`}
                  >
                    <X className="w-2.5 h-2.5 shrink-0" />
                    <span>NO</span>
                  </button>
                </div>
              </div>

              {/* Bottom Left: Number of Guests */}
              <div>
                <label htmlFor="rsvp-guests" className="block text-[10px] sm:text-[11px] font-sans-clean font-semibold text-[#5C4535] mb-1">
                  Number of Guests
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#9C826D]">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <input
                    id="rsvp-guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="10"
                    disabled={formData.attendance === 'no'}
                    value={formData.attendance === 'no' ? 0 : formData.guests}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10) || 1;
                      setFormData({ ...formData, guests: val });
                    }}
                    placeholder="e.g. 2"
                    className="w-full pl-7 pr-2 py-1.5 bg-white border border-[#D5C0A5] rounded-md text-xs text-[#2A1E17] placeholder-[#A89380] focus:outline-none focus:border-[#B87C29] disabled:bg-[#F3EFE9] transition-colors min-h-[36px]"
                  />
                </div>
              </div>

              {/* Bottom Right: Confirm RSVP Button */}
              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-1.5 px-2 rounded-md bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-[#090909] font-sans-clean font-bold text-[10px] sm:text-[11px] tracking-wider uppercase hover:brightness-105 active:scale-98 transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer disabled:opacity-60 min-h-[36px]"
                >
                  <span>{isSubmitting ? 'CONFIRMING...' : 'CONFIRM RSVP'}</span>
                  <span>&gt;</span>
                </button>
              </div>

            </div>
          </form>
        )}

        {/* Bottom Contact Numbers for Direct Mobile Tap-to-Call */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-sans-clean text-[#4A392F]">
          <Phone className="w-3 h-3 text-[#B87C29] shrink-0" />
          <span className="font-semibold text-[#2A1E17]">R.S.V.P.</span>
          <a href="tel:9433007412" className="hover:text-[#B87C29] transition-colors font-medium">9433007412 (Raj)</a>
          <span>|</span>
          <a href="tel:9432854364" className="hover:text-[#B87C29] transition-colors font-medium">9432854364 (Chandrani)</a>
        </div>

      </div>
    </section>
  );
};
