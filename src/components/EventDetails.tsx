// ponytail: mobile-first evening details with identical mobile font size on all devices
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Mic, Cake, Utensils } from 'lucide-react';
import { createGoogleCalendarUrl } from '../utils/rsvp';

interface ItineraryItem {
  time: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: React.ReactNode;
}

const EVENTS: ItineraryItem[] = [
  {
    time: '6:00 PM',
    title: 'Program Starts',
    subtitle: '6:00 PM Onwards',
    description: 'The program commences by 6:00 PM onwards as we warmly welcome all guests.',
    icon: <Users className="w-4 h-4 text-[#542F07]" />,
  },
  {
    time: '7:00 PM',
    title: 'Song Performance',
    subtitle: 'Female & Male Singers',
    description: 'A delightful song performance by female & male singers.',
    icon: <Mic className="w-4 h-4 text-[#542F07]" />,
  },
  {
    time: '8:30 PM',
    title: 'Cake Cutting Ceremony & Mala Bodol',
    subtitle: 'Ceremony',
    description: 'Cake cutting ceremony & traditional mala bodol commemorating 25 golden years.',
    icon: <Cake className="w-4 h-4 text-[#542F07]" />,
  },
  {
    time: '9:00 PM',
    title: 'Dinner',
    subtitle: 'Celebratory Feast',
    description: 'A grand celebratory dinner served for all guests.',
    icon: <Utensils className="w-4 h-4 text-[#542F07]" />,
  },
];

export const EventDetails: React.FC = () => {
  const calendarUrl = createGoogleCalendarUrl();

  return (
    <section
      id="event-details"
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
          <span className="font-cinzel text-xs tracking-[0.28em] text-[#3B1F04] uppercase font-extrabold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.95)]">
            ANNIVERSARY PROGRAM
          </span>

          <h2 className="font-script-romantic text-3xl text-[#0C0502] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] font-normal">
            Order of Events
          </h2>

          <p className="font-serif-luxury italic text-sm text-[#120803] font-bold leading-relaxed max-w-sm mt-2 mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            Saturday evening, 23rd January 2027 · The program starts by 6:00 PM onwards at ADB MANOR.
          </p>
        </motion.div>

        {/* Timeline with Center Milestone Icons and High-Contrast Text */}
        <div className="relative w-full max-w-[390px] mx-auto mb-8">
          {/* Continuous Center Hairline */}
          <div className="absolute top-4 bottom-6 left-1/2 -translate-x-1/2 w-px bg-[#C8B39B] pointer-events-none" />

          {/* Timeline Nodes with appear animations */}
          <div className="space-y-8 sm:space-y-10 relative z-10">
            {EVENTS.map((event, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: idx * 0.1, ease: 'easeOut' }}
                  className="relative flex items-start"
                >
                  {/* Left Column (50% width) */}
                  <div className={`w-1/2 pr-4 sm:pr-5 text-right ${isLeft ? 'block' : 'invisible'}`}>
                    {isLeft && (
                      <div>
                        <span className="font-cinzel text-xs font-extrabold text-[#0C0502] tracking-wider block mb-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                          {event.time}
                        </span>

                        <h3 className="font-serif-luxury font-bold text-sm text-[#0C0502] leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                          {event.title}
                        </h3>

                        {event.subtitle && (
                          <span className="font-serif-luxury italic text-xs text-[#3B1F04] font-bold block leading-tight my-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                            {event.subtitle}
                          </span>
                        )}

                        <p className="font-serif-luxury text-[13px] text-[#100703] leading-relaxed mt-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] font-bold">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Timeline Icon Badge */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2.6, delay: idx * 0.5, ease: 'easeInOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full border border-[#B87C29] bg-[#FAF3E8] shadow-sm flex items-center justify-center shrink-0 z-20 ring-4 ring-[#F4DCB3]"
                  >
                    {event.icon}
                  </motion.div>

                  {/* Right Column (50% width) */}
                  <div className={`w-1/2 pl-4 sm:pl-5 text-left ${!isLeft ? 'block' : 'invisible'}`}>
                    {!isLeft && (
                      <div>
                        <span className="font-cinzel text-xs font-extrabold text-[#0C0502] tracking-wider block mb-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                          {event.time}
                        </span>

                        <h3 className="font-serif-luxury font-bold text-sm text-[#0C0502] leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.85)]">
                          {event.title}
                        </h3>

                        {event.subtitle && (
                          <span className="font-serif-luxury italic text-xs text-[#3B1F04] font-bold block leading-tight my-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                            {event.subtitle}
                          </span>
                        )}

                        <p className="font-serif-luxury text-[13px] text-[#100703] leading-relaxed mt-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] font-bold">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Add to Calendar Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 flex justify-center"
        >
          <motion.a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -2.5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#B87C29] bg-[#FAF3E8]/90 hover:bg-[#FAF3E8] text-[#0C0502] font-sans-clean text-xs font-bold shadow-xs transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B87C29]" />
            <span>Add to Calendar</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
