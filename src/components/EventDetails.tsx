// ponytail: mobile-first event details styled for background.png
import React from 'react';
import { Users, Mic, Cake, Utensils } from 'lucide-react';

const EVENTS = [
  {
    icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5D23]" />,
    title: 'Welcome & Registration',
    time: '6:00 PM Onwards',
  },
  {
    icon: <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5D23]" />,
    title: 'Song Performance by Singers',
    time: '7:00 PM',
  },
  {
    icon: <Cake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5D23]" />,
    title: 'Cake Cutting & Mala Bodol',
    time: '8:30 PM',
  },
  {
    icon: <Utensils className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5D23]" />,
    title: 'Celebration Dinner',
    time: '9:00 PM',
  },
];

export const EventDetails: React.FC = () => {
  return (
    <section
      id="event-details"
      className="relative text-[#2A1E17] py-7 sm:py-9 px-2 sm:px-3 overflow-hidden border-b border-[#D5C0A5]/60"
    >
      <div className="max-w-md mx-auto relative z-10 text-center">
        
        {/* Headings */}
        <h2 className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] text-[#8C5D23] uppercase">
          EVENT DETAILS
        </h2>
        <p className="font-serif-luxury italic text-[11px] sm:text-xs text-[#5E4738] mt-0.5 mb-4">
          Join us for an evening of love, memories and celebration
        </p>

        {/* 4-Column Layout with Delicate Dividers */}
        <div className="grid grid-cols-4 divide-x divide-[#D5C0A5]/60">
          {EVENTS.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-1 sm:px-1.5"
            >
              {/* Circular Gold Outlined Badge */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#D5C0A5] bg-white/80 backdrop-blur-[2px] flex items-center justify-center mb-1.5 shadow-xs shrink-0">
                {event.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif-luxury text-[8.5px] sm:text-[10px] font-semibold text-[#2A1E17] leading-tight min-h-[30px] flex items-center justify-center">
                {event.title}
              </h3>

              {/* Time */}
              <span className="font-sans-clean text-[7.5px] sm:text-[9px] font-medium text-[#8C5D23] mt-1 whitespace-nowrap">
                {event.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
