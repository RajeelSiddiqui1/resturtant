import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../App';

const FloatingCart = () => {
  const { cartCount, cartTotal, cartItems } = useCart();
  const { isDark } = useTheme();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Hide on cart and orders pages
  const isHidden = location.pathname === '/cart' || location.pathname === '/orders';

  useEffect(() => {
    if (cartCount > 0) {
      setIsVisible(true);
    }
  }, [cartCount]);

  if (!isVisible || isHidden) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Cart Preview */}
      <div 
        className={`absolute bottom-16 right-0 w-72 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        } ${isDark ? 'bg-dark-200' : 'bg-white'}`}
      >
        <div className={`p-4 ${isDark ? 'bg-dark-300' : 'bg-gray-50'}`}>
          <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Cart Preview
          </h4>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {cartCount} {cartCount === 1 ? 'item' : 'items'}
          </p>
        </div>
        <div className="p-4 max-h-48 overflow-y-auto">
          {cartItems.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center gap-3 mb-3">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex-grow">
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.name}
                </p>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          {cartItems.length > 3 && (
            <p className={`text-sm text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              +{cartItems.length - 3} more items
            </p>
          )}
        </div>
        <div className={`p-4 border-t ${isDark ? 'border-dark-400' : 'border-gray-200'}`}>
          <div className="flex justify-between mb-3">
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Total:
            </span>
            <span className="font-bold text-primary-500">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
          <Link
            to="/cart"
            className="block w-full btn-primary text-center py-2"
          >
            View Cart
          </Link>
        </div>
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative w-16 h-16 bg-primary-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-primary-600 transition-all duration-300 transform hover:scale-110 animate-bounce"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        
        {/* Badge */}
        <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
          {cartCount > 9 ? '9+' : cartCount}
        </span>
      </button>
    </div>
  );
};

export default FloatingCart;
