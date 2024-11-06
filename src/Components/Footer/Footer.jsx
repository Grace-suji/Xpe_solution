import React from 'react'
import "./Footer.css"
import logo_3 from "../../assets/logo-3.png"

const Footer = () => {
  return (
    <div>
      <footer>
  <div class="footer-container">
    <div class="footer-logo">
      <img src={logo_3} alt="Ximsa Logo"/>
      <p> Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua susene </p>
      <div class="footer-social">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    
    <div class="footer-links">
      <div class="footer-column">
        <h3>Services</h3>
        <ul>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">SEO Optimizations</a></li>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Business Analysis</a></li>
          <li><a href="#">Market Research</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Services</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Need a Career?</a></li>
        </ul>
      </div>
      <div class="footer-column">
      <h3></h3>
      <br></br>
        <ul>
          <li><a href="mailto:support@gmail.com">Latest news</a></li>
          <li><a href="tel:+012345678">Our services</a></li>
          <li><a href="#">Exprt Team</a></li>
          <li><a href="#">Clients say</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Get In Touch</h3>
        <ul>
          <li><a href="mailto:support@gmail.com">support@gmail.com</a></li>
          <li><a href="tel:+012345678">Call: +012 (345) 678</a></li>
          <li><a href="#">55 Main Street, New York</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2022 Ximsa. All rights reserved</p>
  </div>
</footer>


    </div>
  )
}

export default Footer
