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
      className="relative w-full h-[100dvh] min-h-[580px] max-h-[1000px] flex flex-col justify-between items-center text-center select-none overflow-hidden"
    >
      {/* 1. Background Photo: Fills full width & height */}
      <div className="absolute inset-0 z-0">
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
          className="absolute inset-x-0 top-0 h-72 sm:h-80 pointer-events-none"
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
        <div className="relative pt-8 sm:pt-11 pb-8 px-4 flex flex-col items-center">
          {/* Line 1: Names */}
          <span className="font-cinzel text-[clamp(10.5px,2.6vw,12.5px)] tracking-[0.38em] text-[#7A543A] uppercase font-semibold leading-none">
            RAJ &amp; CHANDRANI
          </span>

          {/* Line 2: Our Beginning (Proper vertical margin above & below) */}
          <h1 className="font-script-romantic text-[clamp(2.85rem,7.5vh,4.25rem)] text-[#442A19] mt-3 sm:mt-4 mb-2 sm:mb-2.5 leading-[1.08] drop-shadow-xs whitespace-nowrap">
            Our Beginning
          </h1>

          {/* Line 3: Date */}
          <span className="font-serif-luxury text-[clamp(1.05rem,2.8vh,1.35rem)] text-[#7A543A] tracking-wider leading-none">
            Jan 23, 2027
          </span>
        </div>
      </div>

      {/* 3. Bottom Position: Location & Scroll */}
      <div className="relative z-10 pb-5 sm:pb-6 px-4 flex flex-col items-center">
        {/* Location */}
        <p className="font-script-romantic text-[clamp(1.6rem,4.5vh,2.25rem)] text-white drop-shadow-md leading-none mb-2">
          Kolkata, India
        </p>

        {/* SCROLL with small bouncing chevron */}
        <button
          type="button"
          onClick={onExploreClick}
          aria-label="Scroll to explore"
          className="flex flex-col items-center text-white/85 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="font-sans-clean text-[9px] tracking-[0.28em] uppercase font-medium">
            SCROLL
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce mt-0.5 text-white/90 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
