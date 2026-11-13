# Raj & Chandrani — 25th Wedding Anniversary Invitation

A luxury digital wedding anniversary invitation web application celebrating the **25th Silver Jubilee** of **Raj & Chandrani** on **Saturday, 23rd January 2027** at **ADB MANOR, Kolkata**.

Designed with champagne gold parchment aesthetics, high-contrast typography, fluid animations via Framer Motion, touch-friendly carousel navigation, automated Google Sheets RSVP sync, and seamless calendar & WhatsApp integrations.

Designed & Developed with ♥ by **[Mindtrix Media](https://www.mindtrixmedia.com/)**, with photography by **[The Photographer House](https://thephotographerhouse.com/)**.

---

## 💍 Celebration Overview

- **Celebrants**: Raj & Chandrani
- **Milestone**: 25th Wedding Anniversary (Silver Jubilee)
- **Date & Time**: Saturday, 23rd January 2027 · 6:00 PM Onwards
- **Venue**: ADB MANOR, 69/1 Purna Das Road, Kolkata - 700029 (Beside Triangular Park)
- **Hosted by**: Invitation from their son, Rithvik
- **Dress Code**: Bengali Traditional Attire
- **RSVP Contacts**: 9433007412 (Raj) · 9432854364 (Chandrani)

---

## ✨ Features & Architecture

### 1. Cinematic Intro Video Overlay (`IntroVideo.tsx`)
- Fullscreen intro experience featuring `intro.mp4` with `intro-poster.png` cover.
- Animated breathing *"Click to open"* badge.
- Automatic transition to the main invitation upon video completion or user tap.

### 2. Ambient Background Audio (`AudioPlayer.tsx`)
- Romantic background soundtrack (`background-music.mp3`).
- Floating bottom-right vinyl-styled controller with gold pulsing aura and instant mute/unmute toggle.

### 3. Full-Bleed Editorial Hero (`Hero.tsx`)
- Dynamic mobile viewport (`100dvh`) with high-contrast text hierarchy.
- Soft multi-stop feathered gradient blend over the couple portrait.
- Discretionary photographer branding link and animated smooth-scroll prompt.

### 4. Save the Date & Calendar (`Countdown.tsx`)
- Real-time countdown timer to January 23, 2027 at 18:00 IST (Days, Hours, Minutes, Seconds).
- Interactive January 2027 monthly calendar grid with a pulsating gold halo and beating red heart on Day 23.
- One-click **Add to Calendar** button syncing directly to Google Calendar.

### 5. Glimpses of Togetherness (`WelcomeStory.tsx`)
- 3D Coverflow photo carousel showcasing precious memories.
- Touch drag/swipe support on mobile and desktop devices.
- Circular previous/next navigation buttons and interactive stepper dots.

### 6. A Son's Gratitude & Dress Code (`FamilyMessages.tsx`)
- High-contrast layered card featuring a personal tribute from Rithvik.
- Dedicated Bengali Traditional Attire dress code callout styled with authentic cultural motifs.

### 7. Anniversary Program Timeline (`EventDetails.tsx`)
- Centralized milestone timeline covering the evening's order of events:
  - **6:00 PM**: Program Starts (Guest Welcome)
  - **7:00 PM**: Song Performance (Female & Male Singers)
  - **8:30 PM**: Cake Cutting Ceremony & Mala Bodol
  - **9:00 PM**: Dinner (Grand Celebratory Feast)
- Secondary Google Calendar sync action button.

### 8. Venue & Location (`Venue.tsx`)
- Architectural photograph of ADB MANOR.
- Full postal address and landmark reference (*Beside Triangular Park*).
- **Get Directions** button opening Google Maps navigation directly.
- **Add to Calendar** sync integration.

### 9. Multi-Channel RSVP System (`RSVPForm.tsx`)
- Responsive guest form with real-time validation.
- Attendance toggle (*Joyfully Attend* vs. *Regretfully Decline*).
- Interactive member counter (`-` / `+`) with party limit constraints (1–10).
- **Direct Google Sheet Webhook Integration**: Forwards guest submissions immediately to Google Sheets via `mode: 'no-cors'`.
- **Serverless API Fallback**: Posts to `/api/rsvp` for local JSON persistence.
- **Offline Redundancy**: Saves responses directly into browser `localStorage`.
- **Instant WhatsApp Confirmation**: Pre-fills a personalized RSVP message to Raj (`9433007412`).
- **Tap-to-Call Links**: Direct phone dialing for Raj (`9433007412`) and Chandrani (`9432854364`).

### 10. Spread the Celebration (`ShareInvitation.tsx`)
- Quick 1-click sharing buttons for WhatsApp, Facebook, and Instagram.
- Native mobile Web Share API integration with automatic fallback to clipboard copy and animated toast alert.

### 11. Couple Photographic Footer & Watermark (`Footer.tsx` & `Watermark`)
- Warm bidirectional feather-blended photographic footer portrait.
- Animated smooth **Back to Top** navigation button.
- Mindtrix Media designer watermark badge.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Test Runner**: Node test runner via `tsx`
- **Deployment**: [Vercel](https://vercel.com/) (Static Frontend + Serverless Functions)

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

### Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Set your Google Apps Script Web App URL:
```env
VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Development
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests
Execute unit tests for countdown calculation and RSVP validation:
```bash
npm test
```

### Type Checking & Linting
Validate TypeScript without emitting build files:
```bash
npm run lint
```

### Production Build
Create an optimized production build:
```bash
npm run build
```
Preview the built application locally:
```bash
npm run preview
```

---

## 📊 Google Sheets RSVP Integration Guide

To store RSVPs in a live Google Sheet:
1. Open [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. In the top row, add headers: `Timestamp`, `Name`, `Attendance`, `Guests`.
3. Click **Extensions** > **Apps Script** and paste the following snippet:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       new Date(),
       data.name || '',
       data.attendance || '',
       data.guests || 1
     ]);
     return ContentService.createTextOutput(JSON.stringify({
       status: 'success',
       message: 'RSVP recorded successfully'
     })).setMimeType(ContentService.MimeType.JSON);
   }
   ```
4. Click **Deploy** > **New deployment**.
5. Select **Web app**:
   - **Execute as**: *Me*
   - **Who has access**: *Anyone* (Important: do not restrict to yourself)
6. Copy the generated **Web App URL** and add it to your `.env` as `VITE_GOOGLE_SHEET_URL`.

---

## 📁 Project Structure

```text
├── api/
│   └── rsvp.ts                  # Vercel serverless function for RSVP handling & Google Sheets webhook
├── public/
│   └── images/                  # Public fallback assets
├── src/
│   ├── assets/
│   │   ├── background.png       # Site-wide luxury parchment background
│   │   ├── intro.mp4            # Anniversary celebration intro video
│   │   ├── background-music.mp3 # Ambient background instrumental music
│   │   ├── index.ts             # Centralized typed asset exports
│   │   └── watermark/           # Designer watermark assets
│   ├── components/
│   │   ├── AudioPlayer.tsx      # Floating background music controller
│   │   ├── Countdown.tsx        # Save the date, countdown & calendar grid
│   │   ├── EventDetails.tsx     # Celebration itinerary timeline
│   │   ├── FamilyMessages.tsx   # Son's invitation & dress code card
│   │   ├── Footer.tsx           # Feather-blended couple photo footer
│   │   ├── Hero.tsx             # Full-bleed mobile hero section
│   │   ├── IntroVideo.tsx       # Tap-to-open cinematic intro video overlay
│   │   ├── RSVPForm.tsx         # RSVP form, Google Sheets sync & WhatsApp
│   │   ├── ShareInvitation.tsx  # Multi-platform social share buttons
│   │   ├── Venue.tsx            # Venue details & Google Maps navigation
│   │   ├── WelcomeStory.tsx     # 3D coverflow photo memories carousel
│   │   └── Watermark/           # Mindtrix Media watermark component
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── utils/
│   │   ├── countdown.ts         # Countdown calculation helper
│   │   ├── countdown.test.ts    # Countdown test suite
│   │   ├── rsvp.ts              # Form validation & link builders
│   │   └── rsvp.test.ts         # RSVP test suite
│   ├── App.tsx                  # Main application orchestrator
│   ├── index.css                # Tailwind CSS 4 root styles & font families
│   └── main.tsx                 # Application entry point
├── .env.example                 # Environment variable templates
├── .gitignore                   # Git ignore patterns
├── index.html                   # HTML template with luxury web fonts
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── vercel.json                  # Vercel build & route settings
└── vite.config.ts               # Vite configuration with React & Tailwind
```

---

## 📱 Mobile-First Design Principles

- **True Viewport Scaling (`100dvh`)**: Adapts to iOS Safari and Android Chrome address bar expansion and collapse without content jumping.
- **High-Contrast Readability**: Rich dark espresso tones (`#0C0502`, `#120803`, `#3B1F04`) paired with subtle parchment text halos ensure crystal-clear visibility on textured backgrounds without needing oversized typography.
- **Accessibility & Touch Targets**: Minimum 44px interactive tap targets for buttons, inputs, and carousels.
- **Performance Optimized**: Lazy-loaded below-the-fold components and modern asset optimization ensure fast load times on mobile cellular connections.

---

## 🎨 Design & Development Credits

- **Designed & Developed by**: [Mindtrix Media](https://www.mindtrixmedia.com/)
- **Photography Partner**: [The Photographer House](https://thephotographerhouse.com/)

---

## 📄 License

This project is proprietary and created for the 25th Wedding Anniversary celebration of Raj & Chandrani. Designed & Developed by [Mindtrix Media](https://www.mindtrixmedia.com/).
