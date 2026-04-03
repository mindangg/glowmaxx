"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/store-links";
import logoImage from "@/assets/logo.png";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const ANALYSIS_SCORES = [
  { label: "Đường Hàm", score: 8.2, pct: 82 },
  { label: "Đối Xứng", score: 7.5, pct: 75 },
  { label: "Đôi Mắt", score: 8.0, pct: 80 },
  { label: "Chất Lượng Da", score: 7.9, pct: 79 },
  { label: "Tỷ Lệ", score: 7.1, pct: 71 },
];

export default function Hero() {
  return (
    <section className="overflow-x-clip">
      <div className="relative pt-20 md:pt-28">
        <BackgroundPaths />
        <div className="relative z-20 mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <h1 className="mx-auto flex justify-center">
                <Image
                  src={logoImage}
                  alt="Glowmax — Tiềm Năng Chưa Thấy"
                  priority
                  className="h-auto w-full max-w-48 object-contain md:max-w-64 lg:max-w-xs"
                />
              </h1>

              <p className="mx-auto mt-3 max-w-lg text-balance text-sm text-muted-foreground md:mt-4 md:text-base">
                AI phân tích khuôn mặt — đánh giá điểm hấp dẫn, highlight đặc
                điểm nổi bật, và đề xuất lộ trình cải thiện riêng cho bạn.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.35,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
            >
              <Button
                asChild
                variant="outline"
                className="h-auto gap-3 rounded-full px-6 py-3"
              >
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tải về từ Google Play"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3.18 23.67c.56.28 1.25.18 1.71-.17l9.65-8.52L4.59 5.5c-.31-.23-.69-.33-1.07-.28-.57.08-1.02.48-1.2 1.02L.08 21.24c-.21.7.12 1.49.82 1.82l2.28.61zM20.16 10.33l-3.51-2.05-4.34 3.76 4.42 4.16 3.43-2.01c.75-.44 1.22-1.25 1.22-2.13s-.47-1.69-1.22-2.13v.4zM5.66 4.36l9.52 9.13 2.63-2.29-12.14-7.1c-.01.09-.01.17-.01.26z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] leading-none text-muted-foreground">
                      Tải từ
                    </p>
                    <p className="text-sm font-semibold leading-tight">Google Play</p>
                  </div>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto gap-3 rounded-full px-6 py-3"
              >
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tải về từ App Store"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] leading-none text-muted-foreground">
                      Tải về từ
                    </p>
                    <p className="text-sm font-semibold leading-tight">App Store</p>
                  </div>
                </a>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        <div className="relative z-0">
          <ContainerScroll
          titleComponent={
            <p className="text-sm font-medium text-muted-foreground">
              Xem Trước Bảng Phân Tích
            </p>
          }
        >
          <div className="flex h-full flex-col gap-3 md:flex-row md:gap-4">
            <div className="flex w-full shrink-0 flex-col rounded-xl border border-white/[0.06] bg-white/[0.04] p-4 backdrop-blur-sm md:w-60 md:p-5">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40">
                Điểm Phân Tích
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
                7.8
              </p>
              <p className="mt-0.5 text-[11px] text-white/35">
                Đánh Giá Tổng Thể
              </p>
              <div className="mt-4 flex-1 space-y-3">
                {ANALYSIS_SCORES.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-white/50">{item.label}</span>
                      <span className="tabular-nums text-white/70">
                        {item.score.toFixed(1)}
                      </span>
                    </div>
                    <div className="mt-1 h-[3px] overflow-hidden rounded-full bg-white/[0.08]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-white/40 to-white/20"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl border border-white/[0.06]">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Xem trước phân tích khuôn mặt"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.08]" />
            </div>
          </div>
        </ContainerScroll>
        </div>
      </div>
    </section>
  );
}
