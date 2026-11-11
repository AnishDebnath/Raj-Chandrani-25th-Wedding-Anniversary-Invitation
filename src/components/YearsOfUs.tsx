// ponytail: 25 Years of Us section with refined padding & margins
import React from 'react';
import { IntertwinedHearts } from './GoldDecorations';
import { holdingHandsImg } from '../assets';

export const YearsOfUs: React.FC = () => {
  return (
    <section
      id="years-of-us"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/50"
    >
      <div className="max-w-md mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center">
          
          {/* Left: Romantic Hands Photo */}
          <div className="col-span-5 flex justify-center">
            <div className="w-full rounded-2xl overflow-hidden border border-[#D5C0A5] shadow-xs bg-[#FFFDFC]">
              <img
                src={holdingHandsImg}
                alt="Raj and Chandrani holding hands with wedding rings"
                className="w-full h-auto object-cover scale-105"
              />
            </div>
          </div>

          {/* Right: Editorial & Sentiments */}
          <div className="col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left pl-1">
            <div className="mb-1.5">
              <IntertwinedHearts className="w-8 h-8 text-[#B87C29]" />
            </div>

            <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.22em] text-[#2A1E17] uppercase mb-1">
              25 YEARS OF US
            </h2>

            <p className="font-serif-luxury text-xs sm:text-[13px] text-[#5E4738] leading-relaxed mt-1">
              A journey filled with love, laughter, memories and togetherness. Grateful for every moment, and for everyone who has been a part of our beautiful journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
