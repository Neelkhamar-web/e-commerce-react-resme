import React from "react";
import logo from "../../Assets/logo.png";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-logo">
      <div className="flex ">
        <div className="mx-auto flex ">
          <img src={logo} />
          <h1 className="mt-8 ml-5 text-5xl">SHOPPER</h1>
        </div>
      </div>
      <div className="mx-auto mt-8">
        <ul className="flex ml-80 pl-80">
          <li>Company</li>
          <li className="pl-6"> Product</li>
          <li className="pl-6">Office</li>
          <li className="pl-6">About</li>
          <li className="pl-6">Contact </li>
        </ul>
      </div>

      <div className="mx-auto mt-8">
        <ul className="flex ml-96 pl-96">
          <li>
            <CiInstagram />
          </li>
          <li className="pl-6">
            <FaTwitter />
          </li>
          <li className="pl-6">
            <FaPinterest />
          </li>
        </ul>
        <br />
        <hr />
        <br />
      </div>
      <h5 className="text-center">copyrights @ 2023-All right Reserved. </h5>
    </div>
  );
};

export default Footer;
