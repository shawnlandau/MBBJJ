import { SITE_INFO } from '../utils/constants';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const LocationSection = () => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(SITE_INFO.address.full)}`;

  return (
    <section className="section-lg bg-white" id="location">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Visit Us</h2>
          <p className="text-lg text-gray-600">
            We're located inside American 24 Fitness in Murrells Inlet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.442397!2d-79.04978!3d33.55021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzAwLjgiTiA3OcKwMDInNTkuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Myrtle Beach BJJ & Judo Location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-gray-600">
                  American 24 Fitness<br />
                  {SITE_INFO.address.street}<br />
                  {SITE_INFO.address.city}, {SITE_INFO.address.state} {SITE_INFO.address.zip}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_INFO.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-semibold hover:text-red-700 transition mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FaPhone className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="text-gray-600 hover:text-red-600 transition"
                >
                  {SITE_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FaEnvelope className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="text-gray-600 hover:text-red-600 transition break-all"
                >
                  {SITE_INFO.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FaClock className="text-red-600 text-xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-3">Training Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-600">6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="/contact" className="btn btn-primary btn-large w-full block text-center">
                Schedule Your Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
