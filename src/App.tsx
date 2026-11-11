// ponytail: mobile-first wedding anniversary invitation app without navbar
import React from 'react';
import { Hero } from './components/Hero';
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
        className="w-full max-w-[450px] min-h-screen shadow-2xl relative flex flex-col overflow-x-hidden sm:border-x border-[#D5C0A5]/70"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'repeat-y',
        }}
      >
        <main className="flex-1">
          {/* Section 1: Hero (Centered vertical layout matching reference) */}
          <Hero onRSVPClick={scrollToRSVP} onExploreClick={scrollToCountdown} />

          {/* Section 2: Countdown to Our Special Day */}
          <Countdown />

          {/* Section 3: Intro Video */}
          <IntroVideo />

          {/* Section 4: Our Journey Photographic Carousel */}
          <JourneyCarousel />

          {/* Section 5: 25 Years of Us Editorial */}
          <YearsOfUs />

          {/* Section 6: Event Details & Itinerary */}
          <EventDetails />

          {/* Section 7: Venue & Location */}
          <Venue />

          {/* Section 8: RSVP Form */}
          <RSVPForm />
        </main>

        {/* Section 9: Closing Celebration & Footer */}
        <Closing onRSVPClick={scrollToRSVP} />
      </div>
    </div>
  );
}
