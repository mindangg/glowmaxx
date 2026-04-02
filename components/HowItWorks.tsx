"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, BarChart3, Route } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Quét Khuôn Mặt",
    description:
      "Chụp ảnh hoặc tải lên. AI của chúng tôi lập bản đồ hơn 68 điểm mốc trên khuôn mặt và phân tích cấu trúc xương, sự đối xứng và tỷ lệ trong vài giây.",
    icon: Camera,
  },
  {
    number: "02",
    title: "Nhận Điểm Số",
    description:
      "Nhận bảng phân tích chi tiết với đánh giá từng vùng khuôn mặt — hàm, mắt, mũi, môi và sự hài hòa tổng thể.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Theo Dõi Lộ Trình",
    description:
      "Nhận lộ trình cải thiện ngoại hình cá nhân: kỹ thuật mewing, chăm sóc da, tư thế, chải chuốt và thay đổi lối sống được xếp hạng theo mức độ tác động.",
    icon: Route,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-1 flex-col gap-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay: index * 0.15 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border bg-muted">
          <Icon className="size-4 text-foreground" />
        </div>
        <span className="text-sm font-bold tabular-nums text-muted-foreground">
          {step.number}
        </span>
      </div>
      <h3 className="text-xl font-semibold">{step.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <p className="text-sm font-medium text-muted-foreground">
            Cách Hoạt Động
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
            Ba bước để trở nên tốt hơn
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-12 md:flex-row md:gap-8">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
