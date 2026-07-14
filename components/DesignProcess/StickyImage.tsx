"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Step } from "./types";

interface Props {
  activeStep: Step;
}

const IMG_TRANSITION = {
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1] as const,
};

const LABEL_TRANSITION = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function StickyImage({ activeStep }: Props) {
  return (
    <div className="sticky top-24 h-[640px] lg:h-[72vh] min-h-[500px] max-h-[780px]">

      {/* Ambient purple glow behind the image card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.22) 0%, transparent 100%)",
          filter: "blur(48px)",
        }}
      />

      {/* Image frame */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">

        {/* Opacity-only crossfade — image stays still, no scale or blur */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{    opacity: 0 }}
            transition={IMG_TRANSITION}
            style={{ willChange: "opacity" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeStep.img}
              alt={activeStep.title}
              className="w-full h-full object-cover"
              loading={activeStep.id === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Bottom label overlay — fades between steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`label-${activeStep.id}`}
            className="absolute bottom-0 left-0 right-0 p-6 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(5,5,5,0.88) 0%, transparent 100%)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -6 }}
            transition={{ ...LABEL_TRANSITION, delay: 0.25 }}
          >
            <p className="text-[10px] font-mono font-bold tracking-[0.22em] uppercase text-violet-400 mb-1">
              {activeStep.num} — {activeStep.subtitle}
            </p>
            <p className="text-white text-sm font-semibold">{activeStep.title}</p>
          </motion.div>
        </AnimatePresence>

        {/* Subtle inner vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 60%, rgba(5,5,5,0.35) 100%)",
          }}
        />
      </div>
    </div>
  );
}
