'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EnvelopeCard from './EnvelopeCard';

const Hero = () => {
  const leftContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.4 }
    }
  };

  const characterVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(4px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const name = "Ibrahim Mohamed";

  return (
    <section className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 px-4 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-36 pb-8 items-center overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Left Column */}
      <motion.div
        className="w-full lg:w-3/5 flex flex-col gap-5 text-center lg:text-left z-10"
        variants={leftContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtle tag above name */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start">
          <span className="w-8 h-[2px] bg-amber-300 rounded-full" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber-300/80">
            Frontend Developer
          </span>
          <span className="w-8 h-[2px] bg-amber-300 rounded-full" />
        </motion.div>

        {/* Animated gradient name */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          variants={nameContainerVariants}
          aria-label={name}
        >
          {name.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={characterVariants}
              className="inline-block animate-gradient-text"
              style={{ paddingRight: char === ' ' ? '0.2em' : '0' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle with shimmer line */}
        <motion.div variants={itemVariants} className="space-y-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
            Building <span className="text-amber-300">Digital Experiences</span>
          </h2>
          <div className="h-[1px] w-32 mx-auto lg:mx-0 bg-gradient-to-r from-amber-300/60 via-amber-300/20 to-transparent" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-slate-400 mt-2 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          variants={itemVariants}
        >
          Crafting interactive, pixel-perfect web experiences with modern technologies.
          Passionate about turning creative ideas into seamless digital products.
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="mt-6 md:mt-8 flex gap-4 justify-center lg:justify-start flex-wrap" variants={itemVariants}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-amber-300 text-zinc-900 hover:bg-amber-200 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 font-semibold tracking-wide shadow-lg hover:shadow-amber-300/30 hover:scale-105 text-sm sm:text-base"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-amber-300/30 text-amber-300 hover:border-amber-300 hover:bg-amber-300/5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-300 font-semibold tracking-wide text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Right Column: Envelope Card */}
      <motion.div
        className="w-full lg:w-2/5 flex justify-center items-center mt-6 sm:mt-8 lg:mt-0 z-10"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
      >
        <EnvelopeCard />
      </motion.div>
    </section>
  );
};

export default Hero;
