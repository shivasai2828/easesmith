// CartContext.js
import React, { createContext, useState } from "react";
import productimgOne from "./assets/product-img-one.png";
import productimgTwo from "./assets/product-img-two.png";
import productimgThree from "./assets/product-img-three.png";

// Create the context
export const CartContext = createContext();
// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
