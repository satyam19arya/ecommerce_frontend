import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/Cart";
// import { useSelector } from "react-redux";


const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  // const categories = useSelector((state) => state.categoryReducer.categories);

  return (
    <>
      <nav className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
              <ul className="link-group">
                    {/* {categories?.map((category) => (
                            <li className="hover-link" key={category.id}>
                                <Link className="link" to={`/category/${category.attributes.key}`}>{category.attributes.title}</Link>
                            </li>
                    ))} */}
                    <li className="hover-link">
                          <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="hover-link">
                          <Link className="link" to="/category">Categories</Link>
                    </li>
                    <li className="hover-link">
                          <Link className="link" to="/contact">Contact us</Link>
                    </li>
              </ul>
          </div>

          <div className="nav-center">
                <Link to="/"><h1 className="banner">E-commerce</h1></Link>
          </div>

          <div className="nav-right">
            <div className="nav-cart hover-link" onClick={() => setOpenCart(!openCart)}>
                <BsCart2 className="icon" />
                <span className="cart-count center">99</span>
            </div>   
          </div>
        </div>
      </nav>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  )
}

export default Navbar;