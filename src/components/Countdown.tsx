// ponytail: mobile-first countdown styled for background.png
import React, { useState, useEffect } from 'react';
import { calculateCountdown, padZero, CountdownTime } from '../utils/countdown';
import { floralBorderLeftImg, floralBorderRightImg } from '../assets';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() => calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: padZero(timeLeft.hours) },
    { label: 'Minutes', value: padZero(timeLeft.minutes) },
    { label: 'Seconds', value: padZero(timeLeft.seconds) },
  ];

  return (
    <section
      id="countdown"
      className="relative text-[#2A1E17] py-7 sm:py-9 px-3 overflow-hidden border-y border-[#D5C0A5]/60"
    >
      {/* Botanical floral foliage flanking left and right */}
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 pointer-events-none opacity-80 overflow-hidden flex flex-col justify-between">
        <img src={floralBorderLeftImg} alt="" className="w-full h-auto object-contain" aria-hidden="true" />
      </div>
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 pointer-events-none opacity-80 overflow-hidden flex flex-col justify-between">
        <img src={floralBorderRightImg} alt="" className="w-full h-auto object-contain" aria-hidden="true" />
      </div>

      <div className="max-w-md mx-auto text-center relative z-10">
        <h2 className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] text-[#2A1E17] uppercase">
          COUNTDOWN TO OUR SPECIAL DAY
        </h2>

        <p className="font-serif-luxury italic text-[11px] sm:text-xs text-[#6E5542] mt-0.5 mb-4">
          We can&apos;t wait to celebrate with you!
        </p>

        {/* 4 Raised Ivory Countdown Cards */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 max-w-xs sm:max-w-sm mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center py-2 sm:py-2.5 px-1 rounded-xl bg-white/80 backdrop-blur-[2px] border border-[#D5C0A5] shadow-xs"
            >
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#2A1E17] tabular-nums leading-none">
                {item.value}
              </span>
              <span className="font-serif-luxury text-[9px] sm:text-[10px] text-[#7D634E] mt-1 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
