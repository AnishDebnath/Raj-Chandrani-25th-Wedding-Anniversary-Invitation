// ponytail: mobile-first family messages section with stacked card layout matching reference image
import React, { useState } from 'react';

interface FamilyMessage {
  chapter: string;
  name: string;
  relation: string;
  title: string;
  excerpt: string;
  fullMessage: string;
}

const MESSAGES: FamilyMessage[] = [
  {
    chapter: 'MESSAGE 01',
    name: 'Rithvik',
    relation: 'Son',
    title: "A Son's Blessing",
    excerpt:
      'Growing up surrounded by Ma and Baba’s gentle love, laughter, and unbreakable partnership has been the greatest blessing of my life...',
    fullMessage:
      'Growing up surrounded by Ma and Baba’s gentle love, laughter, and unbreakable partnership has been the greatest blessing of my life. Your presence on this silver jubilee evening will make our celebration truly complete. We eagerly look forward to welcoming you!',
  },
  {
    chapter: 'MESSAGE 02',
    name: 'Raj & Chandrani',
    relation: 'The Couple',
    title: 'From Our Hearts',
    excerpt:
      'Twenty-five years have felt like a brief, beautiful morning because of the love, guidance, and warmth of family and dear friends like you...',
    fullMessage:
      'Twenty-five years have felt like a brief, beautiful morning because of the love, guidance, and warmth of family and dear friends like you. We are immensely grateful to celebrate this milestone together and cannot wait to raise a toast with each of you.',
  },
  {
    chapter: 'MESSAGE 03',
    name: 'Elders & Family',
    relation: 'With Blessings',
    title: 'Auspicious Blessings',
    excerpt:
      'With heartfelt gratitude to the Almighty and the sacred memory of our elders whose grace guides every step of our family...',
    fullMessage:
      'With heartfelt gratitude to the Almighty and the sacred memory of our elders whose grace guides every step. We warmly welcome you to join our family in sharing love, auspicious blessings, and joyful memories.',
  },
];

export const FamilyMessages: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const current = MESSAGES[activeIdx];

  const handleNext = () => {
    setIsExpanded(false);
    setActiveIdx((prev) => (prev + 1) % MESSAGES.length);
  };

  return (
    <section
      id="family-messages"
      className="relative text-[#150C07] py-10 sm:py-14 md:py-16 px-3 sm:px-4 md:px-6 overflow-hidden border-b border-[#D5C0A5]/50 text-center"
    >
      <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <span className="font-cinzel text-[11px] sm:text-xs md:text-sm lg:text-[15px] tracking-[0.32em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          HOW IT BEGAN
        </span>

        <h2 className="font-script-romantic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          The Golden Chapter
        </h2>

        <p className="font-serif-luxury italic text-xs sm:text-sm md:text-base lg:text-lg text-[#22130A] font-semibold leading-relaxed max-w-[290px] sm:max-w-sm md:max-w-xl lg:max-w-2xl mt-2 mb-8 md:mb-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          From a chance encounter in Kolkata to a quarter-century of devotion, here is a personal message of gratitude from our family to yours.
        </p>

        {/* Stacked Layered Card Container */}
        <div className="relative w-full max-w-[295px] sm:max-w-[360px] md:max-w-xl lg:max-w-2xl mx-auto">
          
          {/* Background Card Layer (Stack effect) */}
          <div className="absolute inset-0 rounded-3xl border border-[#C5A77B]/50 bg-[#E8D4B4]/40 transform translate-y-2 translate-x-1.5 sm:translate-y-2.5 sm:translate-x-2 -z-10 shadow-xs" />

          {/* Foreground Main Card with warm theme-matched parchment background */}
          <div className="relative rounded-3xl border border-[#C5A77B]/70 bg-gradient-to-b from-[#FBF2E3]/95 via-[#F4E4CB]/90 to-[#EAD4B4]/95 backdrop-blur-md p-4 sm:p-8 md:p-10 shadow-[0_10px_25px_rgba(84,47,7,0.12)] flex flex-col items-center text-center">
            
            {/* Card Kicker (e.g. CHAPTER 01) */}
            <span className="font-cinzel text-[10px] sm:text-xs md:text-sm tracking-[0.22em] sm:tracking-[0.25em] text-[#8C5D23] font-bold uppercase mb-1">
              {current.chapter} · {current.relation}
            </span>

            {/* Script Title (e.g. Between the Pages) */}
            <h3 className="font-script-romantic text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl text-[#150C07] leading-tight my-1.5">
              {current.title}
            </h3>

            {/* Message Excerpt / Full Body */}
            <p className="font-serif-luxury text-[12.5px] sm:text-[14.5px] md:text-base lg:text-lg text-[#2E1E14] leading-relaxed my-3.5 md:my-5 min-h-[90px] md:min-h-[105px] flex items-center justify-center">
              &ldquo;{isExpanded ? current.fullMessage : current.excerpt}&rdquo;
            </p>

            {/* Author Attribution */}
            <span className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-wider text-[#542F07] mb-5 md:mb-6">
              — {current.name}
            </span>

            {/* Stepper Dots */}
            <div className="flex items-center justify-center gap-1.5 mb-5 md:mb-6">
              {MESSAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setIsExpanded(false);
                    setActiveIdx(idx);
                  }}
                  aria-label={`View message ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeIdx === idx
                      ? 'w-6 bg-[#251D24]'
                      : 'w-1.5 bg-[#D5C0A5] hover:bg-[#8C5D23]'
                  }`}
                />
              ))}
            </div>

            {/* Dark Action Button matching reference */}
            <button
              type="button"
              onClick={handleNext}
              className="w-full max-w-sm py-3 md:py-3.5 px-4 rounded-xl bg-[#251D24] hover:bg-[#161115] text-white font-sans-clean font-bold text-xs md:text-sm tracking-widest uppercase transition-all shadow-sm active:scale-98 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>NEXT MESSAGE</span>
              <span className="text-[10px] md:text-xs opacity-75">({activeIdx + 1}/{MESSAGES.length})</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
