import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavBarContent } from '../../content/data';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <img src={NavBarContent.logo.icon} alt="!error" />
              </span>
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">
              {NavBarContent.logo.text}
            </span>
          </div>

          {/* Full Navigation on Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {NavBarContent.menuItems.map((item, index) => (
              <a
                key={index}
                href={item.componentRenders}
                className="text-gray-700 hover:text-blue-600 text-sm font-medium"
              >
                {item.text}
              </a>
            ))}
            <a
              href={NavBarContent.button.componentRenders}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105"
            >
              {NavBarContent.button.text}
            </a>
          </div>

          {/* Mobile + Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile + Tablet Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
          {NavBarContent.menuItems.map((item, index) => (
            <a
              key={index}
              href={item.componentRenders}
              className="block text-gray-700 hover:text-blue-600 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.text}
            </a>
          ))}
          <a
            href={NavBarContent.button.componentRenders}
            className="block w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {NavBarContent.button.text}
          </a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
