"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type { Step } from "./types";

interface Props {
  step: Step;
  index: number;
  isActive: boolean;
  onActive: () => void;
}

const EASE = [0.4, 0, 0.2, 1] as const;

export default function ProcessStep({ step, index, isActive, onActive }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Scroll-driven vertical fill for the progress line
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 28%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Fire onActive when this step enters the center band of the viewport
  const inView = useInView(ref, { margin: "-34% 0px -34% 0px" });
  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <motion.div
      ref={ref}
      className="relative pl-14 md:pl-20 py-14"
      animate={{ opacity: isActive ? 1 : 0.32 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {/* Track line (full height, dim) */}
      <div className="absolute left-0 inset-y-0 w-px bg-white/[0.07]" />

      {/* Scroll-driven purple fill */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="absolute left-0 top-0 w-px bg-[#7C3AED]"
          style={{ height: lineHeight, willChange: "height" }}
        />
      )}

      {/* Step number node on the track */}
      <motion.div
        className="absolute left-0 top-14 -translate-x-1/2 w-8 h-8 rounded-full
                   border flex items-center justify-center backdrop-blur-sm"
        animate={{
          borderColor: isActive ? "rgba(124,58,237,0.8)" : "rgba(255,255,255,0.1)",
          backgroundColor: isActive ? "rgba(124,58,237,0.18)" : "rgba(5,5,5,0.9)",
          boxShadow: isActive
            ? "0 0 18px 3px rgba(124,58,237,0.35)"
            : "none",
        }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <motion.span
          className="text-[9px] font-mono font-bold tabular-nums"
          animate={{ color: isActive ? "#a78bfa" : "rgba(255,255,255,0.25)" }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {step.num}
        </motion.span>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-[2rem] md:text-[2.6rem] font-black tracking-tight leading-[1.06] mb-2"
        animate={{ color: isActive ? "#ffffff" : "rgba(255,255,255,0.45)" }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {step.title}
      </motion.h3>

      {/* Subtitle — brand purple when active */}
      <motion.p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
        animate={{ color: isActive ? "#7C3AED" : "rgba(255,255,255,0.2)" }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {step.subtitle}
      </motion.p>

      {/* Body copy */}
      <motion.p
        className="text-[0.9375rem] leading-[1.8] max-w-prose"
        animate={{ color: isActive ? "rgba(255,255,255,0.62)" : "rgba(255,255,255,0.2)" }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {step.description}
      </motion.p>

      {/* Mobile-only inline image */}
      <motion.div
        className="lg:hidden mt-8 rounded-xl overflow-hidden aspect-video"
        animate={{ opacity: isActive ? 1 : 0.35 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={step.img}
          alt={step.title}
          className="w-full h-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </motion.div>
    </motion.div>
  );
}
