'use client'; // Needed for useState, useEffect

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi'; // Using Feather Icons for the arrow

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll position
  const toggleVisibility = () => {
    // Show button if page is scrolled down more than, say, 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', toggleVisibility);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <AnimatePresence>
      {isVisible && ( // Only render the button if isVisible is true
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-amber-300 text-zinc-900 shadow-lg hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors duration-200"
          aria-label="Scroll to top"
          // Animation properties
          initial={{ opacity: 0, y: 20 }} // Start invisible and slightly down
          animate={{ opacity: 1, y: 0 }} // Fade in and slide up
          exit={{ opacity: 0, y: 20 }} // Fade out and slide down
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
