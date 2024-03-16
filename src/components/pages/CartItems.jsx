import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontex";
import cart_cross_icon from "../../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, addtocart, removetocart } =
    useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce((acc, product) => {
    if (cartItems[product.id] > 0) {
      return acc + product.new_price * cartItems[product.id];
    }
    return acc;
  }, 0);

  return (
    <div className="cart-items">
      <div className="cart-main flex pl-16">
        <p className="pl-16">Product</p>
        <p className="pl-80">Title</p>
        <p className="pl-80 ml-2">Price</p>
        <p className="pl-16 ">Quantity</p>
        <p className="pl-16">Total</p>
        <p className="pl-16">Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className="mt-8" key={product.id}>
              <div className="cart_item_pro flex">
                <img
                  className="h-24 ml-32"
                  src={product.image}
                  alt={product.name}
                />
                <p className="ml-24">{product.name}</p>
                <p className="ml-32">{product.new_price}</p>
                <p className="ml-24"> {cartItems[product.id]}</p>
                <p className="ml-28 pr-1">
                  {product.new_price * cartItems[product.id]}
                </p>
                <img
                  className="ml-24 h-4 cursor-pointer"
                  onClick={() => {
                    removetocart(product.id);
                  }}
                  src={cart_cross_icon}
                  alt="Remove from cart"
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cart_item_down mt-8">
        <div className="mt-6">
          <p className="mb-2">If you have a promo code, please enter here:</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter promo code"
              className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md mt-16">
          <h1 className="text-lg font-semibold mb-4">Cart Total</h1>
          <div className="border-b border-gray-300 pb-4 mb-4">
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
          </div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <h3>${subtotal.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      {/* Cart Summary */}
    </div>
  );
};

export default CartItems;
