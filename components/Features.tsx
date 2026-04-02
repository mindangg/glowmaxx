"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scan, TrendingUp, Activity, Sparkles } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FEATURES: Feature[] = [
  {
    title: "Phân Tích Cấu Trúc Khuôn Mặt",
    description:
      "Lập bản đồ cấu trúc xương tiên tiến cho hàm, gò má và vùng hốc mắt. Hiểu rõ sự hài hòa khuôn mặt và tiềm năng phát triển của bạn.",
    icon: Scan,
  },
  {
    title: "Tối Đa Hóa Chiều Cao",
    description:
      "Tối đa hóa tiềm năng chiều cao di truyền với chế độ dinh dưỡng, giấc ngủ và luyện tập được tối ưu hóa dựa trên nghiên cứu khoa học.",
    icon: TrendingUp,
  },
  {
    title: "Thể Hình & Tỷ Lệ V-Taper",
    description:
      "Đánh giá duy trì tỷ lệ mỡ cơ thể thấp và tiềm năng V-taper. Khả năng đạt vóc dáng lý tưởng được phân tích chi tiết.",
    icon: Activity,
  },
  {
    title: "Lộ Trình Cá Nhân Hóa",
    description:
      "Lộ trình được thiết kế riêng bao gồm chăm sóc da, mewing, chỉnh tư thế và chải chuốt — phù hợp với số đo khuôn mặt của bạn.",
    icon: Sparkles,
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

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      className="group rounded-2xl border bg-card p-6 transition-colors hover:bg-accent/50"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex size-11 items-center justify-center rounded-lg border bg-background">
        <Icon className="size-5 text-foreground" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <p className="text-sm font-medium text-muted-foreground">
            Bạn Nhận Được Gì
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
            Mọi thứ bạn cần để đạt đỉnh cao
          </h2>
          <p className="mt-4 text-muted-foreground">
            Phân tích toàn diện và hướng dẫn hành động được hỗ trợ bởi AI, giúp
            bạn bắt đầu cải thiện ngay lập tức.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
