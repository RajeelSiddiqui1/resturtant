import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCart from './components/FloatingCart';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import { CartProvider } from './context/CartContext';

// Theme Context
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('mh-restaurant-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('mh-restaurant-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <CartProvider>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div className={`min-h-screen flex flex-col ${isDark ? 'bg-dark-200 text-white' : 'bg-gray-50 text-gray-900'}`}>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCart />
        </div>
      </ThemeContext.Provider>
    </CartProvider>
  );
}

export default App;
