import React, { useEffect, useState } from "react";
import "../Styles/Homepage.css";
import Navbar from "./Navbar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

function Homepage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("this is product", product);
  };

  return (
    <div>
      <Navbar />
      <section className="body">
        <h1>All Items</h1>
        <div className="items-container">
          {products &&
            products.length > 0 &&
            products.map((product) => {
              const {id, price, title, description, thumbnail} = product;
              return (
                <div key={id} className="item">
                  <div className = "img-div"><img src={thumbnail} alt={description} /></div>
                  <span className="title">{title}</span>
                  <span className="price">Price : ${price}</span>
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
