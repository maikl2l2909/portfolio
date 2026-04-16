import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import CanvasParticles from 'canvasparticles-js';
import Skills from './Skills';
import Expertise from './Expertise';
import Contact from './Contact';

export default function Home({ skills = {}, technologyCategories = [] }) {
  const roles = ['backend developer', 'full stack developer'];
  const [activeRole, setActiveRole] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const particlesRef = useRef(null);

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

  useEffect(() => {
    particlesRef.current = new CanvasParticles('#home-particles', {
      background: 'rgb(253, 253, 252)',
      particles: {
        color: 'hsl(206, 100%, 77%)',
      },
    }).start();

    return () => {
      if (particlesRef.current) {
        particlesRef.current.stop({ clear: true });
        particlesRef.current = null;
      }
    };
  }, []);

  return (
    <MainLayout
      title="Home"
      mainClassName="mx-0 relative overflow-hidden mx-0"
    >
      <canvas
        id="home-particles"
        className="absolute top-0 left-0 right-0 h-[calc(100vh-4rem)] w-full pointer-events-none border-b-1"
      />
      <motion.div
        id="home"
        data-nav-section
        className="min-h-[calc(100vh-8rem)] flex items-center relative z-10 scroll-mt-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="ml-4">
          <p className="text-gray-600 dark:text-[#A1A09A] text-2xl sm:text-2xl font-mono">
            Hello, I&apos;m Dima Maksimuk
          </p>
          <div className="h-11 mt-2 mb-2">
            <h2 className="text-3xl font-semibold">
              <span>I am a </span>
              {typedText}
              <span className="ml-1 inline-block w-[1ch] animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-[#A1A09A]">
            Building clean and efficient digital experiences..
          </p>
        </div>

      </motion.div>

      <Skills
        embedded
        sectionId="skills"
        skills={skills}
        technologyCategories={technologyCategories}
      />

      <Expertise
        embedded
        sectionId="expertise"
        skills={skills}
      />

      <Contact embedded sectionId="contact" />
    </MainLayout>
  );
}

