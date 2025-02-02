import React, { useState } from "react";
import Admin from "./Admin";
import Client from "./Client";
import Cart from "./Cart";
import ImageSearch from "./ImageSearch";

const MainPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const tabs = [
    {
      name: "Admin",
      component: Admin,
    },
    {
      name: "Client",
      component: Client,
    },
    {
      name: "Cart",
      component: Cart,
    },
    {
      name: "Image Search",
      component: ImageSearch,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div>
      <div className="tabs-head-wrap">
        {tabs.map((t, index) => (
          <div
            key={index}
            className={`tabs-head ${activeTab == index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tabs-body-wrap">
        <ActiveTabComponent
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
};

export default MainPanel;
