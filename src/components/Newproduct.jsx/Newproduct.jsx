import React from "react";
import new_collections from "../../Assets/new_collections";
import Item from "../Item/Item";

const Newproduct = () => {
  return (
    <>
      {new_collections.map((item, i) => (
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

export default Newproduct;
