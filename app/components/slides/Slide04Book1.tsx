"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SlideProps {
  isActive: boolean;
}

const insightIcons = [
  <svg key="i0" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M4 19V5C4 3.9 4.9 3 6 3H18C19.1 3 20 3.9 20 5V19L12 15L4 19Z" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" /></svg>,
  <svg key="i1" width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#10b981" strokeWidth="2" /><path d="M12 8V12L15 14" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="i2" width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2" /><path d="M8 12L11 15L16 9" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

const insights = [
  {
    title: "A Learnable Skill",
    body: "Reframes real estate investing from an exclusive privilege to a skill that can be mastered by anyone.",
  },
  {
    title: "Systematic Success",
    body: "Highlights the absolute necessity of building the right team and adhering to proven models.",
  },
  {
    title: "Unwavering Discipline",
    body: "Staying disciplined in the face of shifting markets is crucial for long-term portfolio growth.",
  },
];

export default function Slide04Book1({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".book-header"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ref.current.querySelector(".book-main-card"),
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        ref.current.querySelector(".book-image-card"),
        { x: -50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ref.current.querySelectorAll(".insight-card"),
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "back.out(1.4)",
        },
        "-=0.4"
      );

    /* Animated book SVG */
    const bookPages = ref.current.querySelectorAll(".book-page");
    bookPages.forEach((page, i) => {
      gsap.to(page, {
        rotateY: i % 2 === 0 ? 8 : -8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      });
    });
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className="slide-dark w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-12"
    >
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="slide-badge glass-green text-primary-300">04</div>

      {/* Header */}
      <div className="book-header opacity-0 text-center mb-8 relative z-10">
        <p className="text-sm text-primary-400 uppercase tracking-[0.2em] mb-2 font-medium">
          Strategic Insights
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          The Millionaire
          <br />
          <span className="text-gradient">Real Estate Investor</span>
        </h2>
        <p className="text-sm text-primary-400/60 mt-3 font-light">
          By Gary Keller, Dave Jenks &amp; Jay Papasan
        </p>
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="book-main-card glass-strong glow p-4 md:p-6 flex items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap mb-6 opacity-0">
          <div className="flex-shrink-0 relative" style={{ perspective: "400px" }}>
            <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
              <rect
                className="book-page"
                x="10"
                y="5"
                width="80"
                height="110"
                rx="4"
                fill="rgba(16,185,129,0.15)"
                stroke="rgba(16,185,129,0.3)"
                strokeWidth="1.5"
              />
              <rect
                className="book-page"
                x="15"
                y="10"
                width="70"
                height="100"
                rx="3"
                fill="rgba(16,185,129,0.1)"
                stroke="rgba(16,185,129,0.2)"
                strokeWidth="1"
              />
              <rect
                x="20"
                y="15"
                width="60"
                height="90"
                rx="2"
                fill="rgba(2,44,34,0.8)"
                stroke="rgba(16,185,129,0.4)"
                strokeWidth="1.5"
              />
              <text x="50" y="50" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">THE</text>
              <text x="50" y="65" textAnchor="middle" fill="#34d399" fontSize="7" fontWeight="bold">MILLIONAIRE</text>
              <text x="50" y="78" textAnchor="middle" fill="#10b981" fontSize="6">RE INVESTOR</text>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
              Key Takeaway
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Real estate is one of the most reliable wealth-building vehicles in
              human history. But success requires systems, discipline, and the
              right mentors — not luck or privilege.
            </p>
          </div>
        </div>

        {/* Bento Grid layout for Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-6">
          {/* Added Image Card */}
          <div className="book-image-card opacity-0 glass-card overflow-hidden min-h-[250px] img-bw-hover">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="img-overlay"></div>
            <div className="absolute bottom-4 left-4 z-10">
              <p className="text-white font-bold" style={{ fontFamily: "var(--font-outfit)" }}>Architectural Discipline</p>
              <p className="text-primary-300 text-xs">Foundation of growth</p>
            </div>
          </div>

          {/* 3 Insight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="insight-card opacity-0 glass-card p-4 md:p-5 flex flex-col gap-3 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-500/15 flex items-center justify-center mb-4 text-2xl group-hover:bg-primary-500/25 transition-colors">
                  {insightIcons[i]}
                </div>
                <h3
                  className="text-base font-bold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {insight.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  {insight.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
