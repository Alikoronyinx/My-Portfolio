"use client";

import { motion, useReducedMotion } from "framer-motion";

// Pre-computed to avoid SSR/client hydration mismatch
const PARTICLES = [
  { id: 0, x: 11,  y: 18,  s: 2.5, d: 14, delay: -3  },
  { id: 1, x: 79,  y: 31,  s: 1.5, d: 18, delay: -8  },
  { id: 2, x: 44,  y: 71,  s: 2.0, d: 11, delay: -1  },
  { id: 3, x: 88,  y: 54,  s: 1.0, d: 22, delay: -14 },
  { id: 4, x: 22,  y: 85,  s: 2.5, d: 16, delay: -6  },
  { id: 5, x: 65,  y: 13,  s: 1.5, d: 20, delay: -10 },
  { id: 6, x: 35,  y: 47,  s: 1.0, d: 13, delay: -4  },
  { id: 7, x: 92,  y: 77,  s: 2.0, d: 17, delay: -12 },
  { id: 8, x: 54,  y: 91,  s: 1.5, d: 24, delay: -7  },
  { id: 9, x:  8,  y: 62,  s: 1.0, d: 19, delay: -16 },
  { id: 10, x: 72, y: 42,  s: 1.5, d: 21, delay: -2  },
  { id: 11, x: 28, y: 28,  s: 1.0, d: 15, delay: -9  },
];

export default function Particles() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.s,
            height: p.s,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: `rgba(167,139,250,${0.06 + (p.s / 3) * 0.05})`,
          }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: p.d,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
