// ponytail: cinematic intro video with matching mobile container centered and background image on both sides
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { introVideo, introPoster, backgroundImg } from '../assets';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnding, setIsEnding] = useState(false);

  const handleStartPlay = async () => {
    const video = videoRef.current;
    if (!video) {
      onComplete();
      return;
    }

    setHasStarted(true);

    try {
      video.muted = false;
      await video.play();
    } catch {
      // Fallback if browser blocks unmuted audio on first gesture
      try {
        video.muted = true;
        await video.play();
      } catch {
        onComplete();
      }
    }
  };

  const handleEnded = () => {
    if (isEnding) return;
    setIsEnding(true);
    if (videoRef.current) {
      try {
        videoRef.current.pause();
      } catch {
        // Ignore pause errors on exit
      }
    }
    onComplete();
  };

  const handleScreenClick = () => {
    if (isEnding) return;
    if (!hasStarted) {
      handleStartPlay();
    }
  };

  return (
    <motion.div
      key="intro-overlay"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.35, ease: 'easeOut' },
      }}
      onClick={handleScreenClick}
      className={`fixed inset-0 z-50 bg-[#F4DCB3] flex justify-center overflow-hidden select-none ${
        isEnding ? 'pointer-events-none' : 'cursor-pointer'
      }`}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'repeat-y',
        backgroundAttachment: 'fixed',
      }}
      aria-label="Play Intro Video"
    >
      <div className="w-full max-w-[450px] h-full relative bg-[#F4DCB3] shadow-2xl overflow-hidden sm:border-x border-[#D5C0A5]/70 flex items-center justify-center">
        {/* Native Video Element */}
        <video
          ref={videoRef}
          src={introVideo}
          poster={introPoster}
          playsInline
          preload="auto"
          muted={!hasStarted}
          onPlaying={() => setIsPlaying(true)}
          onEnded={handleEnded}
          className="w-full h-full object-cover"
        />

        {/* Video Cover Image (intro-poster.png) shown until video starts actively rendering frames */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.img
              src={introPoster}
              alt="Video Cover"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
              loading="eager"
            />
          )}
        </AnimatePresence>

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
                <span className="font-cinzel text-xs tracking-[0.26em] text-[#F9E7B9] uppercase font-bold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] whitespace-nowrap">
                  Click to open
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
