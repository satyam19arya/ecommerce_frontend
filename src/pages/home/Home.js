import React, { useEffect, useState } from "react";
import './Home.scss';
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import { useSelector } from "react-redux";
import Android from "../../components/android/Android";
import Newsletter from "../../components/newsletter/Newsletter";

const Home = () => {
    // const [categories, setCategories] = useState(null);
    const [topProducts, setTopProducts] = useState(null);
    const categories = useSelector((state) => state.categoryReducer.categories);

    async function fetchData(){
        // const categoryResponse = await axiosClient.get('/categories?populate=image');
        const topProductsResponse = await axiosClient.get('/products?filters[isTopPick][$eq]=true&populate=image')

        // console.log(categoryResponse);
        // console.log(topProductsResponse);

        // setCategories(categoryResponse.data.data);
        setTopProducts(topProductsResponse.data.data);
    }

    useEffect(() =>{
        fetchData();
    }, []);

  return (
    <div className="Home">
        <Hero />
        <section className="collection container">
            <div className="info">
                <h2 className="heading">Order By Categories</h2>
                <p className="subheading">Order from the best, our T-shirts and Posters Collection</p>
            </div>
            <div className="content">
                {categories?.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </div>
        </section>

        <section className="collection container">
            <div className="info">
                <h2 className="heading">Our Top Picks</h2>
                <p className="subheading"> All New Designs, Same Old Details</p>
            </div>
            <div className="content">
                {topProducts?.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </section>

        <section id="book-food">
            <div className="book-food">
                <div className="container">
                <div className="text-center">
                    <div className="heading">
                        <h2>Want to know about us?</h2>
                    </div>
                    <div className="sub-heading">
                    <button className="btn-primary">Click here</button>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <Android/>
        <Newsletter/>
    </div>
  )
}

export default Home;