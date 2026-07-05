"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SlideProps {
  isActive: boolean;
}

export default function Slide02Profile({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".profile-header"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ref.current.querySelector(".profile-photo-card"),
        { x: -60, opacity: 0, rotateY: -15 },
        { x: 0, opacity: 1, rotateY: 0, duration: 0.9, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ref.current.querySelectorAll(".skill-card"),
        { x: 60, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.3)",
        },
        "-=0.5"
      )
      .fromTo(
        ref.current.querySelector(".profile-bio"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className="slide-dark-alt w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6"
    >
      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="slide-badge glass-green text-primary-300">02</div>

      {/* Header */}
      <div className="profile-header opacity-0 text-center mb-6 relative z-10">
        <p className="text-sm text-primary-400 uppercase tracking-[0.2em] mb-2 font-medium">
          Presenter Profile
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Engr. Daniel Prosper
          <br />
          <span className="text-gradient">Enamegbai</span>
        </h2>
      </div>

      {/* Bento Grid: Photo + Skills */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 items-stretch">
        {/* Photo Card */}
        <div className="profile-photo-card glass-strong glow p-2 flex flex-col md:row-span-3">
          <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden img-bw-hover">
            <Image
              src="/prosper.jpg"
              alt="Engr. Daniel Prosper Enamegbai"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-primary-950/90 to-transparent">
              <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                Engr. Daniel P. Enamegbai
              </p>
              <p className="text-primary-300 text-sm">
                Real Estate Investment Strategist
              </p>
            </div>
          </div>
        </div>

        {/* Skill Card 1 */}
        <div className="skill-card glass-card p-4 md:p-5 flex gap-4 items-start">
          <div className="w-11 h-11 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-1">
              Investment Analysis
            </h3>
            <p className="text-white/50 text-xs leading-relaxed">
              Finds high-potential opportunities early and turns complexity into
              results.
            </p>
          </div>
        </div>

        {/* Skill Card 2 */}
        <div className="skill-card glass-card p-4 md:p-5 flex gap-4 items-start">
          <div className="w-11 h-11 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 17L9 11L13 15L21 7"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 7H21V11"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-1">
              Market Strategy
            </h3>
            <p className="text-white/50 text-xs leading-relaxed">
              Reads economic shifts and guides actionable, decisive strategies.
            </p>
          </div>
        </div>

        {/* Skill Card 3 — Portfolio */}
        <div className="skill-card glass-card p-4 md:p-5 flex gap-4 items-start">
          <div className="w-11 h-11 rounded-xl bg-primary-600/20 flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#10b981" strokeWidth="2" />
              <path d="M9 3V21" stroke="#10b981" strokeWidth="2" />
              <path d="M3 9H21" stroke="#10b981" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-1">
              Portfolio Optimization
            </h3>
            <p className="text-white/50 text-xs leading-relaxed">
              Aligns real estate assets for stronger, more resilient returns.
            </p>
          </div>
        </div>
      </div>

      {/* Bio footer */}
      <p className="profile-bio opacity-0 relative z-10 mt-5 text-center text-sm md:text-base text-primary-300/70 max-w-2xl leading-relaxed">
        Bringing sharp insight to investment strategy, market analysis, and
        sustainable growth across Nigeria&apos;s real estate sector.
      </p>
    </div>
  );
}
