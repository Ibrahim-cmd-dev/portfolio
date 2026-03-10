'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';
import TechCarousel from './TechCarousel';

const skills = [
  { name: 'HTML', value: 85 },
  { name: 'CSS', value: 60 },
  { name: 'JavaScript', value: 75 },
  { name: 'React', value: 75 },
  { name: 'MySQL', value: 70 },
];

const learningSkills = [
  { name: 'PHP', status: 'In Progress' },
  { name: 'Laravel', status: 'Getting Started' },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.3 }
  }
};

const aboutTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const bottomRowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const skillsCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const carouselVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.7, type: "spring", stiffness: 100, damping: 10 }
  }
};

const skillListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, value, {
        duration: 1,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) ref.current.textContent = Math.round(latest);
        }
      });
    }
  }, [isInView, value]);

  useEffect(() => {
    if (ref.current) ref.current.textContent = '0';
  }, []);

  return <span ref={ref}>0</span>;
};

const SkillItem = ({ name, value }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 1, ease: 'easeOut', delay: 0.2 }
      });
    }
  }, [isInView, value, controls]);

  return (
    <motion.div className="mb-4" variants={skillItemVariants} ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-amber-300">{name}</span>
        <span className="text-sm font-medium text-slate-400">
          <AnimatedCounter value={value} />%
        </span>
      </div>
      <div className="w-full bg-zinc-700/50 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-300"
          initial={{ width: '0%' }}
          animate={controls}
        />
      </div>
    </motion.div>
  );
};

const LearningBadge = ({ name, status }) => (
  <motion.div
    variants={skillItemVariants}
    className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-zinc-700/30 border border-zinc-700/50"
  >
    <span className="text-sm font-medium text-amber-300/80">{name}</span>
    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-300/10 text-amber-300 border border-amber-300/20">
      {status}
    </span>
  </motion.div>
);

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="relative flex flex-col items-center gap-8 md:gap-14 px-4 sm:px-8 md:px-10 py-12 sm:py-16 lg:py-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Ambient glow — hidden on mobile to prevent GPU overload */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-300/5 rounded-full blur-[200px] pointer-events-none hidden lg:block" />

      {/* Section header */}
      <motion.div variants={aboutTextVariants} className="text-center z-10">
        <div className="flex items-center gap-3 justify-center mb-4">
          <span className="w-12 h-[1px] bg-amber-300/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-amber-300/70">Get to know me</span>
          <span className="w-12 h-[1px] bg-amber-300/40" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
      </motion.div>

      {/* About Me Text Block */}
      <motion.div
        className="w-full max-w-3xl bg-zinc-800/80 p-6 sm:p-8 rounded-2xl border border-zinc-700/50 glow-border z-10"
        variants={aboutTextVariants}
      >
        <div className="text-center space-y-4">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hello! I'm Ibrahim, a passionate <strong className="text-amber-300 font-medium">Frontend Developer</strong> based in Egypt.
            I build interactive and engaging user interfaces that solve real-world problems — from
            live e-commerce platforms to real estate websites for clients across the region.
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Currently expanding into backend development with PHP and Laravel to become a
            full-stack developer. Always eager to learn and embrace new challenges.
          </p>
        </div>
      </motion.div>

      {/* Skills + Carousel row */}
      <motion.div
        className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-center justify-center gap-8 md:gap-12 lg:gap-16 z-10"
        variants={bottomRowVariants}
      >
        {/* Skills Card */}
        <motion.div
          className="w-full md:w-1/2 lg:max-w-lg bg-zinc-800/80 p-6 sm:p-8 rounded-2xl border border-zinc-700/50 glow-border"
          variants={skillsCardVariants}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center md:text-left">
            Tech Stack
          </h3>
          <motion.div variants={skillListVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {skills.map((skill) => (
              <SkillItem key={skill.name} name={skill.name} value={skill.value} />
            ))}
          </motion.div>

          {/* Learning section */}
          <div className="mt-6 pt-4 border-t border-zinc-700/50">
            <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">Currently Learning</h4>
            <motion.div className="space-y-2" variants={skillListVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              {learningSkills.map((skill) => (
                <LearningBadge key={skill.name} name={skill.name} status={skill.status} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Carousel */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center"
          variants={carouselVariants}
        >
          <TechCarousel />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
