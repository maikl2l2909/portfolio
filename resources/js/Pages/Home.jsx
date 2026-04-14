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
    <MainLayout
      title="Home"
      mainClassName="mx-6"
    >
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <p className="text-gray-600 animate-fade-in-up text-xl sm:text-2xl text-muted-foreground mb-4 font-mono">Hello, I'm Dima Maksimuk</p>
        <h2 className="text-3xl font-semibold mb-2">Home</h2>
        <p className="text-gray-600 dark:text-[#A1A09A]">
          Welcome! This is the Home page powered by Inertia + React.
        </p>
      </motion.div>
    </MainLayout>
  );
}

