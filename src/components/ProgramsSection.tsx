import { PROGRAMS } from '../utils/constants';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const ProgramCard = ({ program, index }: { program: typeof PROGRAMS[0], index: number }) => {
  return (
    <div 
      className="card group hover:scale-105"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon/Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
          {program.icon}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-5xl mb-2">{program.icon}</div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 text-gray-900">{program.title}</h3>
      <p className="text-gray-600 mb-6">{program.description}</p>

      {/* Features List */}
      <ul className="space-y-3 mb-6">
        {program.features.slice(0, 4).map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Schedule */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold text-sm text-gray-900 mb-2">Class Schedule:</h4>
        {program.schedule.map((time, idx) => (
          <p key={idx} className="text-sm text-gray-600">{time}</p>
        ))}
      </div>

      {/* CTA Button */}
      <a 
        href="/contact" 
        className="btn btn-primary w-full group-hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
      >
        Learn More
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const ProgramsSection = () => {
  return (
    <section className="section-lg bg-white" id="programs">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600">
            Choose from our specialized programs designed for adult students of all skill levels
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which program is right for you?
          </p>
          <a href="/contact" className="btn btn-secondary btn-large">
            Contact Us for Guidance
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
