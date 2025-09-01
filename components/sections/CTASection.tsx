"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements with enhanced blur */}
      <div className="absolute inset-0 backdrop-blur-[2px]">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[1000px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl"
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-green/10 rounded-full blur-3xl"
          animate={{
            y: [0, 80, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl p-12 md:p-20 border border-white/10 glow-blue"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-electric-blue via-electric-purple to-electric-green p-5 glow-blue"
          >
            <Code2 className="w-full h-full text-white" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass-panel-light rounded-full px-4 py-2 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-electric-green" />
            <span className="text-slate-300">Limited time offer</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-geist text-white mb-6 leading-tight"
          >
            Ready to revolutionize
            <br />
            <span className="text-gradient-rainbow">
              your development workflow?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join millions of developers building the future with Envo.
            Start your free trial today—no credit card required.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-electric-green to-emerald-400 hover:from-emerald-400 hover:to-electric-green text-deep-navy font-bold px-10 py-4 text-lg rounded-xl glow-green btn-ripple group transition-all duration-300"
                >
                  Start Free Trial
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
                className="glass-panel border-white/20 hover:border-electric-blue/50 text-white hover:text-electric-blue px-10 py-4 text-lg rounded-xl font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10"
          >
            {[
              { label: 'Trusted by', value: '500+ Companies' },
              { label: 'Average rating', value: '4.9/5 ⭐' },
              { label: 'Free trial', value: '14 days' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-default"
              >
                <div className="text-sm text-slate-500 mb-1 font-medium">{item.label}</div>
                <div className="text-lg font-semibold text-white group-hover:text-electric-blue transition-colors">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}