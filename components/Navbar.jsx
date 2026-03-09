"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, socialLinks } from '@/lib/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-900/70 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#" className="relative group">
        <span className="text-lg font-bold tracking-widest uppercase text-amber-300 transition-all duration-300 group-hover:text-amber-200">
          Ibrahim
        </span>
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-300 transition-all duration-300 group-hover:w-full" />
      </a>

      {/* Desktop navigation */}
      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-amber-300 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </a>
          </li>
        ))}
        <li className="ml-4">
          <a
            href={`mailto:${socialLinks.email}`}
            className="px-5 py-2 text-sm font-semibold text-zinc-900 bg-amber-300 rounded-full hover:bg-amber-200 transition-all duration-300 hover:shadow-lg hover:shadow-amber-300/20"
          >
            Let's Talk
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-amber-300 origin-center"
        />
        <motion.span
          animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          className="block w-6 h-0.5 bg-amber-300"
        />
        <motion.span
          animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-amber-300 origin-center"
        />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-white/5 shadow-xl md:hidden"
          >
            <ul className="flex flex-col py-6 px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="block py-3 px-4 text-slate-300 hover:text-amber-300 hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2"
              >
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="block text-center py-3 px-4 text-zinc-900 bg-amber-300 rounded-lg font-semibold hover:bg-amber-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Talk
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
