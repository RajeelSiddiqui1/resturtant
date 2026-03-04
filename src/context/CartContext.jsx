import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('mh-restaurant-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('mh-restaurant-orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    localStorage.setItem('mh-restaurant-cart', JSON.stringify(cartItems));
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('mh-restaurant-orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const checkout = (customerDetails = null) => {
    if (cartItems.length === 0) return;

    const newOrder = {
      id: `ORD-${Date.now()}`,
      items: [...cartItems],
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      totalWithTax: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) * 1.1,
      date: new Date().toISOString(),
      status: 'Completed',
      customer: customerDetails || null,
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    clearCart();
    return newOrder;
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
