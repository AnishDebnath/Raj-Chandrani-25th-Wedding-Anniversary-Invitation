// ponytail: mobile-first venue section with section header & integrated photo with reduced outer padding
import React, { useState } from 'react';
import { MapPin, Info, Clock, Globe, Calendar, Copy, Check } from 'lucide-react';
import { createGoogleCalendarUrl } from '../utils/rsvp';
import { venueAdbManorImg } from '../assets';

export const Venue: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const addressText = '69/1 Purna Das Road, Kolkata - 700029';
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=ADB+MANOR+69%2F1+Purna+Das+Road+Kolkata';
  const calendarUrl = createGoogleCalendarUrl();

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(addressText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback silent fail
    }
  };

  return (
    <section
      id="venue"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/40 text-center"
    >
      <div className="max-w-sm mx-auto relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.32em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          VENUE & LOCATION
        </span>

        <h2 className="font-script-romantic text-4xl sm:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          The Venue
        </h2>

        <p className="font-serif-luxury italic text-xs sm:text-[13.5px] text-[#22130A] font-semibold leading-relaxed max-w-[340px] sm:max-w-sm mt-2 mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          Join us as we raise a toast to 25 golden years in the heart of South Kolkata.
        </p>

        {/* Luxury Venue Info Card with reduced outer side padding for image */}
        <div className="w-full rounded-[28px] border border-[#C5A77B]/70 bg-gradient-to-b from-[#FBF2E3]/95 via-[#F4E4CB]/90 to-[#EAD4B4]/95 backdrop-blur-md p-2 sm:p-2.5 shadow-[0_10px_25px_rgba(84,47,7,0.12)] text-left">
          
          {/* Venue Photograph (reduced side padding inside div) */}
          <div className="relative w-full h-44 sm:h-52 rounded-[22px] overflow-hidden border border-[#C5A77B]/60 shadow-xs">
            <img
              src={venueAdbManorImg}
              alt="ADB Manor Venue"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Details & Actions Content with comfortable text padding */}
          <div className="px-3.5 sm:px-4 pt-4 pb-2">
            {/* Kicker */}
            <div className="text-center font-cinzel text-[10.5px] sm:text-[11px] tracking-[0.25em] text-[#784A15] font-bold uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              CEREMONY & RECEPTION
            </div>

            {/* Title */}
            <h3 className="text-center font-serif-luxury font-bold text-2xl sm:text-[26px] text-[#180E08] mt-1.5 mb-5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
              ADB Manor
            </h3>

            {/* Details List */}
            <div className="space-y-3.5 mb-6 text-xs sm:text-[13px] text-[#2C1D13]">
              {/* Address with copy button */}
              <div className="flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <MapPin className="w-4 h-4 text-[#784A15] shrink-0" />
                  <span className="truncate font-medium">{addressText}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy address"
                  aria-label="Copy address"
                  className="p-1.5 rounded-lg hover:bg-[#E2CCA9]/70 text-[#784A15] hover:text-[#180E08] transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-700" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Landmark */}
              <div className="flex items-center gap-2.5">
                <Info className="w-4 h-4 text-[#784A15] shrink-0" />
                <span className="font-medium">Beside Triangular Park, Kolkata</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#784A15] shrink-0" />
                <span className="font-medium">18:00 (6:00 PM Onwards)</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5">
              {/* Primary: Get Directions */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#20150F] hover:bg-[#110B07] text-[#FAF4EA] flex items-center justify-center gap-2 font-sans-clean font-bold text-[11px] sm:text-xs tracking-[0.18em] uppercase transition-all shadow-sm active:scale-[0.99]"
              >
                <Globe className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              {/* Secondary: Add to Calendar */}
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-[#B8986E] hover:bg-[#E8D4B8]/60 text-[#3C2513] flex items-center justify-center gap-2 font-sans-clean font-bold text-[11px] sm:text-xs tracking-[0.18em] uppercase transition-all active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-[#784A15]" />
                <span>ADD TO CALENDAR</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
