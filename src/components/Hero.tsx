const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black/50"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="text-white text-sm font-semibold">30+ Five-Star Reviews</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white mb-6 animate-slide-in-left">
            Master <span className="text-gradient">Judo & Jiu-Jitsu</span>
            <br />in Myrtle Beach
          </h1>

          {/* Subheading */}
          <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-in-right opacity-90">
            Build confidence, strength, and discipline through expert martial arts training
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <a href="/contact" className="btn btn-primary btn-large group">
              Start Your Free Trial
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="/programs" className="btn btn-white btn-large">
              View Programs
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-4xl mb-3">🥋</div>
              <h3 className="text-white font-bold text-lg mb-2">Expert Instructors</h3>
              <p className="text-gray-200 text-sm">Highly experienced black belts dedicated to your success</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="text-white font-bold text-lg mb-2">All Skill Levels</h3>
              <p className="text-gray-200 text-sm">From complete beginners to advanced practitioners</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="text-4xl mb-3">💪</div>
              <h3 className="text-white font-bold text-lg mb-2">Proven Results</h3>
              <p className="text-gray-200 text-sm">Transform your body and mind through martial arts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
