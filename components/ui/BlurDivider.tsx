"use client";

import { motion } from 'framer-motion';

interface BlurDividerProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export function BlurDivider({ className = '', intensity = 'medium' }: BlurDividerProps) {
  const getBlurIntensity = () => {
    switch (intensity) {
      case 'light':
        return 'backdrop-blur-sm';
      case 'heavy':
        return 'backdrop-blur-xl';
      case 'medium':
      default:
        return 'backdrop-blur-lg';
    }
  };

  return (
    <div className={`relative h-32 md:h-40 overflow-hidden ${className}`}>
      {/* Enhanced backdrop blur layer */}
      <div className={`absolute inset-0 ${getBlurIntensity()} bg-white/5`} />

      {/* Multiple gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-green-500/5" />

      {/* Stronger animated orbs with multiple colors */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/2 w-60 h-60 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.1) 30%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Central glass morphism panel */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-20 glass rounded-xl opacity-60"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Enhanced central glow line */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-px"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </motion.div>

      {/* Additional particle effects */}
      <motion.div
        className="absolute top-1/4 left-3/4 w-4 h-4 bg-blue-400/60 rounded-full blur-sm"
        animate={{
          y: [0, -50, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-purple-400/60 rounded-full blur-sm"
        animate={{
          y: [0, -30, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
}

// Default export for easier importing
export default BlurDivider;
