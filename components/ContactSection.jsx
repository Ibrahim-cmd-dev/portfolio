'use client'; // Needed for useState and Framer Motion

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import icons for social buttons
import { FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; // Added FaWhatsapp, removed FaTwitter

// --- Unlock Card Component ---
const UnlockCard = ({ onClick }) => {
  return (
    <motion.div
      className="group cursor-pointer relative rounded-2xl shadow-inner shadow-gray-700 flex flex-col justify-around items-center w-40 h-80 bg-zinc-900 text-slate-200 overflow-hidden"
      onClick={onClick}
      // Framer Motion props for exit animation
      initial={{ opacity: 1, x: 0 }}
      exit={{ x: '-110%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }} // Slide left and fade out
      whileHover={{ scale: 1.05, skewX: 2, skewY: -2, transition: { duration: 0.3 } }} // Simpler hover effect
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
    >
      {/* Background Blobs (Recreated with divs) */}
      <div className="absolute w-20 h-20 bg-amber-400/30 rounded-full -z-10 blur-xl top-20 right-16 transition-transform duration-500 group-hover:translate-x-11 group-hover:-translate-y-11"></div>
      <div className="absolute w-12 h-12 bg-cyan-400/30 rounded-full -z-10 blur-xl bottom-32 right-16 transition-transform duration-500 group-hover:translate-x-11 group-hover:translate-y-16"></div>

      {/* Text Content */}
      <div className="flex flex-col font-extrabold text-6xl z-10 text-center">
        {/* You can replace these numbers if desired */}
        <span>03</span>
        <span>40</span>
      </div>

      {/* Unlock Text */}
      <div className="flex flex-row justify-center text-sm font-thin items-center gap-1 z-10">
        <span>Touch to unlock</span>
        {/* Lock Icon SVG */}
        <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-4 h-4 stroke-current">
          <path strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" fill="none" d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z"></path>
        </svg>
      </div>
    </motion.div>
  );
};

// --- Social Buttons Component ---

const socialLinks = {
  github: 'https://github.com/Ibrahim-cmd-dev',
  linkedin: 'https://www.linkedin.com/in/ibrahim-mohamed-184872375/',
  whatsapp: 'https://wa.me/+201004333589', 
  instagram: 'https://www.instagram.com/mazenx98/',
};

const SocialButtons = () => {
  // Animation variants for the container and buttons
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3, // Delay after unlock card exits
        when: "beforeChildren", // Animate container first
        staggerChildren: 0.15 // Stagger button animations
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="flex flex-col gap-4 items-center" // Increased gap slightly
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Row 1: GitHub and LinkedIn */}
      <div className="flex flex-row gap-4">
         {/* GitHub */}
         <motion.a
          href={socialLinks.github}
          target="_blank" rel="noopener noreferrer"
          className="w-[90px] h-[90px] outline-none border-none bg-zinc-800 rounded-[90px_5px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-slate-600 group flex items-center justify-center" // Adjusted shape
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="text-4xl text-slate-300 group-hover:text-white transition-colors" />
        </motion.a>

        {/* LinkedIn */}
         <motion.a
          href={socialLinks.linkedin}
          target="_blank" rel="noopener noreferrer"
          className="w-[90px] h-[90px] outline-none border-none bg-zinc-800 rounded-[5px_90px_5px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#0A66C2] group flex items-center justify-center" // Adjusted shape
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedinIn className="text-4xl text-[#0A66C2] group-hover:text-white transition-colors" />
        </motion.a>
      </div>

      {/* Row 2: Instagram and WhatsApp */}
      <div className="flex flex-row gap-4">
        {/* Instagram */}
        <motion.a
          href={socialLinks.instagram}
          target="_blank" rel="noopener noreferrer"
          className="w-[90px] h-[90px] outline-none border-none bg-zinc-800 rounded-[5px_5px_5px_90px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#cc39a4] group flex items-center justify-center" // Adjusted shape
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram className="text-4xl text-[#cc39a4] group-hover:text-white transition-colors" />
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href={socialLinks.whatsapp}
          target="_blank" rel="noopener noreferrer"
          className="w-[90px] h-[90px] outline-none border-none bg-zinc-800 rounded-[5px_5px_90px_5px] shadow-lg transition-all duration-200 ease-in-out hover:scale-110 hover:bg-[#25D366] group flex items-center justify-center" // Adjusted shape and hover color
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaWhatsapp className="text-4xl text-[#25D366] group-hover:text-white transition-colors" />
        </motion.a>
      </div>
    </motion.div>
  );
};


// --- Main Contact Section Component ---
const ContactSection = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <motion.section
      id="contact" // Add ID for potential navbar link
      className="flex flex-col items-center justify-center min-h-[60vh] p-6 sm:p-8 md:p-10 my-20 lg:my-32 overflow-hidden" // Ensure sufficient height and center content
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 md:mb-16 text-center">
        Get In Touch
      </h2>

      {/* AnimatePresence handles the exit animation */}
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          // Key is important for AnimatePresence to track the element
          <UnlockCard key="unlock-card" onClick={handleUnlock} />
        ) : (
          <SocialButtons key="social-buttons" />
        )}
      </AnimatePresence>

    </motion.section>
  );
};

export default ContactSection;
