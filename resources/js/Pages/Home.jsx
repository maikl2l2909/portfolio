import React, { useEffect, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Home({ skills = [] }) {
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
      mainClassName="mx-6"
    >
      <motion.div
        className="min-h-[calc(100vh-8rem)] flex items-center"
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
    </MainLayout>
  );
}

