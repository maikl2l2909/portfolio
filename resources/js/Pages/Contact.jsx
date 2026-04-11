import React from 'react';
import { useForm } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Contact() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  function submit(e) {
    e.preventDefault();

    post('/contact', {
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <MainLayout
      className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"
      mainClassName="border-0 bg-transparent dark:bg-transparent p-0 shadow-none rounded-none"
      title="Contact"
    >
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-600 dark:text-[#A1A09A]">
          Send me a message and I will get back to you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
        {/* Left side - Contact Form */}
        <motion.form
          onSubmit={submit}
          className="border rounded-md p-6 border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Name</label>
            <input
              className="w-full border rounded-md px-4 py-2 border-[#e3e3e0] dark:border-[#3E3E3A] bg-[#FDFDFC] dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#eeeeec]"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              type="text"
              name="name"
              required
            />
            {errors.name && (
              <div className="text-red-600 text-sm mt-1">{errors.name}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Email</label>
            <input
              className="w-full border rounded-md px-4 py-2 border-[#e3e3e0] dark:border-[#3E3E3A] bg-[#FDFDFC] dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#eeeeec]"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              type="email"
              name="email"
              required
            />
            {errors.email && (
              <div className="text-red-600 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1 font-medium">Message</label>
            <textarea
              className="w-full border rounded-md px-4 py-2 border-[#e3e3e0] dark:border-[#3E3E3A] bg-[#FDFDFC] dark:bg-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#eeeeec]"
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
              name="message"
              rows="6"
              required
            />
            {errors.message && (
              <div className="text-red-600 text-sm mt-1">{errors.message}</div>
            )}
          </div>

          <button
            className="px-5 w-full py-2 rounded-md bg-black text-white disabled:opacity-50 hover:bg-gray-800 transition-colors"
            type="submit"
            disabled={processing}
          >
            {processing ? 'Sending...' : 'Send'}
          </button>
        </motion.form>

        {/* Right side - Contact Information */}
        <motion.div
          className="border rounded-md p-6 border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615]"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-sm text-gray-600 dark:text-[#A1A09A]">Email</p>
                <p className="font-medium">maikl2l2909@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-sm text-gray-600 dark:text-[#A1A09A]">Phone</p>
                <p className="font-medium">+516828838</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-sm text-gray-600 dark:text-[#A1A09A]">Location</p>
                <p className="font-medium">Poland, Krakow</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
}

