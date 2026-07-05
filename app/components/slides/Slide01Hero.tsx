"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ParticleField } from "../AnimatedSVGs";
import clsx from "clsx";

interface SlideProps {
  isActive: boolean;
}

export default function Slide01Hero({ isActive }: SlideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || !ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline();

    tl.fromTo(
      ref.current.querySelector(".hero-badge"),
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
      .fromTo(
        ref.current.querySelector(".hero-title"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        ref.current.querySelector(".hero-subtitle"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        ref.current.querySelector(".hero-image-card"),
        { scale: 0.95, opacity: 0, x: 50 },
        { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.5"
      );
  }, [isActive]);

  useEffect(() => {
    if (!isActive) hasAnimated.current = false;
  }, [isActive]);

  return (
    <div
      ref={ref}
      className={clsx('slide-dark', 'w-full', 'h-full', 'relative', 'flex', 'items-center', 'justify-center', 'overflow-hidden', 'px-4', 'py-8', 'sm:px-6', 'md:px-8', 'lg:px-12')}
    >
      <ParticleField isActive={isActive} />

      <div className={clsx('absolute', 'top-0', 'right-0', 'w-[800px]', 'h-[800px]', 'bg-primary-600/10', 'rounded-full', 'blur-[150px]', 'pointer-events-none')} />

      <div className={clsx('slide-badge', 'glass-green', 'text-primary-300')}>01</div>

      <div className={clsx('relative', 'z-10', 'w-full', 'max-w-6xl', 'grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-6', 'md:gap-10', 'items-center')}>
        {/* Left: Text Content */}
        <div className={clsx('flex', 'flex-col', 'items-start', 'text-left')}>
          <div className={clsx('hero-badge', 'opacity-0', 'inline-flex', 'items-center', 'gap-2', 'px-4', 'py-2', 'rounded-full', 'glass-green', 'border', 'border-primary-500/30', 'mb-8')}>
            <div className={clsx('w-2', 'h-2', 'rounded-full', 'bg-primary-400', 'animate-pulse')} />
            <span className={clsx('text-xs', 'font-semibold', 'text-primary-300', 'tracking-[0.2em]', 'uppercase')}>
              Olawale Jordan
            </span>
          </div>

          <h1
            className={clsx('hero-title', 'opacity-0', 'text-4xl/tight', 'md:text-6xl/tight', 'lg:text-7xl/tight', 'font-bold', 'text-white', 'mb-6')}
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Q2 2026
            <br />
            <span className="text-gradient">Performance</span>
            <br />
            Appraisal
          </h1>

          <div className={clsx('hero-subtitle', 'opacity-0', 'glass-strong', 'p-4', 'md:p-8', 'border-l-4', 'border-l-primary-500')}>
            <p className={clsx('text-base', 'md:text-lg', 'text-primary-100', 'font-medium', 'mb-1')}>
              Presented by
            </p>
            <p className={clsx('text-xl', 'md:text-2xl', 'font-bold', 'text-white', 'mb-2')} style={{ fontFamily: "var(--font-outfit)" }}>
              Engr. Daniel Prosper Enamegbai
            </p>
            <p className={clsx('text-xs', 'md:text-sm', 'text-primary-300/80')}>April – June 2026</p>
          </div>
        </div>

        {/* Right: Image Card */}
        <div className={clsx('hero-image-card', 'opacity-0', 'w-full', 'h-[400px]', 'lg:h-[600px]', 'relative', 'rounded-[2rem]', 'overflow-hidden', 'glass-card', 'img-bw-hover', 'hidden', 'md:block')}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Real Estate"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className={clsx('img-overlay', 'bg-gradient-to-tr', 'from-primary-950/80', 'via-transparent', 'to-transparent')}></div>
        </div>
      </div>
    </div>
  );
}
