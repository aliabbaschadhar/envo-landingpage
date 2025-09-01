"use client";

import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustedCompaniesSection } from '@/components/sections/TrustedCompaniesSection';
import { TechLogos } from '@/components/sections/TechLogos';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />
      <main className="relative">
        <section id="hero" className="scroll-mt-20">
          <HeroSection />
        </section>
        <section id="companies" className="scroll-mt-20">
          <TrustedCompaniesSection />
        </section>
        <section id="tech" className="scroll-mt-20">
          <TechLogos />
        </section>
        <section id="features" className="scroll-mt-20">
          <FeaturesSection />
        </section>
        <section id="pricing" className="scroll-mt-20">
          <TestimonialsSection />
        </section>
        <section id="docs" className="scroll-mt-20">
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}