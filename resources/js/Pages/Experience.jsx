import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Experience({ experiences = [] }) {
  const formatMonthYear = (value) => {
    if (!value) return '';

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

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
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-600 via-red-950 to-transparent opacity-30"></div>
            <div className="flex flex-col gap-16 lg:gap-24">

              {experiences.map((experience, number) => (
                <div
                  key={experience.id}
                  className="relative"
                >
                  <div
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      transform: 'translate(0px, 0px)',
                      opacity: 1
                    }}>
                    <div className={`flex flex-col md:flex-row items-center gap-8 md:flex-row${number % 2 === 0 && '-reverse'}`}>
                      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-xl bg-[#050505] border-2 border-red-600 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-red-600 w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path>
                          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"></path>
                        </svg>
                      </div>
                      <div className="w-full md:w-1/2 flex md:justify-end">
                        <div
                          className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 text-slate-400 text-sm font-medium">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                               className="lucide lucide-calendar w-4 h-4 text-red-600">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                          {formatMonthYear(experience.start_work)} - {experience.end_work ? formatMonthYear(experience.end_work) : 'Present'}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 md:text-left">
                        <div
                          className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-red-600/50 transition-all duration-500 shadow-xl hover:shadow-red-600/10">
                          <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1"><h3 className="text-2xl font-bold text-foreground to-slate-400">
                              {experience.title}
                            </h3>
                              <div className="flex items-center gap-2 text-red-500 font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-building2 w-4 h-4">
                                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                  <path d="M10 6h4"></path>
                                  <path d="M10 10h4"></path>
                                  <path d="M10 14h4"></path>
                                  <path d="M10 18h4"></path>
                                </svg>
                                {experience.company_name}
                              </div>
                            </div>
                            <div className="space-y-3 mt-2">
                              <div className="flex gap-3 items-start group/item">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-chevron-right w-4 h-4 text-red-600 mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                <p
                                  className="text-slate-400 text-sm lg:text-base leading-relaxed group-hover/item:text-slate-200 transition-colors">
                                  {experience.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/20 via-transparent to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                      </div>

                    </div>


                  </div>
                  {/*{experience.skill?.name && (*/}
                  {/*  <p*/}
                  {/*    className="mt-2 text-xs inline-flex rounded-md border border-[#e3e3e0] dark:border-[#3E3E3A] px-2 py-1">*/}
                  {/*    Skill: {experience.skill.name}*/}
                  {/*  </p>*/}
                  {/*)}*/}
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.section>
    </MainLayout>
  );
}

