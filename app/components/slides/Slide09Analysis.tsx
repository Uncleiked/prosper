"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SlideProps {
  isActive: boolean;
}

export default function Slide09Analysis({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".analysis-header"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ref.current.querySelectorAll(".section-label"),
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        ref.current.querySelectorAll(".analysis-card"),
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "back.out(1.3)",
        },
        "-=0.3"
      )
      .fromTo(
        ref.current.querySelector(".analysis-image"),
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className="slide-dark-alt w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-10"
    >
      {/* Background Image full screen */}
      <div className="analysis-image opacity-0 absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          alt="Analytics and growth"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/85 backdrop-blur-md z-10" />
      </div>

      <div className="slide-badge glass-green text-primary-300 z-20">09</div>

      {/* Header */}
      <div className="analysis-header opacity-0 text-center mb-8 relative z-20">
        <p className="text-sm text-primary-400 uppercase tracking-[0.2em] mb-2 font-medium">
          Growth Framework
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Strategic Analysis &amp;
          <br />
          <span className="text-gradient">Digital Growth</span>
        </h2>
      </div>

      {/* Two-section layout */}
      <div className="relative z-20 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* LEFT: SWOT */}
        <div>
          <div className="section-label opacity-0 flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-primary-500 rounded-full" />
            <span className="text-sm text-primary-400 uppercase tracking-wider font-semibold">
              SWOT Framework Strategy
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="analysis-card opacity-0 glass-card p-4 md:p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="#10b981" strokeWidth="2" />
                    <path d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Personal — Engr. Daniel
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Mapping internal strengths and weaknesses alongside external
                    opportunities and threats in Nigeria&apos;s evolving market to
                    refine advisory capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="analysis-card opacity-0 glass-card p-4 md:p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="2" stroke="#10b981" strokeWidth="2" />
                    <rect x="13" y="3" width="8" height="8" rx="2" stroke="#10b981" strokeWidth="2" />
                    <rect x="3" y="13" width="8" height="8" rx="2" stroke="#10b981" strokeWidth="2" />
                    <rect x="13" y="13" width="8" height="8" rx="2" stroke="#10b981" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-sm font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Company — Olawale Jordan
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Highlighting the competitive position, revealing clear
                    opportunities to strengthen market presence and efficiently
                    scale operations in Q3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Digital Presence */}
        <div>
          <div className="section-label opacity-0 flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-primary-400 rounded-full" />
            <span className="text-sm text-primary-400 uppercase tracking-wider font-semibold">
              Digital Presence — Google scholar
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="analysis-card opacity-0 glass-card p-4 md:p-5 flex items-start gap-3 border-l-4 border-l-primary-500">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3
                  className="text-sm font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Claim &amp; Detail
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  Register company, add services, and operating hours to
                  establish online presence.
                </p>
              </div>
            </div>

            <div className="analysis-card opacity-0 glass-card p-4 md:p-5 flex items-start gap-3 border-l-4 border-l-primary-300">
              <div className="w-10 h-10 rounded-xl bg-primary-300/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="#6ee7b7" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3
                  className="text-sm font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Collect Reviews
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  Leverage happy clients to build credibility and trust in the
                  market.
                </p>
              </div>
            </div>

            <div className="analysis-card opacity-0 glass-card p-4 md:p-5 flex items-start gap-3 border-l-4 border-l-primary-400">
              <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4V20H20" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16L10 10L14 14L20 8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3
                  className="text-sm font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Stay Active
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  Post regular updates to attract new leads and maintain
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
