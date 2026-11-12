// ponytail: Welcome to our story section with identical mobile font size on all devices
import React from 'react';
import { motion } from 'framer-motion';
import { journey2Img } from '../assets';

export const WelcomeStory: React.FC = () => {
  return (
    <section
      id="welcome-story"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-3 sm:px-4 text-center overflow-hidden border-b border-[#D5C0A5]/40"
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        {/* Section Header with appear animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Kicker */}
          <span className="font-cinzel text-xs tracking-[0.28em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            A SILVER MILESTONE
          </span>

          {/* Script Title */}
          <h2 className="font-script-romantic text-3xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
            Welcome to our story
          </h2>

          {/* Paragraph */}
          <p className="font-serif-luxury italic text-sm text-[#22130A] font-semibold leading-relaxed max-w-sm mt-2 mb-7 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            As we celebrate twenty-five beautiful years of love, laughter, and lifelong devotion, we warmly invite you to join us in this golden milestone. Your presence is the light that completes our celebration.
          </p>
        </motion.div>

        {/* Photo Card with 'No. 25' Badge & appear animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-3xl overflow-hidden border border-[#D5C0A5] shadow-xl bg-black/10 aspect-[3/4] group"
        >
          <img
            src={journey2Img}
            alt="Raj & Chandrani - 25 Years of Togetherness"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Top-Right Badge */}
          <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-[#F9E7B9]/40 text-[#F9E7B9] text-[11px] font-cinzel font-semibold tracking-wider shadow-md">
            No. 25
          </div>
        </motion.div>
      </div>
    </section>
  );
};
