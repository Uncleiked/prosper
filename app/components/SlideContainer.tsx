"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

import Slide01Hero from "./slides/Slide01Hero";
import Slide02Profile from "./slides/Slide02Profile";
import Slide03Mindset from "./slides/Slide03Mindset";
import Slide04Book1 from "./slides/Slide04Book1";
import Slide05Quote from "./slides/Slide05Quote";
import Slide06Book2 from "./slides/Slide06Book2";
import Slide07Market from "./slides/Slide07Market";
import Slide08Deals from "./slides/Slide08Deals";
import Slide09Analysis from "./slides/Slide09Analysis";
import Slide10Forward from "./slides/Slide10Forward";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const TOTAL_SLIDES = 10;

const slideComponents = [
  Slide01Hero,
  Slide02Profile,
  Slide03Mindset,
  Slide04Book1,
  Slide05Quote,
  Slide06Book2,
  Slide07Market,
  Slide08Deals,
  Slide09Analysis,
  Slide10Forward,
];

/* ─── Slide Progress Indicator (clickable) ─── */
function SlideIndicator({
  activeSlide,
  onClickSlide,
}: {
  activeSlide: number;
  onClickSlide: (index: number) => void;
}) {
  return (
    <div className={clsx('fixed', 'right-3', 'md:right-6', 'top-1/2', '-translate-y-1/2', 'z-50', 'flex', 'flex-col', 'gap-2', 'md:gap-2.5')}>
      {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
        <button
          key={i}
          onClick={() => onClickSlide(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`rounded-full transition-all duration-500 cursor-pointer hover:scale-125 ${
            activeSlide === i
              ? "w-2 h-6 md:w-3 md:h-8 bg-primary-400 shadow-[0_0_16px_rgba(52,211,153,0.6)]"
              : "w-2 h-2 md:w-3 md:h-3 bg-white/25 hover:bg-white/50"
          }`}
        />
      ))}
    </div>
  );
}

/* ─── Main Slide Container with Dice-Roll Engine ─── */
export default function SlideContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(0);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  /* Scroll to a specific slide when clicking a dot */
  const scrollToSlide = useCallback((index: number) => {
    const st = triggerRef.current;
    if (!st) return;
    const progress = index / (TOTAL_SLIDES - 1);
    const scrollPos = st.start + progress * (st.end - st.start);
    gsap.to(window, {
      scrollTo: { y: scrollPos },
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, []);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".slide-panel");

      /* Initial state: hide all except first */
      panels.forEach((panel, i) => {
        if (i !== 0) {
          gsap.set(panel, {
            rotateX: 90,
            opacity: 0,
            zIndex: 0,
          });
        } else {
          gsap.set(panel, {
            rotateX: 0,
            opacity: 1,
            zIndex: 1,
          });
        }
      });

      /* Build the main dice-roll timeline */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${(TOTAL_SLIDES - 1) * window.innerHeight}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (TOTAL_SLIDES - 1),
            duration: { min: 0.3, max: 0.7 },
            ease: "power3.inOut",
            delay: 0.05,
          },
          onUpdate: (self) => {
            const newSlide = Math.round(
              self.progress * (TOTAL_SLIDES - 1)
            );
            if (activeSlideRef.current !== newSlide) {
              activeSlideRef.current = newSlide;
              setActiveSlide(newSlide);
            }
          },
        },
      });

      /* Store the ScrollTrigger reference for dot navigation */
      triggerRef.current = tl.scrollTrigger!;

      /* Add dice-roll transitions for each slide pair */
      for (let i = 0; i < TOTAL_SLIDES - 1; i++) {
        const current = panels[i];
        const next = panels[i + 1];

        /* Current slide: rotate backward (up), fading out */
        tl.to(
          current,
          {
            rotateX: -90,
            opacity: 0,
            zIndex: 0,
            transformOrigin: "50% 100%",
            duration: 1,
            ease: "power2.inOut",
          },
          i
        );

        /* Next slide: rotate forward (into view), fading in */
        tl.fromTo(
          next,
          {
            rotateX: 90,
            opacity: 0,
            zIndex: 1,
            transformOrigin: "50% 0%",
          },
          {
            rotateX: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          i
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <>
      <SlideIndicator activeSlide={activeSlide} onClickSlide={scrollToSlide} />
      <div ref={containerRef} className="relative">
        <div
          className={clsx('relative', 'w-full', 'h-[100dvh]', 'overflow-hidden', 'bg-primary-950')}
          style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
        >
          {slideComponents.map((SlideComponent, i) => (
            <div
              key={i}
              className={clsx('slide-panel', 'absolute', 'inset-0', 'w-full', 'h-full', 'will-change-transform')}
              style={{ backfaceVisibility: "hidden" }}
            >
              <SlideComponent isActive={activeSlide === i} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
