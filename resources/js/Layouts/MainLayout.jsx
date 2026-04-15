import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', section: 'home', href: '/#home' },
  { label: 'Skills', section: 'skills', href: '/#skills' },
  { label: 'Expertise', section: 'expertise', href: '/#expertise' },
  { label: 'Contact', section: 'contact', href: '/#contact' },
];

const defaultMainClassName =
  'border rounded-md bg-white dark:bg-[#161615] p-6 border-[#e3e3e0] dark:border-[#3E3E3A]';

export default function MainLayout({ title = 'Portfolio', children, className, mainClassName }) {
  const { url } = usePage();
  const pathname = (url ?? '/').split(/[?#]/)[0] || '/';
  const [activeSection, setActiveSection] = React.useState('home');

  React.useEffect(() => {
    if (pathname !== '/') return;

    const sections = Array.from(document.querySelectorAll('[data-nav-section]'));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current?.target?.id) {
          setActiveSection(current.target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: '-110px 0px -45% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <Head title={title} />

      <div className="min-h-screen bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC] flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e3e3e0] dark:border-[#3E3E3A] bg-white/60 dark:bg-[#161615]/80 backdrop-blur-md shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold tracking-wide shrink-0">
              My Portfolio
            </Link>

            <nav className="flex flex-nowrap items-center justify-end gap-2 shrink-0">
              {navItems.map((item) => {
                const isActive = pathname === '/' ? activeSection === item.section : false;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={[
                      'inline-flex items-center justify-center px-3 py-2 rounded-md text-sm border transition-colors whitespace-nowrap',
                      isActive
                        ? 'bg-black text-white border-black dark:bg-[#eeeeec] dark:text-[#0a0a0a] dark:border-[#eeeeec]'
                        : 'bg-white dark:bg-[#161615] text-[#1b1b18] dark:text-[#EDEDEC] border-[#e3e3e0] dark:border-[#3E3E3A] hover:border-[#1915014a]',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </header>

        <motion.div
          className="flex flex-1 flex-col min-h-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className={`flex-1 mx-auto w-full py-6 pt-20 ${className ?? ''}`}>
            <main className={mainClassName ?? defaultMainClassName}>
              {children}
            </main>
          </div>

          <footer className="border-t border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615] mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-600 dark:text-[#A1A09A]">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </div>
          </footer>
        </motion.div>
      </div>
    </>
  );
}

