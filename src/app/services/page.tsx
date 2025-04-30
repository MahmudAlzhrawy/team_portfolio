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
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream/70 py-24">
      <div className="container w-[90%] mx-auto text-center">

        <h1 className="text-chestnut-dark text-5xl md:text-6xl font-alexandria font-bold mb-6 animate-fadeInUp">
          Services CodeVerse
        </h1>

        <p className="text-chestnut-light text-lg md:text-xl max-w-3xl mx-auto leading-8 animate-fadeInUp delay-200">
          At CodeVerse, we specialize in providing innovative and tailored digital solutions. Our team is committed to turning your ideas into seamless, powerful web and mobile experiences. From intuitive user interfaces to robust backend systems, we deliver excellence at every step.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#FFF8E7] p-8 rounded-2xl shadow-md animate-fadeInUp"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-chestnut-dark text-3xl font-alexandria mb-2">{service.title}</h3>
              <p className="text-chestnut-light text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-14 px-6 py-4 w-full sm:w-1/2 rounded-2xl text-xl font-mono bg-chestnut-rosewood text-cream hover:bg-chestnut-mahogany transition duration-500 animate-pulseSlow"
        >
          Get in Touch
        </motion.button>

      </div>
    </div>
  );
}
