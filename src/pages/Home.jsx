import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const { isDark } = useTheme();

  const categories = [
    { name: 'Starters', count: 12 },
    { name: 'Main Course', count: 24 },
    { name: 'Desserts', count: 15 },
    { name: 'Drinks', count: 18 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-white'}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold uppercase tracking-wider">Categories</span>
            <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Explore Our <span className="text-primary-500">Categories</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              From delicious starters to mouth-watering desserts, discover a world of culinary delights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.name} category={category} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-secondary inline-block">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <MenuSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Home;
