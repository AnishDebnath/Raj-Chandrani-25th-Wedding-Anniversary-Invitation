// ponytail: full-bleed hero with identical mobile font size on all devices
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { heroImg, tphLogoImg } from '../assets';

interface HeroProps {
  onExploreClick?: () => void;
  animateIn?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, animateIn = true }) => {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between items-center text-center select-none overflow-hidden"
    >
      {/* 1. Background Photo: Directly visible with full fidelity */}
      <div className="absolute inset-0 z-0 w-full h-full">
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
      </div>

      {/* 2. Top Position: Text Block with Elegant Spacing & Smooth Feathered Blend */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Soft Multi-Stop Gradient Blend with Reduced Opacity and Compact Height */}
        <div
          className="absolute inset-x-0 top-0 h-56 sm:h-60 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(244, 220, 179, 0.75) 0%, rgba(244, 220, 179, 0.70) 50%, rgba(244, 220, 179, 0.48) 75%, rgba(244, 220, 179, 0.20) 90%, transparent 100%)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            maskImage:
              'linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.3) 90%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.8) 75%, rgba(0,0,0,0.3) 90%, transparent 100%)',
          }}
        />

        {/* Top Branding Link: Subtle, discreet branding so main focus stays on anniversary text */}
        <motion.a
          href="https://thephotographerhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Photographer House"
          initial={{ opacity: 0, y: -8 }}
          animate={animateIn ? { opacity: 0.9, y: 0 } : { opacity: 0, y: -8 }}
          whileHover={{ opacity: 1, scale: 1.03 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative mt-7 sm:mt-8 md:mt-9 z-20 inline-flex items-center gap-1.5 cursor-pointer group"
        >
          <img
            src={tphLogoImg}
            alt="The Photographer House"
            className="h-5 sm:h-5.5 w-auto object-contain rounded-xs opacity-95 group-hover:opacity-100 transition-opacity shadow-2xs"
          />
          <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.16em] text-[#381B03] group-hover:text-[#180801] uppercase font-bold flex items-center gap-1.5 transition-colors">
            <span className="opacity-40 font-light">|</span>
            <span>The Photographer House</span>
          </span>
        </motion.a>

        {/* Text Hierarchy with Proper Airy Gap after TPH logo */}
        <div className="relative pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 px-4 flex flex-col items-center">
          {/* Invitation from our son RITHVIK — grouped with Raj & Chandrani details */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.65, delay: 0.25, ease: 'easeOut' }}
            className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.22em] text-[#4A2707] uppercase font-bold mb-2 sm:mb-2.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.95)]"
          >
            Invitation from our son RITHVIK
          </motion.span>

          {/* Line 1: Names (Increased size) */}
          <motion.span
            initial={{ opacity: 0, y: -16 }}
            animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="font-cinzel text-sm sm:text-base tracking-[0.26em] text-[#281204] uppercase font-extrabold leading-none drop-shadow-[0_1px_1.5px_rgba(255,255,255,0.95)]"
          >
            RAJ &amp; CHANDRANI
          </motion.span>

          {/* Line 2: 25th Wedding Anniversary (Reduced size) */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={animateIn ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.85, delay: 0.45, ease: 'easeOut' }}
            className="font-script-romantic text-2xl sm:text-3xl text-[#0C0502] mt-1.5 mb-1 leading-[1.1] drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)] whitespace-nowrap font-medium"
          >
            25th Wedding Anniversary
          </motion.h1>

          {/* Line 3: Date only (Increased size) */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.58, ease: 'easeOut' }}
            className="font-serif-luxury text-[15px] sm:text-[17px] text-[#1F0D04] font-bold tracking-wider leading-none drop-shadow-[0_1px_1.5px_rgba(255,255,255,0.9)]"
          >
            Saturday, 23rd January 2027
          </motion.span>
        </div>
      </div>

      {/* 3. Bottom Position: Scroll */}
      <div className="relative z-10 pb-5 sm:pb-6 px-4 flex flex-col items-center">
        {/* SCROLL with continuous all-time floating animation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={animateIn ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.65, delay: 0.85, ease: 'easeOut' }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};
