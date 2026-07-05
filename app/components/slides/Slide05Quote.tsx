"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { GrowingTree } from "../AnimatedSVGs";

interface SlideProps {
  isActive: boolean;
}

export default function Slide05Quote({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || !textRef.current || hasAnimated.current)
      return;
    hasAnimated.current = true;

    const words = textRef.current.querySelectorAll(".quote-word");
    
    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".quote-author"),
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        words,
        { opacity: 0, y: 20, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.5)",
        },
        "-=0.5"
      )
      .fromTo(
        ref.current.querySelector(".quote-image"),
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
        "-=1.5"
      );
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  // Split text for word-by-word animation
  const quote =
    "Someone's sitting in the shade today because someone planted a tree a long time ago.";
  const wordElements = quote.split(" ").map((word, i) => (
    <span key={i} className="quote-word inline-block mr-3 origin-bottom">
      {word}
    </span>
  ));

  return (
    <div
      ref={ref}
      className="slide-cinematic w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-8 lg:px-20 lg:py-12"
    >
      {/* Background Image */}
      <div className="quote-image opacity-0 absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop"
          alt="Forest canopy"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/80 backdrop-blur-sm z-10" />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-[500px] bg-gradient-to-t from-primary-950 to-transparent z-10 pointer-events-none" />

      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <GrowingTree isActive={isActive} />
      </div>

      <div className="slide-badge glass-green text-primary-300 z-30">05</div>

      {/* Quote Container */}
      <div className="relative z-30 w-full max-w-5xl text-center">
        <p className="quote-author opacity-0 text-primary-400 font-semibold tracking-widest uppercase mb-8">
          — Warren Buffett
        </p>

        <p
          ref={textRef}
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
          style={{ fontFamily: "var(--font-outfit)", perspective: "800px" }}
        >
          {wordElements}
        </p>
      </div>
    </div>
  );
}
