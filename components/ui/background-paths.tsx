"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg
      className="absolute inset-0 h-full w-full text-white"
      viewBox="0 0 696 316"
      fill="none"
      aria-hidden
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={0.02 + path.id * 0.008}
          initial={{ pathLength: 0.3, opacity: 0.4 }}
          animate={{
            pathLength: 1,
            opacity: [0.15, 0.35, 0.15],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 25 + Math.random() * 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-[30%] bottom-[30%] overflow-hidden opacity-60">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
