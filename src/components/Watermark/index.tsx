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
      className={`mt-3.5 pt-2.5 border-t border-[#BFA075]/40 text-center flex flex-col items-center gap-1 group opacity-90 hover:opacity-100 transition-opacity ${className}`}
    >
      <img
        src={logo}
        alt="Mindtrix Media"
        className="w-14 sm:w-16 object-contain"
        loading="lazy"
        decoding="async"
      />
      <p className="text-[8.5px] sm:text-[9px] text-[#3B1F04] tracking-[0.16em] uppercase font-sans-clean font-bold">
        Designed &amp; Developed by <span className="text-[#B87C29]">♥</span> Mindtrix Media
      </p>
    </a>
  );
};

export default Watermark;
