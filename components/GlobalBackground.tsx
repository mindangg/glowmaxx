"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
    >
      <div className="absolute inset-0 isolate hidden opacity-50 [contain:strict] lg:block">
        <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="absolute left-0 top-0 h-[80rem] w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="absolute left-0 top-0 h-[80rem] w-56 -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>

      <motion.div
        className="absolute inset-0 hidden dark:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Image
          src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_50%,transparent_0%,hsl(var(--background))_75%)]" />
    </div>
  );
}
