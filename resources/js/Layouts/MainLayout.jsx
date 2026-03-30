import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Skills', href: '/skills' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Contact', href: '/contact' },
];

export default function MainLayout({ title = 'Portfolio', children }) {
  const { url } = usePage();

  return (
    <>
      <Head title={title} />

      <motion.div
        className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC] flex flex-col"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e3e3e0] dark:border-[#3E3E3A] bg-white/60 dark:bg-[#161615]/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold tracking-wide">
              My Portfolio
            </Link>

            <nav className="flex gap-2">
              {navItems.map((item) => {
                const isActive = url === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      'px-3 py-2 rounded-md text-sm border transition-colors',
                      isActive
                        ? 'bg-black text-white border-black dark:bg-[#eeeeec] dark:text-[#0a0a0a] dark:border-[#eeeeec]'
                        : 'bg-white dark:bg-[#161615] text-[#1b1b18] dark:text-[#EDEDEC] border-[#e3e3e0] dark:border-[#3E3E3A] hover:border-[#1915014a]',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>

        <div className="flex-1 max-w-4xl mx-auto px-6 py-6 pt-20">
          <main className="border rounded-md bg-white dark:bg-[#161615] p-6 border-[#e3e3e0] dark:border-[#3E3E3A]">
            {children}
          </main>
        </div>

        <footer className="border-t border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615]">
          <div className="max-w-4xl mx-auto px-6 py-4 text-sm text-gray-600 dark:text-[#A1A09A]">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </div>
        </footer>
      </motion.div>
    </>
  );
}

