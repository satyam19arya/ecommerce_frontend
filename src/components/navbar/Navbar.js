import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import { TbSearch } from "react-icons/tb";
import Search from "../search/Search";


const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  // const categories = useSelector((state) => state.categoryReducer.categories);
  const cart = useSelector(state => state.cartReducer.cart);
  let totalItems = 0;
  cart.forEach(item => totalItems += item.quantity);

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
                <Link to="/"><h2 className="banner">SRM Restaurant</h2></Link>
          </div>

          <div className="nav-right">
            <div className="center search hover-link" onClick={() => setOpenSearch(!openSearch)}>
                <TbSearch/>
            </div>
            <div className="nav-cart hover-link" onClick={() => setOpenCart(!openCart)}>
                <BsCart2 className="icon" />
                {totalItems > 0 && <span className="cart-count center">{totalItems}</span>}
            </div>   
          </div>
        </div>
      </nav>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
      {openSearch && <Search onClose={() => setOpenSearch(false)} />}
    </>
  )
}

export default Navbar;