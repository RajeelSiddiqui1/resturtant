import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../App';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? `${isDark ? 'bg-dark-200/95' : 'bg-white/95'} shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className={`text-xl md:text-2xl font-display font-bold transition-all duration-300 ${
              isDark ? 'text-white' : isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              MH <span className="text-primary-500">Restaurant</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-primary-500'
                    : isDark || isScrolled
                    ? 'text-gray-300 hover:text-primary-400'
                    : 'text-white/90 hover:text-white'
                }`}
                style={{
                  animation: isVisible ? `fadeIn 0.5s ease-out ${index * 100}ms both` : 'none',
                }}
              >
                {link.name}
                {/* Underline animation */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right Side - Cart & Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <Link
              to="/cart"
              className={`relative p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDark
                  ? 'bg-dark-300 hover:bg-dark-400 text-gray-300 hover:text-primary-400'
                  : isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              aria-label="Shopping cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </Link>

            {/* Orders Button */}
            <Link
              to="/orders"
              className={`hidden md:flex p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isDark
                  ? 'bg-dark-300 hover:bg-dark-400 text-gray-300 hover:text-primary-400'
                  : isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              aria-label="My orders"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${
                isDark
                  ? 'bg-dark-300 hover:bg-dark-400 text-yellow-400'
                  : isScrolled
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isDark || isScrolled 
                  ? 'text-gray-700 dark:text-white' 
                  : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                  isDark || isScrolled ? 'bg-gray-700 dark:bg-white' : 'bg-white'
                } ${isMenuOpen ? 'top-3 rotate-45' : 'top-1'}`} />
                <span className={`absolute left-0 top-3 w-6 h-0.5 transition-all duration-300 ${
                  isDark || isScrolled ? 'bg-gray-700 dark:bg-white' : 'bg-white'
                } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                  isDark || isScrolled ? 'bg-gray-700 dark:bg-white' : 'bg-white'
                } ${isMenuOpen ? 'top-3 -rotate-45' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 border-t ${isDark ? 'border-dark-300' : 'border-gray-200'}`}>
            {/* Cart & Orders in Mobile Menu */}
            <div className="flex gap-4 mb-4 px-4">
              <Link
                to="/cart"
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-colors ${
                  isDark ? 'bg-dark-300 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Cart
                {cartCount > 0 && (
                  <span className="w-5 h-5 bg-primary-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link
                to="/orders"
                className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl transition-colors ${
                  isDark ? 'bg-dark-300 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Orders
              </Link>
            </div>
            
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 font-medium transition-all duration-300 transform ${
                  isActive(link.path)
                    ? 'text-primary-500'
                    : isDark
                    ? 'text-gray-300 hover:text-primary-400'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
                style={{
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
