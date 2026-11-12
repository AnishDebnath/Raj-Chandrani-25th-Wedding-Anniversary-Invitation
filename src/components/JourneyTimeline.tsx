// ponytail: mobile-first storyline chapters without white background cards matching exact reference image
import React from 'react';
import { motion } from 'framer-motion';
import { journey1Img, journey2Img, journey3Img, heroCoupleImg } from '../assets';

interface StoryChapter {
  year: string;
  title: string;
  dropCap: string;
  restOfFirstWord: string;
  text: string;
  img: string;
  alt: string;
}

const CHAPTERS: StoryChapter[] = [
  {
    year: '2002',
    title: 'The Sacred Vows',
    dropCap: 'I',
    restOfFirstWord: 't',
    text: " was a sacred winter evening in Kolkata, beneath the glow of fragrant marigolds and chanting mantras. Raj and Chandrani took their seven pheras surrounded by the blessings of their elders, pledging lifelong laughter, mutual respect, and a love that would grow richer with every passing year.",
    img: journey1Img,
    alt: 'Raj and Chandrani wedding vows 2002',
  },
  {
    year: '2008',
    title: 'The Gift of Family',
    dropCap: 'W',
    restOfFirstWord: 'ith',
    text: " the arrival of their son Rithvik, their world blossomed with boundless happiness and shared purpose. Late-night giggles, school mornings, and quiet bedtime conversations transformed their house into a lively, warm home filled with gratitude and unconditional devotion.",
    img: journey2Img,
    alt: 'Welcoming their son Rithvik 2008',
  },
  {
    year: '2016',
    title: 'Adventures Hand in Hand',
    dropCap: 'T',
    restOfFirstWord: 'hrough',
    text: " every season and across memorable travels across India, they built an enduring tapestry of treasured memories. From quiet monsoon teas on their balcony to vibrant family celebrations, every chapter was written with patient grace and steadfast companionship.",
    img: journey3Img,
    alt: 'Family travels and joy 2016',
  },
  {
    year: '2027',
    title: 'A Silver Jubilee',
    dropCap: 'T',
    restOfFirstWord: 'wenty-five',
    text: " magnificent years of shared devotion, shared laughter, and unwavering faith bring us to this joyous milestone. Surrounded by cherished family and lifelong friends, we raise our glasses to celebrate 25 years of love—and a lifetime still to unfold.",
    img: heroCoupleImg,
    alt: 'Celebrating 25th Wedding Anniversary 2027',
  },
];

export const JourneyTimeline: React.FC = () => {
  return (
    <section
      id="journey"
      className="relative text-[#150C07] py-10 sm:py-14 md:py-16 px-3 sm:px-4 md:px-6 overflow-hidden border-b border-[#D5C0A5]/50"
    >
      {/* Section Header with appear animation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16"
      >
        <span className="font-cinzel text-xs sm:text-[13px] md:text-sm tracking-[0.28em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          OUR STORY
        </span>

        <h2 className="font-script-romantic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          Moments of Our Journey
        </h2>

        <p className="font-serif-luxury italic text-sm sm:text-[15px] md:text-base text-[#22130A] font-semibold leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          Twenty-five years of cherished memories, shared laughter, and enduring love.
        </p>
      </motion.div>

      {/* Chapters List */}
      <div className="max-w-md md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto space-y-11 sm:space-y-14 md:space-y-16">
        {CHAPTERS.map((chapter, idx) => {
          const isOdd = idx % 2 === 1;
          const is2027 = chapter.year === '2027';

          return (
            <motion.article
              key={chapter.year}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
              className="w-full md:grid md:grid-cols-2 md:gap-8 lg:gap-14 xl:gap-20 md:items-center"
            >
              {/* Photo Column */}
              <div className={`w-full ${isOdd ? 'md:order-2' : 'md:order-1'}`}>
                {/* Mobile-Only Heading (Year & Title above photo on mobile) */}
                <div className="md:hidden mb-1 px-0.5 text-left">
                  <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.25em] text-[#542F07] font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    {chapter.year}
                  </span>
                </div>
                <h3 className="md:hidden font-script-romantic text-2xl sm:text-3xl text-[#0F0804] leading-tight mb-2.5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
                  {chapter.title}
                </h3>

                {/* Story Photograph with all-time subtle golden glow on Silver Jubilee */}
                <motion.div
                  animate={
                    is2027
                      ? {
                          boxShadow: [
                            '0 4px 18px rgba(184,124,41,0.25)',
                            '0 8px 30px rgba(184,124,41,0.45)',
                            '0 4px 18px rgba(184,124,41,0.25)',
                          ],
                        }
                      : {}
                  }
                  transition={is2027 ? { repeat: Infinity, duration: 3.5, ease: 'easeInOut' } : undefined}
                  className="w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D5C0A5] shadow-md bg-black/5 mb-3.5 md:mb-0 group"
                >
                  <img
                    src={chapter.img}
                    alt={chapter.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Story Text Column */}
              <div className={`flex flex-col justify-center ${isOdd ? 'md:order-1' : 'md:order-2'}`}>
                {/* Desktop/Tablet-Only Heading (aligned beside photo) */}
                <div className="hidden md:block mb-1.5 px-0.5 text-left">
                  <span className="font-cinzel text-xs sm:text-sm md:text-base tracking-[0.25em] text-[#542F07] font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    {chapter.year}
                  </span>
                </div>
                <h3 className="hidden md:block font-script-romantic text-2xl sm:text-3xl md:text-[2.25rem] text-[#0F0804] leading-tight mb-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
                  {chapter.title}
                </h3>

                {/* Drop-Cap Editorial Story Paragraph */}
                <p className="font-serif-luxury text-sm sm:text-[15px] md:text-base text-[#1C1108] font-semibold leading-relaxed text-justify px-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
                  <span className="font-script-romantic text-4xl sm:text-5xl md:text-6xl text-[#0F0804] font-normal float-left leading-none pr-1.5 md:pr-2.5 pt-0.5 select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                    {chapter.dropCap}
                  </span>
                  <span>
                    {chapter.restOfFirstWord}
                    {chapter.text}
                  </span>
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
