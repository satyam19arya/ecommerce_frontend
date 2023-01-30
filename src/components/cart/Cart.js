import React from 'react';
import './Cart.scss';
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartItem from "../cartItem/CartItem";

const Cart = ({onClose}) => {
  return (
    <div className="Cart">
       <div className="overlay" onClick={onClose}></div>
         <div className="cart-content">
            <div className="header">
                <h3>Your Cart</h3>
                <div className="close-btn" onClick={onClose}>
                    <AiOutlineCloseCircle /> Close
                </div>
            </div>

            <div className="cart-items">
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>

            <div className="checkout-info">
                  <div className="total-amount">
                      <h3 className="total-message">Total:</h3>
                      <h3 className="total-value">₹ 500</h3>
                  </div>
                  <div className="checkout btn-primary">Checkout now</div>
            </div>
         </div>
    </div>
  )
}

export default Cart;