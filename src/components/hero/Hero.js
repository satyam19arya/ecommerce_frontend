import React from 'react';
import './Hero.scss';
import { useNavigate } from "react-router";

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <div data-aos="zoom-in" className="Hero">
        <div className="hero-content center">
                <h2 className="heading">Order Tasty & Fresh Food anytime</h2>
                <p className="subheading">Our job is to filling your tummy with delicious food with fast and free delivery.  Just confirm your order and enjoy our delicious fastest delivery.</p>
                <button onClick={() => navigate('/category')} className="cta btn-primary">Explore more</button>
            </div>
    </div>
  )
}

export default Hero;