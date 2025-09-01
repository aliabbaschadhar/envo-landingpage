"use client";

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ParticleProps {
  index: number;
  total: number;
}

function FloatingParticle({ index, total }: ParticleProps) {
  const animationDelay = (index / total) * 10;
  const xOffset = (index % 3) * 100 - 100;
  const yOffset = Math.sin(index) * 50;

  return (
    <motion.div
      className="absolute w-1 h-1 bg-electric-blue/20 rounded-full"
      initial={{
        x: xOffset,
        y: yOffset,
        opacity: 0,
        scale: 0,
      }}
      animate={{
        x: [xOffset, xOffset + 50, xOffset],
        y: [yOffset, yOffset - 30, yOffset],
        opacity: [0, 0.6, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: animationDelay,
        ease: "easeInOut",
      }}
      style={{
        left: `${20 + (index % 5) * 15}%`,
        top: `${30 + (index % 3) * 20}%`,
      }}
    />
  );
}

interface EnhancedSectionDividerProps {
  variant?: 'ethereal' | 'cosmic' | 'minimal' | 'dynamic';
  showParticles?: boolean;
  className?: string;
}

export function EnhancedSectionDivider({
  variant = 'ethereal',
  showParticles = true,
  className = ''
}: EnhancedSectionDividerProps) {
  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => i),
    []
  );

  const getVariantStyles = () => {
    switch (variant) {
      case 'cosmic':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/10 to-transparent" />
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-purple/30 to-transparent"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-electric-blue/5 rounded-full blur-2xl" />
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-electric-purple/5 rounded-full blur-2xl" />
          </div>
        );

      case 'dynamic':
        return (
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-electric-green/5"
              animate={{
                background: [
                  'linear-gradient(90deg, rgba(59,130,246,0.05) 0%, transparent 50%, rgba(16,185,129,0.05) 100%)',
                  'linear-gradient(90deg, rgba(16,185,129,0.05) 0%, transparent 50%, rgba(139,92,246,0.05) 100%)',
                  'linear-gradient(90deg, rgba(139,92,246,0.05) 0%, transparent 50%, rgba(59,130,246,0.05) 100%)',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 backdrop-blur-[2px]" />
          </div>
        );

      case 'minimal':
        return (
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </div>
        );

      case 'ethereal':
      default:
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-navy/15 to-transparent backdrop-blur-[3px]" />
            <motion.div
              className="absolute top-0 left-1/3 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-0 right-1/3 w-64 h-64 bg-electric-purple/10 rounded-full blur-3xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 30, 0],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className={`relative h-32 md:h-40 overflow-hidden ${className}`}>
      {getVariantStyles()}

      {/* Floating Particles */}
      {showParticles && (
        <div className="absolute inset-0">
          {particles.map((index) => (
            <FloatingParticle key={index} index={index} total={particles.length} />
          ))}
        </div>
      )}

      {/* Central glow line */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-px"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-electric-green/20 to-transparent" />
      </motion.div>
    </div>
  );
}

// Specific enhanced dividers for different sections
export function HeroToTrustedDivider() {
  return (
    <EnhancedSectionDivider
      variant="ethereal"
      className="bg-gradient-to-b from-deep-navy via-deep-navy/98 to-deep-navy/95"
    />
  );
}

export function TrustedToTechEnhancedDivider() {
  return (
    <EnhancedSectionDivider
      variant="cosmic"
      showParticles={false}
      className="bg-gradient-to-b from-deep-navy/95 via-deep-navy/90 to-deep-navy/85"
    />
  );
}

export function TechToFeaturesEnhancedDivider() {
  return (
    <EnhancedSectionDivider
      variant="dynamic"
      className="bg-gradient-to-b from-deep-navy/85 via-deep-navy/92 to-deep-navy/98"
    />
  );
}

export function FeaturesToTestimonialsEnhancedDivider() {
  return (
    <EnhancedSectionDivider
      variant="ethereal"
      className="bg-gradient-to-b from-deep-navy/98 via-deep-navy to-deep-navy/95"
    />
  );
}

export function TestimonialsToCTAEnhancedDivider() {
  return (
    <EnhancedSectionDivider
      variant="minimal"
      showParticles={false}
      className="bg-gradient-to-b from-deep-navy/95 to-deep-navy"
    />
  );
}
