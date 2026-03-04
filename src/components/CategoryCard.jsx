import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';

const CategoryCard = ({ category, index }) => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const categoryImages = {
    'Starters': 'https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Main Course': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Desserts': 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'Drinks': 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  };

  const categoryIcons = {
    'Starters': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    'Main Course': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    'Desserts': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    'Drinks': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <Link
      ref={cardRef}
      to={`/menu?category=${encodeURIComponent(category.name)}`}
      className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={categoryImages[category.name] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Icon */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
          {categoryIcons[category.name]}
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 transition-all duration-300 rounded-2xl" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300 transform group-hover:translate-x-2">
          {category.name}
        </h3>
        <p className="text-gray-300 text-sm flex items-center gap-2">
          {category.count} items
          <span className="transform transition-all duration-300 group-hover:translate-x-2 opacity-0 group-hover:opacity-100">
            →
          </span>
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

export default CategoryCard;
