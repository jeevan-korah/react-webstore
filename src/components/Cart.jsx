import React, { useEffect } from "react";

const Cart = ({ cart, setCart }) => {
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

  return (
    <div className="cart-container">
      <div className="cart-list-wrapper">
        <h2>Cart </h2>
        <hr />
        <div className="cart-list-items">
          {cart.length > 0 &&
            cart.map(({ id, name, price, quantity }, index) => (
              <div key={id} className="cart-item">
                <div className="cart-item-image">
                  <img src="https://placehold.co/100x100" alt="" />
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

          {/* <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://placehold.co/100x100" alt="" />
            </div>
            <div className="cart-item-content">
              <div className="cart-item-content-head">
                <div className="cart-item-content-title">
                  <h3>Red Bull Shoes</h3>
                  <p>
                    $12.99 <span>In Stock</span>
                  </p>
                </div>
                <div>
                  <h2>$12.99</h2>
                </div>
              </div>
              <div className="cart-item-content-tail">
                <input type="number" name="" id="" />
                <button>Delete</button>
              </div>
            </div>
          </div> */}
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
            <button>Proceed to Checkout</button>
            <button>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
