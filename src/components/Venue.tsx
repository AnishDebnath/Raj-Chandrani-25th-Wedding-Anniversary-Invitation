// ponytail: mobile-first venue section with identical mobile font size on all devices
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Info, Clock, Globe, Calendar } from 'lucide-react';
import { createGoogleCalendarUrl } from '../utils/rsvp';
import { venueImg } from '../assets';

export const Venue: React.FC = () => {
  const addressText = '69/1 Purna Das Road, Kolkata - 700029';
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=ADB+MANOR+69%2F1+Purna+Das+Road+Kolkata';
  const calendarUrl = createGoogleCalendarUrl();

  return (
    <section
      id="venue"
      className="relative text-[#2A1E17] py-10 sm:py-12 px-3 sm:px-4 overflow-hidden border-b border-[#D5C0A5]/40 text-center"
    >
      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* Section Header with appear animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <span className="font-cinzel text-xs tracking-[0.28em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            CELEBRATION VENUE
          </span>

          <h2 className="font-script-romantic text-3xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
            The Venue &amp; Location
          </h2>

          <p className="font-serif-luxury italic text-sm text-[#22130A] font-semibold leading-relaxed max-w-sm mt-2 mb-7 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            Join us as we raise a toast to 25 golden years in the heart of South Kolkata at ADB MANOR.
          </p>
        </motion.div>

        {/* Luxury Venue Info Card with appear animation - exact mobile layout format */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="w-full rounded-[28px] border border-[#C5A77B]/70 bg-gradient-to-b from-[#FBF2E3]/95 via-[#F4E4CB]/90 to-[#EAD4B4]/95 backdrop-blur-md p-2.5 sm:p-3 shadow-[0_10px_25px_rgba(84,47,7,0.12)] text-left flex flex-col"
        >
          {/* Venue Photograph */}
          <div className="relative w-full aspect-[16/10] rounded-[22px] overflow-hidden border border-[#C5A77B]/60 shadow-xs">
            <img
              src={venueImg}
              alt="ADB Manor Venue"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Details & Actions Content */}
          <div className="p-4 sm:p-5">
            {/* Kicker */}
            <div className="text-center font-cinzel text-xs tracking-[0.22em] text-[#784A15] font-bold uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
              ANNIVERSARY VENUE
            </div>

            {/* Title */}
            <h3 className="text-center font-serif-luxury font-bold text-xl text-[#180E08] mt-1 mb-3 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
              ADB MANOR
            </h3>

            {/* Details List */}
            <div className="space-y-2.5 mb-4 text-[13.5px] text-[#2C1D13]">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                  className="shrink-0 mt-0.5"
                >
                  <MapPin className="w-4 h-4 text-[#784A15]" />
                </motion.div>
                <span className="font-medium leading-snug">69/1 Purna Das Road, Kolkata-700029</span>
              </div>

              {/* Landmark */}
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#784A15] shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">Beside Triangular Park</span>
              </div>

              {/* Time & Date */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#784A15] shrink-0 mt-0.5" />
                <span className="font-medium leading-snug">23rd January 2027, Saturday evening · 6:00 PM Onwards</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {/* Primary: Get Directions */}
              <motion.a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#20150F] hover:bg-[#110B07] text-[#FAF4EA] flex items-center justify-center gap-2 font-sans-clean font-bold text-xs tracking-[0.18em] uppercase transition-colors shadow-sm active:scale-[0.99]"
              >
                <Globe className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </motion.a>

              {/* Secondary: Add to Calendar */}
              <motion.a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 px-4 rounded-xl border border-[#B8986E] hover:bg-[#E8D4B8]/60 text-[#3C2513] flex items-center justify-center gap-2 font-sans-clean font-bold text-xs tracking-[0.18em] uppercase transition-colors active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-[#784A15]" />
                <span>ADD TO CALENDAR</span>
              </motion.a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
