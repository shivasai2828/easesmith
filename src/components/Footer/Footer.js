import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-sections">
        <div>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut
            Necessibus Enim
          </p>
          <form>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div>
          <h3>ABOUT US</h3>
          <ul>
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Help & Support</li>
          </ul>
        </div>
        <div>
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>
        <div>
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>
        <div>
          <h3>GET IN TOUCH</h3>
          <address>
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
            <br />
            Call: +919952827272
            <br />
            Email: care@chaperoneplants.com
          </address>
        </div>
      </div>

      <div className="footer-chaperone">
        <h3>CHAPERONE</h3>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <div className="footer-socials">
          <p>Follow us on</p>
          <div className="social-icons">
            <i className="fab fa-instagram">
              <FaInstagram />{" "}
            </i>
            <i className="fab fa-facebook-f">
              {" "}
              <FaFacebook />{" "}
            </i>
            <i className="fab fa-youtube">
              <FaYoutube />
            </i>
            <i className="fab fa-linkedin-in">
              <FaLinkedin />
            </i>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
