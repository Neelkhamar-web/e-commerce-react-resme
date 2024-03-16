import React, { useContext } from "react";
import Popular from "../Popular/Popular";
import { ShopContext } from "../context/Shopcontex";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrum/Breadcrum";
import ProductDisplay from "./ProductDisplay";
import ProductDescription from "./ProductDescription";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  console.log("pikina", productId);
  const product = all_product.find((e) => e.id === Number(productId));
  console.log("poo", product);
  return (
    <>
      {/* <h1 className="text-center mt-14">Speccial For womens</h1> */}

      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <ProductDescription />
    </>
  );
};

export default Product;
