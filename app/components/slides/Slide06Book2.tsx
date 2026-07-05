"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SlideProps {
  isActive: boolean;
}

const insightIcons = [
  <svg key="i0" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#10b981" strokeWidth="2" strokeLinejoin="round" /><path d="M2 17L12 22L22 17" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 12L12 17L22 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="i1" width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#10b981" strokeWidth="2" /><path d="M12 8L16 12L12 16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 12H16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  <svg key="i2" width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
];

const insights = [
  {
    title: "Market Saturation",
    body: "Traditional marketing is failing because the market is flooded with identical offerings.",
  },
  {
    title: "Be Remarkable",
    body: "Businesses must innovate to create products or services that are inherently worth noticing and talking about.",
  },
  {
    title: "Built-in Marketing",
    body: "Design your service offering to stand out so drastically that it becomes its own driving marketing force.",
  },
];

export default function Slide06Book2({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".book2-header"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ref.current.querySelector(".cow-svg"),
        { scale: 0.8, opacity: 0, rotate: -15 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.4"
      )
      .fromTo(
        ref.current.querySelectorAll(".insight2-card"),
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=0.4"
      )
      .fromTo(
        ref.current.querySelector(".book2-image-card"),
        { x: 50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    gsap.to(ref.current.querySelector(".cow-star"), {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(ref.current.querySelector(".cow-svg"), {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
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
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="slide-badge glass-green text-primary-300">
        06
      </div>

      {/* Header */}
      <div className="book2-header opacity-0 text-center mb-6 relative z-10">
        <p className="text-sm text-primary-600 uppercase tracking-[0.2em] mb-2 font-medium">
          Strategic Insights
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Purple <span className="text-primary-500">Cow</span> Daniel
        </h2>
        <p className="text-sm text-primary-600/50 mt-2 font-light">
          Adapted from Seth Godin&apos;s Purple Cow
        </p>
      </div>

      {/* Animated cow/star icon */}
      <div className="cow-svg opacity-0 relative z-10 mb-6">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle
            className="cow-star"
            cx="40"
            cy="40"
            r="35"
            fill="rgba(16,185,129,0.08)"
            stroke="rgba(16,185,129,0.2)"
            strokeWidth="1"
          />
          <path
            d="M40 15L46 30L62 32L50 44L53 60L40 52L27 60L30 44L18 32L34 30L40 15Z"
            fill="rgba(16,185,129,0.3)"
            stroke="rgba(16,185,129,0.5)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Grid Layout */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[2fr_1fr] md:grid-cols-[1.5fr_1fr] gap-4 md:gap-6">
        
        {/* 3 Insight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="insight2-card glass-card p-4 md:p-6 flex flex-col gap-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
                {insightIcons[i]}
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {insight.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {insight.body}
              </p>
            </div>
          ))}
        </div>

        {/* Added Image Card */}
        <div className="book2-image-card opacity-0 glass-card overflow-hidden min-h-[250px] rounded-2xl img-bw-hover">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Stand Out Strategy"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="img-overlay bg-gradient-to-t from-primary-900/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4 z-10">
            <p className="text-white font-bold" style={{ fontFamily: "var(--font-outfit)" }}>Standing Out</p>
            <p className="text-primary-100 text-xs">Differentiation is key</p>
          </div>
        </div>

      </div>
    </div>
  );
}
