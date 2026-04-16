import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Experience({ experiences = [] }) {
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
        {experiences.length === 0 ? (
          <p className="text-gray-700 dark:text-[#A1A09A]">
            No experience records yet. Add some in the database to show your timeline.
          </p>
        ) : (
          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="rounded-md border border-[#e3e3e0] dark:border-[#3E3E3A] p-4"
              >
                <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-[#A1A09A]">
                      {experience.company_name}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-[#A1A09A]">
                    {experience.start_work} - {experience.end_work ?? 'Present'}
                  </div>
                </header>
                {experience.description && (
                  <p className="text-gray-700 dark:text-[#EDEDEC]">{experience.description}</p>
                )}
                {experience.skill?.name && (
                  <p className="mt-2 text-xs inline-flex rounded-md border border-[#e3e3e0] dark:border-[#3E3E3A] px-2 py-1">
                    Skill: {experience.skill.name}
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </motion.section>
    </MainLayout>
  );
}

