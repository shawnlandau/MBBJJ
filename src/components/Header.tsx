import { useState } from 'react';
import { NAV_LINKS, SITE_INFO } from '../utils/constants';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className={`hidden md:block border-b border-gray-200 ${isScrolled ? 'hidden' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-4">
              <a 
                href={`tel:${SITE_INFO.phone}`} 
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
              >
                <FaPhone className="text-xs" />
                {SITE_INFO.phone}
              </a>
              <a 
                href={`mailto:${SITE_INFO.email}`} 
                className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
              >
                <FaEnvelope className="text-xs" />
                {SITE_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href={SITE_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={SITE_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className={`text-3xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              🥋
            </div>
            <div>
              <h1 className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                {SITE_INFO.name}
              </h1>
              <p className={`text-xs transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
                {SITE_INFO.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-red-600' 
                    : 'text-white hover:text-red-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="/contact" className="btn btn-primary">
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden text-2xl transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-95 z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-white text-xl font-semibold hover:text-red-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/contact" 
              className="btn btn-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free Trial
            </a>
            
            {/* Mobile Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <a 
                href={`tel:${SITE_INFO.phone}`} 
                className="flex items-center gap-3 text-white hover:text-red-400 transition mb-4"
              >
                <FaPhone />
                {SITE_INFO.phone}
              </a>
              <a 
                href={`mailto:${SITE_INFO.email}`} 
                className="flex items-center gap-3 text-white hover:text-red-400 transition"
              >
                <FaEnvelope />
                {SITE_INFO.email}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
