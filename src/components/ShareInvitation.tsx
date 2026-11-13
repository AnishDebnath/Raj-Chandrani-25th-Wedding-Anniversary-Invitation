// ponytail: mobile-first share invitation section with identical mobile font size on all devices
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
    "Namaskar! You are cordially invited to the 25th Wedding Anniversary of RAJ & CHANDRANI on Saturday evening, 23rd January 2027 at ADB MANOR, 69/1 Purna Das Road, Kolkata-700029 (beside Triangular Park). Program starts by 6:00 PM onwards.\n\nInvitation from our son RITHVIK.\nR.S.V.P.: 9433007412 (Raj) · 9432854364 (Chandrani)\n\nView Invitation: ";

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
      className="relative text-[#2A1E17] pt-10 sm:pt-12 pb-8 sm:pb-10 mb-6 px-3 sm:px-4 overflow-hidden text-center"
    >
      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* Section Header with appear animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <span className="font-cinzel text-xs tracking-[0.28em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
            SPREAD THE CELEBRATION
          </span>

          <h2 className="font-script-romantic text-3xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
            Share the Invitation
          </h2>

          <p className="font-serif-luxury italic text-sm text-[#22130A] font-semibold leading-relaxed max-w-sm mt-2 mb-7 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
            Invite family and dear friends to join the 25th Wedding Anniversary of Raj &amp; Chandrani.
          </p>
        </motion.div>

        {/* 4 Share Buttons in 2x2 grid with appear animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="w-full grid grid-cols-2 gap-2.5 sm:gap-3"
        >
          {/* 1. WhatsApp Button */}
          <motion.button
            type="button"
            onClick={handleWhatsAppShare}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="py-2.5 px-2 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
            <span>WhatsApp</span>
          </motion.button>

          {/* 2. Facebook Button */}
          <motion.button
            type="button"
            onClick={handleFacebookShare}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="py-2.5 px-2 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Facebook className="w-3.5 h-3.5 text-[#1877F2] shrink-0" />
            <span>Facebook</span>
          </motion.button>

          {/* 3. Instagram Button */}
          <motion.button
            type="button"
            onClick={handleInstagramShare}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="py-2.5 px-2 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            <Instagram className="w-3.5 h-3.5 text-[#E4405F] shrink-0" />
            <span>Instagram</span>
          </motion.button>

          {/* 4. Copy Link Button */}
          <motion.button
            type="button"
            onClick={handleCopyLink}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="py-2.5 px-2 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-1.5 shadow-xs hover:shadow-sm transition-all cursor-pointer whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span className="text-emerald-800">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#784A15] shrink-0" />
                <span>Copy Link</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Toast / Feedback Notice */}
        {toast && (
          <div className="mt-4 px-4 py-2 bg-[#20150F] text-[#FAF4EA] text-xs rounded-full shadow-lg border border-[#D5C0A5]/40 animate-fade-in">
            {toast}
          </div>
        )}
      </div>
    </section>
  );
};
