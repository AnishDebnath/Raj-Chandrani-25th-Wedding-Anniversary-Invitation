// ponytail: full-bleed hero with refined text gaps and smooth mix-blend fade into photo
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { heroCoupleImg } from '../assets';

interface HeroProps {
  onRSVPClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between items-center text-center select-none overflow-hidden"
    >
      {/* 1. Background Photo: Fills full width & height edge-to-edge */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src={heroCoupleImg}
          alt="Raj & Chandrani"
          className="w-full h-full object-cover object-[center_32%]"
          loading="eager"
        />

        {/* Bottom subtle shadow: Ensures location & scroll button are crisp */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* 2. Top Position: Text Block with Elegant Spacing & Smooth Feathered Blend */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Soft Multi-Stop Gradient Blend with Progressive Feather */}
        <div
          className="absolute inset-x-0 top-0 h-72 sm:h-80 md:h-96 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #F4DCB3 0%, #F4DCB3 52%, rgba(244, 220, 179, 0.94) 66%, rgba(244, 220, 179, 0.78) 76%, rgba(244, 220, 179, 0.45) 86%, rgba(244, 220, 179, 0.15) 94%, transparent 100%)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.4) 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.4) 88%, transparent 100%)',
          }}
        />

        {/* Text Hierarchy with Proper Airy Gaps */}
        <div className="relative pt-7 sm:pt-11 md:pt-14 pb-8 px-3 sm:px-4 md:px-6 flex flex-col items-center">
          {/* Line 1: Names */}
          <span className="font-cinzel text-[11px] sm:text-xs md:text-sm lg:text-base tracking-[0.24em] sm:tracking-[0.38em] md:tracking-[0.45em] text-[#4A2610] uppercase font-bold leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            RAJ &amp; CHANDRANI
          </span>

          {/* Line 2: Our Beginning (Proper vertical margin above & below) */}
          <h1 className="font-script-romantic text-[clamp(2.5rem,7.5vw,5.5rem)] text-[#1C0F08] mt-2.5 sm:mt-4 md:mt-5 mb-2 sm:mb-2.5 md:mb-3 leading-[1.08] drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] whitespace-nowrap font-normal">
            Our Beginning
          </h1>

          {/* Line 3: Date */}
          <span className="font-serif-luxury text-[clamp(1.05rem,2.2vw,1.75rem)] text-[#381F0E] font-semibold tracking-wider leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
            Jan 23, 2027
          </span>
        </div>
      </div>

      {/* 3. Bottom Position: Location & Scroll */}
      <div className="relative z-10 pb-5 sm:pb-6 md:pb-8 px-3 sm:px-4 flex flex-col items-center">
        {/* Location */}
        <p className="font-script-romantic text-[clamp(1.5rem,3.5vw,3rem)] text-white drop-shadow-md leading-none mb-2 md:mb-3">
          Kolkata, India
        </p>

        {/* SCROLL with small bouncing chevron */}
        <button
          type="button"
          onClick={onExploreClick}
          aria-label="Scroll to explore"
          className="flex flex-col items-center text-white/85 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="font-sans-clean text-[9px] sm:text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.35em] uppercase font-medium">
            SCROLL
          </span>
          <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4 animate-bounce mt-0.5 text-white/90 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
