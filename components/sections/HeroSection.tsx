"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { damping: 30, stiffness: 300 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { damping: 30, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      try {
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x: e.clientX, y: e.clientY });
      } catch (error) {
        console.warn('Error updating mouse position:', error);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Cursor Following Spotlight */}
      <motion.div
        className="fixed pointer-events-none z-10 w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-100px)]">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 py-8 lg:py-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="text-slate-300">Now with AI-powered development</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight group cursor-default">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-block"
                >
                  Code in the
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent hover:from-emerald-400 hover:via-blue-400 hover:to-purple-400 transition-all duration-500 inline-block"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  future
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-slate-400 max-w-2xl leading-relaxed px-4 sm:px-0 mx-auto lg:mx-0"
            >
              Build, collaborate, and deploy with the next-generation coding environment.
              Experience lightning-fast performance with zero configuration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Building Free
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-slate-800/60 backdrop-blur-sm border-slate-600/50 hover:border-emerald-400/50 hover:bg-slate-700/60 text-white hover:text-emerald-400 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl group transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-8 pt-6 lg:pt-8"
            >
              {[
                { value: '2M+', label: 'Developers' },
                { value: '50M+', label: 'Projects' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 3D Code Editor Mockup */}
          <motion.div
            className="relative lg:block order-first lg:order-last"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              {/* Main Editor Window */}
              <motion.div
                className="bg-slate-800/80 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 w-full border border-slate-700/50 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Window Controls */}
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono bg-slate-900/50 px-2 lg:px-3 py-1 rounded-md">
                    app.tsx
                  </div>
                  <div className="w-6" />
                </div>

                {/* Code Content */}
                <div className="space-y-2 lg:space-y-3 font-mono text-xs lg:text-sm overflow-x-auto">
                  <div className="flex whitespace-nowrap">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">1</span>
                    <span className="text-purple-400">import</span>
                    <span className="text-slate-300 ml-2">React from </span>
                    <span className="text-emerald-400">&apos;react&apos;</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">2</span>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">3</span>
                    <span className="text-blue-400">function</span>
                    <span className="text-yellow-400 ml-2">App</span>
                    <span className="text-slate-300">()</span>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">4</span>
                    <span className="text-slate-300 ml-4">return (</span>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">5</span>
                    <span className="text-slate-300 ml-8">&lt;</span>
                    <span className="text-blue-400">div</span>
                    <span className="text-emerald-400"> className</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-emerald-400">&quot;app&quot;</span>
                    <span className="text-slate-300">&gt;</span>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">6</span>
                    <span className="text-slate-300 ml-12">Hello World!</span>
                  </div>
                  <div className="flex whitespace-nowrap">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">7</span>
                    <span className="text-slate-300 ml-8">&lt;/</span>
                    <span className="text-blue-400">div</span>
                    <span className="text-slate-300">&gt;</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">8</span>
                    <span className="text-slate-300 ml-4">)</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-6 lg:w-8 flex-shrink-0">9</span>
                    <span className="text-slate-300">{'}'}</span>
                  </div>
                </div>

                {/* Glowing cursor */}
                <motion.div
                  className="w-0.5 h-4 lg:h-5 bg-emerald-400 mt-2 ml-8 lg:ml-12"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating Status Indicators */}
              <motion.div
                className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 bg-slate-800/80 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-3 border border-slate-700/30"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-1.5 lg:space-x-2">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Live</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 lg:-bottom-4 -left-2 lg:-left-4 bg-slate-800/80 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-3 border border-slate-700/30"
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-1.5 lg:space-x-2">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-xs text-blue-400 font-medium">Deploy</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-4 lg:-left-8 bg-slate-800/80 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-3 border border-slate-700/30"
                animate={{ x: [0, -10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-1.5 lg:space-x-2">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs text-purple-400 font-medium">AI</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}