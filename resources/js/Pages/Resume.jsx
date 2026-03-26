import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <MainLayout title="Resume">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold mb-2">Resume</h2>
        <p className="text-gray-600 dark:text-[#A1A09A]">
          Add your resume content or download link here.
        </p>
      </motion.div>

      <motion.section
        className="border rounded-md p-4 border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="text-gray-700 dark:text-[#EDEDEC]">
          Placeholder resume section.
        </p>
      </motion.section>
    </MainLayout>
  );
}

