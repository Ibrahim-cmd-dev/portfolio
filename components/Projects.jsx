'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Maison Curtains',
    description: 'A full-featured e-commerce platform for a UAE-based curtains and blinds brand. Built with React, featuring product browsing, responsive design, and a polished shopping experience.',
    liveUrl: 'https://www.maisoncurtains.ae',
    imageUrl: '/maison-curtains.png',
    badge: 'Live Client Site',
    tech: ['React', 'CSS', 'E-commerce'],
  },
  {
    id: 2,
    title: 'Greens Real Estate',
    description: 'A professional real estate platform showcasing property listings with detailed views, search functionality, and an elegant UI tailored for the property market.',
    liveUrl: 'https://greensrealestate.property/',
    imageUrl: '/Greens.png',
    badge: 'Live Client Site',
    tech: ['React', 'Responsive', 'Real Estate'],
  },
  {
    id: 3,
    title: 'E-commerce Store',
    description: 'A conceptual online store prototype exploring modern UI patterns, product filtering, cart management, and a clean checkout flow — built with React.',
    liveUrl: 'https://e-commerce-react-mystore.vercel.app/',
    imageUrl: '/e-commerce-react.png',
    badge: 'Prototype',
    tech: ['React', 'Vercel', 'UI/UX'],
  },
  {
    id: 4,
    title: 'Real Estate Dashboard',
    description: 'A data-driven dashboard for real estate analytics with key metrics visualization, property management views, and an intuitive dark-themed interface.',
    liveUrl: 'https://real-estate-dashboard-ebon.vercel.app/',
    imageUrl: '/Dashboard.png',
    badge: 'Prototype',
    tech: ['React', 'Dashboard', 'Data Viz'],
    credentials: { email: 'admin@realestate.com', password: 'Admin@12345' },
  },
  // Add more projects here...
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.15 }
  }
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative px-4 sm:px-8 md:px-10 py-12 sm:py-16 lg:py-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-300/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 justify-center mb-4">
          <span className="w-12 h-[1px] bg-amber-300/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber-300/70">Selected work</span>
          <span className="w-12 h-[1px] bg-amber-300/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">My Projects</h2>
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            liveUrl={project.liveUrl}
            imageUrl={project.imageUrl}
            badge={project.badge}
            tech={project.tech}
            credentials={project.credentials}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
