// ponytail: Welcome to our story section with refined padding & margins
import React from 'react';
import { journey2Img } from '../assets';

export const WelcomeStory: React.FC = () => {
  return (
    <section
      id="welcome-story"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 text-center overflow-hidden border-b border-[#D5C0A5]/50"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        
        {/* Kicker */}
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.32em] text-[#5A320A] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          A SILVER MILESTONE
        </span>

        {/* Script Title */}
        <h2 className="font-script-romantic text-4xl sm:text-5xl text-[#150C07] leading-tight my-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
          Welcome to our story
        </h2>

        {/* Paragraph */}
        <p className="font-serif-luxury italic text-xs sm:text-[13.5px] text-[#22140B] font-medium leading-relaxed max-w-[340px] sm:max-w-sm mt-2 mb-7">
          As we celebrate twenty-five beautiful years of love, laughter, and lifelong devotion, we warmly invite you to join us in this golden milestone. Your presence is the light that completes our celebration.
        </p>

        {/* Photo Card with 'No. 25' Badge */}
        <div className="relative w-full max-w-[320px] sm:max-w-[350px] rounded-3xl overflow-hidden border border-[#D5C0A5] shadow-xl bg-black/10 aspect-[3/4] group">
          <img
            src={journey2Img}
            alt="Raj & Chandrani - 25 Years of Togetherness"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Top-Right Badge */}
          <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[10.5px] font-sans-clean font-semibold tracking-wider shadow-sm">
            No. 25
          </div>
        </div>

      </div>
    </section>
  );
};
