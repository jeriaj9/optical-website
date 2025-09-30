import React, { useState } from 'react';
import { Menu, X, Eye } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Eye className="h-8 w-8 text-sky-500" />
            <span className="text-2xl font-bold text-gray-900">VisionCare</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
            >
              Book Appointment
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('booking')}
            className="hidden md:inline-flex bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors duration-200 font-medium"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-sky-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-left text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Book Appointment
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-sky-500 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors duration-200 font-medium text-center"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;