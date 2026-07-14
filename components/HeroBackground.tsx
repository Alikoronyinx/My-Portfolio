"use client";

import { useEffect, FC } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

// ── Brand palette ──────────────────────────────────────────────────────────────
const C = {
  indigo:   "99,102,241",
  violet:   "167,139,250",
  purple:   "139,92,246",
  sky:      "56,189,248",
  lavender: "196,181,253",
} as const;

// ── Noise texture (SVG feTurbulence, inline) ───────────────────────────────────
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='512' height='512' filter='url(%23n)'/%3E%3C/svg%3E")`;

// ── Floating orb specs ─────────────────────────────────────────────────────────
const ORBS = [
  { size: 220, color: C.violet,   op: 0.13, top: "12%",  left: "62%",  dur: 20, delay: 0,   dx: 45,  dy: 30  },
  { size: 160, color: C.indigo,   op: 0.10, top: "62%",  left: "10%",  dur: 24, delay: 3,   dx: 55,  dy: -38 },
  { size: 110, color: C.purple,   op: 0.09, top: "73%",  left: "72%",  dur: 18, delay: 7,   dx: -35, dy: 45  },
  { size: 85,  color: C.sky,      op: 0.07, top: "28%",  left: "42%",  dur: 27, delay: 1.5, dx: 38,  dy: -28 },
  { size: 65,  color: C.lavender, op: 0.09, top: "48%",  left: "88%",  dur: 22, delay: 5,   dx: -42, dy: 32  },
  { size: 130, color: C.violet,   op: 0.06, top: "84%",  left: "38%",  dur: 30, delay: 9,   dx: 32,  dy: -44 },
] as const;

// ── Radial light specs ─────────────────────────────────────────────────────────
const LIGHTS = [
  {
    color: C.purple, op: 0.20,
    style: { top: "-12%", left: "-12%", width: "72%", height: "60%" },
    dur: 22, dx: 9,  dy: 13,
  },
  {
    color: C.violet, op: 0.17,
    style: { bottom: "-18%", right: "-12%", width: "62%", height: "55%" },
    dur: 28, dx: -11, dy: -9,
  },
  {
    color: C.sky,    op: 0.09,
    style: { top: "32%", left: "38%", width: "42%", height: "42%" },
    dur: 32, dx: 7,   dy: -11,
  },
] as const;

// ── Aurora band specs ──────────────────────────────────────────────────────────
const AURORA_BANDS = [
  {
    gradient: `linear-gradient(180deg, transparent 0%, rgba(${C.purple},0.07) 40%, rgba(${C.violet},0.05) 70%, transparent 100%)`,
    style: { top: "6%", left: "-30%", right: "-30%", height: "260px" },
    blur: 40, dur: 30, from: "-22%", to: "22%", delay: 0,
  },
  {
    gradient: `linear-gradient(180deg, transparent 0%, rgba(${C.indigo},0.05) 50%, transparent 100%)`,
    style: { top: "22%", left: "-40%", right: "-40%", height: "180px" },
    blur: 55, dur: 38, from: "18%", to: "-18%", delay: 6,
  },
  {
    gradient: `linear-gradient(180deg, transparent 0%, rgba(${C.violet},0.06) 45%, rgba(${C.sky},0.03) 80%, transparent 100%)`,
    style: { bottom: "12%", left: "-30%", right: "-30%", height: "200px" },
    blur: 48, dur: 34, from: "-16%", to: "16%", delay: 12,
  },
] as const;

// ── Blob border-radius morph keyframes ─────────────────────────────────────────
const BLOB_RADII = [
  "42% 58% 58% 42% / 42% 42% 58% 58%",
  "66% 34% 34% 66% / 62% 66% 34% 38%",
  "52% 48% 62% 38% / 57% 38% 62% 43%",
  "36% 64% 52% 48% / 47% 57% 43% 53%",
  "42% 58% 58% 42% / 42% 42% 58% 58%",
];

// ══════════════════════════════════════════════════════════════════════════════
export default function HeroBackground() {
  const shouldReduce = useReducedMotion();

  // Smooth mouse → blob parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const blobX = useSpring(rawX, { stiffness: 22, damping: 38, mass: 2.8 });
  const blobY = useSpring(rawY, { stiffness: 22, damping: 38, mass: 2.8 });

  useEffect(() => {
    if (shouldReduce) return;
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth  - 0.5) * 80);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldReduce, rawX, rawY]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >

      {/* ── 1. Radial gradient lights ───────────────────────────────────── */}
      {LIGHTS.map((light, i) => (
        <motion.div
          key={`light-${i}`}
          style={{
            position: "absolute",
            ...light.style,
            background: `radial-gradient(ellipse, rgba(${light.color},${light.op}) 0%, transparent 70%)`,
            filter: "blur(50px)",
            willChange: "transform",
          }}
          animate={shouldReduce ? {} : {
            x: [0, light.dx, light.dx * 0.4, 0],
            y: [0, light.dy, light.dy * 0.7, 0],
          }}
          transition={{
            duration: light.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── 2. Aurora bands ─────────────────────────────────────────────── */}
      {!shouldReduce &&
        AURORA_BANDS.map((band, i) => (
          <motion.div
            key={`aurora-${i}`}
            style={{
              position: "absolute",
              ...band.style,
              background: band.gradient,
              filter: `blur(${band.blur}px)`,
              willChange: "transform",
            }}
            animate={{ x: [band.from, band.to, band.from] }}
            transition={{
              duration: band.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: band.delay,
            }}
          />
        ))}

      {/* ── 3. Floating orbs ────────────────────────────────────────────── */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(${orb.color},${orb.op}) 0%, transparent 70%)`,
            filter: `blur(${Math.round(orb.size * 0.28)}px)`,
            willChange: "transform",
          }}
          animate={shouldReduce ? {} : {
            x: [0, orb.dx, orb.dx * 0.3, -orb.dx * 0.4, 0],
            y: [0, orb.dy * 0.4, orb.dy, orb.dy * 0.2, 0],
          }}
          transition={{
            duration: orb.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* ── 4. Organic glass blob (main) ────────────────────────────────── */}
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "28%",
          width: 680,
          height: 580,
          x: blobX,
          y: blobY,
          translateX: "-50%",
          translateY: "-50%",
          background: [
            `radial-gradient(ellipse at 38% 42%, rgba(${C.violet},0.22) 0%, transparent 55%)`,
            `radial-gradient(ellipse at 62% 58%, rgba(${C.indigo},0.18) 0%, transparent 55%)`,
            `radial-gradient(ellipse at 50% 50%, rgba(${C.purple},0.12) 0%, transparent 70%)`,
          ].join(", "),
          filter: "blur(80px)",
          opacity: 0.9,
          willChange: "transform, border-radius",
        }}
        animate={shouldReduce ? {} : {
          borderRadius: BLOB_RADII,
          scale: [1, 1.04, 1.01, 0.98, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── 5. Grid overlay (fades at edges) ────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: [
            `linear-gradient(rgba(${C.indigo},0.045) 1px, transparent 1px)`,
            `linear-gradient(90deg, rgba(${C.indigo},0.045) 1px, transparent 1px)`,
          ].join(", "),
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 75% 75% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* ── 6. Noise / grain texture ────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: NOISE_SVG,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: 0.030,
          mixBlendMode: "overlay",
        }}
      />

      {/* ── 7. Edge vignette ────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 110% 110% at 50% 50%, transparent 55%, rgba(8,8,8,0.65) 100%)",
        }}
      />
    </div>
  );
}
