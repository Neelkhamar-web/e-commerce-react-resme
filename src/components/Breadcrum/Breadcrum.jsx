import React from "react";
import arrow_icon from "../../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="bread flex items-center">
      <span className="mr-1">HOME</span>
      <img src={arrow_icon} alt="Arrow" className="w-4 h-4 mr-1" />
      <span className="mr-1">SHOP</span>
      <img src={arrow_icon} alt="Arrow" className="w-4 h-4 mr-1" />
      <span className="mr-1">{product.category}</span>
      <img src={arrow_icon} alt="Arrow" className="w-4 h-4 mr-1" />
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrum;
