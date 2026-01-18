import { BENEFITS } from '../utils/constants';

const BenefitsSection = () => {
  return (
    <section className="section-lg bg-gray-50" id="benefits">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Why Train With Us?</h2>
          <p className="text-lg text-gray-600">
            Discover the life-changing benefits of martial arts training
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{benefit.icon}</div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="mb-6 text-lg">
              Join our community and experience the transformation that martial arts can bring to your life.
            </p>
            <a href="/contact" className="btn btn-white btn-large">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
