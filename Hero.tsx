import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Utensils } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/923058745545';
const VIDEO_PATH = '/Preparing_chicken_burger_in_stages_20260920165804 - Trim(1).mp4';

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    // Ensure video is muted and plays inline for hardware-accelerated playback
    video.muted = true;
    video.playsInline = true;
    video.defaultMuted = true;
    video.pause();

    let targetProgress = 0;
    let currentProgress = 0;
    let animationFrameId: number;
    let isMounted = true;

    const onScrollOrResize = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance > 0) {
        const scrolled = -rect.top;
        targetProgress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      }
    };

    const handleVideoReady = () => {
      setIsVideoReady(true);
      onScrollOrResize();
    };

    video.addEventListener('loadedmetadata', handleVideoReady);
    video.addEventListener('loadeddata', handleVideoReady);
    video.addEventListener('canplay', handleVideoReady);

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    // Smooth physics-based render loop for ultra-fluid cinematic scrubbing & scroll animations
    const renderLoop = () => {
      if (!isMounted) return;

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const diff = targetProgress - currentProgress;
        // Smooth lerp easing factor for fluid momentum
        if (Math.abs(diff) > 0.0002) {
          currentProgress += diff * 0.12;
          const targetTime = currentProgress * video.duration;
          if (Math.abs(video.currentTime - targetTime) > 0.015) {
            video.currentTime = targetTime;
          }
        }
      }

      // Keep hero context clearly visible and readable throughout the video scrub
      // Subtle elegant parallax translation without prematurely removing or fading out the content
      if (contentRef.current) {
        // Content remains 100% visible throughout hero scrub; only exits as user reaches the next section
        const exitProgress = Math.max(0, (currentProgress - 0.78) / 0.22);
        const opacity = Math.max(0, 1 - exitProgress);
        const translateY = -currentProgress * 50;
        
        contentRef.current.style.opacity = opacity.toFixed(3);
        contentRef.current.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        contentRef.current.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    onScrollOrResize();
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      video.removeEventListener('loadedmetadata', handleVideoReady);
      video.removeEventListener('loadeddata', handleVideoReady);
      video.removeEventListener('canplay', handleVideoReady);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero-scroll-section"
      className="hero-scroll-section relative w-full"
      style={{ height: '360vh' }}
    >
      <div className="hero-sticky sticky top-0 h-screen w-full overflow-hidden bg-[#0D0C0A] text-[#FAF8F5] select-none">
        
        {/* ====================================================================
            1. FULL-BLEED CINEMATIC MP4 VIDEO (CRYSTAL CLEAR - ZERO SHADES / OVERLAYS)
            ==================================================================== */}
        <video
          ref={videoRef}
          src={VIDEO_PATH}
          muted
          playsInline
          preload="auto"
          controls={false}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 transition-opacity duration-700 ${
            isVideoReady ? 'opacity-100' : 'opacity-90'
          }`}
        >
          <source src={VIDEO_PATH} type="video/mp4" />
          <source src="/Preparing_chicken_burger_in_stages_20260920165804%20-%20Trim(1).mp4" type="video/mp4" />
        </video>

        {/* ====================================================================
            2. FULL-BLEED SEAMLESS CONTRAST OVERLAY (ZERO SPLIT LINES, NO BLURRY HALOS)
            ==================================================================== */}
        {/* Uniform light ambient tint so food highlights never wash out text */}
        <div className="absolute inset-0 w-full h-full bg-black/25 pointer-events-none z-10" />

        {/* Smooth, full-width gradient that darkens left text area without any vertical seams */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 via-black/55 via-40% to-transparent pointer-events-none z-10" />

        {/* ====================================================================
            3. HERO CONTENT LAYER (CRISP, PROFESSIONAL TYPOGRAPHY - 100% READABLE)
            ==================================================================== */}
        <div 
          ref={contentRef}
          className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col justify-center h-full will-change-transform"
        >
          {/* Main Text Content */}
          <div className="max-w-xl lg:max-w-2xl space-y-6 sm:space-y-8">
            
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-brand font-black text-white tracking-tight uppercase leading-[1.04]">
                GOOD FOOD.<br />
                <span className="text-[#E0B86C] italic font-serif">SMART CHOICES.</span>
              </h1>

              {/* Tagline */}
              <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#FAF7F2] font-medium tracking-wide">
                “Eat Smart - Stay Fit”
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-[#E7E5E4] text-sm sm:text-base md:text-lg max-w-lg font-normal leading-relaxed">
              Fresh food, bold flavors, and satisfying choices made for every craving.
            </p>

            {/* Action CTAs: Crisp, Professional, Zero Glow */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#D4AF67] text-[#0D0C0A] px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 border border-[#D8B468]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#0D0C0A]" />
                <span className="font-['Playfair_Display',serif] font-bold">ORDER ON WHATSAPP</span>
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-[#FAF8F5] px-7 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider hover:text-[#C5A059] transition-all border border-white/20 hover:border-[#C5A059] shadow-md hover:shadow-lg active:scale-95"
              >
                <Utensils className="w-4 h-4 text-[#C5A059]" />
                <span>VIEW MENU</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

