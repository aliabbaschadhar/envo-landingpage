"use client";

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'sunset' | 'aurora' | 'simple';
  intensity?: 'light' | 'medium' | 'heavy';
  className?: string;
}

export function SectionDivider({
  variant = 'simple',
  intensity = 'medium',
  className = ''
}: SectionDividerProps) {
  const getBlurStyles = () => {
    const baseStyles = "absolute inset-0 pointer-events-none";

    switch (variant) {
      case 'sunset':
        return `${baseStyles} bg-gradient-to-b from-slate-900/90 via-orange-400/20 via-yellow-300/30 to-slate-900/90 backdrop-blur-md`;

      case 'aurora':
        return `${baseStyles} bg-gradient-to-b from-deep-navy/95 via-blue-400/25 via-purple-400/20 to-deep-navy/95 backdrop-blur-lg`;

      case 'simple':
      default:
        return `${baseStyles} bg-gradient-to-b from-transparent via-slate-800/20 to-transparent backdrop-blur-sm`;
    }
  };

  const getIntensityClass = () => {
    switch (intensity) {
      case 'light':
        return 'h-24 md:h-32';
      case 'heavy':
        return 'h-48 md:h-64';
      case 'medium':
      default:
        return 'h-36 md:h-48';
    }
  };

  return (
    <div className={`relative ${getIntensityClass()} ${className} overflow-hidden`}>
      {/* Main blur effect */}
      <div className={getBlurStyles()} />

      {/* Sunset gradient divider */}
      {variant === 'sunset' && (
        <>
          {/* Main sunset gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-orange-500/35 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/25 to-transparent" />

          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-400/20 to-transparent"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Soft light ray */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
        </>
      )}

      {/* Aurora gradient divider */}
      {variant === 'aurora' && (
        <>
          {/* Main aurora gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/90 via-blue-500/30 to-deep-navy/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />

          {/* Animated aurora effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-blue/20 via-electric-purple/20 to-transparent"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Central glow line */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent"
            animate={{
              opacity: [0.4, 0.9, 0.4],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Simple variant stays minimal */}
      {variant === 'simple' && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}
    </div>
  );
}

// Specific section divider components - using only twice as requested
export function SunsetDivider() {
  return (
    <SectionDivider
      variant="sunset"
      intensity="heavy"
      className="bg-gradient-to-b from-deep-navy/95 to-deep-navy/90"
    />
  );
}

export function AuroraDivider() {
  return (
    <SectionDivider
      variant="aurora"
      intensity="heavy"
      className="bg-gradient-to-b from-deep-navy/90 to-deep-navy/95"
    />
  );
}

// Keep simple dividers for other sections
export function HeroToDivider() {
  return (
    <SectionDivider
      variant="simple"
      intensity="light"
      className="bg-gradient-to-b from-deep-navy to-deep-navy/95"
    />
  );
}

export function TrustedToTechDivider() {
  return (
    <SectionDivider
      variant="simple"
      intensity="light"
      className="bg-gradient-to-b from-deep-navy/95 to-deep-navy/90"
    />
  );
}

export function TechToFeaturesDivider() {
  return <SunsetDivider />;
}

export function FeaturesToTestimonialsDivider() {
  return (
    <SectionDivider
      variant="simple"
      intensity="light"
      className="bg-gradient-to-b from-deep-navy/95 to-deep-navy"
    />
  );
}

export function TestimonialsToCTADivider() {
  return <AuroraDivider />;
}
