// ponytail: mobile-first wedding anniversary invitation app with code-split lazy loading
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroVideo } from './components/IntroVideo';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { AudioPlayer } from './components/AudioPlayer';
import { backgroundImg } from './assets';

// ponytail: lazy load below-the-fold components to reduce initial JS payload and fast load
const WelcomeStory = lazy(() =>
  import('./components/WelcomeStory').then((m) => ({ default: m.WelcomeStory }))
);
const FamilyMessages = lazy(() =>
  import('./components/FamilyMessages').then((m) => ({ default: m.FamilyMessages }))
);
const EventDetails = lazy(() =>
  import('./components/EventDetails').then((m) => ({ default: m.EventDetails }))
);
const Venue = lazy(() =>
  import('./components/Venue').then((m) => ({ default: m.Venue }))
);
const RSVPForm = lazy(() =>
  import('./components/RSVPForm').then((m) => ({ default: m.RSVPForm }))
);
const ShareInvitation = lazy(() =>
  import('./components/ShareInvitation').then((m) => ({ default: m.ShareInvitation }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Ensure scroll is at the very top on mount & manual restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Keep visible scrollbar intact while disabling scroll function during intro
  useEffect(() => {
    if (!showIntro) return;

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    const preventKeyScroll = (e: KeyboardEvent) => {
      const blockedKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar'];
      if (blockedKeys.includes(e.key)) {
        e.preventDefault();
      }
    };

    const lockScrollPosition = () => {
      if (window.scrollY !== 0 || window.scrollX !== 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeyScroll, { passive: false });
    window.addEventListener('scroll', lockScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyScroll);
      window.removeEventListener('scroll', lockScrollPosition);
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
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: showIntro ? 0.3 : 1 }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
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

            {/* Below-the-fold sections loaded asynchronously with zero layout shift */}
            <Suspense fallback={null}>
              {/* Section 3: Welcome to Our Story */}
              <WelcomeStory />

              {/* Section 4: Our Journey Photos with Years (Temporarily commented out) */}
              {/* <JourneyTimeline /> */}

              {/* Section 5: Family Messages to Guests */}
              <FamilyMessages />

              {/* Section 6: Event Details & Itinerary */}
              <EventDetails />

              {/* Section 7: Venue & Location */}
              <Venue />

              {/* Section 8: RSVP Form */}
              <RSVPForm />

              {/* Section 9: Share Invitation */}
              <ShareInvitation />

              {/* Section 10: Photographic Couple Footer */}
              <Footer />
            </Suspense>
          </div>
        </main>
      </motion.div>

      {/* Background Music Player with bottom-right floating mute/unmute control */}
      <AudioPlayer shouldPlay={!showIntro} />
    </div>
  );
}
