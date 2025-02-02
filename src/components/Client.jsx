import React, { useEffect } from "react";

const Client = ({ products, cart, setCart }) => {
  const updateCart = (prodId) => {
    const productToAdd = products.find((product) => product.id === prodId); //using find, because one product to find. filter for multiple products.
    productToAdd.quantity = 1;

    if (productToAdd && !cart.includes(productToAdd)) {
      setCart((prevState) => [...prevState, productToAdd]);
    }
  };
  // useEffect(() => {
  //   cart.length > 0 && console.log("Updated Cart List: ", cart);
  // }, [cart]);
  return (
    <div>
      <div className="item-list-wrapper">
        {products.length > 0 &&
          products.map(({ name, price, image, id }, index) => (
            <div className="item" key={index}>
              <div className="item-image">
                <img
                  src={image ? image : "https://placehold.co/200x200"}
                  alt=""
                  className="item-image-com"
                />
              </div>
              <div className="item-content">
                <h2>{name}</h2>
                <p>${price}</p>
              </div>
              <div className="item-button">
                <button onClick={() => updateCart(id)}>Add to cart</button>
              </div>
            </div>
          ))}
        {products.length < 1 && <div>No items in store</div>}
      </div>
    </div>
  );
};

export default Client;
