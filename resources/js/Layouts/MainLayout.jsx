import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { SUPPORTED_LANGUAGES, useLanguage } from '../i18n';

const navItems = [
  { labelKey: 'nav.home', section: 'home', href: '/#home' },
  { labelKey: 'nav.skills', section: 'skills', href: '/#skills' },
  { labelKey: 'nav.experience', section: 'experience', href: '/#experience' },
  { labelKey: 'nav.contact', section: 'contact', href: '/#contact' },
];

const defaultMainClassName =
  'border rounded-md bg-white dark:bg-[#161615] p-6 border-[#e3e3e0] dark:border-[#3E3E3A]';

export default function MainLayout({ title = 'Portfolio', children, className, mainClassName }) {
  const { url } = usePage();
  const pathname = (url ?? '/').split(/[?#]/)[0] || '/';
  const [activeSection, setActiveSection] = React.useState('home');
  const { language, setLanguage, t } = useLanguage();
  const languageCodes = Object.keys(SUPPORTED_LANGUAGES);
  const isEnglish = language === 'en';
  const nextLanguage = isEnglish ? 'pl' : 'en';
  const currentLanguageLabel = SUPPORTED_LANGUAGES[language] ?? language.toUpperCase();
  const nextLanguageLabel =
    SUPPORTED_LANGUAGES[nextLanguage] ?? languageCodes.find((code) => code !== language)?.toUpperCase() ?? 'EN';

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
          <div className="w-full max-w-screen-2xl mx-auto lg:px-10 px-6 py-4 flex items-center justify-between gap-4">
            <Link href="/" className="text-lg font-semibold tracking-wide shrink-0">
              Dzmitry Maksimuk
            </Link>

            <nav className="flex flex-nowrap items-center justify-end gap-2 shrink-0">
              {navItems.map((item) => {
                const isActive = pathname === '/' ? activeSection === item.section : false;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={[
                      'inline-flex items-center justify-center px-3 py-2 text-md whitespace-nowrap bg-transparent border-b-2 border-transparent transition-colors',
                      isActive
                        ? 'text-[#1b1b18] dark:text-[#EDEDEC] border-[#1b1b18] dark:border-[#EDEDEC] underline underline-offset-4'
                        : 'text-[#1b1b18] dark:text-[#EDEDEC] hover:text-black dark:hover:text-white',
                    ].join(' ')}
                  >
                    {t(item.labelKey)}
                  </a>
                );
              })}
              <button
                type="button"
                aria-label={`Switch to ${nextLanguageLabel}`}
                onClick={() => setLanguage(nextLanguage)}
                className="ml-2 isolate relative w-14 h-7 rounded-full cursor-pointer bg-stone-300 dark:bg-muted shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span
                  className={[
                    'absolute top-1 left-0 w-5 h-5 rounded-full overflow-hidden',
                    'transition-transform duration-300 ease-in-out bg-white dark:bg-[#161615]',
                    'flex items-center justify-center text-[10px] font-bold text-[#1b1b18] dark:text-[#EDEDEC]',
                    isEnglish ? 'translate-x-1' : 'translate-x-8',
                  ].join(' ')}
                >
                  {currentLanguageLabel}
                </span>
              </button>
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
              © {new Date().getFullYear()} {t('nav.portfolioTitle')}. {t('footer.rightsReserved')}
            </div>
          </footer>
        </motion.div>
      </div>
    </>
  );
}

