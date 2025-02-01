import React, { useEffect, useState } from "react";

const Admin = ({ products, setProducts }) => {
  const [input, setInput] = useState({ name: " ", price: 0 });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setProducts((prevState) => [...prevState, input]);
    setInput({ name: "", price: 0 });
  };

  const handleRemove = (indexToRemove) => {
    setProducts((prevState) =>
      prevState.filter((_, index) => index != indexToRemove)
    );
  };

  useEffect(() => {
    products.length > 0 && console.log("Updated Product List: ", products);
  }, [products]);

  return (
    <div>
      <div className="new-item">
        <div>
          <label>Item Name : </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Item Price : </label>
          <input
            type="text"
            name="price"
            value={input.price}
            onChange={handleInput}
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
      <div className="list-item">
        <h3>Item List</h3>
        {products.length > 0 &&
          products.map(({ name, price }, index) => (
            <div key={index}>
              {name} <span>{price}</span>
              <button onClick={() => handleRemove(index)}>X</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
