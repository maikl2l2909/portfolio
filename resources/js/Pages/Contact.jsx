import React, { useEffect, useRef, useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Contact({ embedded = false, sectionId = 'contact' }) {
  const { props } = usePage();
  const { flash } = props;
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function submit(e) {
    e.preventDefault();

    post('/contact', {
      onSuccess: () => {
        reset();
      },
    });
  }

  const content = (
    <section
      id={sectionId}
      data-nav-section
      className="mt-14 scroll-mt-24 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-semibold tracking-tight mb-3">Let&apos;s Work Together</h2>
        <p className="text-gray-600 dark:text-[#A1A09A] max-w-2xl mx-auto">
          Have an idea, role, or project in mind? Send me a message and I will get back to you soon.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left side - Contact Form */}
        <motion.form
          onSubmit={submit}
          className={[
            'border rounded-2xl p-6 md:p-8 border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615] shadow-sm',
            'transition-all duration-700 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ].join(' ')}
        >
          {flash?.success && (
            <div className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
              {flash.success}
            </div>
          )}

          <motion.div
            className={[
              'mb-5 transition-all duration-700 ease-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
            style={{ transitionDelay: '120ms' }}
          >
            <label className="block text-sm mb-2 font-medium">Name</label>
            <input
              className="w-full border rounded-xl px-4 py-3 border-[#e3e3e0] dark:border-[#3E3E3A] bg-[#FDFDFC] dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#eeeeec] transition-shadow"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              type="text"
              name="name"
              required
            />
            {errors.name && (
              <div className="text-red-600 text-sm mt-1">{errors.name}</div>
            )}
          </motion.div>

          <motion.div
            className={[
              'mb-5 transition-all duration-700 ease-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
            style={{ transitionDelay: '220ms' }}
          >
            <label className="block text-sm mb-2 font-medium">Email</label>
            <input
              className="w-full border rounded-xl px-4 py-3 border-[#e3e3e0] dark:border-[#3E3E3A] bg-[#FDFDFC] dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#eeeeec] transition-shadow"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              type="email"
              name="email"
              required
            />
            {errors.email && (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            )}
          </motion.div>

          <motion.div
            className={[
              'mb-5 transition-all duration-700 ease-out',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
            style={{ transitionDelay: '320ms' }}
          >
            <label className="block text-sm mb-2 font-medium">Message</label>
            <textarea
              className="w-full border rounded-xl px-4 py-3 border-[#e3e3e0] dark:border-[#3E3E3A] bg-[#FDFDFC] dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#eeeeec] transition-shadow"
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
              name="message"
              rows="7"
              required
            />
            {errors.message && (
              <div className="text-red-600 text-sm mt-1">{errors.message}</div>
            )}
          </motion.div>

          <motion.button
            type="submit"
            disabled={processing}
            style={{ transitionDelay: '420ms' }}
            className={[
              'px-5 w-full py-3 rounded-xl bg-black text-white disabled:opacity-50 hover:bg-gray-800 transition-all duration-700 ease-out font-medium',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ].join(' ')}
          >
            {processing ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Right side - Contact Information */}
        <motion.div
          className={[
            'p-6 md:p-8 rounded-2xl border border-[#e3e3e0] dark:border-[#3E3E3A] bg-gradient-to-br from-white to-[#f7f7f6] dark:from-[#161615] dark:to-[#10100f] shadow-sm',
            'transition-all duration-700 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          ].join(' ')}
          style={{ transitionDelay: '150ms' }}
        >
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
          <p className="text-sm text-gray-600 dark:text-[#A1A09A] mb-6">
            Prefer direct communication? Use any of the channels below.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-gray-100 dark:bg-[#242423] flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-[#A1A09A]">Email</p>
                <p className="font-medium">maikl2l2909@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-gray-100 dark:bg-[#242423] flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-[#A1A09A]">Phone</p>
                <p className="font-medium">+516828838</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-gray-100 dark:bg-[#242423] flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-[#A1A09A]">Location</p>
                <p className="font-medium">Poland, Krakow</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#e3e3e0] dark:border-[#3E3E3A] px-4 py-3 text-sm text-gray-600 dark:text-[#A1A09A]">
            Usually replies within 24 hours.
          </div>
        </motion.div>
      </div>
    </section>
  );

  if (embedded) {
    return content;
  }

  return (
    <MainLayout
      className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
      mainClassName="border-0 bg-transparent dark:bg-transparent p-0 shadow-none rounded-none"
      title="Contact"
    >
      {content}
    </MainLayout>
  );
}

