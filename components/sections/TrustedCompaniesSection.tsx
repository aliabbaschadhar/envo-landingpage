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
  ];

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Trusted by founders and{' '}
            <span className="text-gradient-blue">Fortune 500</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed px-4">
            From scrappy startups to established enterprises, teams around the globe trust Envo for their critical development workflows and deliver products that users love with Envo.
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-12 items-center justify-items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-center h-12 md:h-16 px-4 md:px-6">
                <CompanyLogo name={company.logo} className={`${company.className} group-hover:brightness-125 transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

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
      <svg className={`h-6 md:h-8 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="30" fontSize="24" fontWeight="600" fontFamily="var(--font-geist-sans)">soar</text>
      </svg>
    ),
    ark: (
      <svg className={`h-6 md:h-8 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <circle cx="15" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="35" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">ARK</text>
        <text x="35" y="38" fontSize="10" fontFamily="var(--font-geist-sans)">INVEST</text>
      </svg>
    ),
    zillow: (
      <svg className={`h-6 md:h-8 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="20" fontWeight="700" fontFamily="var(--font-geist-sans)">Zillow</text>
      </svg>
    ),
    google: (
      <svg className={`h-6 md:h-8 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="20" fontWeight="500" fontFamily="var(--font-geist-sans)">Google</text>
      </svg>
    ),
    anthropic: (
      <svg className={`h-6 md:h-8 w-auto ${className}`} viewBox="0 0 150 40" fill="currentColor">
        <text x="0" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">ANTHROPIC</text>
      </svg>
    ),
    coinbase: (
      <svg className={`h-6 md:h-8 w-auto ${className}`} viewBox="0 0 120 40" fill="currentColor">
        <text x="0" y="28" fontSize="18" fontWeight="600" fontFamily="var(--font-geist-sans)">coinbase</text>
      </svg>
    ),
    xhg: (
      <svg className={`h-6 md:h-8 w-auto ${className}`} viewBox="0 0 80 40" fill="currentColor">
        <text x="0" y="28" fontSize="20" fontWeight="700" fontFamily="var(--font-geist-sans)">×Hg</text>
      </svg>
    ),
  };

  return logos[name as keyof typeof logos] || (
    <div className={`text-lg font-semibold ${className}`}>{name}</div>
  );
}
