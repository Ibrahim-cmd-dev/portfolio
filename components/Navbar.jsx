import React from 'react'; // Import React

// Import the named 'styles' object from your styles file
// --- IMPORTANT: Adjust the path '@/styles/style.js' to match ---
// --- where you actually created the style.js file.        ---
import { styles } from '@/styles/style.js';


// The Navbar component
const Navbar = () => {
  return (
    // Apply the navbar styles from the imported object
    <nav className={styles.navbar}>
      {/* The <h1> title has been removed */}

      {/* Apply navList styles from the imported object */}
      <ul className={styles.navList}>
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
    </nav>
  );
};

// Export the Navbar component as the default export for this module
export default Navbar;