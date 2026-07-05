"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

/* ─── Floating Geometric Shapes ─── */
export function FloatingShapes({ isActive }: { isActive: boolean }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!isActive || !ref.current) return;
    const shapes = ref.current.querySelectorAll(".shape");
    gsap.fromTo(
      shapes,
      { opacity: 0, scale: 0, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.7)",
      }
    );
    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: `random(-30, 30)`,
        x: `random(-20, 20)`,
        rotation: `random(-15, 15)`,
        duration: `random(4, 7)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, [isActive]);

  return (
    <svg
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Hexagons */}
      <polygon
        className="shape"
        points="100,50 150,25 200,50 200,100 150,125 100,100"
        fill="rgba(16,185,129,0.08)"
        stroke="rgba(16,185,129,0.15)"
        strokeWidth="1"
      />
      <polygon
        className="shape"
        points="900,150 940,130 980,150 980,190 940,210 900,190"
        fill="rgba(52,211,153,0.06)"
        stroke="rgba(52,211,153,0.12)"
        strokeWidth="1"
      />
      {/* Circles */}
      <circle
        className="shape"
        cx="300"
        cy="600"
        r="40"
        fill="rgba(16,185,129,0.05)"
        stroke="rgba(16,185,129,0.12)"
        strokeWidth="1"
      />
      <circle
        className="shape"
        cx="1050"
        cy="400"
        r="60"
        fill="rgba(52,211,153,0.04)"
        stroke="rgba(52,211,153,0.1)"
        strokeWidth="1"
      />
      <circle
        className="shape"
        cx="150"
        cy="350"
        r="25"
        fill="rgba(110,231,183,0.06)"
        stroke="rgba(110,231,183,0.15)"
        strokeWidth="1"
      />
      {/* Squares / Diamonds */}
      <rect
        className="shape"
        x="800"
        y="600"
        width="50"
        height="50"
        rx="8"
        transform="rotate(45 825 625)"
        fill="rgba(16,185,129,0.05)"
        stroke="rgba(16,185,129,0.1)"
        strokeWidth="1"
      />
      <rect
        className="shape"
        x="500"
        y="100"
        width="35"
        height="35"
        rx="6"
        transform="rotate(30 517 117)"
        fill="rgba(52,211,153,0.06)"
        stroke="rgba(52,211,153,0.12)"
        strokeWidth="1"
      />
      {/* Lines */}
      <line
        className="shape"
        x1="600"
        y1="700"
        x2="700"
        y2="650"
        stroke="rgba(16,185,129,0.1)"
        strokeWidth="1"
      />
      <line
        className="shape"
        x1="50"
        y1="200"
        x2="120"
        y2="250"
        stroke="rgba(52,211,153,0.08)"
        strokeWidth="1"
      />
    </svg>
  );
}

/* ─── Growing Tree SVG ─── */
export function GrowingTree({ isActive }: { isActive: boolean }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!isActive || !ref.current) return;
    const paths = ref.current.querySelectorAll(".tree-path");
    const leaves = ref.current.querySelectorAll(".leaf");

    paths.forEach((path) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(el, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      });
    });

    gsap.fromTo(
      leaves,
      { scale: 0, opacity: 0, transformOrigin: "center center" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 1.2,
        ease: "back.out(2)",
      }
    );
  }, [isActive]);

  return (
    <svg
      ref={ref}
      width="200"
      height="300"
      viewBox="0 0 200 300"
      fill="none"
      className="opacity-30"
    >
      {/* Trunk */}
      <path
        className="tree-path"
        d="M100 290 L100 180"
        stroke="#10b981"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Branches */}
      <path
        className="tree-path"
        d="M100 220 L65 185"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="tree-path"
        d="M100 220 L140 190"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="tree-path"
        d="M100 190 L55 150"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        className="tree-path"
        d="M100 190 L150 155"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        className="tree-path"
        d="M100 180 L80 140"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className="tree-path"
        d="M100 180 L125 135"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <circle className="leaf" cx="65" cy="180" r="14" fill="rgba(16,185,129,0.3)" />
      <circle className="leaf" cx="140" cy="185" r="12" fill="rgba(52,211,153,0.25)" />
      <circle className="leaf" cx="55" cy="145" r="16" fill="rgba(16,185,129,0.3)" />
      <circle className="leaf" cx="150" cy="150" r="13" fill="rgba(52,211,153,0.25)" />
      <circle className="leaf" cx="80" cy="135" r="15" fill="rgba(110,231,183,0.2)" />
      <circle className="leaf" cx="125" cy="130" r="14" fill="rgba(16,185,129,0.3)" />
      <circle className="leaf" cx="100" cy="115" r="18" fill="rgba(52,211,153,0.25)" />
    </svg>
  );
}

/* ─── Rising Chart Line ─── */
export function RisingChart({ isActive }: { isActive: boolean }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!isActive || !ref.current) return;
    const line = ref.current.querySelector(".chart-line") as SVGPathElement;
    const dots = ref.current.querySelectorAll(".chart-dot");
    const bars = ref.current.querySelectorAll(".chart-bar");

    if (line) {
      const length = line.getTotalLength();
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
      });
    }

    gsap.fromTo(
      dots,
      { scale: 0, opacity: 0, transformOrigin: "center center" },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.15, delay: 0.5, ease: "back.out(2)" }
    );

    gsap.fromTo(
      bars,
      { scaleY: 0, transformOrigin: "bottom center" },
      { scaleY: 1, duration: 0.6, stagger: 0.1, delay: 0.3, ease: "power2.out" }
    );
  }, [isActive]);

  return (
    <svg
      ref={ref}
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      className="opacity-25"
    >
      {/* Grid lines */}
      <line x1="40" y1="30" x2="40" y2="170" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
      <line x1="40" y1="170" x2="280" y2="170" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
      <line x1="40" y1="100" x2="280" y2="100" stroke="rgba(16,185,129,0.08)" strokeWidth="0.5" strokeDasharray="4" />
      <line x1="40" y1="65" x2="280" y2="65" stroke="rgba(16,185,129,0.08)" strokeWidth="0.5" strokeDasharray="4" />
      <line x1="40" y1="135" x2="280" y2="135" stroke="rgba(16,185,129,0.08)" strokeWidth="0.5" strokeDasharray="4" />
      {/* Bars */}
      <rect className="chart-bar" x="60" y="120" width="24" height="50" rx="4" fill="rgba(16,185,129,0.2)" />
      <rect className="chart-bar" x="100" y="90" width="24" height="80" rx="4" fill="rgba(16,185,129,0.25)" />
      <rect className="chart-bar" x="140" y="100" width="24" height="70" rx="4" fill="rgba(16,185,129,0.2)" />
      <rect className="chart-bar" x="180" y="70" width="24" height="100" rx="4" fill="rgba(16,185,129,0.3)" />
      <rect className="chart-bar" x="220" y="45" width="24" height="125" rx="4" fill="rgba(52,211,153,0.35)" />
      {/* Line */}
      <path
        className="chart-line"
        d="M72 115 L112 85 L152 95 L192 65 L232 40"
        stroke="#10b981"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dots */}
      <circle className="chart-dot" cx="72" cy="115" r="4" fill="#10b981" />
      <circle className="chart-dot" cx="112" cy="85" r="4" fill="#10b981" />
      <circle className="chart-dot" cx="152" cy="95" r="4" fill="#10b981" />
      <circle className="chart-dot" cx="192" cy="65" r="4" fill="#10b981" />
      <circle className="chart-dot" cx="232" cy="40" r="5" fill="#34d399" />
    </svg>
  );
}

/* ─── Particle Field ─── */
interface ParticleProps {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
}

export function ParticleField({ isActive }: { isActive: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    // Generate random particles only on the client to avoid hydration mismatch
    const timer = setTimeout(() => {
      setParticles(
        Array.from({ length: 30 }, () => ({
          cx: Math.random() * 1200,
          cy: Math.random() * 800,
          r: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.1,
        }))
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isActive || !ref.current || particles.length === 0) return;
    const pElements = ref.current.querySelectorAll(".particle");

    gsap.fromTo(
      pElements,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: { amount: 1, from: "random" },
        ease: "power2.out",
      }
    );

    pElements.forEach((p) => {
      gsap.to(p, {
        y: `random(-60, 60)`,
        x: `random(-40, 40)`,
        opacity: `random(0.2, 0.8)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      });
    });
  }, [isActive, particles.length]);

  if (particles.length === 0) return null;

  return (
    <svg
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {particles.map((p, i) => (
        <circle
          key={i}
          className="particle"
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill="#10b981"
          opacity={p.opacity}
        />
      ))}
    </svg>
  );
}

