import React from 'react';
import './Android.scss';
import phone from "../../assets/phones.png";
import google from "../../assets/1.svg";
import app from "../../assets/2.svg";

const Android = () => {
  return (
      <div className="download-app">
          <div className="container">
            <div className="android">
                <div className="heading">
                    <h1>Download our mobile app</h1>
                    <p>Our android app is currently in development and once released we will notify you. Please subscribe to our newsletter for latest updates and offers. Thank you for using our website.</p>
                    <div>
                      <a href="ff" className='store'><img src={google} alt=""/></a>
                      <a href="ff"><img src={app} alt=""/></a>
                    </div>
                </div>
              
                <div className='img-container'>
                  <img className='img' src={phone} alt="" />
                </div>
            </div>
          </div>
      </div>
  )
}

export default Android;