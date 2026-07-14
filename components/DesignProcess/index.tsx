"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ProcessStep from "./ProcessStep";
import StickyImage from "./StickyImage";
import Particles from "./Particles";
import { STEPS } from "./data";

const HEADER_ENTER = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function DesignProcess() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleActive = useCallback((idx: number) => {
    setActiveIdx(idx);
  }, []);

  return (
    <section
      id="process"
      className="relative bg-[#050505] py-28 overflow-hidden"
    >
      {/* Floating ambient particles */}
      <Particles />

      {/* Radial glow — left side behind steps + right side behind image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 55% 45% at 75% 50%, rgba(124,58,237,0.13) 0%, transparent 70%)",
            "radial-gradient(ellipse 35% 30% at 15% 25%, rgba(139,92,246,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse 25% 40% at 50% 90%, rgba(99,102,241,0.06) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ────────────────────────────────────────────── */}
        <motion.div
          className="mb-20 max-w-xl"
          variants={HEADER_ENTER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[10px] font-mono font-bold tracking-[0.28em] uppercase text-violet-400 mb-4">
            My Design Process
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5 leading-[1.06]">
            From Idea to{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #a78bfa 0%, #7C3AED 50%, #818cf8 100%)",
              }}
            >
              Execution
            </span>
          </h2>
          <p className="text-[0.9375rem] text-white/50 leading-relaxed">
            Every great product starts with a clear process. Here&apos;s how I move from a
            fuzzy brief to a polished, user-tested solution.
          </p>
        </motion.div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-24 items-start">

          {/* Left column: scrolling steps */}
          <div>
            {STEPS.map((step, i) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={i}
                isActive={activeIdx === i}
                onActive={() => handleActive(i)}
              />
            ))}
          </div>

          {/* Right column: sticky image — desktop only */}
          <div className="hidden lg:block">
            <StickyImage activeStep={STEPS[activeIdx]} />
          </div>

        </div>
      </div>
    </section>
  );
}
