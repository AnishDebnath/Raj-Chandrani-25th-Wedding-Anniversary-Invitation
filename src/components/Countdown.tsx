// ponytail: mobile-first Save the Date calendar & countdown matching prototype layout
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
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/50 text-center"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        
        {/* Kicker */}
        <span className="font-cinzel text-[10.5px] sm:text-xs tracking-[0.32em] text-[#8C5D23] uppercase font-semibold leading-none mb-1.5">
          SAVE THE DATE
        </span>

        {/* Script Title */}
        <h2 className="font-script-romantic text-4xl sm:text-5xl text-[#2A1E17] leading-tight my-1 drop-shadow-xs">
          Save the Date
        </h2>

        {/* Paragraph */}
        <p className="font-serif-luxury italic text-xs sm:text-[13.5px] text-[#5C4535] leading-relaxed max-w-[340px] sm:max-w-sm mt-2 mb-7">
          Two lives, twenty-five years, and a lifetime of shared memories. We warmly invite you to join our family as we celebrate our silver jubilee.
        </p>

        {/* Month & Year Title */}
        <div className="flex items-baseline justify-center gap-2 mb-3">
          <span className="font-script-romantic text-3xl sm:text-4xl text-[#2A1E17] leading-none">
            January
          </span>
          <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] text-[#8C5D23]">
            2027
          </span>
        </div>

        {/* Calendar Month Grid */}
        <div className="w-full max-w-[290px] sm:max-w-[320px] mb-8">
          {/* Days of the Week */}
          <div className="grid grid-cols-7 text-center font-sans-clean text-[11px] sm:text-xs font-semibold text-[#8C5D23]/90 pb-2 border-b border-[#D5C0A5]/60">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-y-1.5 text-center pt-2.5 font-sans-clean text-xs sm:text-[13px] font-medium">
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
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-[#090909] font-bold flex items-center justify-center shadow-xs ring-2 ring-[#B87C29]/40 scale-105">
                      <span className="text-xs sm:text-[13px] font-bold">{day}</span>
                    </div>
                    <Heart className="w-2.5 h-2.5 text-[#B87C29] fill-[#B87C29] absolute -top-1.5 right-1/2 translate-x-3 pointer-events-none" />
                  </div>
                );
              }
              return (
                <div
                  key={`day-${day}`}
                  className="h-7 sm:h-8 flex items-center justify-center text-[#4A392F]"
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* Countdown Sub-heading */}
        <span className="font-cinzel text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.3em] text-[#8C5D23] uppercase block mb-3">
          COUNTDOWN
        </span>

        {/* 4 Clean Stats Row directly on page background */}
        <div className="grid grid-cols-4 max-w-[270px] sm:max-w-[310px] w-full mx-auto text-center mb-5 divide-x divide-[#D5C0A5]/60">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center px-1">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#2A1E17] tabular-nums leading-none">
                {item.value}
              </span>
              <span className="font-sans-clean text-[9px] sm:text-[9.5px] tracking-[0.18em] text-[#8C5D23] uppercase font-semibold mt-1.5">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button: Add to Calendar */}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#B87C29] bg-white/70 hover:bg-white text-[#2A1E17] font-sans-clean text-[11px] font-semibold shadow-2xs transition-all hover:scale-105 active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5 text-[#B87C29]" />
          <span>Add to Calendar</span>
        </a>

        {/* Subtle Horizontal Divider */}
        <div className="w-20 h-px bg-[#D5C0A5]/70 mx-auto mt-6" />

      </div>
    </section>
  );
};
