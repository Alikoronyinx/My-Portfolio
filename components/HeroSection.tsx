"use client";

import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

// Stagger config for hero text entrance
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* ── Animated background (sits behind everything) ── */}
      <HeroBackground />

      {/* ── Hero content (sits above background) ─────────── */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-24
                   w-full flex flex-col items-center text-center gap-7"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Role tagline */}
        <motion.p
          variants={item}
          className="text-xs font-semibold tracking-[0.28em] uppercase text-slate-400"
        >
          Designer &nbsp;·&nbsp; Researcher &nbsp;·&nbsp; Problem Solver
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]
                     font-bold leading-[1.06] tracking-tight text-slate-100"
        >
          Designing Thoughtful
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300
                           bg-clip-text text-transparent">
            Digital Experiences.
          </span>
        </motion.h1>

        {/* Sub intro */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg leading-relaxed max-w-lg text-slate-400"
        >
          I&apos;m{" "}
          <strong className="font-semibold text-slate-200">
            Onyinyechi Alikor
          </strong>{" "}
          — a Product Designer who turns confusion into flow through research,
          strategy, and craft.
        </motion.p>

        {/* Availability badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     border border-indigo-500/30 bg-white/[0.03]
                     backdrop-blur-sm text-sm font-medium text-indigo-300"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-3 justify-center pt-1"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500
                       text-white text-sm font-semibold
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/10
                       text-slate-300 text-sm font-semibold
                       bg-white/[0.03] backdrop-blur-sm
                       hover:border-white/20 hover:bg-white/[0.06]
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={item}
          className="flex items-center gap-10 pt-4"
        >
          {[
            { value: "5",    label: "Products Shipped" },
            { value: "3+",   label: "Years Experience" },
            { value: "100%", label: "User-Centered"    },
          ].map((stat, i, arr) => (
            <div key={stat.label} className="flex items-center gap-10">
              <div className="text-center">
                <div className="text-2xl font-black text-slate-100">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-10 bg-white/10" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
