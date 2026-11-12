// ponytail: Welcome Story 3D coverflow carousel matching user reference design
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { storyPhotos } from '../assets';

export const WelcomeStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = storyPhotos.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="welcome-story"
      className="relative text-[#2A1E17] py-10 sm:py-12 text-center overflow-hidden border-b border-[#D5C0A5]/40"
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center px-3 sm:px-4">
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
            OUR JOURNEY
          </span>

          {/* Script Title */}
          <h2 className="font-script-romantic text-3xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
            Moments of Our Journey
          </h2>

          {/* Paragraph with tuned margin matching other sections' visual gap */}
          <p className="font-serif-luxury italic text-sm text-[#22130A] font-semibold leading-relaxed max-w-sm mt-2 mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            Twenty-five years of cherished memories, shared laughter, and enduring love.
          </p>
        </motion.div>
      </div>

      {/* 3D Coverflow Carousel Container with appear animation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        className="relative w-full max-w-[440px] mx-auto px-2 sm:px-3 flex flex-col items-center"
      >
        {/* Cards Track with drag / swipe support - shadow fully contained inside div */}
        <motion.div
          className="relative w-full h-[280px] sm:h-[295px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing py-3"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x > 40) {
              handlePrev();
            } else if (info.offset.x < -40) {
              handleNext();
            }
          }}
        >
          {storyPhotos.map((photo, idx) => {
            const total = storyPhotos.length;
            let diff = (idx - currentIndex + total) % total;
            if (diff > total / 2) diff -= total; // -1, 0, 1, 2

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;

            // Anchor cards at left: 50% so positions are mathematically locked inside container
            let xOffset = '-50%';
            let rotate = 0;
            let scale = 1.05;
            let zIndex = 30;
            let opacity = 1;

            if (isCenter) {
              xOffset = '-50%';
              rotate = 0;
              scale = 1.05;
              zIndex = 30;
              opacity = 1;
            } else if (isLeft) {
              xOffset = '-91%';
              rotate = -4;
              scale = 0.82;
              zIndex = 20;
              opacity = 0.88;
            } else if (isRight) {
              xOffset = '-9%';
              rotate = 4;
              scale = 0.82;
              zIndex = 20;
              opacity = 0.88;
            } else {
              xOffset = diff < 0 ? '-140%' : '40%';
              rotate = 0;
              scale = 0.7;
              zIndex = 10;
              opacity = 0;
            }

            return (
              <motion.div
                key={photo.id}
                style={{ left: '50%' }}
                animate={{
                  x: xOffset,
                  rotate,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                }}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                className={`absolute top-1/2 -translate-y-1/2 w-[58%] aspect-square rounded-2xl overflow-hidden cursor-pointer transition-shadow ${
                  isCenter
                    ? 'border-2 border-[#B87C29] ring-2 ring-[#F4DCB3] shadow-[0_4px_16px_rgba(84,47,7,0.24)]'
                    : 'border-2 border-[#D5C0A5]/90 shadow-[0_3px_10px_rgba(84,47,7,0.18)] hover:opacity-100'
                }`}
              >
                <img
                  src={photo.img}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center pointer-events-none"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Controls: Previous button, Stepper Dots, Next button styled like Add to Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3.5 mt-4 px-3 sm:px-4"
        >
            {/* Prev Button (Icon only) */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handlePrev}
              aria-label="Previous photo"
              className="w-8 h-8 rounded-full border border-[#B87C29] bg-[#FAF3E8]/90 hover:bg-[#FAF3E8] text-[#150C07] shadow-xs transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#B87C29]" />
            </motion.button>

            {/* Stepper Dots Indicator */}
            <div className="flex items-center justify-center gap-1 px-1">
              {storyPhotos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View photo ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-4 bg-[#542F07] shadow-xs'
                      : 'w-1.5 bg-[#C5A77B]/60 hover:bg-[#8C5D23]/60'
                  }`}
                />
              ))}
            </div>

            {/* Next Button (Icon only) */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleNext}
              aria-label="Next photo"
              className="w-8 h-8 rounded-full border border-[#B87C29] bg-[#FAF3E8]/90 hover:bg-[#FAF3E8] text-[#150C07] shadow-xs transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 text-[#B87C29]" />
            </motion.button>
          </motion.div>
        </motion.div>
    </section>
  );
};
