import React from "react";
import exclusive_image from "../../Assets/exclusive_image.png";
import arrow from "../../Assets/arrow.png";
import "./Offers.css";
const Offers = () => {
  return (
    <>
      <div className="flexy flex justify-around">
        <div className="offers mt-36   ">
          <h1 className="text-6xl">Exclusive </h1>
          <br />

          <h1 className="text-6xl">Offers For You</h1>
          <h3>OMLY ON BEST PRODUCTS. </h3>
          <button
            type="button"
            className="rounded-full h-10  sm:bg-red-800 w-72 mt-20"
          >
            <div className="flex">
              <div>
                <span className="text-center text-2xl items-center ml-3">
                  CHACK NOW
                </span>
              </div>
            </div>
          </button>
        </div>
        <div className="right-offer">
          <img src={exclusive_image} />
        </div>
      </div>
    </>
  );
};

export default Offers;
