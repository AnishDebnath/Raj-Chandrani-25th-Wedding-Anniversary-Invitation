// ponytail: mobile-first celebration banner and footer styled for background.png
import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';
import { giftBoxImg } from '../assets';

interface ClosingProps {
  onRSVPClick: () => void;
}

export const Closing: React.FC<ClosingProps> = ({ onRSVPClick }) => {
  return (
    <footer id="closing" className="relative text-[#2A1E17] overflow-hidden">
      
      {/* 1. Be A Part Of Our Celebration Banner */}
      <div className="py-6 sm:py-8 px-3 border-b border-[#D5C0A5]/60">
        <div className="max-w-md mx-auto grid grid-cols-12 gap-3 items-center">
          
          {/* Left: Gift Box with Fairy Lights */}
          <div className="col-span-5 flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-sm border border-[#D5C0A5] w-full max-w-[140px]">
              <img
                src={giftBoxImg}
                alt="Celebration gift box"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: CTA Text & RSVP Button */}
          <div className="col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left pl-1">
            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.16em] text-[#2A1E17] uppercase leading-tight">
              BE A PART OF OUR CELEBRATION
            </h2>

            <p className="font-serif-luxury italic text-[9.5px] sm:text-[11px] text-[#5E4738] mt-1 mb-2.5 leading-snug">
              Your presence will make this day even more special for us. Kindly confirm your attendance.
            </p>

            <button
              type="button"
              onClick={onRSVPClick}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-[#090909] font-sans-clean font-bold text-[9px] sm:text-[10.5px] tracking-wider uppercase shadow-xs hover:brightness-105 active:scale-95 transition-all cursor-pointer min-h-[32px]"
            >
              <span>RSVP NOW</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. Lifetime Footer */}
      <div className="py-6 sm:py-8 px-3 text-center">
        <div className="max-w-xs mx-auto flex flex-col items-center">
          {/* Gold heart */}
          <Heart className="w-3.5 h-3.5 text-[#B87C29] fill-[#B87C29] mb-1.5 opacity-80" />

          {/* 25 YEARS */}
          <span className="font-cinzel text-sm sm:text-base font-bold tracking-[0.25em] text-[#2A1E17]">
            25 YEARS
          </span>

          {/* AND A LIFETIME TO GO */}
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.2em] text-[#8C5D23] font-medium mt-0.5">
            AND A LIFETIME TO GO
          </span>

          {/* Laurel Branch Flourish Divider */}
          <div className="mt-2.5 flex items-center justify-center text-[#B87C29]" aria-hidden="true">
            <svg width="100" height="15" viewBox="0 0 120 18" fill="currentColor">
              <path d="M50 9 C40 4, 30 14, 20 8 M35 7 C28 3, 22 10, 15 5 M20 7 C14 2, 8 7, 0 8" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="60" cy="9" r="2.5" fill="currentColor" />
              <path d="M70 9 C80 4, 90 14, 100 8 M85 7 C92 3, 98 10, 105 5 M100 7 C106 2, 112 7, 120 8" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <p className="text-[9px] font-sans-clean text-[#6E5542] tracking-wider mt-3">
            Raj &amp; Chandrani · ADB MANOR Kolkata · 23 January 2027
          </p>
        </div>
      </div>

    </footer>
  );
};
