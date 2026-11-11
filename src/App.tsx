// ponytail: mobile-first wedding anniversary invitation app with WelcomeStory section
import React from 'react';
import { Hero } from './components/Hero';
import { WelcomeStory } from './components/WelcomeStory';
import { Countdown } from './components/Countdown';
import { IntroVideo } from './components/IntroVideo';
import { JourneyCarousel } from './components/JourneyCarousel';
import { YearsOfUs } from './components/YearsOfUs';
import { EventDetails } from './components/EventDetails';
import { Venue } from './components/Venue';
import { RSVPForm } from './components/RSVPForm';
import { Closing } from './components/Closing';
import { backgroundImg } from './assets';

export default function App() {
  const scrollToRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCountdown = () => {
    const el = document.getElementById('countdown');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#F4DCB3] text-[#2A1E17] flex justify-center selection:bg-[#B87C29] selection:text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'repeat-y',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Mobile-First Frame: Full-bleed on mobile, luxury phone card on tablet/desktop */}
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
          <div className="sticky top-0 z-0 w-full h-[100dvh] overflow-hidden">
            <Hero onRSVPClick={scrollToRSVP} onExploreClick={scrollToCountdown} />
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

            {/* Section 4: Intro Video */}
            <IntroVideo />

            {/* Section 5: Our Journey Photographic Carousel */}
            <JourneyCarousel />

            {/* Section 6: 25 Years of Us Editorial */}
            <YearsOfUs />

            {/* Section 7: Event Details & Itinerary */}
            <EventDetails />

            {/* Section 8: Venue & Location */}
            <Venue />

            {/* Section 9: RSVP Form */}
            <RSVPForm />

            {/* Section 10: Closing Celebration & Footer */}
            <Closing onRSVPClick={scrollToRSVP} />
          </div>
        </main>
      </div>
    </div>
  );
}
