import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';

const AboutSection = ({ full = false }) => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const sectionRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (featuresRef.current) {
      observer2.observe(featuresRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (featuresRef.current) observer2.unobserve(featuresRef.current);
    };
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Expert Chefs',
      description: 'Our award-winning chefs bring decades of culinary experience to create unforgettable dishes.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fresh Ingredients',
      description: 'We source only the finest, freshest ingredients from local farms and trusted suppliers.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quick Service',
      description: 'Enjoy prompt, attentive service that ensures your dining experience is seamless.',
    },
  ];

  const teamMembers = [
    {
      name: 'John Anderson',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ez69de469f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div 
            ref={sectionRef}
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Restaurant interior"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Gourmet dish"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Chef preparing food"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Restaurant ambiance"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white rounded-2xl p-6 shadow-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div 
            ref={featuresRef}
            style={{
              opacity: isVisible2 ? 1 : 0,
              transform: isVisible2 ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            <span className="text-primary-500 font-semibold uppercase tracking-wider">About Us</span>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              A Story of Passion & <span className="text-primary-500">Excellence</span>
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Founded in 2009, MH Restaurant has been a beacon of culinary excellence, 
              bringing together the finest flavors from around the world. Our commitment 
              to quality and innovation has made us a beloved destination for food enthusiasts.
            </p>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
              We believe that dining is not just about food—it's an experience that engages 
              all your senses. From the moment you step through our doors, you'll be greeted 
              with warm hospitality and an ambiance that makes you feel at home.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 ${
                    isDark ? 'bg-dark-300 hover:bg-dark-400' : 'bg-white hover:shadow-lg'
                  }`}
                  style={{
                    opacity: isVisible2 ? 1 : 0,
                    transform: isVisible2 ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${index * 150}ms`,
                  }}
                >
                  <div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Team Section - Only show in full mode */}
            {full && (
              <div className="mb-8">
                <h3 className={`text-xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Meet Our Team
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-2 border-4 border-primary-500 transform transition-transform duration-300 hover:scale-110"
                      />
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {member.name}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Link to="/about" className="btn-primary inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
