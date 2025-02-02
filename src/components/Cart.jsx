import React, { useEffect } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";

const Cart = ({ cart, setCart, setActiveTab }) => {
  const handleQuantityChange = (e, id) => {
    const { value } = e.target;
    const qty = parseInt(value) || 1;
    qty < 1 ? (qty = 1) : qty;
    // qty > 10 ? (qty = 10) : qty; max value should be 10 but is showing error

    setCart((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const handleRemove = (idToRemove) => {
    setCart((prevState) => prevState.filter((i) => i.id != idToRemove));
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      console.log(`CHECKOUT CART: `);
      cart.map((i) => console.log(i));
      alert("Thank you for shopping!");
      setCart([]);
    } else {
      alert("Cart empty.");
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-list-wrapper">
        <h2>Cart </h2>
        <hr />
        <div className="cart-list-items">
          {cart.length > 0 &&
            cart.map(({ id, name, price, image, quantity }, index) => (
              <div key={id} className="cart-item">
                <div className="cart-item-image">
                  <img
                    src={image ? image : "https://placehold.co/100x100"}
                    alt=""
                  />
                </div>
                <div className="cart-item-content">
                  <div className="cart-item-content-head">
                    <div className="cart-item-content-title">
                      <h3>{name}</h3>
                      <p>
                        ${price} <span>In Stock</span>
                      </p>
                    </div>
                    <div>
                      <h2>${price * quantity}</h2>
                    </div>
                  </div>
                  <div className="cart-item-content-tail">
                    <input
                      type="number"
                      value={quantity || 1}
                      onChange={(e) => handleQuantityChange(e, id)}
                    />
                    <button onClick={() => handleRemove(id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="checkout-list-wrapper">
        <h2>Delivery</h2>
        <hr />
        <div className="checkout-details">
          <p>
            Nearest delivery date:{" "}
            <span style={{ fontWeight: 600 }}>February 3rd, 2025</span>
          </p>
          <div className="checkout-total">
            <p>Total : </p>
            <h4>
              $
              {cart
                .reduce((acc, i) => acc + i.price * i.quantity, 0)
                .toFixed(2)}
            </h4>
          </div>
          <div className="checkout-buttons">
            <button onClick={handleCheckout}>Proceed to Checkout</button>
            <button onClick={() => setActiveTab(1)}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
