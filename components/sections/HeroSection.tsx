"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  // Mouse tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { damping: 30, stiffness: 300 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { damping: 30, stiffness: 300 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      mouseX.set(x);
      mouseY.set(y);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 mesh-background"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center space-x-2 glass-panel-light rounded-full px-4 py-2 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4 text-electric-green" />
              <span className="text-slate-300">Now with AI-powered development</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Code in the
                <br />
                <span className="text-gradient-rainbow">
                  future
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-slate-400 max-w-2xl leading-relaxed"
            >
              Build, collaborate, and deploy with the next-generation coding environment. 
              Experience lightning-fast performance with zero configuration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/signup">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-purple hover:to-electric-blue text-white font-semibold px-8 py-4 text-lg rounded-xl glow-blue btn-ripple group transition-all duration-300"
                  >
                    Start Building Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="glass-panel border-white/20 hover:border-electric-green/50 text-white hover:text-electric-green px-8 py-4 text-lg rounded-xl group transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center lg:justify-start space-x-8 pt-8"
            >
              {[
                { value: '2M+', label: 'Developers' },
                { value: '50M+', label: 'Projects' },
                { value: '99.9%', label: 'Uptime' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-default"
                >
                  <div className="text-3xl font-bold text-white group-hover:text-electric-blue transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 3D Code Editor Mockup */}
          <motion.div
            className="relative perspective-1000 hidden lg:block"
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main Editor Window */}
              <motion.div
                className="glass-panel rounded-2xl p-6 w-full max-w-lg mx-auto border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Window Controls */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono bg-slate-800/50 px-3 py-1 rounded-md">
                    app.tsx
                  </div>
                  <div className="w-6" />
                </div>

                {/* Code Content */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex">
                    <span className="text-slate-500 w-8">1</span>
                    <span className="text-electric-purple">import</span>
                    <span className="text-slate-300 ml-2">React from </span>
                    <span className="text-electric-green">'react'</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">2</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">3</span>
                    <span className="text-electric-blue">function</span>
                    <span className="text-yellow-400 ml-2">App</span>
                    <span className="text-slate-300">() {</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">4</span>
                    <span className="text-slate-300 ml-4">return (</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">5</span>
                    <span className="text-slate-300 ml-8"><</span>
                    <span className="text-electric-blue">div</span>
                    <span className="text-electric-green"> className</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-electric-green">"app"</span>
                    <span className="text-slate-300">></span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">6</span>
                    <span className="text-slate-300 ml-12">Hello World!</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">7</span>
                    <span className="text-slate-300 ml-8"></</span>
                    <span className="text-electric-blue">div</span>
                    <span className="text-slate-300">></span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">8</span>
                    <span className="text-slate-300 ml-4">)</span>
                  </div>
                  <div className="flex">
                    <span className="text-slate-500 w-8">9</span>
                    <span className="text-slate-300">}</span>
                  </div>
                </div>

                {/* Glowing cursor */}
                <motion.div
                  className="w-0.5 h-5 bg-electric-green mt-2 ml-12"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              {/* Floating Status Indicators */}
              <motion.div
                className="absolute -top-4 -right-4 glass-panel-light rounded-xl p-3 border border-white/10"
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-electric-green animate-pulse" />
                  <span className="text-xs text-electric-green font-medium">Live</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-panel-light rounded-xl p-3 border border-white/10"
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                  <span className="text-xs text-electric-blue font-medium">Deploy</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 glass-panel-light rounded-xl p-3 border border-white/10"
                animate={{ x: [0, -10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-electric-purple animate-pulse" />
                  <span className="text-xs text-electric-purple font-medium">AI</span>
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
            className="w-1 h-3 bg-electric-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}