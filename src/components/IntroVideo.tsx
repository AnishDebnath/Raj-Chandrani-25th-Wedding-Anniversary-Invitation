// ponytail: cinematic full-screen intro video with refined 'Click to open' breathing glow and smooth dissolve
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { introVideo } from '../assets';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Prime the first frame so it is visible immediately on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleStartPlay = async () => {
    if (!videoRef.current) {
      onComplete();
      return;
    }

    try {
      videoRef.current.muted = false;
      await videoRef.current.play();
      setHasStarted(true);
    } catch {
      // Fallback if browser blocks unmuted audio on first interaction
      try {
        if (videoRef.current) {
          videoRef.current.muted = true;
          await videoRef.current.play();
          setHasStarted(true);
        }
      } catch {
        onComplete();
      }
    }
  };

  const handleScreenClick = () => {
    if (!hasStarted) {
      handleStartPlay();
    } else if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <motion.div
      key="intro-overlay"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      }}
      onClick={handleScreenClick}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none touch-none"
      aria-label="Play Intro Video"
    >
      <video
        ref={videoRef}
        src={introVideo}
        playsInline
        preload="auto"
        onEnded={onComplete}
        className="w-full h-full object-cover bg-black"
      />

      {/* 'Click to Open' indicator at 68% height with breathing whole-element opacity */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              y: 0,
            }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{
              opacity: {
                repeat: Infinity,
                duration: 2.2,
                ease: 'easeInOut',
              },
              y: { duration: 0.5, ease: 'easeOut' },
            }}
            className="absolute top-[68%] -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-[#F9E7B9]/50 shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.26em] text-[#F9E7B9] uppercase font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] whitespace-nowrap">
                Click to open
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
