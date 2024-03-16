import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  console.log("d", props);
  return (
    <>
      <div>
        <div className="item mt-10 ">
          <Link to={`/product/${props.id}`}>
            <img
              onClick={() => window.scrollTo(0, 0)}
              src={props.image}
              alt=""
            />
          </Link>
          <p>{props.name}</p>
        </div>
        <div className="price">
          <div className="old-price">{props.old_price}</div>
          <div className="new-price">{props.new_price}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
