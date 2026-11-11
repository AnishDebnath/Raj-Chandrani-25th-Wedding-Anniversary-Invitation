// ponytail: mobile-first storyline chapters without white background cards matching exact reference image
import React from 'react';
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
      className="relative text-[#150C07] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/50"
    >
      {/* Section Header */}
      <div className="max-w-md mx-auto flex flex-col items-center text-center mb-10 sm:mb-12">
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.32em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          OUR STORY
        </span>

        <h2 className="font-script-romantic text-4xl sm:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          Moments of Our Journey
        </h2>

        <p className="font-serif-luxury italic text-xs sm:text-[13.5px] text-[#22130A] font-semibold leading-relaxed max-w-[340px] sm:max-w-sm mt-2 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          Twenty-five years of cherished memories, shared laughter, and enduring love.
        </p>
      </div>

      {/* Chapters List - Directly on seamless parchment without white cards */}
      <div className="max-w-md mx-auto space-y-12 sm:space-y-14">
        {CHAPTERS.map((chapter) => (
          <article key={chapter.year} className="w-full">
            
            {/* Year on the left side (replacing index number) */}
            <div className="mb-1.5 px-0.5 text-left">
              <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.32em] text-[#542F07] font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                {chapter.year}
              </span>
            </div>

            {/* Script Chapter Title */}
            <h3 className="font-script-romantic text-3xl sm:text-4xl text-[#0F0804] leading-tight mb-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
              {chapter.title}
            </h3>

            {/* Story Photograph */}
            <div className="w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D5C0A5] shadow-md bg-black/5 mb-3.5 group">
              <img
                src={chapter.img}
                alt={chapter.alt}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                loading="lazy"
              />
            </div>

            {/* Drop-Cap Editorial Story Paragraph */}
            <p className="font-serif-luxury text-[13.5px] sm:text-[14.5px] text-[#1C1108] font-semibold leading-relaxed text-justify px-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
              <span className="font-script-romantic text-4xl sm:text-5xl text-[#0F0804] font-normal float-left leading-none pr-1.5 pt-0.5 select-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                {chapter.dropCap}
              </span>
              <span>
                {chapter.restOfFirstWord}
                {chapter.text}
              </span>
            </p>

          </article>
        ))}
      </div>
    </section>
  );
};
