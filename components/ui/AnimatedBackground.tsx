"use client";

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'subtle' | 'dynamic' | 'particles' | 'waves';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

export function AnimatedBackground({
  variant = 'subtle',
  intensity = 'medium',
  className = ''
}: AnimatedBackgroundProps) {
  const getIntensityValues = () => {
    switch (intensity) {
      case 'low':
        return { opacity: 0.3, blur: 'blur-2xl', scale: 1.1 };
      case 'high':
        return { opacity: 0.8, blur: 'blur-4xl', scale: 1.5 };
      case 'medium':
      default:
        return { opacity: 0.5, blur: 'blur-3xl', scale: 1.3 };
    }
  };

  const { opacity, blur, scale } = getIntensityValues();

  const renderSubtleBackground = () => (
    <div className="absolute inset-0">
      <motion.div
        className={`absolute top-1/4 left-1/3 w-72 h-72 bg-electric-blue/10 rounded-full ${blur}`}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, scale, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      />
      <motion.div
        className={`absolute bottom-1/4 right-1/3 w-72 h-72 bg-electric-purple/10 rounded-full ${blur}`}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, scale, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      />
    </div>
  );

  const renderDynamicBackground = () => (
    <div className="absolute inset-0">
      <motion.div
        className={`absolute top-0 left-0 w-96 h-96 bg-electric-blue/8 rounded-full ${blur}`}
        animate={{
          x: [0, 200, 0],
          y: [0, 100, 0],
          scale: [1, scale, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      />
      <motion.div
        className={`absolute top-1/2 right-0 w-96 h-96 bg-electric-green/8 rounded-full ${blur}`}
        animate={{
          x: [0, -150, 0],
          y: [0, -80, 0],
          scale: [1, scale, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      />
      <motion.div
        className={`absolute bottom-0 left-1/2 w-96 h-96 bg-electric-purple/8 rounded-full ${blur}`}
        animate={{
          x: [0, 80, 0],
          y: [0, -120, 0],
          scale: [1, scale, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      />
    </div>
  );

  const renderParticlesBackground = () => (
    <div className="absolute inset-0">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 bg-electric-blue/20 rounded-full ${i % 2 === 0 ? 'blur-sm' : 'blur-md'}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0, opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );

  const renderWavesBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%),
            linear-gradient(225deg, rgba(139,92,246,0.1) 0%, transparent 50%),
            linear-gradient(315deg, rgba(16,185,129,0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          background: [
            `linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%),
             linear-gradient(225deg, rgba(139,92,246,0.1) 0%, transparent 50%),
             linear-gradient(315deg, rgba(16,185,129,0.1) 0%, transparent 50%)`,
            `linear-gradient(145deg, rgba(139,92,246,0.1) 0%, transparent 50%),
             linear-gradient(235deg, rgba(16,185,129,0.1) 0%, transparent 50%),
             linear-gradient(325deg, rgba(59,130,246,0.1) 0%, transparent 50%)`,
            `linear-gradient(155deg, rgba(16,185,129,0.1) 0%, transparent 50%),
             linear-gradient(245deg, rgba(59,130,246,0.1) 0%, transparent 50%),
             linear-gradient(335deg, rgba(139,92,246,0.1) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );

  const renderBackground = () => {
    switch (variant) {
      case 'dynamic':
        return renderDynamicBackground();
      case 'particles':
        return renderParticlesBackground();
      case 'waves':
        return renderWavesBackground();
      case 'subtle':
      default:
        return renderSubtleBackground();
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {renderBackground()}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />
    </div>
  );
}

// Pre-configured backgrounds for common use cases
export const SubtleBlurBackground = () => (
  <AnimatedBackground variant="subtle" intensity="low" />
);

export const DynamicBlurBackground = () => (
  <AnimatedBackground variant="dynamic" intensity="medium" />
);

export const ParticleBlurBackground = () => (
  <AnimatedBackground variant="particles" intensity="medium" />
);

export const WaveBlurBackground = () => (
  <AnimatedBackground variant="waves" intensity="low" />
);
