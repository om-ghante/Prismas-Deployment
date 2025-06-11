import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Prismas from "../../assets/images/prismas.svg"; // Update this path to your actual logo
import BrandLogo from "../../assets/images/logo.png"; // Update this path

const Footer = () => {
  return (
    <footer className="bg-[#03045e] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={BrandLogo} alt="Brand Logo" className="h-14 mb-2" />
          <h2 className="text-lg font-semibold">Sawant Academy</h2>
          <p className="text-sm text-gray-300">Empowering the Future Through Education</p>
        </div>
              {/* Copyright */}
      <div>
      {/* Social Media */}
        <div className="flex gap-5 text-white text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-[#caf0f8] transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-[#caf0f8] transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-[#caf0f8] transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-[#caf0f8] transition" />
          </a>
        </div>
        <div className="text-center text-xs sm:text-sm text-gray-300 mt-6">
        © {new Date().getFullYear()} Sawant Academy. All Rights Reserved.
      </div>
      </div>

        {/* Developed by */}
        <div className="flex flex-col items-center">
          <div className="text-white font-bold text-xs sm:text-sm">Developed By</div>
          <a 
            href="https://prismas.in/"
            target='_blank'
            rel="noopener noreferrer"
            className='cursor-pointer'
          >
            <motion.div 
              className="flex items-center mt-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img src={Prismas} alt="Prismas Logo" className="h-12 sm:h-16 md:h-20" />
            </motion.div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
