"use client";

import { motion } from 'framer-motion';
import { Code2, Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Enterprise', href: '/enterprise' },
        { name: 'Security', href: '/security' },
        { name: 'Integrations', href: '/integrations' },
      ],
    },
    {
      title: 'Developers',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Templates', href: '/templates' },
        { name: 'CLI Tools', href: '/cli' },
        { name: 'SDK', href: '/sdk' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', href: '/discord' },
        { name: 'Forums', href: '/forums' },
        { name: 'Blog', href: '/blog' },
        { name: 'Events', href: '/events' },
        { name: 'Newsletter', href: '/newsletter' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
        { name: 'Press', href: '/press' },
        { name: 'Partners', href: '/partners' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-white' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-electric-blue' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-electric-blue' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: Mail, href: 'mailto:hello@envo.dev', label: 'Email', color: 'hover:text-electric-green' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-3 group mb-6 cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue to-electric-purple p-2.5"
                >
                  <Code2 className="w-full h-full text-white" />
                </motion.div>
                <span className="text-2xl font-bold font-geist text-white group-hover:text-electric-blue transition-colors">
                  Envo
                </span>
              </Link>

              <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                The modern coding environment that adapts to your workflow.
                Build faster, collaborate better, deploy instantly.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`glass-panel-light rounded-xl p-3 border border-white/10 hover:border-white/20 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="h-5 w-5 text-slate-400 group-hover:scale-110 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold font-geist mb-6 text-lg">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors relative group font-medium"
                    >
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-electric-blue group-hover:w-full transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm font-medium">
            © 2025 Envo. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {[
              { name: 'Terms of Service', href: '/terms' },
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Cookie Policy', href: '/cookies' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}