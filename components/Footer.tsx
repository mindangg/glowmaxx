import Link from "next/link";

const FOOTER_LINKS = {
  "Sản Phẩm": [
    { label: "Tính Năng", href: "#features" },
    { label: "Cách Hoạt Động", href: "#how-it-works" },
    { label: "Đánh Giá", href: "#testimonials" },
    { label: "Tải Về", href: "#" },
  ],
  "Pháp Lý": [
    { label: "Chính Sách Bảo Mật", href: "#" },
    { label: "Điều Khoản Dịch Vụ", href: "#" },
    { label: "Chính Sách Cookie", href: "#" },
  ],
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="text-lg font-bold tracking-tight">
              GLOWMAX
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Phân tích khuôn mặt bằng AI và lộ trình cải thiện ngoại hình cá
              nhân hóa. Được xây dựng cho những ai không chấp nhận tầm thường.
            </p>
          </div>

          <nav className="flex gap-16" aria-label="Liên kết footer">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {category}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year} Glowmax. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="TikTok"
            >
              <svg
                className="size-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
