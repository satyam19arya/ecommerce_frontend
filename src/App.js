import { useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./pages/categories/Categories";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { fetchCategories } from "./redux/slices/categorySlice";
import {useDispatch} from 'react-redux'
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Terms from './pages/terms/Terms';
import Return from './pages/return/Return';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <Navbar />
      <main>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/category/:categoryId?" element={<Categories />}/>
             <Route path="/products/:productId" element={<ProductDetail />}/>
             <Route path="/contact" element={<Contact />}/>
             <Route path="/privacy-policy" element={<Privacy />}/>
             <Route path="/return-policy" element={<Return />}/>
             <Route path="/terms" element={<Terms />}/>
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;