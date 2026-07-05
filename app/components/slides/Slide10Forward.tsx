"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ConfettiBurst, ParticleField } from "../AnimatedSVGs";

interface SlideProps {
  isActive: boolean;
}

const momentum = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17L9 11L13 15L21 7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7H21V11" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Leverage Market Knowledge",
    body: "Transform economic shifts into strategic advisory opportunities for clients.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="#10b981" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="#10b981" strokeWidth="2" />
        <path d="M12 8V12L14 14" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Optimize Digital Presence",
    body: "Implement Google Business Profile strategies for wider reach and client trust.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Cultivate Remarkability",
    body: 'Apply the "Green Cow" concept to differentiate services and stand out.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 2L12 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 2H22V7" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Drive Disciplined Growth",
    body: "Apply proven models to scale the business sustainably with measured tactics.",
  },
];

export default function Slide10Forward({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".forward-header"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ref.current.querySelectorAll(".momentum-card"),
        { y: 60, opacity: 0, scale: 0.85 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.5)",
        },
        "-=0.3"
      )
      .fromTo(
        ref.current.querySelector(".thank-you"),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      )
      .fromTo(
        ref.current.querySelector(".forward-image"),
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=1"
      );
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className="animated-gradient w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-12"
    >
      {/* Background effects */}
      <ParticleField isActive={isActive} />
      <ConfettiBurst isActive={isActive} />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="slide-badge glass-green text-primary-300 z-20">10</div>

      <div className="relative z-20 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 md:gap-10 items-center">
        
        {/* Left Side: Cards & Thank you */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Header */}
          <div className="forward-header opacity-0 mb-8 w-full">
            <p className="text-sm text-primary-300 uppercase tracking-[0.2em] mb-2 font-medium">
              Looking Ahead
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Q3 Forward
              <br />
              <span className="text-gradient-light">Momentum</span>
            </h2>
          </div>

          {/* 4 Momentum Cards in 2x2 */}
          <div className="w-full bento-grid bento-grid-2x2 mb-8">
            {momentum.map((item, i) => (
              <div
                key={i}
                className="momentum-card opacity-0 glass-card p-4 md:p-5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-500/15 flex items-center justify-center mb-4 group-hover:bg-primary-500/25 transition-colors">
                  {item.icon}
                </div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Thank You */}
          <div className="thank-you opacity-0 w-full">
            <div className="glass-strong glow-strong px-6 py-6 md:px-8 rounded-2xl inline-block w-full">
              <h3
                className="text-3xl sm:text-4xl font-bold text-gradient mb-3"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Thank You
              </h3>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent lg:from-primary-400 via-primary-400 to-transparent lg:to-transparent mx-auto lg:mx-0 mb-3" />
              <p className="text-sm text-white/60">
                <span className="font-semibold text-primary-300">
                  Olawale Jordan
                </span>
                <span className="mx-2 text-primary-500">•</span>
                Q2 2026
              </p>
              <p className="text-xs text-white/40 mt-1">
                Presented by Engr. Daniel Prosper Enamegbai
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="forward-image opacity-0 w-full h-[500px] lg:h-[700px] relative rounded-[2rem] overflow-hidden glass-card img-bw-hover hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1556761175-129418cb210d?q=80&w=1932&auto=format&fit=crop"
            alt="Business Team Handshake"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="img-overlay bg-gradient-to-tr from-primary-950/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 z-10">
            <p className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-outfit)" }}>Ready for Q3</p>
            <p className="text-primary-300 text-sm">Building stronger partnerships</p>
          </div>
        </div>

      </div>
    </div>
  );
}
