import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontex";
import dropdown_icon from "../../Assets/dropdown_icon.png";
import Item from "../Item/Item";
const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log("h", props);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12</span>out of 36 product
        </p>
        <div className="shop-down">
          sort by <img src={dropdown_icon} />
        </div>
        <div className="shopcategory_pro grid grid-cols-3">
          {all_product.map((item, i) => {
            console.log(props.category);
            console.log(item.category);
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Shopcategory;
