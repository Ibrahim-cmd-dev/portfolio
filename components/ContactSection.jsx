'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiUnlock } from 'react-icons/fi';
import { socialLinks } from '@/lib/constants';

// --- Unlock Card Component ---
const UnlockCard = ({ onClick }) => {
  return (
    <motion.div
      className="group cursor-pointer relative rounded-2xl shadow-inner shadow-gray-700 flex flex-col justify-around items-center w-40 h-80 bg-zinc-900 text-slate-200 overflow-hidden border border-zinc-700/50"
      onClick={onClick}
      initial={{ opacity: 1, x: 0 }}
      exit={{ x: '-110%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      {/* Background Blobs */}
      <div className="absolute w-20 h-20 bg-amber-400/30 rounded-full -z-10 blur-xl top-20 right-16 transition-transform duration-500 group-hover:translate-x-11 group-hover:-translate-y-11" />
      <div className="absolute w-12 h-12 bg-cyan-400/30 rounded-full -z-10 blur-xl bottom-32 right-16 transition-transform duration-500 group-hover:translate-x-11 group-hover:translate-y-16" />

      {/* Initials / Icon */}
      <div className="flex flex-col items-center gap-2 z-10">
        <div className="w-16 h-16 rounded-full bg-amber-300/10 border border-amber-300/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-amber-300">IM</span>
        </div>
        <span className="text-xs text-slate-400">Ibrahim Mohamed</span>
      </div>

      {/* Unlock Text */}
      <div className="flex flex-row justify-center text-sm font-thin items-center gap-2 z-10">
        <FiUnlock className="w-4 h-4 text-amber-300" />
        <span className="text-slate-300">Tap to reveal</span>
      </div>
    </motion.div>
  );
};

// --- Social Buttons Component ---
const SocialButtons = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const buttons = [
    { icon: FaGithub, href: socialLinks.github, color: '#6e5494', label: 'GitHub' },
    { icon: FaLinkedinIn, href: socialLinks.linkedin, color: '#0A66C2', label: 'LinkedIn' },
    { icon: FaInstagram, href: socialLinks.instagram, color: '#cc39a4', label: 'Instagram' },
    { icon: FaWhatsapp, href: socialLinks.whatsapp, color: '#25D366', label: 'WhatsApp' },
  ];

  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Social icons row */}
      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map(({ icon: Icon, href, color, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-amber-300/30 hover:shadow-lg group"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ '--hover-color': color }}
            aria-label={label}
          >
            <Icon className="text-2xl text-slate-300 group-hover:text-amber-300 transition-colors" />
          </motion.a>
        ))}
      </div>

      {/* Email link */}
      <motion.a
        href={`mailto:${socialLinks.email}`}
        className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-slate-300 hover:text-amber-300 hover:border-amber-300/30 transition-all duration-300 group max-w-full"
        variants={buttonVariants}
      >
        <FiMail className="w-5 h-5 group-hover:text-amber-300 transition-colors" />
        <span className="text-xs sm:text-sm font-medium truncate">{socialLinks.email}</span>
      </motion.a>
    </motion.div>
  );
};

// --- Main Contact Section ---
const ContactSection = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <motion.section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-[40vh] sm:min-h-[50vh] px-4 sm:px-8 md:px-10 py-12 sm:py-16 lg:py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ambient glow — hidden on mobile to prevent GPU overload */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-300/5 rounded-full blur-[200px] pointer-events-none hidden lg:block" />

      <div className="text-center mb-10 md:mb-14 z-10">
        <div className="flex items-center gap-3 justify-center mb-4">
          <span className="w-12 h-[1px] bg-amber-300/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber-300/70">Say hello</span>
          <span className="w-12 h-[1px] bg-amber-300/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
      </div>

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <UnlockCard key="unlock-card" onClick={() => setIsUnlocked(true)} />
        ) : (
          <SocialButtons key="social-buttons" />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ContactSection;
