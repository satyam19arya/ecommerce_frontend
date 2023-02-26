import React from 'react';
import './Footer.scss';
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter} from "react-icons/ai";
import creditCardImg from '../../assets/creditcardicons.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="content">
            <div className="footer-left">
                <h3 className="title">Follow us</h3>
                <ul className="follow">
                      <li className="hover-link">
                          <AiOutlineInstagram />
                      </li>
                      <li className="hover-link">
                          <AiOutlineFacebook />
                      </li>
                      <li className="hover-link">
                          <AiOutlineTwitter />
                      </li>
                      <li className="hover-link">
                          <AiOutlineMail />
                      </li>
                  </ul>
             </div>

             <div className="middle">
                <h3 className="title">Links</h3>
                <ul className="company">
                    <li className="hover-link">
                        <Link className="footer-link" to="/">About us</Link>
                    </li>
                    <li className="hover-link">
                        <Link className="footer-link" to="/category">Catogories</Link>
                    </li>
                    <li className="hover-link">
                        <Link className="footer-link" to="/">Android App</Link>
                    </li>
                    <li className="hover-link">
                        <Link className="footer-link" to="/">Github link</Link>
                    </li>
                </ul>
             </div>

              <div className="footer-right">
                    <h3 className="title">Company</h3>
                    <ul className="company">
                        <li className="hover-link">
                           <Link className="footer-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="hover-link">
                           <Link className="footer-link" to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li className="hover-link">
                           <Link className="footer-link" to="/return-policy">Returns Policy</Link>
                        </li>
                        <li className="hover-link">
                           <Link className="footer-link" to="/terms">Terms & Conditions</Link>
                        </li>
                    </ul>
              </div>
        </div>

          <div className="subfooter center">
              <div className="credit-card-img">
                  <img src={creditCardImg} alt="credit card img" />
              </div>
              <p>By continuing past this page, you agree to our Terms of Service, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.</p>
              <p>Copyright {new Date().getFullYear()} © <strong>SRM Restro</strong></p>
          </div>
      </div>
    </div>
  )
}

export default Footer;