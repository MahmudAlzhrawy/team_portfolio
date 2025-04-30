"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Build fast, responsive, and modern websites.',
    icon: '🖥️',
  },
  {
    title: 'App Development',
    description: 'Native and hybrid mobile applications.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Craft intuitive and beautiful user experiences.',
    icon: '🎨',
  },
  {
    title: 'Backend Systems',
    description: 'Build scalable, secure backend solutions.',
    icon: '⚙️',
  },
//   {
//     title: 'API Integration',
//     description: 'Connect services seamlessly.',
//     icon: '🔗',
//   },
//   {
//     title: 'Branding & Identity',
//     description: 'Craft brands that leave a mark.',
//     icon: '🧠',
//   },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center py-28 px-4">
      <h1 className="text-4xl font-bold text-yellow-400 mb-4 uppercase">Our Services</h1>
      <p className="text-gray-400 mb-12 text-center max-w-xl">
        Crafting powerful digital experiences that leave an impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl  text-center justify-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(255, 200, 0, 0.4)' }}
            className="bg-[#1a1a1a] p-8 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-16 px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition"
      >
        Contact Us
      </motion.button>
    </div>
  );
}