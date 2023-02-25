import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="container">
            <div className="heading">
                <h1>Hurry Up! Subscribe Our Newsletter</h1>
                <p className="latest">Get Latest updates and offers</p>
            </div>
            <div className="form">
                <div>
                   <input className="form-control" placeholder="Enter your email here" name="email" type="email"/>
                </div>
                <div>
                   <button className="btn-primary">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter;