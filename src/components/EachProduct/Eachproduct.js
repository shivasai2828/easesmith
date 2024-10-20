import React, { useContext, useState } from "react";
import "./Eachproduct.css";
import { CartContext } from "../../CartContext";
import popumImg from "../../assets/popup-img.png";
const Eachproduct = ({ each }) => {
  const { cart, addToCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const ClickedBtn = () => {
    addToCart(each);
    console.log(cart);
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false); // Close the popup
  };
  return (
    <div key={each.id} className="each-product">
      <img src={each.image} alt="img" />

      <div>
        <h1> {each.name}</h1>
        <h4 className="each-product-price">
          <span className="old-price-span">Rs:399 </span> Rs: {each.price}
        </h4>
        <div>
          <button className="add-cart-btn" onClick={ClickedBtn}>
            Add To Cart
          </button>
          <button className="view-btn">View Product</button>
        </div>
      </div>
      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Congratulations</h2>
            <p className="color-green" >Order Placed!</p>
            <img src={popumImg} alt="popimg" />
            <p>
              Thank you for choosing our services. We will get in touch with you
              soon!
            </p>
            <button onClick={closePopup}>Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Eachproduct;
