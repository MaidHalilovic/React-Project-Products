import React from "react";
import "./oneProduct.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

function OneProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className='Maincontainer'>
      <div className='header'>
        <h1>One Product</h1>
      </div>
      {product ? (
        <div className='product-details'>
          <h1>Id: {product.id}</h1>
          <h2>Title: {product.title}</h2>
          <h3>Price: {product.price}</h3>
          <h4>Category: {product.category}</h4>
          <p>
            <b>Description:</b> {product.description}
          </p>
          <button onClick={() => navigate("/SeeMore")}>Go back</button>
        </div>
      ) : (
        <p>No product</p>
      )}
    </div>
  );
}

export default OneProduct;
