import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../offers/Offers";
import Newproduct from "../Newproduct.jsx/Newproduct";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
const Shop = () => {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-4 gap-4">
        <Popular />
      </div>

      <div className="mt-48">
        <Offers />
      </div>
      <h1 className="text-center">New Collction</h1>
      <div className="grid grid-cols-4 gap-4 ">
        <Newproduct />
      </div>
      <div className="newletter mt-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default Shop;
