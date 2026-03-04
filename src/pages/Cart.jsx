import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../App';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { isDark } = useTheme();
  const { cartItems, cartTotal, removeFromCart, updateQuantity, clearCart, checkout } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    specialInstructions: '',
    paymentMethod: 'cash',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP Code is required';
    
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardExpiry.trim()) newErrors.cardExpiry = 'Expiry date is required';
      if (!formData.cardCvv.trim()) newErrors.cardCvv = 'CVV is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsCheckingOut(true);
      setTimeout(() => {
        checkout(formData);
        setIsCheckingOut(false);
        setShowCheckoutForm(false);
        navigate('/orders');
      }, 2000);
    }
  };

  if (cartItems.length === 0 && !showCheckoutForm) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 dark:bg-dark-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className={`w-12 h-12 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Your cart is empty
            </h2>
            <p className={`mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Looks like you haven't added any items to your cart yet.
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
        <div className="mb-8">
          <h1 className={`text-3xl md:text-4xl font-display font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Shopping <span className="text-primary-500">Cart</span>
          </h1>
          <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {showCheckoutForm ? (
          // CHECKOUT FORM
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleCheckout} className={`p-6 rounded-2xl ${isDark ? 'bg-dark-300' : 'bg-white shadow-lg'}`}>
                <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Checkout Details
                </h2>

                {/* Personal Info */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Delivery Address
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.address ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                        placeholder="123 Main Street, Apt 4B"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                        placeholder="New York"
                      />
                      {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.zipCode ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                        placeholder="10001"
                      />
                      {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        name="specialInstructions"
                        value={formData.specialInstructions}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                        placeholder="Gate code, landmark, delivery preferences..."
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Payment Method
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <label className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'cash' 
                        ? 'border-primary-500 bg-primary-500/10' 
                        : isDark ? 'border-dark-400' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === 'cash'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          formData.paymentMethod === 'cash' ? 'bg-primary-500 text-white' : isDark ? 'bg-dark-400' : 'bg-gray-100'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Cash on Delivery
                          </p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            Pay when you receive
                          </p>
                        </div>
                      </div>
                    </label>
                    <label className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.paymentMethod === 'card' 
                        ? 'border-primary-500 bg-primary-500/10' 
                        : isDark ? 'border-dark-400' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          formData.paymentMethod === 'card' ? 'bg-primary-500 text-white' : isDark ? 'bg-dark-400' : 'bg-gray-100'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Credit/Debit Card
                          </p>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            Pay online securely
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Card Details */}
                  {formData.paymentMethod === 'card' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-400">
                      <div className="md:col-span-2">
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.cardNumber ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Expiry *
                        </label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.cardExpiry ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                        {errors.cardExpiry && <p className="text-red-500 text-sm mt-1">{errors.cardExpiry}</p>}
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.cardCvv ? 'border-red-500' : isDark ? 'border-dark-400' : 'border-gray-300'} ${isDark ? 'bg-dark-400 text-white' : 'bg-white text-gray-900'} focus:outline-none focus:border-primary-500`}
                          placeholder="123"
                          maxLength={4}
                        />
                        {errors.cardCvv && <p className="text-red-500 text-sm mt-1">{errors.cardCvv}</p>}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowCheckoutForm(false)}
                    className={`flex-1 py-3 px-6 rounded-lg border-2 transition-colors ${
                      isDark 
                        ? 'border-dark-400 text-gray-300 hover:bg-dark-400' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Back to Cart
                  </button>
                  <button
                    type="submit"
                    disabled={isCheckingOut}
                    className={`flex-1 btn-primary ${isCheckingOut ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isCheckingOut ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className={`lg:col-span-1`}>
              <div className={`sticky top-24 p-6 rounded-2xl ${isDark ? 'bg-dark-300' : 'bg-white shadow-lg'}`}>
                <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Order Summary
                </h2>

                <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-grow">
                        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.name}
                        </p>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {item.quantity} x ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className={`border-t ${isDark ? 'border-dark-400' : 'border-gray-200'} pt-4 space-y-2`}>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Subtotal</span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Tax (10%)</span>
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>${(cartTotal * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Delivery</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className={`border-t ${isDark ? 'border-dark-400' : 'border-gray-200'} pt-2`}>
                    <div className="flex justify-between">
                      <span className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Total</span>
                      <span className="font-bold text-xl text-primary-500">
                        ${(cartTotal * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // CART VIEW
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    isDark ? 'bg-dark-300 hover:bg-dark-400' : 'bg-white hover:shadow-lg'
                  }`}
                  style={{
                    animation: 'fadeIn 0.5s ease-out forwards',
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.name}</h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.category}</p>
                    <p className="text-primary-500 font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className={`w-8 h-8 rounded-full ${isDark ? 'bg-dark-400' : 'bg-gray-100'} flex items-center justify-center`}>-</button>
                    <span className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className={`w-8 h-8 rounded-full ${isDark ? 'bg-dark-400' : 'bg-gray-100'} flex items-center justify-center`}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className={`p-2 rounded-full ${isDark ? 'hover:bg-red-500/20 text-gray-400 hover:text-red-500' : 'hover:bg-red-100 text-gray-400 hover:text-red-500'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                  <div className="text-right">
                    <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
              <button onClick={clearCart} className={`text-sm ${isDark ? 'text-gray-400 hover:text-red-500' : 'text-gray-500 hover:text-red-500'}`}>Clear Cart</button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className={`sticky top-24 p-6 rounded-2xl ${isDark ? 'bg-dark-300' : 'bg-white shadow-lg'}`}>
                <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Order Summary</h2>
                <div className={`space-y-2 mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex justify-between"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Tax (10%)</span><span>${(cartTotal * 0.1).toFixed(2)}</span></div>
                  <div className="flex justify-between"><span>Delivery</span><span className="text-green-500">Free</span></div>
                </div>
                <div className={`border-t ${isDark ? 'border-dark-400' : 'border-gray-200'} pt-4 mb-6`}>
                  <div className="flex justify-between mb-2"><span className="font-bold text-lg">Total</span><span className="font-bold text-xl text-primary-500">${(cartTotal * 1.1).toFixed(2)}</span></div>
                </div>
                <button onClick={() => setShowCheckoutForm(true)} className="w-full btn-primary">Proceed to Checkout</button>
                <Link to="/menu" className={`block text-center mt-4 ${isDark ? 'text-gray-400 hover:text-primary-400' : 'text-gray-600 hover:text-primary-500'}`}>Continue Shopping</Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes fadeIn {from {opacity: 0; transform: translateY(10px);} to {opacity: 1; transform: translateY(0);}}`}</style>
    </div>
  );
};

export default Cart;
