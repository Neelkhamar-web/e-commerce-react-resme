import React from "react";
import hero_image from "../../Assets/hero_image.png";
import hand_icon from "../../Assets/hand_icon.png";
import arrow from "../../Assets/arrow.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="first flex justify-around pt-32 ">
        <div className="left-hero font-family: 'Poppins', sans-serif w-1/2;">
          <h3 className=" font-family: 'Poppins' font-black text-2xl pt-20 ">
            New Arrivals Only
          </h3>
          <div>
            <div className="fle-1 flex w-1/2">
              <span className="pt-10 font-black text-6xl ">New</span>

              <img className="hand h-24 pt-5" src={hand_icon} />
            </div>
          </div>

          <br />
          <h1 className="font-black text-6xl ">Collections</h1>
          <br />
          <h1 className="font-black text-6xl pt-3 ">only</h1>
          <br />
          <button
            type="button"
            className="rounded-full h-10  sm:bg-red-800 w-72 mt-20"
          >
            <div className="flex">
              <div>
                <span className="text-center text-2xl items-center ml-3">
                  Latest Collction
                </span>
              </div>
              <div className="items-cente text-center  mx-2 pt-2">
                <img src={arrow} />
              </div>
            </div>
          </button>
        </div>
        <div className="right-hero  ">
          <img src={hero_image} />
        </div>
      </div>
    </>
  );
};

export default Hero;
