"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface SlideProps {
  isActive: boolean;
}

/* Animated Counter Component */
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  isActive,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  isActive: boolean;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return;
    }

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      delay: 0.8,
      onUpdate: () => setValue(Math.round(obj.val)),
    });
  }, [isActive, target]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const deals = [
  {
    title: "4-Bed Semi Detached",
    location: "Dolphin",
    amount: 230000,
    color: "border-l-primary-400",
  },
  {
    title: "Beach House",
    location: "Lekki",
    amount: 200000,
    color: "border-l-primary-600",
  },
  {
    title: "Mini Flat",
    location: "",
    amount: 15000,
    color: "border-l-primary-300",
  },
];

export default function Slide08Deals({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".deals-header"),
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    )
      .fromTo(
        ref.current.querySelectorAll(".deal-card"),
        { x: -50, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
        },
        "-=0.3"
      )
      .fromTo(
        ref.current.querySelector(".total-card"),
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ref.current.querySelector(".deals-image-card"),
        { x: 50, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className="slide-light w-full h-full relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 md:px-6 md:py-12"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="slide-badge glass-green text-primary-300">
        08
      </div>

      {/* Header */}
      <div className="deals-header opacity-0 text-center mb-10 relative z-10">
        <p className="text-sm text-primary-300 uppercase tracking-[0.2em] mb-2 font-medium">
          Performance
        </p>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Q2 2026 Deals{" "}
          <span className="text-primary-400">Closed</span>
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 md:gap-6">
        
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {deals.map((deal, i) => (
              <div
                key={i}
                className={`deal-card glass-card opacity-0 p-4 md:p-5 flex flex-col justify-center border-l-4 ${deal.color}`}
              >
                <div className="text-xs text-white/50 uppercase tracking-wider mb-2">
                  {deal.location || "Property"}
                </div>
                <h3
                  className="text-base font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {deal.title}
                </h3>
                <div className="text-2xl font-bold text-primary-300 font-display">
                  <AnimatedCounter target={deal.amount} prefix="₦" isActive={isActive} />
                </div>
              </div>
            ))}
          </div>

          {/* Total Summary Card */}
          <div className="total-card opacity-0 w-full p-4 md:p-6 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-800 text-white shadow-xl mt-2">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-primary-200 uppercase tracking-wider mb-1">
                  Total Q2 Volume
                </p>
                <div
                  className="text-4xl font-bold"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <AnimatedCounter target={445000} prefix="₦" isActive={isActive} />
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-primary-200/80 max-w-xs leading-relaxed">
                  A strong quarter reflecting precise strategic positioning, market
                  adaptability, and trusted client relationships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Added Image Card */}
        <div className="deals-image-card opacity-0 light-card rounded-2xl overflow-hidden min-h-[300px] img-bw-hover hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            alt="Luxury Real Estate"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="img-overlay bg-gradient-to-t from-primary-900/60 to-transparent"></div>
        </div>

      </div>
    </div>
  );
}
