// ponytail: single personal family message showcase with clean luxury card layout
import React from 'react';
import { motion } from 'framer-motion';

export const FamilyMessages: React.FC = () => {
  return (
    <section
      id="family-messages"
      className="relative text-[#150C07] py-10 sm:py-12 px-3 sm:px-4 overflow-hidden border-b border-[#D5C0A5]/50 text-center"
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
          <span className="font-cinzel text-xs tracking-[0.28em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            A MESSAGE OF GRATITUDE
          </span>

          <h2 className="font-script-romantic text-3xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
            A Son&apos;s Invitation
          </h2>

          <p className="font-serif-luxury italic text-sm text-[#22130A] font-semibold leading-relaxed max-w-sm mt-2 mb-7 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            As Raj &amp; Chandrani complete 25 golden years of togetherness, here is a personal message of love and gratitude from their son Rithvik.
          </p>
        </motion.div>

        {/* Stacked Layered Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative w-full max-w-[330px] sm:max-w-[350px] mx-auto"
        >
          {/* Background Card Layer (Stack effect) */}
          <div className="absolute inset-0 rounded-3xl border border-[#C5A77B]/50 bg-[#E8D4B4]/40 transform translate-y-2 translate-x-1.5 -z-10 shadow-xs" />

          {/* Foreground Main Card with warm theme-matched parchment background */}
          <div className="relative rounded-3xl border border-[#C5A77B]/70 bg-gradient-to-b from-[#FBF2E3]/95 via-[#F4E4CB]/90 to-[#EAD4B4]/95 backdrop-blur-md p-5 sm:p-6 shadow-[0_10px_25px_rgba(84,47,7,0.12)] flex flex-col items-center text-center">
            {/* Card Kicker */}
            <span className="font-cinzel text-xs tracking-[0.22em] text-[#8C5D23] font-bold uppercase mb-1">
              INVITATION FROM OUR SON
            </span>

            {/* Script Title */}
            <h3 className="font-script-romantic text-2xl text-[#150C07] leading-tight my-1">
              With Love &amp; Respect
            </h3>

            {/* Message Body */}
            <p className="font-serif-luxury italic text-sm text-[#2E1E14] leading-relaxed my-3">
              &ldquo;Growing up surrounded by Ma and Baba’s gentle love, laughter, and unbreakable partnership has been the greatest blessing of my life. As we celebrate 25 golden years of their marriage, your gracious presence on this silver jubilee evening will make our celebration truly complete. We eagerly look forward to welcoming you!&rdquo;
            </p>

            {/* Author Attribution */}
            <span className="font-cinzel text-xs font-bold tracking-wider text-[#542F07] mt-1">
              — Rithvik
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
