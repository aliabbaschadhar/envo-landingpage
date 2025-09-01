"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, Zap, Sparkles, ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { name: 'Features', section: 'features', icon: Zap },
    { name: 'Pricing', section: 'pricing', icon: Sparkles },
    { name: 'Docs', section: 'docs', icon: FileText },
    { name: 'Community', href: '/community', icon: ArrowRight }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'backdrop-blur-xl bg-gradient-to-r from-deep-navy/95 via-slate-900/95 to-deep-navy/95 border-b border-gradient-to-r from-electric-blue/20 via-electric-purple/20 to-electric-cyan/20 shadow-2xl shadow-electric-blue/10'
        : 'bg-gradient-to-r from-transparent via-deep-navy/50 to-transparent backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo with Gradient Background */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center space-x-3 group relative cursor-pointer">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-blue via-electric-purple to-electric-cyan p-3 relative overflow-hidden shadow-lg shadow-electric-blue/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  <Code2 className="w-full h-full text-white relative z-10" strokeWidth={2.5} />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </div>
                {/* Floating particles around logo */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-electric-cyan rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-electric-purple rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.span
                  className="text-2xl font-bold bg-gradient-to-r from-white via-electric-blue to-electric-purple bg-clip-text text-transparent group-hover:from-electric-blue group-hover:via-electric-purple group-hover:to-electric-cyan transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Envo
                </motion.span>
                <span className="text-xs text-electric-blue/70 font-medium tracking-wider">
                  BUILD FASTER
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Premium Gradient Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.section ? (
                    <button
                      onClick={() => scrollToSection(item.section)}
                      className="relative px-6 py-3 text-slate-300 hover:text-white transition-all duration-300 font-medium group rounded-xl hover:bg-gradient-to-r hover:from-electric-blue/20 hover:via-electric-purple/20 hover:to-electric-cyan/20 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <span>{item.name}</span>
                      </div>
                      <motion.span
                        className="absolute -bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`nav-${item.name}`}
                      />
                      {/* Gradient glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-blue/10 via-electric-purple/10 to-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </button>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="relative px-6 py-3 text-slate-300 hover:text-white transition-all duration-300 font-medium group rounded-xl hover:bg-gradient-to-r hover:from-electric-blue/20 hover:via-electric-purple/20 hover:to-electric-cyan/20 cursor-pointer"
                    >
                      <div className="flex items-center space-x-2">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <item.icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <span>{item.name}</span>
                      </div>
                      <motion.span
                        className="absolute -bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-electric-blue via-electric-purple to-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`nav-${item.name}`}
                      />
                      {/* Gradient glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-electric-blue/10 via-electric-purple/10 to-electric-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </nav>

          {/* Premium Gradient CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/signin">
                <Button
                  variant="ghost"
                  className="text-slate-300 hover:text-white bg-gradient-to-r from-white/5 to-white/10 hover:from-electric-blue/20 hover:to-electric-purple/20 font-medium transition-all duration-300 px-6 py-2.5 rounded-xl border border-white/10 hover:border-electric-blue/30 backdrop-blur-sm"
                >
                  Sign In
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-electric-blue via-electric-purple to-electric-cyan hover:from-electric-cyan hover:via-electric-blue hover:to-electric-purple text-white font-semibold px-8 py-3 rounded-xl shadow-xl shadow-electric-blue/30 hover:shadow-electric-purple/40 transition-all duration-500 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Animated shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 rounded-xl border border-white/20 hover:border-electric-blue/50 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="lg:hidden glass-panel-heavy mt-4 rounded-2xl p-6 border border-electric-blue/20 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-electric-purple/5 rounded-2xl" />

              <nav className="flex flex-col space-y-2 relative z-10">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.section ? (
                      <button
                        onClick={() => {
                          scrollToSection(item.section);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-electric-blue/20 hover:to-electric-purple/20 group font-medium w-full text-left"
                      >
                        <item.icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </button>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-electric-blue/20 hover:to-electric-purple/20 group font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    )}
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                  <Link href="/signin">
                    <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white bg-gradient-to-r from-white/5 to-white/10 hover:from-electric-blue/20 hover:to-electric-purple/20 rounded-xl py-3 border border-white/10 hover:border-electric-blue/30">
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded border border-slate-500" />
                        <span>Sign In</span>
                      </div>
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full bg-gradient-to-r from-electric-blue via-electric-purple to-electric-cyan hover:from-electric-cyan hover:via-electric-blue hover:to-electric-purple text-white font-semibold rounded-xl py-3 shadow-lg shadow-electric-blue/30">
                      <div className="flex items-center justify-center space-x-2">
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}