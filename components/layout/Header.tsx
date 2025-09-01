"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { name: 'Pricing', section: 'pricing' },
    { name: 'Features', section: 'features' },
    { name: 'Enterprise', section: 'docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Docs', section: 'docs' },
    { name: 'Careers', href: '/careers' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${isScrolled
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
        : 'bg-transparent'
        }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                  <div className="w-1.5 h-2.5 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                ENVO
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {item.section ? (
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/signin">
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50 text-sm font-medium transition-all duration-200 px-4 py-2 h-9 rounded-lg border-0"
                >
                  Sign in
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/download">
                <Button className="bg-white text-black hover:bg-gray-100 text-sm font-medium px-4 py-2 h-9 rounded-lg flex items-center space-x-2 transition-all duration-200">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-gray-800/50 rounded-lg h-9 w-9 border-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 mt-4 rounded-lg overflow-hidden"
            >
              <nav className="flex flex-col p-4 space-y-1">
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
                        className="text-gray-300 hover:text-white text-left py-3 px-2 text-sm font-medium transition-colors duration-200 w-full rounded-lg hover:bg-gray-800/50"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="text-gray-300 hover:text-white py-3 px-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-gray-800/50 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-gray-800/50 flex flex-col space-y-3 mt-4">
                  <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg py-3 h-auto text-sm font-medium"
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Link href="/download" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-lg py-3 h-auto text-sm font-medium flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
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