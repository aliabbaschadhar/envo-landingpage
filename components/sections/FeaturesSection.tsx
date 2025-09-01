"use client";

import { motion } from 'framer-motion';
import {
  Zap,
  Users,
  Shield,
  Rocket,
  GitBranch,
  Terminal,
  Cloud,
  Sparkles
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant hot reload and compilation with optimized build times that keep you in flow',
      color: 'from-electric-blue to-cyan-400',
      glowColor: 'glow-blue',
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with live cursors, shared editing, and instant sync',
      color: 'from-electric-purple to-pink-400',
      glowColor: 'glow-purple',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with SOC2 Type II certification',
      color: 'from-electric-green to-emerald-400',
      glowColor: 'glow-green',
    },
    {
      icon: Rocket,
      title: 'One-Click Deploy',
      description: 'Deploy to production instantly with automatic scaling and global CDN',
      color: 'from-electric-cyan to-blue-400',
      glowColor: 'glow-blue',
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Seamless GitHub, GitLab, and Bitbucket integration with smart branching',
      color: 'from-orange-400 to-red-400',
      glowColor: 'glow-purple',
    },
    {
      icon: Terminal,
      title: 'Full Terminal Access',
      description: 'Complete development environment with package management and shell access',
      color: 'from-green-400 to-electric-green',
      glowColor: 'glow-green',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Serverless architecture with global edge deployment and auto-scaling',
      color: 'from-blue-400 to-electric-blue',
      glowColor: 'glow-blue',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Intelligent code suggestions, automated optimization, and smart debugging',
      color: 'from-electric-purple to-purple-600',
      glowColor: 'glow-purple',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-deep-navy/60 to-deep-navy/80 backdrop-blur-[1px]" />

      {/* Floating background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/5 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-electric-purple/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass-panel-light rounded-full px-4 py-2 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 text-electric-blue" />
            <span className="text-slate-300">Everything you need</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-geist text-white mb-6 leading-tight group cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.01 }}
            >
              Build amazing apps with
            </motion.span>
            <br />
            <motion.span
              className="text-gradient-blue hover:text-gradient-purple transition-all duration-500 inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              professional tools
            </motion.span>
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A complete development platform designed for modern teams and individual developers who demand excellence
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className={`glass-panel rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:${feature.glowColor}`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3.5 mb-6 group-hover:shadow-2xl transition-all duration-300`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-xl font-semibold font-geist text-white mb-4 group-hover:text-electric-blue transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}