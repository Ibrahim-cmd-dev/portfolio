'use client'; // Needed for Framer Motion

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Import the card component

// Updated and rearranged project data with imageUrl
const projectsData = [
  {
    id: 1, // Maison Curtains
    title: 'Maison Curtains',
    description: 'A live e-commerce website for curtains and blinds based in the UAE created using React.',
    liveUrl: 'https://www.maisoncurtains.ae',
    imageUrl: '/maison-curtains.png', 
  },
  {
    id: 2, // E-commerce Concept
    title: 'E-commerce Concept',
    description: 'A conceptual online store interface using React and modern UI principles.',
    liveUrl: 'https://e-commerce-react-mystore.vercel.app/', // Replace with actual URL or repository if available
    imageUrl: '/e-commerce-react.png',
  },
  {
    id: 3, // E-commerce Concept
    title: 'E-commerce Next.js',
    description: 'A conceptual online store interface using Next.js.',
    liveUrl: '#', // Replace with actual URL or repository if available
    imageUrl: 'https://placehold.co/600x400/1a1a1a/f5f5f5?text=E-commerce',
  },
  {
    id: 4, // Dashboard
    title: 'Dashboard',
    description: 'A data visualization dashboard concept displaying key metrics.',
    liveUrl: '#', // Replace with actual URL or repository if available
    imageUrl: 'https://placehold.co/600x400/1a1a1a/f5f5f5?text=Dashboard',
  },
   // Add more projects here...
];

// Animation variants for the section container
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.2 } // Stagger the grid items
  }
};

// Main Projects Component
const Projects = () => {
  return (
    <motion.section
      id="projects" // Add ID for potential navbar link
      className="p-6 sm:p-8 md:p-10 my-20 lg:my-32 overflow-hidden" // Standard padding/margin
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation when section scrolls into view
      viewport={{ once: true, amount: 0.1 }} // Trigger animation once when 10% visible
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white mb-10 md:mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      {/* Grid container for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 place-items-center">
        {projectsData.map((project) => (
          // *** Pass imageUrl prop and conditional buttonText prop to ProjectCard ***
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            liveUrl={project.liveUrl}
            imageUrl={project.imageUrl}
            // *** THIS LINE IS THE KEY CHANGE ***
            // Pass "Live" only for Maison Curtains (id: 1), otherwise default "Live Demo" will be used
            buttonText={project.id === 1 ? "Live" : undefined}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
