'use client'; // Add this directive at the top

import React from 'react';
import { motion } from 'framer-motion'; // Import motion

// Import the EnvelopeCard component from its separate file
import EnvelopeCard from './EnvelopeCard';


// Main Hero Component (Now imports and uses EnvelopeCard)
const Hero = () => {

  // Animation variants for the container of the left column text
  const leftContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time between each main block animation starts
        delayChildren: 0.3,
      }
    }
  };

  // Variants for the H1 container to stagger each character
  const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Time between each character animation
        delayChildren: 0.4, // Delay after the left container starts
      }
    }
  };

  // Variants for each character in the H1
  const characterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  // Simpler slide-up + fade-in for other text items (h2, p, button)
  // Also used for the right column now
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  // *** REMOVED rightContainerVariants as we'll reuse itemVariants ***
  // const rightContainerVariants = { ... };

  // Text content for the H1 to easily map over it
  const name = "Ibrahim Mohamed";


  return (
    // Section container
    // Adjusted padding and top margin for different screen sizes
    // *** REMOVED overflow-hidden ***
    <section className='flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 mt-24 sm:mt-32 md:mt-48 items-center'>

      {/* Left Column: Text Content */}
      {/* Apply overall stagger container */}
      <motion.div
        className='w-full lg:w-3/5 flex flex-col gap-4 text-center lg:text-left'
        variants={leftContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* H1 - Name with character animation */}
        {/* Adjusted font size for different screen sizes */}
        <motion.h1
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight' // Added leading-tight for better line spacing
          variants={nameContainerVariants} // Use name container variants here
          aria-label={name} // Add aria-label for accessibility
        >
          {/* Map over each character */}
          {name.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={characterVariants} // Each character uses these variants
              className="inline-block" // Needed for transform animations
              style={{ paddingRight: char === ' ' ? '0.25em' : '0' }} // Add space for space character
            >
              {char === ' ' ? '\u00A0' : char} {/* Render non-breaking space for spaces */}
            </motion.span>
          ))}
        </motion.h1>

        {/* H2 - Subtitle with simpler item animation */}
        {/* Adjusted font size for different screen sizes */}
        <motion.h2
          className='text-xl sm:text-2xl md:text-3xl font-semibold text-amber-300'
          variants={itemVariants} // Use simpler item variants
        >
          Frontend Developer {/* Or your specific title */}
        </motion.h2>

        {/* P - Paragraph with simpler item animation */}
        {/* Adjusted font size for different screen sizes */}
        <motion.p
          className='text-sm sm:text-base md:text-lg text-slate-300 mt-4'
          variants={itemVariants} // Use simpler item variants
        >
          Passionate about creating interactive and user-friendly web experiences. Turning ideas into reality with modern web technologies.
        </motion.p>

        {/* Button container with simpler item animation */}
        {/* Adjusted top margin for smaller screens */}
        <motion.div className='mt-6 md:mt-8' variants={itemVariants}>
           <a
             href="#projects"
             // Adjusted padding/text size slightly for smaller screens
             className='inline-block bg-amber-300 text-zinc-900 hover:bg-amber-200 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors duration-300 font-semibold tracking-wide shadow-md hover:shadow-lg text-sm sm:text-base'
           >
             View My Work
           </a>
        </motion.div>
      </motion.div>

      {/* Right Column: Envelope Card Component */}
      {/* Wrap with motion.div and apply variants */}
      {/* Adjusted top margin for smaller screens */}
      {/* *** UPDATED: Using itemVariants and added delay *** */}
      <motion.div
        className='w-full lg:w-2/5 flex justify-center items-center mt-12 lg:mt-0' // Increased mobile top margin slightly
        variants={itemVariants} // Use the same slide-up/fade-in as other items
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }} // Add delay to stagger after left column
      >
        <EnvelopeCard />
      </motion.div>

    </section>
  );
};

export default Hero;
