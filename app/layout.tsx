import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Glowmax — Khai Phá Tiềm Năng Thực Sự",
    template: "%s | Glowmax",
  },
  description:
    "Phân tích khuôn mặt bằng AI và hướng dẫn cải thiện ngoại hình. Khai phá tiềm năng thực sự của bạn với Glowmax.",
  keywords: [
    "phân tích khuôn mặt",
    "AI",
    "cải thiện ngoại hình",
    "looksmaxing",
    "mewing",
    "glowmax",
    "facial analysis",
  ],
  authors: [{ name: "Glowmax" }],
  creator: "Glowmax",
  metadataBase: new URL("https://glowmax.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://glowmax.app",
    siteName: "Glowmax",
    title: "Glowmax — Khai Phá Tiềm Năng Thực Sự",
    description:
      "Phân tích khuôn mặt bằng AI giúp đánh giá điểm hấp dẫn, xác định đặc điểm nổi bật và xây dựng lộ trình cải thiện ngoại hình cá nhân hóa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glowmax — Phân Tích Khuôn Mặt Bằng AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glowmax — Khai Phá Tiềm Năng Thực Sự",
    description:
      "Phân tích khuôn mặt bằng AI giúp đánh giá điểm hấp dẫn và xây dựng lộ trình cải thiện ngoại hình cá nhân hóa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`dark ${inter.variable}`} suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
