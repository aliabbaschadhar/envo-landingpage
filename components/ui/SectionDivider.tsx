"use client";

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'gradient' | 'mesh' | 'simple' | 'radial';
  intensity?: 'light' | 'medium' | 'heavy';
  className?: string;
}

export function SectionDivider({
  variant = 'gradient',
  intensity = 'medium',
  className = ''
}: SectionDividerProps) {
  const getBlurStyles = () => {
    const baseStyles = "absolute inset-0 pointer-events-none";

    switch (variant) {
      case 'gradient':
        return `${baseStyles} bg-gradient-to-b from-transparent via-deep-navy/20 to-transparent`;

      case 'mesh':
        return `${baseStyles} bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),transparent)] backdrop-blur-[1px]`;

      case 'radial':
        return `${baseStyles} bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]`;

      case 'simple':
      default:
        return `${baseStyles} backdrop-blur-[0.5px]`;
    }
  };

  const getIntensityClass = () => {
    switch (intensity) {
      case 'light':
        return 'h-16 md:h-24';
      case 'heavy':
        return 'h-32 md:h-48';
      case 'medium':
      default:
        return 'h-24 md:h-32';
    }
  };

  return (
    <div className={`relative ${getIntensityClass()} ${className}`}>
      {/* Main blur effect */}
      <div className={getBlurStyles()} />

      {/* Additional effects based on variant */}
      {variant === 'mesh' && (
        <>
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl opacity-60"
            animate={{
              x: [0, 50, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-0 right-1/4 w-96 h-96 bg-electric-purple/5 rounded-full blur-3xl opacity-60"
            animate={{
              x: [0, -50, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {variant === 'gradient' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/3 via-transparent to-electric-purple/3 blur-sm" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </>
      )}

      {variant === 'radial' && (
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-electric-green/20 to-transparent"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}

// Specific section divider components for different use cases
export function HeroToDivider() {
  return (
    <SectionDivider
      variant="mesh"
      intensity="medium"
      className="bg-gradient-to-b from-deep-navy to-deep-navy/95"
    />
  );
}

export function TrustedToTechDivider() {
  return (
    <SectionDivider
      variant="gradient"
      intensity="light"
      className="bg-gradient-to-b from-deep-navy/95 to-deep-navy/90"
    />
  );
}

export function TechToFeaturesDivider() {
  return (
    <SectionDivider
      variant="radial"
      intensity="medium"
      className="bg-gradient-to-b from-deep-navy/90 to-deep-navy/95"
    />
  );
}

export function FeaturesToTestimonialsDivider() {
  return (
    <SectionDivider
      variant="mesh"
      intensity="heavy"
      className="bg-gradient-to-b from-deep-navy/95 to-deep-navy"
    />
  );
}

export function TestimonialsToCTADivider() {
  return (
    <SectionDivider
      variant="gradient"
      intensity="medium"
      className="bg-gradient-to-b from-deep-navy to-deep-navy/95"
    />
  );
}
