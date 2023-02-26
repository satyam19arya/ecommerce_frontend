import React, { useEffect, useState } from "react";
import './ProductDetail.scss';
// import dummyImg from "../../assets/naruto.jpeg";
import { useParams } from "react-router";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

const  ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartReducer.cart);
  const quantity = cart.find(item => item.key === params.productId)?.quantity || 0;

  async function fetchData() {
      const productResponse = await axiosClient.get(`/products?filters[key][$eq]=${params.productId}&populate=*`);
      if (productResponse.data.data.length > 0) {
        setProduct(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
      setProduct(null);
      fetchData(); // eslint-disable-next-line
  }, [params]); 

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">

          <div className="product-img">
              <img src={product?.attributes.image.data.attributes.url} alt="product img"/>
          </div>

          <div className="product-info">
              <h1 className="heading">{product?.attributes.title}</h1>
              <h3 className="price">₹ {product?.attributes.price}</h3>
              <p className="description">{product?.attributes.desc}</p>

              <div className="cart-options">
                  <div className="quantity-selector">
                        <span className="btn decrement" onClick={() => dispatch(removeFromCart(product))}>-</span>
                        <span className="quantity">{quantity}</span>
                        <span className="btn increment" onClick={() => dispatch(addToCart(product))}>+</span>
                  </div>
                  <button className="btn-primary add-to-cart" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              </div>

              <div className="return-policy">
                  <ul>
                    <li>This item is made to order and once ordered it can't be cancelled.</li>
                    <li>Since this item is cooked on demand especially for you, it is not eligible for cancellations and returns. Read our Return Policy</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;