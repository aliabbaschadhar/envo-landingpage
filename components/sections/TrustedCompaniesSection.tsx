"use client";

import { motion } from 'framer-motion';

export function TrustedCompaniesSection() {
  const companies = [
    {
      name: 'Soar',
      logo: 'soar',
      className: 'text-blue-400'
    },
    {
      name: 'ARK Invest',
      logo: 'ark',
      className: 'text-white'
    },
    {
      name: 'Zillow',
      logo: 'zillow',
      className: 'text-blue-500'
    },
    {
      name: 'Google',
      logo: 'google',
      className: 'text-white'
    },
    {
      name: 'Anthropic',
      logo: 'anthropic',
      className: 'text-white'
    },
    {
      name: 'Coinbase',
      logo: 'coinbase',
      className: 'text-blue-400'
    },
    {
      name: 'xHg',
      logo: 'xhg',
      className: 'text-red-500'
    },
    {
      name: 'Microsoft',
      logo: 'microsoft',
      className: 'text-blue-400'
    },
    {
      name: 'OpenAI',
      logo: 'openai',
      className: 'text-white'
    },
    {
      name: 'Meta',
      logo: 'meta',
      className: 'text-blue-500'
    }
  ];

  // Duplicate for seamless scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-deep-navy/50 to-deep-navy">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-electric-purple/5 backdrop-blur-[0.5px]" />

      {/* Subtle mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-electric-blue/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-electric-purple/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight group cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.01 }}
            >
              Trusted by founders and{' '}
            </motion.span>
            <motion.span
              className="text-gradient-blue hover:text-gradient-purple transition-all duration-500 inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              Fortune 500
            </motion.span>
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            From scrappy startups to established enterprises, teams around the globe trust Envo for their critical development workflows.
          </p>
        </motion.div>

        {/* Scrolling Company Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-deep-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-deep-navy to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8 sm:space-x-12 lg:space-x-16 min-w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-40 h-28 sm:w-48 sm:h-32 lg:w-56 lg:h-36 flex items-center justify-center">
                    <CompanyLogo name={company.logo} className={`${company.className} group-hover:brightness-125 transition-all duration-300`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
}

// Company Logo Component
function CompanyLogo({ name, className }: { name: string; className: string }) {
  const logos = {
    soar: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="30" fontSize="24" fontWeight="600" fontFamily="var(--font-geist-sans)">soar</text>
      </svg>
    ),
    ark: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <circle cx="15" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="35" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">ARK</text>
        <text x="35" y="38" fontSize="10" fontFamily="var(--font-geist-sans)">INVEST</text>
      </svg>
    ),
    zillow: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="20" fontWeight="700" fontFamily="var(--font-geist-sans)">Zillow</text>
      </svg>
    ),
    google: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="20" fontWeight="500" fontFamily="var(--font-geist-sans)">Google</text>
      </svg>
    ),
    anthropic: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 150 40" fill="currentColor">
        <text x="0" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">ANTHROPIC</text>
      </svg>
    ),
    coinbase: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">coinbase</text>
      </svg>
    ),
    xhg: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 80 40" fill="currentColor">
        <text x="0" y="28" fontSize="20" fontWeight="700" fontFamily="var(--font-geist-sans)">×Hg</text>
      </svg>
    ),
    microsoft: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">Microsoft</text>
      </svg>
    ),
    openai: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">OpenAI</text>
      </svg>
    ),
    meta: (
      <svg className={`h-8 md:h-10 lg:h-12 w-auto ${className}`} viewBox="0 0 100 40" fill="currentColor">
        <text x="0" y="28" fontSize="20" fontWeight="600" fontFamily="var(--font-geist-sans)">Meta</text>
      </svg>
    ),
  };

  return logos[name as keyof typeof logos] || (
    <div className={`text-lg font-semibold ${className}`}>{name}</div>
  );
}
