// ponytail: mobile-first share invitation section with buttons directly on parchment (no wrapper div)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Facebook, Instagram, Copy, Check } from 'lucide-react';

export const ShareInvitation: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href.split('#')[0];
    }
    return 'https://raj-chandrani-25th.com';
  };

  const inviteMessage =
    "Namaskar! You are cordially invited to celebrate the 25th Wedding Anniversary (Silver Jubilee) of Raj & Chandrani on Saturday, 23rd January 2027 at ADB Manor, Kolkata.\n\nView the invitation: ";

  const handleWhatsAppShare = () => {
    const url = getShareUrl();
    const fullText = `${inviteMessage}${url}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(fullText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFacebookShare = () => {
    const url = getShareUrl();
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramShare = async () => {
    const url = getShareUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Raj & Chandrani's 25th Wedding Anniversary",
          text: "Join us in celebrating 25 Years of Togetherness with Raj & Chandrani!",
          url,
        });
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setToast('Link copied! Paste in your Instagram story or message.');
        setTimeout(() => setToast(null), 3000);
      } catch {
        // Fallback
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      const url = getShareUrl();
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setToast('Invitation link copied to clipboard!');
        setTimeout(() => {
          setCopied(false);
          setToast(null);
        }, 2500);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="share"
      className="relative text-[#2A1E17] pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 md:pb-14 mb-6 sm:mb-8 px-3 sm:px-4 md:px-6 overflow-hidden text-center"
    >
      <div className="max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Header with appear animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <span className="font-cinzel text-xs sm:text-[13px] md:text-sm tracking-[0.28em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            SPREAD THE JOY
          </span>

          <h2 className="font-script-romantic text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
            Share the Celebration
          </h2>

          <p className="font-serif-luxury italic text-sm sm:text-[15px] md:text-base text-[#22130A] font-semibold leading-relaxed max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-2 mb-7 md:mb-9 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            Invite family and dear friends to join our 25th wedding anniversary celebration.
          </p>
        </motion.div>

        {/* 4 Share Buttons directly on parchment without wrapper card div with staggered appear and all-time subtle floating wave */}
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-3.5">
          {/* 1. WhatsApp Button */}
          <motion.button
            type="button"
            onClick={handleWhatsAppShare}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -2, 0] }}
            className="py-2.5 sm:py-3 md:py-3.5 px-2 sm:px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs sm:text-sm md:text-base tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] shrink-0" />
            <span>WhatsApp</span>
          </motion.button>

          {/* 2. Facebook Button */}
          <motion.button
            type="button"
            onClick={handleFacebookShare}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -2, 0] }}
            className="py-2.5 sm:py-3 md:py-3.5 px-2 sm:px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs sm:text-sm md:text-base tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1877F2] shrink-0" />
            <span>Facebook</span>
          </motion.button>

          {/* 3. Instagram Button */}
          <motion.button
            type="button"
            onClick={handleInstagramShare}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.19 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -2, 0] }}
            className="py-2.5 sm:py-3 md:py-3.5 px-2 sm:px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs sm:text-sm md:text-base tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E4405F] shrink-0" />
            <span>Instagram</span>
          </motion.button>

          {/* 4. Copy Link Button */}
          <motion.button
            type="button"
            onClick={handleCopyLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{ y: [0, -2, 0] }}
            className="py-2.5 sm:py-3 md:py-3.5 px-2 sm:px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs sm:text-sm md:text-base tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span className="text-emerald-800">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#784A15] shrink-0" />
                <span>Copy Link</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Toast / Feedback Notice */}
        {toast && (
          <div className="mt-4 py-1.5 px-3.5 rounded-full bg-[#EAD6BB]/90 border border-[#C5A77B]/60 text-xs font-sans-clean font-semibold text-[#3D2512] text-center shadow-xs">
            {toast}
          </div>
        )}
      </div>
    </section>
  );
};
