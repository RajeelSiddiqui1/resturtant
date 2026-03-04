import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../App';
import { useCart } from '../context/CartContext';

const FoodCard = ({ food }) => {
  const { isDark } = useTheme();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
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

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(food);
    setTimeout(() => setIsAdding(false), 1500);
  };

  return (
    <div 
      ref={cardRef}
      className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl ${
        isDark ? 'bg-dark-200 hover:bg-dark-300' : 'bg-white hover:bg-gray-50'
      }`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        transition: 'all 0.5s ease-out',
      }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badge */}
        {food.isPopular && (
          <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse">
            Popular
          </div>
        )}

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary-500 hover:text-white">
            Quick View
          </button>
        </div>

        {/* Image Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 transition-colors duration-300 rounded-t-2xl" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Tag */}
        <span className={`text-xs font-medium ${isDark ? 'text-primary-400' : 'text-primary-600'}`}>
          {food.category}
        </span>
        
        {/* Name */}
        <h3 className={`text-lg font-display font-bold mt-1 mb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        } group-hover:text-primary-500 transition-colors duration-300`}>
          {food.name}
        </h3>

        {/* Description */}
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-2 mb-4`}>
          {food.description}
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-500 transform transition-transform duration-300 group-hover:scale-110">
            ${food.price}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isAdding
                ? 'bg-green-500 text-white'
                : 'bg-primary-500 text-white hover:bg-primary-600 hover:scale-105 hover:shadow-lg'
            }`}
          >
            {isAdding ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
