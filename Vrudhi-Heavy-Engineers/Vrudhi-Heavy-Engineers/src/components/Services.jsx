import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '../assets/styles/animations';

const services = [
  {
    title: "CNC Machining",
    description: "Precision machining for complex components with tight tolerances",
    icon: "⚙️"
  },
  {
    title: "Custom Tooling",
    description: "Design and manufacturing of specialized industrial tools",
    icon: "🛠️"
  },
  {
    title: "Forging Solutions",
    description: "Hot and cold forging for high-strength metal components",
    icon: "🔥"
  },
  {
    title: "Export Machinery",
    description: "Heavy machinery manufacturing for international markets",
    icon: "📦"
  },
  {
    title: "Precision Casting",
    description: "Investment and sand casting for complex geometries",
    icon: "🪣"
  },
  {
    title: "Industrial Automation",
    description: "Automation solutions for manufacturing processes",
    icon: "🤖"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="w-20 h-1 bg-industrial-yellow mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}