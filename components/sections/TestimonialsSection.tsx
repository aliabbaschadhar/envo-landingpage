"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Developer',
      company: 'Stripe',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'Envo completely transformed our development workflow. The instant deployment and collaboration features are absolutely game-changing for our team.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'TechCorp',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'The performance optimization and zero-config setup saved us weeks of development time. This platform is absolutely incredible.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Full Stack Developer',
      company: 'Vercel',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'I love how seamlessly Envo integrates with our existing tools. The AI-powered suggestions are surprisingly accurate and helpful.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Startup Founder',
      company: 'InnovateLab',
      avatar: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400',
      content: 'From prototype to production in minutes, not hours. Envo is absolutely essential for any modern development team.',
      rating: 5,
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 glass-panel-light rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-electric-green fill-electric-green" />
            <span className="text-slate-300">Loved by developers</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-geist text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0 group cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.01 }}
            >
              Trusted by teams at
            </motion.span>
            <br />
            <motion.span
              className="text-gradient-purple hover:text-gradient-blue transition-all duration-500 inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
              }}
            >
              world-class companies
            </motion.span>
          </motion.h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Join thousands of developers who have transformed their workflow with Envo
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative px-4 sm:px-0">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="glass-panel rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 glow-blue"
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-electric-blue to-electric-purple p-2.5 sm:p-3 mb-6 sm:mb-8 mx-auto md:mx-0"
                  >
                    <Quote className="w-full h-full text-white" />
                  </motion.div>

                  <div className="grid md:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
                    {/* Content */}
                    <div className="text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start space-x-1 mb-4 sm:mb-6">
                        {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-electric-green text-electric-green" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed font-medium">
                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div>
                        <div className="font-semibold text-white text-base sm:text-lg font-geist">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-slate-400 font-medium text-sm sm:text-base">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>

                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="order-first md:order-last"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden ring-2 ring-electric-blue/20 mx-auto">
                        <Image
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="glass-panel border-white/20 hover:border-electric-blue/50 text-white hover:text-electric-blue w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>

            {/* Dots */}
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                    ? 'bg-electric-blue w-6 sm:w-8 glow-blue'
                    : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                />
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="glass-panel border-white/20 hover:border-electric-blue/50 text-white hover:text-electric-blue w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}