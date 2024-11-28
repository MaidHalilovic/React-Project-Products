import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header({ products }) {
  const navigate = useNavigate();

  return (
    <div className='Header'>
      <h1>Products</h1>
      <button
        onClick={() => navigate("/SeeMore", { state: { products: products } })}
      >
        See More
      </button>
    </div>
  );
}

export default Header;
