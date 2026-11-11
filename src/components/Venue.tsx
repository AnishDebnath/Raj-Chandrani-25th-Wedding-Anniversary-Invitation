// ponytail: mobile-first venue card styled for background.png
import React from 'react';
import { MapPin } from 'lucide-react';
import { venueAdbManorImg } from '../assets';

export const Venue: React.FC = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=ADB+MANOR+69%2F1+Purna+Das+Road+Kolkata';

  return (
    <section
      id="venue"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-4 overflow-hidden border-b border-[#D5C0A5]/50"
    >
      <div className="max-w-md mx-auto relative z-10">
        
        {/* Luxury Card: Left Image + Right Cream Card */}
        <div className="rounded-2xl overflow-hidden border border-[#D5C0A5] shadow-sm bg-white/70 backdrop-blur-[2px] grid grid-cols-12">
          
          {/* Left: Venue Image */}
          <div className="col-span-7 relative min-h-[145px] sm:min-h-[165px]">
            <img
              src={venueAdbManorImg}
              alt="ADB Manor Kolkata"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Information Card */}
          <div className="col-span-5 bg-white/95 p-2.5 sm:p-3.5 flex flex-col justify-center items-center text-center">
            <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.2em] text-[#5A320A] uppercase font-bold mb-0.5">
              VENUE
            </span>

            <div className="flex items-center gap-1 text-xs sm:text-sm font-cinzel font-bold text-[#150C07] my-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#B87C29] shrink-0" />
              <span>ADB MANOR</span>
            </div>

            <p className="font-serif-luxury text-[9px] sm:text-[10px] text-[#24150C] font-medium leading-snug mb-2.5">
              69/1 Purna Das Road
              <br />
              Kolkata - 700029
              <br />
              <span className="italic text-[#5A320A] font-semibold">(Beside Triangular Park)</span>
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#D8A25E] via-[#C99A50] to-[#B87C29] text-[#090909] font-sans-clean font-bold text-[8.5px] sm:text-[9.5px] tracking-wide shadow-xs hover:brightness-105 active:scale-95 transition-all whitespace-nowrap min-h-[26px]"
            >
              <MapPin className="w-2.5 h-2.5" />
              <span>View on Maps</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
