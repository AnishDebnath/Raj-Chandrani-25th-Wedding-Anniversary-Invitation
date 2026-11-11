// ponytail: mobile-first photographic footer with increased section height and taller bottom background part
import React from 'react';
import { Heart, ChevronUp } from 'lucide-react';
import { footerCoupleImg } from '../assets';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative w-full overflow-hidden -mt-3 sm:-mt-4">
      {/* Full-width photo extending directly to the bottom edge with 9:16 aspect ratio */}
      <div className="relative w-full aspect-[9/16] overflow-hidden">
        {/* Couple Photograph with bidirectional mask blend */}
        <img
          src={footerCoupleImg}
          alt="Raj & Chandrani - 25 Years of Togetherness"
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 62%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 62%, transparent 100%)',
          }}
        />

        {/* Top Feathered Gradient Blend */}
        <div
          className="absolute inset-x-0 top-0 h-20 sm:h-24 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #F4DCB3 0%, rgba(244, 220, 179, 0.9) 25%, rgba(244, 220, 179, 0.5) 60%, transparent 100%)',
          }}
        />

        {/* Increased Height Bottom Feathered Gradient Blend */}
        <div
          className="absolute inset-x-0 bottom-0 h-60 sm:h-72 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #F4DCB3 0%, #F4DCB3 38%, rgba(244, 220, 179, 0.94) 62%, rgba(244, 220, 179, 0.5) 85%, transparent 100%)',
          }}
        />

        {/* Bottom text and button sitting on the expanded parchment blend */}
        <div className="absolute inset-x-0 bottom-0 pb-8 sm:pb-10 pt-16 px-4 flex flex-col items-center text-center z-20">
          <Heart className="w-4 h-4 text-[#B87C29] fill-[#B87C29] mb-2 opacity-90 drop-shadow-xs" />
          
          <span className="font-cinzel text-xs sm:text-[13.5px] font-bold tracking-[0.28em] uppercase text-[#180E08] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            25 Years &amp; A Lifetime To Go
          </span>

          <p className="font-serif-luxury italic text-xs sm:text-[13px] text-[#542F07] mt-1.5 font-semibold drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            Raj &amp; Chandrani · ADB Manor Kolkata · 23 January 2027
          </p>

          {/* Back To Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-4 inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#BFA075] bg-[#FAF2E3]/95 hover:bg-[#F3E2C7] active:scale-95 text-[#2A1E17] text-[10.5px] sm:text-xs font-sans-clean font-bold tracking-[0.2em] uppercase transition-all shadow-xs cursor-pointer"
          >
            <ChevronUp className="w-3.5 h-3.5 text-[#784A15]" />
            <span>BACK TO TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
