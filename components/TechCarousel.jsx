'use client';

import React from 'react';
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
  const count = technologies.length;
  const duration = 20; // seconds for one full rotation

  return (
    <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto flex items-center justify-center mb-4 sm:mb-8">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg); }
        }
        .orbit-icon {
          position: absolute;
          animation: orbit ${duration}s linear infinite;
          animation-delay: var(--orbit-delay);
          will-change: transform;
        }
      `}</style>

      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className="orbit-icon"
          style={{
            '--orbit-r': 'clamp(58px, 11vw, 100px)',
            '--orbit-delay': `${-(index / count) * duration}s`,
          }}
          title={tech.name}
        >
          <div className="w-7 h-7 sm:w-10 sm:h-10 bg-zinc-700 rounded-full flex items-center justify-center shadow-md p-1.5">
            <tech.Icon className="w-full h-full" style={{ color: tech.color }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechCarousel;
