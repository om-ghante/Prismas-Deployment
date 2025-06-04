import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
    { name: "Services", target: "services" },
    { name: "Projects", target: "projects" },
    { name: "Industries", target: "industries" },
    { name: "Contact", target: "contact" },
    { name: "Location", target: "location" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-industrial-navy text-gray-400 z-50 shadow-md"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Vrudhi Heavy Engineers</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.target}
              to={link.target}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-industrial-yellow transition-colors duration-300 relative"
            >
              {link.name}
              <motion.div 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-industrial-yellow"
                whileHover={{ width: "100%" }}
              />
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-industrial-gray overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.target}
                  to={link.target}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="py-2 cursor-pointer hover:text-industrial-yellow transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}