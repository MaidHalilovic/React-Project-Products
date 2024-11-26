import React, { useEffect, useState } from "react";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function HomePage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );

      console.log(data);
      if (data && Array.isArray(data.products)) {
        setProduct(data.products);
      } else {
        console.error("there are no products");
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
      <div className='Header'>
        <h1>Products</h1>
        <button onClick={() => navigate("/SeeMore ")}>See More</button>
      </div>
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
      <div className='Footer'>
        <h3>For more information</h3>
        <div>
          <a href='https://github.com/MaidHalilovic' target='_blank'>
            <FaGithub size={35} color='black' />
          </a>
          <a href='https://instagram.com' target='_blank'>
            <FaInstagram size={35} color='black' />
          </a>
          <a href='https://twitter.com' target='_blank'>
            <BsTwitterX size={35} color='black' />
          </a>
          <a href='https://gmail.com' target='_blank'>
            <MdEmail size={35} color='black' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
