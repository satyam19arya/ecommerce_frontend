import { useEffect, useRef } from "react";
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
import LoadingBar from 'react-top-loading-bar';
import {useSelector} from 'react-redux';
import Payments from "./components/payments/Payment";
import { MessengerChat, showMessenger, hideMessenger, showDialog, hideDialog, setMessengerHeight } from 'react-messenger-customer-chat';

function App() {
  const dispatch = useDispatch();
  const loadingRef = useRef(null);
  const isLoading = useSelector( state => state.categoryReducer.isLoading);

  useEffect(() => {
    dispatch(fetchCategories())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(isLoading){
      loadingRef.current?.continuousStart();   
    }else{
      loadingRef.current?.complete();
    }
  }, [isLoading]);

  return (
    <div>
      <button onClick={() => {showMessenger(true)}}>show messenger</button>
      <button onClick={() => {hideMessenger()}}>hide messenger</button>
      <button onClick={() => {showDialog()}}>show dialog</button>
      <button onClick={() => {hideDialog()}}>hide dialog</button>
      <button onclick={() => {setMessengerBottomSpacing(100)}}>set chat 100px in bottom spacing</button>
      <MessengerChat pageId='1013991418744704' />
      <LoadingBar color='#5f9fff' height='4px' ref={loadingRef} />
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
             <Route path="/payments/:status" element={<Payments />}/>
          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;