import React, { createContext, useState } from "react";
import all_product from "../../Assets/all_product";

export const ShopContext = createContext(null);

const getdefault_items = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartitems] = useState(getdefault_items);

  const addtocart = (itemid) => {
    setCartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    console.log(cartItems);
  };
  const removetocart = (itemid) => {
    setCartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  console.log("icartItems", cartItems);
  const getTotalCartItems = () => {
    let totalItems = 0;
    console.log("ssd", cartItems);
    for (const item in cartItems) {
      console.log("ss", cartItems);
      console.log("tm", item);
      if (cartItems[item] > 0) {
        console.log("ss", cartItems[item]);
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contexvalues = {
    all_product,
    cartItems,
    addtocart,
    removetocart,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contexvalues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
