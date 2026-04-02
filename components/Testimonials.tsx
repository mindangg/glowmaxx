"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  age: number;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Mình đã tăng từ 4.5 lên 6.2 trong 8 tháng theo lộ trình. Phân tích khuôn mặt chính xác đến mức đáng sợ — nó phát hiện sự bất đối xứng mà mình chưa bao giờ nhận ra.",
    name: "Minh T.",
    age: 19,
    rating: 5,
  },
  {
    quote:
      "App này cho mình một lộ trình rõ ràng thay vì những lời khuyên ngẫu nhiên trên mạng. Tiến trình mewing được theo dõi hàng tháng. Đường hàm mình giờ sắc nét hơn hẳn.",
    name: "Alex K.",
    age: 22,
    rating: 5,
  },
  {
    quote:
      "Theo dõi thể hình kết hợp với phân tích khuôn mặt là điều độc đáo. Không có app nào khác kết nối vóc dáng với thẩm mỹ khuôn mặt như thế này.",
    name: "David L.",
    age: 20,
    rating: 4,
  },
  {
    quote:
      "Bắt đầu từ năm 17 tuổi và mình rất vui vì đã làm vậy. Lộ trình tối đa hóa chiều cao thực sự hiệu quả — tăng 2cm trong 6 tháng với kế hoạch tư thế và dinh dưỡng.",
    name: "Khang N.",
    age: 17,
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} trên 5 sao`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${
            i < rating
              ? "fill-foreground text-foreground"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-between rounded-2xl border bg-card p-6"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
    >
      <div>
        <StarRating rating={testimonial.rating} />
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">
            {testimonial.age} tuổi
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <p className="text-sm font-medium text-muted-foreground">
            Đánh Giá
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold sm:text-4xl">
            Kết quả thực từ người dùng thực
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hàng ngàn người dùng đang thay đổi ngoại hình với hướng dẫn dựa
            trên dữ liệu.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
