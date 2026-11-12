// ponytail: mobile-first share invitation section with buttons directly on parchment (no wrapper div)
import React, { useState } from 'react';
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
      className="relative text-[#2A1E17] pt-10 sm:pt-12 pb-8 sm:pb-12 mb-6 sm:mb-8 px-4 overflow-hidden text-center"
    >
      <div className="max-w-sm mx-auto relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.32em] text-[#542F07] uppercase font-bold leading-none mb-1.5 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          SPREAD THE JOY
        </span>

        <h2 className="font-script-romantic text-4xl sm:text-5xl text-[#0F0804] leading-tight my-1 drop-shadow-[0_1px_2px_rgba(255,255,255,0.85)] font-normal">
          Share the Celebration
        </h2>

        <p className="font-serif-luxury italic text-xs sm:text-[13.5px] text-[#22130A] font-semibold leading-relaxed max-w-[340px] sm:max-w-sm mt-2 mb-7 drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
          Invite family and dear friends to join our 25th wedding anniversary celebration.
        </p>

        {/* 4 Share Buttons directly on parchment without wrapper card div */}
        <div className="w-full grid grid-cols-2 gap-2.5 sm:gap-3">
          {/* 1. WhatsApp Button */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="py-3 px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-xs hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span>WhatsApp</span>
          </button>

          {/* 2. Facebook Button */}
          <button
            type="button"
            onClick={handleFacebookShare}
            className="py-3 px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-xs hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <Facebook className="w-4 h-4 text-[#1877F2] shrink-0" />
            <span>Facebook</span>
          </button>

          {/* 3. Instagram Button */}
          <button
            type="button"
            onClick={handleInstagramShare}
            className="py-3 px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-xs hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <Instagram className="w-4 h-4 text-[#E4405F] shrink-0" />
            <span>Instagram</span>
          </button>

          {/* 4. Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="py-3 px-3 rounded-2xl border border-[#BFA075] bg-white/70 hover:bg-white text-[#180E08] font-sans-clean font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-xs hover:shadow-sm active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="text-emerald-800">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#784A15] shrink-0" />
                <span>Copy Link</span>
              </>
            )}
          </button>
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
