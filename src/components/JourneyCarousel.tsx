// ponytail: mobile-first journey carousel with refined padding & margins
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { journey1Img, journey2Img, journey3Img, heroCoupleImg } from '../assets';

const PHOTOS = [
  { src: journey1Img, alt: 'Auspicious Beginning' },
  { src: journey2Img, alt: '25 Years of Togetherness' },
  { src: journey3Img, alt: 'Moments of Joy' },
  { src: heroCoupleImg, alt: 'A Lifetime of Love' },
];

export const JourneyCarousel: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const prev = () => {
    setActiveIdx((curr) => (curr === 0 ? PHOTOS.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIdx((curr) => (curr === PHOTOS.length - 1 ? 0 : curr + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  const leftIdx = (activeIdx - 1 + PHOTOS.length) % PHOTOS.length;
  const centerIdx = activeIdx;
  const rightIdx = (activeIdx + 1) % PHOTOS.length;

  return (
    <section
      id="journey"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/50"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-md mx-auto text-center relative z-10">
        
        {/* Headings */}
        <span className="font-cinzel text-xs sm:text-[13px] font-bold tracking-[0.28em] text-[#8C5D23] uppercase block mb-1.5">
          OUR JOURNEY
        </span>
        <h2 className="font-script-romantic text-3xl sm:text-4xl text-[#2A1E17] leading-tight my-1 mb-6 sm:mb-7">
          Moments that made 25 years beautiful
        </h2>

        {/* 3-Photo Stage */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-3.5 my-3">
          
          {/* Left Arrow */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-0 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/75 hover:bg-white/95 backdrop-blur-md border border-[#D5C0A5] text-[#2A1E17] flex items-center justify-center transition-all cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Left Photo */}
          <div
            onClick={prev}
            className="w-16 sm:w-20 aspect-[4/3] rounded-xl overflow-hidden border border-[#D5C0A5] opacity-65 hover:opacity-85 transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <img
              src={PHOTOS[leftIdx].src}
              alt={PHOTOS[leftIdx].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Center Photo (Active) */}
          <div className="w-44 sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#B87C29] shadow-xl shadow-[#B87C29]/20 bg-black/10 shrink-0">
            <img
              src={PHOTOS[centerIdx].src}
              alt={PHOTOS[centerIdx].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Photo */}
          <div
            onClick={next}
            className="w-16 sm:w-20 aspect-[4/3] rounded-xl border border-[#D5C0A5] overflow-hidden opacity-65 hover:opacity-85 transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <img
              src={PHOTOS[rightIdx].src}
              alt={PHOTOS[rightIdx].alt}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute right-0 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/75 hover:bg-white/95 backdrop-blur-md border border-[#D5C0A5] text-[#2A1E17] flex items-center justify-center transition-all cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-5">
          {PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIdx === idx ? 'w-4 bg-[#B87C29]' : 'w-1.5 bg-[#B87C29]/35'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
