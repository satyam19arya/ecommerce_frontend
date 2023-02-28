import React, { useEffect, useState } from 'react';
import './Categories.scss';
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
import logo from '../../assets/srmlogo.png';

const Categories = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState('');
  const categories = useSelector((state) => state.categoryReducer.categories);
  const [products, setProducts] = useState([]);


//   const categoryList = [
//     {
//         id: "posters",
//         value: "Posters",
//     },
//     {
//         id: "anime",
//         value: "Anime",
//     },
//     {
//         id: "coding",
//         value: "Coding",
//     }
// ];

async function fetchProducts() {
  const url = params.categoryId
      ? `/products?populate=image&filters[category][key][$eq]=${params.categoryId}`
      : `/products?populate=image`;
  const response = await axiosClient.get(url);
  // console.log(response);
  setProducts(response.data.data);
}

useEffect(() => {
  setCategoryId(params.categoryId);
  fetchProducts();  // eslint-disable-next-line 
}, [params]) 

function updateCategory(e) {
  navigate(`/category/${e.target.value}`);
}

  return (
    <div className="Categories">
      <div className="container">

        <div className="header">
          <div className="info">
              <h2>Taste that makes you go yummmmm🤤</h2>
              <p>I like people who love to eat. They are the best kind of people in the world. Good food never fails in bringing people together.</p>
          </div>
          <div className="logo">
             <a href="https://www.srmup.in/" target="__blank"><img src={logo} alt=""/></a>
          </div>
        </div>

        <div className='content'>
          <div className="filter-box">
            <div className="category-filter">
                <h3>Category</h3>
                {categories.map((item) => (
                    <div key={item.id} className='filter-radio'>
                        <input name="category" type="radio" value={item.attributes.key} id={item.id} onChange={updateCategory} checked={item.attributes.key === categoryId}/>
                        <label htmlFor={item.id}>{item.attributes.title}</label>
                    </div>
                ))}
                {/* <div className='filter-radio'>
                   <input name="category" type="radio" id="tv-shows"/>
                   <label htmlFor="tv-shows">TV Shows</label>
                </div>
                <div className='filter-radio'>
                   <input name="category" type="radio" id="sports"/>
                   <label htmlFor="sports">Sports</label>
                </div> */}
            </div>
          </div>
          <div className="products-box">
              {products.map((product) => (
                  <Product key={product.id} product={product} />
              ))}
           </div>
        </div>

      </div>
    </div>
  )
}

export default Categories;