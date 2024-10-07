import React from 'react';
import './Footer.css';
import logo from '../../_SAMPLE_DATA/stack-exchange-logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" className="footer-logo-img" />  
        </div>

        <div className="footer-navigator">
          <div className="footer-column">
            <h5 class="-title"><a href="/">STACK EXCHANGE</a></h5>
            <ul>
              <li><a class="-link" href="/">About</a></li>
              <li><a class="-link" href="/">Contact</a></li>
              <li><a class="-link" href="/">Feedback</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 class="-title"><a href="/">COMPANY</a></h5>
            <ul>
              <li><a class="-link" href="/">Stack Overflow</a></li>
              <li><a class="-link" href="/">Teams</a></li>
              <li><a class="-link" href="/">Advertising</a></li>
              <li><a class="-link" href="/">Talent</a></li>
              <li><a class="-link" href="/">Press</a></li>
              <li><a class="-link" href="/">Legal</a></li>
              <li><a class="-link" href="/">Privacy Policy</a></li>
              <li><a class="-link" href="/">Terms of Service</a></li>
              <li><a class="-link" href="/">Cookie Settings</a></li>
              <li><a class="-link" href="/">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 class="-title"><a href="/">STACK EXCHANGE NETWORK</a></h5>
            <ul>
              <li><a class="-link" href="/">Technology</a></li>
              <li><a class="-link" href="/">Culture & recreation</a></li>
              <li><a class="-link" href="/">Life & arts</a></li>
              <li><a class="-link" href="/">Science</a></li>
              <li><a class="-link" href="/">Professional</a></li>
              <li><a class="-link" href="/">Business</a></li>
              <li><a class="-link" href="/">API</a></li>
              <li><a class="-link" href="/">Data</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
            <ul>
              <li><a class="-link" href="/">Blog</a></li>
              <li><a class="-link" href="/">Facebook</a></li>
              <li><a class="-link" href="/">Twitter</a></li>
              <li><a class="-link" href="/">LinkedIn</a></li>
              <li><a class="-link" href="/">Instagram</a></li>
            </ul>
            <p>
              <span>Site design / logo © 2024 Stack Exchange Inc; user contributions licensed under CC BY-SA.</span>
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
