// ponytail: mobile-first photographic footer with identical mobile font size on all devices
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronUp } from 'lucide-react';
import { footerImg } from '../assets';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative w-full overflow-hidden">
      {/* Full-width photo: 9:16 mobile aspect ratio on all devices */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-full aspect-[9/16] overflow-hidden"
      >
        {/* Couple Photograph with bidirectional mask blend */}
        <img
          src={footerImg}
          alt="Raj & Chandrani - 25 Years of Togetherness"
          className="w-full h-full object-cover object-[center_25%]"
          loading="lazy"
          decoding="async"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 10%, black 65%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 10%, black 65%, transparent 100%)',
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

        {/* Bottom Feathered Gradient Blend */}
        <div
          className="absolute inset-x-0 bottom-0 h-60 sm:h-72 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, #F4DCB3 0%, #F4DCB3 42%, rgba(244, 220, 179, 0.95) 65%, rgba(244, 220, 179, 0.5) 85%, transparent 100%)',
          }}
        />

        {/* Bottom text and button sitting on the parchment blend */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="absolute inset-x-0 bottom-0 pb-8 sm:pb-10 pt-16 px-4 flex flex-col items-center text-center z-20"
        >
          {/* Heart icon with all-time continuous heartbeat animation */}
          <motion.div
            animate={{ scale: [1, 1.28, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <Heart className="w-4 h-4 text-[#B87C29] fill-[#B87C29] mb-2 opacity-90 drop-shadow-xs" />
          </motion.div>

          <span className="font-cinzel text-xs font-bold tracking-[0.24em] uppercase text-[#180E08] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            25 YEARS OF TOGETHERNESS
          </span>

          <p className="font-cinzel text-[10px] tracking-[0.22em] text-[#542F07] uppercase font-bold mt-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            Invitation from our son RITHVIK
          </p>

          {/* Back To Top Button */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-4 inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#BFA075] bg-[#FAF2E3]/95 hover:bg-[#F3E2C7] active:scale-95 text-[#2A1E17] text-xs font-sans-clean font-bold tracking-[0.2em] uppercase transition-colors shadow-xs cursor-pointer hover:shadow-md"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronUp className="w-3.5 h-3.5 text-[#784A15]" />
            </motion.div>
            <span>BACK TO TOP</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};
