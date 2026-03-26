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
    <MainLayout title="Contact">
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

      <motion.form
        onSubmit={submit}
        className="border rounded-md p-4 border-[#e3e3e0] dark:border-[#3E3E3A] bg-white dark:bg-[#161615]"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <div className="mb-3">
          <label className="block text-sm mb-1">Name</label>
          <input
            className="w-full border rounded-md px-4 py-2"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            type="text"
            name="name"
          />
          {errors.name && (
            <div className="text-red-600 text-sm mt-1">{errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input
            className="w-full border rounded-md px-4 py-2"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            type="email"
            name="email"
          />
          {errors.email && (
            <div className="text-red-600 text-sm mt-1">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1">Message</label>
          <textarea
            className="w-full border rounded-md px-4 py-2"
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
            name="message"
            rows="6"
          />
          {errors.message && (
            <div className="text-red-600 text-sm mt-1">{errors.message}</div>
          )}
        </div>

        <button
          className="px-5 py-2 rounded-md bg-black text-white disabled:opacity-50"
          type="submit"
          disabled={processing}
        >
          {processing ? 'Sending...' : 'Send'}
        </button>
      </motion.form>
    </MainLayout>
  );
}

