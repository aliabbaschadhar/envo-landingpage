"use client";

import { motion } from 'framer-motion';
import * as icons from 'simple-icons';
import { Cloud } from 'lucide-react';

// Simple Icons React components
const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siReact.path} />
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siTypescript.path} />
  </svg>
);

const NodeJsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siNodedotjs.path} />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siPython.path} />
  </svg>
);

const VueIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siVuedotjs.path} />
  </svg>
);

const AngularIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siAngular.path} />
  </svg>
);

const SvelteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siSvelte.path} />
  </svg>
);

const NextJsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siNextdotjs.path} />
  </svg>
);

const ViteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siVite.path} />
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siDocker.path} />
  </svg>
);

const KubernetesIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d={icons.siKubernetes.path} />
  </svg>
);

const AWSIcon = () => <Cloud className="w-full h-full" />;

export function TechLogos() {
  const technologies = [
    { name: 'React', icon: ReactIcon, color: '#61DAFB' },
    { name: 'TypeScript', icon: TypeScriptIcon, color: '#3178C6' },
    { name: 'Node.js', icon: NodeJsIcon, color: '#339933' },
    { name: 'Python', icon: PythonIcon, color: '#3776AB' },
    { name: 'Vue.js', icon: VueIcon, color: '#4FC08D' },
    { name: 'Angular', icon: AngularIcon, color: '#DD0031' },
    { name: 'Svelte', icon: SvelteIcon, color: '#FF3E00' },
    { name: 'Next.js', icon: NextJsIcon, color: '#000000' },
    { name: 'Vite', icon: ViteIcon, color: '#646CFF' },
    { name: 'Docker', icon: DockerIcon, color: '#2496ED' },
    { name: 'Kubernetes', icon: KubernetesIcon, color: '#326CE5' },
    { name: 'AWS', icon: AWSIcon, color: '#FF9900' },
  ];

  // Duplicate for seamless scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-geist text-white mb-3 sm:mb-4">
            Works with your favorite
            <span className="text-gradient-purple"> technologies</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0">
            From React to Python, deploy any stack with zero configuration. Our platform adapts to your workflow.
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-deep-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-deep-navy to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-4 sm:space-x-6 lg:space-x-8 min-w-max"
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
                  <div className="glass-panel rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center border border-white/10 group-hover:border-white/20 group-hover:glow-blue transition-all duration-300">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 shadow-lg"
                      style={{ backgroundColor: tech.color }}
                    >
                      <tech.icon />
                    </div>
                  </div>
                  <p className="text-center mt-2 sm:mt-3 text-xs sm:text-sm text-slate-400 group-hover:text-white transition-colors font-medium">
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