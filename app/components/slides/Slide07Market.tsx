"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { RisingChart } from "../AnimatedSVGs";

interface SlideProps {
  isActive: boolean;
}

export default function Slide07Market({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".market-header"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ref.current.querySelector(".market-main"),
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ref.current.querySelector(".market-image-card"),
        { x: -50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ref.current.querySelectorAll(".market-card"),
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      );
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className="slide-dark w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-12"
    >
      <RisingChart isActive={isActive} />
      
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="slide-badge glass-green text-primary-300">07</div>

      {/* Header */}
      <div className="market-header opacity-0 text-center mb-6 relative z-10">
        <p className="text-sm text-primary-400 uppercase tracking-[0.2em] mb-2 font-medium">
          Market Dynamics
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Economic Shift
          <br />
          <span className="text-gradient">in Nigeria</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4 md:gap-6 mb-4">
        {/* Main context card */}
        <div className="market-main opacity-0 w-full glass-strong p-4 md:p-6 flex flex-col justify-center">
          <p className="text-base text-white/80 leading-relaxed mb-4 font-semibold text-primary-300">
            Global conflict and supply disruptions have driven costs sharply higher.
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            This directly impacts logistics, operational overhead, and real estate 
            development timelines across the country. Navigating this shift requires 
            strategic foresight and extreme efficiency.
          </p>
        </div>

        {/* Added Image Card */}
        <div className="market-image-card opacity-0 glass-card overflow-hidden min-h-[200px] img-bw-hover">
          <Image
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
            alt="Market Charts"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="img-overlay bg-gradient-to-t from-primary-950/90 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10">
            <p className="text-white font-bold" style={{ fontFamily: "var(--font-outfit)" }}>Market Shift</p>
            <p className="text-primary-300 text-xs">Economic analysis</p>
          </div>
        </div>
      </div>

      {/* 3 Impact Cards */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="market-card glass-card p-4 md:p-5 border-l-4 border-l-white/40">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L12 22" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 9L12 2L19 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="text-base font-bold text-white"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              The Threats
            </h3>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Transportation and construction costs have risen significantly,
            squeezing margins and delaying timelines.
          </p>
        </div>

        <div className="market-card glass-card p-4 md:p-5 border-l-4 border-l-primary-400">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 22L12 2" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
                <path d="M5 15L12 22L19 15" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="text-base font-bold text-primary-400"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              The Opportunities
            </h3>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Accelerated demand for prime sites and highly energy-efficient
            properties in key strategic locations.
          </p>
        </div>

        <div className="market-card glass-card p-4 md:p-5 border-l-4 border-l-primary-200/60">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary-200/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="#a7f3d0" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="text-base font-bold text-primary-200"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Strategic Takeaway
            </h3>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            While budgets strain, the value of strategic advisory rises. Clients
            critically need guidance on efficiency and location.
          </p>
        </div>
      </div>
    </div>
  );
}
