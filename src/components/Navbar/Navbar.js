import React, { useContext } from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import companyLogo from "../../assets/company-logo.png"; // Assuming companyLogo is a local image file
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    // tl.from(".companylogo", {
    //   x: 200,
    //   duration: 2,
    // });
    tl.from(" .company-name-span, .nav-link, .span-cart-profile", {
      y: -200,
      duration: 2,
      stagger: 0.2,
      ease: "power3.out",
    });
    tl.from(".top-text-nav-2, .top-text-nav-1", {
      x: 700,
      duration: 3,
      stagger: 0.2,
      ease: "power3.out",
    });
  });
  const { cart } = useContext(CartContext);
  return (
    <div className="nav-bar">
      <div className="nav-main-wrapper" >
        <div className="nav-top-bg">
          <div className="nav-top-container">
            <h4 className="top-text-nav-1">
              Free Shipping on orders above 999/-
            </h4>
            <h4 className="top-text-nav-2">call us on: +918500548260</h4>
          </div>
        </div>
        <div className="nav-main-container">
          <div className="nav-logo-box">
            <img src={companyLogo} alt="companylogo" />
            <span className="company-name-span">Chaperone</span>
          </div>
          <ul className="nav-links-container">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link active-tab">
              <Link to="/">Plants&Pots</Link>
            </li>
            <li className="nav-link">Tools</li>
            <li className="nav-link">Our Services</li>
            <li className="nav-link">Our Story</li>
            <li className="nav-link">FAQs</li>
          </ul>
          <div className="nav-last-box">
            <div className="nav-col-box">
              <CgProfile className="react-icons-nav" />
              <span className="span-cart-profile">My Profile</span>
            </div>
            <Link to="/cart">
              <div className="nav-col-box">
                <FiShoppingCart className="react-icons-nav-2" />
                <div className="cart-nums-box">
                  <span className="cart-nums">{cart.length}</span>
                </div>

                <span className="span-cart-profile">Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
