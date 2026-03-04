import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';

const Footer = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Cart', path: '/cart' },
    { name: 'Orders', path: '/orders' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: '#',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: '#',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: '#',
    },
  ];

  return (
    <footer 
      ref={footerRef}
      className={`${isDark ? 'bg-dark-100' : 'bg-gray-900'} text-white`}
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out',
            }}
          >
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-display font-bold">
                MH <span className="text-primary-500">Restaurant</span>
              </span>
            </Link>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-400'} mb-4`}>
              Experience the finest culinary delights with our carefully crafted dishes made from the freshest ingredients.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-dark-300 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={social.name}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 100ms',
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`${isDark ? 'text-gray-400' : 'text-gray-400'} hover:text-primary-500 transition-all duration-300 transform hover:translate-x-2 inline-block`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 200ms',
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className={`space-y-3 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
              <li className="flex items-start gap-3 group">
                <svg className="w-5 h-5 text-primary-500 mt-0.5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Culinary Street, Food City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3 group">
                <svg className="w-5 h-5 text-primary-500 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <svg className="w-5 h-5 text-primary-500 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@mhrestaurant.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s ease-out 300ms',
            }}
          >
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-400'}`}>
              <li className="flex justify-between group hover:text-white transition-colors duration-300">
                <span>Monday - Thursday</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between group hover:text-white transition-colors duration-300">
                <span>Friday - Saturday</span>
                <span className="text-white">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between group hover:text-white transition-colors duration-300">
                <span>Sunday</span>
                <span className="text-white">12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div 
          className={`border-t ${isDark ? 'border-dark-300' : 'border-gray-800'} mt-8 pt-8 text-center ${isDark ? 'text-gray-400' : 'text-gray-400'}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease-out 400ms',
          }}
        >
          <p>&copy; {new Date().getFullYear()} MH Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
