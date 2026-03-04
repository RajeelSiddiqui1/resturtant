import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../App';

const ContactForm = ({ full = false }) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const formRef = useRef(null);
  const infoRef = useRef(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }
    if (infoRef.current) {
      observer2.observe(infoRef.current);
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer2.unobserve(infoRef.current);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      details: '123 Culinary Street, Food City, FC 12345',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: '+1 (555) 123-4567',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: 'info@mhrestaurant.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Hours',
      details: 'Mon-Sun: 11:00 AM - 10:00 PM',
    },
  ];

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div 
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <span className="text-primary-500 font-semibold uppercase tracking-wider">Contact Us</span>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have questions or want to make a reservation? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`rounded-2xl p-8 shadow-lg transition-all duration-500 ${
              isDark ? 'bg-dark-300' : 'bg-white'
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transform scale-0 animate-scale-in">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <style>{`
                  @keyframes scale-in {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                  }
                  .animate-scale-in {
                    animation: scale-in 0.5s ease-out forwards;
                  }
                `}</style>
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Thank You!
                </h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : `border-gray-300 dark:border-dark-400 focus:border-primary-500`
                    } ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : `border-gray-300 dark:border-dark-400 focus:border-primary-500`
                    } ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : `border-gray-300 dark:border-dark-400 focus:border-primary-500`
                    } ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'}`}
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div ref={infoRef}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-6 rounded-xl transition-all duration-500 hover:-translate-x-2 ${
                    isDark ? 'bg-dark-300 hover:bg-dark-400' : 'bg-white hover:shadow-lg'
                  }`}
                  style={{
                    opacity: isVisible2 ? 1 : 0,
                    transform: isVisible2 ? 'translateX(0)' : 'translateX(40px)',
                    transition: `all 0.5s ease-out ${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-lg flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                      {info.title}
                    </h4>
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div 
              className={`mt-8 rounded-xl overflow-hidden h-48 ${isDark ? 'bg-dark-300' : 'bg-gray-200'} flex items-center justify-center transition-all duration-500 hover:shadow-xl`}
              style={{
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease-out 400ms',
              }}
            >
              <div className="text-center">
                <svg className={`w-12 h-12 mx-auto mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'} animate-pulse`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className={isDark ? 'text-gray-500' : 'text-gray-500'}>View on Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
