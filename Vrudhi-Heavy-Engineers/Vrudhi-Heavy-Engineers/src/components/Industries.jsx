import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../assets/styles/animations';

const industries = [
  { name: "Automotive", icon: "🚗" },
  { name: "Aerospace", icon: "✈️" },
  { name: "Energy", icon: "⚡" },
  { name: "Heavy Machinery", icon: "🏗️" },
  { name: "Construction", icon: "🏢" },
  { name: "Marine", icon: "🚢" },
  { name: "Railways", icon: "🚆" },
  { name: "Defense", icon: "🛡️" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Industries Served</h2>
          <div className="w-20 h-1 bg-industrial-yellow mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide engineering solutions to diverse industries across the globe
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">Global Reach</h3>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 max-w-4xl mx-auto" />
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="bg-industrial-navy text-white px-4 py-2 rounded-full">India</span>
            <span className="bg-industrial-navy text-white px-4 py-2 rounded-full">USA</span>
            <span className="bg-industrial-navy text-white px-4 py-2 rounded-full">Germany</span>
            <span className="bg-industrial-navy text-white px-4 py-2 rounded-full">Japan</span>
            <span className="bg-industrial-navy text-white px-4 py-2 rounded-full">UAE</span>
            <span className="bg-industrial-navy text-white px-4 py-2 rounded-full">Australia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}