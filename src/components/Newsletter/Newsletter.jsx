import React from "react";
import "/src/components/Newsletter/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="Newsletter py-36">
      <h1 className="text-6xl text-center">Get exclusive Offer On Email.</h1>
      <p className="text-center mt-8">
        Subscribe To our Newletter and Stay update .
      </p>
      <div className="mt-8 flex">
        <div className="mx-auto">
          <input
            className="rounded-2xl py-3 text-black border-none"
            type="email"
            placeholder="enter ypur email"
            placeholderTextColor="text-black"
          />
          <button className="button text-blue-100 rounded-2xl px-10 py-3 -m-9">
            dark
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
