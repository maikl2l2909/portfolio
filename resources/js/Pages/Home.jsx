import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

function getSkillName(skill) {
  if (!skill || typeof skill !== 'object') return String(skill ?? '');
  return skill.name ?? skill.title ?? skill.label ?? skill.id ?? '';
}

function getSkillLevel(skill) {
  if (!skill || typeof skill !== 'object') return '';
  return skill.level ?? skill.value ?? '';
}

export default function Home({ skills = [] }) {
  const list = Array.isArray(skills) ? skills : [];

  return (
    <MainLayout title="Home">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold mb-2">Home</h2>
        <p className="text-gray-600 dark:text-[#A1A09A]">
          Welcome! This is the Home page powered by Inertia + React.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <h3 className="text-xl font-semibold mb-3">Skills</h3>
        {list.length === 0 ? (
          <p className="text-gray-600 dark:text-[#A1A09A]">
            No skills available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {list.map((skill, idx) => {
              const name = getSkillName(skill);
              const level = getSkillLevel(skill);

              return (
                <motion.div
                  key={skill?.id ?? idx}
                  className="border border-[#e3e3e0] dark:border-[#3E3E3A] rounded-md p-3 bg-white dark:bg-[#161615]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                  <div className="font-medium leading-normal">{name}</div>
                  {level !== '' && (
                    <div className="mt-1 text-sm text-gray-600 dark:text-[#A1A09A]">
                      {level}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.section>
    </MainLayout>
  );
}

