import React from 'react';
import './Hero.scss';
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="Hero">
        <div className="hero-content center">
                <h2 className="heading">Order Tasty & Fresh Food anytime</h2>
                <p className="subheading">Our job is to filling your tummy with delicious food with fast and free delivery</p>
                <button onClick={() => navigate('/category')} className="cta btn-primary">Explore more</button>
            </div>
    </div>
  )
}

export default Hero;