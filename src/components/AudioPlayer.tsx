// ponytail: background music player with bottom-right floating mute/unmute control
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { backgroundMusic } from '../assets';

interface AudioPlayerProps {
  shouldPlay: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!shouldPlay) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;
    audio.loop = true;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch(() => {
          // Autoplay blocked by browser policy without user gesture
          setIsPlaying(false);
          setIsMuted(true);
        });
    }

    return () => {
      audio.pause();
    };
  }, [shouldPlay]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && !isMuted) {
      audio.pause();
      setIsPlaying(false);
      setIsMuted(true);
    } else {
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  if (!shouldPlay) {
    return null;
  }

  const active = isPlaying && !isMuted;

  return (
    <motion.aside
      aria-label="Background music controls"
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      className="fixed inset-x-0 bottom-5 sm:bottom-6 z-40 pointer-events-none flex justify-center select-none"
    >
      <div className="w-full max-w-[450px] relative px-4 flex justify-end">
        <audio ref={audioRef} src={backgroundMusic} preload="auto" loop />

        <button
          type="button"
          onClick={toggleAudio}
          aria-label={active ? 'Mute background music' : 'Play background music'}
          title={active ? 'Mute Music' : 'Play Music'}
          className="pointer-events-auto relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#BFA075] bg-[#FAF2E3]/95 hover:bg-[#F3E2C7] active:scale-95 text-[#542F07] shadow-lg backdrop-blur-xs flex items-center justify-center transition-all cursor-pointer group hover:shadow-xl"
        >
          {/* Subtle pulsing gold ring when music is actively playing */}
          {active && (
            <span className="absolute inset-0 rounded-full border border-[#B87C29]/50 animate-ping pointer-events-none" />
          )}

          {active ? (
            <Volume2 className="w-5 h-5 text-[#542F07] group-hover:scale-110 transition-transform" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#8C5824] group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </motion.aside>
  );
};

