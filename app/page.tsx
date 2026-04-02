import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HookSection from "@/components/HookSection";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

function SectionFallback() {
  return <div className="min-h-[40vh]" />;
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Glowmax",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description:
      "Phân tích khuôn mặt bằng AI giúp đánh giá điểm hấp dẫn, xác định đặc điểm nổi bật và xây dựng lộ trình cải thiện ngoại hình cá nhân hóa.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "VND",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlobalBackground />
      <Navbar />
      <main>
        <Hero />
        <HookSection />
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
