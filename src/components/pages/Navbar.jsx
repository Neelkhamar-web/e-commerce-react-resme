import React, { useContext, useState } from "react";
import logo from "/src/Assets/logo.png";
import cart from "/src/Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Shopcontex";

const Navbar = () => {
  const [name, setName] = useState(""); // State to track selected item
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="Navbar flex items-center justify-around m-3 shadow-sm">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="itemspro">
        <ul className="list_nav inline-flex">
          <li
            className="list_nav inline m-3"
            onClick={() => {
              setName("Shop");
            }}
          >
            <Link to="/">Shop</Link>
            {name === "Shop" && <hr className="h-2 bg-black pt-4" />}
          </li>
          <li
            className="list_nav inline m-3"
            onClick={() => {
              setName("Men");
            }}
          >
            <Link to="/Mens">Men</Link>
            {name === "Men" && <hr className="h- bg-black pt-4" />}
          </li>
          <li
            className="list_nav1 inline m-3 "
            onClick={() => {
              setName("Women");
            }}
          >
            <Link to="/Womens">Women</Link>
            {name === "Women" && <hr className="h-1 bg-black pt-4 " />}
          </li>
          <li
            className="list_nav inline m-3"
            onClick={() => {
              setName("Kids");
            }}
          >
            <Link to="/Kids">Kids</Link>
            {name === "Kids" && <hr className="h-2 bg-black pt-4" />}
          </li>
        </ul>
      </div>
      <div className="cart flex items-center">
        <Link to="/login">
          <button
            type="button"
            className="bg-blue-500  rounded-xl h-10 w-36 mx-11 "
            onClick={() => setName("link")}
          >
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="Cart" />
        </Link>
        <span className=".flex justify-center text-black-800 -mt-9 -ml-3 text-lg bg-blue-400 rounded-full w-5 text-center ">
          {getTotalCartItems()}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
