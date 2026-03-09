'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiKey, FiCopy, FiCheck } from 'react-icons/fi';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const ProjectCard = ({
  title,
  description,
  liveUrl,
  imageUrl,
  badge,
  tech = [],
  credentials,
}) => {
  const isLive = badge === 'Live Client Site';
  const [showCreds, setShowCreds] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  return (
    <motion.div variants={cardVariants} className="h-full">
      <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-800/60 backdrop-blur-sm transition-all duration-500 hover:border-amber-300/30 hover:shadow-xl hover:shadow-amber-300/5 glow-border">
        {/* Clickable card link */}
        <a
          href={liveUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col flex-1"
        >
          {/* Image area */}
          <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden shrink-0">
            <img
              alt={title || "Project"}
              src={imageUrl || `https://placehold.co/600x400/27272a/f5f5f5?text=${title || 'Project'}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/27272a/fbbf24?text=Error`; }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

            {/* Badge */}
            {badge && (
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                  isLive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-amber-300/20 text-amber-300 border border-amber-300/30'
                }`}>
                  {isLive && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  )}
                  {badge}
                </span>
              </div>
            )}

            {/* External link icon on hover */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-300 text-zinc-900 shadow-lg">
                <FiExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Content area */}
          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
              {description}
            </p>

            {/* Tech tags */}
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-700/50 text-slate-300 border border-zinc-600/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>

        {/* Credentials button — outside the <a> so it doesn't navigate */}
        {credentials && (
          <div className="relative px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCreds(!showCreds);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-700/60 text-amber-300 border border-amber-300/20 hover:border-amber-300/40 hover:bg-zinc-700 transition-all duration-300 cursor-pointer"
            >
              <FiKey className="w-3.5 h-3.5" />
              {showCreds ? 'Hide Credentials' : 'Demo Credentials'}
            </button>

            {/* Credentials popup */}
            <AnimatePresence>
              {showCreds && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 sm:left-6 mb-2 w-[calc(100%-1rem)] sm:w-64 mx-2 sm:mx-0 p-3 sm:p-4 rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl shadow-black/50 z-30"
                >
                  {/* Arrow */}
                  <div className="absolute -bottom-1.5 left-6 w-3 h-3 rotate-45 bg-zinc-900 border-r border-b border-zinc-700" />

                  <p className="text-xs text-slate-400 mb-3 font-medium">Login to explore the dashboard:</p>

                  {/* Email */}
                  <div className="mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Email</span>
                    <div className="flex items-center justify-between mt-1 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700/50">
                      <span className="text-xs sm:text-sm text-slate-200 font-mono truncate">{credentials.email}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleCopy(credentials.email, 'email'); }}
                        className="ml-2 text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
                        aria-label="Copy email"
                      >
                        {copiedField === 'email' ? <FiCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FiCopy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Password</span>
                    <div className="flex items-center justify-between mt-1 px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700/50">
                      <span className="text-sm text-slate-200 font-mono">{credentials.password}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleCopy(credentials.password, 'password'); }}
                        className="ml-2 text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
                        aria-label="Copy password"
                      >
                        {copiedField === 'password' ? <FiCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FiCopy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
