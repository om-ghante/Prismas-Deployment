import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { fadeIn, slideUp } from '../assets/styles/animations';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center hero-bg relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          className="text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Engineering Excellence for a Stronger Tomorrow
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Vrudhi Heavy Engineers — Empowering Industries Globally
          </p>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-industrial-yellow text-industrial-navy font-bold py-3 px-8 rounded-full text-lg"
            >
              Explore More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}