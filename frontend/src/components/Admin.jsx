import React, { useEffect, useState } from "react";
import ImageFetch from "./ImageFetch";

const Admin = ({ products, setProducts }) => {
  const [input, setInput] = useState({
    id: "",
    name: " ",
    image: "",
    price: 0,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!input.name.trim() || !input.id.trim() || !input.price.trim()) {
      return;
    }

    const imageUrl = await ImageFetch(input.name); // fetching image using imagesearch and returning url.
    console.log(imageUrl);
    const newProduct = { ...input, image: imageUrl };
    setProducts((prevState) => [...prevState, newProduct]);
    setInput({ id: "", name: "", image: "", price: 0 });
  };

  const handleRemove = (indexToRemove) => {
    setProducts((prevState) =>
      prevState.filter((_, index) => index != indexToRemove)
    );
  };

  // useEffect(() => {
  //   products.length > 0 && console.log("Updated Product List: ", products);
  // }, [products]);

  return (
    <div>
      <div className="new-item">
        <div>
          <label>Item ID : </label>
          <input
            type="text"
            name="id"
            value={input.id}
            onChange={handleInput}
          />
        </div>
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
          products.map(({ id, name, price }, index) => (
            <div key={index}>
              <span>{id} : </span>
              {name} - <span>{price} </span>
              <button onClick={() => handleRemove(index)}>X</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
