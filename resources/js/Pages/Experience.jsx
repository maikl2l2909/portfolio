import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <MainLayout title="Experience">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold mb-2">Experience</h2>
        <p className="text-gray-600 dark:text-[#A1A09A]">
          Add your professional experience timeline here.
        </p>
      </motion.div>

      <motion.section
        className="border rounded-md p-4 border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <p className="text-gray-700">
          Placeholder content. You can replace this with your own data later.
        </p>
      </motion.section>
    </MainLayout>
  );
}

