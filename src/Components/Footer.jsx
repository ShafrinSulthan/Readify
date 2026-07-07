import React from "react";
import logo from "../assets/logo.png";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="readify-footer mt-5">
  <div className="container py-5">
    <div className="row gy-4">

      {/* About */}
      <div className="col-lg-5 col-md-12">
        <img src={logo} alt="Readify" className="footer-logo" />

        <p className="footer-desc">
          Readify is your trusted online bookstore where readers discover
          fiction, self-help, educational books, biographies and many more at
          affordable prices.
        </p>

        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-lg-7">
        <div className="row">

          {/* Quick Links */}
          <div className="col-6 col-md-4">
            <h5>Quick Links</h5>

            <a href="#">Home</a>
            <a href="#">Books</a>
            <a href="#">Categories</a>
            <a href="#">Best Sellers</a>
            <a href="#">Offers</a>
            <a href="#">Contact</a>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-4">
            <h5>Categories</h5>

            <a href="#">Fiction</a>
            <a href="#">Self Help</a>
            <a href="#">Business</a>
            <a href="#">Biography</a>
            <a href="#">Kids</a>
            <a href="#">Comics</a>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 mt-4 mt-md-0">
            <h5>Contact Us</h5>
            <p><i className="fa-solid fa-location-dot"></i> Chennai, Tamil Nadu</p>
            <p><i className="fa-solid fa-phone"></i> +91 9876543210</p>
            <p><i className="fa-solid fa-envelope"></i>support@readify.com</p>
          </div>

          {/* Subscribe */}
          <div className="col-12 mt-4">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email"/>
              <button className="btn subscribe-btn">Subscribe</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

  <div className="footer-bottom">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p> © 2026 Readify. All Rights Reserved - Designed by<span className="highlingh"> Shafrin.</span></p>
      <div>
        <a href="#">Terms & Conditions</a>
        <span className="mx-2">|</span>
        <a href="#">Privacy Policy</a>
      </div>

    </div>
  </div>
</footer>
  );
};

export default Footer;