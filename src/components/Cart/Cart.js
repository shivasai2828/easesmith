// Cart.js
import React, { useContext } from "react";
import { CartContext } from "../../CartContext";
import "./Cart.css";
import productimgOne from "../../assets/product-img-one.png";
import productimgTwo from "../../assets/product-img-two.png";
import productimgThree from "../../assets/product-img-three.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Cart = () => {
  const { cart } = useContext(CartContext);
  // Calculate the total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <Navbar />
      <div className="cart-main">
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <ul className="cart-list-box">
              {cart.map((item, index) => (
                <li key={index} className="each-cart-product">
                  <img src={item.image} />
                  <h1>{item.name}</h1>
                  <h4>RS: {item.price}</h4>
                </li>
              ))}
            </ul>
            <h1>Total Price: {totalPrice}</h1>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
