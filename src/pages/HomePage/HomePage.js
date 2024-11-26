import React, { useEffect, useState } from "react";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );

      console.log(data);
      if (data.products.length > 0) {
        setProduct(data.products);
      } else {
        console.error("no products");
      }
    } catch (error) {
      console.error("error while fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='MainContainer'>
      <div className='Navbar'>
        <h1>Navbar</h1>
        <div className='cards'>
          {product.map((el, index) => (
            <div key={index} className='card'>
              <h1>Id:{el.id}</h1>
              <h2>
                <b>Title:</b>
                {el.title}
              </h2>
              <h3>Price-{el.price}</h3>
              <h3>Category:{el.category}</h3>
              <p>
                <b>Description:</b>
                {el.description}
              </p>
              <button onClick={() => navigate("/SeeMore ")}>See More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
