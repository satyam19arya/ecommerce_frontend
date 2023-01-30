import React from 'react';
import './CartItem.scss';
import dummyImage from '../../assets/naruto.jpeg';
import { AiOutlineClose } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="CartItem">
        <div className="item-img">
           <img src={dummyImage} alt="" />
        </div>

        <div className="item-info-wrapper">
            <div className="item-info">
                <p className="title">Books</p>
                <p className="price">₹ 200</p>
                <div className="quantity-selector">
                    <span className="btn decrement">-</span>
                    <span className="quantity">2</span>
                    <span className="btn increment">+</span>
                </div>
                <p className="total-price">Subtotal: ₹ 500</p>
            </div>
            <div className="item-remove">
                <AiOutlineClose />
            </div>
        </div>
    </div>
  )
}

export default CartItem;