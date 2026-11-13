import React from 'react';
import logo from '../../assets/watermark/watermark.png';

interface WatermarkProps {
  className?: string;
}

export const Watermark: React.FC<WatermarkProps> = ({ className = '' }) => {
  return (
    <a
      href="https://www.mindtrixmedia.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Designed & Developed by Mindtrix Media"
      className={`mt-3.5 pt-2.5 border-t border-[#BFA075]/30 text-center flex flex-col items-center gap-1 group opacity-75 hover:opacity-100 transition-opacity ${className}`}
    >
      <img
        src={logo}
        alt="Mindtrix Media"
        className="w-14 sm:w-16 object-contain"
        loading="lazy"
        decoding="async"
      />
      <p className="text-[8.5px] sm:text-[9px] text-[#542F07]/80 tracking-[0.16em] uppercase font-sans-clean font-medium">
        Designed &amp; Developed by <span className="text-[#B87C29]">♥</span> Mindtrix Media
      </p>
    </a>
  );
};

export default Watermark;
