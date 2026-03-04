import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';
import { useCart } from '../context/CartContext';

const Orders = () => {
  const { isDark } = useTheme();
  const { orders } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (orders.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 dark:bg-dark-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className={`w-12 h-12 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              No orders yet
            </h2>
            <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Once you place an order, it will appear here.
            </p>
            <Link to="/menu" className="btn-primary inline-block">
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Page Header */}
        <div 
          ref={sectionRef}
          className="mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <h1 className={`text-3xl md:text-4xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-primary-500">Orders</span>
          </h1>
          <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            View your order history and details
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark ? 'bg-dark-300' : 'bg-white shadow-lg'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease-out ${index * 100 + 200}ms`,
              }}
            >
              {/* Order Header */}
              <div className={`p-6 flex flex-wrap items-center justify-between gap-4 ${
                isDark ? 'bg-dark-400' : 'bg-gray-50'
              }`}>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Order #{order.id}
                    </h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-500 text-sm font-medium rounded-full">
                      {order.status}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {formatDate(order.date)}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-2xl font-bold text-primary-500`}>
                    ${order.totalWithTax ? order.totalWithTax.toFixed(2) : (order.total * 1.1).toFixed(2)}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>

              {/* Customer Details */}
              {order.customer && (
                <div className="p-6 border-b border-gray-200 dark:border-dark-400">
                  <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Customer & Delivery Details
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase`}>Name</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{order.customer.name}</p>
                    </div>
                    <div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase`}>Email</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{order.customer.email}</p>
                    </div>
                    <div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase`}>Phone</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{order.customer.phone}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase`}>Delivery Address</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {order.customer.address}, {order.customer.city} - {order.customer.zipCode}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase`}>Payment Method</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {order.customer.paymentMethod === 'cash' ? '💵 Cash on Delivery' : '💳 Card Payment'}
                      </p>
                    </div>
                    {order.customer.specialInstructions && (
                      <div className="md:col-span-3">
                        <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase`}>Special Instructions</p>
                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {order.customer.specialInstructions}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Order Items */}
              <div className="p-6">
                <h4 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Order Details
                </h4>
                <div className="space-y-3">
                  {order.items.map((item, itemIndex) => (
                    <div 
                      key={`${order.id}-${item.id}-${itemIndex}`}
                      className={`flex items-center gap-4 ${itemIndex !== order.items.length - 1 ? 'pb-3 border-b' : ''} ${
                        isDark ? 'border-dark-400' : 'border-gray-100'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h5 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.name}
                        </h5>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className={`mt-6 pt-4 border-t ${isDark ? 'border-dark-400' : 'border-gray-200'}`}>
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Subtotal</span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>${order.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Tax (10%)</span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>${(order.total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Delivery</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between font-bold mt-2">
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>Total Paid</span>
                    <span className="text-primary-500">${order.totalWithTax ? order.totalWithTax.toFixed(2) : (order.total * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Reorder Button */}
              <div className={`p-6 pt-0`}>
                <Link 
                  to="/menu" 
                  className={`inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reorder
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Menu */}
        <div className="text-center mt-8">
          <Link to="/menu" className="btn-secondary inline-block">
            Order More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orders;
