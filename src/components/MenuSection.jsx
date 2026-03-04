import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';
import FoodCard from './FoodCard';

const MenuSection = ({ full = false }) => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

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
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (gridRef.current) {
      observer2.observe(gridRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (gridRef.current) observer2.unobserve(gridRef.current);
    };
  }, []);

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];

  const menuItems = [
    {
      id: 1,
      name: 'Truffle Mushroom Bruschetta',
      description: 'Toasted sourdough topped with sautéed wild mushrooms, truffle oil, and fresh herbs',
      price: 12.99,
      category: 'Starters',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 2,
      name: 'Crispy Calamari',
      description: 'Golden fried calamari rings served with zesty lemon aioli and marinara sauce',
      price: 14.99,
      category: 'Starters',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 3,
      name: 'Thai Coconut Soup',
      description: 'Creamy coconut broth with lemongrass, mushrooms, and fresh herbs',
      price: 9.99,
      category: 'Starters',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 4,
      name: 'Grilled Ribeye Steak',
      description: '12oz prime ribeye, herb butter, roasted garlic mashers, and seasonal vegetables',
      price: 38.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 5,
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with lemon dill sauce, quinoa, and grilled asparagus',
      price: 28.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 6,
      name: 'Chicken Parmesan',
      description: 'Breaded chicken breast, marinara, mozzarella, served with spaghetti',
      price: 22.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 7,
      name: 'Vegetable Stir Fry',
      description: 'Fresh seasonal vegetables in ginger soy glaze, served with steamed rice',
      price: 18.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 8,
      name: 'Lobster Mac & Cheese',
      description: 'Creamy lobster filling with aged cheddar, gruyere, and crispy breadcrumb topping',
      price: 32.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 9,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, vanilla ice cream, and berry compote',
      price: 10.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 10,
      name: 'New York Cheesecake',
      description: 'Classic creamy cheesecake with graham cracker crust and strawberry topping',
      price: 9.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 11,
      name: 'Tiramisu',
      description: 'Italian classic with espresso-soaked ladyfingers and mascarpone cream',
      price: 11.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 12,
      name: 'Craft Cocktail',
      description: 'Signature cocktails made with premium spirits and fresh ingredients',
      price: 14.99,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 13,
      name: 'Fresh Smoothie',
      description: 'Blend of seasonal fruits with yogurt and honey',
      price: 7.99,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 14,
      name: 'Artisan Coffee',
      description: 'Premium single-origin espresso drinks',
      price: 5.99,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const displayItems = full ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
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
          <span className="text-primary-500 font-semibold uppercase tracking-wider">Our Menu</span>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Delicious <span className="text-primary-500">Offerings</span>
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore our carefully crafted menu featuring a wide variety of dishes made with the freshest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out 200ms',
          }}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : isDark
                  ? 'bg-dark-300 text-gray-300 hover:bg-dark-400 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-primary-500 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayItems.map((food, index) => (
            <div
              key={food.id}
              style={{
                opacity: isVisible2 ? 1 : 0,
                transform: isVisible2 ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.5s ease-out ${index * 50}ms`,
              }}
            >
              <FoodCard food={food} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!full && filteredItems.length > 8 && (
          <div 
            className="text-center mt-12"
            style={{
              opacity: isVisible2 ? 1 : 0,
              transition: 'all 0.6s ease-out 500ms',
            }}
          >
            <Link to="/menu" className="btn-secondary inline-block">
              View Full Menu
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
