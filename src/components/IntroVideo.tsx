// ponytail: anniversary intro video player component
import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { introVideo } from '../assets';

export const IntroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="intro-video" className="relative py-6 sm:py-8 px-3 overflow-hidden">
      <div className="max-w-md mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <Sparkles className="w-3 h-3 text-[#B87C29]" />
          <span className="font-cinzel text-[9.5px] sm:text-[10.5px] tracking-[0.25em] text-[#8C5D23] uppercase font-bold">
            A Journey of 25 Years
          </span>
          <Sparkles className="w-3 h-3 text-[#B87C29]" />
        </div>

        <h2 className="font-script-romantic text-2xl sm:text-3xl text-[#2A1E17] mb-3">
          Watch Our Celebration
        </h2>

        {/* Video Frame */}
        <div className="relative rounded-2xl overflow-hidden border border-[#D5C0A5] shadow-lg bg-black/90 aspect-[16/9] sm:aspect-[16/10] max-w-sm mx-auto group">
          <video
            ref={videoRef}
            src={introVideo}
            playsInline
            muted={isMuted}
            loop
            preload="metadata"
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Center Play/Pause Overlay */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D8A25E] to-[#F9E7B9] text-[#090909] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                <Play className="w-5 h-5 ml-0.5 fill-[#090909]" />
              </div>
            </div>
          )}

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1.5 z-20">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

