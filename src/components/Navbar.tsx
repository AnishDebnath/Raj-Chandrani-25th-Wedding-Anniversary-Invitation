// ponytail: mobile-first navigation styled for warm unified background
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onRSVPClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRSVPClick }) => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Our Story', id: 'journey' },
    { label: 'Itinerary', id: 'event-details' },
    { label: 'Venue', id: 'venue' },
    { label: 'Gallery', id: 'years-of-us' },
    { label: 'RSVP', id: 'rsvp' },
  ];

  const scrollTo = (id: string, label: string) => {
    setActiveSection(label.toLowerCase());
    if (id === 'rsvp' && onRSVPClick) {
      onRSVPClick();
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.label.toLowerCase());
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF2E4]/90 backdrop-blur-md border-b border-[#D5C0A5]/60 py-2 sm:py-2.5 transition-all shadow-xs">
      <nav className="w-full flex items-center justify-between sm:justify-center overflow-x-auto no-scrollbar px-3 gap-3.5 sm:gap-6 text-[11px] sm:text-xs font-sans-clean tracking-wider">
        {navItems.map((item) => {
          const isActive = activeSection === item.label.toLowerCase();
          return (
            <button
              key={item.label}
              type="button"
              onClick={() => scrollTo(item.id, item.label)}
              className={`relative py-1 shrink-0 transition-colors cursor-pointer whitespace-nowrap min-h-[30px] flex items-center ${
                isActive
                  ? 'text-[#2A1E17] font-bold'
                  : 'text-[#6E5542] hover:text-[#2A1E17]'
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-[#B87C29] rounded-full" />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
