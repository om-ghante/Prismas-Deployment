import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../assets/styles/animations';

const projects = [
  {
    title: "Automotive Component Manufacturing",
    client: "Global Auto Corp",
    location: "Pune, India",
    description: "Supplied 50,000+ precision components monthly for transmission systems"
  },
  {
    title: "Aerospace Tooling Project",
    client: "Skyline Aerospace",
    location: "Bangalore, India",
    description: "Designed and manufactured specialized tooling for aircraft assembly"
  },
  {
    title: "Energy Sector Equipment",
    client: "PowerGrid International",
    location: "Houston, USA",
    description: "Exported turbine components for power generation facilities"
  },
  {
    title: "Industrial Conveyor Systems",
    client: "EuroManufacturing Group",
    location: "Berlin, Germany",
    description: "Custom conveyor systems for automotive production lines"
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <div className="w-20 h-1 bg-industrial-yellow mx-auto mt-4"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 rounded-xl p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">{projects[currentIndex].title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-industrial-navy text-white px-3 py-1 rounded-full text-sm">
                      {projects[currentIndex].client}
                    </span>
                    <span className="bg-industrial-yellow text-industrial-navy px-3 py-1 rounded-full text-sm">
                      {projects[currentIndex].location}
                    </span>
                  </div>
                  <p className="text-gray-700">{projects[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevProject}
              className="bg-industrial-navy text-white p-2 rounded-full hover:bg-industrial-gray transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-industrial-navy' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button 
              onClick={nextProject}
              className="bg-industrial-navy text-white p-2 rounded-full hover:bg-industrial-gray transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}