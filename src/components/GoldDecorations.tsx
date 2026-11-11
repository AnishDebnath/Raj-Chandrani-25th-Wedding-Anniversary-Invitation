import React from 'react';

export const GoldDivider: React.FC<{ className?: string; light?: boolean }> = ({ className = '', light = false }) => (
  <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto my-4 ${className}`} aria-hidden="true">
    <div className={`h-[1px] flex-1 ${light ? 'bg-gradient-to-r from-transparent via-[#C99A50]/40 to-[#C99A50]' : 'bg-gradient-to-r from-transparent via-[#E8C78E]/30 to-[#E8C78E]/80'}`} />
    <svg className={`w-4 h-4 ${light ? 'text-[#C99A50]' : 'text-[#E8C78E]'}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
    <div className={`h-[1px] flex-1 ${light ? 'bg-gradient-to-l from-transparent via-[#C99A50]/40 to-[#C99A50]' : 'bg-gradient-to-l from-transparent via-[#E8C78E]/30 to-[#E8C78E]/80'}`} />
  </div>
);

export const IntertwinedHearts: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-10',
  color = '#C99A50'
}) => (
  <svg
    viewBox="0 0 48 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M17.5 7.5C14.5 4.5 9.5 4.5 6.5 7.5C3.5 10.5 3.5 15.5 6.5 18.5L17.5 29.5L28.5 18.5C31.5 15.5 31.5 10.5 28.5 7.5C25.5 4.5 20.5 4.5 17.5 7.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.9"
    />
    <path
      d="M30.5 7.5C27.5 4.5 22.5 4.5 19.5 7.5L17.5 9.5L19.5 11.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M30.5 7.5C33.5 4.5 38.5 4.5 41.5 7.5C44.5 10.5 44.5 15.5 41.5 18.5L30.5 29.5L23.5 22.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />
    <circle cx="17.5" cy="18" r="1.5" fill={color} />
    <circle cx="30.5" cy="18" r="1.5" fill={color} />
  </svg>
);

export const FloralCornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  light?: boolean;
}> = ({ position, className = '', light = false }) => {
  const rotation = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  }[position];

  const strokeColor = light ? '#C99A50' : '#E8C78E';

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-16 h-16 sm:w-24 sm:h-24 ${rotation} transition-transform`}
      >
        <path
          d="M0 0C40 0 80 40 80 80M0 10C35 10 70 45 70 80M0 20C30 20 60 50 60 80"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeOpacity={light ? "0.45" : "0.35"}
        />
        {/* Rose and leaves filigree */}
        <circle cx="28" cy="28" r="7" stroke={strokeColor} strokeWidth="1.2" strokeOpacity={light ? "0.6" : "0.5"} />
        <circle cx="28" cy="28" r="3.5" fill={strokeColor} fillOpacity={light ? "0.3" : "0.2"} />
        <path
          d="M28 21C22 14 12 18 17 25C13 29 18 36 25 32C29 37 36 33 33 26C38 21 33 14 26 18"
          stroke={strokeColor}
          strokeWidth="1"
          strokeOpacity={light ? "0.5" : "0.4"}
        />
        <path
          d="M50 12C45 22 55 28 62 20M12 50C22 45 28 55 20 62"
          stroke={strokeColor}
          strokeWidth="1"
          strokeOpacity={light ? "0.4" : "0.3"}
        />
      </svg>
    </div>
  );
};

export const CouplePortraitFrame: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Outer gilded glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#C99A50]/30 via-[#E8C78E]/50 to-[#4A101B]/40 blur-md opacity-70" />
      
      {/* Main portrait container */}
      <div className="relative rounded-2xl overflow-hidden border border-[#E8C78E]/40 shadow-2xl bg-gradient-to-b from-[#181114] via-[#0D0B0E] to-[#080709]">
        {/* Subtle decorative inner border */}
        <div className="absolute inset-2 border border-[#C99A50]/30 rounded-xl pointer-events-none z-10" />

        {/* Artistic Couple Render */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] flex items-center justify-center p-6 text-center overflow-hidden">
          {/* Ambient bokeh background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4A101B]/40 via-[#181215] to-[#090909]" />
          
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#C99A50]/15 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-[#4A101B]/40 blur-2xl" />

          {/* Elegant Couple Art Composition */}
          <div className="relative z-10 flex flex-col items-center justify-center max-w-sm px-4">
            {/* Monogram / Crest */}
            <div className="relative mb-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#C99A50]/50 p-1 flex items-center justify-center shadow-lg bg-[#0E0B0E]/80 backdrop-blur-sm">
                <div className="w-full h-full rounded-full border border-dashed border-[#E8C78E]/40 flex flex-col items-center justify-center">
                  <span className="font-script-romantic text-3xl sm:text-4xl text-[#E8C78E]">R & C</span>
                  <span className="text-[9px] uppercase tracking-widest text-[#C99A50] font-sans-clean -mt-1 font-medium">1997 - 2022</span>
                </div>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#4A101B] border border-[#C99A50] rounded-full px-2.5 py-0.5 text-[10px] text-[#F9E7B9] font-sans-clean font-semibold tracking-wider whitespace-nowrap">
                25 YEARS
              </div>
            </div>

            {/* Couple names in luxury typography */}
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wide text-[#FFF6E8] mb-1">
              Raj & Chandrani
            </h3>
            
            <p className="font-script-romantic text-xl sm:text-2xl text-[#E8C78E] mb-3">
              Silver Jubilee Celebration
            </p>

            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C99A50] to-transparent my-1" />

            <p className="text-xs sm:text-sm text-[#F8F1E7]/80 font-sans-clean leading-relaxed font-light mt-2 max-w-[260px]">
              "Twenty-five years of shared laughter, enduring warmth, and boundless family love."
            </p>

            <div className="mt-4 flex items-center gap-2 text-[11px] text-[#C99A50] font-sans-clean tracking-wider uppercase font-medium">
              <span>23 January 2027</span>
              <span>·</span>
              <span>Kolkata</span>
            </div>
          </div>

          {/* Corner gold leaf accents */}
          <div className="absolute bottom-3 left-3 opacity-60">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M2 30C12 28 20 20 22 10M2 30C10 22 18 18 28 16M2 30C6 18 14 12 26 6" stroke="#C99A50" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="absolute bottom-3 right-3 opacity-60 scale-x-[-1]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M2 30C12 28 20 20 22 10M2 30C10 22 18 18 28 16M2 30C6 18 14 12 26 6" stroke="#C99A50" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
