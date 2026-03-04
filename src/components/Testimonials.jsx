import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../App';

const Testimonials = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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
    if (statsRef.current) {
      observer2.observe(statsRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (statsRef.current) observer2.unobserve(statsRef.current);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Emily Richardson',
      role: 'Food Blogger',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Absolutely stunning dining experience! The attention to detail in every dish is remarkable. The ambiance is perfect for both romantic dinners and family gatherings.',
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Regular Customer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: "We've been coming to MH Restaurant for years and it never disappoints. The food is consistently excellent and the service is outstanding. Highly recommended!",
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      role: 'Event Planner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'The best restaurant in the city! I organized a corporate event here and everything was perfect. The chefs really know how to create memorable dishes.',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Chef',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: "As a fellow chef, I'm impressed by the creativity and technique here. The fusion of flavors is masterful. This is fine dining at its best.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50k+', label: 'Happy Customers' },
    { number: '100+', label: 'Menu Items' },
    { number: '4.9', label: 'Average Rating' },
  ];

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-100' : 'bg-white'}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="text-primary-500 font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            What Our <span className="text-primary-500">Customers Say</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Don't just take our word for it. Here's what our valued customers have to say about their dining experience at MH Restaurant.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                isDark 
                  ? 'bg-dark-200 hover:bg-dark-300' 
                  : 'bg-gray-50 hover:bg-white hover:shadow-xl'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.5s ease-out ${index * 100}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="text-primary-500/20 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text */}
              <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-500 transform transition-transform duration-300 group-hover:scale-110"
                />
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div 
          ref={statsRef}
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isDark ? 'bg-dark-300' : 'bg-primary-50'
          } rounded-2xl p-8`}
          style={{
            opacity: isVisible2 ? 1 : 0,
            transform: isVisible2 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              style={{
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease-out ${index * 100 + 200}ms`,
              }}
            >
              <div className={`text-3xl md:text-4xl font-bold text-primary-500 mb-2 transform transition-transform duration-300 hover:scale-110`}>
                {stat.number}
              </div>
              <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
