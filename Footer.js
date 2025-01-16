import React from "react";
import "./Footer.css";
import FudoLogo from "./images/Trog_symbol.jpg";
import FacebookIcon from "./images/facebook.png";
import InstagramIcon from "./images/Instagram.png";
import TwitterIcon from "./images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Section: Logo and Description */}
      <div className="footer-logo-section">
        <img src={FudoLogo} alt="Fudo Logo" className="footer-logo" />
        <p className="footer-description">
          Fudo is committed to bringing you the best food with fast and reliable delivery.
          Your satisfaction is our top priority.
        </p>
        <div className="footer-social-icons">
          <img src={FacebookIcon} alt="Facebook" className="social-icon" />
          <img src={InstagramIcon} alt="Instagram" className="social-icon" />
          <img src={TwitterIcon} alt="Twitter" className="social-icon" />
        </div>
      </div>

      {/* Right Section: Columns */}
      <div className="footer-columns">
        {/* About Column */}
        <div className="footer-column">
          <h3>About</h3>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>News</li>
            <li>Menu</li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>Why Fudo?</li>
            <li>Partner With Us</li>
            <li>Careers</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Licenses</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
