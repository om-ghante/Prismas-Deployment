import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-industrial-navy text-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vrudhi Heavy Engineers</h3>
            <p className="mb-4">
              Engineering excellence and precision manufacturing for global industries since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-industrial-yellow transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-industrial-yellow transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="hover:text-industrial-yellow transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="hero" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-industrial-yellow transition-colors cursor-pointer">Home</Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-industrial-yellow transition-colors cursor-pointer">About Us</Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-industrial-yellow transition-colors cursor-pointer">Services</Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} duration={500} offset={-70} className="hover:text-industrial-yellow transition-colors cursor-pointer">Projects</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-industrial-yellow transition-colors">CNC Machining</li>
              <li className="hover:text-industrial-yellow transition-colors">Custom Tooling</li>
              <li className="hover:text-industrial-yellow transition-colors">Forging Solutions</li>
              <li className="hover:text-industrial-yellow transition-colors">Export Machinery</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic">
              <p className="mb-2">123 Industrial Area, Phase II</p>
              <p className="mb-2">Pune, Maharashtra 411057</p>
              <p className="mb-2">India</p>
              <p className="mb-2">Phone: +91 20 12345678</p>
              <p className="mb-2">Email: contact@vrudhiheavyengineers.in</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {currentYear} Vrudhi Heavy Engineers. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Designed and developed with precision engineering by <a href="https://prismas.in/">@prismas</a>
          </p>
        </div>
      </div>
    </footer>
  );
}