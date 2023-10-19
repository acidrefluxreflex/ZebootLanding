import type { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import OverviewSection from "@/components/sections/OverviewSection";
import GetStartSection from "@/components/sections/GetStartSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Zeboot:Zen Sexual Content Blocker",
  description: "Block Sexual Content on the Web",
  openGraph: {
    title: "Zeboot:Zen Sexual Content Blocker",
    description: "Block Sexual Content on the Web",
    url: "https://zeboot.net",
    siteName: "zeboot.net",
    images: [
      {
        url: "https://zeboot.net/_next/image?url=%2Fimages%2FSNS%2FZeboot.webp&w=12000&q=75",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    yandex: "7623133352eec7c6",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white ">
      <HeroSection />
      <div className="lg:max-w-7xl md:max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <OverviewSection />
        <FAQSection />
        <TestimonialSection />
        <FeatureSection />
        <StrengthsSection />
        <GetStartSection />
        <ContactSection />
      </div>
    </main>
  );
}
