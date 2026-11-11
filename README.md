# Raj & Chandrani — 25th Wedding Anniversary Invitation

A luxury, mobile-first wedding anniversary invitation web application celebrating the 25th Silver Jubilee of **Raj & Chandrani** on **Saturday, 23 January 2027** at **ADB MANOR, Kolkata**.

Designed with high-fidelity editorial typography, fluid responsive scaling, authentic champagne gold parchment aesthetics, and real-time RSVP management.

---

## ✨ Features

- **Mobile-First Full-Bleed Hero**:
  - Full-screen dynamic viewport (`100dvh`) with responsive `clamp()` typography.
  - Seamless feathered fade blending the top text area into the couple photograph.
  - Integrated location callout and animated smooth-scroll indicator.
- **Live Countdown Timer**:
  - Precision countdown to Saturday, 23 January 2027 at 18:00 IST.
  - 4 raised ivory tiles displaying Days, Hours, Minutes, and Seconds.
  - Automated Google Calendar event generation.
- **Embedded Anniversary Intro Video**:
  - Custom HTML5 video player featuring `intro.mp4`.
  - Tap-to-play overlay, play/pause controls, and volume mute/unmute.
- **Our Journey Photographic Carousel**:
  - 3-card stage highlighting relationship milestones.
  - Native mobile touch-swipe gestures (`onTouchStart` / `onTouchEnd`), circular arrow controls, and pagination indicators.
- **25 Years of Us Editorial**:
  - Archival holding-hands photography with interlocking gold rings and testimonial note from their son, Rithvik.
- **Event Details & Itinerary**:
  - 4-checkpoint celebratory timeline (Welcome & Registration, Live Singers, Cake Cutting Ceremony & Mala Bodol, Grand Banquet Dinner).
  - Outlined circular gold badges with hairline vertical dividers.
- **Venue & Google Maps Integration**:
  - Highlighting ADB MANOR (Purna Das Road, beside Triangular Park, Kolkata).
  - One-tap direct link to Google Maps for guests.
- **Interactive RSVP System**:
  - Instant client validation with guest party count and attendance toggles.
  - Submits to backend API (`/api/rsvp`) with automatic `localStorage` offline fallback.
  - Direct 1-click WhatsApp RSVP link generator (`https://wa.me/...`).
  - Direct `<a href="tel:...">` tap-to-call links for Raj (`9433007412`) and Chandrani (`9432854364`).
- **Unified Champagne Gold Theme**:
  - Continuously textured background using `src/assets/background.png`.
  - Classic Roman serif (`Cinzel`), romantic cursive script (`Great Vibes`), and editorial serif (`Cormorant Garamond`).

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Server (Optional Backend)**: Node.js, [Express](https://expressjs.com/) with JSON persistence and CSV export
- **Test Runner**: Node test runner via `tsx`

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (Node 20+ recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/raj-chandrani-25th-wedding-anniversary.git
cd raj-chandrani-25th-wedding-anniversary

# Install dependencies
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests

Execute the unit and utility test suite:

```bash
npm test
```

### Production Build

Compile TypeScript and build the optimized production assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

```text
├── data/
│   └── rsvps.json               # Local RSVP submissions storage
├── public/
│   └── images/                  # Public image fallbacks
├── src/
│   ├── assets/
│   │   ├── background.png       # Site-wide luxury parchment background
│   │   ├── intro.mp4            # Anniversary celebration intro video
│   │   ├── index.ts             # Centralized typed asset exports
│   │   └── images/              # Hero, venue, journey, and floral imagery
│   ├── components/
│   │   ├── Closing.tsx          # Celebration gift banner and footer
│   │   ├── Countdown.tsx        # Live anniversary countdown timer
│   │   ├── EventDetails.tsx     # 4-stage itinerary timeline
│   │   ├── GoldDecorations.tsx  # SVG ornaments and filigree
│   │   ├── Hero.tsx             # Full-bleed mobile-first hero section
│   │   ├── IntroVideo.tsx       # Video player component
│   │   ├── JourneyCarousel.tsx  # Touch-swipable photographic stage
│   │   ├── RSVPForm.tsx         # Interactive RSVP form & WhatsApp link
│   │   ├── Venue.tsx            # Venue card with Google Maps link
│   │   └── YearsOfUs.tsx        # 25-year silver jubilee editorial
│   ├── types/
│   │   └── index.ts             # TypeScript type declarations
│   ├── utils/
│   │   ├── countdown.ts         # Target date countdown math
│   │   ├── countdown.test.ts    # Countdown unit tests
│   │   ├── rsvp.ts              # Form validation & WhatsApp link builder
│   │   └── rsvp.test.ts         # RSVP validation unit tests
│   ├── App.tsx                  # Main mobile-first invitation application
│   ├── index.css                # Tailwind CSS 4 root and custom utility styles
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML template with Google Fonts
├── package.json                 # Project dependencies and scripts
├── server.ts                    # Optional Express backend for RSVP API
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite configuration with React & Tailwind plugins
```

---

## 📱 Mobile-First Design Principles

- **Fluid Viewport (`100dvh`)**: Locks to the true visible screen height on iOS Safari and Android Chrome, preventing address bar clipping.
- **Fluid Typography**: Uses CSS `clamp()` to scale typography smoothly between small mobile phones (320px) up to large viewports.
- **Touch-Friendly Controls**: Minimum 44px tap targets for buttons, inputs, and carousel navigators.
- **Lightweight Bundle**: Zero bloated animation libraries; uses native platform CSS transitions and transforms.

---

## 📄 License

This project is licensed under the Copyright.

