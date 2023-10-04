import React, { useEffect, useState } from "react";
import './Search.scss';
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";

const Search = ({onClose}) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState("");

  const onChange = (e) => {
    setQuery(e.target.value);
  }

 async function fetchData() {
    const productResponse = await axiosClient.get(`/products?populate=*&filters[title][$contains]=${query}`);
    const data = productResponse.data.data;
    setData(data);
    // console.log(data);
 }

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, [query]);

  return (
    <div className="search-model">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for items...." value={query} onChange={onChange}/>
        <MdClose className="close-btn" onClick={() => onClose(false)}/>
      </div>

      <div className="search-result-content">
         {!data?.data?.length && (
            <div className="start-msg">
                Start typing to see items you are looking for👀
            </div>
          )}
        <div className="search-results">
           {data && data?.map((item) => (
             <div className="search-result-item" key={item.id} onClick={() => {navigate(`/products/${item.attributes.key}`); onClose(false)}}>
               <div className="image-container">
                  <img src={item.attributes.image.data.attributes.url} alt="img"/>
               </div>
               <div className="prod-details">
                  <span className="name">{item.attributes.title}</span>
                  <span className="desc">{item.attributes.desc}</span>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
};

export default Search;