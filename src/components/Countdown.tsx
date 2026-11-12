// ponytail: mobile-first Save the Date with only calendar in luxury card div and red heart on anniversary date
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      className="relative w-full text-[#150C07] py-10 sm:py-14 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden border-b border-[#D5C0A5]/40 text-center"
    >
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header with appear animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <span className="font-cinzel text-xs sm:text-[13px] md:text-sm tracking-[0.28em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            SAVE THE DATE
          </span>

          <h2 className="font-script-romantic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
            Save the Date
          </h2>

          <p className="font-serif-luxury italic text-sm sm:text-[15px] md:text-base text-[#22130A] font-semibold leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-2 mb-8 md:mb-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            Two lives, twenty-five years, and a lifetime of shared memories. We warmly invite you to join our family as we celebrate our silver jubilee.
          </p>
        </motion.div>

        {/* ONLY THE CALENDAR PART INSIDE LUXURY CARD DIV with appear animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="w-full max-w-[340px] sm:max-w-[360px] md:max-w-[390px] lg:max-w-[420px] rounded-[28px] border border-[#C5A77B]/70 bg-gradient-to-b from-[#FBF2E3]/95 via-[#F4E4CB]/90 to-[#EAD4B4]/95 backdrop-blur-md p-3.5 sm:p-6 md:p-7 shadow-[0_10px_25px_rgba(84,47,7,0.12)] flex flex-col items-center"
        >
          
          {/* Month & Year Title */}
          <div className="flex items-baseline justify-center gap-2 mb-3 md:mb-4">
            <span className="font-script-romantic text-2xl sm:text-3xl md:text-4xl text-[#0F0804] leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              January
            </span>
            <span className="font-cinzel text-sm sm:text-base md:text-lg font-bold tracking-[0.2em] text-[#784A15]">
              2027
            </span>
          </div>

          {/* Calendar Month Grid */}
          <div className="w-full max-w-full sm:max-w-[290px] md:max-w-[330px]">
            {/* Days of the Week */}
            <div className="grid grid-cols-7 text-center font-sans-clean text-xs sm:text-[13px] md:text-sm font-bold text-[#784A15] pb-2 border-b border-[#C5A77B]/60">
              <span>S</span>
              <span>M</span>
              <span>T</span>
              <span>W</span>
              <span>T</span>
              <span>F</span>
              <span>S</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-y-1 text-center pt-2 font-sans-clean text-xs sm:text-[13px] md:text-sm font-bold">
              {/* Blank offset days (Sun - Thu) */}
              {blankDays.map((i) => (
                <div key={`blank-${i}`} className="h-7 sm:h-8 md:h-9" />
              ))}

              {/* Days 1 - 31 */}
              {daysInMonth.map((day) => {
                const isAnniversaryDay = day === 23;
                if (isAnniversaryDay) {
                  return (
                    <div key={`day-${day}`} className="relative flex items-center justify-center h-7 sm:h-8 md:h-9">
                      {/* All-time pulsating golden halo around Day 23 */}
                      <motion.div
                        animate={{
                          boxShadow: [
                            '0 0 0 0 rgba(184,124,41,0.55)',
                            '0 0 0 7px rgba(184,124,41,0)',
                            '0 0 0 0 rgba(184,124,41,0)',
                          ],
                        }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-[#090909] font-bold flex items-center justify-center shadow-xs ring-2 ring-[#B87C29]/50 scale-105"
                      >
                        <span className="text-xs sm:text-[13px] md:text-sm font-bold">{day}</span>
                      </motion.div>
                      {/* Red Heart on Anniversary Date with all-time heartbeat animation */}
                      <motion.div
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                        className="absolute -top-1.5 right-1/2 translate-x-3 pointer-events-none drop-shadow-xs"
                      >
                        <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-600 fill-red-600" />
                      </motion.div>
                    </div>
                  );
                }
                return (
                  <div
                    key={`day-${day}`}
                    className="h-7 sm:h-8 md:h-9 flex items-center justify-center text-[#1C1108]"
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>

        </motion.div>

        {/* OUTSIDE THE CARD: Countdown Sub-heading directly on parchment */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-xs sm:text-[13px] md:text-sm font-bold tracking-[0.25em] text-[#542F07] uppercase block mt-7 md:mt-9 mb-3 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
        >
          TIME REMAINING
        </motion.span>

        {/* 4 Stats Row directly on page background with appear animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-4 max-w-[320px] sm:max-w-[360px] md:max-w-md lg:max-w-xl w-full mx-auto text-center mb-6 md:mb-8 divide-x divide-[#D5C0A5]/70"
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center px-1 sm:px-2 md:px-4">
              <span className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#0F0804] tabular-nums leading-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                {item.value}
              </span>
              <span className="font-sans-clean text-xs sm:text-[13px] md:text-sm tracking-[0.16em] text-[#542F07] uppercase font-bold mt-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Action Button: Add to Calendar directly on parchment with all-time gentle breathing */}
        <motion.a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -2.5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          className="inline-flex items-center gap-1.5 px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 rounded-full border border-[#B87C29] bg-[#FAF3E8]/90 hover:bg-[#FAF3E8] text-[#150C07] font-sans-clean text-xs sm:text-sm md:text-base font-bold shadow-xs transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-[#B87C29]" />
          <span>Add to Calendar</span>
        </motion.a>

      </div>
    </section>
  );
};
