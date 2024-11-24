import React, { useEffect, useState } from "react";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");

      console.log(data);

      const product = await data;

      setProduct(product);
    } catch (error) {
      console.error("error while fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='MainContainer'>
      <div className='Header'>
        <h1>Products</h1>
        <button onClick={() => navigate("/SeeMore ")}>See More</button>
      </div>
      <div className='Navbar'>
        <h1>Navbar</h1>

        {product.map((el, index) => (
          <div key={index}>
            <h1>{el.id}</h1>
          </div>
        ))}
      </div>
      <div className='Footer'>
        <h1>footer</h1>
      </div>
    </div>
  );
}

export default HomePage;
