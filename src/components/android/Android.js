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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus aliquam quod quis quibusdam ullam repellendus quas facere dicta praesentium.</p>
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