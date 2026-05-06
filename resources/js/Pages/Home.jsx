import React, { useEffect, useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';
import Skills from './Skills';
import Contact from './Contact';
import Experience from "./Experience.jsx";
import { useLanguage } from '../i18n';

export default function Home({ skills = {}, technologyCategories = [] , experiences = {}}) {
  const { t } = useLanguage();
  const roles = t('home.roles');
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
      title={t('home.title')}
      mainClassName="mx-0"
    >
      <motion.div
        id="home"
        data-nav-section
        className="min-h-[calc(100vh-8rem)] flex items-center scroll-mt-24"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-[#e3e3e0] dark:border-[#3E3E3A] px-3 py-1 text-xs tracking-wide text-gray-600 dark:text-[#A1A09A]">
                {t('home.availableForWork')}
              </span>
              <p className="mt-6 text-gray-600 dark:text-[#A1A09A] text-lg sm:text-xl font-mono">
                {t('home.intro')}
              </p>
              <div className="mt-3 mb-4">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
                  <span>{t('home.iam')} </span>
                  {typedText}
                  <span className="ml-1 inline-block w-[1ch] animate-pulse">|</span>
                </h1>
              </div>
              <p className="text-gray-600 dark:text-[#A1A09A] text-base sm:text-lg max-w-2xl">
                {t('home.description')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-md bg-black text-white border border-black px-4 py-2 text-sm font-medium dark:bg-[#eeeeec] dark:text-[#0a0a0a] dark:border-[#eeeeec]"
                >
                  {t('home.ctaTalk')}
                </a>
                <a
                  href="/resume/download"
                  className="inline-flex items-center justify-center rounded-md bg-white dark:bg-[#161615] text-[#1b1b18] dark:text-[#EDEDEC] border border-[#e3e3e0] dark:border-[#3E3E3A] px-4 py-2 text-sm font-medium hover:border-[#1915014a]"
                >
                  {t('home.ctaResume')}
                </a>
              </div>
            </div>
            <img
              src="/storage/photo.jpg"
              alt="Profile photo"
              className="self-end sm:self-start h-28 w-28 sm:h-56 sm:w-56 rounded-full object-cover border-2 border-white dark:border-[#1f1f1d] shadow-[0_16px_36px_rgba(0,0,0,0.28)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.55)] shrink-0"
            />
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

