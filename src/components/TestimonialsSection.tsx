import { useState } from 'react';
import { TESTIMONIALS } from '../utils/constants';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="section-lg bg-gray-900 text-white" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 text-white">What Our Students Say</h2>
          <p className="text-lg text-gray-300">
            Hear from our community members about their experience training with us
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-white/20">
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-xl md:text-2xl text-gray-100 italic leading-relaxed">
                "{currentTestimonial.text}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-bold text-xl text-white mb-1">{currentTestimonial.name}</p>
              <p className="text-gray-300 text-sm">Verified Student</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentIndex ? 'bg-red-500 w-8' : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=myrtle+beach+bjj+and+judo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-red-400 transition"
            >
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span className="font-semibold">Read all 30+ reviews on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
