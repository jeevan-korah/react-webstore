import React, { useState } from "react";
import Admin from "./Admin";
import Client from "./Client";

const MainPanel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState([]);

  const tabs = [
    {
      name: "Admin",
      component: Admin,
    },
    {
      name: "Client",
      component: Client,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div>
      <div className="tabs-head-wrap">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="tabs-head"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tabs-body-wrap">
        <ActiveTabComponent products={products} setProducts={setProducts} />
      </div>
    </div>
  );
};

export default MainPanel;
