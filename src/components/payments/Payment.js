import React from "react";
import './Payment.scss';
import { useParams } from "react-router";
import {BsFillCartCheckFill} from 'react-icons/bs'
import {BiErrorCircle} from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/slices/cartSlice";

function Payments() {
    const params = useParams();
    const status = params.status;
    const dispatch = useDispatch();

    const infoData = {
        success: {
            message: "Hurrah! Your order has been placed",
            cta: 'Thank you for using our website',
            icon: <BsFillCartCheckFill />,
        },
        failed: {
            message: "Payment Failed",
            cta: 'Try Again',
            icon: <BiErrorCircle />,
        },
    };

    if(status === 'success') {
        dispatch(resetCart())
    }

    return (
        <div className="Payments">
            <div className="icon">{infoData[status].icon}</div>
            <h2 className="message">{infoData[status].message}</h2>
            <p>{infoData[status].cta}</p>
        </div>
    );
}

export default Payments;