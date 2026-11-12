// ponytail: mobile-first evening details with properly sized center timeline icons
import React from 'react';
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
    title: 'Welcome & Reception',
    subtitle: 'ADB Manor',
    description: 'We kindly ask guests to arrive by 6:00 PM as our celebration begins with welcome drinks and greetings.',
    icon: <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#542F07]" />,
  },
  {
    time: '7:00 PM',
    title: 'Live Musical Evening',
    subtitle: 'Melodious Songs',
    description: 'Soulful vocal performances by renowned singers to celebrate twenty-five years of love.',
    icon: <Mic className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#542F07]" />,
  },
  {
    time: '8:30 PM',
    title: 'Mala Bodol & Cake Cutting',
    subtitle: 'Sacred Rituals',
    description: 'Traditional exchange of flower garlands followed by cutting our 25th anniversary silver jubilee cake.',
    icon: <Cake className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#542F07]" />,
  },
  {
    time: '9:00 PM',
    title: 'Dinner & Celebrations',
    subtitle: 'until late',
    description: 'A lavish celebratory multi-cuisine banquet feast followed by joyful celebration under Kolkata skies.',
    icon: <Utensils className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#542F07]" />,
  },
];

export const EventDetails: React.FC = () => {
  const calendarUrl = createGoogleCalendarUrl();

  return (
    <section
      id="event-details"
      className="relative text-[#150C07] py-10 sm:py-14 md:py-16 px-3 sm:px-4 md:px-6 overflow-hidden border-b border-[#D5C0A5]/50 text-center"
    >
      <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <span className="font-cinzel text-[11px] sm:text-xs md:text-sm lg:text-[15px] tracking-[0.32em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          THE DAY
        </span>

        <h2 className="font-script-romantic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          Evening Details
        </h2>

        <p className="font-serif-luxury italic text-xs sm:text-sm md:text-base lg:text-lg text-[#22130A] font-semibold leading-relaxed max-w-[290px] sm:max-w-sm md:max-w-xl lg:max-w-2xl mt-2 mb-10 md:mb-14 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          We&apos;ve planned a beautiful evening in Kolkata. Here&apos;s what to expect as we celebrate from sunset to starlight.
        </p>

        {/* Timeline with Center Milestone Icons and High-Contrast Text */}
        <div className="relative w-full max-w-[390px] sm:max-w-[420px] md:max-w-2xl lg:max-w-3xl mx-auto mb-10 md:mb-14">
          
          {/* Continuous Center Hairline */}
          <div className="absolute top-4 bottom-6 left-1/2 -translate-x-1/2 w-px bg-[#C8B39B] pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
            {EVENTS.map((event, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex items-start">
                  
                  {/* Left Column (50% width) */}
                  <div className={`w-1/2 pr-5 sm:pr-8 md:pr-14 text-right ${isLeft ? 'block' : 'invisible'}`}>
                    {isLeft && (
                      <div>
                        <span className="font-cinzel text-[11.5px] sm:text-xs md:text-sm lg:text-base font-bold text-[#0F0804] tracking-wider block mb-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                          {event.time}
                        </span>

                        <h3 className="font-serif-luxury font-bold text-[13.5px] sm:text-base md:text-lg lg:text-xl text-[#0F0804] leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                          {event.title}
                        </h3>

                        {event.subtitle && (
                          <span className="font-serif-luxury italic text-[11px] sm:text-xs md:text-sm text-[#542F07] font-semibold block leading-tight my-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                            {event.subtitle}
                          </span>
                        )}

                        <p className="font-serif-luxury text-[11.5px] sm:text-xs md:text-sm lg:text-[15px] text-[#1C1108] leading-relaxed mt-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] font-semibold">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Timeline Icon Badge */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full border border-[#B87C29] bg-[#FAF3E8] shadow-sm flex items-center justify-center shrink-0 z-20 ring-4 ring-[#F4DCB3]">
                    {event.icon}
                  </div>

                  {/* Right Column (50% width) */}
                  <div className={`w-1/2 pl-5 sm:pl-8 md:pl-14 text-left ${!isLeft ? 'block' : 'invisible'}`}>
                    {!isLeft && (
                      <div>
                        <span className="font-cinzel text-[11.5px] sm:text-xs md:text-sm lg:text-base font-bold text-[#0F0804] tracking-wider block mb-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                          {event.time}
                        </span>

                        <h3 className="font-serif-luxury font-bold text-[13.5px] sm:text-base md:text-lg lg:text-xl text-[#0F0804] leading-snug drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                          {event.title}
                        </h3>

                        {event.subtitle && (
                          <span className="font-serif-luxury italic text-[11px] sm:text-xs md:text-sm text-[#542F07] font-semibold block leading-tight my-0.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                            {event.subtitle}
                          </span>
                        )}

                        <p className="font-serif-luxury text-[11.5px] sm:text-xs md:text-sm lg:text-[15px] text-[#1C1108] leading-relaxed mt-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] font-semibold">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Add to Calendar Button: Same as Countdown button */}
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#B87C29] bg-[#FAF3E8]/90 hover:bg-[#FAF3E8] text-[#150C07] font-sans-clean text-xs font-bold shadow-xs transition-all hover:scale-105 active:scale-95 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] mt-2"
        >
          <Calendar className="w-3.5 h-3.5 text-[#B87C29]" />
          <span>Add to Calendar</span>
        </a>

      </div>
    </section>
  );
};
