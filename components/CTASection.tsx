"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function StoreBadge({
  store,
  label,
}: {
  store: "apple" | "google";
  label: string;
}) {
  return (
    <Button
      asChild
      variant="outline"
      className="h-auto gap-3 rounded-full px-6 py-3"
    >
      <a href="#" aria-label={`Tải về từ ${label}`}>
        {store === "apple" ? (
          <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        ) : (
          <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.18 23.67c.56.28 1.25.18 1.71-.17l9.65-8.52L4.59 5.5c-.31-.23-.69-.33-1.07-.28-.57.08-1.02.48-1.2 1.02L.08 21.24c-.21.7.12 1.49.82 1.82l2.28.61zM20.16 10.33l-3.51-2.05-4.34 3.76 4.42 4.16 3.43-2.01c.75-.44 1.22-1.25 1.22-2.13s-.47-1.69-1.22-2.13v.4zM5.66 4.36l9.52 9.13 2.63-2.29-12.14-7.1c-.01.09-.01.17-.01.26z" />
          </svg>
        )}
        <div className="text-left">
          <p className="text-[10px] leading-none text-muted-foreground">
            {store === "apple" ? "Tải về từ" : "Tải từ"}
          </p>
          <p className="text-sm font-semibold leading-tight">{label}</p>
        </div>
      </a>
    </Button>
  );
}

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/50 blur-[120px]" />
      </div>

      <motion.div
        className="mx-auto max-w-2xl px-6 text-center"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h2
          className="text-balance text-3xl font-bold sm:text-4xl"
          variants={fadeUp}
        >
          Hành trình thay đổi bắt đầu từ đây
        </motion.h2>

        <motion.p
          className="mt-4 text-muted-foreground"
          variants={fadeUp}
        >
          Tải Glowmax và nhận phân tích khuôn mặt đầu tiên miễn phí. Tham gia
          cùng hàng ngàn người đang kiểm soát ngoại hình bằng khoa học, không
          phải phỏng đoán.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
        >
          <StoreBadge store="apple" label="App Store" />
          <StoreBadge store="google" label="Google Play" />
        </motion.div>
      </motion.div>
    </section>
  );
}
