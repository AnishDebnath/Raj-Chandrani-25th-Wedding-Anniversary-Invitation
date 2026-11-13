// ponytail: full-bleed hero with identical mobile font size on all devices
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroImg, faviconImg } from '../assets';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between items-center text-center select-none overflow-hidden"
    >
      {/* 1. Background Photo: Fills full width & height edge-to-edge */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <img
          src={heroImg}
          alt="Raj & Chandrani"
          className="w-full h-full object-cover object-[center_32%]"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
        />

        {/* Bottom subtle shadow: Ensures location & scroll button are crisp */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
      </motion.div>

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

        {/* Top Branding Link: Subtle, discreet branding so main focus stays on anniversary text */}
        <motion.a
          href="https://thephotographerhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Photographer House"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 0.8, y: 0 }}
          whileHover={{ opacity: 1, scale: 1.02 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="relative mt-7 sm:mt-8 md:mt-9 z-20 inline-flex items-center gap-1.5 cursor-pointer group"
        >
          <img
            src={faviconImg}
            alt="The Photographer House"
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain rounded-full opacity-85 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-cinzel text-[9.5px] sm:text-[10px] tracking-[0.14em] text-[#542F07]/80 group-hover:text-[#251509] uppercase font-semibold flex items-center gap-1 transition-colors">
            <span className="opacity-35 font-light">|</span>
            <span>The Photographer House</span>
          </span>
        </motion.a>

        {/* Text Hierarchy with Proper Airy Gaps */}
        <div className="relative pt-3 sm:pt-3.5 pb-6 sm:pb-7 px-4 flex flex-col items-center">
          {/* Line 1: Names */}
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="font-cinzel text-[11px] sm:text-xs tracking-[0.28em] text-[#4A2610] uppercase font-bold leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]"
          >
            RAJ &amp; CHANDRANI
          </motion.span>

          {/* Line 2: 25th Wedding Anniversary */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
            className="font-script-romantic text-3xl sm:text-[2.35rem] text-[#1C0F08] mt-2 mb-1.5 leading-[1.1] drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] whitespace-nowrap font-normal"
          >
            25th Wedding Anniversary
          </motion.h1>

          {/* Line 3: Date only */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="font-serif-luxury text-[13px] sm:text-sm text-[#381F0E] font-medium tracking-wider leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
          >
            Saturday, 23rd January 2027
          </motion.span>
        </div>
      </div>

      {/* 3. Bottom Position: Son's Invitation & Scroll */}
      <div className="relative z-10 pb-5 sm:pb-6 px-4 flex flex-col items-center">
        {/* Invitation from our son RITHVIK */}
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="font-cinzel text-[11px] sm:text-xs tracking-[0.24em] text-white/95 uppercase font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)] mb-3"
        >
          Invitation from our son RITHVIK
        </motion.span>

        {/* SCROLL with continuous all-time floating animation */}
        <motion.button
          type="button"
          onClick={onExploreClick}
          aria-label="Scroll to explore"
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="flex flex-col items-center text-white/85 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="font-sans-clean text-xs tracking-[0.24em] uppercase font-semibold">
            SCROLL
          </span>
          <ChevronDown className="w-3.5 h-3.5 mt-0.5 text-white/90 group-hover:translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};
