import React from 'react';
import "./Footer.css"
import logo from "../assests/logotype.png"

export const Footer = () => {
  return (
    <div class="footer">
        <div class="footer-section">
            <div class="footer-items">
                <img src={logo} alt=""/>
                <p>There are many variations passages of
                Lorem Ipsum available, but the majority have</p>
            </div>
            <div class="footer-items">
                <h5>
                    Quick Links
                </h5>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>shop</li>
                    <li>contact</li>
                </ul>
            </div>
            <div class="footer-items">
                <h5>
                    Contact
                </h5>
                <p>
                    +99 (0) 101 0000 888 Patricia C.
                     Amedee 4401 Waldeck Street 
                     Grapevine Nashville, Tx 76051
                </p>
            </div>
            <div class="footer-items">
                <h5>
                    Subscribe To Our Email
                </h5>
                <h1>For Latest News & Updates</h1>
            </div>
        </div>
        <div class="foot-social">
            <div class="social-icons">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div class="email">
                <input type="text"/>
                <span>subscribe</span>
            </div>
        </div>
    </div>
  )
}

export default Footer;
