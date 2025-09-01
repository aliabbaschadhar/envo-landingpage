"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, Eye, EyeOff, Github, Mail, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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

      {/* Sign In Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 glow-blue">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass-panel-light rounded-full px-4 py-2 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-electric-blue" />
              <span className="text-slate-300">Welcome back</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold font-geist text-white mb-2"
            >
              Sign in to Envo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400"
            >
              Continue building amazing projects
            </motion.p>
          </div>

          {/* Social Login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            <Button
              variant="outline"
              className="w-full glass-panel-light border-white/20 hover:border-electric-blue/30 text-white hover:text-electric-blue transition-all duration-300 py-6 group rounded-xl"
            >
              <Github className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Continue with GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full glass-panel-light border-white/20 hover:border-electric-green/30 text-white hover:text-electric-green transition-all duration-300 py-6 group rounded-xl"
            >
              <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Continue with Google
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
                placeholder="Enter your email"
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
                  placeholder="Enter your password"
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

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-white/20 bg-transparent text-electric-blue focus:ring-electric-blue/20"
                />
                <span className="text-slate-400 group-hover:text-white transition-colors font-medium">
                  Remember me
                </span>
              </label>
              <Link href="/forgot-password" className="text-electric-blue hover:text-electric-green transition-colors font-medium">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-purple hover:to-electric-blue transition-all duration-300 glow-blue py-4 text-lg font-semibold rounded-xl btn-ripple"
              >
                Sign In
              </Button>
            </motion.div>
          </motion.form>

          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center pt-6 border-t border-white/10"
          >
            <p className="text-slate-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-electric-green hover:text-green-400 transition-colors font-medium">
                Sign up for free
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}