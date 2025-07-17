'use client'; // Needed for Framer Motion animations

import React, { useEffect, useRef } from 'react'; // Added useEffect, useRef
import { motion, useInView, useAnimation, animate } from 'framer-motion'; // Added useInView, useAnimation, animate
import TechCarousel from './TechCarousel'; // *** IMPORT THE CAROUSEL ***

// Skill data including name, percentage, or status
const skills = [
  { name: 'HTML', value: 85 },
  { name: 'CSS', value: 60 },
  { name: 'JavaScript', value: 75 },
  { name: 'React', value: 75 },
  { name: 'MySQL', value: 70 },
  { name: 'PHP', value: 50 }, // Representing 'in progress'
  { name: 'Laravel', value: 1 }, // Representing 'in progress'
];

// Animation variants for the main container (staggers children)
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.3 } // Stagger About block and the row below
  }
};

// Animation variants for the About Me text block
const aboutTextVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

// Animation variants for the container holding Skills + Carousel
const bottomRowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } } // Stagger Skills card and Carousel
};


// Animation variants for the Skills card block
const skillsCardVariants = {
  // *** Simplified: Removed skewY ***
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Animation variants for the Carousel block
const carouselVariants = {
   // *** Simplified: Removed rotate ***
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 100, damping: 10 } // Spring effect
  }
};


// Animation variants for staggering skill items inside the card
const skillListVariants = {
    hidden: { }, // No specific hidden state needed for container
    visible: { transition: { staggerChildren: 0.1 } } // Just stagger children
};

const skillItemVariants = {
    hidden: { opacity: 0, x: -30 }, // Start further left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// Component to animate the percentage number
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% visible

  useEffect(() => {
    if (isInView && ref.current) {
      // Animate from 0 to the target value
      animate(0, value, {
        duration: 1, // Duration of the count animation
        ease: "easeOut",
        onUpdate(latest) {
          // Update the text content of the span
          if (ref.current) {
            ref.current.textContent = Math.round(latest);
          }
        }
      });
    }
  }, [isInView, value]); // Rerun effect if value changes or it comes into view

  // Set initial text content to 0, otherwise it might briefly show the final value
  useEffect(() => {
      if (ref.current) {
          ref.current.textContent = '0';
      }
  }, []);


  return <span ref={ref}>0</span>; // Initial display is 0
};


// Component for individual skill progress bar
const SkillItem = ({ name, value }) => {
  const isInProgress = value <= 20; // Example threshold for 'in progress' styling
  const controls = useAnimation(); // Animation controls for the bar
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 }); // Trigger when 80% visible

  useEffect(() => {
    if (isInView) {
      // Start the bar animation when in view
      controls.start({
        width: `${value}%`,
        transition: { duration: 1, ease: 'easeOut', delay: 0.2 } // Add slight delay after number starts
      });
    }
  }, [isInView, value, controls]);


  return (
    // Apply itemVariants to each skill for staggered animation within the list
    <motion.div className="mb-4" variants={skillItemVariants} ref={ref}>
      <div className="flex justify-between mb-1">
        <span className={`text-base font-medium ${isInProgress ? 'text-amber-500' : 'text-amber-300'}`}>{name}</span>
        {/* Use AnimatedCounter for the percentage */}
        <span className="text-sm font-medium text-slate-300">
            <AnimatedCounter value={value} />%
        </span>
      </div>
      <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-zinc-700 overflow-hidden">
        {/* Animated progress bar using animation controls */}
        <motion.div
           // Apply different background style for 'in progress' skills
          className={`h-2.5 rounded-full ${isInProgress ? 'bg-amber-500/60' : 'bg-amber-300'}`}
          initial={{ width: '0%' }} // Start at 0 width
          animate={controls} // Use animation controls
        ></motion.div>
      </div>
    </motion.div>
  );
};


// Main About Me Component - About Card + Row Below
const AboutMe = () => {
  return (
    // Section container - Centered, single column overall structure
    // *** Removed overflow-hidden ***
    <motion.section
      id="about" // Add ID for potential navbar link
      className="flex flex-col items-center gap-16 md:gap-20 p-6 sm:p-8 md:p-10 my-20 lg:my-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when section scrolls into view
      viewport={{ once: true, amount: 0.1 }} // Trigger earlier
    >

      {/* About Me Text Block */}
      {/* Stays centered at the top */}
      <motion.div
        className="w-full max-w-3xl bg-zinc-800 p-6 sm:p-8 rounded-xl shadow-lg shadow-black/40" // Max width for readability
        variants={aboutTextVariants} // Use specific variants
        whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }} // Subtle hover
      >
        <div className="text-center"> {/* Centered heading and text block */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 border-b-2 border-amber-300 pb-2 inline-block mx-auto">
              About Me
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Hello! I'm Ibrahim, a passionate <strong className="text-amber-300 font-medium">Frontend Developer</strong> based in Egypt.
              I enjoy building interactive and engaging user interfaces that solve real-world problems.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-3">
              Currently, I'm expanding my skill set and diving into the world of backend development, focusing on technologies like PHP and Laravel to become a more well-rounded developer. I'm always eager to learn and embrace new challenges.
            </p>
        </div>
      </motion.div>

      {/* Container for Skills and Carousel (Side-by-Side) */}
      {/* This container will be centered below the About Me card */}
      <motion.div
        className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-center justify-center gap-10 md:gap-12 lg:gap-16" // Changed md:items-start to md:items-center
        variants={bottomRowVariants} // Use variants to stagger children inside
      >
          {/* *** Skills Card Container (ON THE LEFT) *** */}
          <motion.div
            className="w-full md:w-1/2 lg:max-w-lg bg-zinc-800 p-6 sm:p-8 rounded-xl shadow-lg shadow-black/40" // Adjusted width slightly
            variants={skillsCardVariants} // Use specific variants (now simplified)
            whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3 } }} // Subtle hover
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center md:text-left">Tech Stack</h3>
            {/* Container for skills list to apply stagger animation */}
            <motion.div variants={skillListVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              {skills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} value={skill.value} />
              ))}
            </motion.div>
          </motion.div>

           {/* *** Tech Carousel Container (ON THE RIGHT) *** */}
           {/* Removed flex-grow, using width and centering */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center" // Removed md:pt-10, ensure centering
            variants={carouselVariants} // Use specific variants (now simplified)
          >
              <TechCarousel />
          </motion.div>
      </motion.div>

    </motion.section>
  );
};

export default AboutMe;
