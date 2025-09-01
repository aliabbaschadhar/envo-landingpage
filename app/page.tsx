"use client";

import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedCompaniesSection } from '@/components/sections/TrustedCompaniesSection';
import { TechLogos } from '@/components/sections/TechLogos';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';
import { BlurDivider } from '@/components/ui/BlurDivider';

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />
      <main className="relative">
        <HeroSection />
        <BlurDivider intensity="medium" className="bg-gradient-to-b from-deep-navy via-deep-navy/95 to-deep-navy/90" />

        <TrustedCompaniesSection />
        <BlurDivider intensity="light" className="bg-gradient-to-b from-deep-navy/90 via-deep-navy/85 to-deep-navy/80" />

        <TechLogos />
        <BlurDivider intensity="heavy" className="bg-gradient-to-b from-deep-navy/80 via-deep-navy/90 to-deep-navy/95" />

        <FeaturesSection />
        <BlurDivider intensity="medium" className="bg-gradient-to-b from-deep-navy/95 via-deep-navy to-deep-navy/95" />

        <TestimonialsSection />
        <BlurDivider intensity="light" className="bg-gradient-to-b from-deep-navy/95 to-deep-navy" />

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}