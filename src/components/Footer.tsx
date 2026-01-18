import { SITE_INFO, NAV_LINKS } from '../utils/constants';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥋</span>
              <h3 className="text-white font-bold text-lg">{SITE_INFO.name}</h3>
            </div>
            <p className="text-sm mb-4">
              {SITE_INFO.description}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-sm hover:text-red-500 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="flex items-start gap-3 text-sm hover:text-red-500 transition"
                >
                  <FaPhone className="mt-1 flex-shrink-0" />
                  <span>{SITE_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-start gap-3 text-sm hover:text-red-500 transition"
                >
                  <FaEnvelope className="mt-1 flex-shrink-0" />
                  <span>{SITE_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_INFO.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-red-500 transition"
                >
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>{SITE_INFO.address.full}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold mb-4">Training Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-gray-400">6:00 PM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-gray-400">10:00 AM - 12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-gray-400">Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <a href="/contact" className="btn btn-primary w-full block text-center">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; {currentYear} {SITE_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-red-500 transition">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-red-500 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Reviews Badge */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            ⭐⭐⭐⭐⭐ <span className="text-white font-semibold">30+ 5-Star Google Reviews</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
