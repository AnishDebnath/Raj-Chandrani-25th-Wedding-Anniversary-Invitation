// ponytail: mobile-first Save the Date with only calendar in luxury card div and red heart on anniversary date
import React, { useState, useEffect } from 'react';
import { Calendar, Heart } from 'lucide-react';
import { calculateCountdown, padZero, CountdownTime } from '../utils/countdown';
import { createGoogleCalendarUrl } from '../utils/rsvp';

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
    { label: 'Mins', value: padZero(timeLeft.minutes) },
    { label: 'Secs', value: padZero(timeLeft.seconds) },
  ];

  const calendarUrl = createGoogleCalendarUrl();

  // Calendar calculations for January 2027:
  // Jan 1, 2027 is a Friday (day 5, 0=Sun) -> 5 blank offset days
  const blankDays = [0, 1, 2, 3, 4];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section
      id="countdown"
      className="relative text-[#150C07] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/40 text-center"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.32em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          SAVE THE DATE
        </span>

        <h2 className="font-script-romantic text-4xl sm:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          Save the Date
        </h2>

        <p className="font-serif-luxury italic text-xs sm:text-[13.5px] text-[#22130A] font-semibold leading-relaxed max-w-[340px] sm:max-w-sm mt-2 mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          Two lives, twenty-five years, and a lifetime of shared memories. We warmly invite you to join our family as we celebrate our silver jubilee.
        </p>

        {/* ONLY THE CALENDAR PART INSIDE LUXURY CARD DIV */}
        <div className="w-full max-w-[310px] sm:max-w-[330px] rounded-[28px] border border-[#C5A77B]/70 bg-gradient-to-b from-[#FBF2E3]/95 via-[#F4E4CB]/90 to-[#EAD4B4]/95 backdrop-blur-md p-5 sm:p-6 shadow-[0_10px_25px_rgba(84,47,7,0.12)] flex flex-col items-center">
          
          {/* Month & Year Title */}
          <div className="flex items-baseline justify-center gap-2 mb-3">
            <span className="font-script-romantic text-3xl sm:text-4xl text-[#0F0804] leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              January
            </span>
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] text-[#784A15]">
              2027
            </span>
          </div>

          {/* Calendar Month Grid */}
          <div className="w-full max-w-[270px] sm:max-w-[290px]">
            {/* Days of the Week */}
            <div className="grid grid-cols-7 text-center font-sans-clean text-[11px] sm:text-xs font-bold text-[#784A15] pb-2 border-b border-[#C5A77B]/60">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-1 text-center pt-2 font-sans-clean text-xs sm:text-[13px] font-bold">
              {/* Blank offset days (Sun - Thu) */}
              {blankDays.map((i) => (
                <div key={`blank-${i}`} className="h-7 sm:h-8" />
              ))}

              {/* Days 1 - 31 */}
              {daysInMonth.map((day) => {
                const isAnniversaryDay = day === 23;
                if (isAnniversaryDay) {
                  return (
                    <div key={`day-${day}`} className="relative flex items-center justify-center h-7 sm:h-8">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-[#090909] font-bold flex items-center justify-center shadow-xs ring-2 ring-[#B87C29]/50 scale-105">
                        <span className="text-xs sm:text-[13px] font-bold">{day}</span>
                      </div>
                      {/* Red Heart on Anniversary Date */}
                      <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600 absolute -top-1.5 right-1/2 translate-x-3 pointer-events-none drop-shadow-xs" />
                    </div>
                  );
                }
                return (
                  <div
                    key={`day-${day}`}
                    className="h-7 sm:h-8 flex items-center justify-center text-[#1C1108]"
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* OUTSIDE THE CARD: Countdown Sub-heading directly on parchment */}
        <span className="font-cinzel text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#542F07] uppercase block mt-7 mb-3 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
          TIME REMAINING
        </span>

        {/* 4 Stats Row directly on page background */}
        <div className="grid grid-cols-4 max-w-[270px] sm:max-w-[310px] w-full mx-auto text-center mb-6 divide-x divide-[#D5C0A5]/70">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center px-1">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0F0804] tabular-nums leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                {item.value}
              </span>
              <span className="font-sans-clean text-[9px] sm:text-[9.5px] tracking-[0.18em] text-[#542F07] uppercase font-bold mt-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button: Add to Calendar directly on parchment */}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#B87C29] bg-[#FAF3E8]/90 hover:bg-[#FAF3E8] text-[#150C07] font-sans-clean text-xs font-bold shadow-xs transition-all hover:scale-105 active:scale-95 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]"
        >
          <Calendar className="w-3.5 h-3.5 text-[#B87C29]" />
          <span>Add to Calendar</span>
        </a>

      </div>
    </section>
  );
};
