import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';

const Hero = () => {
  const { isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState({
    badge: false,
    heading: false,
    paragraph: false,
    buttons: false,
  });

  useEffect(() => {
    setIsLoaded(true);
    
    // Staggered animation on load
    setTimeout(() => setIsVisible(prev => ({ ...prev, badge: true })), 100);
    setTimeout(() => setIsVisible(prev => ({ ...prev, heading: true })), 300);
    setTimeout(() => setIsVisible(prev => ({ ...prev, paragraph: true })), 500);
    setTimeout(() => setIsVisible(prev => ({ ...prev, buttons: true })), 700);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ${isLoaded ? 'scale-110' : 'scale-100'}`}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-dark-200/85' : 'bg-gray-900/70'}`} />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className={`transform transition-all duration-700 ${
              isVisible.badge 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-6">
              Welcome to MH Restaurant
            </span>
          </div>

          {/* Heading */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 transform transition-all duration-700 ${
              isVisible.heading 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Experience Fine{' '}
            <span className="text-primary-500 relative">
              Dining
              <svg className="absolute -bottom-2 left-0 w-full h-1" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-400" />
              </svg>
            </span>{' '}
            Like Never Before
          </h1>

          {/* Paragraph */}
          <p 
            className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl transform transition-all duration-700 ${
              isVisible.paragraph 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Discover exquisite flavors crafted with passion and the finest ingredients. 
            Join us for an unforgettable culinary journey that will delight your senses.
          </p>

          {/* Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ${
              isVisible.buttons 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Link to="/menu" className="btn-primary text-center group relative overflow-hidden">
              <span className="relative z-10">View Our Menu</span>
              <div className="absolute inset-0 bg-primary-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900 text-center group">
              <span className="relative z-10">Book a Table</span>
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '50k+', label: 'Happy Customers' },
            { number: '100+', label: 'Menu Items' },
            { number: '4.9', label: 'Rating' },
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible.buttons 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
