import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../assets/styles/animations';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">About Us</h2>
          <div className="w-20 h-1 bg-industrial-yellow mx-auto mt-4"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Legacy</h3>
            <p className="mb-4 text-gray-700">
              Founded in 2005, Vrudhi Heavy Engineers has established itself as a premier manufacturer and engineering solutions provider. With over 18 years of industry experience, we've built a reputation for excellence in precision engineering and reliable manufacturing.
            </p>
            <p className="mb-4 text-gray-700">
              Our journey began with a vision to revolutionize industrial manufacturing in India, and today we proudly serve clients across 15 countries worldwide.
            </p>
            <p className="text-gray-700">
              Our 50,000 sq. ft. manufacturing facility in Pune is equipped with state-of-the-art CNC machines, forging equipment, and quality control systems that meet international standards.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"
          />
        </div>
      </div>
    </section>
  );
}