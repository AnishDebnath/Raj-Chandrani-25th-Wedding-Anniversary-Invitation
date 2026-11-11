// ponytail: mobile-first event details with refined padding & margins
import React from 'react';
import { Users, Mic, Cake, Utensils } from 'lucide-react';

const EVENTS = [
  {
    icon: <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8C5D23]" />,
    title: 'Welcome & Reception',
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
    title: 'Banquet Dinner',
    time: '9:00 PM',
  },
];

export const EventDetails: React.FC = () => {
  return (
    <section
      id="event-details"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/50"
    >
      <div className="max-w-md mx-auto relative z-10 text-center">
        
        {/* Headings */}
        <span className="font-cinzel text-xs sm:text-[13px] font-bold tracking-[0.28em] text-[#8C5D23] uppercase block mb-1.5">
          EVENT DETAILS
        </span>
        <h2 className="font-serif-luxury italic text-xs sm:text-sm text-[#5E4738] mt-1 mb-7">
          Join us for an evening of love, memories and celebration
        </h2>

        {/* 4-Column Layout with Delicate Dividers */}
        <div className="grid grid-cols-4 divide-x divide-[#D5C0A5]/60">
          {EVENTS.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-1.5 sm:px-2"
            >
              {/* Circular Gold Outlined Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#D5C0A5] bg-white/85 backdrop-blur-[2px] flex items-center justify-center mb-2 shadow-xs shrink-0">
                {event.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif-luxury text-[9px] sm:text-[10.5px] font-semibold text-[#2A1E17] leading-tight min-h-[32px] flex items-center justify-center">
                {event.title}
              </h3>

              {/* Time */}
              <span className="font-sans-clean text-[8px] sm:text-[9.5px] font-medium text-[#8C5D23] mt-1.5 whitespace-nowrap">
                {event.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
