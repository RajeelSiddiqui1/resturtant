import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '../App';
import FoodCard from '../components/FoodCard';

const Menu = () => {
  const { isDark } = useTheme();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

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
      name: 'Garden Salad',
      description: 'Fresh mixed greens with cherry tomatoes, cucumber, and balsamic vinaigrette',
      price: 8.99,
      category: 'Starters',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 5,
      name: 'Grilled Ribeye Steak',
      description: '12oz prime ribeye, herb butter, roasted garlic mashers, and seasonal vegetables',
      price: 38.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 6,
      name: 'Pan-Seared Salmon',
      description: 'Atlantic salmon with lemon dill sauce, quinoa, and grilled asparagus',
      price: 28.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 7,
      name: 'Chicken Parmesan',
      description: 'Breaded chicken breast, marinara, mozzarella, served with spaghetti',
      price: 22.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 8,
      name: 'Vegetable Stir Fry',
      description: 'Fresh seasonal vegetables in ginger soy glaze, served with steamed rice',
      price: 18.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 9,
      name: 'Lobster Mac & Cheese',
      description: 'Creamy lobster filling with aged cheddar, gruyere, and crispy breadcrumb topping',
      price: 32.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 10,
      name: 'Lamb Chops',
      description: 'Grilled New Zealand lamb chops with mint sauce and roasted potatoes',
      price: 36.99,
      category: 'Main Course',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 11,
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, vanilla ice cream, and berry compote',
      price: 10.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 12,
      name: 'New York Cheesecake',
      description: 'Classic creamy cheesecake with graham cracker crust and strawberry topping',
      price: 9.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 13,
      name: 'Tiramisu',
      description: 'Italian classic with espresso-soaked ladyfingers and mascarpone cream',
      price: 11.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 14,
      name: 'Crème Brûlée',
      description: 'Classic vanilla custard with caramelized sugar crust',
      price: 8.99,
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 15,
      name: 'Craft Cocktail',
      description: 'Signature cocktails made with premium spirits and fresh ingredients',
      price: 14.99,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: true,
    },
    {
      id: 16,
      name: 'Fresh Smoothie',
      description: 'Blend of seasonal fruits with yogurt and honey',
      price: 7.99,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 17,
      name: 'Artisan Coffee',
      description: 'Premium single-origin espresso drinks',
      price: 5.99,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
    {
      id: 18,
      name: 'Fresh Lemonade',
      description: 'House-made lemonade with fresh mint and honey',
      price: 4.99,
      category: 'Drinks',
      image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      isPopular: false,
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-900'}`}>
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our <span className="text-primary-500">Menu</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring a wide variety of dishes made with the freshest ingredients and prepared with passion.
          </p>
        </div>
      </div>

      {/* Menu Content */}
      <section className={`py-16 md:py-24 ${isDark ? 'bg-dark-200' : 'bg-gray-50'}`}>
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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

          {/* Menu Items Count */}
          <p className={`text-center mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </p>

          {/* Menu Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
