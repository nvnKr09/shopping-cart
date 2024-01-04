import React from "react";
import Navbar from "./Navbar";
import "../Styles/MyCart.css";
import { useDispatch, useSelector } from "react-redux";
import { checkout, removeFromCart } from "../redux/actions/cartActions";

function MyCart() {
  const cartData = useSelector((state) => state.cart);

  console.log(typeof cartData, cartData);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleCheckout = () => {
    dispatch(checkout());

    alert("Items have been checked out successfully!");
  };

  return (
    <div>
      <Navbar />
      <div className="body1">
        <h1>My Cart</h1>
        {cartData && cartData.length > 0 && <div></div>}
        <div className="item-cart-div">
          <div className="items-container1">
            {cartData &&
              cartData.length > 0 &&
              cartData.map((product) => {
                const { id, price, title, description, thumbnail } = product;
                return (
                  <div key={id + description} className="item">
                  <div className = "img-div"><img src={thumbnail} alt={description} /></div>
                    <span className="title">{title}</span>
                    <span className="price">Price : ${price}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFromCart(product)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                );
              })}
          </div>
          {cartData && cartData.length > 0 ? (
            <div className="cart">
              <p>Checkout List</p>
              <div className="cart-list">
                {cartData.map((item, index) => {
                  return (
                    <div key={item.id} className="row">
                      <div>
                        <span className="product">
                          {index + 1}. {item.title}
                        </span>
                      </div>
                      <span className="price">${item.price}</span>
                    </div>
                  );
                })}
                <div className="total row">
                  <span>Total</span>
                  <span>
                    ${cartData.reduce((sum, obj) => sum + obj.price, 0)}
                  </span>
                </div>
                <button type="button" onClick={handleCheckout}>
                  Click to Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="emptyMsg">Cart is empty !</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCart;
