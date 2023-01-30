import React, { useEffect, useState } from 'react';
import './Categories.scss';
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router";

const Categories = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState('');

  const categoryList = [
    {
        id: "posters",
        value: "Posters",
    },
    {
        id: "anime",
        value: "Anime",
    },
    {
        id: "coding",
        value: "Coding",
    },
    {
      id: "mugs",
      value: "Mugs",
    },
    {
      id: "cloud",
      value: "Cloud",
    },
    {
      id: "webdev",
      value: "Webdev",
    }
];

useEffect(() => {
  setCategoryId(params.categoryId);
  //api call 
}, [params])

function updateCategory(e) {
  navigate(`/category/${e.target.value}`);
}

  return (
    <div className="Categories">
      <div className="container">

        <div className="header">
          <div className="info">
              <h2>Explore All Print and Artwork</h2>
              <p>India's largest collection of wall posters for your bedroom, living room, kids room, kitchen and posters & art prints at highest quality lowest price guaranteed</p>
          </div>
        </div>

        <div className='content'>
          <div className="filter-box">
            <div className="category-filter">
                <h3>Category</h3>
                {categoryList.map((item) => (
                    <div key={item.id} className='filter-radio'>
                        <input name="category" type="radio" value={item.id} id={item.id} onChange={updateCategory} checked={item.id === categoryId}/>
                        <label htmlFor={item.id}>{item.value}</label>
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
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
           </div>
        </div>

      </div>
    </div>
  )
}

export default Categories;