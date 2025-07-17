"use client";

import React, { useState } from 'react'; 


import { styles } from '@/styles/style.js';


// The Navbar component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Apply the navbar styles with flex justify-between for left/right layout
    <nav className={`${styles.navbar.replace('justify-center', 'justify-between')} relative`}>
      {/* Portfolio title on the left */}
      <div className="text-amber-300 font-bold text-lg tracking-wide">
        My Portfolio
      </div>

      {/* Hamburger menu button - only visible on mobile, positioned on the right */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-amber-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-amber-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-amber-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop navigation - hidden on mobile */}
      <ul className={`${styles.navList} hidden md:flex`}>
        {/* Each list item contains a link styled as a button */}
        <li>
          <a href="#about" className={styles.navLink}>About</a>
        </li>
        <li>
          <a href="#projects" className={styles.navLink}>Projects</a>
        </li>
        <li>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </li>
      </ul>

      {/* Mobile navigation menu - slides down when open */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-800 shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col py-4">
          <li>
            <a 
              href="#about" 
              className={`${styles.navLink} block text-center mx-4 my-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={`${styles.navLink} block text-center mx-4 my-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`${styles.navLink} block text-center mx-4 my-2`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Export the Navbar component as the default export for this module
export default Navbar;