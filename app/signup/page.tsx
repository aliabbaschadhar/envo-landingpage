"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Github, Mail, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const features = [
    'Unlimited public repositories',
    'Real-time collaboration tools',
    'Instant deployment pipeline',
    '10GB storage included',
    'Priority community support',
    'Advanced AI code assistance',
  ];

  return (
    <div className="min-h-screen bg-deep-navy flex items-center justify-center p-4 mesh-background">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8"
      >
        <Link href="/">
          <Button variant="ghost" className="text-slate-400 hover:text-white group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </Link>
      </motion.div>

      <div className="w-full max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="glass-panel rounded-3xl p-10 border border-white/10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 glass-panel-light rounded-full px-4 py-2 text-sm font-medium mb-8"
              >
                <Sparkles className="w-4 h-4 text-electric-green" />
                <span className="text-slate-300">Free 14-day trial</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold font-geist text-white mb-6 leading-tight">
                Start building with
                <br />
                <span className="text-gradient-rainbow">Envo Pro</span>
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                Join thousands of developers who trust Envo for their most important projects
              </p>
              
              <ul className="space-y-5">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-electric-green/20 flex items-center justify-center group-hover:bg-electric-green/30 transition-colors">
                      <Check className="w-4 h-4 text-electric-green" />
                    </div>
                    <span className="text-white font-medium group-hover:text-electric-green transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 glow-purple">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold font-geist text-white mb-2"
                >
                  Create your account
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-slate-400"
                >
                  Start your free 14-day trial today
                </motion.p>
              </div>

              {/* Social Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4 mb-8"
              >
                <Button
                  variant="outline"
                  className="w-full glass-panel-light border-white/20 hover:border-electric-blue/30 text-white hover:text-electric-blue transition-all duration-300 py-6 group rounded-xl"
                >
                  <Github className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Sign up with GitHub
                </Button>
                <Button
                  variant="outline"
                  className="w-full glass-panel-light border-white/20 hover:border-electric-green/30 text-white hover:text-electric-green transition-all duration-300 py-6 group rounded-xl"
                >
                  <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Sign up with Google
                </Button>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative mb-8"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-deep-navy text-slate-400 font-medium">or continue with email</span>
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-6"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="glass-panel-light border-white/20 bg-transparent text-white placeholder:text-slate-500 focus:border-electric-blue/50 focus:ring-electric-blue/20 transition-all duration-300 py-3 rounded-xl"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="glass-panel-light border-white/20 bg-transparent text-white placeholder:text-slate-500 focus:border-electric-blue/50 focus:ring-electric-blue/20 transition-all duration-300 py-3 rounded-xl"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="glass-panel-light border-white/20 bg-transparent text-white placeholder:text-slate-500 focus:border-electric-blue/50 focus:ring-electric-blue/20 transition-all duration-300 py-3 rounded-xl"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      className="glass-panel-light border-white/20 bg-transparent text-white placeholder:text-slate-500 focus:border-electric-blue/50 focus:ring-electric-blue/20 transition-all duration-300 pr-12 py-3 rounded-xl"
                      placeholder="Create a strong password"
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-electric-blue transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </motion.button>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-electric-green to-emerald-400 hover:from-emerald-400 hover:to-electric-green text-deep-navy transition-all duration-300 glow-green py-4 text-lg font-semibold rounded-xl btn-ripple"
                  >
                    Create Account
                  </Button>
                </motion.div>
              </motion.form>

              {/* Terms */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-xs text-slate-500 text-center mt-6"
              >
                By creating an account, you agree to our{' '}
                <Link href="/terms" className="text-electric-blue hover:text-electric-green transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-electric-blue hover:text-electric-green transition-colors">
                  Privacy Policy
                </Link>
              </motion.p>

              {/* Sign In Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center pt-6 border-t border-white/10 mt-6"
              >
                <p className="text-slate-400">
                  Already have an account?{' '}
                  <Link href="/signin" className="text-electric-blue hover:text-electric-green transition-colors font-medium">
                    Sign in
                  </Link>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}