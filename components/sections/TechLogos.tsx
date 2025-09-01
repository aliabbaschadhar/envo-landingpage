"use client";

import { motion } from 'framer-motion';

export function TechLogos() {
  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'Vue.js', icon: 'V', color: '#4FC08D' },
    { name: 'Angular', icon: 'A', color: '#DD0031' },
    { name: 'Svelte', icon: 'S', color: '#FF3E00' },
    { name: 'Next.js', icon: '▲', color: '#000000' },
    { name: 'Vite', icon: '⚡', color: '#646CFF' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Kubernetes', icon: '☸️', color: '#326CE5' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
  ];

  // Duplicate for seamless scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-geist text-white mb-4">
            Works with your favorite
            <span className="text-gradient-purple"> technologies</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From React to Python, deploy any stack with zero configuration. Our platform adapts to your workflow.
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-deep-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-deep-navy to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8 min-w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedTechs.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="glass-panel rounded-2xl p-6 w-28 h-28 flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 group-hover:glow-blue transition-all duration-300">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg"
                      style={{ backgroundColor: tech.color }}
                    >
                      {tech.icon}
                    </div>
                  </div>
                  <p className="text-center mt-3 text-sm text-slate-400 group-hover:text-white transition-colors font-medium">
                    {tech.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}