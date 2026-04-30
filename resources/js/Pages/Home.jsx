import React, { useEffect, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Skills from './Skills';
import Contact from './Contact';
import Experience from "./Experience.jsx";

export default function Home({ skills = {}, technologyCategories = [] , experiences = {}}) {
  const roles = ['backend developer', 'full stack developer'];
  const [activeRole, setActiveRole] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[activeRole];
    let timeoutMs = isDeleting ? 40 : 75;

    if (!isDeleting && typedText === current) {
      timeoutMs = 1200;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText === current) {
          setIsDeleting(true);
          return;
        }
        setTypedText(current.slice(0, typedText.length + 1));
      } else {
        if (typedText.length === 0) {
          setIsDeleting(false);
          setActiveRole((prev) => (prev + 1) % roles.length);
          return;
        }
        setTypedText((prev) => prev.slice(0, -1));
      }
    }, timeoutMs);

    return () => clearTimeout(timer);
  }, [activeRole, isDeleting, typedText, roles]);

  return (
    <MainLayout
      title="Home"
      mainClassName="mx-0"
    >
      <motion.div
        id="home"
        data-nav-section
        className="min-h-[calc(100vh-8rem)] flex items-center scroll-mt-24 px-4 sm:px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-[#e3e3e0] dark:border-[#3E3E3A] px-3 py-1 text-xs tracking-wide text-gray-600 dark:text-[#A1A09A]">
            Available for work
          </span>
          <p className="mt-6 text-gray-600 dark:text-[#A1A09A] text-lg sm:text-xl font-mono">
            Hi, I&apos;m Dima Maksimuk
          </p>
          <div className="mt-3 mb-4">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              <span>I am a </span>
              {typedText}
              <span className="ml-1 inline-block w-[1ch] animate-pulse">|</span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-[#A1A09A] text-base sm:text-lg max-w-2xl">
            Freelance software engineer focused on reliable, scalable web applications.
            I help teams ship clean backend systems and practical full-stack solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-black text-white border border-black px-4 py-2 text-sm font-medium dark:bg-[#eeeeec] dark:text-[#0a0a0a] dark:border-[#eeeeec]"
            >
              Let&apos;s talk
            </a>
            <a
              href="/#experience"
              className="inline-flex items-center justify-center rounded-md bg-white dark:bg-[#161615] text-[#1b1b18] dark:text-[#EDEDEC] border border-[#e3e3e0] dark:border-[#3E3E3A] px-4 py-2 text-sm font-medium hover:border-[#1915014a]"
            >
              View experience
            </a>
          </div>
        </div>

      </motion.div>

      <Skills
        embedded
        sectionId="skills"
        skills={skills}
        technologyCategories={technologyCategories}
      />

      <Experience
        embedded
        sectionId="experience"
        experiences={experiences}
      />

      <Contact embedded sectionId="contact" />
    </MainLayout>
  );
}