/* ─── Confetti Burst ─── */
interface ConfettiProps {
  width: number;
  height: number;
  color: string;
}

export function ConfettiBurst({ isActive }: { isActive: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const [confetti, setConfetti] = useState<ConfettiProps[]>([]);

  useEffect(() => {
    const colors = ["#10b981", "#34d399", "#6ee7b7", "#a7f3d0", "#ffffff", "#059669"];
    // Generate random confetti only on the client to avoid hydration mismatch
    const timer = setTimeout(() => {
      setConfetti(
        Array.from({ length: 40 }, (_, i) => ({
          width: Math.random() * 10 + 4,
          height: Math.random() * 10 + 4,
          color: colors[i % colors.length],
        }))
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isActive || !ref.current || confetti.length === 0) return;
    const pieces = ref.current.querySelectorAll(".confetti");

    gsap.fromTo(
      pieces,
      { y: 400, x: 600, scale: 0, rotation: 0, opacity: 1 },
      {
        y: `random(50, 750)`,
        x: `random(50, 1150)`,
        scale: `random(0.5, 1.5)`,
        rotation: `random(-360, 360)`,
        opacity: 0.8,
        duration: 1.5,
        stagger: { amount: 0.8, from: "random" },
        ease: "power2.out",
      }
    );

    pieces.forEach((p) => {
      gsap.to(p, {
        y: `+=${Math.random() * 100 + 50}`,
        rotation: `+=${Math.random() * 180}`,
        opacity: 0,
        duration: 3,
        delay: 1.5 + Math.random(),
        ease: "power1.in",
      });
    });
  }, [isActive, confetti.length]);

  if (confetti.length === 0) return null;

  return (
    <svg
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {confetti.map((c, i) => (
        <rect
          key={i}
          className="confetti"
          width={c.width}
          height={c.height}
          rx="2"
          fill={c.color}
        />
      ))}
    </svg>
  );
}
