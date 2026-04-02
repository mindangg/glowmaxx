"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedGroup } from "@/components/ui/animated-group";

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
    <section className="overflow-hidden">
      <div className="relative pt-24 md:pt-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            <AnimatedGroup variants={transitionVariants}>
              <a
                href="#features"
                className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950 dark:hover:border-t-border"
              >
                <span className="text-sm text-foreground">
                  Phân Tích Khuôn Mặt Bằng AI
                </span>
                <span className="block h-4 w-0.5 border-l dark:border-background dark:bg-zinc-700" />
                <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </a>

              <h1 className="mx-auto mt-8 max-w-4xl text-balance text-6xl font-bold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                Khai Phá Tiềm Năng Thực Sự
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                Phân tích khuôn mặt bằng AI giúp đánh giá điểm hấp dẫn, xác
                định những đặc điểm nổi bật nhất và xây dựng lộ trình cải thiện
                ngoại hình cá nhân hóa cho bạn.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div className="rounded-[14px] border bg-foreground/10 p-0.5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-5 text-base"
                >
                  <a href="#">
                    <span className="text-nowrap">Bắt Đầu Ngay</span>
                  </a>
                </Button>
              </div>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="rounded-xl px-5"
              >
                <a href="#how-it-works">
                  <span className="text-nowrap">Xem Cách Hoạt Động</span>
                </a>
              </Button>
            </AnimatedGroup>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
            <div
              aria-hidden
              className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-background"
            />
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-4 shadow-lg shadow-zinc-950/15 ring-1 ring-border">
              <div
                className="rounded-xl bg-gradient-to-b from-muted/50 to-muted/20 p-4 md:p-8"
                style={{ aspectRatio: "15/8" }}
              >
                <div className="flex h-full flex-col gap-4 md:flex-row md:gap-6">
                  <div className="flex w-full shrink-0 flex-col rounded-lg border bg-background/80 p-4 backdrop-blur-sm md:w-64 md:p-5">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                      Điểm Phân Tích
                    </p>
                    <p className="mt-2 text-4xl font-bold md:text-5xl">7.8</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Đánh Giá Tổng Thể
                    </p>
                    <div className="mt-4 flex-1 space-y-2.5">
                      {ANALYSIS_SCORES.map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between text-[10px]">
                            <span className="text-muted-foreground">
                              {item.label}
                            </span>
                            <span className="tabular-nums">
                              {item.score.toFixed(1)}
                            </span>
                          </div>
                          <div className="mt-1 h-1 overflow-hidden rounded-full bg-border">
                            <div
                              className="h-full rounded-full bg-foreground/60"
                              style={{ width: `${item.pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative flex-1 overflow-hidden rounded-lg border bg-background/50">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&h=800&q=80"
                      alt="Xem trước phân tích khuôn mặt"
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
