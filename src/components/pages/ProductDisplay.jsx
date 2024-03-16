// import React from "react";
// import star_dull_icon from "../../Assets/star_dull_icon.png";
// import star_icon from "../../Assets/star_icon.png";

// const ProductDisplay = (props) => {
//   const { product } = props;
//   console.log("ima", product);
//   return (
//     <>
//       <div className="flex  mx-auto w-11/12 my-16">
//         <div className="left">
//           <div className="flex ">
//             <div className="image4">
//               <img className="h-36 mx-16 my-3" src={product.image} />
//               <img className="h-36 mx-16 my-4" src={product.image} />
//               <img className="h-36 mx-16 my-4" src={product.image} />
//               <img className="h-36  mx-16 my-4" src={product.image} />
//             </div>
//             <div className="image1"></div>
//             <img className="min-h-fullw-80 my-3" src={product.image} />
//           </div>
//         </div>
//         <div className="righ">
//           <h1 className="ml-16">{product.name}</h1>
//           <div className="ml-16 flex mt-4  md-4">
//             <img src={star_icon} />
//             <img src={star_icon} />
//             <img src={star_icon} />
//             <img src={star_dull_icon} />
//           </div>
//           <div className="mt-4">
//             <span className="ml-16 old-price line-through  mr-2">
//               {product.old_price}
//             </span>
//             {product.new_price}
//           </div>
//           <div>
//             <h1 className="ml-16 mt-6">Select Size </h1>
//             <div className="flex ml-16  mt-8">
//               <button className="mr-4 h-16 px-6 bg-blue-500   hover:bg-blue-700 text-white font-bold rounded">
//                 S
//               </button>
//               <button className="mr-4 h-16 px-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
//                 M
//               </button>
//               <button className="mr-4 h-16 px-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
//                 L
//               </button>
//               <button className="mr-4 h-16 px-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
//                 XL
//               </button>
//               <button className="h-16 px-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
//                 XXL
//               </button>
//             </div>
//             <div className="red ml-16 mt-16">
//               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-32 border border-red-500 rounded">
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDisplay;
import React, { useContext } from "react";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import star_icon from "../../Assets/star_icon.png";
import { ShopContext } from "../context/Shopcontex";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtocart } = useContext(ShopContext);
  console.log("ima", product);
  return (
    <>
      <div className="flex mx-auto w-11/12 my-16">
        <div className="left">
          <div className="flex">
            <div className="image4">
              <img
                className="h-36 mx-8 my-3"
                src={product.image}
                alt="Product Image"
              />
              <img
                className="h-36 mx-8 my-4"
                src={product.image}
                alt="Product Image"
              />
              <img
                className="h-36 mx-8 my-4"
                src={product.image}
                alt="Product Image"
              />
              <img
                className="h-36 mx-8 my-4"
                src={product.image}
                alt="Product Image"
              />
            </div>
            <div className="image1"></div>
            <img
              className="min-h-fullw-80 my-3"
              src={product.image}
              alt="Product Image"
            />
          </div>
        </div>
        <div className="righ mt-12">
          <h1 className="ml-8">{product.name}</h1>
          <div className="ml-8 flex mt-4 md-4">
            <img src={star_icon} alt="Star" />
            <img src={star_icon} alt="Star" />
            <img src={star_icon} alt="Star" />
            <img src={star_dull_icon} alt="Star" />
          </div>
          <div className="mt-4">
            <span className="ml-8 old-price line-through mr-2">
              {product.old_price}
            </span>
            {product.new_price}
          </div>
          <div>
            <h1 className="ml-8 mt-6">Select Size</h1>
            <div className="flex ml-8 mt-8">
              <button className="mr-2 h-16 flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                S
              </button>
              <button className="mr-2 h-16 flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                M
              </button>
              <button className="mr-2 h-16 flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                L
              </button>
              <button className="mr-2 h-16 flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                XL
              </button>
              <button className="h-16 flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                XXL
              </button>
            </div>
            <div className="red ml-8 mt-16">
              <button
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 border border-red-500 rounded"
                onClick={() => {
                  addtocart(product.id);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
