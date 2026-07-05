"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SlideProps {
  isActive: boolean;
}

const mindsetCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#059669" strokeWidth="2" />
        <path d="M12 7V12L15 15" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Think Like an Investor",
    body: "Approach every deal and market shift with an analytical, investment-first perspective to maximize value.",
    color: "from-primary-600/20 to-primary-800/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 5H20V19H4V5Z" stroke="#059669" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 9H20" stroke="#059669" strokeWidth="2" />
        <path d="M8 13H16" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 16H13" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Use Proven Systems",
    body: "Success is systematic. Rely on established models rather than leaving market outcomes to chance.",
    color: "from-primary-500/20 to-primary-700/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 6V12H18" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 17L22 22" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Learn from Experience",
    body: "Engage with mentors and industry leaders to navigate complexities and accelerate professional growth.",
    color: "from-primary-600/20 to-primary-800/10",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#059669" strokeWidth="2" />
        <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="#059669" strokeWidth="2" />
        <path d="M12 12V16" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 14H14" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Deploy Capital Wisely",
    body: "Ensure resources are allocated efficiently to maximize returns and mitigate financial risks effectively.",
    color: "from-primary-500/20 to-primary-700/10",
  },
];

export default function Slide03Mindset({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".mindset-title"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    ).fromTo(
      ref.current.querySelectorAll(".mindset-card"),
      { y: 60, opacity: 0, scale: 0.85 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
      },
      "-=0.3"
    ).fromTo(
      ref.current.querySelector(".mindset-image"),
      { x: 50, opacity: 0, scale: 0.9 },
      { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    /* Floating icon animation */
    ref.current.querySelectorAll(".card-icon").forEach((icon, i) => {
      gsap.to(icon, {
        y: -8,
        duration: 2 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className="slide-light w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-12"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="slide-badge glass-green text-primary-300">03</div>

      {/* Header */}
      <div className="mindset-title opacity-0 text-center mb-8 relative z-10">
        <p className="text-sm text-primary-600 uppercase tracking-[0.2em] mb-2 font-medium">
          Core Philosophy
        </p>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Professional Mindset
          <br />
          <span className="text-primary-600">&amp; Strategy</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-4 md:gap-6">
        {/* Bento 2x2 Grid */}
        <div className="bento-grid bento-grid-2x2">
          {mindsetCards.map((card, i) => (
            <div
              key={i}
              className="mindset-card opacity-0 glass-card p-4 md:p-5 flex flex-col group"
            >
              <div className="card-icon w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                {card.icon}
              </div>
              <h3
                className="text-base md:text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {card.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="mindset-image opacity-0 rounded-2xl overflow-hidden min-h-[300px] img-bw-hover hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Office Strategy"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="img-overlay bg-gradient-to-t from-primary-900/60 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
