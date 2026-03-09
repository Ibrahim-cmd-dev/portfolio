// components/TechCarousel.jsx (or your chosen path)
'use client';

import React, { useState, useEffect, useRef } from 'react'; // Added useState
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaLaravel, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFramer, SiPostman } from 'react-icons/si';

const technologies = [
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', Icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
  { name: 'PHP', Icon: FaPhp, color: '#777BB4' },
  { name: 'Laravel', Icon: FaLaravel, color: '#FF2D20' },
  { name: 'MySQL', Icon: FaDatabase, color: '#4479A1' },
  { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
];

const TechCarousel = () => {
  const [angle, setAngle] = useState(0);
  const [hasMounted, setHasMounted] = useState(false); // State to track client mount
  const requestRef = useRef();

  const [radius, setRadius] = useState(100);
  const iconSize = 'w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12';

  // Set hasMounted to true only on the client after initial render
  useEffect(() => {
    setHasMounted(true);
    const updateRadius = () => {
      const w = window.innerWidth;
      setRadius(w < 400 ? 65 : w < 640 ? 80 : 100);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // Animation loop
  const animateCarousel = () => {
    setAngle((prevAngle) => (prevAngle + 0.2) % 360);
    requestRef.current = requestAnimationFrame(animateCarousel);
  };

  useEffect(() => {
    // Start animation only after mounting
    if (hasMounted) {
        requestRef.current = requestAnimationFrame(animateCarousel);
        return () => cancelAnimationFrame(requestRef.current); // Cleanup on unmount
    }
  }, [hasMounted]); // Depend on hasMounted

  return (
    <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto flex items-center justify-center mb-4 sm:mb-8">
      {/* Only render icons after mounting on the client */}
      {hasMounted && technologies.map((tech, index) => {
        const itemAngle = (360 / technologies.length) * index + angle;
        const x = radius * Math.cos((itemAngle * Math.PI) / 180);
        const y = radius * Math.sin((itemAngle * Math.PI) / 180);

        return (
          <motion.div
            key={tech.name}
            className={`absolute flex items-center justify-center p-2 bg-zinc-700 rounded-full shadow-md ${iconSize}`}
            style={{
              // Use transform directly for potentially better performance with motion
              // Framer motion handles vendor prefixes if needed
              transform: `translateX(${x}px) translateY(${y}px)`,
            }}
            // Animate position using Framer Motion's x/y props if preferred,
            // but direct transform might be okay here since angle updates frequently.
            // initial={{ x: 0, y: 0 }} // Example if using x/y props
            // animate={{ x: x, y: y }}
            // transition={{ duration: 0.1, ease: "linear"}} // Short transition if using x/y props
            title={tech.name}
          >
            <tech.Icon className="w-full h-full" style={{ color: tech.color }} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechCarousel;