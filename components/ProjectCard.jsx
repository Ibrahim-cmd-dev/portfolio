'use client'; // Needed if using Framer Motion or client-side hooks later

import React from 'react';
import { motion } from 'framer-motion'; // Import motion for potential hover/entrance animations
import { FiExternalLink } from 'react-icons/fi'; // Example icon for Live button

// Animation variants for card entrance (optional)
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Updated component to accept imageUrl, buttonText, and titleColor props
const ProjectCard = ({
    title,
    description,
    liveUrl,
    imageUrl,
    buttonText = "Live Demo",
    titleColor = "text-white" // Added titleColor prop with default
}) => {
  return (
    // Use motion.div if applying entrance animations to each card
    <motion.div variants={cardVariants}>
      {/* Outer container with dashed border effect */}
      <a
        href={liveUrl || '#'} // Use liveUrl prop, fallback to '#'
        target="_blank" // Open link in new tab
        rel="noopener noreferrer" // Security best practice for target="_blank"
        className="group relative block w-full max-w-xs sm:max-w-sm mx-auto h-64 sm:h-72 lg:h-80" // Adjusted height slightly
      >
        {/* Dashed border background */}
        <span className="absolute inset-0 border-2 border-dashed border-amber-400/50 rounded-lg"></span>

        {/* Main card content container */}
        <div
          className="relative flex h-full transform items-end border-2 border-zinc-700 bg-zinc-800 transition-transform group-hover:scale-105 rounded-lg overflow-hidden" // Theme colors, added rounded-lg, overflow-hidden
        >
          {/* --- Content visible initially (NOW INCLUDES IMAGE) --- */}
          <div
            // Make this div cover the card and position absolutely
            // The group-hover properties will hide it on hover
            className="absolute inset-0 transition-opacity group-hover:opacity-0"
          >
             {/* Image container */}
             <div className="h-full w-full">
                <img
                    alt={title || "Project image"}
                    // Use imageUrl prop, provide a fallback placeholder
                    src={imageUrl || `https://placehold.co/400x300/27272a/f5f5f5?text=${title || 'Project'}`}
                    // Style the image to cover the area
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    // Add basic error handling for broken images
                    onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x300/27272a/f5f5f5?text=Error`; }}
                />
             </div>
             {/* Overlay for Title (optional, provides better contrast) */}
             <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
                 {/* Apply titleColor prop here */}
                <h2 className={`text-lg font-medium sm:text-xl drop-shadow-md ${titleColor}`}>
                    {title || 'Project Title'} {/* Use title prop */}
                </h2>
             </div>
          </div>


          {/* --- Content visible on hover --- */}
          <div
            // This content is now positioned relative but hidden until hover
            className="relative w-full h-full flex flex-col justify-end p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 bg-zinc-800/90 backdrop-blur-sm" // Added background for readability on hover
          >
            {/* Apply titleColor prop here */}
            <h3 className={`mt-4 text-xl font-medium sm:text-2xl ${titleColor}`}>
              {title || 'Project Title'} {/* Use title prop */}
            </h3>

            <p className="mt-2 text-sm text-slate-300 sm:text-base flex-grow"> {/* Added flex-grow */}
              {description || 'Project description goes here...'} {/* Use description prop */}
            </p>

            {/* "Live" button */}
            <div className="mt-4"> {/* Adjusted margin */}
                 {/* Use the buttonText prop here */}
                <span className="inline-flex items-center gap-2 rounded-md bg-amber-300 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-amber-200">
                   {buttonText}
                   <FiExternalLink className="h-4 w-4" /> {/* Example icon */}
                </span>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
