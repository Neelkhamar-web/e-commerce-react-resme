import React from "react";
import data_product from "../../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <>
      {data_product.map((item, i) => (
        <Item
          key={i}
          id={item.id}
          image={item.image}
          name={item.name}
          old_price={item.old_price}
          new_price={item.new_price}
        />
      ))}
    </>
  );
};

export default Popular;
