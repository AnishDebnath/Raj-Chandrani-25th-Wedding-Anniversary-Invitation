// ponytail: mobile-first wedding anniversary invitation app with interactive intro video & Framer Motion transitions
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroVideo } from './components/IntroVideo';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { WelcomeStory } from './components/WelcomeStory';
import { JourneyTimeline } from './components/JourneyTimeline';
import { FamilyMessages } from './components/FamilyMessages';
import { EventDetails } from './components/EventDetails';
import { Venue } from './components/Venue';
import { RSVPForm } from './components/RSVPForm';
import { ShareInvitation } from './components/ShareInvitation';
import { Footer } from './components/Footer';
import { backgroundImg } from './assets';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Ensure scroll is at the very top on mount & manual restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Lock body scroll while intro is showing to avoid background drift
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      document.body.style.overflow = '';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  const handleIntroComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setShowIntro(false);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  };

  const scrollToCountdown = () => {
    const el = document.getElementById('countdown');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-[#F4DCB3] text-[#2A1E17] flex justify-center selection:bg-[#B87C29] selection:text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'repeat-y',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Intro Video Overlay */}
      <AnimatePresence>
        {showIntro && (
          <IntroVideo onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main Website Content: Mobile width in center with luxury borders & background showing on both sides */}
      <div
        className="w-full max-w-[450px] min-h-screen shadow-2xl relative flex flex-col sm:border-x border-[#D5C0A5]/70"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
        }}
      >
        <main className="flex-1 relative">
          {/* Section 1: Hero (Sticky pinned at top, remaining content scrolls over it) */}
          <div className="sticky top-0 z-0 w-full h-[100dvh] min-h-[100dvh] overflow-hidden">
            <Hero onExploreClick={scrollToCountdown} />
          </div>

          {/* Curtain Overlay: Subsequent sections slide UPWARDS over the Hero */}
          <div
            className="relative z-10 w-full shadow-[0_-18px_45px_rgba(0,0,0,0.35)] rounded-t-3xl border-t border-[#D5C0A5] overflow-hidden"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'repeat-y',
            }}
          >
            {/* Section 2: Countdown & Save The Date (Directly after Hero) */}
            <Countdown />

            {/* Section 3: Welcome to Our Story */}
            <WelcomeStory />

            {/* Section 4: Our Journey Photos with Years */}
            <JourneyTimeline />

            {/* Section 4: Family Messages to Guests */}
            <FamilyMessages />

            {/* Section 5: Event Details & Itinerary */}
            <EventDetails />

            {/* Section 6: Venue & Location */}
            <Venue />

            {/* Section 7: RSVP Form */}
            <RSVPForm />

            {/* Section 8: Share Invitation */}
            <ShareInvitation />

            {/* Section 9: Photographic Couple Footer */}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
