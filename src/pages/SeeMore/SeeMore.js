import "./seeMore.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function SeeMore() {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    } catch (error) {
      console.error("error while fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='MainContainer'>
      <div className='header'>
        <h1>All Products</h1>
      </div>
      <div className='cards'>
        {products.map((el, index) => (
          <div key={index} className='card'>
            <h1>Id: {el.id}</h1>
            <h2>
              <b>Title:</b> {el.title}
            </h2>
            <h3>Price: {el.price}</h3>
            <h3>Category: {el.category}</h3>
            <p>
              <b>Description:</b> {el.description}
            </p>
            <button
              onClick={() =>
                navigate("/OneProduct", {
                  state: { product: el },
                })
              }
            >
              See Product
            </button>
            <button onClick={() => navigate("/")}>Go back</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeMore;
