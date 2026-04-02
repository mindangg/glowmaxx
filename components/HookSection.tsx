import { ChevronRight } from "lucide-react";

const STATS = [
  { value: "50K+", label: "Người Dùng" },
  { value: "4.8", label: "Đánh Giá" },
  { value: "92%", label: "Thấy Kết Quả" },
  { value: "8 tháng", label: "Thời Gian TB" },
];

export default function HookSection() {
  return (
    <section className="pb-16 pt-16 md:pb-32">
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <a
            href="#"
            className="block text-sm duration-150 hover:opacity-75"
          >
            <span>Tham Gia Cùng Hàng Ngàn Người Dùng</span>
            <ChevronRight className="ml-1 inline-block size-3" />
          </a>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-12 gap-y-10 transition-all duration-500 group-hover:opacity-50 group-hover:blur-sm sm:grid-cols-4 sm:gap-x-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
